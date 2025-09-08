"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Brand */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Syntax Six
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/project">Project</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-md px-6 py-4">
          <ul className="flex flex-col gap-4 text-gray-700 font-medium">
            <li>
              <Link href="/" onClick={() => setOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/project" onClick={() => setOpen(false)}>
                Project
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => setOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
