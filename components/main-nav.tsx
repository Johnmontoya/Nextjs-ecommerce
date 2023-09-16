import Link from "next/link"
import { Icons } from "./icons"
import { siteConfig } from "@/config/site"

export function MainNav() {
    return (
      <div className="flex gap-6 md:gap-10">
        <Link href="/" className="flex items-center space-x-2">
          Logo
          <span className="inline-block text-xl font-bold">
            {siteConfig.name}
          </span>
        </Link>
      </div>
    )
  }