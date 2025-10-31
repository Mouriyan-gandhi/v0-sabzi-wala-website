import { Apple, ArrowRight, Smartphone } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export function MobileAppBanner() {
  return (
    <section className="overflow-hidden bg-gradient-to-r from-green-600 to-green-700 py-12 text-white md:py-16">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 md:grid-cols-2 md:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Download Our Mobile App</h2>
              <p className="max-w-[600px] text-green-50 md:text-lg">
                Get exclusive app-only offers, faster checkout, and real-time delivery tracking.
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-green-700">
                <Apple className="mr-2 h-5 w-5" /> App Store
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-green-700">
                <Smartphone className="mr-2 h-5 w-5" /> Google Play
              </Button>
            </div>
            <Link href="#" className="flex items-center gap-1 text-sm font-medium text-green-50 hover:underline">
              Learn more about our app <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[300px] w-[300px] md:h-[400px] md:w-[400px]">
              <div className="absolute left-0 top-0 h-full w-full rounded-full bg-green-500 opacity-30"></div>
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="Sabzi Wala mobile app"
                className="relative z-10 h-full w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
