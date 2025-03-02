// import { useState } from "react";
// import { Menu, X } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="fixed top-0 left-0 w-full backdrop-blur-lg border-b border-white/10 shadow-md z-50">
//       <div className="container mx-auto flex justify-between items-center px-4 xl:px-0 py-2.5">
//         {/* Brand */}
//         <a href="#" className="text-white">
//           Magic UI
//         </a>

//         {/* Desktop Buttons */}
//         <div className="hidden md:flex gap-2.5">
//           <Button variant="ghost">Log in</Button>
//           <Button variant="secondary">Sign up</Button>
//         </div>

//         {/* Mobile Menu Icon */}
//         <button
//           className="md:hidden text-white"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={cn(
//           "fixed top-0 bg-black/40 backdrop-blur-md flex flex-col items-center justify-center space-y-6 transition-all duration-300",
//           isOpen ? "opacity-100 visible" : "opacity-0 invisible"
//         )}
//         onClick={() => setIsOpen(false)}
//       >
//         <a href="#" className="text-white text-lg">
//           Home
//         </a>
//         <a href="#" className="text-white text-lg">
//           About
//         </a>
//         <a href="#" className="text-white text-lg">
//           Services
//         </a>
//         <a href="#" className="text-white text-lg">
//           Contact
//         </a>
//         <Button variant="ghost" className="w-40">
//           Log in
//         </Button>
//         <Button variant="secondary" className="w-40">
//           Sign up
//         </Button>
//       </div>
//     </nav>
//   );
// }

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b backdrop-blur-md">
      <div className="container mx-auto px-4 flex h-14 items-center justify-between">
        <a className="" href="/">
          Magic UI
        </a>
        <div className="ml-auto hidden md:flex items-center space-x-6">
          <a className="text-sm" href="/signin">
            Log in
          </a>
          <Button variant="secondary" className="text-sm" href="/signup">
            Sign up
          </Button>
        </div>
        <Button
          variant="ghost"
          className="ml-6 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        transition={{ duration: 0.3 }}
        className={`fixed left-0 top-0 z-40 h-screen w-full bg-black/90 backdrop-blur-md pointer-events-${
          isOpen ? "auto" : "none"
        }`}
      >
        <div className="container mx-auto px-4 flex h-14 items-center justify-between">
          <a href="/">Magic UI</a>
          <Button
            variant="ghost"
            className="ml-6 bg-black/90"
            onClick={() => setIsOpen(false)}
          >
            <X size={24} />
          </Button>
        </div>
        <ul className="flex flex-col items-start mt-10 space-y-4 px-6">
          {["Features", "Pricing", "Careers", "Contact Us"].map((item) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <a
                className="text-xl font-medium hover:text-gray-600"
                href={`/${item.toLowerCase().replace(/ /g, "")}`}
              >
                {item}
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.nav>
    </header>
  );
}
