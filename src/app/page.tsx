import { allTexts } from '@/server/cms/allTexts'
import { MainBanner } from './_components/Home/MainBanner'
import { Services } from './_components/Home/Services/Services'
import { About } from './_components/Home/About'
import { Contact } from './_components/Home/Contact'

const images = [
  {
    id: '1',
    imgUrl: '/banner-1.jpg',
    description: 'Serviço 1',
  },
  {
    id: '2',
    imgUrl: '/banner-2.jpg',
    description: 'Serviço 2',
  },
  {
    id: '3',
    imgUrl: '/banner-3.jpg',
    description: 'Serviço 3',
  },
]

export default async function Home() {
  const { menuContent } = await allTexts()
  return (
    <>
      <MainBanner />
      <Services images={images} />
      <About />
      <Contact />
    </>
  )
}
