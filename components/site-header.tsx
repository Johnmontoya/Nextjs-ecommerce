"use client"
import Link from "next/link"
import { MainNav } from "./main-nav";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Icons } from "./icons";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader() {
    return (
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between space-x-4 px-6 sm:space-x-0">
          <MainNav />
          <form className="hidden items-center lg:inline-flex">
            <Input
              id="search"
              name="search"
              type="search"
              autoComplete="off"
              placeholder="Search products..."
              className="h-9 lg:w-[300px]"
            />
          </form>
          <div className="flex items-center space-x-1">
            <Link href="/cart">
              <Button size="sm" variant="ghost">
                <Icons.ShoppingCart className="h-5 w-5" />
                <span className="ml-2 text-sm font-bold">0</span>
                <span className="sr-only">Cart</span>
              </Button>
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </header>
    )
  }