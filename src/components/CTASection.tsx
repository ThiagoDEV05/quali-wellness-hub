import { WhatsAppButton } from "./WhatsApp";

const CTASection = () => (
  <section className="relative py-24 md:py-32 overflow-hidden"
    style={{
      background: `
        radial-gradient(ellipse at center, rgba(201,145,58,0.15) 0%, transparent 70%),
        linear-gradient(180deg, hsl(153 58% 11%) 0%, hsl(153 54% 14%) 100%)
      `,
    }}>
    <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
      <h2 className="scroll-reveal font-display font-extrabold text-primary text-3xl md:text-4xl lg:text-5xl uppercase mb-6 leading-tight">
        Dê o primeiro passo hoje. Sua avaliação começa com uma mensagem.
      </h2>
      <p className="scroll-reveal font-body text-foreground text-base md:text-lg mb-10 font-light" style={{ transitionDelay: "100ms" }}>
        Não espere a dor piorar. Não normalize o desconforto. Entre em contato agora pelo WhatsApp e descubra qual tratamento é o ideal para o seu caso.
      </p>
      <div className="scroll-reveal mb-6" style={{ transitionDelay: "200ms" }}>
        <WhatsAppButton
          text="FALAR COM A QUALISPORTS AGORA"
          className="text-base md:text-lg px-10 py-5 animate-pulse-wa"
        />
      </div>
      <p className="scroll-reveal font-body text-qs-text-secondary text-sm" style={{ transitionDelay: "300ms" }}>
        Atendimento rápido · Equipe especializada · Planalto Vinhais, São Luís
      </p>
    </div>
  </section>
);

export default CTASection;
