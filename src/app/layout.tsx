import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { Header } from './_components/Header'
import { Footer } from './_components/Footer'

const montsserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Clinica Lidiane',
  description: 'Clinica da Lidiane',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className={montsserrat.className}>
        <Header />
        <main className="pt-14">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
