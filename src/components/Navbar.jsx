import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-lg border-b border-white/10 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-2.5">
        {/* Brand */}
        <a href="#" className=" text-white">
          Magic UI
        </a>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-2.5">
          <Button variant="ghost">Log in</Button>
          <Button variant="secondary">Sign up</Button>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-black/40 backdrop-blur-md flex flex-col items-center justify-center space-y-6 transition-all duration-300",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
        onClick={() => setIsOpen(false)}
      >
        <a href="#" className="text-white text-lg">
          Home
        </a>
        <a href="#" className="text-white text-lg">
          About
        </a>
        <a href="#" className="text-white text-lg">
          Services
        </a>
        <a href="#" className="text-white text-lg">
          Contact
        </a>
        <Button variant="outline" className="w-40">
          Login
        </Button>
        <Button className="w-40">Sign Up</Button>
      </div>
    </nav>
  );
}
