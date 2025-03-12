import { Clock, MoreVertical } from "lucide-react"
import Image from "next/image"

export function UpcomingEvents() {
  const events = [
    {
      id: 1,
      title: 'The main event in your life "Robot Fest" will coming soon in...',
      date: "14 December 2023",
      time: "12:00 pm",
      image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAlAMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQIH/8QAIhABAQEAAQQCAgMAAAAAAAAAAAERITFBYXFRkYHwUqHh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAL/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDs8BYlSCpgLAoCc/AqAhnwqAm+Kp2IBvyvAAcns0kA4TlUAD+gFDfFUE1dQBdE+/oAqbVAQ1UAOgAuwxFAAAOFT8AAAbpDuAohwC8CRQRFoCJ+VwsAnsDkBU1dBO62L6TuCC2H4AEm0BQOQF0AKkgoIFAEVLoB+Yk1YBFRQAAQ+1ASwLoCgAAoHAk59KCUtEALBMBfpOq4dAJMBQNBICpqgILoB3MFBF0ABFBDgpnAGpfAbAIIugRUyrADVQDZ/ogChk+UBQk7LmdwRcAEFT2BidGkoJ6pt8UPIIu34hAAUANNAKbc7Jb5igguX+IAdCaYAACpT2uYCC378MgWJnlcMBFDjyAspACgZADAAE5AWkXEAVACm000DSh168eAQLP3QAzt2TlQFxP3DQVFMBFE79gXPKKAAAdwAIoAgAFQATOVQBoAA7ACVQBAAf/Z",
    },
    {
      id: 2,
      title: "Webinar of new tools in Minecraft",
      date: "21 December 2023",
      time: "11:00 pm",
      image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAlAMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQIH/8QAIhABAQEAAQQCAgMAAAAAAAAAAAERITFBYXFRkYHwUqHh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAL/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDs8BYlSCpgLAoCc/AqAhnwqAm+Kp2IBvyvAAcns0kA4TlUAD+gFDfFUE1dQBdE+/oAqbVAQ1UAOgAuwxFAAAOFT8AAAbpDuAohwC8CRQRFoCJ+VwsAnsDkBU1dBO62L6TuCC2H4AEm0BQOQF0AKkgoIFAEVLoB+Yk1YBFRQAAQ+1ASwLoCgAAoHAk59KCUtEALBMBfpOq4dAJMBQNBICpqgILoB3MFBF0ABFBDgpnAGpfAbAIIugRUyrADVQDZ/ogChk+UBQk7LmdwRcAEFT2BidGkoJ6pt8UPIIu34hAAUANNAKbc7Jb5igguX+IAdCaYAACpT2uYCC378MgWJnlcMBFDjyAspACgZADAAE5AWkXEAVACm000DSh168eAQLP3QAzt2TlQFxP3DQVFMBFE79gXPKKAAAdwAIoAgAFQATOVQBoAA7ACVQBAAf/Z",
    },
  ]

  return (
    <div className="bg-[#2e3251] rounded-3xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">Upcoming events</h2>
        <a href="#" className="text-sm text-gray-300">
          See all
        </a>
      </div>

      <div className="space-y-4">
        {events.map((event) => (
          <div key={event.id} className="flex gap-4">
            <div className="flex-shrink-0">
              <Image
                src={event.image || "/placeholder.svg"}
                alt={event.title}
                width={60}
                height={60}
                className="rounded-xl"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-sm mb-1">{event.title}</h3>
              <div className="flex items-center text-xs text-gray-400">
                <Clock className="h-3 w-3 mr-1" />
                <span>
                  {event.date} • {event.time}
                </span>
              </div>
            </div>
            <button className="text-gray-400">
              <MoreVertical className="h-5 w-5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

