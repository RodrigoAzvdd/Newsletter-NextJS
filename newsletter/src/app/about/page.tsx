export default function About() {
    return (
        <main className="flex flex-col gap-10 flex-1 justify-center px-52 text-white">
            <h1 className="text-2xl font-bold">Sobre a Newsletter "Front-End Insights"</h1>
            <div className="flex flex-col gap-2">
                <h1 className="text-xl font-bold">O que é a Front-End Insights?</h1>
                <p className="ps-16">Bem-vindo ao Insights! Somos apaixonados pelo mundo do desenvolvimento Frontend Web e estamos aqui para fornecer a você as informações mais valiosas, atualizações e recursos para aprimorar suas habilidades.</p>
            </div>
            <div className="flex flex-col gap-2">
                <h1 className="text-xl font-bold">Por que assinar a Front-End Insights?</h1>
                <p className="ps-16">Nosso objetivo é ajudar desenvolvedores Frontend a se manterem atualizados com as últimas tendências, técnicas e melhores práticas. Queremos ser o seu guia confiável no vasto universo do Frontend, oferecendo conteúdo de qualidade e insights práticos.</p>
            </div>
            <div>
                <h1 className="text-xl font-bold">O que Oferecemos?</h1>
                <ul className="list-decimal flex flex-col gap-2 p-2">
                    <li className="ms-16 font-light">
                        <span className="font-semibold text-lg">Atualizações Semanais: </span>
                        Enviamos newsletters semanais diretamente para a sua caixa de entrada, repletas de artigos informativos, tutoriais, notícias e dicas úteis.
                    </li>
                    <li className="ms-16 font-light">
                        <span className="font-semibold text-lg">Comunidade Engajada: </span>
                        Fazemos parte de uma comunidade vibrante de desenvolvedores que compartilham conhecimento e experiências. Junte-se a nós nas redes sociais e fóruns para se conectar com outros entusiastas do Frontend.
                    </li>
                    <li className="ms-16 font-light">
                        <span className="font-semibold text-lg">Recursos de Aprendizado: </span>
                        Explore nossa crescente biblioteca de recursos, incluindo guias detalhados, cursos online recomendados e ferramentas úteis para aprimorar suas habilidades.
                    </li>
                </ul>
            </div>
        </main>
    )
}