"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Download,
  ArrowDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection, AnimatedText, ClientMotion } from "@/components/client-animations";
import { Badge } from "../ui/badge";

export function EducationCertificationSection() {
  return (
    <section
      id="education"
      className="py-16 px-4 bg-white dark:bg-gray-800 relative"
    >
      <div className="container mx-auto max-w-6xl relative z-10">
        <AnimatedSection>
          <h2 className="text-3xl font-bold mb-8 text-center">
            Educação e Certificações
          </h2>
        </AnimatedSection>

        <div className="mb-12">
          <AnimatedSection direction="left" delay={0.2}>
            <h3 className="text-2xl font-bold mb-6">Educação</h3>
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1 transition-transform duration-300">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div>
                  <h4 className="text-xl font-semibold">
                    Bacharelado em Inteligência Artificial
                  </h4>
                  <p className="text-purple-600 dark:text-purple-400">
                    Universidade Nacional de Ciências da Computação e Ciências
                    Emergentes FAST Karachi
                  </p>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                  2025
                </p>
              </div>
              <div>
                <h5 className="font-medium mb-2">Disciplinas Relevantes:</h5>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="animate-pulse">
                    Design e Análise de Algoritmos
                  </Badge>
                  <Badge variant="secondary">
                    Programação Orientada a Objetos
                  </Badge>
                  <Badge variant="secondary" className="animate-pulse">
                    Álgebra Linear
                  </Badge>
                  <Badge variant="secondary">Probabilidade e Estatística</Badge>
                  <Badge variant="secondary" className="animate-pulse">
                    Aprendizado de Máquina
                  </Badge>
                  <Badge variant="secondary">Redes Neurais Artificiais</Badge>
                  <Badge variant="secondary" className="animate-pulse">
                    Sistemas de Banco de Dados
                  </Badge>
                  <Badge variant="secondary">Recuperação de Informação</Badge>
                  <Badge variant="secondary">
                    Fundamentos de Engenharia de Software
                  </Badge>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <div>
          <AnimatedSection direction="right" delay={0.3}>
            <h3 className="text-2xl font-bold mb-6">Certificações e Prêmios</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1 transition-transform duration-300">
                <h4 className="font-semibold">
                  Conceitos de Modelos de Linguagem de Grande Escala - DataCamp
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Fundamentos de LLMs, Aprendizado Zero, Poucos e Múltiplos
                  Exemplos
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1 transition-transform duration-300">
                <h4 className="font-semibold">
                  Aprendizado de Máquina Supervisionado - DataCamp
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Classificação, regressão, tipos de erro, métricas de avaliação
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1 transition-transform duration-300">
                <h4 className="font-semibold">Ciência de Dados - DataCamp</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Pandas, numpy, aprendizado de máquina, bibliotecas Python
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1 transition-transform duration-300">
                <h4 className="font-semibold">
                  Análise Exploratória de Dados - GoodLearnings
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Visualização perspicaz, estatísticas, consultas estatísticas
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 md:col-span-2 shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1 transition-transform duration-300">
                <h4 className="font-semibold">
                  Vencedor da Competição de ML - ACM-AI
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Conquistou a vitória em uma competição de aprendizado de
                  máquina
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
