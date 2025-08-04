"use client";
import { useState } from "react";
import { Menu, Search, SunMoon, User, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ModeToggle } from "@/components/theme-btn";
import AboutSection from "./AboutSection";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav  
    // style={{ backgroundColor: '#861f41' }}
    className="w-full border-b backdrop:blur shadow-sm bg-white dark:bg-black sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 py-2 max-w-7xl mx-auto">
        {/* Left: Logo + Mobile Menu Icon */}
        <div className="flex items-center gap-2">
          <Button size="icon" variant="ghost" onClick={() => setOpen(!open)} className="md:hidden">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
          <img src ="data:image/png;base64,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"
           alt="Logo" className="h-10 w-auto transform transition-transform duration-300 ease-in-out hover:scale-110" />
          <span className="text-xl font-bold ">   BlogSite</span>
        </div>

        {/* Center: Desktop Nav */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="flex gap-6">
            <NavigationMenuItem>
              <NavigationMenuLink href="/" className=" transition-transform duration-300 ease-in-out hover:scale-110 text-pink border-b-pink-800  hover:text-pink-800">
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/blog" className=" transition-transform duration-300 ease-in-out hover:scale-110   hover:text-pink-800">
                Blogs
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              {/* <NavigationMenuLink href="/categories" className="hover:underline">
                Categories
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem> */}
              <NavigationMenuLink href="#about" className= "transition-transform duration-300 ease-in-out hover:scale-110 hover:text-pink-800">
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
          {/* <Button size="icon" variant="ghost">
            <SunMoon className="h-5 w-5" />
          </Button> */}

        {/* change theme button */}
        <ModeToggle /> 

        {/* login signup  */}
        <Link href="/login">
          <Button size="icon" variant="ghost">
            <User className="h-5 w-5" />
          </Button>
        </Link>

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
