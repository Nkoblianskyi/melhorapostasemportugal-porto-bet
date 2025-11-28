"use client"

import { useState } from "react"
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "As apostas desportivas são legais em Portugal?",
    answer:
      "Sim, as apostas desportivas são totalmente legais em Portugal desde que sejam realizadas através de operadores licenciados pelo SRIJ (Serviço de Regulação e Inspeção de Jogos). Todas as casas de apostas listadas no nosso site possuem licença válida e são completamente seguras para utilizar.",
  },
  {
    question: "Como posso começar a apostar online?",
    answer:
      "Para começar, escolha uma casa de apostas licenciada da nossa lista, registe-se fornecendo os seus dados pessoais, verifique a sua conta através de documento de identificação, faça um depósito e comece a apostar nos seus desportos favoritos. Não se esqueça de aproveitar os bónus de boas-vindas disponíveis!",
  },
  {
    question: "Quais são os métodos de pagamento disponíveis?",
    answer:
      "As casas de apostas portuguesas oferecem diversos métodos seguros: cartões de crédito/débito Visa e Mastercard, MB Way, transferência bancária, Multibanco, e carteiras digitais como Neteller, Skrill e PayPal. Os depósitos são geralmente instantâneos e os levantamentos processados em 24-72 horas.",
  },
  {
    question: "Os bónus de apostas têm requisitos especiais?",
    answer:
      "Sim, todos os bónus têm requisitos de apostas (rollover) que devem ser cumpridos antes de poder levantar os ganhos. Tipicamente, é necessário apostar o valor do bónus entre 3x a 10x em odds mínimas específicas. Leia sempre os termos e condições de cada promoção para entender todos os requisitos.",
  },
  {
    question: "É seguro apostar online em Portugal?",
    answer:
      "Absolutamente, desde que utilize operadores licenciados pelo SRIJ. Estes sites são obrigados a seguir rigorosas normas de segurança, encriptação SSL, proteger os seus dados pessoais e financeiros, e garantir jogos justos através de auditorias regulares. Verifique sempre a licença antes de se registar.",
  },
  {
    question: "Posso apostar através do telemóvel?",
    answer:
      "Sim, todas as principais casas de apostas portuguesas oferecem sites mobile totalmente otimizados ou aplicações nativas dedicadas para iOS e Android. Pode apostar em qualquer lugar e a qualquer momento com total segurança e funcionalidades completas.",
  },
  {
    question: "Qual é a idade mínima para apostar?",
    answer:
      "Em Portugal, é obrigatório ter pelo menos 18 anos para poder criar uma conta e realizar apostas desportivas. Todas as casas de apostas verificam rigorosamente a idade através de documentos de identificação durante o processo de registo para garantir conformidade legal.",
  },
  {
    question: "Como funciona o vosso sistema de avaliação?",
    answer:
      "A nossa equipa de especialistas testa pessoalmente cada casa de apostas, avaliando critérios como licenciamento, segurança, variedade de mercados, qualidade das odds, bónus oferecidos, métodos de pagamento, suporte ao cliente e experiência mobile. As pontuações são baseadas em dados objetivos e atualizadas regularmente.",
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4 font-serif">
            Dúvidas <span className="text-gradient-gold">Comuns</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Respostas às questões mais frequentes sobre apostas desportivas em Portugal.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={cn(
                "rounded-xl border transition-all duration-300 overflow-hidden",
                openIndex === index
                  ? "bg-card border-primary/50 shadow-lg shadow-primary/10"
                  : "bg-card/50 border-border/50 hover:border-primary/30",
              )}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-5 md:px-6 py-4 md:py-5 flex items-center justify-between text-left"
              >
                <span
                  className={cn(
                    "font-semibold pr-4 transition-colors",
                    openIndex === index ? "text-primary" : "text-foreground",
                  )}
                >
                  {faq.question}
                </span>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 flex-shrink-0 transition-all duration-300",
                    openIndex === index ? "rotate-180 text-primary" : "text-muted-foreground",
                  )}
                />
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300",
                  openIndex === index ? "max-h-96" : "max-h-0",
                )}
              >
                <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Help Card */}
        <div className="max-w-3xl mx-auto mt-10">
          <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-r from-accent/10 via-card to-accent/10 border border-accent/30">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
              <div className="p-4 rounded-xl bg-accent/20">
                <MessageCircle className="w-8 h-8 text-accent" />
              </div>
              <div className="text-center md:text-left flex-1">
                <h3 className="font-bold text-foreground mb-1 text-lg">Jogo Responsável</h3>
                <p className="text-sm text-muted-foreground">
                  As apostas devem ser uma forma de entretenimento. Se precisar de ajuda, visite{" "}
                  <a
                    href="https://jogoresponsavel.pt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline font-semibold"
                  >
                    jogoresponsavel.pt
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
