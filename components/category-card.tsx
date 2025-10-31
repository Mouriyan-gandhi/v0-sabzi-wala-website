import type { ReactNode } from "react"
import Link from "next/link"
import Image from "next/image"

interface CategoryCardProps {
  icon: ReactNode
  name: string
  bgColor: string
  textColor: string
  image: string
}

export function CategoryCard({ icon, name, bgColor, textColor, image }: CategoryCardProps) {
  return (
    <Link href={`/category/${name.toLowerCase()}`}>
      <div
        className={`flex flex-col items-center justify-center rounded-xl p-4 transition-all hover:scale-105 ${bgColor}`}
      >
        <div className="relative h-16 w-16 overflow-hidden rounded-full">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            width={64}
            height={64}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center rounded-full bg-white/30">{icon}</div>
        </div>
        <h3 className={`mt-3 font-medium ${textColor}`}>{name}</h3>
      </div>
    </Link>
  )
}
