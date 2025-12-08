"use client";
import { AnimatedSection, ClientMotion } from "@/components/client-animations";

export function ExperienceSection() {
  return (
    <section
      id="development"
      className="py-16 px-4 bg-gray-50 dark:bg-gray-900 relative"
    >
      <div className="container mx-auto max-w-6xl relative z-10">
        <AnimatedSection>
          <h2 className="text-3xl font-bold mb-8 text-center">
            Software Development
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <ClientMotion
            className="text-lg text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Na Primo Cloud, oferecemos desenvolvimento de sistemas sob medida
            para atender às necessidades específicas de cada empresa, integrando
            soluções em nuvem, segurança e produtividade. Desenvolvemos sistemas
            web e mobile para gestão de processos internos e interação com
            clientes, promovendo automação de fluxos de trabalho usando
            Microsoft Power Platform, APIs e integrações com ERP/CRM. Nossos
            sistemas são integrados a serviços de nuvem como Azure, AWS e GCP,
            garantindo escalabilidade, segurança e alta disponibilidade. Criamos
            dashboards e relatórios inteligentes para apoiar a tomada de decisão
            baseada em dados, fornecemos consultoria em arquitetura de software
            e aplicamos boas práticas de desenvolvimento seguro (Secure SDLC),
            além de oferecer suporte e manutenção contínua para assegurar
            performance e atualização tecnológica constante. Como diferenciais,
            adotamos desenvolvimento ágil (Scrum/Kanban) com entregas
            incrementais, aplicamos Cloud-Native Development para microserviços
            e containers, realizamos integração nativa com sistemas Microsoft
            365, Teams, SharePoint e Power BI, e garantimos conformidade com
            padrões de segurança e LGPD.
          </ClientMotion>

            <ClientMotion
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="h-full"
            >
            <img 
              src="/images/api.png" 
              alt="Software Development" 
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
            </ClientMotion>
        </div>
      </div>
    </section>
  );
}
