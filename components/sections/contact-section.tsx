"use client";

import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { AnimatedSection } from "@/components/client-animations";
import { ContactForm } from "../contact-form";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-16 px-4 bg-gray-50 dark:bg-gray-900 relative"
    >
      <div className="container mx-auto max-w-6xl relative z-10">
        <AnimatedSection>
          <h2 className="text-3xl font-bold mb-8 text-center">
            Entre em contato
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatedSection direction="left" delay={0.2}>
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Informações de Contato</h3>
              <div className="space-y-4">
                <div className="flex items-center hover:translate-x-1 transition-transform duration-300">
                  <Mail className="w-5 h-5 text-purple-600 mr-3" />
                  <a
                    href="mailto:ansinftec17@gmail.com"
                    className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    ansinftec17@gmail.com
                  </a>
                </div>
                <div className="flex items-center hover:translate-x-1 transition-transform duration-300">
                  <Linkedin className="w-5 h-5 text-purple-600 mr-3" />
                  <a
                    href="https://www.linkedin.com/in/anselmo-nascimento-80783a145/"
                    target="_blank"
                    className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    rel="noreferrer"
                  >
                    Perfil no LinkedIn
                  </a>
                </div>
                <div className="flex items-center hover:translate-x-1 transition-transform duration-300">
                  <Github className="w-5 h-5 text-purple-600 mr-3" />
                  <a
                    href="https://github.com/Anselmo17"
                    target="_blank"
                    className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    rel="noreferrer"
                  >
                    Perfil no GitHub
                  </a>
                </div>
              </div>
              <div className="pt-4">
                <p className="text-gray-700 dark:text-gray-300">
                  Estou sempre aberto a discutir novos projetos, oportunidades
                  ou parcerias. Sinta-se à vontade para entrar em contato!
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.3}>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <ContactForm />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
