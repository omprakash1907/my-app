import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function TopHeader() {
  return (
    <div className="bg-[#004502] text-white text-sm">
      <div className="container mx-auto px-4 flex justify-between items-center h-[52px]">
        {/* Left - Main Account Dropdown */}
        <div className="flex items-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="text-white px-2 py-1 flex items-center gap-1 hover:bg-white/10 text-base"
              >
                Main Account <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              className="bg-[#004502] border border-white/20 text-white"
            >
              <DropdownMenuItem className="hover:bg-white/10 focus:bg-white/10">
                Account Settings
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-white/10 focus:bg-white/10">
                Billing
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-white/10 focus:bg-white/10">
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Center - Quick Links */}
        <div className="hidden md:flex items-center space-x-3">
          {["Quick link 1", "Quick link 2", "Quick link 3", "Quick link 4"].map(
            (link, idx) => (
              <Button
                key={idx}
                variant="ghost"
                className="text-white text-sm hover:bg-white/10 px-2 py-1 transition-colors"
              >
                {link}
              </Button>
            )
          )}
        </div>

        {/* Right - Accessibility */}
        <div className="flex items-center">
          <Button
            variant="ghost"
            className="text-white hover:bg-white/10 px-2 py-1 flex items-center gap-2"
          >
            <span>Accessibility</span>
            <svg
              width="18"
              height="20"
              viewBox="0 0 18 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 0C10.1 0 11 0.9 11 2C11 3.1 10.1 4 9 4C7.9 4 7 3.1 7 2C7 0.9 7.9 0 9 0ZM17 7H12V19C12 19.55 11.55 20 11 20C10.45 20 10 19.55 10 19V14H8V19C8 19.55 7.55 20 7 20C6.45 20 6 19.55 6 19V7H1C0.45 7 0 6.55 0 6C0 5.45 0.45 5 1 5H17C17.55 5 18 5.45 18 6C18 6.55 17.55 7 17 7Z"
                fill="white"
              /> 
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
}
