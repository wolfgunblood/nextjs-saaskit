// Testimonial.js

import React from 'react';

const testimonials = [
  {
    quote: "The product is amazing! It has saved me so much time and effort. Highly recommended.",
    name: "Jane Doe",
    title: "CEO, Acme Inc.",
    imgSrc: "/placeholder.svg",
  },
  {
    quote: "I was hesitant at first, but this product has exceeded all my expectations. It's a game-changer!",
    name: "John Smith",
    title: "Product Manager, Acme Inc.",
    imgSrc: "/placeholder.svg",
  },
  {
    quote: "I'm amazed by the level of customer support. They went above and beyond to ensure I was satisfied.",
    name: "Sarah Johnson",
    title: "Marketing Manager, Acme Inc.",
    imgSrc: "/placeholder.svg",
  },
  {
    quote: "This product has transformed the way we work. It's a game-changer for our business.",
    name: "Michael Brown",
    title: "CTO, Acme Inc.",
    imgSrc: "/placeholder.svg",
  },
];

export default function TestimonialSecond() {
  return (
    <section className="bg-background py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What Our Customers Say</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col justify-between rounded-lg bg-muted p-6 shadow-sm">
              <blockquote className="text-lg font-medium leading-relaxed text-muted-foreground">
                {testimonial.quote}
              </blockquote>
              <div className="mt-4 flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img
                    src={testimonial.imgSrc}
                    alt={`Avatar of ${testimonial.name}`}
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-full"
                  />
                </div>
                <div>
                  <div className="text-base font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
