'use client'
import { Button } from '@/components/Button'
import { CaretRight } from '@phosphor-icons/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import Image from 'next/image'

type ServiceImageProps = {
  description: string
  id: string
  imgUrl: string
}

type ServicesProps = {
  images: ServiceImageProps[]
}

export function Services({ images }: ServicesProps) {
  return (
    <section
      className="flex items-center justify-center gap-8 bg-services-image bg-cover bg-fixed bg-center bg-no-repeat p-8"
      id="servicos"
    >
      <div className="outline-100 max-w-md rounded border-8 border-transparent shadow-2xl outline outline-slate-300">
        <Swiper
          slidesPerView={1}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          modules={[Autoplay]}
        >
          {images.map((image) => (
            <SwiperSlide key={image.id}>
              <Image
                src={image.imgUrl}
                alt={image.description}
                width={500}
                height={100}
                className="h-64 object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div>
        <p className="text-3xl font-bold">Conheça nossos serviços</p>
        <Button>
          Menu de procedimentos <CaretRight weight="bold" />
        </Button>
      </div>
    </section>
  )
}
