import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logo from '@/assets/image/logo.png'
import { X, Menu, Search } from "lucide-react";

export default function MainHeader() {
  const [showSearch, setShowSearch] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = ["Plans", "Benefits", "Calculate ROI", "FAQ"];

  return (
    <>
      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-white z-50 shadow-xl transform transition-transform duration-300 ease-in-out lg:hidden ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <img src={logo} alt="logo" className="h-8" />
          <button 
            onClick={() => setMobileMenuOpen(false)}
            className="p-1 rounded-md hover:bg-gray-100"
          >
            <X className="h-5 w-5 text-gray-600" />
          </button>
        </div>
        <div className="p-4">
          <div className="space-y-4">
            {navItems.map((item) => (
              <Button
                key={item}
                variant="ghost"
                className="w-full justify-start text-gray-700 hover:bg-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </Button>
            ))}
          </div>
          <div className="mt-8 space-y-4">
            <Button variant="outline" className="w-full border-[#00205B] text-[#00205B]">
              Log in
            </Button>
            <Button variant="ghost" className="w-full text-gray-700">
              عربى
            </Button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="backdrop-blur-lg bg-white/10 border-gray-300 sticky top-0 z-30">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center h-16">
          {/* Left Section - Logo and Navigation */}
          <div className="flex items-center space-x-4 lg:space-x-8">
            {/* Logo */}
            <div className="flex items-center justify-center">
              <img src={logo} alt="logo" className="h-8" />
            </div>

            {/* Navigation Buttons - Desktop */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <Button
                  key={item}
                  variant="ghost"
                  size="sm"
                  className="text-base text-[#333333] hover:text-[#00205B] hover:bg-[#00205B]/10 px-3 py-1.5 transition-colors"
                >
                  {item}
                </Button>
              ))}
            </div>
          </div>

          {/* Right Section - Actions */}
          <div className="flex items-center space-x-2 lg:space-x-4">
            {/* Search with Slide Animation - Hidden on mobile */}
            <div className="relative hidden sm:flex items-center">
              {/* Search Icon Button (always visible) */}
              <Button
                variant="ghost"
                size="icon"
                className={`text-gray-700 hover:text-[#00205B] transition-all ${
                  showSearch ? "opacity-0 w-0" : "opacity-100 w-auto"
                }`}
                onClick={() => setShowSearch(true)}
              >
                <Search className="h-5 w-5" />
              </Button>

              {/* Animated Search Input */}
              <div
                className={`absolute right-0 flex items-center transition-all duration-300 ${
                  showSearch
                    ? "translate-x-0 opacity-100 w-40"
                    : "translate-x-10 opacity-0 w-0"
                }`}
              >
                <div className="absolute left-3">
                  <Search className="h-4 w-4 text-[#00205B]" />
                </div>
                <Input
                  autoFocus
                  onBlur={() => setShowSearch(false)}
                  className="pl-10 h-8 border border-gray-300 focus-visible:ring-1 focus-visible:ring-[#00205B] focus-visible:border-transparent rounded-lg"
                  placeholder="Search..."
                />
              </div>
            </div>

            {/* Language - Always visible */}
            <Button
              variant="ghost"
              size="sm"
              className="text-sm text-gray-700 hover:text-[#00205B] px-3 py-1.5 transition-colors"
            >
              عربى
            </Button>

            {/* Log in - Always visible */}
            <Button
              variant="outline"
              className="border-2 border-[#00205B] text-[#00205B] hover:bg-[#00205B]/10 hover:text-[#00205B] rounded-lg font-medium px-4 py-1.5 text-sm transition-colors"
            >
              Log in
            </Button>

            {/* Mobile Menu Button - Moved to right side */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}