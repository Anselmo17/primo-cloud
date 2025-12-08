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

        <div className="grid grid-cols-1 gap-8">
          <AnimatedSection direction="left" delay={0.2}>
            <div className="space-y-4">
              <p className="text-lg text-gray-700 dark:text-gray-300">
                A Primo Cloud Rayssa Joaninha foi criada para atender às necessidades das
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
        </div>
      </div>
    </section>
  );
}
