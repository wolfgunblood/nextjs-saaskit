import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string;
  popular: PopularPlanType;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const pricingList: PricingProps[] = [
  {
    title: "Starter",
    popular: 0,
    price: 0,
    description: "An ideal way to get started with our basic features at no cost.",
    buttonText: "Get Started for Free",
    benefitList: [
      "1 Team member",
      "2 GB of secure storage",
      "Create up to 4 pages",
      "Community support forums",
      "Access to basic templates",
    ],
  },
  {
    title: "Pro",
    popular: 1,
    price: 0,
    description: "For professionals looking to maximize productivity with more features.",
    buttonText: "Start 14-Day Trial",
    benefitList: [
      "5 Team members",
      "10 GB of enhanced storage",
      "Create up to 10 pages",
      "24/7 priority email support",
      "Access to premium templates",
    ],
  },
  {
    title: "Business",
    popular: 0,
    price: 0,
    description: "Comprehensive solution for businesses to scale and collaborate efficiently.",
    buttonText: "Contact Us for Details",
    benefitList: [
      "Unlimited team members",
      "50 GB of advanced storage",
      "Create unlimited pages",
      "Dedicated account manager",
      "Custom integrations and support",
    ],
  },
];


export const Pricing = () => {
  return (
    <section id="pricing" className="container py-24 sm:py-32 ">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Get
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Unlimited{" "}
        </span>
        Access
      </h2>
      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
        reiciendis.
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingList.map((pricing: PricingProps) => (
          <Card
            key={pricing.title}
            className={
              pricing.popular === PopularPlanType.YES
                ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10"
                : ""
            }
          >
            <CardHeader>
              <CardTitle className="flex item-center justify-between">
                {pricing.title}
                {pricing.popular === PopularPlanType.YES ? (
                  <Badge variant="secondary" className="text-sm text-primary">
                    Most popular
                  </Badge>
                ) : null}
              </CardTitle>
              <div>
                <span className="text-3xl font-bold">${pricing.price}</span>
                <span className="text-muted-foreground"> /month</span>
              </div>

              <CardDescription>{pricing.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <Button className="w-full">{pricing.buttonText}</Button>
            </CardContent>

            <hr className="w-4/5 m-auto mb-4" />

            <CardFooter className="flex">
              <div className="space-y-4">
                {pricing.benefitList.map((benefit: string) => (
                  <span key={benefit} className="flex">
                    <Check className="text-green-500" />{" "}
                    <h3 className="ml-2">{benefit}</h3>
                  </span>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
