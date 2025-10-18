"use client";

import Image from "next/image";
import { AnimatedCard, AnimatedSection } from "@/components/client-animations";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "../ui/button";


export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-16 px-4 bg-white dark:bg-gray-800 relative"
    >
      <div className="container mx-auto max-w-6xl relative z-10">
        <AnimatedSection>
          <h2 className="text-3xl font-bold mb-8 text-center">
            Projetos em Destaque
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatedCard delay={0.2}>
            <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle>EarthRenewal AI Farmer Assistant Chatbot</CardTitle>
                <CardDescription>
                  Assistente agrícola impulsionado por IA
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video relative rounded-md overflow-hidden mb-4 bg-gray-100 dark:bg-gray-700 transform transition-transform duration-500 hover:scale-[1.02]">
                  <Image
                    src="/placeholder.svg?height=240&width=400"
                    alt="EarthRenewal AI"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-blue-600/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Desenvolvi um chatbot impulsionado por IA para auxiliar
                  agricultores com recomendações agrícolas, integrando suporte
                  multilíngue e resolução de consultas em tempo real.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge
                    variant="outline"
                    className="bg-purple-100/50 dark:bg-purple-900/50 hover:bg-purple-200 transition-colors duration-300"
                  >
                    PLN
                  </Badge>
                  <Badge
                    variant="outline"
                    className="bg-purple-100/50 dark:bg-purple-900/50 hover:bg-purple-200 transition-colors duration-300"
                  >
                    LLM
                  </Badge>
                  <Badge
                    variant="outline"
                    className="bg-purple-100/50 dark:bg-purple-900/50 hover:bg-purple-200 transition-colors duration-300"
                  >
                    Python
                  </Badge>
                  <Badge
                    variant="outline"
                    className="bg-purple-100/50 dark:bg-purple-900/50 hover:bg-purple-200 transition-colors duration-300"
                  >
                    Multilíngue
                  </Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  className="w-full relative overflow-hidden group"
                  disabled
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  <span className="relative z-10">Ver projeto</span>
                  <span className="absolute inset-0 bg-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                </Button>
              </CardFooter>
            </Card>
          </AnimatedCard>

          <AnimatedCard delay={0.3}>
            <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle>Authentrix - Verificação de Perfil</CardTitle>
                <CardDescription>
                  Sistema de pontuação de confiança baseado em IA
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video relative rounded-md overflow-hidden mb-4 bg-gray-100 dark:bg-gray-700 transform transition-transform duration-500 hover:scale-[1.02]">
                  <Image
                    src="/placeholder.svg?height=240&width=400"
                    alt="Authentrix"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-blue-600/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Desenvolvi um sistema de pontuação de confiança baseado em IA
                  para verificação de perfis de usuários, incorporando pipelines
                  CI/CD e monitoramento de modelos para implantação.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge
                    variant="outline"
                    className="bg-purple-100/50 dark:bg-purple-900/50 hover:bg-purple-200 transition-colors duration-300"
                  >
                    Aprendizado de Máquina
                  </Badge>
                  <Badge
                    variant="outline"
                    className="bg-purple-100/50 dark:bg-purple-900/50 hover:bg-purple-200 transition-colors duration-300"
                  >
                    CI/CD
                  </Badge>
                  <Badge
                    variant="outline"
                    className="bg-purple-100/50 dark:bg-purple-900/50 hover:bg-purple-200 transition-colors duration-300"
                  >
                    Monitoramento de Modelos
                  </Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  className="w-full relative overflow-hidden group"
                  disabled
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  <span className="relative z-10">Ver projeto</span>
                  <span className="absolute inset-0 bg-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                </Button>
              </CardFooter>
            </Card>
          </AnimatedCard>

          <AnimatedCard delay={0.4}>
            <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle>Predição de Churn Bancário</CardTitle>
                <CardDescription>
                  Modelo de classificação para retenção de clientes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video relative rounded-md overflow-hidden mb-4 bg-gray-100 dark:bg-gray-700 transform transition-transform duration-500 hover:scale-[1.02]">
                  <Image
                    src="/placeholder.svg?height=240&width=400"
                    alt="Predição de Churn"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-blue-600/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Desenvolvi um modelo de classificação para prever churn de
                  clientes usando Random Forest, Regressão Logística, SVM e
                  LightGBM, alcançando 90% de precisão.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge
                    variant="outline"
                    className="bg-purple-100/50 dark:bg-purple-900/50 hover:bg-purple-200 transition-colors duration-300"
                  >
                    Random Forest
                  </Badge>
                  <Badge
                    variant="outline"
                    className="bg-purple-100/50 dark:bg-purple-900/50 hover:bg-purple-200 transition-colors duration-300"
                  >
                    SVM
                  </Badge>
                  <Badge
                    variant="outline"
                    className="bg-purple-100/50 dark:bg-purple-900/50 hover:bg-purple-200 transition-colors duration-300"
                  >
                    LightGBM
                  </Badge>
                  <Badge
                    variant="outline"
                    className="bg-purple-100/50 dark:bg-purple-900/50 hover:bg-purple-200 transition-colors duration-300"
                  >
                    Classificação
                  </Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  className="w-full relative overflow-hidden group"
                  disabled
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  <span className="relative z-10">Ver projeto</span>
                  <span className="absolute inset-0 bg-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                </Button>
              </CardFooter>
            </Card>
          </AnimatedCard>

          <AnimatedCard delay={0.5}>
            <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle>Fastly</CardTitle>
                <CardDescription>
                  Chatbot para admissões universitárias
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video relative rounded-md overflow-hidden mb-4 bg-gray-100 dark:bg-gray-700 transform transition-transform duration-500 hover:scale-[1.02]">
                  <Image
                    src="/placeholder.svg?height=240&width=400"
                    alt="Chatbot Fastly"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-blue-600/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Projetei um chatbot para consultas de admissões universitárias
                  usando PLN e LSTM, fornecendo assistência automatizada para
                  estudantes em potencial.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge
                    variant="outline"
                    className="bg-purple-100/50 dark:bg-purple-900/50 hover:bg-purple-200 transition-colors duration-300"
                  >
                    PLN
                  </Badge>
                  <Badge
                    variant="outline"
                    className="bg-purple-100/50 dark:bg-purple-900/50 hover:bg-purple-200 transition-colors duration-300"
                  >
                    LSTM
                  </Badge>
                  <Badge
                    variant="outline"
                    className="bg-purple-100/50 dark:bg-purple-900/50 hover:bg-purple-200 transition-colors duration-300"
                  >
                    Chatbot
                  </Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  className="w-full relative overflow-hidden group"
                  disabled
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  <span className="relative z-10">Ver projeto</span>
                  <span className="absolute inset-0 bg-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                </Button>
              </CardFooter>
            </Card>
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
}
