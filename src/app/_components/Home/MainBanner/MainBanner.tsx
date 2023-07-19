import Image from 'next/image'

export function MainBanner() {
  return (
    <section>
      <Image
        className="h-96 w-full object-cover"
        src="/siteBannerSte.jpg"
        alt="banner principal mostrando a estética"
        width={2048}
        height={1365}
      />
    </section>
  )
}
