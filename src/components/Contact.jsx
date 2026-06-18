import { useState } from 'react'

const contactRows = [
  {
    label: 'Телефон',
    val: '+998 (91) 303-47-77',
    href: 'tel:+998913034777',
  },
  {
    label: 'Email',
    val: 'linad-nukus@mail.ru',
    href: 'mailto:linad-nukus@mail.ru',
  },
  {
    label: 'Адрес склада',
    val: 'г. Нукус, ул. 60-летия Каракалпакстана, 17/1',
  },
  {
    label: 'Режим работы',
    val: 'Пн–Вс · 09:00 — 18:00',
    sub: 'Работаем ежедневно, без выходных',
  },
  {
    label: 'Instagram',
    val: '@Premium_Stroy_Nukus',
    href: 'https://www.instagram.com/Premium_Stroy_Nukus',
  },
]

function formatPhone(raw) {
  let d = raw.replace(/\D/g, '')
  if (d.startsWith('998')) d = d.slice(3)
  d = d.slice(0, 9)
  let out = '+998'
  if (d.length > 0) out += ' (' + d.slice(0, 2)
  if (d.length >= 2) out += ')'
  if (d.length > 2) out += ' ' + d.slice(2, 5)
  if (d.length > 5) out += '-' + d.slice(5, 7)
  if (d.length > 7) out += '-' + d.slice(7, 9)
  return out
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', company: '', phone: '', category: '', message: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handlePhone = (e) => {
    setForm(f => ({ ...f, phone: formatPhone(e.target.value) }))
  }

  const handlePhoneFocus = () => {
    if (!form.phone) setForm(f => ({ ...f, phone: '+998 (' }))
  }

  const handleSubmit = async () => {
    const newErrors = {}
    if (!form.name.trim()) newErrors.name = true
    if (!form.company.trim()) newErrors.company = true
    if (form.phone.replace(/\D/g, '').length < 12) newErrors.phone = true
    setErrors(newErrors)
    if (Object.keys(newErrors).length > 0) return

    setSubmitting(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Server error')
      setSent(true)
      setForm({ name: '', company: '', phone: '', category: '', message: '' })
      setTimeout(() => setSent(false), 3000)
    } catch {
      alert('Не удалось отправить заявку. Попробуйте позже.')
    } finally {
      setSubmitting(false)
    }
  }

  const inputClass = (field) =>
    `w-full font-dm font-normal text-base text-ink bg-cream border px-4 py-[14px] outline-none transition-all duration-250 focus:bg-white focus:shadow-[0_0_0_3px_rgba(217,79,61,.14)] ${
      errors[field] ? 'border-red shadow-[0_0_0_3px_rgba(217,79,61,.14)]' : 'border-beige focus:border-red'
    }`

  return (
    <section id="contacts" className="bg-navy text-white py-[120px] relative">
      <div className="max-w-[1200px] mx-auto px-10">
        <div className="mb-16 reveal">
          <span className="inline-flex items-center gap-[14px] font-dm font-medium text-[.72rem] tracking-[.32em] uppercase text-red-soft">
            <span className="w-[34px] h-[2px] bg-red inline-block flex-shrink-0" />
            Контакты
          </span>
          <h2 className="font-barlow font-extrabold uppercase text-white mt-[18px] leading-[.95] text-[clamp(2.4rem,5vw,4rem)]">
            Свяжитесь<br />с нами
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[.9fr_1.1fr] gap-16 items-start">
          <div className="reveal">
            {contactRows.map(({ label, val, href, sub }, i) => (
              <div key={label} className={`py-6 ${i === 0 ? 'pt-0' : 'border-t border-white/[.13]'}`}>
                <div className="font-dm font-medium text-[.72rem] tracking-[.2em] uppercase text-red-soft mb-[6px]">{label}</div>
                <div className="font-barlow font-bold text-[1.7rem] text-white leading-[1.1]">
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith('https') ? '_blank' : undefined}
                      rel={href.startsWith('https') ? 'noopener noreferrer' : undefined}
                      className="transition-colors duration-250 hover:text-red"
                    >
                      {val}
                    </a>
                  ) : val}
                </div>
                {sub && <div className="font-dm font-light text-[.92rem] text-white/70 mt-1">{sub}</div>}
              </div>
            ))}
          </div>

          <div className="reveal d2 bg-white relative px-11 py-[46px]">
            <div className="absolute top-0 left-0 w-full h-[5px] bg-red" />
            <h3 className="font-barlow font-extrabold text-[1.9rem] text-navy uppercase mb-2">Оставить заявку</h3>
            <p className="font-dm font-light text-[.95rem] text-gray mb-7">
              Заполните форму — менеджер свяжется с вами и пришлёт актуальный прайс-лист.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[18px] mb-5">
              <div>
                <label className="block font-dm font-medium text-[.74rem] tracking-[.12em] uppercase text-navy mb-2">
                  Имя <span className="text-red-ink">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Ваше имя"
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  className={inputClass('name')}
                />
              </div>
              <div>
                <label className="block font-dm font-medium text-[.74rem] tracking-[.12em] uppercase text-navy mb-2">
                  Компания <span className="text-red-ink">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Название компании"
                  value={form.company}
                  onChange={e => setForm(f => ({ ...f, company: e.target.value }))}
                  className={inputClass('company')}
                />
              </div>
            </div>

            <div className="mb-5">
              <label className="block font-dm font-medium text-[.74rem] tracking-[.12em] uppercase text-navy mb-2">
                Телефон <span className="text-red-ink">*</span>
              </label>
              <input
                type="tel"
                placeholder="+998 (__) ___-__-__"
                value={form.phone}
                onChange={handlePhone}
                onFocus={handlePhoneFocus}
                className={inputClass('phone')}
              />
            </div>

            <div className="mb-5">
              <label className="block font-dm font-medium text-[.74rem] tracking-[.12em] uppercase text-navy mb-2">
                Категория
              </label>
              <select
                value={form.category}
                onChange={e => setForm(f => ({ ...f, category: e.target.value }))}
                className="w-full font-dm font-normal text-base text-ink bg-cream border border-beige px-4 py-[14px] outline-none transition-all duration-250 focus:border-red focus:bg-white focus:shadow-[0_0_0_3px_rgba(217,79,61,.14)]"
              >
                <option value="">Выберите категорию</option>
                <option>Штукатурки и шпаклёвки</option>
                <option>Гипсокартон и профили</option>
                <option>Грунтовки и стяжки</option>
                <option>Гидроизоляция</option>
                <option>Утепление и армирование</option>
                <option>Краски и декоративная отделка</option>
                <option>Прайс-лист / оптовые поставки</option>
                <option>Общий вопрос</option>
              </select>
            </div>

            <div className="mb-5">
              <label className="block font-dm font-medium text-[.74rem] tracking-[.12em] uppercase text-navy mb-2">
                Сообщение
              </label>
              <textarea
                placeholder="Опишите ваш запрос"
                value={form.message}
                onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                className="w-full font-dm font-normal text-base text-ink bg-cream border border-beige px-4 py-[14px] outline-none transition-all duration-250 focus:border-red focus:bg-white focus:shadow-[0_0_0_3px_rgba(217,79,61,.14)] min-h-[110px] resize-y"
              />
            </div>

            <button
              type="button"
              onClick={handleSubmit}
              disabled={submitting || sent}
              className={`w-full font-barlow font-bold text-[1.2rem] tracking-[.1em] uppercase text-white border-none py-[18px] mt-[6px] transition-all duration-300 cursor-pointer disabled:pointer-events-none ${
                sent
                  ? 'bg-[#2e7d4f]'
                  : submitting
                  ? 'bg-navy opacity-70'
                  : 'bg-red hover:bg-navy'
              }`}
            >
              {sent ? 'Заявка принята!' : submitting ? 'Отправка...' : 'Отправить сообщение'}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
