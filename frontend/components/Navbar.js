"use client";
import { useState } from "react";
import { Menu, Search, SunMoon, User, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CategoryDropdown from "@/components/CategoryDropdown";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full border-b shadow-sm bg-white dark:bg-black sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 py-2 max-w-7xl mx-auto">
        {/* Left: Logo + Mobile Menu Icon */}
        <div className="flex items-center gap-2">
          <Button size="icon" variant="ghost" onClick={() => setOpen(!open)} className="md:hidden">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
          <span className="text-xl font-bold">BlogSite</span>
        </div>

        {/* Center: Desktop Nav */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="flex gap-6">
            <NavigationMenuItem>
              <NavigationMenuLink href="/" className="hover:underline">
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/blogs" className="hover:underline">
                Blogs
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              {/* <NavigationMenuLink href="/categories" className="hover:underline">
                Categories
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem> */}
              <NavigationMenuLink href="/about" className="hover:underline">
                About
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center">
            <Input type="text" placeholder="Search blogs..." className="h-8 w-40" />
            <Button size="icon" variant="ghost" className="ml-1">
              <Search className="h-4 w-4" />
            </Button>
          </div>
          <Button size="icon" variant="ghost">
            <SunMoon className="h-5 w-5" />
          </Button>
          <Button size="icon" variant="ghost">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-4 py-2 space-y-2 bg-white dark:bg-black border-t">
          <a href="/" className="block hover:underline">Home</a>
          <a href="/blogs" className="block hover:underline">Blogs</a>
          <a href="/categories" className="block hover:underline">Categories</a>
          <a href="/about" className="block hover:underline">About</a>
        </div>
      )}
    </nav>
  );
}
