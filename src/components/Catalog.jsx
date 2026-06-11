const categories = [
  {
    num: '01',
    title: 'Штукатурки и шпаклёвки',
    desc: 'Гипсовые смеси для выравнивания стен и потолков. Флагманский Knauf Ротбанд и финишная шпаклёвка ELERON для идеально гладкой поверхности.',
    tags: ['KNAUF Ротбанд', 'ELERON', 'Финишная'],
    delay: '',
    img: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=600&q=80',
  },
  {
    num: '02',
    title: 'Гипсокартон и профили',
    desc: 'Системы ГКЛ для перегородок, потолков и облицовки. Листы Knauf и металлопрофиль UNI — полный комплект для монтажа.',
    tags: ['KNAUF ГКЛ', 'UNI профили', 'Перегородки'],
    delay: 'd1',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80',
  },
  {
    num: '03',
    title: 'Грунтовки и стяжки',
    desc: 'Грунтовки глубокого проникновения и наливные полы. Knauf Мультигрунд, Тифенгрунд и гипсовый наливной пол ELERON.',
    tags: ['Мультигрунд', 'Тифенгрунд', 'ELERON'],
    delay: 'd2',
    img: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=600&q=80',
  },
  {
    num: '04',
    title: 'Гидроизоляция',
    desc: 'Обмазочная гидроизоляция для ванных комнат, влажных помещений и фундаментов. Knauf ФЛЭХЕНДИХТ для надёжной защиты.',
    tags: ['KNAUF', 'Ванные комнаты', 'Фундаменты'],
    delay: '',
    img: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&w=600&q=80',
  },
  {
    num: '05',
    title: 'Утепление и армирование',
    desc: 'Базальтовая вата Knauf Insulation по бесклеевой технологии ECOSE® и армирующая стеклосетка Серпянка Knauf для швов.',
    tags: ['Базальт', 'KNAUF', 'Серпянка'],
    delay: 'd1',
    img: 'https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?auto=format&fit=crop&w=600&q=80',
  },
  {
    num: '06',
    title: 'Краски и декоративная отделка',
    desc: 'Акриловые краски Alina Paint, декоративная штукатурка под травертин SOBSAN, бархатные покрытия Отточенто. Премиальные краски MARSHALL и JOTUN.',
    tags: ['Alina Paint', 'SOBSAN', 'MARSHALL'],
    delay: 'd2',
    img: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80',
  },
]

export default function Catalog() {
  return (
    <section id="catalog" className="bg-beige py-[120px] relative">
      <div className="max-w-[1200px] mx-auto px-10">
        <div className="mb-16 reveal">
          <span className="inline-flex items-center gap-[14px] font-dm font-medium text-[.72rem] tracking-[.32em] uppercase text-red-ink">
            <span className="w-[34px] h-[2px] bg-red inline-block flex-shrink-0" />
            Каталог продукции
          </span>
          <h2 className="font-barlow font-extrabold uppercase text-navy mt-[18px] leading-[.95] text-[clamp(2.4rem,5vw,4rem)]">
            Шесть категорий<br />под каждый этап
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map(({ num, title, desc, tags, delay, img }) => (
            <article
              key={num}
              className={`reveal ${delay} bg-white relative overflow-hidden transition-all duration-400 cursor-default group hover:-translate-y-2 hover:bg-cream flex flex-col`}
              style={{ boxShadow: 'none' }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 26px 50px -22px rgba(26,46,108,.4)' }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none' }}
            >
              {/* category image */}
              <div className="relative h-[160px] overflow-hidden flex-shrink-0">
                <img
                  src={img}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to bottom, rgba(26,46,108,0) 40%, rgba(26,46,108,0.55) 100%)' }}
                />
                <div className="absolute bottom-3 left-4 font-barlow font-extrabold text-[1.05rem] text-white/90 tracking-[.1em]">{num}</div>
              </div>

              <div
                className="absolute top-0 left-0 w-full h-[4px] bg-red origin-left scale-x-0 transition-transform duration-400 group-hover:scale-x-100"
              />

              <div className="px-[34px] pt-[22px] pb-[34px] flex flex-col flex-1">
                <h3 className="font-barlow font-extrabold text-[1.7rem] text-navy uppercase mb-[14px] leading-none">{title}</h3>
                <p className="font-dm font-light text-[.95rem] text-gray flex-1">{desc}</p>
                <div className="flex flex-wrap gap-2 mt-5">
                  {tags.map(tag => (
                    <span
                      key={tag}
                      className="font-dm font-medium text-[.7rem] tracking-[.06em] uppercase text-navy bg-beige group-hover:bg-white px-[11px] py-[6px] transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="reveal mt-[42px] font-dm font-light text-[.95rem] text-gray border-l-[3px] border-red pl-[18px]">
          Цены не отображаются на сайте. Для получения актуального прайс-листа{' '}
          <a href="#contacts" className="text-navy font-medium border-b border-red">свяжитесь с нами</a>.
        </p>
      </div>
    </section>
  )
}
