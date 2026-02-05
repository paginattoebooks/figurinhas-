import React, { useEffect, useState } from 'react';
import { 
  CheckCircle2, 
  ShieldCheck, 
  Lock, 
  Award, 
  ChevronRight,
  Plus,
  Star,
  Heart,
  Smartphone,
  Instagram,
  CreditCard
} from 'lucide-react';

// --- UI Components ---

const Section = ({ children, className = "" }: { children?: React.ReactNode, className?: string }) => (
  <section className={`py-12 px-4 max-w-4xl mx-auto ${className}`}>
    {children}
  </section>
);

const GreenButton = ({
  children,
  href,
  className = ""
}: {
  children?: React.ReactNode;
  href: string;
  className?: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`block text-center w-full py-5 rounded-full font-black text-sm md:text-xl uppercase tracking-tight btn-green shadow-xl transition-all active:scale-95 animate-pulse-subtle ${className}`}
  >
    {children}
  </a>
);


const BonusCardLong = ({ title, desc, price, oldPrice, children, className = "" }: any) => (
  <div className={`bg-[#B68C3E] rounded-[3rem] p-8 md:p-12 text-white text-center shadow-2xl mb-12 border border-white/10 ${className}`}>
    <div className="mb-10 flex justify-center">
      {children}
    </div>
    <h3 className="text-2xl md:text-4xl font-black uppercase mb-6 leading-tight">
      {title}
    </h3>
    <p className="text-sm md:text-lg font-medium opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed">
      {desc}
    </p>
    {oldPrice && (
      <div className="relative inline-block">
        <span className="text-2xl md:text-4xl font-black opacity-80 line-through decoration-gold-light decoration-4">
          R$ {oldPrice}
        </span>
      </div>
    )}
  </div>
);

const TestimonialItem = ({ user, text, time, avatar }: any) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex gap-4 mb-4 text-left">
    <img src={avatar} className="w-12 h-12 rounded-full object-cover shrink-0 border border-gray-100" alt={user} />
    <div className="flex-1">
      <div className="flex items-center gap-2 mb-1">
        <span className="font-bold text-gray-800 text-sm">{user}</span>
        <span className="text-gray-400 text-xs">{time}</span>
        <div className="flex items-center gap-1 ml-auto text-red-500">
          <Heart size={10} fill="currentColor" />
          <span className="text-[10px] text-gray-400 font-medium">pelo autor</span>
        </div>
      </div>
      <p className="text-gray-700 text-sm leading-snug mb-3">{text}</p>
      <div className="flex gap-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
        <span className="cursor-pointer">Responder</span>
        <span className="cursor-pointer">Ocultar</span>
        <span className="cursor-pointer">Ver tradução</span>
      </div>
    </div>
  </div>
);

// --- Main App ---

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const themes = [
    "Academia_Treino", "Frases universais", "Acessórios", "Glow up", 
    "Advogado", "Gratidão", "Agenda aberta", "Hábitos saudáveis", 
    "Agronomia", "Home office", "Artesanato", "Ícones Redes Sociais",
    "Artesão", "Instagram", "Autocuidado", "Kiwify", 
    "Balão", "Lazer - filme - série", "Black Friday", "Lei da atração",
    "Blogueira", "Leitura", "Bom dia", "Lingerie",
    "Boa tarde", "Loja", "Boa noite", "Maquiagem",
    "Boss sticker", "Make", "Café", "Maquininha Ton",
    "Caixinhas de Perguntas", "Marketing", "Carnaval", "Mkt Digital",
    "Clientes", "Maternidade", "Comida", "Nails Designer",
    "Confeitaria", "Notificações", "Cristão", "Números balão",
    "Culinária", "Nutrição", "Designer de Sobrancelhas", "Pepper",
    "Dias da semana", "Post Twitter"
  ];
   // 5. Mockups (15 imagens) — troque só os links
  const mockups = [
    "Captura de tela 2026-02-03 154415.png",
    "Captura de tela 2026-02-03 154553.png",
    "Captura de tela 2026-02-03 154608.png",
    "Captura de tela 2026-02-03 154621.png",
    "Captura de tela 2026-02-03 154700.png",
    "Captura de tela 2026-02-03 154707.png",
    "Captura de tela 2026-02-03 154714.png",
    "Captura de tela 2026-02-03 154722.png",
    "Captura de tela 2026-02-03 154733.png",
    "Captura de tela 2026-02-03 154745.png",
    "Captura de tela 2026-02-03 154752.png",
    "Captura de tela 2026-02-03 154800.png",
    "Captura de tela 2026-02-03 154808.png",
    "Captura de tela 2026-02-03 154814.png",
    "Captura de tela 2026-02-03 154825.png",
];

const premiumMockups = [
  "Captura de tela 2026-02-04 141708.png",
  "Captura de tela 2026-02-04 141657.png",
  "Captura de tela 2026-02-04 141651.png",
  "Captura de tela 2026-02-04 141645.png",
  "Captura de tela 2026-02-03 154937.png",
  "Captura de tela 2026-02-03 154608.png",
];

const CHECKOUT_BASICO = "https://upsell-pack-premium-figurinhas-inst.vercel.app/";
const CHECKOUT_PREMIUM = "https://somasoundsolutions.mycartpanda.com/checkout/206809460:1";


  return (
    <div className="min-h-screen bg-[#F6F3EB]">
      
      {/* 1. Alerta de Atualização (Topo) */}
      <div className="bg-red-600 text-white text-center py-2 px-4 font-bold text-sm md:text-base leading-tight">
        Figurinhas atualizadas em 05/01/2026 <br className="md:hidden" />
        <span className="md:ml-4 font-normal">Próxima atualização: Em breve</span>
      </div>

      {/* 2. Hero Section (Cabeçalho Principal) */}
      <Section className="text-center pt-16 pb-8">
        <h1 className="text-4xl md:text-6xl font-serif font-bold gold-text leading-tight mb-6">
          +15.000 figurinhas para fazer stories extraordinários
        </h1>
        <p className="text-gray-700 text-lg md:text-2xl font-medium max-w-2xl mx-auto mb-10">
          O pack perfeito para chamar a atenção dos seus seguidores!
        </p>

        {/* Visual Frame (Stickers Grid) */}
        <div className="border-4 border-gold-light rounded-[2.5rem] bg-white p-6 shadow-2xl relative mb-12">
          <div className="absolute top-4 left-4 w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
             <div className="w-1.5 h-1.5 bg-white/20 rounded-full"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 py-10">
             <div className="flex flex-col items-center gap-2">
                <span className="font-serif text-3xl font-black leading-none">provador</span>
                <Heart size={16} fill="#FF1493" className="text-[#FF1493]" />
             </div>
             <div className="flex flex-col items-center gap-2">
                <span className="font-serif text-xl font-bold">a vida começa depois do primeiro</span>
                <span className="font-black text-2xl uppercase italic">gole de café</span>
             </div>
             <div className="flex flex-col items-center gap-2">
                <span className="font-black text-3xl uppercase italic leading-none">Black Friday</span>
                <Heart size={16} fill="#FF69B4" className="text-[#FF69B4]" />
             </div>
             <div className="flex flex-col items-center gap-2">
                <span className="font-serif text-2xl italic">Vagou um horário</span>
             </div>
             <div className="flex flex-col items-center gap-2">
                <span className="text-[10px] bg-yellow-400 text-gray-800 font-bold px-2 py-1 mb-[-8px]">Já leu a Bíblia hoje?</span>
                <span className="font-bold text-xl uppercase">Cronograma Capilar</span>
             </div>
             <div className="flex flex-col items-center gap-2">
                <span className="font-serif text-2xl font-black">ORAR DE MILHÕES</span>
             </div>
          </div>
        </div>

        {/* Preço de Chamada e Botão */}
        <div className="flex flex-col items-center gap-4 mb-16">
          <div className="flex items-center gap-3">
             <span className="text-gray-600 text-xl font-medium">Por apenas</span>
             <div className="border-2 border-gold-light px-6 py-2 rounded-full text-4xl font-black gold-text bg-white shadow-sm">
                R$ 5,99
             </div>
          </div>
          <GreenButton href={CHECKOUT_BASICO} className="max-w-md">
            EU QUERO MELHORAR MEUS STORIES!
          </GreenButton>

        </div>
      </Section>

      {/* 3. Bloco de Vantagens */}
      <div className="bg-white border-y border-gray-100 py-16">
        <Section className="text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold gold-text italic mb-12">VANTAGENS...</h2>
          <div className="flex flex-col gap-4 max-w-lg mx-auto">
            {["RECONHECIMENTO", "ATENÇÃO", "COMPARTILHAMENTO", "CRIATIVO", "VENDAS"].map((item) => (
              <div key={item} className="flex items-center gap-4 py-6 border-b border-gray-100 last:border-0 group">
                <Plus className="text-gold-light" size={32} />
                <span className="text-2xl md:text-4xl font-black text-gray-700 group-hover:gold-text transition-colors tracking-tight">{item}</span>
              </div>
            ))}
          </div>
        </Section>
      </div>

      {/* 4. Temas das Figurinhas */}
      <div className="bg-gold-light py-20 text-white">
        <Section>
          <h2 className="text-4xl md:text-7xl font-serif font-bold text-center mb-16">Temas das Figurinhas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {themes.map((theme, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 size={22} className="shrink-0 text-white" />
                <span className="font-bold text-base md:text-2xl tracking-tight">{theme}</span>
              </div>
            ))}
          </div>
        </Section>
      </div>

    {/* 5. Galeria de Mockups */}
    <div className="bg-[#B68C3E] py-12">
      <Section>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
          {mockups.map((src, i) => (
              <div
              key={i}
              className="aspect-[9/16] bg-gray-200 rounded-lg overflow-hidden border-2 border-white/20 shadow-lg"
        >
          <img
            src={src}
            className="w-full h-full object-cover"
            alt={`Mockup ${i + 1}`}
            loading="lazy"
          />
          </div>
         ))}
        </div>
      </Section>
    </div>

      {/* 6. Tutorial de Uso ("Como utilizar?") */}
      <Section className="pt-24 pb-24 text-center">
        <h2 className="text-5xl md:text-7xl font-serif gold-text mb-16">Como utilizar?</h2>
        <div className="space-y-10 max-w-2xl mx-auto mb-20 text-left">
          <div className="flex gap-4">
            <ChevronRight className="gold-text shrink-0" size={32} />
            <p className="text-xl md:text-3xl font-bold text-gray-700 leading-tight">
              <span className="gold-text">1.</span> Você vai receber um vídeo com o passo a passo para utilizar as figurinhas.
            </p>
          </div>
          <div className="flex gap-4">
            <ChevronRight className="gold-text shrink-0" size={32} />
            <p className="text-xl md:text-3xl font-bold text-gray-700 leading-tight">
              <span className="gold-text">2.</span> Você vai receber o acesso ao Google Drive onde terá todas as pastas com as figurinhas.
            </p>
          </div>
        </div>
      </Section>

      {/* 7. Bloco de Bônus Detalhados */}
      <div className="bg-[#FAF9F6] py-16">
        <Section>

          <BonusCardLong 
            title="PACK: +200 Sombras Sofisticadas" 
            desc="Adicione sofisticação aos seus stories com sombras que realçam as imagens, criando um efeito premium e profissional rapidamente."
            oldPrice="39,99"
          >      
          <div className="h-24 w-full flex items-center justify-center">
           <div className="w-64 h-36 md:w-80 md:h-44 rounded-2xl overflow-hidden border-2 border-white/20 mx-auto mb-6 p-2 bg-white/10">
            <img
              src="Captura de tela 2026-02-04 141803.png"
              alt="Mockup"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
          </BonusCardLong>

          <BonusCardLong 
            title="PACK: +50 Molduras Repost" 
            desc="Tenha mais relacionamento com o seu cliente adicionando molduras de repost criativas. Bônus: Vídeo explicativo para aplicação."
            oldPrice="19,99"
          >
            <div className="w-40 h-72 md:w-48 md:h-80 bg-[#C5A059] rounded-3xl border-2 border-white/20 relative overflow-hidden flex items-center justify-center p-3">
              <img
                src="Captura de tela 2026-02-04 141736.png"
                alt="Mockup Molduras Repost"
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
          </BonusCardLong>

          <BonusCardLong
            title="Paletas de Sucesso para o Instagram" 
            desc="Você vai receber um guia para utilizar as paletas de cores mais indicadas para o ramo da Estética e Beleza e vai aprender a construir a sua."
            oldPrice="49,99"
          >
            <div className="w-40 h-72 md:w-48 md:h-80 bg-[#C5A059] rounded-3xl border-2 border-white/20 relative overflow-hidden flex items-center justify-center p-3">
              <img
                src="Captura de tela 2026-02-04 141645.png"
                alt="Mockup Paletas de Sucesso"
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
          </BonusCardLong>

          <BonusCardLong 
            title="Stories Lucrativos: Utilização de Recursos" 
            desc="Domine todas as funcionalidades e ferramentas dos Stories, elevando a qualidade do seu conteúdo. Desenvolva habilidades em design e edição de fotos/vídeos para criar Stories visualmente atraentes."
            oldPrice="79,99"
          >
            <div className="w-40 h-72 md:w-48 md:h-80 bg-[#C5A059] rounded-3xl border-2 border-white/20 relative overflow-hidden flex items-center justify-center p-3">
              <img
                src="Captura de tela 2026-02-04 141651.png"
                alt="Mockup Stories Lucrativos"
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
          </BonusCardLong>

          <BonusCardLong 
            title="Facebook e Instagram Ads" 
            desc="Aprenda a fazer anúncios e LUCRAR 3X MAIS no Instagram e Facebook."
            oldPrice="79,99"
          >
            <div className="w-40 h-72 md:w-48 md:h-80 bg-[#C5A059] rounded-3xl border-2 border-white/20 relative overflow-hidden flex items-center justify-center p-3">
              <img
                src="Captura de tela 2026-02-04 141727.png"
                alt="Mockup Facebook e Instagram Ads"
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
          </BonusCardLong>
</Section>
      </div>

      {/* 8. Prova Social (Relatos das Alunas) */}
      <Section className="bg-white rounded-[3rem] my-16 py-20 px-8 card-shadow">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-serif font-bold text-gray-800 mb-4 tracking-tighter">
            Relatos de quem já comprou 😍
          </h2>
          <p className="text-lg md:text-2xl gold-text font-medium italic">
            Mais de 20 mil pessoas mudaram o seu instagram com nossas figurinhas!
          </p>
        </div>
        {/* Provas sociais reais (prints) */}
          <div className="max-w-5xl mx-auto mt-10">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {[
      "9.png",
      "8.png",
      "7.png",
    ].map((src, i) => (
      <div
        key={i}
        className="rounded-2xl overflow-hidden border border-black/10 shadow-lg bg-white"
      >
        <img
          src={src}
          alt={`Prova social ${i + 1}`}
          className="w-full h-auto object-contain"
          loading="lazy"
        />
      </div>
          ))}
  </div>
        </div>
      </Section>

      {/* 9. Ofertas de Preço (Bloco Principal) */}
      <div className="bg-[#F6F3EB] py-20 border-t-8 border-[#C5A059]">
        <Section>
          {/* Banner Título */}
          <div className="bg-[#B68C3E] py-6 px-4 rounded-xl mb-16 shadow-lg">
            <h2 className="text-2xl md:text-5xl font-black text-white text-center uppercase tracking-tighter">
              ESCOLHA A MELHOR OFERTA PARA VOCÊ!
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto px-2">
            
            {/* CARD PACK BÁSICO */}
            <div className="bg-[#E68A9E] rounded-[3.5rem] p-8 md:p-12 text-white text-center shadow-[0_20px_50px_rgba(230,138,158,0.3)] relative transform transition-transform hover:scale-[1.02]">
              <h3 className="text-4xl md:text-6xl font-black uppercase mb-10 tracking-tight">PACK BÁSICO</h3>
              
              <ul className="text-left space-y-4 mb-16 inline-block mx-auto">
                <li className="flex items-center gap-3 text-lg md:text-xl font-bold">
                   <CheckCircle2 size={24} className="shrink-0" /> Pack +15.000 Figurinhas criativas
                </li>
                <li className="flex items-center gap-3 text-lg md:text-xl font-bold">
                   <CheckCircle2 size={24} className="shrink-0" /> Acesso 3 meses
                </li>
              </ul>

              <div className="text-7xl md:text-8xl font-black mb-12 flex flex-col">
                <span className="text-2xl opacity-80 mb-[-10px]">Por apenas</span>
                R$ 5,99
              </div>

              <a
                href={CHECKOUT_BASICO}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-5 bg-white text-[#E68A9E] rounded-full font-black text-xl md:text-2xl uppercase shadow-xl hover:bg-gray-50 active:scale-95 transition-all text-center"
              >
                COMPRAR AGORA
              </a>

              <div className="mt-10 px-4">
                <p className="text-sm md:text-base font-bold leading-tight">
                  Mas antes de comprar... temos uma oferta <span className="underline decoration-2">AINDA MAIS</span> vantajosa para você! Veja logo abaixo ⬇️
                </p>
              </div>
            </div>

            {/* CARD PLANO PREMIUM */}
            <div className="bg-[#B68C3E] rounded-[3.5rem] shadow-[0_20px_50px_rgba(182,140,62,0.3)] relative transform transition-transform hover:scale-[1.02] border-[3px] border-white/20">
              <div className="bg-[#00FF00] text-center py-3 font-black text-lg md:text-xl uppercase tracking-widest text-black rounded-t-[3.3rem]">
                MAIS VENDIDO
              </div>
              
              <div className="p-8 md:p-12 text-black">
                <h3 className="text-4xl md:text-5xl font-black uppercase text-center mb-8 tracking-tighter">PLANO PREMIUM</h3>
                
                <div className="grid grid-cols-3 gap-2 mb-10">
  {premiumMockups.map((src, i) => (
    <div
      key={i}
      className="aspect-[9/16] bg-white/20 rounded-xl overflow-hidden shadow-inner"
    >
      <img
        src={src}
        alt={`Mockup Premium ${i + 1}`}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
  ))}
</div>

                <ul className="text-left space-y-3 mb-12">
                   {[
                     "Pack +15.000 Figurinhas criativas",
                     "Bônus: Pack +1.000 Figurinhas minimalista",
                     "Bônus: Pack +500 Figurinhas Premium",
                     "Bônus: Pack +200 Sombras Sofisticadas",
                     "Bônus: Pack +50 Molduras Repost",
                     "Bônus: Paletas de Sucesso",
                     "Bônus: Stories Lucrativos (Mini curso)",
                     "Bônus: Facebook e Instagram Ads",
                     "Acesso Completo a Todos os Bônus",
                     "7 Dias de Garantia Incondicional",
                     "ACESSO IMEDIATO",
                     "ACESSO VITALÍCIO"
                   ].map((item, idx) => (
                     <li key={idx} className="flex items-start gap-3 text-xs md:text-sm font-black leading-tight">
                       <CheckCircle2 size={18} className="shrink-0 text-white" />
                       {item}
                     </li>
                   ))}
                </ul>

                <div className="text-center mt-4">
                  <span className="text-red-600 line-through text-2xl md:text-3xl font-black decoration-4 block mb-2">DE R$ 229,99</span>
                  <div className="text-7xl md:text-8xl font-black mb-10 tracking-tighter">R$ 15,99</div>
                  
                  <GreenButton
                    href={CHECKOUT_PREMIUM}
                    className="h-20 text-xl md:text-2xl shadow-[0_15px_30px_rgba(0,255,0,0.3)]"
                  >
                    LIBERAR PACK PREMIUM
                  </GreenButton>


                  <div className="mt-8 flex justify-center items-center gap-4 opacity-70">
                    <div className="flex flex-col items-center">
                      <div className="flex gap-2">
                        <CreditCard size={24} />
                        <span className="font-black text-[10px] italic">VISA</span>
                        <span className="font-black text-[10px] italic">MC</span>
                        <span className="font-black text-[10px] italic">ELO</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </Section>
      </div>

      {/* 10. Selo de Garantia */}
      <Section className="text-center py-24">
        <div className="flex flex-col items-center gap-6">
          <div className="relative">
            <ShieldCheck size={120} className="text-[#B68C3E] drop-shadow-xl" strokeWidth={1.5} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-1">
               <span className="text-3xl font-black text-white drop-shadow-md"></span>
            </div>
          </div>
          <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-gray-800">
            7 dias de garantia
          </h3>
          <p className="text-gray-600 text-lg md:text-2xl font-medium leading-relaxed max-w-2xl mx-auto">
            Queremos garantir ao máximo a sua satisfação, por isso liberamos 7 dias para você decidir se vale a pena para você ou não. Caso decida que não, basta entrar em contato conosco, dentro de 7 dias, que devolveremos 100% do seu investimento.
          </p>
        </div>
      </Section>

      {/* 11. Rodapé (Footer) */}
      <footer className="bg-white py-12 px-6 border-t border-gray-100 text-center text-xs font-bold text-gold-light uppercase tracking-widest">
         <div className="flex justify-center gap-8 mb-6">
            <span className="cursor-pointer">Políticas de Privacidade</span>
            <span className="cursor-pointer">Termos de Uso</span>
         </div>
         <p>Copyright © 2025 Trokajo Treinamentos. Todos os Direitos Reservados</p>
      </footer>

      {/* 12. CTA Flutuante (Mobile) */}
      <div className={`fixed bottom-6 left-6 right-6 z-50 md:hidden transition-all duration-500 ${scrolled ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'}`}>
        <GreenButton href={CHECKOUT_BASICO}>
          LIBERAR PACK (R$ 5,99)
        </GreenButton>
      </div>
    </div>
  );
};

export default App;
