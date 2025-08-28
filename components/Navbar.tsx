"use client"

import { UserButton, useUser } from "@clerk/nextjs"
import { User } from "@clerk/nextjs/server"
import { CircleUserRound, Menu, ShoppingCart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const Navbar = () => {
  const { user } = useUser()
  const [dropdownMenu, setDropdownMenu] = useState(false);
  return (
    <div className="sticky top-0 z-10 py-2 px-10 flex gap-2 justify-between items-center bg-white max-sm:px-2">
    <Link href={"/"}>
    <Image src={"/logo.png"} alt="Logo" width={130} height={100} className="max-sm:w-24 max-sm:h-12">
    </Image>
    </Link>

    <div>
    <Link href={"/"}>Home</Link>
    </div>
    <div className="relative flex gap-3 items-center">
    <Link href={"/cart"} 
    className="flex items-center gap-3 border rounded-lg px-2 py-1 hover:bg-black hover:text-white max-md:hidden">
    <ShoppingCart/>
    <p className="text-base-bold">Cart (0)</p>
    </Link>
    {user && <Menu 
    className="cursor-pointer" 
    onClick={() => setDropdownMenu(!dropdownMenu)}
    />}
    {user && dropdownMenu && (
    <div className="absolute top-12 right-5 flex flex-col gap-4 p-3 rounded-lg border bg-white text-base-bold">
      <Link href={"/wishlist"} className="hover:text-red-1">Wishlist</Link>
      <Link href={"/orders"} className="hover:text-red-1">Orders</Link>
    </div>
    )}
    {user ? (
     <UserButton afterSignOutUrl="/sign-in/"/>
     ) : (
     <Link href={"/sign-in"}>
     <CircleUserRound/>
     </Link>)}
    </div>
    </div>
  )
}

export default Navbar
