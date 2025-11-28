"use client"

import { useState, useEffect } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { TopOffersModal } from "@/components/top-offers-modal"
import { AgeRestrictionModal } from "@/components/age-restriction-modal"
import { AdvertiserInfoModal } from "@/components/advertiser-info-modal"
import { HeroSection } from "@/components/hero-section"
import { FaqSection } from "@/components/faq-section"
import { OurTopCasinoChoiceSection } from "@/components/our-top-casino-choice-section"
import { BettingInfoSection } from "@/components/betting-info-section"
import { CookieBanner } from "@/components/cookie-banner"
import { CookieConsentProvider } from "@/context/cookie-consent-context"
import { WhyChooseUsSection } from "@/components/why-choose-us-section"
import { BetList } from "@/components/bet-list"

export default function Home() {
  const [isAgeModalOpen, setIsAgeModalOpen] = useState(false)
  const [isAdvertiserModalOpen, setIsAdvertiserModalOpen] = useState(false)
  const [isTopOffersModalOpen, setIsTopOffersModalOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTopOffersModalOpen(true)
    }, 10000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <CookieConsentProvider>
      <main className="min-h-screen flex flex-col relative bg-background">
        {/* Background Pattern */}
        <div className="fixed inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url("/dark-stadium-night-football-sports-atmosphere-prem.jpg")',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background" />
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23d4af37' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative z-10">
          <SiteHeader />
          <HeroSection
            setIsAgeModalOpen={setIsAgeModalOpen}
            setIsAdvertiserModalOpen={setIsAdvertiserModalOpen}
            setIsTopOffersModalOpen={setIsTopOffersModalOpen}
          />
          <div id="betting-sites">
            <BetList />
          </div>
          <WhyChooseUsSection />
          <BettingInfoSection />
          <OurTopCasinoChoiceSection />
          <FaqSection />
          <SiteFooter />
        </div>

        <TopOffersModal isOpen={isTopOffersModalOpen} onClose={() => setIsTopOffersModalOpen(false)} />
        <AgeRestrictionModal isOpen={isAgeModalOpen} onClose={() => setIsAgeModalOpen(false)} />
        <AdvertiserInfoModal isOpen={isAdvertiserModalOpen} onClose={() => setIsAdvertiserModalOpen(false)} />
        <CookieBanner />
      </main>
    </CookieConsentProvider>
  )
}
