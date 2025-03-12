interface BarChartProps {
    data: Array<{
      name: string
      value: number
    }>
  }
  
  export function BarChart({ data }: BarChartProps) {
    const maxValue = Math.max(...data.map((item) => item.value))
  
    return (
      <div className="flex items-end justify-between h-32 gap-2">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className="w-8 bg-[#4169e1]/50 rounded-t-md relative overflow-hidden"
              style={{ height: `${(item.value / maxValue) * 100}%` }}
            >
              <div
                className="absolute bottom-0 w-full bg-[#4169e1] rounded-t-md"
                style={{ height: `${(item.value / maxValue) * 60}%` }}
              />
            </div>
            <p className="text-[10px] text-center mt-2 text-gray-400 max-w-[40px] leading-tight">{item.name}</p>
          </div>
        ))}
      </div>
    )
  }
  
  