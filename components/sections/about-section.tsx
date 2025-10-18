"use client";
import { ChevronRight } from "lucide-react";
import { AnimatedSection } from "@/components/client-animations";

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-16 px-4 bg-white dark:bg-gray-800 relative overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl relative z-10">
        <AnimatedSection>
          <h2 className="text-3xl font-bold mb-8 text-center">
            Sobre a Primo Cloud
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatedSection direction="left" delay={0.2}>
            <div className="space-y-4">
              <p className="text-lg text-gray-700 dark:text-gray-300">
                A Primo Cloud foi criada para atender às necessidades das
                empresas na nuvem, oferecendo soluções inovadoras e seguras.
                Nosso objetivo é ajudar organizações a otimizar seus processos,
                melhorar a eficiência e garantir a segurança de seus dados
                através de tecnologias avançadas de inteligência artificial e
                computação em nuvem.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Com uma sólida experiência em soluções baseadas na nuvem,
                especializamo-nos em modelagem preditiva, classificação e
                análise de dados. Nosso foco está no desenvolvimento e
                implantação de tecnologias de inteligência artificial que
                agregam valor aos negócios, ajudando empresas a alcançar maior
                eficiência e inovação em seus processos.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.4}>
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Principais Especialidades
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start group">
                  <ChevronRight className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Desenvolvimento de Modelos de Aprendizado de Máquina e
                    Aprendizado Profundo: Criamos modelos personalizados para
                    resolver problemas complexos, utilizando técnicas avançadas
                    de machine learning e deep learning.
                  </span>
                </li>
                <li className="flex items-start group">
                  <ChevronRight className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Implantação de Modelos e Pipelines CI/CD: Automatizamos o
                    ciclo de vida de modelos de IA, garantindo uma implantação
                    contínua e eficiente com pipelines de integração e entrega
                    contínuas.
                  </span>
                </li>
                <li className="flex items-start group">
                  <ChevronRight className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Aplicações de Visão Computacional e PLN: Desenvolvemos
                    soluções que utilizam visão computacional para análise de
                    imagens e processamento de linguagem natural (PLN) para
                    análise de texto.
                  </span>
                </li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
