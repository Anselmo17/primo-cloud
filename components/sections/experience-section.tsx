"use client";
import { AnimatedSection } from "@/components/client-animations";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-16 px-4 bg-gray-50 dark:bg-gray-900 relative"
    >
      <div className="container mx-auto max-w-6xl relative z-10">
        <AnimatedSection>
          <h2 className="text-3xl font-bold mb-8 text-center">
            Experiência Profissional
          </h2>
        </AnimatedSection>

        <div className="space-y-8">
          <AnimatedSection delay={0.2}>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-purple-600 hover:-translate-y-1 transition-transform duration-300">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold">
                    Engenheiro de Soluções Cloud
                  </h3>
                  <p className="text-purple-600 dark:text-purple-400 font-medium">
                    PrimoCloud
                  </p>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                  Jan 2023 - Presente
                </p>
              </div>
              <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                <li>
                  Desenvolvi e implementei soluções de computação em nuvem para
                  empresas, utilizando tecnologias como AWS, Azure e Google
                  Cloud.
                </li>
                <li>
                  Colaborei com equipes de desenvolvimento para integrar
                  soluções escaláveis e seguras, garantindo alta disponibilidade
                  e desempenho.
                </li>
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-purple-600 hover:-translate-y-1 transition-transform duration-300">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold">Especialista em DevOps</h3>
                  <p className="text-purple-600 dark:text-purple-400 font-medium">
                    PrimoCloud
                  </p>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                  Ago 2021 - Dez 2022
                </p>
              </div>
              <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                <li>
                  Automatizei pipelines de CI/CD para implantação contínua de
                  aplicações em ambientes de produção.
                </li>
                <li>
                  Gerenciei infraestrutura como código (IaC) utilizando
                  Terraform e Ansible.
                </li>
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-purple-600 hover:-translate-y-1 transition-transform duration-300">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold">Analista de Dados</h3>
                  <p className="text-purple-600 dark:text-purple-400 font-medium">
                    PrimoCloud
                  </p>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                  Fev 2020 - Jul 2021
                </p>
              </div>
              <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                <li>
                  Realizei análises de dados para identificar tendências e
                  insights que ajudaram os clientes a tomar decisões
                  estratégicas.
                </li>
                <li>
                  Desenvolvi dashboards interativos utilizando ferramentas como
                  Power BI e Tableau.
                </li>
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.5}>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-purple-600 hover:-translate-y-1 transition-transform duration-300">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold">Estagiário em TI</h3>
                  <p className="text-purple-600 dark:text-purple-400 font-medium">
                    PrimoCloud
                  </p>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                  Jan 2019 - Jan 2020
                </p>
              </div>
              <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                <li>
                  Auxiliei na manutenção e suporte de sistemas internos,
                  garantindo a continuidade das operações.
                </li>
                <li>
                  Participei de projetos de migração de dados para a nuvem,
                  utilizando ferramentas como AWS S3 e Google Cloud Storage.
                </li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
