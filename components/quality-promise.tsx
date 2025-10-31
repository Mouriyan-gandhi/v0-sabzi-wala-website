import { Check, Leaf, Microscope, ThumbsUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export function QualityPromise() {
  return (
    <section className="overflow-hidden bg-gradient-to-r from-green-100 to-green-50 py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 md:grid-cols-2 md:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="inline-flex items-center rounded-full bg-green-200 px-3 py-1 text-sm font-medium text-green-800">
              <Leaf className="mr-1 h-4 w-4" /> Our Quality Promise
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tight text-green-800 md:text-3xl">
                We Guarantee the Freshness of Every Item
              </h2>
              <p className="max-w-[600px] text-gray-600 md:text-lg">
                At Sabzi Wala, quality is our top priority. We source directly from local farms and conduct rigorous
                quality checks before delivery.
              </p>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <Check className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                <span>
                  <strong className="font-medium text-gray-900">Farm-Fresh Guarantee:</strong> We source our produce
                  directly from local farms every morning.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                <span>
                  <strong className="font-medium text-gray-900">Quality Check Process:</strong> Every item undergoes a
                  3-step quality verification process.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                <span>
                  <strong className="font-medium text-gray-900">No-Questions-Asked Returns:</strong> Not satisfied? Get
                  an instant refund or replacement.
                </span>
              </li>
            </ul>
            <div className="flex flex-col gap-2 sm:flex-row">
              <Link href="/quality-promise">
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                  <Microscope className="mr-2 h-4 w-4" /> Learn About Our Process
                </Button>
              </Link>
              <Link href="/products">
                <Button className="bg-green-600 hover:bg-green-700">
                  <ThumbsUp className="mr-2 h-4 w-4" /> Shop Quality Produce
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[300px] w-[300px] overflow-hidden rounded-2xl md:h-[400px] md:w-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1595436252086-7496fb8c41e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                alt="Quality produce inspection"
                width={400}
                height={400}
                className="h-full w-full rounded-2xl object-cover"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-green-900/30 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-white/90 p-4 backdrop-blur-sm">
                <h3 className="font-medium text-green-800">Our 3-Step Quality Check</h3>
                <p className="text-sm text-gray-600">
                  Every fruit and vegetable passes through our rigorous inspection process
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
