import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check, Leaf, Microscope, Shield, ThumbsUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function QualityPromisePage() {
  return (
    <div className="container mx-auto px-4 py-8 md:px-6 md:py-12">
      <Link href="/" className="mb-6 inline-flex items-center text-sm font-medium text-gray-600 hover:text-green-600">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Home
      </Link>

      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-green-800 md:text-4xl">Our Quality Promise</h1>
        <p className="mx-auto mt-2 max-w-2xl text-gray-600 md:text-lg">
          At Sabzi Wala, we're committed to delivering the freshest, highest-quality fruits and vegetables to your
          doorstep.
        </p>
      </div>

      <div className="mb-12 overflow-hidden rounded-2xl">
        <div className="relative h-[300px] md:h-[400px]">
          <Image
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
            alt="Fresh produce quality check"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-green-900/70 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white md:p-10">
            <h2 className="text-2xl font-bold md:text-3xl">Farm to Table in 15 Minutes</h2>
            <p className="mt-2 max-w-2xl md:text-lg">
              We source directly from local farms and deliver to your doorstep in just 15 minutes, ensuring maximum
              freshness.
            </p>
          </div>
        </div>
      </div>

      <Tabs defaultValue="process" className="mb-12">
        <TabsList className="w-full justify-center">
          <TabsTrigger value="process">Our Process</TabsTrigger>
          <TabsTrigger value="standards">Quality Standards</TabsTrigger>
          <TabsTrigger value="guarantee">Our Guarantee</TabsTrigger>
        </TabsList>
        <TabsContent value="process" className="mt-6">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-xl bg-green-50 p-6 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <Leaf className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-green-800">1. Sourcing</h3>
              <p className="text-gray-600">
                We partner with local farmers who follow sustainable farming practices. Our produce is harvested fresh
                every morning.
              </p>
              <div className="mt-4 space-y-2">
                <div className="flex items-start gap-2">
                  <Check className="mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                  <span className="text-sm text-gray-600">Direct farm relationships</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                  <span className="text-sm text-gray-600">Sustainable farming practices</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                  <span className="text-sm text-gray-600">Same-day harvesting</span>
                </div>
              </div>
            </div>
            <div className="rounded-xl bg-yellow-50 p-6 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100">
                <Microscope className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-yellow-800">2. Quality Check</h3>
              <p className="text-gray-600">
                Every fruit and vegetable undergoes our rigorous 3-step quality verification process before being
                approved for delivery.
              </p>
              <div className="mt-4 space-y-2">
                <div className="flex items-start gap-2">
                  <Check className="mt-1 h-4 w-4 flex-shrink-0 text-yellow-600" />
                  <span className="text-sm text-gray-600">Visual inspection for freshness</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="mt-1 h-4 w-4 flex-shrink-0 text-yellow-600" />
                  <span className="text-sm text-gray-600">Texture and ripeness check</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="mt-1 h-4 w-4 flex-shrink-0 text-yellow-600" />
                  <span className="text-sm text-gray-600">Random sampling for taste</span>
                </div>
              </div>
            </div>
            <div className="rounded-xl bg-red-50 p-6 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
                <Shield className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-red-800">3. Delivery</h3>
              <p className="text-gray-600">
                We use specialized packaging to maintain freshness and deliver within 15 minutes of order placement.
              </p>
              <div className="mt-4 space-y-2">
                <div className="flex items-start gap-2">
                  <Check className="mt-1 h-4 w-4 flex-shrink-0 text-red-600" />
                  <span className="text-sm text-gray-600">Temperature-controlled storage</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="mt-1 h-4 w-4 flex-shrink-0 text-red-600" />
                  <span className="text-sm text-gray-600">Specialized packaging</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="mt-1 h-4 w-4 flex-shrink-0 text-red-600" />
                  <span className="text-sm text-gray-600">15-minute delivery guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="standards" className="mt-6">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-xl font-semibold text-green-800">Our Quality Standards</h3>
              <p className="mb-6 text-gray-600">
                We have strict quality standards that every product must meet before it reaches your doorstep. Our team
                of quality experts ensures that only the best produce makes it to your home.
              </p>
              <div className="space-y-4">
                <div className="rounded-lg bg-white p-4 shadow-sm">
                  <h4 className="font-medium text-gray-900">Freshness</h4>
                  <p className="text-sm text-gray-600">
                    All produce must be harvested within 24 hours of delivery to ensure maximum freshness.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm">
                  <h4 className="font-medium text-gray-900">Appearance</h4>
                  <p className="text-sm text-gray-600">
                    Products must have the right color, size, and shape characteristic of their variety.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm">
                  <h4 className="font-medium text-gray-900">Texture</h4>
                  <p className="text-sm text-gray-600">
                    Fruits and vegetables must have the appropriate firmness and texture for their type.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm">
                  <h4 className="font-medium text-gray-900">Taste</h4>
                  <p className="text-sm text-gray-600">
                    Random sampling ensures that our produce meets our taste standards.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1595436252086-7496fb8c41e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                alt="Quality inspection"
                width={600}
                height={800}
                className="h-full w-full rounded-xl object-cover"
              />
            </div>
          </div>
        </TabsContent>
        <TabsContent value="guarantee" className="mt-6">
          <div className="rounded-xl bg-gradient-to-r from-green-50 to-green-100 p-6 md:p-8">
            <div className="mx-auto max-w-3xl text-center">
              <ThumbsUp className="mx-auto h-16 w-16 text-green-600" />
              <h3 className="mt-4 text-2xl font-bold text-green-800">Our 100% Satisfaction Guarantee</h3>
              <p className="mt-2 text-gray-600 md:text-lg">
                If you're not completely satisfied with the quality of your produce, we'll make it right.
              </p>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h4 className="mb-2 font-semibold text-gray-900">No-Questions-Asked Returns</h4>
                <p className="text-gray-600">
                  If you're not happy with any item, simply take a photo and contact us within 24 hours of delivery.
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h4 className="mb-2 font-semibold text-gray-900">Instant Refunds</h4>
                <p className="text-gray-600">
                  We process refunds instantly, so you don't have to wait to get your money back.
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h4 className="mb-2 font-semibold text-gray-900">Free Replacements</h4>
                <p className="text-gray-600">
                  Prefer a replacement instead? We'll deliver a fresh replacement with your next order for free.
                </p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Link href="/products">
                <Button className="bg-green-600 hover:bg-green-700">Shop Quality Produce Now</Button>
              </Link>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mb-12 rounded-xl bg-white p-6 shadow-sm md:p-8">
        <h2 className="mb-6 text-center text-2xl font-bold text-green-800 md:text-3xl">Frequently Asked Questions</h2>
        <div className="mx-auto max-w-3xl space-y-6">
          <div>
            <h3 className="font-semibold text-gray-900">How do you ensure the freshness of your produce?</h3>
            <p className="mt-2 text-gray-600">
              We source directly from local farms every morning and deliver within 15 minutes of order placement. Our
              specialized packaging maintains the freshness during transit.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">What if I'm not satisfied with the quality?</h3>
            <p className="mt-2 text-gray-600">
              We offer a 100% satisfaction guarantee. If you're not happy with any item, simply take a photo and contact
              us within 24 hours of delivery for a refund or replacement.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Are your fruits and vegetables organic?</h3>
            <p className="mt-2 text-gray-600">
              We offer both organic and conventional options. All our organic produce is certified and clearly labeled
              on our website and app.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">How do you handle pesticides and chemicals?</h3>
            <p className="mt-2 text-gray-600">
              We work with farmers who follow good agricultural practices and minimize the use of pesticides. Our
              organic selection is grown without synthetic pesticides or fertilizers.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">How should I store the produce after delivery?</h3>
            <p className="mt-2 text-gray-600">
              Each product comes with storage instructions. Generally, most fruits and vegetables should be
              refrigerated, but some (like tomatoes and bananas) are best kept at room temperature.
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-xl bg-gradient-to-r from-green-600 to-green-700 p-6 text-white md:p-8">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">Experience the Sabzi Wala Difference</h2>
            <p className="mt-4 md:text-lg">
              Join thousands of satisfied customers who trust us for their daily fresh produce needs. Order now and
              taste the difference quality makes.
            </p>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <Link href="/products">
                <Button className="bg-white text-green-700 hover:bg-gray-100">Shop Now</Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="border-white text-white hover:bg-green-500">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[200px] w-[200px] overflow-hidden rounded-full md:h-[250px] md:w-[250px]">
              <Image
                src="https://images.unsplash.com/photo-1610348725531-843dff563e2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                alt="Fresh fruits and vegetables"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
