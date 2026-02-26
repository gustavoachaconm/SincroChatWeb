import { useState } from 'react';

type FormState = 'idle' | 'loading' | 'success' | 'error';

interface FormData {
  name: string;
  business: string;
  whatsapp: string;
  type: string;
  message: string;
}

const businessTypes = [
  'Restaurante',
  'Panadería / Pastelería',
  'Tienda / Minimarket',
  'Cafetería',
  'Comida rápida',
  'Servicio a domicilio',
  'Otro',
] as const;

const inputClass =
  'w-full px-4 py-3 rounded-xl border border-[--color-border] bg-white text-[--color-text] text-sm placeholder:text-[--color-text-muted] focus:outline-none focus:border-[--color-primary] focus:ring-2 transition-all';

const focusRingStyle = {
  '--tw-ring-color': 'var(--color-primary-light)',
} as React.CSSProperties;

export default function ContactForm() {
  const [state, setState] = useState<FormState>('idle');
  const [form, setForm] = useState<FormData>({
    name: '',
    business: '',
    whatsapp: '',
    type: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState('loading');

    try {
      // TODO: reemplazar con el webhook real de n8n
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setState('success');
      } else {
        setState('error');
      }
    } catch {
      setState('error');
    }
  };

  if (state === 'success') {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 px-6">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
          style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-primary-dark))' }}
        >
          <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold mb-2" style={{ color: 'var(--color-text)' }}>
          Recibimos tu mensaje
        </h2>
        <p className="text-sm leading-relaxed max-w-xs" style={{ color: 'var(--color-text-muted)' }}>
          Alguien del equipo de Sincro Chat te escribirá en menos de 24 horas al WhatsApp que dejaste.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm font-semibold" style={{ color: 'var(--color-text)' }}>
            Nombre <span aria-hidden="true" style={{ color: '#EF4444' }}>*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Laura Martínez"
            className={inputClass}
            style={focusRingStyle}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="business" className="text-sm font-semibold" style={{ color: 'var(--color-text)' }}>
            Nombre del negocio <span aria-hidden="true" style={{ color: '#EF4444' }}>*</span>
          </label>
          <input
            id="business"
            name="business"
            type="text"
            required
            value={form.business}
            onChange={handleChange}
            placeholder="Restaurante La Fogata"
            className={inputClass}
            style={focusRingStyle}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="whatsapp" className="text-sm font-semibold" style={{ color: 'var(--color-text)' }}>
            WhatsApp <span aria-hidden="true" style={{ color: '#EF4444' }}>*</span>
          </label>
          <input
            id="whatsapp"
            name="whatsapp"
            type="tel"
            required
            autoComplete="tel"
            value={form.whatsapp}
            onChange={handleChange}
            placeholder="+57 315 561 5323"
            className={inputClass}
            style={focusRingStyle}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="type" className="text-sm font-semibold" style={{ color: 'var(--color-text)' }}>
            Tipo de negocio
          </label>
          <select
            id="type"
            name="type"
            value={form.type}
            onChange={handleChange}
            className={inputClass}
            style={focusRingStyle}
          >
            <option value="">Selecciona...</option>
            {businessTypes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-semibold" style={{ color: 'var(--color-text)' }}>
          ¿Algo que quieras contarnos? <span className="font-normal" style={{ color: 'var(--color-text-muted)' }}>(opcional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          placeholder="Cuéntanos cuántos pedidos recibes por día, en qué país estás, o cualquier duda..."
          className={`${inputClass} resize-none`}
          style={focusRingStyle}
        />
      </div>

      {state === 'error' && (
        <div role="alert" className="flex items-start gap-3 text-sm px-4 py-3 rounded-xl" style={{ background: '#FEF2F2', color: '#B91C1C', border: '1px solid #FECACA' }}>
          <svg className="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
          <span>Hubo un error al enviar. Intenta de nuevo o escríbenos por <a href="https://wa.me/573155615323" target="_blank" rel="noopener noreferrer" className="underline font-semibold">WhatsApp</a>.</span>
        </div>
      )}

      <button
        type="submit"
        disabled={state === 'loading'}
        className="w-full py-3.5 rounded-xl font-semibold text-white flex items-center justify-center gap-2 transition-all hover:opacity-90 disabled:opacity-60 shadow-md hover:shadow-lg hover:-translate-y-0.5"
        style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-primary-dark))' }}
      >
        {state === 'loading' ? (
          <>
            <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"/>
            </svg>
            Enviando...
          </>
        ) : (
          'Enviar mensaje'
        )}
      </button>

      <p className="text-xs text-center" style={{ color: 'var(--color-text-muted)' }}>
        O escríbenos directamente por{' '}
        <a
          href="https://wa.me/573155615323"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold underline hover:text-[--color-primary]"
        >
          WhatsApp
        </a>
        {' '}si lo prefieres.
      </p>
    </form>
  );
}
