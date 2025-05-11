import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function MainHeader() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="backdrop-blur-lg bg-white/10 border-gray-300 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center h-16">
        {/* Left Section - Logo and Navigation */}
        <div className="flex items-center space-x-8">
          {/* Logo Placeholder */}
          <div className="w-10 h-10 bg-[#00205B] rounded-md flex items-center justify-center text-white font-bold">
            Logo
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center space-x-1">
            {["Plans", "Benefits", "Calculate ROI", "FAQ"].map((item) => (
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
        <div className="flex items-center space-x-4">
          {/* Search with Slide Animation */}
          <div className="relative flex items-center">
            {/* Search Icon Button (always visible) */}
            <Button
              variant="ghost"
              size="icon"
              className={`text-gray-700 hover:text-[#00205B] transition-all ${
                showSearch ? "opacity-0 w-0" : "opacity-100 w-auto"
              }`}
              onClick={() => setShowSearch(true)}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.4999 11H11.7099L11.4299 10.73C12.6299 9.33 13.2499 7.42 12.9099 5.39C12.4399 2.61 10.1199 0.39 7.31989 0.05C3.08989 -0.47 -0.470107 3.09 0.0498932 7.32C0.389893 10.12 2.60989 12.44 5.38989 12.91C7.41989 13.25 9.32989 12.63 10.7299 11.43L10.9999 11.71V12.5L15.2499 16.75C15.6599 17.16 16.3299 17.16 16.7399 16.75C17.1499 16.34 17.1499 15.67 16.7399 15.26L12.4999 11ZM6.49989 11C4.00989 11 1.99989 8.99 1.99989 6.5C1.99989 4.01 4.00989 2 6.49989 2C8.98989 2 10.9999 4.01 10.9999 6.5C10.9999 8.99 8.98989 11 6.49989 11Z"
                  fill="currentColor"
                />
              </svg>
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
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.4999 11H11.7099L11.4299 10.73C12.6299 9.33 13.2499 7.42 12.9099 5.39C12.4399 2.61 10.1199 0.39 7.31989 0.05C3.08989 -0.47 -0.470107 3.09 0.0498932 7.32C0.389893 10.12 2.60989 12.44 5.38989 12.91C7.41989 13.25 9.32989 12.63 10.7299 11.43L10.9999 11.71V12.5L15.2499 16.75C15.6599 17.16 16.3299 17.16 16.7399 16.75C17.1499 16.34 17.1499 15.67 16.7399 15.26L12.4999 11ZM6.49989 11C4.00989 11 1.99989 8.99 1.99989 6.5C1.99989 4.01 4.00989 2 6.49989 2C8.98989 2 10.9999 4.01 10.9999 6.5C10.9999 8.99 8.98989 11 6.49989 11Z"
                    fill="#00205B"
                  />
                </svg>
              </div>
              <Input
                autoFocus
                onBlur={() => setShowSearch(false)}
                className="pl-10 h-8 border border-gray-300 focus-visible:ring-1 focus-visible:ring-[#00205B] focus-visible:border-transparent rounded-lg"
                placeholder="Search..."
              />
            </div>
          </div>

          {/* Language */}
          <Button
            variant="ghost"
            size="sm"
            className="text-sm text-gray-700 hover:text-[#00205B] px-3 py-1.5 transition-colors"
          >
            عربى
          </Button>

          {/* Log in */}
          <Button
            variant="outline"
            className="border-2   border-[#00205B] text-[#00205B] hover:bg-[#00205B]/10 hover:text-[#00205B] rounded-lg font-medium px-4 py-1.5 text-sm transition-colors"
          >
            Log in
          </Button>
        </div>
      </div>
    </div>
  );
}
