interface ProgressCircleProps {
    value: number
    size?: number
    strokeWidth?: number
    color?: string
  }
  
  export function ProgressCircle({ value, size = 80, strokeWidth = 8, color = "#4169e1" }: ProgressCircleProps) {
    const radius = (size - strokeWidth) / 2
    const circumference = radius * 2 * Math.PI
    const dash = (value * circumference) / 100
  
    return (
      <div className="relative flex items-center justify-center">
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          <circle
            className="text-gray-700"
            strokeWidth={strokeWidth}
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx={size / 2}
            cy={size / 2}
          />
          <circle
            className="transition-all duration-300 ease-in-out"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={circumference - dash}
            strokeLinecap="round"
            stroke={color}
            fill="transparent"
            r={radius}
            cx={size / 2}
            cy={size / 2}
            style={{
              transformOrigin: "50% 50%",
              transform: "rotate(-90deg)",
            }}
          />
        </svg>
        <span className="absolute text-xl font-bold">{value}%</span>
      </div>
    )
  }
  
  