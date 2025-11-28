"use client"

import { useState } from "react"
import { bettingSites } from "@/data/bet-sites"
import { Star, ExternalLink, Gift, Shield, CheckCircle, Trophy, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function OurTopCasinoChoiceSection() {
  const [topSite] = useState(bettingSites[0])

  if (!topSite) {
    return null
  }

  const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<Star key={i} className="w-5 h-5 fill-primary text-primary" strokeWidth={0} />)
      } else {
        stars.push(<Star key={i} className="w-5 h-5 text-primary/30" strokeWidth={1.5} fill="none" />)
      }
    }
    return stars
  }

  return (
    <section className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-14">

          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4 font-serif">
            A Nossa <span className="text-gradient-gold">Top Escolha</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Após análise detalhada, esta é a nossa recomendação principal para apostadores portugueses.
          </p>
        </div>

        {/* Featured Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 via-card to-accent/10 border-2 border-primary/50 shadow-2xl shadow-primary/20">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

            {/* Badge */}
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <div className="px-4 py-2 gradient-gold rounded-lg font-black text-background text-sm flex items-center gap-2">
                #1 MELHOR ESCOLHA
              </div>
            </div>

            <Link href={topSite.url} target="_blank" rel="noopener noreferrer sponsored" className="block">
              <div className="relative p-6 md:p-10 pt-16 md:pt-20">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Left - Logo & Info */}
                  <div className="text-center md:text-left">
                    <div className="inline-flex items-center justify-center w-40 h-24 md:w-52 md:h-28 rounded-xl bg-background/90 p-4 mb-6 shadow-lg">
                      <Image
                        src={topSite.logo || "/placeholder.svg"}
                        alt={topSite.name}
                        width={180}
                        height={80}
                        className="max-h-full w-auto object-contain"
                      />
                    </div>

                    <div className="flex items-center justify-center md:justify-start gap-1 mb-3">
                      {renderStars(topSite.stars)}
                      <span className="ml-2 text-sm text-muted-foreground">
                        ({topSite.reviews.toLocaleString()} avaliações)
                      </span>
                    </div>

                    <div className="flex items-baseline justify-center md:justify-start gap-2 mb-4">
                      <span className="text-5xl md:text-6xl font-black text-primary">{topSite.rating.toFixed(1)}</span>
                      <span className="text-xl text-muted-foreground">/10</span>
                    </div>

                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Shield className="w-4 h-4 text-accent" />
                        <span>Licença SRIJ</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-accent" />
                        <span>Verificado</span>
                      </div>
                    </div>
                  </div>

                  {/* Right - Bonus & CTA */}
                  <div className="text-center">
                    <div className="p-6 rounded-xl bg-card/80 border border-border/50 mb-6">
                      <div className="flex items-center justify-center gap-2 mb-3">
                      
                        <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                          Bónus Exclusivo
                        </span>
                      </div>
                      <p className="text-2xl md:text-3xl font-black text-primary leading-tight">{topSite.bonus}</p>
                    </div>

                    <Button
                      size="lg"
                      className="w-full gradient-gold text-background font-bold text-lg py-6 shadow-xl hover:opacity-90 transition-all group"
                    >
                      Obter Bónus Agora
                      <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>

                    <p className="text-xs text-muted-foreground mt-4">
                      +18 | Aplicam-se T&C | Jogue com responsabilidade
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
