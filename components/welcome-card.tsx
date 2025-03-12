import Image from "next/image"

interface WelcomeCardProps {
  name: string
  taskCount: number
}

export function WelcomeCard({ name, taskCount }: WelcomeCardProps) {
  return (
    <div className="bg-[#4169e1] rounded-3xl p-6 overflow-hidden">
      <div className="flex justify-between">
        <div className="z-10">
          <h1 className="text-3xl font-bold mb-2">Hello {name}!</h1>
          <p className="text-white/90 mb-2">
            You have {taskCount} new tasks& It is a lot of work for today! So let's srart
          </p>
          <a href="#" className="underline text-white/90">
            review it!
          </a>
        </div>

        <div className="absolute right-0 top-0 h-full">
          <Image
            src="/placeholder.svg?height=200&width=200"
            alt="Student at desk illustration"
            width={200}
            height={200}
            className="h-full w-auto object-contain"
          />
        </div>
      </div>
    </div>
  )
}

