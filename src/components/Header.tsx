"use client";

import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Phone,
  Sun,
  Moon,
  ChevronDown,
  Calculator,
} from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Начало", href: "/" },
    { name: "За нас", href: "/za-nas" },
    {
      name: "Опънат таван",
      href: "/opanat-tavan",
      dropdown: [
        { name: "За баня", href: "/opanat-tavan#banya" },
        { name: "За хол", href: "/opanat-tavan#khol" },
        { name: "За детска стая", href: "/opanat-tavan#detska" },
        { name: "За коридор", href: "/opanat-tavan#koridor" },
        { name: "Ден и нощ", href: "/opanat-tavan#den-i-nosht" },
      ],
    },
    { name: "Проекти", href: "/proekti" },
    { name: "Материали", href: "/materials" },
    { name: "Контакти", href: "/kontakti" },
  ];

  const isTransparent = pathname === "/" && !isScrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        !isTransparent
          ? "bg-white/80 dark:bg-primary-950/80 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-3 group cursor-pointer interactive-element"
          >
            <div className="relative w-12 h-12 bg-primary-900 dark:bg-white rounded-xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-105">
              <svg
                viewBox="0 0 24 24"
                className="w-8 h-8 text-white dark:text-primary-900"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 21h18" />
                <path d="M5 21V7l8-4v18" />
                <path d="M13 21V11l5 3v7" />
                <path d="M7 10h2" />
                <path d="M7 14h2" />
                <path d="M7 18h2" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span
                className={`text-2xl font-bold tracking-tight leading-none ${
                  !isTransparent
                    ? "text-primary-900 dark:text-white"
                    : "text-white"
                }`}
              >
                Благост
              </span>
              <span
                className={`text-[10px] font-medium tracking-[0.2em] uppercase mt-1 leading-none ${
                  !isTransparent
                    ? "text-primary-600 dark:text-primary-400"
                    : "text-primary-300"
                }`}
              >
                Строителна компания
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => item.dropdown && setIsDropdownOpen(true)}
                onMouseLeave={() => item.dropdown && setIsDropdownOpen(false)}
              >
                <Link
                  href={item.href}
                  className={`flex items-center space-x-1 text-sm font-bold uppercase tracking-widest transition-colors hover:text-primary-500 dark:hover:text-primary-400 cursor-pointer ${
                    !isTransparent
                      ? "text-primary-900 dark:text-white"
                      : "text-white"
                  } ${pathname === item.href ? "text-primary-500 dark:text-primary-400" : ""}`}
                >
                  <span>{item.name}</span>
                  {item.dropdown && (
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`}
                    />
                  )}
                </Link>

                {item.dropdown && (
                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 mt-2 w-56 bg-white dark:bg-primary-900 border border-primary-100 dark:border-primary-800 rounded-xl shadow-2xl overflow-hidden py-2"
                      >
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-6 py-3 text-sm font-bold text-primary-900 dark:text-white hover:bg-primary-50 dark:hover:bg-primary-800 transition-colors cursor-pointer"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Link
              href="/calculator"
              className="hidden xl:flex items-center space-x-2 bg-[#4ade80] hover:bg-[#22c55e] text-white font-black py-2.5 px-6 rounded-lg transition-all shadow-lg uppercase tracking-widest text-sm cursor-pointer hover:scale-105 active:scale-95"
            >
              <Calculator size={18} />
              <span>Калкулатор</span>
            </Link>

            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={`p-2 rounded-full transition-colors cursor-pointer hover:scale-110 active:scale-90 ${
                !isTransparent
                  ? "bg-primary-100 dark:bg-primary-900 text-primary-900 dark:text-white"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              {mounted &&
                (theme === "dark" ? <Sun size={20} /> : <Moon size={20} />)}
            </button>

            <a
              href="tel:+359888000000"
              className={`hidden md:flex items-center space-x-2 px-4 py-2 rounded-full font-bold transition-all cursor-pointer hover:scale-105 active:scale-95 ${
                !isTransparent
                  ? "bg-primary-900 dark:bg-white text-white dark:text-primary-900"
                  : "bg-white text-primary-900 hover:bg-primary-100"
              }`}
            >
              <Phone size={18} />
              <span>+359 888 000 000</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 rounded-lg cursor-pointer ${
                !isTransparent
                  ? "text-primary-900 dark:text-white"
                  : "text-white"
              }`}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="lg:hidden fixed inset-0 top-0 left-0 w-full h-screen bg-white dark:bg-primary-950 z-[60] overflow-y-auto"
          >
            <div className="p-6 flex justify-between items-center border-b dark:border-primary-900">
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center space-x-3"
              >
                <div className="w-10 h-10 bg-primary-900 dark:bg-white rounded-lg flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-6 h-6 text-white dark:text-primary-900"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M3 21h18M5 21V7l8-4v18M13 21V11l5 3v7M7 10h2M7 14h2M7 18h2" />
                  </svg>
                </div>
                <span className="text-2xl font-black text-primary-900 dark:text-white uppercase tracking-tighter">
                  Благост
                </span>
              </Link>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-primary-900 dark:text-white"
              >
                <X size={32} />
              </button>
            </div>

            <nav className="container mx-auto px-6 py-10 flex flex-col space-y-8">
              {navItems.map((item) => (
                <div key={item.name} className="flex flex-col space-y-4">
                  <Link
                    href={item.href}
                    onClick={() => !item.dropdown && setIsMenuOpen(false)}
                    className="text-2xl font-black text-primary-900 dark:text-white uppercase tracking-tighter hover:text-primary-500 transition-colors"
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <div className="flex flex-col space-y-3 pl-6 border-l-2 border-primary-100 dark:border-primary-800">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="text-lg font-bold text-primary-500 dark:text-primary-400"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="pt-10 flex flex-col space-y-6">
                <Link
                  href="/calculator"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-center space-x-3 bg-[#4ade80] text-white font-black py-5 rounded-2xl shadow-xl uppercase tracking-widest"
                >
                  <Calculator size={24} />
                  <span>Калкулатор</span>
                </Link>
                <a
                  href="tel:+359888000000"
                  className="flex items-center justify-center space-x-3 text-2xl font-black text-primary-900 dark:text-white"
                >
                  <Phone size={24} />
                  <span>+359 888 000 000</span>
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
