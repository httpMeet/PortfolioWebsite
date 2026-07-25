"use client";

import React from "react";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { CTAButton } from "@/components/ui/cta-button";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/site";
import { Mail, FileText, Github, Linkedin, MessageSquare, ArrowUpRight } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="relative py-12 sm:py-20 border-t border-white/10">
      {/* Background Visual Accent */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none w-full">
        <div className="absolute bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 w-[260px] sm:w-[500px] h-[260px] sm:h-[500px] bg-rose-600/10 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:3rem_3rem] sm:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <Container size="lg" className="w-full">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0.9, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-mono text-rose-400 backdrop-blur-sm"
          >
            <MessageSquare className="w-3.5 h-3.5 text-rose-500" />
            <span>Get in Touch</span>
          </motion.div>

          {/* Understated CTA Heading */}
          <motion.div
            initial={{ opacity: 0.9, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.05 }}
            className="space-y-3"
          >
            <Heading as="h2" size="h2" className="text-slate-100 font-bold tracking-tight text-2xl sm:text-4xl">
              Let&apos;s build something reliable.
            </Heading>

            <Paragraph size="lead" className="text-slate-300 text-xs sm:text-base max-w-xl mx-auto leading-relaxed">
              I am open to full-time Backend Developer opportunities, software engineering roles, and system architecture discussions. Reach out directly via email or connect on GitHub and LinkedIn.
            </Paragraph>
          </motion.div>

          {/* Direct Action Buttons */}
          <motion.div
            initial={{ opacity: 0.9, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 pt-4 w-full"
          >
            <CTAButton
              href={`mailto:${siteConfig.links.email}`}
              variant="laravel"
              icon={<Mail className="w-4 h-4 text-white" />}
              className="shadow-lg shadow-rose-950/50 hover:shadow-rose-900/60 font-semibold"
            >
              gandhimeet1104@gmail.com
            </CTAButton>

            <CTAButton
              href={siteConfig.links.resume}
              variant="primary"
              external
              icon={<FileText className="w-4 h-4 text-slate-900" />}
            >
              Download Resume
            </CTAButton>

            <CTAButton
              href={siteConfig.links.github}
              variant="secondary"
              external
              icon={<Github className="w-4 h-4 text-slate-400" />}
            >
              View GitHub
            </CTAButton>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
