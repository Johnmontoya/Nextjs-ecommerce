"use client";

import Image from "next/image";
import Link from "next/link";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Icons } from "../icons";
import { formatCurrencyString, useShoppingCart } from "use-shopping-cart";
import { product } from "@/sanity/schemas/product-schema";
import { CartItemsEmpty } from "./cart-items-empty";
import { urlForImage } from "@/sanity/image";
import { getSizeName } from "@/lib/utils";
import { Product } from "use-shopping-cart/core";
import toast from "react-hot-toast";

export function CartItems() {
  const { cartDetails, setItemQuantity, removeItem } = useShoppingCart();
  const cartItems = Object.entries(cartDetails!).map(([_, product]) => product);
  function removeCartItem(product: Product) {
    removeItem(product._id)
    toast.success(`${product.name} removed`)
  }

  if (cartItems.length === 0) return <CartItemsEmpty />;

  return (
    <ul
      role="list"
      className="divide-y divide-gray-200 border-y border-gray-200 dark:divide-gray-500 dark:border-gray-500"
    >
      {cartItems.map((product, productIdx) => (
        <li key={product.id} className="flex py-6 sm:py-10">
          <div className="shrink-0">
            <Image
              alt={"alt"}
              src={urlForImage(product.images[0]).url()}
              width={200}
              height={200}
              className="h-24 w-24 rounded-md border-2 border-gray-200 object-cover object-center dark:border-gray-800 sm:h-48 sm:w-48"
            />
          </div>

          <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
            <div className="relative justify-between pr-9 sm:flex sm:gap-x-6 sm:pr-0">
              <div>
                <div className="flex justify-between">
                  <h3 className="text-sm">
                    <Link
                      href={`/products/${product.slug}`}
                      className="font-medium"
                    >
                      {product.name}
                    </Link>
                  </h3>
                </div>
                <p className="mt-1 text-sm font-medium">
                  {formatCurrencyString({
                    value: product.price,
                    currency: product.currency,
                  })}
                </p>
                <p className="mt-1 text-sm font-medium">
                  Size: {/* @ts-ignore */}
                  <strong>{getSizeName(product.product_data?.size)}</strong>
                </p>
              </div>

              <div className="mt-4 sm:mt-0 sm:pr-9">
                <label htmlFor={`quantity-${productIdx}`} className="sr-only">
                  Quantity, {product.name}
                </label>
                <Input
                  id={`quantity-${productIdx}`}
                  name={`quantity-${productIdx}`}
                  type="number"
                  className="w-16"
                  min={1}
                  max={10}
                  value={product.quantity}
                  onChange={event => setItemQuantity(product._id, Number(event.target.value))}
                />
                <div className="absolute right-0 top-0">
                  <Button
                    variant="ghost"
                    type="button"
                    className="-mr-2 inline-flex p-2"
                    onClick={() => removeCartItem(product)}
                  >
                    <span className="sr-only">Remove</span>
                    <Icons.X className="h-5 w-5" aria-hidden="true" />
                  </Button>
                </div>
              </div>
            </div>

            <p className="mt-4 flex space-x-2 text-sm">
              <Icons.Clock className="h-5 w-5 shrink-0" aria-hidden="true" />
              <span>Ships in 1 week</span>
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
