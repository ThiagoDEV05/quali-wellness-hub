import { useState } from "react";
import equipeImg from "@/assets/equipe-qualisports.jpg";
import fisioterapiaImg from "@/assets/fisioterapia.jpg";
import recoveryImg from "@/assets/recovery.jpg";
import pelvicaImg from "@/assets/fisio-pelvica.jpg";
import pilatesImg from "@/assets/pilates.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useCountUp } from "@/hooks/useCountUp";
import { GoldCTA, FloatingWhatsApp } from "@/components/WhatsApp";

/* ─── HERO ─── */
const Hero = () => (
  <section className="px-4 pt-24 pb-16 md:pt-28 md:pb-20" style={{ background: "var(--qs-darkest)" }}>
    <div className="max-w-[1160px] mx-auto flex flex-col md:flex-row gap-10 md:gap-12 items-center">
      {/* Text */}
      <div className="flex-1 order-2 md:order-1">
        <p className="qs-section-label">Clínica Especializada em São Luís – MA</p>
        <h1 className="qs-heading text-[32px] md:text-[48px] lg:text-[56px] text-white mb-5">
          Você não precisa<br/>aprender a viver<br/>com a <em>dor.</em>
        </h1>
        <p className="text-[15px] md:text-base leading-[1.72] mb-7 max-w-[490px]" style={{ color: "var(--qs-text-light)" }}>
          Fisioterapia, Recovery e Fisioterapia Pélvica com diagnóstico real, plano personalizado e profissionais que tratam sua lesão — não uma ficha.
        </p>

        {/* Promises */}
        <div className="flex flex-col gap-2.5 mb-7">
          {[
            { icon: "🏆", text: "Atendimento especializado do amador ao atleta profissional" },
            { icon: "📋", text: "Avaliação gratuita antes de qualquer compromisso" },
            { icon: "⚡", text: "Protocolos baseados em evidência — não em achismo" },
          ].map((p) => (
            <div key={p.text} className="flex items-center gap-3 text-sm font-semibold" style={{ color: "var(--qs-text-light)" }}>
              <span className="w-8 h-8 rounded-[9px] flex items-center justify-center shrink-0 text-base"
                style={{ background: "rgba(200,146,58,0.12)", border: "1px solid rgba(200,146,58,0.22)" }}>
                {p.icon}
              </span>
              {p.text}
            </div>
          ))}
        </div>

        <GoldCTA text="Quero Minha Avaliação Gratuita" message="Olá! Vim pelo site e gostaria de agendar minha avaliação gratuita na QualiSports." />

        <div className="flex gap-5 flex-wrap pt-5 mt-5 text-xs font-semibold" style={{ borderTop: "1px solid var(--qs-border-subtle)", color: "var(--qs-text-muted)" }}>
          <span>✓ Sem fila de espera</span>
          <span>✓ Sem encaminhamento</span>
          <span>✓ Resposta rápida</span>
        </div>
      </div>

      {/* Image */}
      <div className="flex-shrink-0 w-full md:w-[42%] order-1 md:order-2">
        <img src={equipeImg} alt="Equipe QualiSports"
          className="w-full rounded-[20px] object-cover" loading="lazy" />
        <div className="flex gap-2 flex-wrap justify-center mt-3">
          {["Fisioterapia", "Recovery", "Fisio Pélvica", "Pilates"].map(t => (
            <span key={t} className="qs-tag">{t}</span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ─── STRIP ─── */
const items = [
  { icon: "🎯", title: "Avaliação gratuita", desc: "Sem custo, sem compromisso. Você entende o que tem antes de decidir." },
  { icon: "📍", title: "Sem encaminhamento", desc: "Pode agendar direto, sem precisar de médico." },
  { icon: "⏱", title: "Horários flexíveis", desc: "Atendimento manhã e tarde para não prejudicar seu trabalho." },
  { icon: "💬", title: "Resposta imediata", desc: "Agende pelo WhatsApp agora. Em minutos tem seu horário." },
];
const Strip = () => (
  <section className="py-8 px-4" style={{ background: "var(--qs-strip)" }}>
    <div className="max-w-[1160px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0">
      {items.map((it, i) => (
        <div key={i} className={`text-center px-2 md:px-6 ${i < items.length - 1 ? 'md:border-r md:border-white/[0.07]' : ''}`}>
          <div className="text-2xl mb-2">{it.icon}</div>
          <strong className="block text-sm font-extrabold mb-1">{it.title}</strong>
          <span className="text-xs leading-snug" style={{ color: "var(--qs-text-muted)" }}>{it.desc}</span>
        </div>
      ))}
    </div>
  </section>
);

/* ─── ABOUT ─── */
const About = () => (
  <section className="py-16 md:py-24 px-4" style={{ background: "var(--qs-darkest)" }}>
    <div className="max-w-[800px] mx-auto">
      <div className="text-center mb-8">
        <span className="qs-badge" style={{ boxShadow: "0 8px 24px var(--qs-gold-glow)" }}>
          Nossa missão: aprimorar sua saúde
        </span>
      </div>
      <div>
        <p className="qs-section-label">Quem Somos</p>
        <h2 className="qs-heading text-[28px] md:text-[36px] lg:text-[42px] text-white mb-4">
          A clínica que trata você<br/>como <em>pessoa</em>, não protocolo
        </h2>
        <p className="qs-body mb-7 max-w-lg">
          A QualiSports nasceu da frustração de ver pacientes rodando de clínica em clínica sem resultado. Criamos um espaço onde cada caso é estudado a fundo — porque dor generalizada não existe, e tratamento genérico não funciona.
        </p>
        <div className="flex flex-col gap-4 mb-7">
          {[
            { icon: "🎓", title: "Especialização constante", desc: "Nossa equipe se atualiza nas melhores técnicas de reabilitação do Brasil e do mundo." },
            { icon: "🔬", title: "Diagnóstico funcional completo", desc: "Antes de qualquer tratamento, entendemos o que gerou sua dor — não só onde dói." },
            { icon: "📈", title: "Metas claras e acompanhamento real", desc: 'Você sabe o que esperar em cada fase. Sem achismo, sem "vamos ver como vai".' },
          ].map(it => (
            <div key={it.title} className="flex gap-3.5 items-start">
              <span className="w-[42px] h-[42px] rounded-[11px] flex items-center justify-center text-lg shrink-0"
                style={{ background: "rgba(200,146,58,0.1)", border: "1px solid rgba(200,146,58,0.2)" }}>
                {it.icon}
              </span>
              <div>
                <strong className="block text-sm font-bold mb-0.5">{it.title}</strong>
                <span className="text-[13px] leading-snug" style={{ color: "var(--qs-text-muted)" }}>{it.desc}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-3">
          {[
            { num: "500+", label: "Pacientes tratados" },
            { num: "98%", label: "Índice de satisfação" },
            { num: "4", label: "Especialidades" },
          ].map(s => (
            <div key={s.label} className="rounded-[14px] p-4 text-center"
              style={{ background: "rgba(21,92,63,0.25)", border: "1px solid rgba(200,146,58,0.12)" }}>
              <div className="text-2xl md:text-[32px] font-black leading-none mb-1" style={{ color: "var(--qs-gold)" }}>{s.num}</div>
              <div className="text-[11px]" style={{ color: "var(--qs-text-muted)" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ─── SERVICE BLOCK (reusable) ─── */
interface ServiceProps {
  number: string;
  badge: string;
  badgeEmoji: string;
  title: React.ReactNode;
  desc: string;
  bullets: string[];
  objectionTitle: string;
  objectionText: string;
  tags: string[];
  ctaText: string;
  imgSrc?: string;
  imgPlaceholder?: string;
  reversed?: boolean;
  bg: string;
}

const ServiceBlock = ({ number, badge, badgeEmoji, title, desc, bullets, objectionTitle, objectionText, tags, ctaText, imgSrc, imgPlaceholder, reversed, bg }: ServiceProps) => (
  <section className="py-14 md:py-20 px-4" style={{ background: bg }}>
    <div className={`max-w-[1160px] mx-auto flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-10 items-center`}>
      {/* Image side */}
      <div className="w-full md:w-[42%]">
        <span className="qs-badge mb-4">{badgeEmoji} {badge}</span>
        <img src={imgSrc || `https://placehold.co/480x380/155c3f/c8923a?text=${imgPlaceholder}`} alt={badge}
          className="w-full rounded-[20px] object-cover" loading="lazy" />
      </div>
      {/* Text side */}
      <div className="flex-1">
        <p className="qs-section-label">Especialidade {number}</p>
        <h3 className="qs-heading text-[24px] md:text-[30px] lg:text-[34px] text-white mb-3.5">{title}</h3>
        <p className="qs-body mb-5">{desc}</p>
        <ul className="flex flex-col gap-2.5 mb-5">
          {bullets.map((b, i) => (
            <li key={i} className="qs-bullet">
              <span className="qs-bullet-arrow">→</span>{b}
            </li>
          ))}
        </ul>
        <div className="qs-objection">
          <strong>{objectionTitle}</strong><br/>{objectionText}
        </div>
        <div className="flex flex-wrap gap-1.5 mb-6">
          {tags.map(t => <span key={t} className="qs-tag">{t}</span>)}
        </div>
        <GoldCTA text={ctaText} />
      </div>
    </div>
  </section>
);

/* ─── PROCESS ─── */
const steps = [
  { num: "1", title: "Agende pelo WhatsApp", desc: "Sem burocracia. Em minutos seu horário está marcado." },
  { num: "2", title: "Avaliação gratuita", desc: "Consulta completa: histórico, exame físico e diagnóstico funcional." },
  { num: "3", title: "Plano personalizado", desc: "Protocolo específico com metas e prazo estimado para o seu caso." },
  { num: "4", title: "Evolução real", desc: "Cada sessão tem progresso mensurável. Você vê a melhora acontecer." },
];
const Process = () => (
  <section className="py-16 md:py-24 px-4" style={{ background: "var(--qs-dark)" }}>
    <div className="max-w-[1160px] mx-auto">
      <p className="qs-section-label">Processo</p>
      <h2 className="qs-heading text-[28px] md:text-[36px] lg:text-[42px] text-white text-center mb-12 md:mb-14">
        Do primeiro contato<br/>à sua <em>alta</em> — sem complicação
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {steps.map(s => (
          <div key={s.num} className="scroll-reveal text-center">
            <div className="w-[56px] h-[56px] md:w-[62px] md:h-[62px] rounded-full flex items-center justify-center text-xl md:text-[22px] font-black mx-auto mb-4"
              style={{ background: "rgba(200,146,58,0.1)", border: "1.5px solid rgba(200,146,58,0.35)", color: "var(--qs-gold)", fontFamily: "serif" }}>
              {s.num}
            </div>
            <h4 className="text-sm md:text-base font-black mb-2">{s.title}</h4>
            <p className="text-xs" style={{ color: "var(--qs-text-muted)" }}>{s.desc}</p>
          </div>
        ))}
      </div>
      <div className="text-center">
        <GoldCTA text="Começar Agora — É Gratuito" />
      </div>
    </div>
  </section>
);

/* ─── FAQ ─── */
const faqs = [
  { q: "Preciso de encaminhamento médico para fazer fisioterapia?", a: "Não. O fisioterapeuta é um profissional autônomo com capacidade de diagnóstico funcional e definição de tratamento. Você pode nos procurar diretamente, sem nenhum papel médico." },
  { q: "Quanto tempo leva o tratamento?", a: 'Depende completamente do seu caso — e vamos te dizer isso com honestidade na avaliação. Não fazemos promessas genéricas de "melhora em 3 sessões". O que fazemos é te dar um plano realista com estimativa real, baseada no seu diagnóstico.' },
  { q: "Fisioterapia dói? Tenho medo de piorar.", a: "Fisioterapia bem feita não deveria causar dor desnecessária. Alguns processos envolvem desconforto pontual — e sempre comunicado antes. Piorar por fisioterapia acontece quando o tratamento é inadequado para o caso, não quando é prescrito corretamente." },
  { q: "Posso fazer fisioterapia mesmo sem exame?", a: "Sim. O fisioterapeuta realiza avaliação clínica e funcional que, na maioria dos casos, é suficiente para início do tratamento. Se você tiver exames, ótimo. Se não tiver, não é impedimento." },
  { q: "Fisioterapia pélvica é só para mulheres?", a: "Não. Homens também têm assoalho pélvico e também sofrem de disfunções que têm tratamento — incontinência, dor pélvica, pós-operatório de próstata. A especialidade é para qualquer pessoa." },
  { q: "E se eu tiver com dor há muito tempo e nada adiantou?", a: "Dor crônica que não responde a tratamento geralmente tem uma causa que ainda não foi abordada corretamente. Nossa avaliação é justamente para encontrar essa causa — não para repetir o que já foi tentado. Agende a avaliação gratuita e veja se conseguimos te ajudar." },
];

const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="py-5 cursor-pointer" style={{ borderBottom: "1px solid var(--qs-border-subtle)" }}
      onClick={() => setOpen(!open)}>
      <div className="flex justify-between items-center gap-4">
        <span className="text-[14px] md:text-[15px] font-bold">{q}</span>
        <span className="w-[26px] h-[26px] rounded-full flex items-center justify-center text-lg shrink-0"
          style={{ border: "1.5px solid var(--qs-gold-border)", color: "var(--qs-gold)" }}>
          {open ? "−" : "+"}
        </span>
      </div>
      {open && (
        <p className="text-[13px] leading-[1.7] mt-3.5" style={{ color: "var(--qs-text-muted)" }}>{a}</p>
      )}
    </div>
  );
};

const FAQ = () => (
  <section className="py-16 md:py-24 px-4" style={{ background: "var(--qs-darkest)" }}>
    <div className="max-w-[860px] mx-auto">
      <p className="qs-section-label">Dúvidas Frequentes</p>
      <h2 className="qs-heading text-[28px] md:text-[36px] lg:text-[42px] text-white text-center mb-10 md:mb-12">
        As perguntas que todo mundo<br/>tem <em>medo de fazer</em>
      </h2>
      {faqs.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} />)}
    </div>
  </section>
);

/* ─── TESTIMONIALS ─── */
const testimonials = [
  { text: "Operei o LCA e achei que não voltaria a jogar. Na QualiSports me deram um plano claro e metas por fase. Voltei ao campo em 8 meses.", name: "Carlos A.", role: "Pós-op LCA · Futebol" },
  { text: "Dor lombar há 3 anos. Passei por outros lugares sem resultado. Aqui entenderam que minha dor vinha de uma instabilidade que ninguém tinha identificado.", name: "Ana Paula R.", role: "Fisioterapia · Coluna" },
  { text: "Eu vazava urina ao espirrar há anos e achava que era normal depois de ter filho. Fiz fisioterapia pélvica e em poucas semanas isso acabou.", name: "Fernanda L.", role: "Fisio Pélvica · Pós-parto" },
  { text: "O Recovery mudou como eu me recupero entre os treinos. Antes passava 3 dias com dor muscular intensa. Agora estou de volta no dia seguinte.", name: "Diego M.", role: "Recovery · CrossFit" },
  { text: "Ombro operado. Com o Pilates clínico aqui voltei a treinar em 7 meses e ainda tenho mais mobilidade do que antes da cirurgia.", name: "Rafael T.", role: "Pilates Clínico · Ombro" },
  { text: "Endometriose com dores pélvicas constantes. O tratamento reduziu drasticamente minha dor no dia a dia. Por que ninguém me disse isso antes?", name: "Juliana C.", role: "Fisio Pélvica · Endometriose" },
];

const Testimonials = () => (
  <section className="py-16 md:py-24 px-4" style={{ background: "var(--qs-dark)" }}>
    <div className="max-w-[1160px] mx-auto">
      <p className="qs-section-label">Resultados Reais</p>
      <h2 className="qs-heading text-[28px] md:text-[36px] lg:text-[42px] text-white mb-10 md:mb-12">
        Quem passou por aqui<br/>tem muito a <em>contar</em>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {testimonials.map((t, i) => (
          <div key={i} className="qs-card-testimonial scroll-reveal" style={{ transitionDelay: `${i * 80}ms` }}>
            <p className="text-[15px] tracking-[2px] mb-3" style={{ color: "var(--qs-gold)" }}>★★★★★</p>
            <blockquote className="text-[13px] leading-[1.72] italic mb-4 pl-3.5"
              style={{ color: "var(--qs-text-light)", borderLeft: "2px solid var(--qs-gold)", fontFamily: "Georgia, serif" }}>
              {t.text}
            </blockquote>
            <p className="text-[13px] font-bold mb-0.5">{t.name}</p>
            <p className="text-[11px]" style={{ color: "var(--qs-text-muted)" }}>{t.role}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── FINAL CTA ─── */
const FinalCTA = () => (
  <section className="py-20 md:py-28 px-4" style={{ background: "var(--qs-darkest)" }}>
    <div className="max-w-[700px] mx-auto text-center">
      <p className="qs-section-label justify-center">Próximo Passo</p>
      <h2 className="qs-heading text-[30px] md:text-[42px] lg:text-[52px] text-white mb-5">
        Chega de conviver<br/>com o que tem <em>tratamento.</em>
      </h2>
      <p className="text-[15px] leading-[1.75] mb-9 max-w-[640px] mx-auto" style={{ color: "var(--qs-text-muted)" }}>
        Agende sua avaliação gratuita agora. Sem compromisso, sem burocracia — uma conversa honesta sobre o que você tem e o que podemos fazer juntos. Se não pudermos te ajudar, te dizemos isso na primeira consulta.
      </p>
      <GoldCTA text="Agendar Avaliação Gratuita" />
      <div className="flex justify-center gap-5 flex-wrap mt-6 text-xs font-semibold" style={{ color: "rgba(184,212,196,0.45)" }}>
        <span>✓ Avaliação 100% gratuita</span>
        <span>✓ Sem encaminhamento</span>
        <span>✓ Resposta rápida</span>
        <span>✓ Sem fila</span>
      </div>
    </div>
  </section>
);

/* ─── PAGE ─── */
const Index = () => {
  const scrollRef = useScrollReveal();

  return (
    <div ref={scrollRef} className="overflow-x-hidden">
      <Hero />
      <Strip />
      <About />

      {/* Services Header */}
      <section className="pt-16 md:pt-24 pb-6 px-4" style={{ background: "var(--qs-dark)" }}>
        <div className="max-w-[1160px] mx-auto">
          <p className="qs-section-label">Nossos Serviços</p>
          <h2 className="qs-heading text-[28px] md:text-[36px] lg:text-[42px] text-white">
            4 especialidades. Um único objetivo:<br/><em>te mover melhor.</em>
          </h2>
        </div>
      </section>

      <ServiceBlock
        number="01" badge="Fisioterapia" badgeEmoji="🦶" bg="var(--qs-dark)"
        title={<>Fisioterapia Esportiva<br/>e <em>Ortopédica</em></>}
        desc="Seja você atleta de fim de semana ou profissional, o protocolo certo desde o começo faz toda a diferença no tempo que você leva para voltar."
        bullets={[
          "Protocolo de pré e pós-operatório de LCA",
          "Lesões de coluna, ombro, tornozelo, joelho e quadril",
          "Reabilitação funcional com foco no retorno esportivo",
          "Tratamento de dores crônicas que ninguém conseguiu resolver",
        ]}
        objectionTitle="Já tentei fisioterapia antes e não adiantou."
        objectionText="Tratamentos genéricos raramente funcionam. Aqui, seu caso é avaliado individualmente — com histórico, exames e teste funcional. O plano é feito para você, não para uma lesão abstrata."
        tags={["LCA", "Coluna", "Ombro", "Joelho", "Tornozelo", "Quadril", "Pós-operatório"]}
        ctaText="Quero Tratar Minha Lesão"
        imgSrc={fisioterapiaImg}
      />

      <ServiceBlock
        number="02" badge="Recovery" badgeEmoji="⚡" bg="var(--qs-darkest)" reversed
        title={<>Recovery — Recuperação<br/><em>Avançada</em> para Atletas</>}
        desc="Treinar forte é só metade da equação. Quem se recupera bem progride mais rápido, lesiona menos e performa melhor. Recovery não é luxo — é parte do treino."
        bullets={[
          "Técnicas usadas por atletas de alto rendimento",
          "Redução do tempo entre treinos intensos sem perder qualidade",
          "Protocolos do amador ao profissional — adaptados ao seu nível",
          "Combinação de terapias manuais, tecnologia e exercícios ativos",
        ]}
        objectionTitle="Mas eu não sou atleta profissional..."
        objectionText="Não precisa ser. Qualquer pessoa que se exercita regularmente tem demanda muscular que se beneficia de recuperação dirigida. Melhor rendimento, menos lesão — independente do nível."
        tags={["Recuperação Muscular", "Alto Rendimento", "Prevenção", "Performance"]}
        ctaText="Quero Recuperar Melhor"
        imgSrc={recoveryImg}
      />

      <ServiceBlock
        number="03" badge="Fisio Pélvica" badgeEmoji="💜" bg="var(--qs-dark)"
        title={<>Fisioterapia Pélvica —<br/>Tratamentos que <em>ninguém fala</em></>}
        desc="Existe uma série de condições que as pessoas sofrem em silêncio por não saber que têm tratamento — ou por vergonha. Aqui o ambiente é seguro, sigiloso e sem julgamento."
        bullets={[
          "Incontinência urinária e anal",
          "Dores pélvicas e dor na relação sexual",
          "Acompanhamento pré e pós-parto, reabilitação abdominal",
          "Endometriose, adenomiose e disfunções do assoalho pélvico",
          "Pós-cirúrgico de cirurgias pélvicas e fissuras mamárias",
          "Candidíase de repetição com abordagem fisioterapêutica",
        ]}
        objectionTitle="Tenho vergonha de falar sobre isso."
        objectionText="Nossa equipe é treinada exatamente para isso. Você não precisa explicar nada por escrito antes — é só marcar, vir e conversar pessoalmente em ambiente totalmente reservado."
        tags={[]}
        ctaText="Quero Saber Mais (100% Sigiloso)"
        imgSrc={pelvicaImg}
      />

      <ServiceBlock
        number="04" badge="Pilates Clínico" badgeEmoji="🧘" bg="var(--qs-darkest)" reversed
        title={<>Pilates Clínico —<br/><em>Diferente</em> do que você conhece</>}
        desc="Pilates clínico não é aula de academia. É um método terapêutico supervisionado por fisioterapeuta, com objetivo claro de reabilitação, fortalecimento ou prevenção."
        bullets={[
          "Indicado para reabilitação com ganho de força seguro",
          "Fortalecimento do core para dor lombar, hérnia e instabilidade",
          "Prevenção de lesões para quem pratica esporte regularmente",
          "Melhora de postura para quem passa horas sentado",
        ]}
        objectionTitle="Já tentei Pilates e não senti resultado."
        objectionText="Pilates sem acompanhamento fisioterapêutico individualizado raramente resolve problemas clínicos. A diferença está em quem conduz e em como é prescrito para o seu caso."
        tags={["Individual", "Pequenos Grupos", "Clínico", "Reabilitação"]}
        ctaText="Quero Fazer Pilates Clínico"
        imgSrc={pilatesImg}
      />

      <Process />
      <FAQ />
      <Testimonials />
      <FinalCTA />

      {/* Footer */}
      <footer className="py-5 text-center text-[11px]" style={{ background: "var(--qs-darkest)", color: "rgba(184,212,196,0.35)" }}>
        © {new Date().getFullYear()} QualiSports · Planalto Vinhais, São Luís – MA · Todos os direitos reservados
      </footer>

      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
