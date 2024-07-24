import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faq() {
  return (
    <section id="questions" className="w-full max-w-screen-md mx-auto scroll-mt-20" >
      <h2 className="scroll-m-20 text-4xl font-semibold tracking-tight text-center mt-10 mb-5">
      Questions & Answers
      </h2>
      <p className="text-2xl text-muted-foreground text-center">
      Screen Studio is a one-time purchase. You get all the features in every plan.
      </p>
      <Accordion type="single" collapsible className="w-full mt-20">
        <AccordionItem value="item-1" className="border-border/20">
          <AccordionTrigger className="text-lg font-semibold">Lorem ipsum dolor sit amet.</AccordionTrigger>
          <AccordionContent className="text-lg text-muted-foreground">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci repellendus quae dicta distinctio corrupti, iusto, aliquid facere officia magni, praesentium culpa vel eos placeat architecto ut. Magni ea aut ipsum.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="border-border/20">
          <AccordionTrigger className="text-lg font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing.</AccordionTrigger>
          <AccordionContent className="text-lg text-muted-foreground">
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="border-border/20">
          <AccordionTrigger className="text-lg font-semibold">Lorem ipsum dolor sit.</AccordionTrigger>
          <AccordionContent className="text-lg text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis rerum quis accusamus odio neque nobis porro maxime commodi fugit error.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4" className="border-border/20">
          <AccordionTrigger className="text-lg font-semibold">Lorem ipsum dolor sit amet.</AccordionTrigger>
          <AccordionContent className="text-lg text-muted-foreground">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci repellendus quae dicta distinctio corrupti, iusto, aliquid facere officia magni, praesentium culpa vel eos placeat architecto ut. Magni ea aut ipsum.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5" className="border-border/20">
          <AccordionTrigger className="text-lg font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing.</AccordionTrigger>
          <AccordionContent className="text-lg text-muted-foreground">
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6" className="border-border/20">
          <AccordionTrigger className="text-lg font-semibold">Lorem ipsum dolor sit.</AccordionTrigger>
          <AccordionContent className="text-lg text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis rerum quis accusamus odio neque nobis porro maxime commodi fugit error.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
