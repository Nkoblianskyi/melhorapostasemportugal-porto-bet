import Link from "next/link"
import Image from "next/image"
import { Info, AlertTriangle, Shield, Mail } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border/50 bg-card/50">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12 pb-12 border-b border-border/30">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image src="/favicon.ico" alt="Logo" width={40} height={40} />
              <div className="flex flex-col">
                <span className="text-sm md:text-base text-green-800 font-black leading-none uppercase tracking-tight">
                  MELHOR<span className="text-red-900">APOSTAS</span>EM PORTUGAL
                </span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm max-w-md leading-relaxed mb-6">
              O seu guia de confiança para as melhores casas de apostas desportivas licenciadas pelo SRIJ em Portugal.
              Comparações honestas, bónus exclusivos e análises detalhadas.
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>info@melhorapostasemportugal.com</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-sm font-bold mb-4 text-foreground uppercase tracking-wider">Navegação</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Página Inicial
                </Link>
              </li>
              <li>
                <Link
                  href="#betting-sites"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Casas de Apostas
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Sobre Nós
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-sm font-bold mb-4 text-foreground uppercase tracking-wider">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie-policy"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Política de Cookies
                </Link>
              </li>
              <li>
                <a
                  href="https://jogoresponsavel.pt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Jogo Responsável
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Partners Section */}
        <div className="mb-12 pb-12 border-b border-border/30">
          <h4 className="text-sm font-bold mb-6 text-center text-foreground uppercase tracking-wider flex items-center justify-center gap-2">
            <Shield className="h-4 w-4 text-accent" />
            Parceiros de Jogo Responsável
          </h4>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
            {[
              { href: "https://www.srij.turismodeportugal.pt/", src: "/srij-new.svg", alt: "SRIJ" },
              { href: "https://www.sicad.pt/", src: "/icad.png", alt: "SICAD" },
              { href: "https://www.gamcare.org.uk/", src: "/gamecare-new.svg", alt: "GamCare" },
              { href: "https://www.gambleaware.org/", src: "/gamble-aware.webp", alt: "GambleAware" },
              { href: "https://www.jogoresponsavel.pt/", src: "/jogo-responsavel-new.png", alt: "Jogo Responsável" },
            ].map((partner) => (
              <Link
                key={partner.alt}
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 md:p-4 rounded-lg bg-secondary/50 hover:bg-secondary border border-border/30 hover:border-primary/30 transition-all"
              >
                <div className="relative w-[70px] h-[28px] md:w-[80px] md:h-[32px]">
                  <Image src={partner.src || "/placeholder.svg"} alt={partner.alt} fill className="object-contain" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center text-sm text-muted-foreground space-y-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="gradient-gold text-background px-4 py-2 rounded-lg font-bold text-sm">18+</div>
            <span className="font-semibold text-foreground">Apenas para maiores de 18 anos</span>
          </div>

          <div className="flex items-start justify-center gap-3 max-w-3xl mx-auto">
            <Info className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <p className="text-left">
              MelhorApostasEmPortugal é um site de comparação independente. Não somos uma casa de apostas. Todo o
              conteúdo é destinado a maiores de 18 anos residentes em Portugal. Os links externos direcionam para sites
              licenciados pelo SRIJ.
            </p>
          </div>

          <p className="flex items-center justify-center gap-2 text-destructive font-semibold">
            <AlertTriangle className="h-4 w-4" />
            <span>O jogo pode causar dependência. Jogue com responsabilidade.</span>
          </p>

          <p className="font-medium text-muted-foreground pt-4 border-t border-border/30">
            © {new Date().getFullYear()} MelhorApostasEmPortugal. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
