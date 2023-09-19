import Form from "@/components/Form";
import SuccessToast from "@/components/SuccessToast";

export default async function Home() {
  return (
    <main className="flex flex-col gap-10 flex-1 items-center justify-center px-48">
      <section className="text-white text-5xl text-center">
        Explore o Universo do Front-End: Receba as últimas tendências, dicas e truques toda semana!</section>
      <section className="text-white text-lg text-center">
        Inscreva-se na nossa newsletter semanal para ficar atualizado sobre as últimas novidades em desenvolvimento front-end, descobrir novas ferramentas, aprimorar suas habilidades e aprofundar seu conhecimento nesta área dinâmica!
      </section>
      <Form />
    </main>
  )
}