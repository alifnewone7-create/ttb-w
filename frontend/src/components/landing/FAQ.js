import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Reveal, SectionHead } from "./Reveal";
import { FAQS } from "@/lib/site";

export const FAQ = () => (
  <section id="faq" className="relative py-24 sm:py-32" data-testid="faq-section">
    <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-12">
      <div className="lg:col-span-4">
        <div className="lg:sticky lg:top-32">
          <SectionHead id="faq" eyebrow="FAQ" title={<>Questions, <span className="text-gradient">answered straight.</span></>} body="Still unsure? Ask in the channel. Members and mentors reply every day." />
        </div>
      </div>
      <Reveal className="lg:col-span-8">
        <Accordion type="single" collapsible className="w-full" data-testid="faq-accordion">
          {FAQS.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-cyan-500/10 py-2" data-testid={`faq-accordion-item-${i}`}>
              <AccordionTrigger className="text-left font-display text-base sm:text-lg font-semibold text-white hover:no-underline hover:text-cyan-200 transition-colors duration-300 [&[data-state=open]]:text-cyan-200" data-testid={`faq-trigger-${i}`}>
                <span className="flex items-start gap-4">
                  <span className="font-mono text-xs text-cyan-300/70 pt-1.5">{String(i + 1).padStart(2, "0")}</span>
                  {f.q}
                </span>
              </AccordionTrigger>
              <AccordionContent className="pl-10 text-sm sm:text-base leading-relaxed text-slate-400" data-testid={`faq-content-${i}`}>
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </div>
  </section>
);
