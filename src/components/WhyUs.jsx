const reasons = [
  { k: '01', title: 'Прямые поставки от производителей', desc: 'Работаем без посредников напрямую с KNAUF, MARSHALL, JOTUN и другими брендами — подлинность и конкурентная цена гарантированы.', delay: '' },
  { k: '02', title: 'Постоянный склад 10 000 м²', desc: 'Бесперебойное наличие более 1 000 позиций. Никаких задержек — ваш объект не простаивает.', delay: 'd1' },
  { k: '03', title: 'Гибкие условия для партнёров', desc: 'Отсрочка платежа, накопительные скидки и персональный менеджер для каждого клиента.', delay: 'd2' },
  { k: '04', title: 'Доставка за 1 день', desc: 'Собственный автопарк — привезём на объект в согласованное время по Нукусу и региону.', delay: 'd3' },
]

const metrics = [
  { num: '100%', label: 'товаров с сертификатами', delay: 'd1' },
  { num: '1 день', label: 'срок доставки по городу', delay: 'd2' },
  { num: '1000+', label: 'позиций постоянно в наличии', delay: 'd3' },
]

export default function WhyUs() {
  return (
    <section id="why" className="bg-navy text-white py-[120px] relative">
      <div className="max-w-[1200px] mx-auto px-10">
        <div className="mb-16 reveal">
          <span className="inline-flex items-center gap-[14px] font-dm font-medium text-[.72rem] tracking-[.32em] uppercase text-red-soft">
            <span className="w-[34px] h-[2px] bg-red inline-block flex-shrink-0" />
            Почему мы
          </span>
          <h2 className="font-barlow font-extrabold uppercase text-white mt-[18px] leading-[.95] text-[clamp(2.4rem,5vw,4rem)]">
            Причины работать<br />с Paint Spring
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-16 items-start">
          <div>
            {reasons.map(({ k, title, desc, delay }, i) => (
              <div
                key={k}
                className={`reveal ${delay} border-t border-white/[.13] py-[30px] grid grid-cols-[auto_1fr] gap-[30px] items-start transition-all duration-350 hover:pl-[14px] ${i === reasons.length - 1 ? 'border-b border-white/[.13]' : ''}`}
              >
                <span className="font-barlow font-extrabold text-[2.2rem] text-red leading-none">{k}</span>
                <div>
                  <h3 className="font-barlow font-bold text-[1.55rem] uppercase mb-2">{title}</h3>
                  <p className="font-dm font-light text-[.98rem] text-white/75 max-w-[46ch]">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid gap-[18px] md:sticky md:top-[110px]">
            {metrics.map(({ num, label, delay }) => (
              <div
                key={num}
                className={`reveal ${delay} bg-white/[.05] border border-white/10 px-8 py-[30px] transition-all duration-300 hover:bg-red hover:border-red`}
              >
                <div className="font-barlow font-black text-[3.4rem] leading-none text-white">{num}</div>
                <div className="font-dm font-light text-[.95rem] tracking-[.04em] text-white/80 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
