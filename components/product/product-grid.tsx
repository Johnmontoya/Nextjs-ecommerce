"use client"
import Image from "next/image"
import Link from "next/link"
import { Icons } from "../icons"

export function ProductGrid() {
    if ([].length === 0) {
      return (
        <div className="mx-auto grid h-40 w-full place-items-center rounded-md border-2 border-dashed bg-gray-50 py-10 text-center dark:bg-gray-900">
          <div>
            <Icons.XCircle className="mx-auto h-10 w-10 text-gray-500 dark:text-gray-200" />
            <h1 className="mt-2 text-xl font-bold tracking-tight text-gray-500 dark:text-gray-200 sm:text-2xl">
              No products found
            </h1>
          </div>
        </div>
      )
    }
  
    return (
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 lg:col-span-3 lg:gap-x-8">
        {[].map((product) => (
          <Link key={"key"} href={`/products/slug`} className="group text-sm">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg border-2 border-gray-200 bg-gray-100 group-hover:opacity-75 dark:border-gray-800">
              <Image
                src={"src"}
                alt={"name"}
                width={0}
                height={0}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <h3 className="mt-4 font-medium">Name</h3>
            <p className="mt-2 font-medium">Price</p>
          </Link>
        ))}
      </div>
    )
  }