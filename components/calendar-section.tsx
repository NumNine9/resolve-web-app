"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { LessonItem } from "./lesson-item"

export function CalendarSection() {
  const [selectedDay, setSelectedDay] = useState("Today")

  const lessons = [
    {
      id: 1,
      title: "Electronics lesson",
      startTime: "9:45",
      endTime: "10:30",
      duration: 21,
      timeSlot: "10:00",
    },
    {
      id: 2,
      title: "Electronics lesson",
      startTime: "11:00",
      endTime: "11:40",
      duration: 23,
      timeSlot: "11:30",
    },
    {
      id: 3,
      title: "Robotics lesson",
      startTime: "12:00",
      endTime: "12:45",
      duration: 23,
      timeSlot: "12:30",
    },
    {
      id: 4,
      title: "C++ lesson",
      startTime: "13:45",
      endTime: "14:30",
      duration: 21,
      timeSlot: "14:00",
    },
  ]

  const timeSlots = ["10:00", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30"]

  return (
    <div className="bg-[#2e3251] rounded-3xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">Calendar</h2>
        <div className="flex items-center gap-2">
          <p className="text-sm text-gray-300">6 events today</p>
          <button className="bg-[#3a3f61] px-4 py-1.5 rounded-full text-sm flex items-center">
            {selectedDay} <ChevronDown className="ml-1 h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {timeSlots.map((timeSlot) => {
          const lesson = lessons.find((l) => l.timeSlot === timeSlot)

          return (
            <div key={timeSlot} className="flex items-start gap-4">
              <div className="w-12 text-sm text-gray-400">{timeSlot}</div>
              <div className="flex-1">
                {lesson ? (
                  <LessonItem lesson={lesson} />
                ) : (
                  <div className="border-l-2 border-dashed border-gray-600 h-4 ml-2"></div>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

