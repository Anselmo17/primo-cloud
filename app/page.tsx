import Image from "next/image";
import Link from "next/link";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ContactForm } from "@/components/contact-form";
import { Navbar } from "@/components/navbar";
import { ScrollIndicator } from "@/components/scroll-indicator";
import { SmoothScroll } from "@/components/smooth-scroll";
import {
  AnimatedSection,
  AnimatedCard,
  ParticleBackground,
  AnimatedGradientBackground,
} from "@/components/client-animations";
import { AboutSection } from "@/components/sections/about-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { EducationCertificationSection } from "@/components/sections/education-certification-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      {/* Background Effects */}
      <AnimatedGradientBackground />
      <ParticleBackground />
      <ScrollIndicator />
      <SmoothScroll />

      {/* Navigation */}
      <Navbar />
      {/* Hero Section */}
      <HeroSection />
      {/* Seção Sobre*/}
       <AboutSection />

      {/* Seção de Experiência */}
      <ExperienceSection />

      {/* Seção de Projetos */}
      <ProjectsSection/>

      {/* Seção de Habilidades */}
      <SkillsSection />

      {/* Educação e Certificações */}
      <EducationCertificationSection />

      {/* Seção de Contato */}
      <ContactSection />

      {/* Rodapé */}
      <Footer />
    </div>
  );
}
