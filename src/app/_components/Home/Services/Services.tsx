'use client'
import { Button } from '@/components/Button'
import { CaretRight } from '@phosphor-icons/react'

export function Services() {
  return (
    <section className="flex items-center justify-center gap-6 p-8">
      <div>Galeria</div>
      <div>
        <p className="text-3xl font-bold">Conheça nossos serviços</p>
        <Button>
          Menu de procedimentos <CaretRight weight="bold" />
        </Button>
      </div>
    </section>
  )
}
