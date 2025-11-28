import Link from "next/link"
import { ArrowLeft, Trophy, Shield, Users, Target, Award, CheckCircle } from "lucide-react"
import { SiteFooter } from "@/components/site-footer"

export default function AboutPage() {
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

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Trophy className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Sobre Nós</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-foreground mb-6 font-serif">
              A Sua Referência em <span className="text-gradient-gold">Apostas Desportivas</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Somos o maior e mais confiável comparador de casas de apostas em Portugal. A nossa missão é ajudá-lo a
              encontrar as melhores plataformas licenciadas pelo SRIJ.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 pb-16 md:pb-24">
        {/* Mission Section */}
        <section className="max-w-4xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">A Nossa Missão</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                No MelhorApostasEmPortugal, acreditamos que todos os apostadores merecem acesso a informação
                transparente e imparcial sobre casas de apostas.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                A nossa equipa de especialistas dedica-se a testar e avaliar cada plataforma de forma rigorosa,
                garantindo que apenas as melhores opções chegam até si.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Shield, label: "100% Licenciado", value: "SRIJ" },
                { icon: Users, label: "Utilizadores", value: "50K+" },
                { icon: Target, label: "Precisão", value: "99%" },
                { icon: Award, label: "Anos Experiência", value: "5+" },
              ].map((stat) => (
                <div key={stat.label} className="p-4 rounded-xl bg-card border border-border/50 text-center">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-black text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">Os Nossos Valores</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Transparência",
                description: "Divulgamos claramente como geramos receita e os nossos critérios de avaliação.",
                icon: Shield,
              },
              {
                title: "Independência",
                description: "As nossas avaliações são baseadas em testes reais, não em pagamentos de parceiros.",
                icon: Target,
              },
              {
                title: "Responsabilidade",
                description: "Promovemos o jogo responsável e fornecemos recursos para quem precisa de ajuda.",
                icon: Users,
              },
            ].map((value) => (
              <div
                key={value.title}
                className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-colors"
              >
                <value.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How We Work Section */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">Como Avaliamos</h2>
          <div className="space-y-4">
            {[
              "Verificamos a licença SRIJ e legitimidade do operador",
              "Testamos pessoalmente o registo, depósitos e levantamentos",
              "Avaliamos a variedade de mercados e qualidade das odds",
              "Analisamos bónus, promoções e requisitos de apostas",
              "Testamos o suporte ao cliente e experiência mobile",
              "Atualizamos regularmente as nossas avaliações",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-card/50 border border-border/30">
                <div className="flex-shrink-0 w-8 h-8 rounded-full gradient-gold flex items-center justify-center font-bold text-background">
                  {index + 1}
                </div>
                <p className="text-foreground">{item}</p>
                <CheckCircle className="w-5 h-5 text-accent ml-auto" />
              </div>
            ))}
          </div>
        </section>

        {/* Back to Home */}
        <div className="max-w-4xl mx-auto mt-12 pt-8 border-t border-border/30">
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
