"use client";

import {
  AnimatedSection,
  ClientMotion,
} from "@/components/client-animations";

export function MethodologySection() {
  return (
    <section
      id="education"
      className="py-16 px-4 bg-white dark:bg-gray-800 relative"
    >
      <div className="container mx-auto max-w-6xl relative z-10">
        <AnimatedSection>
          <h2 className="text-3xl font-bold mb-8 text-center">
            Metodologia de Trabalho
          </h2>
        </AnimatedSection>

        <div className="mb-12">
          <ClientMotion
            className="text-lg text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Nossa metodologia inclui o mapeamento completo do ambiente atual e
            definição de escopo, seguida pelo planejamento detalhado de
            cronograma, riscos e recursos técnicos. Em seguida, realizamos a
            execução da migração e configuração com mínimo impacto operacional,
            realizamos testes, auditoria de segurança e conformidade, e
            finalizamos com suporte técnico contínuo e otimizações
            pós-implantação.
          </ClientMotion>
        </div>
      </div>
    </section>
  );
}
