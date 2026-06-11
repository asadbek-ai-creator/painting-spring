export default function Footer() {
  return (
    <footer style={{ background: '#13204d' }} className="text-white/60 py-[50px]">
      <div className="max-w-[1200px] mx-auto px-10 flex justify-between items-center flex-wrap gap-5">
        <a
          href="#top"
          className="font-barlow font-black text-[1.4rem] tracking-wider uppercase text-white flex items-baseline gap-1 leading-none"
        >
          PAINT<span className="text-red">SPRING</span>
        </a>
        <div className="font-dm font-light text-[.84rem] tracking-[.03em] text-center">
          © 2026 Paint Spring · Строительные материалы · г. Нукус
        </div>
        <a
          href="https://www.instagram.com/Premium_Stroy_Nukus"
          target="_blank"
          rel="noopener noreferrer"
          className="font-dm font-light text-[.84rem] tracking-[.03em] hover:text-white transition-colors duration-250"
        >
          @Premium_Stroy_Nukus
        </a>
      </div>
    </footer>
  )
}
