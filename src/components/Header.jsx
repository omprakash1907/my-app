"use client"

import { useState } from "react"
import { Search, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-[#004502] border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Main Account Dropdown */} 
          <div className="flex items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-sm font-medium flex items-center gap-1">
                  Main Account <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem>Account Settings</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Quick Links */}
          <div className="hidden md:flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="text-xs">
              Quick link 1
            </Button>
            <Button variant="ghost" size="sm" className="text-xs">
              Quick link 2
            </Button>
            <Button variant="ghost" size="sm" className="text-xs">
              Quick link 3
            </Button>
            <Button variant="ghost" size="sm" className="text-xs">
              Quick link 4
            </Button>
          </div>

          {/* Accessibility */}
          <div className="flex items-center">
            <Button variant="ghost" size="icon">
              <span className="sr-only">Accessibility</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="m16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z" />
              </svg>
            </Button>
          </div>
        </div>

        {/* Second Row */}
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center space-x-4">
            <Checkbox id="all" />
            <Button variant="ghost" size="sm">
              View
            </Button>
            <Button variant="ghost" size="sm">
              Edit/Edit
            </Button>
            <Button variant="ghost" size="sm">
              Calculate All
            </Button>
            <Button variant="ghost" size="sm">
              PO
            </Button>
          </div>

          <div className="flex items-center space-x-2">
            <div className="relative">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input className="pl-8 h-8 w-40" placeholder="Search..." />
            </div>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
              Save
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
