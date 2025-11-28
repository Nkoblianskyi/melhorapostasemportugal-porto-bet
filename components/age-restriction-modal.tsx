"use client"

import { useState, useEffect } from "react"
import { X, AlertTriangle, Shield, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface AgeRestrictionModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AgeRestrictionModal({ isOpen, onClose }: AgeRestrictionModalProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted || !isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 glass-effect p-4">
      <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in duration-300">
        <div className="rounded-2xl overflow-hidden bg-card border border-border/50 shadow-2xl">
          {/* Header */}
          <div className="relative bg-gradient-to-r from-destructive/20 via-card to-destructive/20 p-5 md:p-6 border-b border-border/30">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-secondary/50 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Fechar"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-destructive/20">
                <AlertTriangle className="h-7 w-7 text-destructive" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-black text-foreground">Verificação de Idade</h2>
                <p className="text-sm text-muted-foreground">Acesso restrito a maiores de 18 anos</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-5 md:p-6 space-y-5">
            <div className="p-4 rounded-xl bg-destructive/10 border border-destructive/30">
              <p className="font-semibold text-foreground flex items-center gap-2">
                <Shield className="w-5 h-5 text-destructive" />
                Este website é exclusivamente para maiores de 18 anos.
              </p>
            </div>

            <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
              <p>
                Ao prosseguir, confirma inequivocamente que tem pelo menos 18 anos de idade e que compreende os riscos
                associados às apostas desportivas.
              </p>
              <p>
                As apostas devem ser sempre encaradas como uma forma de entretenimento. Nunca aposte com fundos que não
                pode perder confortavelmente.
              </p>
              <p>
                Se está a enfrentar desafios relacionados com o jogo, procure assistência através da{" "}
                <a
                  href="https://jogoresponsavel.pt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-semibold"
                >
                  Linha Jogo Responsável
                </a>
                .
              </p>
            </div>

            <Button
              onClick={onClose}
              className="w-full bg-destructive hover:bg-destructive/90 text-destructive-foreground font-bold py-5 shadow-lg transition-all"
            >
              <CheckCircle className="mr-2 h-5 w-5" />
              Confirmo Ter 18+ Anos
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
