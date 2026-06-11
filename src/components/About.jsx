export default function About() {
  const advantages = [
    { k: '01', title: 'Оптовые поставки', desc: 'Специальные цены и персональный менеджер для строительных компаний.' },
    { k: '02', title: '100% сертифицированная продукция', desc: 'Каждый товар проходит входной контроль и имеет необходимые сертификаты.' },
    { k: '03', title: 'Доставка за 1 день', desc: 'Собственный автопарк — привезём на объект в согласованное время.' },
    { k: '04', title: 'Технические консультации', desc: 'Помогаем правильно подобрать материалы под конкретную задачу.' },
  ]

  return (
    <section id="about" className="bg-cream py-[120px] relative">
      {/* full-width warehouse image strip */}
      <div className="relative h-[260px] overflow-hidden mb-[80px]">
        <img
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1920&q=80"
          alt="Склад Paint Spring — 10 000 м²"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ background: 'rgba(26,46,108,.55)' }}
        >
          <div className="text-center text-white">
            <div className="font-barlow font-black text-[clamp(2rem,6vw,4rem)] uppercase tracking-widest leading-none">
              Склад 10 000 м²
            </div>
            <div className="font-dm font-light text-white/75 mt-3 text-[1.05rem] tracking-[.08em] uppercase">
              г. Нукус — постоянный запас более 1 000 позиций
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-10">
        <div className="mb-16 reveal">
          <span className="eyebrow-el inline-flex items-center gap-[14px] font-dm font-medium text-[.72rem] tracking-[.32em] uppercase text-red-ink">
            <span className="w-[34px] h-[2px] bg-red inline-block flex-shrink-0" />
            О компании
          </span>
          <h2 className="font-barlow font-extrabold uppercase text-navy mt-[18px] leading-[.95] text-[clamp(2.4rem,5vw,4rem)]">
            Надёжный поставщик<br />с 2006 года
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1.15fr_.85fr] gap-[72px] items-start">
          <div className="reveal">
            <p className="font-dm font-light text-[1.06rem] text-gray mb-[22px] max-w-[54ch]">
              <strong className="text-ink font-medium">Paint Spring</strong> — профессиональный поставщик строительных и отделочных материалов с 2006 года. За 20 лет работы мы выстроили прямые партнёрства с ведущими производителями: KNAUF, MARSHALL, JOTUN, SOBSAN и другими мировыми брендами.
            </p>
            <p className="font-dm font-light text-[1.06rem] text-gray mb-[22px] max-w-[54ch]">
              Работаем напрямую с производителями, исключая посредников. Склад площадью 10 000 м² в Нукусе обеспечивает постоянное наличие и стабильные поставки для строительных компаний по всему Каракалпакстану.
            </p>

            <div className="mt-10">
              {advantages.map((item, i) => (
                <div
                  key={item.k}
                  className={`border-t border-beige py-[22px] grid grid-cols-[auto_1fr] gap-[22px] items-baseline transition-all duration-300 hover:pl-3 ${i === advantages.length - 1 ? 'border-b border-beige' : ''}`}
                >
                  <span className="font-barlow font-extrabold text-[1.5rem] text-red">{item.k}</span>
                  <div>
                    <h3 className="font-barlow font-bold text-[1.45rem] text-navy uppercase mb-1">{item.title}</h3>
                    <p className="font-dm font-light text-[.95rem] text-gray leading-[1.5] m-0">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside
            className="bg-navy text-white px-11 py-12 relative overflow-hidden sticky top-[110px] reveal d2"
          >
            <div className="absolute top-0 left-0 w-full h-[5px] bg-red" />
            <span className="inline-flex items-center gap-[14px] font-dm font-medium text-[.72rem] tracking-[.32em] uppercase text-white/70">
              <span className="w-[34px] h-[2px] bg-red inline-block flex-shrink-0" />
              В цифрах
            </span>
            <h3 className="font-barlow font-extrabold text-[2rem] uppercase mt-[14px] mb-[34px] leading-[1.05]">
              Масштаб,<br />которому<br />доверяют
            </h3>
            {[
              { num: '20+', label: 'лет на рынке (с 2006 года)' },
              { num: '1000+', label: 'позиций постоянно в наличии' },
              { num: '500+', label: 'клиентов по всему региону' },
            ].map((s, i) => (
              <div key={s.num} className={`py-6 ${i === 0 ? 'pt-0' : 'border-t border-white/[.13]'}`}>
                <div className="font-barlow font-extrabold text-[2.6rem] leading-none text-red">{s.num}</div>
                <div className="font-dm font-light text-[.9rem] text-white/75 mt-[6px]">{s.label}</div>
              </div>
            ))}
          </aside>
        </div>
      </div>
    </section>
  )
}
