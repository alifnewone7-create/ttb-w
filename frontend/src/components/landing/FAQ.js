import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Reveal, SectionHead } from "./Reveal";
import { FAQS } from "@/lib/site";

export const FAQ = () => (
  <section id="faq" className="relative py-24 sm:py-28 lg:py-[112px]" data-testid="faq-section">
    <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-12">
      <div className="lg:col-span-4">
        <div className="lg:sticky lg:top-32">
          <SectionHead
            id="faq"
            eyebrow="FAQ"
            title={<>Questions, answered straight</>}
            body="Still unsure? Ask in the channel. Members and mentors reply every day."
          />
        </div>
      </div>
      <Reveal className="lg:col-span-8">
        <Accordion type="single" collapsible className="w-full flex flex-col gap-3" data-testid="faq-accordion">
          {FAQS.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="card-chrome border-0 px-5 sm:px-6"
              data-testid={`faq-accordion-item-${i}`}
            >
              <AccordionTrigger
                className="py-5 text-left font-display text-base sm:text-lg font-extrabold text-white hover:no-underline"
                data-testid={`faq-trigger-${i}`}
              >
                <span className="flex items-start gap-4 pr-2">
                  <span className="text-sm font-semibold text-[#8891f2] pt-1">{String(i + 1).padStart(2, "0")}</span>
                  {f.q}
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-6 pl-10 text-[15px] sm:text-base leading-relaxed fog" data-testid={`faq-content-${i}`}>
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </div>
  </section>
);
