interface Props {
  value: number
}

export default function RiskMeter({ value }: Props) {
  const getColor = () => {
    if (value > 70) return "from-red-500 to-red-700"
    if (value > 40) return "from-yellow-400 to-yellow-600"
    return "from-green-400 to-green-600"
  }

  return (
    <div className="w-full">
      <div className="flex justify-between text-sm mb-2">
        <span>Regret Risk</span>
        <span>{value}%</span>
      </div>

      <div className="w-full h-4 bg-gray-800 rounded-full overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r ${getColor()} transition-all duration-700`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  )
}