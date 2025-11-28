"use client"

import { useState, useEffect } from "react"
import { X, Info, CheckCircle, Shield, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

interface AdvertiserInfoModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AdvertiserInfoModal({ isOpen, onClose }: AdvertiserInfoModalProps) {
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
          <div className="relative bg-gradient-to-r from-primary/20 via-card to-primary/20 p-5 md:p-6 border-b border-border/30">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-secondary/50 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Fechar"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-primary/20">
                <Info className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-black text-foreground">Divulgação do Anunciante</h2>
                <p className="text-sm text-muted-foreground">Informação de Transparência</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-5 md:p-6 space-y-5">
            <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
              <p>
                <strong className="text-foreground">MelhorApostasEmPortugal</strong> (melhorapostasemportugal.com) opera
                como um serviço gratuito de comparação, dedicado a ajudá-lo a descobrir plataformas de apostas
                respeitáveis e licenciadas em Portugal.
              </p>

              <div className="p-4 rounded-xl bg-secondary/50 border border-border/30">
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="w-4 h-4 text-primary" />
                  <span className="font-semibold text-foreground">Como Geramos Receita</span>
                </div>
                <p>
                  Recebemos comissões das marcas apresentadas, o que pode influenciar o seu posicionamento e
                  visibilidade no nosso site. No entanto, mantemos a nossa independência editorial e avaliamos cada casa
                  de apostas com critérios objetivos.
                </p>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-accent/10 border border-accent/30">
                <Shield className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <p>
                  Todos os sites apresentados são rigorosamente licenciados pelo{" "}
                  <strong className="text-foreground">SRIJ</strong> (Serviço de Regulação e Inspeção de Jogos). Embora
                  nos esforcemos pela precisão, recomendamos sempre verificar os termos diretamente nos sites dos
                  operadores.
                </p>
              </div>

              <p className="text-xs text-muted-foreground bg-secondary/30 p-3 rounded-lg border-l-2 border-primary">
                <strong>Nota:</strong> Os bónus e ofertas estão sujeitos a alterações. Leia sempre os termos e condições
                no website do operador antes de reclamar qualquer oferta.
              </p>
            </div>

            <Button
              onClick={onClose}
              className="w-full gradient-gold text-background font-bold py-5 shadow-lg hover:opacity-90 transition-all"
            >
              <CheckCircle className="mr-2 h-5 w-5" />
              Compreendido
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
