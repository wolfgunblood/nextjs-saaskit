import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
    {
      question: "Is this template free?",
      answer: "Yes, it is a free ShadcnUI template that you can use for both personal and commercial projects.",
      value: "item-1",
    },
    {
      question: "What can I customize in this template?",
      answer: "You can customize colors, fonts, and layout components to fit your branding and design requirements. The template is designed to be flexible and easy to adapt.",
      value: "item-2",
    },
    {
      question: "Does this template support responsive design?",
      answer: "Yes, the template is built with responsive design principles in mind, ensuring that your website will look great on all devices, from phones to desktops.",
      value: "item-3",
    },
    {
      question: "Are there any tutorials available for this template?",
      answer: "Yes, we provide comprehensive documentation and step-by-step tutorials to help you get started and make the most of the template’s features.",
      value: "item-4",
    },
    {
      question: "Can I use this template for multiple projects?",
      answer: "Yes, once you download the template, you are free to use it for multiple projects, making it an excellent choice for developers and agencies.",
      value: "item-5",
    },
    {
      question: "Does this project utilize Magic UI components?",
      answer: "Yes, our template integrates Magic UI components to provide enhanced UI capabilities and a seamless user experience.",
      value: "item-6",
    },
    {
      question: "Is MongoDB used for data management in this template?",
      answer: "Yes, our template is configured to work seamlessly with MongoDB, allowing for efficient data management and scalability.",
      value: "item-7",
    },
    {
      question: "Are you planning to integrate Supabase in the future?",
      answer: "Not yet, but we are considering integrating Supabase to enhance our backend capabilities and provide additional features like real-time data.",
      value: "item-8",
    },
    {
      question: "What authentication solutions are supported?",
      answer: "Our template supports stack-auth open source authentication platform",
      value: "item-9",
    }
  ];
  

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32 "
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Still have questions?{" "}
        <a
          rel="noreferrer noopener"
          href="#"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact us
        </a>
      </h3>
    </section>
  );
};
