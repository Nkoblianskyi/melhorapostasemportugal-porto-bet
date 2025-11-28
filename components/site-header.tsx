"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import Image from "next/image"

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-lg shadow-black/10 border-b border-amber-500/20"
          : "bg-background/70 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-14 md:h-16 px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 md:gap-3">
          <Image src="/favicon.ico" alt="Logo" width={40} height={40} />
          <div className="flex flex-col">
            <span className="text-sm md:text-base text-green-800 font-black leading-none uppercase tracking-tight">
              MELHOR<span className="text-red-900">APOSTAS</span>EM PORTUGAL
            </span>
          </div>
        </Link>

        {/* Badges */}
        <div className="flex items-center gap-2 md:gap-3">
          {/* SRIJ Badge */}
          <div className="flex items-center gap-1.5 px-2 md:px-3 py-1 md:py-1.5 rounded-md bg-emerald-500/10 border border-emerald-500/30">
            <svg
              className="w-3.5 h-3.5 md:w-4 md:h-4 text-emerald-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M9 12l2 2 4-4" />
              <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
            </svg>
            <span className="text-[10px] md:text-xs font-bold text-emerald-400">SRIJ</span>
          </div>

          {/* 18+ Badge */}
          <div className="flex items-center justify-center w-8 h-8 md:w-9 md:h-9 rounded-md bg-red-500/10 border border-red-500/30">
            <span className="text-xs md:text-sm font-black text-red-400">18+</span>
          </div>
        </div>
      </div>
    </header>
  )
}
