import { CheckCircle } from "lucide-react";

const pains = [
  "Sente dor ao praticar exercício e não sabe o que está errado",
  "Já se lesionou e sente que nunca voltou 100%",
  "Tem dor nas costas, joelho ou ombro que não passa de jeito nenhum",
  "Passou por cirurgia e ainda não fez reabilitação adequada",
  "Quer começar o Pilates mas não sabe se o seu corpo aguenta",
  "Convive com incontinência, dor pélvica ou desconforto íntimo em silêncio",
];

const ChecklistSection = () => (
  <section className="relative noise-overlay py-20 md:py-28"
    style={{ background: "hsl(153 58% 11%)" }}>
    <div className="relative z-10 max-w-5xl mx-auto px-4">
      <h2 className="scroll-reveal font-display font-bold text-primary text-3xl md:text-4xl lg:text-5xl text-center uppercase mb-12">
        Você se identifica com alguma dessas situações?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mb-10">
        {pains.map((pain, i) => (
          <div key={i}
            className="scroll-reveal-left flex items-start gap-3 p-4"
            style={{ transitionDelay: `${i * 100}ms` }}>
            <CheckCircle className="w-6 h-6 text-qs-emerald shrink-0 mt-0.5" />
            <span className="font-body text-foreground text-base md:text-lg">{pain}</span>
          </div>
        ))}
      </div>

      <hr className="gold-divider mb-8" />

      <p className="scroll-reveal font-body italic text-qs-text-secondary text-center text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
        "O problema não é falta de vontade. É falta de um protocolo correto, feito para o <strong className="text-foreground font-semibold">SEU</strong> corpo. Cada dia sem tratamento é um dia a mais de dor desnecessária."
      </p>
    </div>
  </section>
);

export default ChecklistSection;
