import { Clock } from "lucide-react"

interface Lesson {
  id: number
  title: string
  startTime: string
  endTime: string
  duration: number
  timeSlot: string
}

interface LessonItemProps {
  lesson: Lesson
}

export function LessonItem({ lesson }: LessonItemProps) {
  return (
    <div className="bg-white text-[#2e3251] rounded-xl p-4 mb-2">
      <div className="flex items-center gap-2 mb-1">
        <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-gray-400"></div>
        </div>
        <h3 className="font-medium">{lesson.title}</h3>
      </div>
      <div className="flex items-center text-xs text-gray-500 ml-8">
        <Clock className="h-3 w-3 mr-1" />
        <span>
          {lesson.startTime} - {lesson.endTime}, {lesson.duration} lesson
        </span>
      </div>
    </div>
  )
}

