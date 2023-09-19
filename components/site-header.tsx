"use client"
import Link from "next/link"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { MainNav } from "./main-nav";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Icons } from "./icons";
import { ThemeToggle } from "./theme-toggle";
import { useShoppingCart } from "use-shopping-cart";

export function SiteHeader() {
  const pathname = usePathname();
  const router = useRouter()
  const searchParams = useSearchParams()
  const { cartCount } = useShoppingCart()
  const defaultSearchQuery = searchParams.get('search') ?? ""
  
  if(pathname.startsWith("/studio")) return null

  function onsubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const searchQuery = formData.get("search")
    router.replace(`/?search=${searchQuery}`)
  }
  
    return (
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between space-x-4 px-6 sm:space-x-0">
          <MainNav />
          <form onSubmit={onsubmit} className="hidden items-center lg:inline-flex">
            <Input
              id="search"
              name="search"
              type="search"
              autoComplete="off"
              placeholder="Search products..."
              className="h-9 lg:w-[300px]"
              defaultValue={defaultSearchQuery}
            />
          </form>
          <div className="flex items-center space-x-1">
            <Link href="/cart">
              <Button size="sm" variant="ghost">
                <Icons.ShoppingCart className="h-5 w-5" />
                <span className="ml-2 text-sm font-bold">{cartCount}</span>
                <span className="sr-only">Cart</span>
              </Button>
            </Link>
            <ThemeToggle />
            {process.env.NODE_ENV === 'development' && (
              <Link href={'/studio'}>
                <Button size={"sm"} variant={"ghost"}>
                  <Icons.Edit className="h-5 w-5" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </header>
    )
  }