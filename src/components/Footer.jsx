import { Instagram, Twitter } from "lucide-react";
import FooterLogo from "/icon.png";

const Footer = () => {
  return (
    <div className="container mx-auto px-4">
      {/* top */}
      <div className="py-16 flex justify-between">
        {/* left */}
        <div>
          <div className="flex items-center gap-2">
            <img src={FooterLogo} alt="Footer Logo" className="w-8 h-8" />

            <span className="text-2xl font-semibold">Magic UI</span>
          </div>

          <p className="mt-4">UI Library for Design Engineers</p>
        </div>

        {/* right */}
        <div className="grid grid-cols-3 gap-10">
          <div>
            <h3 className="text-sm font-medium mb-6 uppercase">Product</h3>
            <p className="text-sm font-[450] opacity-60 hover:opacity-100 cursor-pointer mb-3">
              Email Collection
            </p>
            <p className="text-sm font-[450] opacity-60 hover:opacity-100 cursor-pointer mb-3">
              Pricing
            </p>
            <p className="text-sm font-[450] opacity-60 hover:opacity-100 cursor-pointer mb-3">
              FAQ
            </p>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-6 uppercase">Community</h3>
            <p className="text-sm font-[450] opacity-60 hover:opacity-100 cursor-pointer mb-3">
              Discord
            </p>
            <p className="text-sm font-[450] opacity-60 hover:opacity-100 cursor-pointer mb-3">
              Twitter
            </p>
            <p className="text-sm font-[450] opacity-60 hover:opacity-100 cursor-pointer mb-3">
              Email
            </p>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-6 uppercase">Legal</h3>
            <p className="text-sm font-[450] opacity-60 hover:opacity-100 cursor-pointer mb-3">
              Terms
            </p>
            <p className="text-sm font-[450] opacity-60 hover:opacity-100 cursor-pointer mb-3">
              Privacy
            </p>
          </div>
        </div>
      </div>

      {/* bottom */}
      <div className="flex justify-between items-center py-8">
        {/* left */}
        <div className="flex gap-6 opacity-50">
          <Instagram className="w-4 h-4" />

          <Twitter className="w-4 h-4" />
        </div>

        {/* right */}
        <p className="text-sm opacity-60 cursor-pointer">
          Copyright © 2024 Magic UI. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
