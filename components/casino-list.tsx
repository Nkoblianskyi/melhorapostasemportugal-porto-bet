"use client"

import { CasinoCard } from "@/components/casino-card"
import { casinoSites } from "@/data/casino-sites"

export function CasinoList() {
  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="space-y-4 md:space-y-5">
          {casinoSites.map((site, index) => (
            <CasinoCard key={site.name} site={site} rank={index + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
