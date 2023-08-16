import { allTexts } from '@/server/cms/allTexts'
import { MainBanner } from './_components/Home/MainBanner'
import { Services } from './_components/Home/Services/Services'
import { About } from './_components/Home/About'
import { Contact } from './_components/Home/Contact'
import userPhoto from '@/assets/lidianeFernandes.jpg'

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

const description = (
  <>
    <p>
      Trabalhamos incansavelmente todos os dias para oferecer uma experiência
      verdadeiramente excepcional, caracterizada por carinho, acolhimento e
      profissionalismo incomparáveis. Cada interação com nossos clientes é uma
      oportunidade para criarmos momentos memoráveis, nos quais unimos nossa
      busca incessante por tratamentos de ponta e inovações revolucionárias.
    </p>
    <p>
      Guiados por um firme propósito e compromisso, nossa meta é clara: fornecer
      serviços estéticos e médicos de nível superior. Contamos com uma equipe de
      profissionais altamente capacitados, respaldados por tecnologia de última
      geração. Através dessa combinação, estamos empenhados em superar
      expectativas e estabelecer padrões de excelência, indo além dos limites
      convencionais.
    </p>
  </>
)

export default async function Home() {
  const { menuContent } = await allTexts()
  return (
    <>
      <MainBanner />
      <Services images={images} />
      <About
        userPhoto={userPhoto}
        userName="Lidiane Fernandes"
        userDescription={description}
      />
      <Contact />
    </>
  )
}
