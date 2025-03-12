"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { ProgressCircle } from "./progress-circle"
import { BarChart } from "./bar-chart"

export function PerformanceSection() {
  const [selectedMonth, setSelectedMonth] = useState("December")

  const subjects = [
    { name: "Algorithms structures", score: 92 },
    { name: "Object program.", score: 83 },
    { name: "Database program.", score: 78 },
    { name: "Web develop.", score: 97 },
    { name: "Mobile application", score: 96 },
    { name: "Machine learning", score: 89 },
  ]

  const barData = [
    { name: "Algorithms structures", value: 85.3 },
    { name: "Object program.", value: 84.7 },
    { name: "Database program.", value: 84.2 },
    { name: "Web develop.", value: 45.6 },
    { name: "Mobile application", value: 43.5 },
    { name: "Machine learning", value: 74.4 },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Performance</h2>
        <button className="bg-[#3a3f61] px-4 py-1.5 rounded-full text-sm flex items-center">
          {selectedMonth} <ChevronDown className="ml-1 h-4 w-4" />
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-[#2e3251] rounded-3xl p-6">
          <div className="mb-4">
            <h3 className="text-lg text-gray-300">The best lessons:</h3>
            <div className="flex items-end gap-2">
              <span className="text-5xl font-bold">95.4</span>
              <div className="text-xs text-gray-400 mb-2">
                Introduction
                <br />
                to programming
              </div>
            </div>
          </div>

          <div className="flex justify-between mb-4">
            <button className="bg-[#3a3f61] px-4 py-1.5 rounded-full text-sm">All lessons</button>
          </div>

          <BarChart data={barData} />
        </div>

        <div className="grid grid-cols-2 gap-4">
          {subjects.map((subject, index) => (
            <div key={index} className="bg-[#2e3251] rounded-3xl p-4 flex flex-col items-center justify-center">
              <ProgressCircle value={subject.score} />
              <p className="text-center text-sm mt-2 text-gray-300">{subject.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

