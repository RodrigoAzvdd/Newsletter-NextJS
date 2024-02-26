import Form from "@/components/Form";
import SuccessToast from "@/components/SuccessToast";

export default async function Home() {
  return (
    <main className="flex flex-col gap-10 flex-1 items-center justify-center px-12 lg:px-48">
      <section className="text-white text-center xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl">
        Explore o Universo do Front-End: Receba as últimas tendências, dicas e truques toda semana!</section>
      <section className="text-white text-center xl:text-lg lg:text-base md:text-sm text-xs">
        Inscreva-se na nossa newsletter semanal para ficar atualizado sobre as últimas novidades em desenvolvimento front-end, descobrir novas ferramentas, aprimorar suas habilidades e aprofundar seu conhecimento nesta área dinâmica!
      </section>
      <Form />
    </main>
  )
}