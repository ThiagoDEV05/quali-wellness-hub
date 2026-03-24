import { WhatsAppButton } from "./WhatsApp";
import { Activity, Dumbbell, Heart } from "lucide-react";

const services = [
  {
    icon: Activity,
    title: "Fisioterapia Esportiva",
    text: "Avaliação funcional + protocolos para lesões musculoesqueléticas. LCA, coluna, ombro, joelho, tornozelo e recovery avançado para atletas de todos os níveis.",
  },
  {
    icon: Dumbbell,
    title: "Pilates",
    text: "Sala completa com equipamentos profissionais. Para quem nunca praticou, para idosos, e para atletas que querem desempenho. Sempre com supervisão especializada.",
  },
  {
    icon: Heart,
    title: "Fisioterapia Pélvica",
    text: "Tratamento especializado para saúde feminina: incontinência urinária, dores pélvicas, recuperação pós-parto, endometriose e muito mais. Em um ambiente seguro e acolhedor.",
  },
];

const ServicesSection = () => (
  <section className="relative noise-overlay py-20 md:py-28"
    style={{ background: "linear-gradient(135deg, hsl(153 54% 14%) 0%, hsl(153 58% 11%) 100%)" }}>
    <div className="relative z-10 max-w-6xl mx-auto px-4">
      <h2 className="scroll-reveal font-display font-bold text-primary text-3xl md:text-4xl lg:text-5xl text-center uppercase mb-14">
        O que a QualiSports oferece pra você
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
        {services.map((s, i) => (
          <div key={i}
            className="scroll-reveal group bg-qs-card rounded-[20px] border-t-[3px] border-t-primary p-7 md:p-8 transition-all duration-300 hover:scale-[1.03]"
            style={{
              boxShadow: "var(--shadow-card)",
              transitionDelay: `${i * 120}ms`,
            }}>
            <s.icon className="w-10 h-10 text-primary mb-5 group-hover:scale-110 transition-transform" />
            <h3 className="font-display font-bold text-primary text-xl md:text-2xl uppercase mb-3">
              {s.title}
            </h3>
            <p className="font-body font-light text-foreground text-sm md:text-[15px] leading-relaxed">
              {s.text}
            </p>
          </div>
        ))}
      </div>

      <div className="scroll-reveal flex justify-center">
        <WhatsAppButton text="QUERO SABER QUAL TRATAMENTO É PRA MIM" />
      </div>
    </div>
  </section>
);

export default ServicesSection;
