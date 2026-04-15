import React from "react";
const NossosProjetos: React.FC = () => {
    return (
        <div className="min-h-screen bg-base text-text px-6 py-20">
            <div className="max-w-5xl mx-auto space-y-16">

                {/* Título */}
                <div className="text-center space-y-4">
                    <h1 className="text-5xl font-semibold tracking-tight">
                        Nossos Projetos
                    </h1>
                    <p className="text-subtext text-lg leading-relaxed max-w-2xl mx-auto">
                        Desenvolvemos soluções digitais com foco em facilitar o acesso à informação e melhorar a experiência do usuário. Nossos projetos buscam unir tecnologia e usabilidade para criar plataformas intuitivas, funcionais e acessíveis.
                    </p>
                    <p className="text-subtext text-lg leading-relaxed max-w-2xl mx-auto">                        
                        Entre nossas iniciativas, destacamos sistemas que auxiliam na organização de atendimentos, na orientação de usuários e no acesso a conteúdos educacionais, sempre priorizando a clareza, eficiência e inovação.

                    </p>
                    <p className="text-subtext text-lg leading-relaxed max-w-2xl mx-auto">
                        Estamos constantemente evoluindo nossas soluções para atender melhor às necessidades dos usuários e gerar impacto positivo por meio da tecnologia.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default NossosProjetos;