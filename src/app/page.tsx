import { allTexts } from '@/server/cms/allTexts'
import { MainBanner } from './_components/MainBanner'
import { Services } from './_components/Services/Services'
import { About } from './_components/About'

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
