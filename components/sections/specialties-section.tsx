"use client";
import { ChevronRight } from "lucide-react";
import { AnimatedSection } from "@/components/client-animations";

export function SpecialtiesSection() {
  return (
    <section
      id="specialties"
      className="py-16 px-4 bg-white dark:bg-gray-800 relative overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl relative z-10">
        <AnimatedSection>
          <h2 className="text-3xl font-bold mb-8 text-center">
            Principais Especialidades
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-8 w-full">
          <AnimatedSection direction="right" delay={0.4}>
            <div className="w-full">
              <ul className="space-y-2">
                <li className="flex items-start group">
                  <div className="flex-1">
                  <span className="font-semibold text-purple-600 block mb-2 text-lg">
                    Migração para Microsoft 365 (Office 365)
                  </span>
                  <ul className="space-y-1 text-gray-700 dark:text-gray-300 text-base">
                    <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-purple-600 mr-2 flex-shrink-0" />
                    <span>
                      Planejamento e execução de migrações de Exchange
                      On-Premises, Google Workspace e IMAP
                    </span>
                    </li>
                    <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-purple-600 mr-2 flex-shrink-0" />
                    <span>
                      Integração com Azure Active Directory e autenticação
                      multifator (MFA)
                    </span>
                    </li>
                    <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-purple-600 mr-2 flex-shrink-0" />
                    <span>
                      Automação de provisionamento de usuários e licenças
                    </span>
                    </li>
                    <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-purple-600 mr-2 flex-shrink-0" />
                    <span>Monitoramento de performance pós-migração</span>
                    </li>
                    <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-purple-600 mr-2 flex-shrink-0" />
                    <span>Treinamento e onboarding de usuários finais</span>
                    </li>
                  </ul>
                  </div>
                </li>

                <li className="flex items-start group">
                  <div className="flex-1">
                  <span className="font-semibold text-purple-600 block mb-2 text-lg">
                    Segurança e Conformidade - Microsoft Defender
                  </span>
                  <ul className="space-y-1 text-gray-700 dark:text-gray-300 text-base">
                    <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-purple-600 mr-2 flex-shrink-0" />
                    <span>
                      Implementação e configuração do Microsoft Defender for
                      Endpoint, Identity, Cloud Apps e Office 365.
                    </span>
                    </li>
                    <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-purple-600 mr-2 flex-shrink-0" />
                    <span>
                      Políticas de proteção de identidade, dispositivos e
                      dados sensíveis (DLP).
                    </span>
                    </li>
                    <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-purple-600 mr-2 flex-shrink-0" />
                    <span>
                      Monitoramento contínuo de ameaças (SIEM/SOAR).
                    </span>
                    </li>
                    <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-purple-600 mr-2 flex-shrink-0" />
                    <span>
                      Relatórios e dashboards de segurança em tempo real.
                    </span>
                    </li>
                  </ul>
                  </div>
                </li>

                <li className="flex items-start group">
                  <div className="flex-1">
                  <span className="font-semibold text-purple-600 block mb-2 text-lg">
                    Migração para Microsoft 365 (Office 365)
                  </span>
                  <ul className="space-y-1 text-gray-700 dark:text-gray-300 text-base">
                    <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-purple-600 mr-2 flex-shrink-0" />
                    <span>
                      Planejamento e execução de migrações de Exchange
                      On-Premises, Google Workspace e IMAP
                    </span>
                    </li>
                    <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-purple-600 mr-2 flex-shrink-0" />
                    <span>
                      Integração com Azure Active Directory e autenticação
                      multifator (MFA)
                    </span>
                    </li>
                    <li className="flex items-start">
                     <ChevronRight className="w-4 h-4 text-purple-600 mr-2 flex-shrink-0" />
                    <span>
                      Automação de provisionamento de usuários e licenças
                    </span>
                    </li>
                    <li className="flex items-start">
                     <ChevronRight className="w-4 h-4 text-purple-600 mr-2 flex-shrink-0" />
                    <span>Monitoramento de performance pós-migração</span>
                    </li>
                    <li className="flex items-start">
                     <ChevronRight className="w-4 h-4 text-purple-600 mr-2 flex-shrink-0" />
                    <span>Treinamento e onboarding de usuários finais</span>
                    </li>
                  </ul>
                  </div>
                </li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
