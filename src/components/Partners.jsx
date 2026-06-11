const featured = [
  {
    status: 'Официальный дистрибьютор',
    name: 'KNAUF',
    type: 'Гипсовые смеси, гипсокартон, грунтовки, гидроизоляция, утепление',
    term: '10 лет',
    delay: '',
  },
  {
    status: 'Официальный партнёр',
    name: 'MARSHALL',
    type: 'Профессиональные краски и лакокрасочные материалы',
    term: '10 лет',
    delay: 'd1',
  },
  {
    status: 'Официальный партнёр',
    name: 'JOTUN',
    type: 'Норвежские премиальные краски для интерьера и экстерьера',
    term: '10 лет',
    delay: 'd2',
  },
]

const allBrands = [
  'KNAUF', 'MARSHALL', 'JOTUN', 'SOBSAN', 'ELERON', 'ALINA PAINT',
  'DEMIR PROFILLARI', 'BARAKA DEKOR', 'ПЕНОПЛЭКС', 'GENÇ BOYA', 'ПЛИНТЭКС',
  'DECOREX', 'ITALIANO', 'DECOR', 'TYTAN PROFESSIONAL',
]

export default function Partners() {
  return (
    <section id="partners" className="bg-cream py-[120px] relative">
      <div className="max-w-[1200px] mx-auto px-10">
        <div className="mb-16 reveal">
          <span className="inline-flex items-center gap-[14px] font-dm font-medium text-[.72rem] tracking-[.32em] uppercase text-red-ink">
            <span className="w-[34px] h-[2px] bg-red inline-block flex-shrink-0" />
            Бренды-партнёры
          </span>
          <h2 className="font-barlow font-extrabold uppercase text-navy mt-[18px] leading-[.95] text-[clamp(2.4rem,5vw,4rem)]">
            Работаем только<br />с лидерами рынка
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map(({ status, name, type, term, delay }) => (
            <article
              key={name}
              className={`reveal ${delay} bg-white px-[34px] py-[40px] pb-[34px] relative overflow-hidden transition-all duration-400 group hover:-translate-y-2`}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 26px 50px -22px rgba(26,46,108,.35)' }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none' }}
            >
              <div
                className="absolute bottom-0 left-0 w-full h-[4px] origin-left scale-x-0 transition-transform duration-[450ms] group-hover:scale-x-100"
                style={{ background: 'linear-gradient(90deg,#1A2E6C,#D94F3D)' }}
              />
              <span className="block font-dm font-medium text-[.66rem] tracking-[.16em] uppercase text-red-ink mb-[14px]">{status}</span>
              <h3 className="font-barlow font-extrabold text-[1.85rem] text-navy uppercase mb-2">{name}</h3>
              <p className="font-dm font-light text-[.96rem] text-gray">{type}</p>
              <div className="flex justify-between items-baseline mt-[26px] pt-[18px] border-t border-beige">
                <span className="font-barlow font-extrabold text-[2rem] text-navy leading-none">{term}</span>
                <span className="font-dm font-light text-[.78rem] text-gray uppercase tracking-[.08em]">сотрудничества</span>
              </div>
            </article>
          ))}
        </div>

        {/* all brands cloud */}
        <div className="reveal mt-[56px]">
          <p className="font-dm font-medium text-[.72rem] tracking-[.22em] uppercase text-red-ink mb-5 inline-flex items-center gap-3">
            <span className="w-[28px] h-[2px] bg-red inline-block" />
            Все бренды в наличии
          </p>
          <div className="flex flex-wrap gap-3">
            {allBrands.map(brand => (
              <span
                key={brand}
                className="font-barlow font-bold text-[.95rem] tracking-[.06em] uppercase text-navy bg-white border border-beige px-5 py-3 transition-all duration-250 hover:bg-navy hover:text-white hover:border-navy cursor-default"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
