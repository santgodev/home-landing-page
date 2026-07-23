export default function SavePrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 text-brand-light bg-brand-primary min-h-screen">
      <div className="mb-12">
        <h1 className="text-4xl font-black text-white mb-4">Política de Privacidad - Save</h1>
        <p className="text-brand-soft">Última actualización: {new Date().toLocaleDateString('es-CO')}</p>
      </div>

      <div className="space-y-12 text-brand-light/90 text-justify md:text-left leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">1. Información que recopilamos</h2>
          <p className="mb-2">En <strong>Save</strong> (en adelante, "la Aplicación"), recopilamos y procesamos los siguientes tipos de información:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Información de cuenta:</strong> Correo electrónico y nombre de usuario proporcionados al registrarse.</li>
            <li><strong>Datos financieros ingresados por el usuario:</strong> Registros de ingresos, gastos, presupuestos y saldos en bolsillos que el usuario ingresa manualmente o a través del escaneo de recibos.</li>
            <li><strong>Imágenes de recibos:</strong> Fotos de facturas o recibos que el usuario decide escanear utilizando la cámara de su dispositivo. Estas imágenes se procesan temporalmente mediante Inteligencia Artificial para extraer los datos financieros y no se utilizan para otros fines.</li>
            <li><strong>Datos de uso:</strong> Información sobre cómo interactúas con la aplicación, patrones de navegación y preferencias de configuración.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">2. Uso de la información</h2>
          <p className="mb-2">Utilizamos la información recopilada para:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Proporcionar y mantener el servicio principal de la Aplicación (gestión financiera, presupuestos y control de gastos).</li>
            <li>Procesar imágenes de recibos a través de herramientas de Inteligencia Artificial para automatizar el ingreso de gastos.</li>
            <li>Proveer insights, análisis y resúmenes financieros personalizados (Chat Advisor).</li>
            <li>Mejorar y personalizar la experiencia del usuario.</li>
            <li>Garantizar la seguridad de las cuentas y prevenir actividades fraudulentas.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">3. Almacenamiento y Protección de Datos</h2>
          <p>
            Los datos se almacenan de manera segura utilizando servicios de infraestructura en la nube (como Supabase) que cumplen con estándares internacionales de seguridad. 
            Implementamos medidas técnicas y organizativas para proteger su información contra el acceso no autorizado, pérdida o alteración. 
            <strong>Importante:</strong> Las credenciales de acceso se manejan mediante autenticación segura y contraseñas cifradas.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">4. Compartición de datos con terceros</h2>
          <p className="mb-2">No vendemos, alquilamos ni comercializamos sus datos personales a terceros. Podemos compartir información en los siguientes casos:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Proveedores de servicios:</strong> Utilizamos servicios de terceros para el procesamiento de Inteligencia Artificial (ej. OpenAI o similares) únicamente para analizar recibos e interacciones de chat. Estos proveedores actúan bajo estrictas políticas de confidencialidad y no utilizan sus datos para entrenar modelos públicos.</li>
            <li><strong>Requisitos legales:</strong> Si es requerido por la ley, orden judicial o regulación gubernamental.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">5. Derechos del Usuario (Eliminación de Cuenta)</h2>
          <p>
            Usted tiene el derecho a acceder, corregir o eliminar su información personal. Puede solicitar la <strong>eliminación completa de su cuenta y todos sus datos financieros</strong> directamente desde la configuración de su perfil en la Aplicación ("Eliminar Cuenta y Datos"). Esta acción borrará de forma permanente sus registros, presupuestos e historial de nuestros servidores.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">6. Cambios a esta política</h2>
          <p>
            Podemos actualizar nuestra Política de Privacidad periódicamente. Le notificaremos sobre cambios significativos publicando la nueva política en esta página y actualizando la fecha de "Última actualización".
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">7. Contacto</h2>
          <p>
            Si tiene preguntas, comentarios o inquietudes sobre esta Política de Privacidad, el manejo de sus datos, o si desea ejercer sus derechos, por favor contáctenos a través de los canales oficiales de EveenIA.
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
