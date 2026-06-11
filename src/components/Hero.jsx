export default function Hero() {
  return (
    <header
      id="top"
      className="bg-navy text-white min-h-screen flex items-center pt-[74px] relative overflow-hidden"
    >
      {/* background image overlay */}
      <img
        src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
        style={{ opacity: 0.07 }}
      />

      {/* background decorations */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 80% 20%,rgba(217,79,61,.16),transparent 45%), repeating-linear-gradient(90deg,rgba(255,255,255,.025) 0 1px,transparent 1px 90px)',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute right-[-4vw] bottom-[-6vh] font-barlow font-black text-white/[.035] leading-[.7] tracking-[-0.04em] pointer-events-none select-none"
        style={{ fontSize: '30vw' }}
      >
        PS
      </div>

      <div className="max-w-[1200px] mx-auto px-10 relative z-[2] w-full">
        <div
          style={{
            opacity: 0,
            transform: 'translateX(-60px)',
            animation: 'slideIn 1s cubic-bezier(.16,1,.3,1) .2s forwards',
          }}
        >
          <span className="inline-block font-dm font-medium text-[.74rem] tracking-[.3em] uppercase text-red-soft border-l-[3px] border-red pl-[14px] mb-[30px]">
            Строительные материалы · Нукус
          </span>

          <h1 className="font-barlow font-black uppercase max-w-[14ch] mb-[30px] leading-[.95] text-[clamp(3rem,9vw,7.2rem)]">
            Всё для вашей <span className="text-red">стройки</span>
          </h1>

          <p className="font-dm font-light text-white/80 max-w-[52ch] mb-[46px] text-[clamp(1rem,1.6vw,1.25rem)]">
            Профессиональный поставщик строительных и отделочных материалов с 2006 года — от гипсовых смесей до декоративных покрытий ведущих мировых брендов.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#catalog"
              className="inline-flex items-center gap-4 bg-red text-white font-barlow font-bold text-[1.15rem] tracking-[.1em] uppercase px-[42px] py-[18px] transition-all duration-300 hover:bg-white hover:text-navy group"
            >
              Каталог{' '}
              <span className="transition-transform duration-300 group-hover:translate-x-[6px]">→</span>
            </a>
            <a
              href="#contacts"
              className="inline-flex items-center gap-4 bg-transparent text-white font-barlow font-bold text-[1.15rem] tracking-[.1em] uppercase px-[42px] py-[18px] border border-white/40 transition-all duration-300 hover:border-white hover:bg-white/10"
            >
              Связаться с нами
            </a>
          </div>

          <div className="flex gap-[60px] mt-[80px] flex-wrap border-t border-white/[.14] pt-[38px]">
            {[
              { num: '1000', plus: true, label: 'позиций в наличии' },
              { num: '20', plus: false, label: 'лет на рынке' },
              { num: '500', plus: true, label: 'клиентов' },
            ].map(({ num, plus, label }) => (
              <div key={label}>
                <div className="font-barlow font-extrabold text-[3rem] leading-none text-white">
                  {num}{plus && <em className="text-red not-italic">+</em>}
                </div>
                <div className="font-dm font-light text-[.84rem] tracking-[.05em] text-white/60 mt-[6px]">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
