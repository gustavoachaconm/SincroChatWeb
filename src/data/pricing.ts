export const plans = [
  {
    name: 'Básico',
    description: 'Para negocios que están empezando a recibir pedidos por WhatsApp.',
    price: 'Gratis',
    priceSub: 'para siempre',
    commission: '5% por pedido',
    highlight: false,
    cta: 'Empezar gratis',
    features: [
      'Hasta 50 pedidos por mes',
      'Menú con hasta 30 productos',
      'Confirmación automática',
      'Panel de pedidos básico',
      'Soporte por email',
    ],
    notIncluded: [
      'Métricas avanzadas',
      'Notificaciones de estado',
      'Múltiples usuarios',
    ],
  },
  {
    name: 'Profesional',
    description: 'Para negocios con volumen constante de pedidos y necesidad de métricas.',
    price: '$99.000',
    priceSub: 'COP / mes',
    commission: '3% por pedido',
    highlight: true,
    cta: 'Empezar ahora',
    features: [
      'Pedidos ilimitados',
      'Menú con productos ilimitados',
      'Confirmación y actualizaciones automáticas',
      'Panel de pedidos completo',
      'Métricas y reportes de ventas',
      'Notificaciones de estado al cliente',
      'Soporte prioritario por WhatsApp',
    ],
    notIncluded: [
      'Múltiples usuarios',
    ],
  },
  {
    name: 'Empresarial',
    description: 'Para cadenas, franquicias o negocios con múltiples sucursales.',
    price: 'A consultar',
    priceSub: 'según volumen',
    commission: 'Comisión negociada',
    highlight: false,
    cta: 'Hablar con ventas',
    features: [
      'Todo lo del plan Profesional',
      'Múltiples sucursales',
      'Múltiples usuarios y roles',
      'Integraciones personalizadas',
      'SLA garantizado',
      'Gerente de cuenta dedicado',
    ],
    notIncluded: [],
  },
] as const;

export const comparison = [
  { label: 'Marketplaces de delivery', commission: '25–30%', monthly: 'Sin mensualidad', notes: 'Alta competencia, sin marca propia', highlight: false },
  { label: 'Bot básico de WhatsApp', commission: '0%', monthly: '$20–50 USD/mes', notes: 'No tiene flujo de pedidos ni métricas', highlight: false },
  { label: 'Sincro Chat', commission: '3–5%', monthly: 'Desde $0', notes: 'Flujo completo + métricas + soporte', highlight: true },
] as const;
