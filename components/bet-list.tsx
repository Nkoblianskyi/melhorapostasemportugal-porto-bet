"use client"

import { BetCard } from "@/components/bet-card"
import { bettingSites } from "@/data/bet-sites"


export function BetList() {
  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="space-y-4 md:space-y-5">
          {bettingSites.map((site, index) => (
            <BetCard key={site.name} site={site} rank={index + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
