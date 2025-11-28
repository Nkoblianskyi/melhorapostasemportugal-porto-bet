"use client"

import { Star, ExternalLink, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { BettingSite } from "@/data/bet-sites"

interface BetCardProps {
  site: BettingSite
  rank: number
}

export function BetCard({ site, rank }: BetCardProps) {
  const formatReviews = (reviews: number) => {
    return reviews.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  }

  const getRankLabel = (rank: number) => {
    switch (rank) {
      case 1:
        return "MELHOR ESCOLHA"
      case 2:
        return "RECOMENDADO"
      case 3:
        return "POPULAR"
      default:
        return "VERIFICADO"
    }
  }

  const renderStars = (rating: number) => {
    const stars = []
    // Convert 10-point rating to 5-star scale (divide by 2)
    const starRating = rating / 2
    const fullStars = Math.floor(starRating)
    const partialFill = starRating - fullStars

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        // Full star
        stars.push(<Star key={i} className="w-4 h-4 fill-primary text-primary" strokeWidth={0} />)
      } else if (i === fullStars && partialFill > 0) {
        // Partial star with exact fill percentage
        stars.push(
          <div key={i} className="relative w-4 h-4">
            <Star className="absolute w-4 h-4 text-primary/30" strokeWidth={1.5} fill="none" />
            <div className="absolute overflow-hidden" style={{ width: `${partialFill * 100}%` }}>
              <Star className="w-4 h-4 fill-primary text-primary" strokeWidth={0} />
            </div>
          </div>,
        )
      } else {
        // Empty star
        stars.push(<Star key={i} className="w-4 h-4 text-primary/30" strokeWidth={1.5} fill="none" />)
      }
    }
    return stars
  }

  const isTopRank = rank <= 3

  return (
    <div
      className={cn(
        "group relative rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.01]",
        rank === 1
          ? "bg-gradient-to-r from-primary/10 via-card to-primary/10 border-2 border-primary/50 shadow-xl shadow-primary/10"
          : "bg-card/80 border border-border/50 hover:border-primary/30",
      )}
    >
      {/* Rank Badge */}
      <div className={cn("absolute top-0 left-0 z-10 flex items-center", rank === 1 ? "gap-0" : "gap-0")}>
        <div
          className={cn(
            "px-4 py-2 font-black text-sm",
            rank === 1
              ? "gradient-gold text-background rounded-br-xl"
              : rank <= 3
                ? "bg-accent text-background rounded-br-xl"
                : "bg-secondary text-foreground rounded-br-xl",
          )}
        >
          #{rank}
        </div>
        {isTopRank && (
          <div
            className={cn(
              "px-3 py-2 text-xs font-bold uppercase tracking-wider",
              rank === 1 ? "bg-primary/20 text-primary" : "bg-accent/20 text-accent",
            )}
          >
            {getRankLabel(rank)}
          </div>
        )}
      </div>

      <Link href={site.url} target="_blank" rel="noopener noreferrer sponsored" className="block">
        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-4 p-5 items-center">
          {/* Logo */}
          <div className="col-span-3 flex justify-center">
            <div
              className={cn(
                "w-full max-w-[200px] h-32 rounded-lg flex items-center justify-center p-3",
                rank === 1 ? "bg-background/80" : "bg-secondary/50",
              )}
            >
              <Image
                src={site.logo || "/placeholder.svg"}
                alt={site.name}
                width={200}
                height={96}
                className="max-h-full w-auto object-contain"
              />
            </div>
          </div>

          {/* Bonus */}
          <div className="col-span-4 text-center px-4 border-l border-r border-border/30">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Bónus de Boas-Vindas
              </span>
            </div>
            <p className={cn("text-2xl font-black leading-tight", rank === 1 ? "text-primary" : "text-foreground")}>
              {site.bonus}
            </p>
          </div>

          {/* Rating */}
          <div className="col-span-3 text-center px-4 border-r border-border/30">
            <div className="flex justify-center gap-0.5 mb-2">{renderStars(site.rating)}</div>
            <div className="flex items-baseline justify-center gap-1">
              <span className={cn("text-3xl font-black", rank === 1 ? "text-primary" : "text-accent")}>
                {site.rating.toFixed(1)}
              </span>
              <span className="text-sm text-muted-foreground">/10</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">({formatReviews(site.reviews)} avaliações)</p>
          </div>

          {/* CTA */}
          <div className="col-span-2 flex flex-col items-center gap-2">
            <Button
              className={cn(
                "w-full font-bold shadow-lg transition-all group-hover:scale-105",
                rank === 1
                  ? "gradient-gold text-background hover:opacity-90"
                  : "gradient-emerald text-background hover:opacity-90",
              )}
            >
              Obter Bónus
              <ExternalLink className="ml-2 w-4 h-4" />
            </Button>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <CheckCircle className="w-3 h-3 text-accent" />
              <span>SRIJ Verificado</span>
            </div>
          </div>
        </div>

        <div className="hidden md:block lg:hidden p-4 pt-14">
          {/* Row 1: Logo + Bonus + Rating */}
          <div className="grid grid-cols-3 gap-4 items-center mb-4">
            {/* Logo */}
            <div className="flex justify-center">
              <div
                className={cn(
                  "w-full max-w-[160px] h-24 rounded-lg flex items-center justify-center p-2",
                  rank === 1 ? "bg-background/80" : "bg-secondary/50",
                )}
              >
                <Image
                  src={site.logo || "/placeholder.svg"}
                  alt={site.name}
                  width={160}
                  height={80}
                  className="max-h-full w-auto object-contain"
                />
              </div>
            </div>

            {/* Bonus - centered */}
            <div className="flex flex-col items-center justify-center text-center border-l border-r border-border/30 px-2">
              <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                Bónus de Boas-Vindas
              </span>
              <p className={cn("text-lg font-black leading-tight", rank === 1 ? "text-primary" : "text-foreground")}>
                {site.bonus}
              </p>
            </div>

            {/* Rating - centered */}
            <div className="flex flex-col items-center justify-center text-center">
              <div className="flex gap-0.5 mb-1">{renderStars(site.rating)}</div>
              <div className="flex items-baseline justify-center gap-1">
                <span className={cn("text-2xl font-black", rank === 1 ? "text-primary" : "text-accent")}>
                  {site.rating.toFixed(1)}
                </span>
                <span className="text-xs text-muted-foreground">/10</span>
              </div>
              <p className="text-[10px] text-muted-foreground mt-0.5">({formatReviews(site.reviews)} avaliações)</p>
            </div>
          </div>

          {/* Row 2: Button full width */}
          <div className="flex items-center justify-center gap-4">
            <Button
              className={cn(
                "flex-1 max-w-xs font-bold shadow-lg",
                rank === 1 ? "gradient-gold text-background" : "gradient-emerald text-background",
              )}
            >
              Obter Bónus
              <ExternalLink className="ml-2 w-4 h-4" />
            </Button>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <CheckCircle className="w-3 h-3 text-accent" />
              <span>SRIJ Verificado</span>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden p-4 pt-12">
          {/* Row 1: Logo + Bonus */}
          <div className="flex items-center gap-4 mb-3">
            {/* Logo - 2x bigger */}
            <div
              className={cn(
                "w-32 h-24 shrink-0 rounded-lg flex items-center justify-center p-2",
                rank === 1 ? "bg-background/80" : "bg-secondary/50",
              )}
            >
              <Image
                src={site.logo || "/placeholder.svg"}
                alt={site.name}
                width={200}
                height={96}
                className="max-h-full w-auto object-contain"
              />
            </div>

            {/* Bonus - centered, xl text */}
            <div className="flex-1 flex flex-col items-center justify-center text-center">
              <div className="flex items-center gap-1 mb-1">
                <span className="text-[10px] font-semibold text-muted-foreground uppercase">Bónus</span>
              </div>
              <p className={cn("text-xl font-black leading-tight", rank === 1 ? "text-primary" : "text-foreground")}>
                {site.bonus}
              </p>
            </div>
          </div>

          {/* Row 2: Rating + Stars + Button */}
          <div className="flex items-center justify-between gap-2">
            {/* Rating */}
            <div className="flex items-center justify-center">
              <span className={cn("text-2xl font-black", rank === 1 ? "text-primary" : "text-accent")}>
                {site.rating.toFixed(1)}
              </span>
              <span className="text-xs text-muted-foreground">/10</span>
            </div>

            {/* Stars with reviews */}
            <div className="flex flex-col items-center justify-center">
              <div className="flex gap-0.5 mb-0.5">{renderStars(site.rating)}</div>
              <p className="text-[9px] text-muted-foreground">{formatReviews(site.reviews)} avaliações</p>
            </div>

            {/* Button */}
            <Button
              size="sm"
              className={cn(
                "font-bold shadow-lg text-xs px-4",
                rank === 1 ? "gradient-gold text-background" : "gradient-emerald text-background",
              )}
            >
              Obter
              <ExternalLink className="ml-1 w-3 h-3" />
            </Button>
          </div>
        </div>
      </Link>

      {/* Footer Disclaimer */}
      <div className="px-4 md:px-5 py-2 border-t border-border/30 bg-secondary/30">
        <p className="text-[10px] md:text-xs text-center text-muted-foreground">
          +18 | Jogo Responsável |{" "}
          <a
            href="https://jogoresponsavel.pt/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="text-primary hover:underline"
          >
            jogoresponsavel.pt
          </a>
        </p>
      </div>
    </div>
  )
}
