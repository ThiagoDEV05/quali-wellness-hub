import { MapPin } from "lucide-react";

const LocationSection = () => (
  <section className="relative noise-overlay py-20 md:py-28"
    style={{ background: "linear-gradient(135deg, hsl(153 54% 14%) 0%, hsl(153 58% 11%) 100%)" }}>
    <div className="relative z-10 max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text side */}
        <div className="scroll-reveal">
          <MapPin className="w-10 h-10 text-primary mb-4" />
          <h2 className="font-display font-bold text-primary text-3xl md:text-4xl uppercase mb-4">
            Estamos no Planalto Vinhais, pertinho de você
          </h2>
          <p className="font-body font-light text-foreground text-base md:text-lg leading-relaxed mb-6">
            A QualiSports fica em São Luís, no bairro Planalto Vinhais. Fácil acesso, estacionamento, ambiente climatizado e equipe sempre pronta para te receber.
          </p>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-primary text-primary font-body font-semibold rounded-lg px-6 py-3 transition-all duration-200 hover:bg-primary hover:text-primary-foreground"
          >
            VER NO MAPA
          </a>
        </div>

        {/* Map placeholder */}
        <div className="scroll-reveal rounded-[20px] overflow-hidden border border-primary/25 aspect-[4/3]"
          style={{ transitionDelay: "150ms" }}>
          <img
            src="https://placehold.co/600x450/1A4D36/C9913A?text=Mapa"
            alt="Localização QualiSports no Planalto Vinhais"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
);

export default LocationSection;
