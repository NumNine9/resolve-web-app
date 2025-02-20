import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Building, BookOpen, Home, Store } from "lucide-react"

export default function DocsPage() {
  const stats = [
    {
      icon: <Building className="h-10 w-10 text-gray-600" />,
      value: "5000",
      label: "Schools",
      sublabel: "Institution",
    },
    {
      icon: <BookOpen className="h-10 w-10 text-gray-600" />,
      value: "8,00,000",
      label: "Library",
      sublabel: "Books",
    },
    {
      icon: <Home className="h-10 w-10 text-gray-600" />,
      value: "60,000",
      label: "Rentals",
      sublabel: "Properties",
    },
    {
      icon: <Store className="h-10 w-10 text-gray-600" />,
      value: "92,000",
      label: "Market Place",
      sublabel: "Active Users",
    },
  ]

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <div className="mt-5 mb-5">
            <h1 className={title()}>About</h1>
          </div>
          
          
          <h2>RESOLVE is an easy-to-use software, which assists schools, students, parents, authors, real estate individuals, shops
          and more in creating a better and easy way to get the best education ever. It makes it a cinch to the educational
          system that work well, look great, and load quickly into HTML, CSS, and JavaScript. RESOLVE is the perfect software
          for making education easy
          </h2>
          {/* <div className="flex flex-col items-center space-y-2">
            <div className="relative">
              <div className="absolute inset-0 rounded-full border-4 border-cyan-200"></div>
              <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full bg-pink-50">icon</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold tracking-tight">value</div>
              <div className="text-sm text-gray-600">label</div>
              <div className="text-xs text-gray-500">sublabel</div>
            </div>
          </div> */}
          <div className="w-full px-4 py-12">
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <StatItem key={index} {...stat} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
interface StatItemProps {
  icon: React.ReactNode
  value: string
  label: string
  sublabel: string
}
function StatItem({ icon, value, label, sublabel }: StatItemProps) {
  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="relative">
        <div className="absolute inset-0 rounded-full border-4 border-cyan-200"></div>
        <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full bg-pink-50">{icon}</div>
      </div>
      <div className="text-center">
        <div className="text-3xl font-bold tracking-tight">{value}</div>
        <div className="text-sm text-gray-600">{label}</div>
        <div className="text-xs text-gray-500">{sublabel}</div>
      </div>
    </div>
  )
}
export function StatsDisplay() {
  const stats = [
    {
      icon: <Building className="h-10 w-10 text-gray-600" />,
      value: "5000",
      label: "Schools",
      sublabel: "Institution",
    },
    {
      icon: <BookOpen className="h-10 w-10 text-gray-600" />,
      value: "8,00,000",
      label: "Library",
      sublabel: "Books",
    },
    {
      icon: <Home className="h-10 w-10 text-gray-600" />,
      value: "60,000",
      label: "Rentals",
      sublabel: "Properties",
    },
    {
      icon: <Store className="h-10 w-10 text-gray-600" />,
      value: "92,000",
      label: "Market Place",
      sublabel: "Active Users",
    },
  ]

  return (
    <div className="w-full px-4 py-12">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <StatItem key={index} {...stat} />
        ))}
      </div>
    </div>
  )
}