
'use client'
import { ChevronDown, Phone, Search } from "lucide-react"
import Button from "../ui/button"
import Link from "next/link"
import Image from "next/image"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { useState } from "react"
import { SidebarCloseMenuIcon, SidebarOpenMenuIcon } from "./icons/AllIcons"


const MobileMenuItems = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className="">
            <Sheet open={open} onOpenChange={() => setOpen(!open)}>
                <SheetTrigger asChild>
                    <Button className=" flex items-start" variant="icon" icon={!open ? <SidebarCloseMenuIcon /> : <SidebarOpenMenuIcon />} ></Button>
                </SheetTrigger>
                <SheetContent side="left" >
                 
                    <div className="max-w-7xl   mx-auto text-left w-full px-2" >
                        <p className="text-lg font-semibold">মেনু</p>
                    </div>

                </SheetContent>
            </Sheet>
        </div>
    )
}







const Navbar = () => {
    return (
    <div className="w-full bg-oc-white-500 fixed top-0 left-0 z-30">
            <header className="w-full bg-white border-b border-gray-200">
            <div className="oc-commonContainer  px-2   lg:px-8">
                <div className="flex  items-center justify-between h-16">
                    <div className="flex items-center gap-3 ">
                        <div className="block  xl:hidden">
                            <MobileMenuItems />
                        </div>
                        <Link href={'/'} className="flex-shrink-0">
                            <Image alt="10ms" data-original-src="https://cdn.10minuteschool.com/images/svg/10mslogo-svg.svg" width="100" height="27" decoding="async" data-nimg="1" src="https://cdn.10minuteschool.com/images/svg/10mslogo-svg.svg" />
                        </Link>

                    </div>
                    {/* Search Bar */}
                    <div className="flex-1 max-w-lg mx-8 hidden sm:block">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                            <input
                                type="text"
                                placeholder="ক্লাস কোর্স, কিংবা স্কুল প্রোগ্রাম সার্চ করুন..."
                                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-full focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            />
                        </div>
                    </div>

                    {/* Navigation Menu */}
                    <nav className="hidden whitespace-nowrap xl:flex items-center space-x-6 px-5">
                        <div className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 cursor-pointer">
                            <span>ক্লাস ৬-১২</span>
                            <ChevronDown className="w-4 h-4" />
                        </div>
                        <div className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 cursor-pointer">
                            <span>স্কিলস</span>
                            <ChevronDown className="w-4 h-4" />
                        </div>
                        <div className="text-gray-700 hover:text-gray-900 cursor-pointer">ভর্তি পরীক্ষা</div>
                        <div className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 cursor-pointer">
                            <span>অনলাইন ব্যাচ</span>
                            <ChevronDown className="w-4 h-4" />
                        </div>
                        <div className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 cursor-pointer">
                            <span>ইংলিশ সেন্টার</span>
                            <ChevronDown className="w-4 h-4" />
                        </div>
                        <div className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 cursor-pointer">
                            <span>আরো</span>
                            <ChevronDown className="w-4 h-4" />
                        </div>
                    </nav>

                    {/* Right Side Items */}
                    <div className="flex items-center space-x-4">
                        {/* Language Selector */}
                        <div className="sm:hidden flex items-center space-x-1 text-gray-700 cursor-pointer">
                            <Search className=" text-gray-400 w-4 h-4" />
                        </div>
                        <div className="sm:flex hidden items-center space-x-1 text-gray-700 cursor-pointer">
                            <span className="text-sm font-medium">EN</span>
                        </div>

                        {/* Phone Number */}
                        <div className="flex items-center space-x-1 text-green-600">
                            <Phone className="w-4 h-4" />
                            <span className="text-sm font-medium hidden sm:block">16910</span>
                        </div>

                        {/* Login Button */}
                        <Button label="লগ-ইন">

                        </Button>
                    </div>
                </div>
            </div>
        </header>
    </div>
    )
}
export default Navbar