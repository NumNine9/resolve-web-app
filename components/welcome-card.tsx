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
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAlAMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQIH/8QAIhABAQEAAQQCAgMAAAAAAAAAAAERITFBYXFRkYHwUqHh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAL/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDs8BYlSCpgLAoCc/AqAhnwqAm+Kp2IBvyvAAcns0kA4TlUAD+gFDfFUE1dQBdE+/oAqbVAQ1UAOgAuwxFAAAOFT8AAAbpDuAohwC8CRQRFoCJ+VwsAnsDkBU1dBO62L6TuCC2H4AEm0BQOQF0AKkgoIFAEVLoB+Yk1YBFRQAAQ+1ASwLoCgAAoHAk59KCUtEALBMBfpOq4dAJMBQNBICpqgILoB3MFBF0ABFBDgpnAGpfAbAIIugRUyrADVQDZ/ogChk+UBQk7LmdwRcAEFT2BidGkoJ6pt8UPIIu34hAAUANNAKbc7Jb5igguX+IAdCaYAACpT2uYCC378MgWJnlcMBFDjyAspACgZADAAE5AWkXEAVACm000DSh168eAQLP3QAzt2TlQFxP3DQVFMBFE79gXPKKAAAdwAIoAgAFQATOVQBoAA7ACVQBAAf/Z"
            alt="Student at desk illustration"
            width={50}
            height={50}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  )
}

