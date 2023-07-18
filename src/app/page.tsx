import { allTexts } from '@/server/cms/allTexts'
import { MainBanner } from './_components/Home/MainBanner'
import { Services } from './_components/Home/Services/Services'
import { About } from './_components/Home/About'

export default async function Home() {
  const { menuContent } = await allTexts()
  return (
    <>
      <MainBanner />
      <Services />
      <About />
    </>
  )
}
