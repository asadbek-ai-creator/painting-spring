const words = [
  'Штукатурки и шпаклёвки',
  'Гипсокартон и профили',
  'Грунтовки',
  'Гидроизоляция',
  'Утепление',
  'Краски и покрытия',
  'KNAUF · MARSHALL · JOTUN',
  'Прямые поставки',
]

const allWords = [...words, ...words]

export default function Ticker() {
  return (
    <div
      aria-hidden="true"
      className="bg-red overflow-hidden whitespace-nowrap py-[18px] flex group"
    >
      <div
        className="ticker-track inline-flex items-center flex-shrink-0"
        style={{ animation: 'ticker 32s linear infinite' }}
      >
        {allWords.map((word, i) => (
          <span
            key={i}
            className="font-barlow font-extrabold text-[1.4rem] tracking-[.06em] uppercase text-white px-7 inline-flex items-center after:content-['—'] after:text-white/45 after:ml-14"
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  )
}
