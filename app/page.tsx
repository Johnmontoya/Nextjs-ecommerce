import { ProductFilters } from "@/components/product/product-filters";
import { ProductGrid } from "@/components/product/product-grid";
import { ProductSort } from "@/components/product/product-sort";
import { SanityProduct } from "@/config/inventory";
import { siteConfig } from "@/config/site";
import { client } from "@/lib/clientSanity";
import { seedSanityData } from "@/lib/seed";
import { cn } from "@/lib/utils";
import { groq } from "next-sanity";
import Image from "next/image";

interface Props {
  searchParams: {
    date?: string
    price?: string
    color?: string
    category?: string
    size?: string
    search?: string
  }
}

export default async function Home({searchParams}: Props) {
  //await seedSanityData() ejecutar el seed
  const { date = "desc", price, color, category, size, search } = searchParams
  const priceOrder = price ? `| order(price ${price})` : ""
  const dateOrder = date ? `| order(_createdAt ${date})` : ""
  const order = `${priceOrder}${dateOrder}`

  const productFiltrer = `_type == "product"`
  const colorFiltrer = color ? `&& "${color}" in colors` : ""
  const categoryFiltrer = category ? `&& "${category}" in categories` : ""
  const sizeFiltrer = size ? `&& "${size}" in sizes` : ""
  const searchFilter = search ? `&& name match "${search}"` : ""
  const filter = `*[${productFiltrer}${colorFiltrer}${categoryFiltrer}${sizeFiltrer}${searchFilter}]`

  const products = await client.fetch<
    SanityProduct[]
  >(groq`${filter} ${order} {
    _id,
    _createdAt,
    name,
    sku,
    images,
    currency,
    price,
    description,
    "slug": slug.current
  }`);
  
  return (
    <div>
      <div className="px-4 pt-20 text-center">
        <h1 className="text-4xl font-extrabold tracking-normal">
          {siteConfig.name}
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-base">
          {siteConfig.description}
        </p>
      </div>
      <div>
        <main className="mx-auto max-w-6xl px-6">
          <div className="flex items-center justify-between border-b border-gray-200 pb-4 pt-24 dark:border-gray-800">
            <h1 className="text-xl font-bold tracking-tight sm:text-2xl">
              {products.length} result {products.length === 1 ? "" : "5"}
            </h1>
            {/* Product Sort */}
            <ProductSort />
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>
            <div
              className={cn(
                "grid grid-cols-1 gap-x-8 gap-y-10",
                products.length > 0
                  ? "lg:grid-cols-4"
                  : "lg:grid-cols-[1fr_3fr]"
              )}
            >
              <div className="hidden lg:block">
                {/* Product filters */}
                <ProductFilters />
              </div>
              {/* Product grid */}
              <ProductGrid products={products}/>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
