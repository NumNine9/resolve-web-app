// import { Link } from "@heroui/link";
// import { Snippet } from "@heroui/snippet";
// import { Code } from "@heroui/code";
// import { button as buttonStyles } from "@heroui/theme";

// import { siteConfig } from "@/config/site";
// import { title, subtitle } from "@/components/primitives";
// import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import { Image } from "@heroui/react";
// import { Link } from "lucide-react";
import { Button } from "@heroui/button";
export default function IndexPage() {
  const categories = [
    { title: "SCHOOLS", href: "/schools" },
    { title: "LIBARY", href: "/library" },
    { title: "RENTALS", href: "/rentals" },
    { title: "MARKET PLACE", href: "/marketplace" },
  ]
  return (
    <DefaultLayout>
      {/* <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-xl text-center justify-center">
          <span className={title()}>Make&nbsp;</span>
          <span className={title({ color: "violet" })}>beautiful&nbsp;</span>
          <br />
          <span className={title()}>
            websites regardless of your design experience.
          </span>
          <div className={subtitle({ class: "mt-4" })}>
            Beautiful, fast and modern React UI library.
          </div>
        </div>

        <div className="flex gap-3">
          <Link
            isExternal
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href={siteConfig.links.docs}
          >
            Documentation
          </Link>
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}
          >
            <GithubIcon size={20} />
            GitHub
          </Link>
        </div>

        <div className="mt-8">
          <Snippet hideCopyButton hideSymbol variant="bordered">
            <span>
              Get started by editing{" "}
              <Code color="primary">pages/index.tsx</Code>
            </span>
          </Snippet>
        </div>
      </section> */}
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 bg-[#0A1257]">
        {/* <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Pricing</h1>

          
        </div> */}
        <main className="min-h-screen bg-[#0A1257]">
          <div className="container mx-auto px-4 py-8">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Column */}
          <div className="relative space-y-6">
            <div className="relative h-64 w-full overflow-hidden rounded-lg sm:h-80">
              <Image
                alt="HeroUI hero Image"
                src="https://media.istockphoto.com/id/1334063560/photo/african-americans-college-students-e-leaning-with-their-teacher-during-a-class.jpg?s=612x612&w=0&k=20&c=6ADofCPEBlGPK1MFGM44sfdCe9sjMzzzzK0MkZTcLw8="
                width={500}
              />
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">MAKING EDUCATION EASY</h1>
            <div className="relative">
              <p className="text-xl text-white">GET STARTED WITH US</p>
              {/* <ArrowDown className="absolute -bottom-12 left-32 h-16 w-16 rotate-45 text-white" /> */}
            </div>
            <div className="pt-12">
              <Button
                className="rounded-full bg-[#FDB813] px-8 py-6 text-lg font-semibold text-white hover:bg-[#FDB813]/90"
              >
                JOIN NOW!
              </Button>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold tracking-widest text-white">CATEGORIES:</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {categories.map((category) => (
                <div
                  key={category.title}
                  // href={category.href}
                  className="block rounded-3xl bg-white p-8 text-center text-lg font-semibold text-[#0A1257] transition-transform hover:scale-105"
                >
                  {category.title}
                </div>
              ))}
            </div>
          </div>
            </div>
          </div>
        </main>
      </section>
    </DefaultLayout>
  );
}
