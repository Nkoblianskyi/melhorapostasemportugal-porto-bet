import { Shield, Award, Clock, Users, CheckCircle, Zap } from "lucide-react"

export function WhyChooseUsSection() {
  const features = [
    {
      icon: Shield,
      title: "100% Licenciado",
      description: "Todas as casas de apostas são licenciadas pelo SRIJ - a autoridade reguladora de jogo em Portugal.",
      color: "from-accent/20 to-accent/5",
      iconColor: "text-accent",
    },
    {
      icon: Award,
      title: "Análises Imparciais",
      description: "Avaliações honestas baseadas em critérios rigorosos. Testamos cada plataforma pessoalmente.",
      color: "from-primary/20 to-primary/5",
      iconColor: "text-primary",
    },
    {
      icon: Clock,
      title: "Sempre Atualizado",
      description: "Informações atualizadas regularmente. Bónus, odds e promoções sempre em dia.",
      color: "from-accent/20 to-accent/5",
      iconColor: "text-accent",
    },
    {
      icon: Users,
      title: "Comunidade Ativa",
      description: "Mais de 50.000 utilizadores confiam nas nossas recomendações todos os meses.",
      color: "from-primary/20 to-primary/5",
      iconColor: "text-primary",
    },
    {
      icon: CheckCircle,
      title: "Bónus Verificados",
      description: "Todos os bónus são testados e verificados pela nossa equipa antes de serem publicados.",
      color: "from-accent/20 to-accent/5",
      iconColor: "text-accent",
    },
    {
      icon: Zap,
      title: "Suporte Dedicado",
      description: "Equipa disponível para responder às suas questões sobre apostas desportivas.",
      color: "from-primary/20 to-primary/5",
      iconColor: "text-primary",
    },
  ]

  return (
    <section className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4 font-serif">
            Porquê <span className="text-gradient-gold">Escolher-nos</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            Somos o maior comparador de casas de apostas em Portugal. Confiança, transparência e qualidade são os nossos
            pilares.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group relative p-6 md:p-8 rounded-2xl bg-gradient-to-br ${feature.color} border border-border/30 hover:border-primary/30 transition-all duration-300 hover:scale-[1.02]`}
            >

              <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>

              {/* Decorative element */}
              <div className="absolute top-4 right-4 text-6xl font-black text-foreground/5 select-none">
                {String(index + 1).padStart(2, "0")}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
