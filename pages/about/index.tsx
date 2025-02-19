import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>About</h1>
          
          <h2>RESOLVE is an easy-to-use software, which assists schools, students, parents, authors, real estate individuals, shops
          and more in creating a better and easy way to get the best education ever. It makes it a cinch to the educational
          system that work well, look great, and load quickly into HTML, CSS, and JavaScript. RESOLVE is the perfect software
          for making education easy
          </h2>
        </div>
      </section>
    </DefaultLayout>
  );
}
