export const features = [
  {
    icon: 'UtensilsCrossed',
    title: 'Menú interactivo en el chat',
    description: 'El cliente ve tu catálogo directamente en WhatsApp y selecciona lo que quiere sin salir de la conversación.',
  },
  {
    icon: 'ListOrdered',
    title: 'Guía al cliente paso a paso',
    description: 'El sistema conduce al cliente por el flujo completo: producto, cantidad, dirección y método de pago. Sin confusiones.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Validación automática de datos',
    description: 'Verifica dirección, forma de pago y detalles del pedido antes de confirmar. Cero pedidos con información incompleta.',
  },
  {
    icon: 'CheckCircle',
    title: 'Confirmación automática del pedido',
    description: 'El cliente recibe su confirmación al instante. Tú recibes el pedido organizado y listo para preparar.',
  },
  {
    icon: 'Zap',
    title: 'Escala sin saturar al equipo',
    description: 'Atiende decenas de conversaciones simultáneas sin que tu personal intervenga en ninguna.',
  },
  {
    icon: 'BarChart2',
    title: 'Panel de métricas en tiempo real',
    description: 'Ventas por período, productos más pedidos y horas de mayor demanda. Todo visible desde tu panel.',
  },
] as const;

export const howItWorks = [
  {
    step: '01',
    title: 'El cliente escribe a tu WhatsApp',
    description: 'Como siempre lo ha hecho. Sin descargar apps, sin registros, sin links externos.',
  },
  {
    step: '02',
    title: 'Sincro Chat gestiona el pedido de principio a fin',
    description: 'Muestra el menú, guía al cliente, valida la dirección y el pago. Todo automatizado dentro de la conversación.',
  },
  {
    step: '03',
    title: 'Tú recibes el pedido listo para despachar',
    description: 'La orden llega organizada a tu panel. Sin errores, sin información faltante, sin mensajes que revisar.',
  },
] as const;

export const problems = [
  {
    icon: '❌',
    text: 'Pedidos mal tomados por errores humanos',
  },
  {
    icon: '❌',
    text: 'Personal saturado atendiendo chats manualmente',
  },
  {
    icon: '❌',
    text: 'Órdenes perdidas en el historial de conversaciones',
  },
  {
    icon: '❌',
    text: 'Imposible escalar sin contratar más gente',
  },
] as const;

export const faqs = [
  {
    question: '¿Mis clientes necesitan instalar algo?',
    answer: 'No. Tus clientes piden desde el WhatsApp que ya tienen. Sin apps, sin webs, sin registros de ningún tipo.',
  },
  {
    question: '¿Cuánto cuesta Sincro Chat?',
    answer: 'Cobramos una comisión por pedido procesado, significativamente menor a lo que retienen los grandes marketplaces de delivery (entre el 25% y el 30% de cada venta). Consulta los planes en la sección de precios.',
  },
  {
    question: '¿Solo funciona para restaurantes?',
    answer: 'No. Funciona para cualquier negocio que venda por WhatsApp: restaurantes, tiendas, panaderías, papelerías, florerías, ferreterías y más.',
  },
  {
    question: '¿Qué pasa si llegan muchos pedidos al mismo tiempo?',
    answer: 'El sistema atiende múltiples conversaciones en paralelo de forma automática. No importa si son 5 o 500 pedidos al mismo tiempo, ninguno se pierde.',
  },
  {
    question: '¿Puedo configurar mi menú y mis zonas de entrega?',
    answer: 'Sí. Configuras tu menú, tus opciones de pago y las zonas de entrega desde el panel. El sistema se adapta a cómo opera tu negocio.',
  },
  {
    question: '¿Qué métricas puedo ver?',
    answer: 'Ventas por período, productos más pedidos, horas de mayor demanda y ticket promedio. Todo disponible en tiempo real desde tu panel.',
  },
] as const;

export const testimonials = [
  {
    name: 'Laura Martínez',
    business: 'Restaurante La Fogata, Medellín',
    quote: 'Antes tenía que responder cada mensaje, anotar el pedido a mano y rezar para no equivocarme. Ahora el sistema lo gestiona todo y yo solo recibo el pedido listo.',
  },
  {
    name: 'Carlos Ruiz',
    business: 'Panadería El Trigal, Bogotá',
    quote: 'El problema no era recibir pedidos por WhatsApp, era el caos de gestionarlos. Con Sincro Chat el flujo es ordenado, rápido y sin errores.',
  },
  {
    name: 'Sofía Herrera',
    business: 'Tienda Natural Roots, Cali',
    quote: 'Mis clientes piden por WhatsApp como siempre. Yo ahora tengo los pedidos organizados, las métricas claras y mucho menos estrés.',
  },
] as const;
