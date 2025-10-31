import { Star } from "lucide-react"
import Image from "next/image"

interface TestimonialCardProps {
  name: string
  image: string
  rating: number
  text: string
  date: string
  color: string
}

export function TestimonialCard({ name, image, rating, text, date, color }: TestimonialCardProps) {
  return (
    <div className={`rounded-xl p-6 shadow-sm ${color}`}>
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 overflow-hidden rounded-full">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            width={48}
            height={48}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <h3 className="font-medium text-gray-900">{name}</h3>
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
              />
            ))}
          </div>
        </div>
      </div>
      <p className="mt-4 text-gray-600">{text}</p>
      <p className="mt-2 text-xs text-gray-500">{date}</p>
    </div>
  )
}
