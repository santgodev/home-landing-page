import Image from 'next/image';
import Link from 'next/link';

export default function SaveAboutUs() {
  return (
    <div className="min-h-screen bg-brand-primary text-brand-light font-sans selection:bg-brand-soft/30 selection:text-brand-light">
      <div className="max-w-3xl mx-auto px-6 py-24 relative">
        
        {/* Back to Home Button */}
        <Link href="/es" className="inline-flex items-center gap-2 text-brand-soft hover:text-white transition-colors mb-12 group">
          <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span className="font-semibold">Volver al Inicio</span>
        </Link>

        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Nuestra Historia
          </h1>
          <p className="text-lg md:text-xl text-brand-soft font-medium">
            La familia detrás de Save y EveenIA
          </p>
        </div>

        {/* Image Section */}
        <div className="relative w-full aspect-[4/3] sm:aspect-[3/2] mb-16 rounded-[2rem] overflow-hidden shadow-[0_0_50px_rgba(22,56,50,0.4)] ring-1 ring-brand-soft/20 group">
          <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/80 via-transparent to-transparent z-10 pointer-events-none"></div>
          <Image 
            src="/mamaehijo.jpeg" 
            alt="Madre e Hijo - Fundadores de Save"
            fill
            className="object-cover transition-transform duration-[2s] group-hover:scale-105"
            priority
          />
          <div className="absolute bottom-6 left-6 z-20 flex gap-4">
            <div className="glass px-5 py-2.5 rounded-2xl">
              <p className="text-white font-bold text-sm tracking-wide">Laddy (Madre) <span className="text-brand-soft opacity-90 ml-1">38 años</span></p>
            </div>
            <div className="glass px-5 py-2.5 rounded-2xl">
              <p className="text-white font-bold text-sm tracking-wide">Santiago (Hijo) <span className="text-brand-soft opacity-90 ml-1">22 años</span></p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="prose prose-invert prose-lg mx-auto prose-p:leading-relaxed prose-p:text-brand-light/90 prose-p:mb-8 text-justify md:text-left">
          <p>
            <strong>Save</strong> es una aplicación desarrollada con amor y dedicación por <strong>EveenIA</strong>, una empresa de tecnología con un corazón diferente y un propósito que trasciende los negocios.
          </p>
          <p>
            Somos un equipo verdaderamente único: <strong>Laddy y Santiago</strong>, una madre y su hijo. Como familia cristiana, nuestros principios y fe guían cada paso que damos. Esta combinación nos permite fusionar la experiencia de vida y la sabiduría, con la pasión juvenil, la programación moderna y la innovación de la inteligencia artificial.
          </p>
          <p>
            El propósito detrás de EveenIA y de herramientas como Save tiene una profunda raíz espiritual. Santiago es un joven con la convicción de dedicar su vida entera al servicio de Dios y la obra del ministerio. A través del desarrollo de estas aplicaciones y la tecnología, buscamos como familia honrar a Dios trabajando con excelencia y generar los recursos necesarios para financiar este llamado y dedicación ministerial.
          </p>
          <p>
            Nuestra meta directa con Save es generar tranquilidad y un control visual claro sobre tus finanzas, sin necesidad de ser un experto en economía ni usar complicadas hojas de cálculo. Creemos firmemente que la tecnología debe ser intuitiva, humana y estar al servicio de la paz financiera de las familias.
          </p>
          <div className="mt-12 pt-8 border-t border-brand-accent/50 text-center">
            <p className="text-xl font-medium text-white mb-2">
              Que Dios bendiga tus finanzas y tu hogar.
            </p>
            <p className="text-brand-soft font-bold tracking-wide">
              ¡Gracias por usar Save!
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
}
