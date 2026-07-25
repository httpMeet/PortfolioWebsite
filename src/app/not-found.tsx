import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { CTAButton } from "@/components/ui/cta-button";
import { ArrowLeft, FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col justify-center py-20">
      <Container size="md" className="text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-rose-400">
          <FileQuestion className="w-4 h-4 text-rose-500" />
          <span>404 — Page Not Found</span>
        </div>

        <Heading as="h1" size="h1" className="text-slate-100 font-bold text-3xl sm:text-5xl">
          Requested Case Study Does Not Exist
        </Heading>

        <Paragraph size="lead" className="text-slate-400 text-sm sm:text-base max-w-md mx-auto">
          The project or engineering case study route you requested could not be located in our portfolio directory.
        </Paragraph>

        <div className="pt-4 flex justify-center">
          <CTAButton href="/" variant="laravel" icon={<ArrowLeft className="w-4 h-4 text-white" />}>
            Return to Homepage
          </CTAButton>
        </div>
      </Container>
    </div>
  );
}
