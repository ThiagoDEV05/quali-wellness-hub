import { Star } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";

const testimonials = [
  {
    name: "João V.",
    role: "Paciente de fisioterapia",
    text: "Fiz cirurgia no joelho e achei que nunca ia voltar a correr. Em 3 meses de protocolo com a equipe QualiSports, voltei a treinar normalmente. Valeu muito.",
  },
  {
    name: "Mariana S.",
    role: "Paciente de Pilates",
    text: "Eu tinha medo de começar por não ter condicionamento. As instrutoras me acolheram desde o primeiro dia. Hoje tenho muito mais disposição e menos dor.",
  },
  {
    name: "Camila R.",
    role: "Paciente de fisioterapia pélvica",
    text: "Depois do parto eu normalizei sentir desconforto por anos. A fisioterapia pélvica mudou minha qualidade de vida. Me arrependo de não ter buscado antes.",
  },
];

const SocialProofSection = () => {
  const { count, ref: counterRef } = useCountUp(500, 2000);

  return (
    <section className="relative noise-overlay py-20 md:py-28"
      style={{ background: "hsl(153 58% 11%)" }}>
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <h2 className="scroll-reveal font-display font-bold text-primary text-3xl md:text-4xl lg:text-5xl text-center uppercase mb-10">
          Por que pacientes de São Luís escolhem a QualiSports
        </h2>

        <div ref={counterRef} className="scroll-reveal text-center mb-14">
          <span className="font-display font-extrabold text-primary text-6xl md:text-7xl lg:text-[96px]">
            {count}+
          </span>
          <p className="font-body text-qs-text-secondary text-lg mt-2">pacientes atendidos</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i}
              className="scroll-reveal rounded-[20px] p-6 md:p-7 border border-primary/25"
              style={{
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(8px)",
                transitionDelay: `${i * 120}ms`,
              }}>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="font-body italic text-foreground text-sm md:text-[15px] leading-relaxed mb-5">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-qs-card flex items-center justify-center text-primary font-display font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-body font-semibold text-primary text-sm">{t.name}</p>
                  <p className="font-body text-qs-text-secondary text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
