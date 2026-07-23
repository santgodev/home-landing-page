export default function SaveTermsOfService() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 text-brand-light bg-brand-primary min-h-screen">
      <div className="mb-12">
        <h1 className="text-4xl font-black text-white mb-4">Términos y Condiciones - Save</h1>
        <p className="text-brand-soft">Última actualización: {new Date().toLocaleDateString('es-CO')}</p>
      </div>

      <div className="space-y-12 text-brand-light/90 text-justify md:text-left leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">1. Aceptación de los Términos</h2>
          <p>
            Al descargar, acceder o utilizar la aplicación <strong>Save</strong> (en adelante, "la Aplicación"), propiedad de EveenIA, usted acepta estar sujeto a estos Términos y Condiciones. Si no está de acuerdo con alguna parte de estos términos, no debe utilizar la Aplicación.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">2. Descripción del Servicio</h2>
          <p>
            Save es una herramienta de software diseñada para ayudar a los usuarios a registrar, categorizar y gestionar sus finanzas personales, presupuestos ("bolsillos") e ingresos. La aplicación utiliza Inteligencia Artificial para facilitar el ingreso de datos a partir de imágenes (recibos) y para proporcionar resúmenes o sugerencias genéricas.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">3. Exención de Asesoría Financiera</h2>
          <div className="bg-blue-900/20 border border-blue-500/30 p-4 rounded-xl mb-4">
            <p className="text-blue-200 text-sm font-semibold">
              <strong>Aviso Importante:</strong> Save NO es una entidad financiera, banco, ni asesor de inversiones.
            </p>
          </div>
          <p>
            La información, análisis y resúmenes generados por la Aplicación y su asistente de Inteligencia Artificial (Chat Advisor) tienen un propósito estrictamente informativo y organizativo. <strong>Bajo ninguna circunstancia constituyen asesoría financiera, legal, contable o fiscal profesional.</strong> Usted es el único responsable de las decisiones financieras que tome basándose en la información organizada por la Aplicación.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">4. Responsabilidad del Usuario</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Veracidad de la información:</strong> El usuario es responsable de la exactitud de los datos financieros que ingresa manualmente o que confirma tras el escaneo automático.</li>
            <li><strong>Seguridad de la cuenta:</strong> Usted es responsable de mantener la confidencialidad de sus credenciales de acceso y de todas las actividades que ocurran bajo su cuenta.</li>
            <li><strong>Uso lícito:</strong> Se compromete a no utilizar la Aplicación para fines ilegales, fraudulentos o no autorizados.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">5. Propiedad Intelectual</h2>
          <p>
            Todos los derechos, títulos e intereses sobre la Aplicación (incluyendo su código fuente, diseño, interfaces, algoritmos y marca) son propiedad exclusiva de EveenIA. El usuario recibe únicamente una licencia limitada, no exclusiva e intransferible para utilizar la Aplicación para sus fines personales.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">6. Limitación de Responsabilidad</h2>
          <p>
            EveenIA no se hace responsable de daños directos, indirectos, incidentales o consecuentes que resulten del uso o la imposibilidad de usar la Aplicación. No garantizamos que el servicio será ininterrumpido, completamente libre de errores, o que la Inteligencia Artificial procesará los recibos con un 100% de precisión en todo momento.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">7. Modificaciones al Servicio y Términos</h2>
          <p>
            Nos reservamos el derecho de modificar o discontinuar la Aplicación, temporal o permanentemente, con o sin previo aviso. Asimismo, podemos actualizar estos Términos en cualquier momento, y el uso continuado de la Aplicación constituirá su aceptación de dichos cambios.
          </p>
        </section>

        <div className="pt-10 border-t border-brand-accent mt-12 text-center pb-12">
          <p className="text-brand-soft mb-6">¿Quieres conocer más sobre el equipo detrás de Save?</p>
          <a href="/es/save/about" className="inline-flex items-center justify-center px-8 py-3 bg-brand-soft text-brand-primary font-bold rounded-xl shadow-[0_4px_14px_0_rgba(142,182,155,0.39)] hover:scale-105 transition-transform">
            Conoce Nuestra Historia
          </a>
        </div>
      </div>
    </div>
  );
}
