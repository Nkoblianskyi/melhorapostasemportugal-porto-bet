"use client"

import type { Dispatch, SetStateAction } from "react"
import { useEffect, useState } from "react"
import { Shield, CheckCircle, Zap } from "lucide-react"

interface HeroSectionProps {
  setIsAgeModalOpen: Dispatch<SetStateAction<boolean>>
  setIsAdvertiserModalOpen: Dispatch<SetStateAction<boolean>>
  setIsTopOffersModalOpen?: Dispatch<SetStateAction<boolean>>
}

export function HeroSection({ setIsAgeModalOpen, setIsAdvertiserModalOpen }: HeroSectionProps) {
  const [lastUpdated, setLastUpdated] = useState("")
  const currentYear = new Date().getFullYear()

  useEffect(() => {
    const date = new Date()
    const month = date.toLocaleString("pt-PT", { month: "long" })
    const year = date.getFullYear()
    setLastUpdated(`${month} ${year}`)
  }, [])

  return (
    <section className="relative h-[250px] md:h-[350px] flex items-center">
      {/* Background with diagonal split design */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-transparent" />

        {/* Decorative diagonal lines */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: `repeating-linear-gradient(
                   -45deg,
                   transparent,
                   transparent 80px,
                   rgba(212, 175, 55, 0.03) 80px,
                   rgba(212, 175, 55, 0.03) 81px
                 )`,
            }}
          />
        </div>

        {/* Accent glow spots */}
        <div className="absolute top-0 right-0 w-[300px] h-[200px] bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 w-[200px] h-[150px] bg-accent/5 rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6">
        {/* Main content container - glass card */}
        <div className="relative p-4 md:p-6 rounded-2xl border border-primary/20 bg-background/40 backdrop-blur-md">
          {/* Corner accent decorations */}
          <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-primary/40 rounded-tl-2xl" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-primary/40 rounded-br-2xl" />

          {/* Top bar with year badge and info buttons */}
          <div className="flex items-center justify-between mb-3 md:mb-4">
            <div className="flex items-center gap-2">
              <div className="px-3 py-1 rounded-full bg-primary/20 border border-primary/40">
                <span className="text-xs md:text-sm font-bold text-primary">Ranking {currentYear}</span>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 px-2 py-1 rounded-full bg-accent/10 border border-accent/30">
                <Zap className="w-3 h-3 text-accent" />
                <span className="text-[10px] md:text-xs text-accent font-medium">Atualizado</span>
              </div>
            </div>

            {/* Info buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsAgeModalOpen(true)}
                className="px-2 py-1 text-xs font-bold text-primary border border-primary/30 rounded-full hover:bg-primary/10 transition-colors"
              >
                +18
              </button>
              <button
                onClick={() => setIsAdvertiserModalOpen(true)}
                className="px-2 py-1 text-xs text-muted-foreground border border-border/50 rounded-full hover:bg-secondary/50 transition-colors"
              >
                Publicidade
              </button>
            </div>
          </div>

          {/* Title section */}
          <div className="text-center mb-4 md:mb-5">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              <span className="text-foreground">Melhores </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-amber-400 to-primary">
                Apostas
              </span>
              <span className="text-foreground"> em </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-emerald-400">
                Portugal
              </span>
            </h1>
            <p className="mt-2 text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
              Guia completo das casas de apostas licenciadas pelo SRIJ com análises e bónus exclusivos.
            </p>
          </div>

          {/* Bottom trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary/50">
              <img src="/srij.svg" alt="PT" className="w-6 h-6 rounded-sm" />
              <span className="text-[10px] mt-1 md:text-xs font-bold text-primary uppercase tracking-wider">SRIJ</span>
            </div>

            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary/50">
              <Shield className="w-4 h-4 text-accent" />
              <span className="text-[10px] md:text-xs font-bold text-primary uppercase tracking-wider">Seguro</span>
            </div>

            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary/50">
              <img src="/flag.png" alt="PT" className="w-6 h-6 rounded-sm" />

              <span className="text-[10px] md:text-xs font-bold text-primary uppercase tracking-wider">Verificado</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </section>
  )
}
