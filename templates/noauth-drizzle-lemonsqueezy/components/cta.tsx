import Image from "next/image";
import Stripes from "@/public/images/stripes-dark.svg";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

export default function CTA() {
  return (
    <section>
      <div className="mx-auto max-w-6xl py-24 px-8">
        <div
          className="relative overflow-hidden rounded-2xl text-center shadow-xl before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:bg-gray-900"
          data-aos="zoom-y-out"
        >
          {/* Glow */}
          <div
            className="absolute bottom-0 left-1/2 -z-10 -translate-x-1/2 translate-y-1/2"
            aria-hidden="true"
          >
            <div className="h-56 w-[480px] rounded-full border-[20px] border-blue-500 blur-3xl" />
          </div>

          <div className="px-4 py-12 md:px-12 md:py-20">
            <h2 className="mb-6 border-y text-3xl font-bold text-gray-200 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.700/.7),transparent)1] md:mb-12 md:text-4xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              reiciendis.{" "}
            </h2>

            <Link
              className={cn(
                buttonVariants({
                  size: "lg",
                  className: "mt-5",
                  variant: "cta",
                }),
                "text-base"
              )}
              href={"/dashboard"}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
