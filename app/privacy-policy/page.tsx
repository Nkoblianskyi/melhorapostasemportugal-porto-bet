import Link from "next/link"
import { ArrowLeft, Shield, Lock, Eye, Database, UserCheck, FileText } from "lucide-react"
import { SiteFooter } from "@/components/site-footer"

export default function PrivacyPolicyPage() {
  const sections = [
    {
      icon: Eye,
      title: "1. Introdução",
      color: "text-primary",
      content: `A MelhorApostasEmPortugal (melhorapostasemportugal.com) está comprometida em proteger a sua privacidade e os seus dados pessoais. Esta Política de Privacidade explica como recolhemos, utilizamos, divulgamos e protegemos as suas informações quando visita o nosso website.

Ao utilizar o nosso website, concorda com a recolha e utilização de informações de acordo com esta política.`,
    },
    {
      icon: Database,
      title: "2. Informações que Recolhemos",
      color: "text-accent",
      content: `**Informações Fornecidas por Si:**
• Nome e informações de contacto (email)
• Comunicações que nos envia
• Feedback e respostas a inquéritos

**Informações Recolhidas Automaticamente:**
• Endereço IP e localização geográfica aproximada
• Tipo de navegador e dispositivo
• Páginas visitadas e tempo de permanência
• Cookies e tecnologias similares`,
    },
    {
      icon: FileText,
      title: "3. Como Utilizamos as Suas Informações",
      color: "text-primary",
      content: `Utilizamos as informações recolhidas para:
• Fornecer e melhorar os nossos serviços de comparação
• Personalizar a sua experiência no website
• Comunicar consigo sobre atualizações e ofertas relevantes
• Analisar o uso do website e tendências
• Prevenir fraudes e garantir a segurança
• Cumprir obrigações legais e regulamentares`,
    },
    {
      icon: Lock,
      title: "4. Partilha de Informações",
      color: "text-accent",
      content: `Não vendemos as suas informações pessoais. Podemos partilhar as suas informações nas seguintes circunstâncias:

• **Parceiros de Apostas:** Quando clica em links de afiliados para casas de apostas
• **Prestadores de Serviços:** Empresas que nos ajudam a operar o website
• **Requisitos Legais:** Quando exigido por lei ou autoridades competentes
• **Proteção de Direitos:** Para proteger os nossos direitos e segurança`,
    },
    {
      icon: UserCheck,
      title: "5. Os Seus Direitos (RGPD)",
      color: "text-primary",
      content: `De acordo com o RGPD, tem os seguintes direitos:
• **Direito de Acesso:** Solicitar cópias dos seus dados pessoais
• **Direito de Retificação:** Corrigir informações incorretas
• **Direito ao Apagamento:** Solicitar a eliminação dos seus dados
• **Direito à Limitação:** Restringir o processamento dos seus dados
• **Direito à Portabilidade:** Transferir os seus dados para outro serviço
• **Direito de Oposição:** Opor-se ao processamento dos seus dados`,
    },
    {
      icon: Shield,
      title: "6. Segurança e Contacto",
      color: "text-accent",
      content: `Implementamos medidas de segurança técnicas e organizacionais adequadas para proteger os seus dados pessoais contra acesso não autorizado, alteração, divulgação ou destruição.

**Contacto:**
Email: privacidade@melhorapostasemportugal.com
Localização: Lisboa, Portugal

Podemos atualizar esta política periodicamente. Recomendamos revisitar esta página regularmente.`,
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Legal</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-foreground mb-4 font-serif">
            Política de <span className="text-gradient-gold">Privacidade</span>
          </h1>
          <p className="text-muted-foreground">Última atualização: {new Date().toLocaleDateString("pt-PT")}</p>
        </div>

        <div className="space-y-6">
          {sections.map((section) => (
            <div
              key={section.title}
              className="p-6 rounded-2xl bg-card/50 border border-border/30 hover:border-primary/20 transition-colors"
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

      {/* Footer */}
      <SiteFooter />
    </div>
  )
}
