export function Footer() {
  const year = new Date().getFullYear()
  return (
    <>
      <section className="flex h-96 items-center justify-center bg-footer-image bg-cover bg-center text-center text-4xl text-slate-50">
        <p className="container mx-auto">
          A verdadeira <strong>beleza</strong> floresce no instante em que você
          abraça sua <strong>autenticidade!</strong>
        </p>
      </section>
      <footer className="bg-slate-700 p-6 text-center text-slate-50">
        Copyright © {year} Lidiane Clinica
      </footer>
    </>
  )
}
