"use client";

import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-950 dark:bg-black text-white pt-24 pb-12 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand */}
          <div className="space-y-8">
            <Link
              href="/"
              className="flex items-center space-x-3 group cursor-pointer interactive-element"
            >
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg transition-transform group-hover:rotate-6">
                <svg
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-primary-950"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 21h18" />
                  <path d="M5 21V7l8-4v18" />
                  <path d="M13 21V11l5 3v7" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tighter uppercase leading-none">
                  {siteConfig.name}
                </span>
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-primary-50 mt-1">
                  Строителна компания
                </span>
              </div>
            </Link>
            <p className="text-primary-400 leading-relaxed font-medium">
              Вашият доверен партньор в изработката и монтажа de модерни опънати
              тавани. Качество, стил и професионализъм във всеки детайл.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center hover:bg-white hover:text-primary-950 transition-all shadow-lg cursor-pointer"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center hover:bg-white hover:text-primary-950 transition-all shadow-lg cursor-pointer"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-primary-500 mb-8">
              Навигация
            </h4>
            <ul className="space-y-4">
              {[
                { name: "Начало", href: "/" },
                { name: "Опънат таван", href: "/opanat-tavan" },
                { name: "Проекти", href: "/proekti" },
                { name: "Материали", href: "/materials" },
                { name: "За нас", href: "/za-nas" },
                { name: "Контакти", href: "/kontakti" },
                { name: "Калкулатор", href: "/calculator" },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-primary-300 hover:text-white transition-colors font-bold uppercase tracking-tight text-sm cursor-pointer block py-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-primary-500 mb-8">
              Услуги
            </h4>
            <ul className="space-y-4">
              {[
                { name: "Тавани за баня", href: "/opanat-tavan#banya" },
                { name: "Тавани за хол", href: "/opanat-tavan#khol" },
                { name: "Тавани за детска", href: "/opanat-tavan#detska" },
                { name: "Ден и Нощ", href: "/opanat-tavan#den-i-nosht" },
                { name: "Матови тавани", href: "/opanat-tavan#mato" },
              ].map((service, i) => (
                <li key={i}>
                  <Link
                    href={service.href}
                    className="text-primary-300 hover:text-white transition-colors font-bold uppercase tracking-tight text-sm cursor-pointer block py-1"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-primary-500 mb-8">
              Контакти
            </h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4 group cursor-pointer">
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-white group-hover:text-primary-950 transition-all">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-primary-300 font-bold text-sm leading-relaxed group-hover:text-white transition-colors">
                  {siteConfig.address}
                </span>
              </li>
              <li className="flex items-center space-x-4 group cursor-pointer">
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-white group-hover:text-primary-950 transition-all">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-primary-300 font-bold text-sm group-hover:text-white transition-colors">
                  {siteConfig.phone}
                </span>
              </li>
              <li className="flex items-center space-x-4 group cursor-pointer">
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-white group-hover:text-primary-950 transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-primary-300 font-bold text-sm group-hover:text-white transition-colors">
                  {siteConfig.email}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-primary-500 text-[10px] font-black uppercase tracking-[0.2em]">
          <p>© {currentYear} Благост ЕООД. Всички права запазени.</p>
          <div className="flex items-center space-x-8">
            <a
              href="#"
              className="hover:text-white transition-colors cursor-pointer"
            >
              Политика за поверителност
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors cursor-pointer"
            >
              Общи условия
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
