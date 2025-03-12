import Image from "next/image"
import { Mail, Phone } from "lucide-react"

export function LinkedTeachers() {
  const teachers = [
    {
      id: 1,
      name: "Mary Johnson",
      role: "mentor",
      subject: "Science",
      avatar: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAlAMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQIH/8QAIhABAQEAAQQCAgMAAAAAAAAAAAERITFBYXFRkYHwUqHh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAL/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDs8BYlSCpgLAoCc/AqAhnwqAm+Kp2IBvyvAAcns0kA4TlUAD+gFDfFUE1dQBdE+/oAqbVAQ1UAOgAuwxFAAAOFT8AAAbpDuAohwC8CRQRFoCJ+VwsAnsDkBU1dBO62L6TuCC2H4AEm0BQOQF0AKkgoIFAEVLoB+Yk1YBFRQAAQ+1ASwLoCgAAoHAk59KCUtEALBMBfpOq4dAJMBQNBICpqgILoB3MFBF0ABFBDgpnAGpfAbAIIugRUyrADVQDZ/ogChk+UBQk7LmdwRcAEFT2BidGkoJ6pt8UPIIu34hAAUANNAKbc7Jb5igguX+IAdCaYAACpT2uYCC378MgWJnlcMBFDjyAspACgZADAAE5AWkXEAVACm000DSh168eAQLP3QAzt2TlQFxP3DQVFMBFE79gXPKKAAAdwAIoAgAFQATOVQBoAA7ACVQBAAf/Z",
    },
    {
      id: 2,
      name: "James Brown",
      subject: "Foreign language (Chinese)",
      avatar: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAlAMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQIH/8QAIhABAQEAAQQCAgMAAAAAAAAAAAERITFBYXFRkYHwUqHh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAL/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDs8BYlSCpgLAoCc/AqAhnwqAm+Kp2IBvyvAAcns0kA4TlUAD+gFDfFUE1dQBdE+/oAqbVAQ1UAOgAuwxFAAAOFT8AAAbpDuAohwC8CRQRFoCJ+VwsAnsDkBU1dBO62L6TuCC2H4AEm0BQOQF0AKkgoIFAEVLoB+Yk1YBFRQAAQ+1ASwLoCgAAoHAk59KCUtEALBMBfpOq4dAJMBQNBICpqgILoB3MFBF0ABFBDgpnAGpfAbAIIugRUyrADVQDZ/ogChk+UBQk7LmdwRcAEFT2BidGkoJ6pt8UPIIu34hAAUANNAKbc7Jb5igguX+IAdCaYAACpT2uYCC378MgWJnlcMBFDjyAspACgZADAAE5AWkXEAVACm000DSh168eAQLP3QAzt2TlQFxP3DQVFMBFE79gXPKKAAAdwAIoAgAFQATOVQBoAA7ACVQBAAf/Z",
    },
  ]

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Linked Teachers</h2>
        <a href="#" className="text-sm text-gray-300">
          See all
        </a>
      </div>

      <div className="space-y-4">
        {teachers.map((teacher) => (
          <div key={teacher.id} className="bg-[#2e3251] rounded-3xl p-4 flex items-center">
            <Image
              src={teacher.avatar || "/placeholder.svg"}
              alt={teacher.name}
              width={50}
              height={50}
              className="rounded-full mr-4"
            />
            <div className="flex-1">
              <h3 className="font-medium">
                {teacher.name} {teacher.role && <span className="text-gray-400">({teacher.role})</span>}
              </h3>
              <p className="text-sm text-gray-400">{teacher.subject}</p>
            </div>
            <div className="flex gap-2">
              <button className="w-8 h-8 bg-[#3a3f61] rounded-full flex items-center justify-center">
                <Mail className="h-4 w-4" />
              </button>
              <button className="w-8 h-8 bg-[#3a3f61] rounded-full flex items-center justify-center">
                <Phone className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

