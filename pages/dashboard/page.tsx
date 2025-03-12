import { WelcomeCard } from "@/components/welcome-card"
import { PerformanceSection } from "@/components/perfomance-section"
import { CalendarSection } from "@/components/calendar-section"
import { UpcomingEvents } from "@/components/upcoming-events"
import { LinkedTeachers } from "@/components/linked-teachers"

export default function Dashboard() {
  return (
    <main className="p-4 md:p-6 bg-[#3a3f61]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <WelcomeCard name="Grace" taskCount={3} />

          <PerformanceSection />

          <LinkedTeachers />
        </div>

        <div className="space-y-6">
          <CalendarSection />
          <UpcomingEvents />
        </div>
      </div>
    </main>
  )
}

