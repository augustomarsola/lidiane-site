'use client'
import { Button } from '@/components/Button'
import { CaretRight } from '@phosphor-icons/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

export function Services() {
  return (
    <section className="flex items-center justify-center gap-6 p-8">
      <div className="max-w-md">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          // autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <div className="h-24 w-24">Alo1</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-24 w-24">Alo2</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-24 w-24">Alo3</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-24 w-24">Alo4</div>
          </SwiperSlide>
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
