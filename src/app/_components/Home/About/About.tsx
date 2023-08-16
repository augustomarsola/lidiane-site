import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'

type AboutProps = {
  userPhoto: string | StaticImport
  userName: string
  userDescription: JSX.Element
}

export function About({ userPhoto, userName, userDescription }: AboutProps) {
  return (
    <section
      id="sobre"
      className="container mx-auto flex min-h-[24rem] items-center justify-center gap-8"
    >
      <Image
        src={userPhoto}
        alt="Foto de perfil da Lidiane"
        width={512}
        height={512}
        className="h-full w-[32rem] object-cover"
      />
      <div className="max-w-md py-10">
        <p className="text-3xl font-bold">{userName}</p>
        <div className="prose-sm mt-4">{userDescription}</div>
      </div>
    </section>
  )
}
