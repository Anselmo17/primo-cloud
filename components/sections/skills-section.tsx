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
import {
  AnimatedSection,
  AnimatedText,
  ClientMotion,
} from "@/components/client-animations";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-16 px-4 bg-gray-50 dark:bg-gray-900 relative"
    >
      <div className="container mx-auto max-w-6xl relative z-10">
        <AnimatedSection>
          <h2 className="text-3xl font-bold mb-8 text-center">
            Habilidades Técnicas
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <AnimatedSection direction="up" delay={0.2}>
            <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mr-2">
                    <span className="text-purple-600 dark:text-purple-300 text-sm font-bold">
                      IA
                    </span>
                  </span>
                  IA & Aprendizado de Máquina
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  <Badge
                    variant="secondary"
                    className="justify-center py-2 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors"
                  >
                    Aprendizado de Máquina
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="justify-center py-2 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors"
                  >
                    Aprendizado Profundo
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="justify-center py-2 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors"
                  >
                    Redes Neurais
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="justify-center py-2 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors"
                  >
                    Visão Computacional
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="justify-center py-2 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors"
                  >
                    PLN
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="justify-center py-2 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors"
                  >
                    Ajuste Fino de Modelos
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="justify-center py-2 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors"
                  >
                    Engenharia de Recursos
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="justify-center py-2 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors"
                  >
                    Modelos Pré-treinados
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.3}>
            <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-2">
                    <span className="text-blue-600 dark:text-blue-300 text-sm font-bold">
                      DEV
                    </span>
                  </span>
                  Programação & Frameworks
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  <Badge
                    variant="secondary"
                    className="justify-center py-2 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                  >
                    Python
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="justify-center py-2 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                  >
                    TensorFlow
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="justify-center py-2 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                  >
                    PyTorch
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="justify-center py-2 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                  >
                    Scikit-learn
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="justify-center py-2 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                  >
                    OpenCV
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="justify-center py-2 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                  >
                    Flask/FastAPI
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="justify-center py-2 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                  >
                    Java
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="justify-center py-2 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                  >
                    C++/C
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatedSection direction="up" delay={0.4}>
            <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mr-2">
                    <span className="text-green-600 dark:text-green-300 text-sm font-bold">
                      DADOS
                    </span>
                  </span>
                  Ciência de Dados & Análise
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  <Badge
                    variant="secondary"
                    className="justify-center py-2 hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors"
                  >
                    Análise de Dados
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="justify-center py-2 hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors"
                  >
                    Pandas & NumPy
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="justify-center py-2 hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors"
                  >
                    Visualização de Dados
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="justify-center py-2 hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors"
                  >
                    Análise Estatística
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="justify-center py-2 hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors"
                  >
                    SQL
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="justify-center py-2 hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors"
                  >
                    Jupyter Notebooks
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="justify-center py-2 hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors"
                  >
                    Matplotlib/Seaborn
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="justify-center py-2 hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors"
                  >
                    Pré-processamento de Dados
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.5}>
            <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span className="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center mr-2">
                    <span className="text-orange-600 dark:text-orange-300 text-sm font-bold">
                      OPS
                    </span>
                  </span>
                  MLOps & Integração
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  <Badge
                    variant="secondary"
                    className="justify-center py-2 hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors"
                  >
                    Implantação de Modelos
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="justify-center py-2 hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors"
                  >
                    Integração de APIs
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="justify-center py-2 hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors"
                  >
                    APIs de LLM
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="justify-center py-2 hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors"
                  >
                    Pipelines CI/CD
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="justify-center py-2 hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors"
                  >
                    Monitoramento de Modelos
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="justify-center py-2 hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors"
                  >
                    Docker
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="justify-center py-2 hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors"
                  >
                    Git/GitHub
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="justify-center py-2 hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors"
                  >
                    Plataformas de Nuvem
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>

        {/* Tecnologias Adicionais */}
        <AnimatedSection delay={0.6}>
          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold mb-6">
              Tecnologias Adicionais
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge
                variant="outline"
                className="px-4 py-2 text-sm bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors"
              >
                Hugging Face
              </Badge>
              <Badge
                variant="outline"
                className="px-4 py-2 text-sm bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors"
              >
                Transformers
              </Badge>
              <Badge
                variant="outline"
                className="px-4 py-2 text-sm bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-900/40 transition-colors"
              >
                NLTK
              </Badge>
              <Badge
                variant="outline"
                className="px-4 py-2 text-sm bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800 hover:bg-yellow-100 dark:hover:bg-yellow-900/40 transition-colors"
              >
                spaCy
              </Badge>
              <Badge
                variant="outline"
                className="px-4 py-2 text-sm bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 hover:bg-red-100 dark:hover:bg-red-900/40 transition-colors"
              >
                Streamlit
              </Badge>
              <Badge
                variant="outline"
                className="px-4 py-2 text-sm bg-indigo-50 dark:bg-indigo-900/20 border-indigo-200 dark:border-indigo-800 hover:bg-indigo-100 dark:hover:bg-indigo-900/40 transition-colors"
              >
                Gradio
              </Badge>
              <Badge
                variant="outline"
                className="px-4 py-2 text-sm bg-pink-50 dark:bg-pink-900/20 border-pink-200 dark:border-pink-800 hover:bg-pink-100 dark:hover:bg-pink-900/40 transition-colors"
              >
                Whisper
              </Badge>
              <Badge
                variant="outline"
                className="px-4 py-2 text-sm bg-teal-50 dark:bg-teal-900/20 border-teal-200 dark:border-teal-800 hover:bg-teal-100 dark:hover:bg-teal-900/40 transition-colors"
              >
                LangChain
              </Badge>
              <Badge
                variant="outline"
                className="px-4 py-2 text-sm bg-cyan-50 dark:bg-cyan-900/20 border-cyan-200 dark:border-cyan-800 hover:bg-cyan-100 dark:hover:bg-cyan-900/40 transition-colors"
              >
                MongoDB
              </Badge>
              <Badge
                variant="outline"
                className="px-4 py-2 text-sm bg-violet-50 dark:bg-violet-900/20 border-violet-200 dark:border-violet-800 hover:bg-violet-100 dark:hover:bg-violet-900/40 transition-colors"
              >
                PostgreSQL
              </Badge>
              <Badge
                variant="outline"
                className="px-4 py-2 text-sm bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800 hover:bg-emerald-100 dark:hover:bg-emerald-900/40 transition-colors"
              >
                REST APIs
              </Badge>
              <Badge
                variant="outline"
                className="px-4 py-2 text-sm bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800 hover:bg-amber-100 dark:hover:bg-amber-900/40 transition-colors"
              >
                Postman
              </Badge>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
