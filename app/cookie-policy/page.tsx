import Link from "next/link"
import { ArrowLeft, Cookie, Settings, BarChart3, Target, Globe, Shield } from "lucide-react"
import { SiteFooter } from "@/components/site-footer"

export default function CookiePolicyPage() {
  const sections = [
    {
      icon: Cookie,
      title: "1. O Que São Cookies?",
      color: "text-primary",
      content: `Cookies são pequenos ficheiros de texto que são colocados no seu dispositivo (computador, smartphone ou tablet) quando visita um website. Os cookies são amplamente utilizados para fazer os websites funcionarem de forma mais eficiente e fornecer informações aos proprietários do site.

Os cookies podem ser "persistentes" (permanecem após fechar o navegador) ou "de sessão" (eliminados quando fecha o navegador).`,
    },
    {
      icon: Settings,
      title: "2. Como Utilizamos Cookies",
      color: "text-accent",
      content: `A MelhorApostasEmPortugal utiliza cookies para:
• Manter as suas preferências e configurações
• Analisar como utiliza o nosso website
• Personalizar o conteúdo que vê
• Melhorar a funcionalidade do website
• Rastrear links de afiliados para casas de apostas
• Fornecer publicidade relevante`,
    },
    {
      icon: BarChart3,
      title: "3. Tipos de Cookies",
      color: "text-primary",
      content: `**Cookies Estritamente Necessários**
Essenciais para o funcionamento do website. Sem estes, os serviços não podem ser fornecidos.

**Cookies de Desempenho**
Recolhem informações sobre como os visitantes utilizam o website para melhorar o seu funcionamento.

**Cookies de Funcionalidade**
Permitem que o website se lembre das suas escolhas e forneça funcionalidades personalizadas.

**Cookies de Marketing/Publicidade**
Utilizados para fornecer anúncios relevantes e medir a eficácia das campanhas.`,
    },
    {
      icon: Globe,
      title: "4. Cookies de Terceiros",
      color: "text-accent",
      content: `Além dos nossos próprios cookies, utilizamos cookies de terceiros:
• **Google Analytics:** Para analisar o tráfego do website
• **Redes de Afiliados:** Para rastrear cliques e conversões
• **Plataformas de Publicidade:** Para exibir anúncios relevantes`,
    },
    {
      icon: Target,
      title: "5. Cookies de Afiliados",
      color: "text-primary",
      content: `Como website de comparação de casas de apostas, utilizamos cookies de afiliados para rastrear quando clica em links para casas de apostas parceiras. Estes cookies permitem-nos receber uma comissão se se registar numa casa de apostas através do nosso website.

Isto não afeta o preço que paga nem a sua experiência na casa de apostas.`,
    },
    {
      icon: Shield,
      title: "6. Como Gerir Cookies",
      color: "text-accent",
      content: `Pode controlar e/ou eliminar cookies como desejar através das configurações do seu navegador:

• **Google Chrome:** Definições → Privacidade e segurança → Cookies
• **Mozilla Firefox:** Opções → Privacidade e Segurança → Cookies
• **Safari:** Preferências → Privacidade → Cookies
• **Microsoft Edge:** Definições → Cookies e permissões do site

**Nota:** Se desativar os cookies, algumas funcionalidades do website podem não funcionar corretamente.

**Contacto:** cookies@melhorapostasemportugal.com`,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/50 glass-effect sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-semibold"
          >
            <ArrowLeft className="w-5 h-5" />
            Voltar para MelhorApostasEmPortugal
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 md:py-16 max-w-4xl">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-4">
            <Cookie className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold text-accent">Legal</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-foreground mb-4 font-serif">
            Política de <span className="text-gradient-gold">Cookies</span>
          </h1>
          <p className="text-muted-foreground">Última atualização: {new Date().toLocaleDateString("pt-PT")}</p>
        </div>

        <div className="space-y-6">
          {sections.map((section) => (
            <div
              key={section.title}
              className="p-6 rounded-2xl bg-card/50 border border-border/30 hover:border-accent/20 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg bg-secondary ${section.color}`}>
                  <section.icon className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold text-foreground">{section.title}</h2>
              </div>
              <div className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line">{section.content}</div>
            </div>
          ))}
        </div>

        {/* Back to Home */}
        <div className="mt-12 pt-8 border-t border-border/30">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-semibold"
          >
            <ArrowLeft className="w-5 h-5" />
            Voltar para a Página Inicial
          </Link>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
