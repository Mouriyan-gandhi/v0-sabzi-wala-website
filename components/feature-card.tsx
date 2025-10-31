import type { ReactNode } from "react"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  color: string
}

export function FeatureCard({ icon, title, description, color }: FeatureCardProps) {
  return (
    <div className="flex flex-col items-center rounded-xl p-6 text-center shadow-sm transition-all hover:shadow-md">
      <div className={`mb-4 flex h-20 w-20 items-center justify-center rounded-full ${color}`}>{icon}</div>
      <h3 className="mb-2 text-lg font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
