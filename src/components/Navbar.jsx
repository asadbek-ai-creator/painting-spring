import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav
      className="fixed top-0 left-0 w-full z-[1000] h-[74px] flex items-center transition-all duration-400"
      style={scrolled ? {
        background: 'rgba(26,46,108,.82)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        boxShadow: '0 6px 30px rgba(26,46,108,.18)',
      } : {}}
    >
      <div className="max-w-[1200px] mx-auto px-10 flex items-center justify-between w-full">
        <a
          href="#top"
          className="font-barlow font-black text-[1.7rem] tracking-wider uppercase text-white flex items-baseline gap-1 leading-none"
        >
          PAINT<span className="text-red">SPRING</span>
        </a>

        <div
          className={`
            fixed md:static top-[74px] left-0 w-full md:w-auto
            flex-col md:flex-row items-start md:items-center gap-0 md:gap-[38px]
            bg-navy md:bg-transparent
            transition-all duration-400 overflow-hidden
            ${menuOpen ? 'flex max-h-[480px] py-4 px-6 pb-7' : 'hidden md:flex'}
            px-0 md:px-0
          `}
          style={{ maxHeight: menuOpen ? '480px' : undefined }}
        >
          {[
            { label: 'О нас', href: '#about' },
            { label: 'Каталог', href: '#catalog' },
            { label: 'Преимущества', href: '#why' },
            { label: 'Партнёры', href: '#partners' },
            { label: 'Филиалы', href: 'filial.html' },
            { label: 'Контакты', href: '#contacts' },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={closeMenu}
              className="relative font-dm font-normal text-[.86rem] tracking-[.04em] text-white/80 py-4 md:py-[6px] px-0 w-full md:w-auto border-b border-white/10 md:border-0 transition-colors duration-250 hover:text-white group"
            >
              {label}
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-red transition-all duration-300 group-hover:w-full hidden md:block" />
            </a>
          ))}
          <a
            href="#contacts"
            onClick={closeMenu}
            className="font-dm font-medium text-[.82rem] tracking-[.05em] text-white border border-white/40 px-[22px] py-[10px] mt-4 md:mt-0 text-center w-full md:w-auto transition-all duration-250 hover:bg-red hover:border-red"
          >
            Связаться
          </a>
        </div>

        <button
          className="md:hidden bg-transparent border border-white/40 text-white font-dm font-medium text-[.72rem] tracking-[.22em] uppercase px-4 py-[10px] cursor-pointer transition-all duration-250 hover:bg-red hover:border-red"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Меню навигации"
          aria-expanded={menuOpen}
        >
          {menuOpen ? 'Закрыть' : 'Меню'}
        </button>
      </div>
    </nav>
  )
}
