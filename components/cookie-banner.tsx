"use client"

import { useCookieConsent } from "@/context/cookie-consent-context"
import { Button } from "@/components/ui/button"
import { Cookie, Shield } from "lucide-react"
import Link from "next/link"

export function CookieBanner() {
  const { showBanner, acceptAll, declineAll } = useCookieConsent()

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="container mx-auto">
        <div className="relative rounded-2xl bg-card/95 glass-effect border border-border/50 shadow-2xl p-5 md:p-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-primary/20">
                  <Cookie className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Política de Cookies</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Utilizamos cookies para melhorar a sua experiência, personalizar conteúdo e analisar o tráfego. Ao
                clicar em "Aceitar", concorda com a nossa{" "}
                <Link href="/cookie-policy" className="text-primary hover:underline font-medium">
                  Política de Cookies
                </Link>
                .
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <Button
                variant="outline"
                className="border-border/50 bg-secondary/30 text-foreground hover:bg-secondary/50 font-semibold"
                onClick={declineAll}
              >
                Recusar
              </Button>
              <Button
                className="gradient-gold text-background font-bold hover:opacity-90 transition-opacity"
                onClick={acceptAll}
              >
                <Shield className="mr-2 w-4 h-4" />
                Aceitar Todos
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
