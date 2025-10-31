import { ShoppingBag, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"

interface ProductCardProps {
  image: string
  name: string
  price: number
  unit: string
  discount: number
  rating: number
  bgColor: string
}

export function ProductCard({ image, name, price, unit, discount, rating, bgColor }: ProductCardProps) {
  const discountedPrice = discount > 0 ? price - (price * discount) / 100 : price

  return (
    <div className="group relative overflow-hidden rounded-xl border bg-white p-3 shadow-sm transition-all hover:shadow-md">
      {discount > 0 && (
        <div className="absolute right-2 top-2 z-10 rounded-full bg-red-500 px-2 py-1 text-xs font-medium text-white">
          {discount}% OFF
        </div>
      )}
      <Link href={`/product/${name.toLowerCase().replace(/\s+/g, "-")}`}>
        <div className={`relative mb-3 h-40 w-full overflow-hidden rounded-lg ${bgColor}`}>
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            width={160}
            height={160}
            className="h-full w-full object-contain transition-transform group-hover:scale-105"
          />
        </div>
        <h3 className="line-clamp-1 font-medium text-gray-900">{name}</h3>
        <div className="mt-1 flex items-center gap-1">
          <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
          <span className="text-xs text-gray-600">{rating}</span>
        </div>
        <div className="mt-1 flex items-baseline gap-2">
          <span className="text-sm font-medium text-gray-500">{unit}</span>
        </div>
        <div className="mt-1 flex items-center gap-2">
          <span className="text-lg font-bold text-green-600">${discountedPrice.toFixed(2)}</span>
          {discount > 0 && <span className="text-sm text-gray-500 line-through">${price.toFixed(2)}</span>}
        </div>
      </Link>
      <Button size="sm" className="mt-3 w-full bg-green-600 hover:bg-green-700">
        <ShoppingBag className="mr-2 h-4 w-4" /> Add
      </Button>
    </div>
  )
}
