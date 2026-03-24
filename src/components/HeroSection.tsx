import { WhatsAppButton } from "./WhatsApp";

const Logo = () => (
  <div className="flex items-center gap-2">
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" className="text-qs-emerald">
      <path d="M18 4C14 4 11 8 11 13C11 16 12 18 14 20L12 28C12 30 13 32 15 32C17 32 19 31 20 29L22 24C24 22 26 19 26 15C26 9 23 4 18 4Z" fill="currentColor" opacity="0.8"/>
      <circle cx="18" cy="10" r="4" fill="currentColor"/>
      <path d="M14 20C12 22 10 25 10 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
      <path d="M22 20C24 22 26 25 26 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
    </svg>
    <span className="font-display text-2xl font-bold tracking-tight text-foreground">
      quali<span className="text-qs-emerald">S</span>ports
    </span>
  </div>
);

const tags = ["FISIOTERAPIA", "PILATES", "FISIO PÉLVICA"];

const HeroSection = () => (
  <section className="relative min-h-screen flex flex-col justify-center items-center noise-overlay overflow-hidden"
    style={{ background: "linear-gradient(135deg, hsl(153 54% 14%) 0%, hsl(153 58% 11%) 100%)" }}>

    {/* Logo */}
    <div className="absolute top-6 left-6 md:top-8 md:left-10 z-10"
      style={{ animation: "hero-fade-down 0.6s ease forwards" }}>
      <Logo />
    </div>

    <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto gap-6">
      {/* Headline */}
      <h1 className="font-display font-extrabold uppercase text-primary leading-[1.05] text-4xl md:text-5xl lg:text-[64px] opacity-0"
        style={{ animation: "hero-fade-in 0.6s ease 0.15s forwards" }}>
        Dor, lesão ou desconforto te impedindo de viver com qualidade?
      </h1>

      {/* Subtitle */}
      <p className="font-body font-light text-foreground text-base md:text-lg lg:text-xl max-w-2xl opacity-0"
        style={{ animation: "hero-fade-in 0.5s ease 0.3s forwards" }}>
        A QualiSports é a clínica de saúde esportiva do Planalto Vinhais que une Fisioterapia, Pilates e Fisioterapia Pélvica para devolver o seu corpo ao que ele foi feito para fazer.
      </p>

      {/* Badge */}
      <div className="inline-flex items-center gap-2 border border-primary/60 rounded-pill px-4 py-2 text-primary text-sm font-body opacity-0"
        style={{ animation: "hero-fade-in 0.5s ease 0.4s forwards" }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
        Planalto Vinhais · São Luís – MA
      </div>

      {/* CTA */}
      <div className="opacity-0" style={{ animation: "hero-scale-in 0.5s ease 0.5s forwards" }}>
        <WhatsAppButton text="QUERO AGENDAR MINHA AVALIAÇÃO" />
      </div>

      {/* Tags */}
      <div className="flex flex-wrap justify-center gap-3 mt-4">
        {tags.map((tag, i) => (
          <span key={tag}
            className="border border-foreground/40 rounded-pill px-5 py-2 text-foreground text-xs font-body uppercase tracking-[0.2em] hover:bg-primary/15 transition-colors duration-200 opacity-0"
            style={{ animation: `hero-fade-in 0.4s ease ${0.6 + i * 0.08}s forwards` }}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default HeroSection;
