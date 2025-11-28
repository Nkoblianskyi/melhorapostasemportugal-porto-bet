export function BettingInfoSection() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/50 to-transparent" />

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
           

            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6 font-serif leading-tight">
              Critérios de Avaliação <span className="text-gradient-gold">Rigorosos</span>
            </h2>

            <p className="text-muted-foreground mb-8 text-base md:text-lg leading-relaxed">
              A nossa equipa de especialistas analisa cada casa de apostas com base em critérios objetivos e
              transparentes. Testamos pessoalmente cada plataforma para garantir que apenas as melhores chegam até si.
            </p>

            <div className="space-y-4">
              {[
                { label: "Segurança e Licenciamento", value: 100 },
                { label: "Variedade de Mercados", value: 95 },
                { label: "Qualidade das Odds", value: 90 },
                { label: "Bónus e Promoções", value: 85 },
                { label: "Experiência Mobile", value: 92 },
              ].map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-foreground">{item.label}</span>
                    <span className="text-sm font-bold text-primary">{item.value}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full gradient-gold rounded-full transition-all duration-1000"
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-colors">
              
              <h3 className="font-bold text-foreground mb-2">Odds Competitivas</h3>
              <p className="text-sm text-muted-foreground">
                Comparamos as odds entre todas as casas para encontrar as melhores cotações.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border/50 hover:border-accent/30 transition-colors mt-8">
              
              <h3 className="font-bold text-foreground mb-2">Mercados Amplos</h3>
              <p className="text-sm text-muted-foreground">Futebol, ténis, basquetebol, F1 e muito mais disponível.</p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border/50 hover:border-accent/30 transition-colors">
              
              <h3 className="font-bold text-foreground mb-2">Foco Portugal</h3>
              <p className="text-sm text-muted-foreground">
                Especialistas no mercado português com conhecimento local.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-colors mt-8">
              
              <h3 className="font-bold text-foreground mb-2">Dados Reais</h3>
              <p className="text-sm text-muted-foreground">
                Avaliações baseadas em testes reais e feedback de utilizadores.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
