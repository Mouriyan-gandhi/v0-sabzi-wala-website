"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check, Heart, Leaf, Minus, Plus, ShoppingBag, Star, Truck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export default function ProductPage({ params }: { params: { slug: string } }) {
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  // This would normally come from a database
  const product = {
    name: "Fresh Organic Apples",
    description:
      "Our premium organic apples are handpicked from certified organic farms. These crisp, juicy apples are perfect for snacking, baking, or adding to your favorite recipes. Rich in fiber and essential nutrients, they're a healthy addition to your daily diet.",
    price: 2.99,
    discountedPrice: 2.69,
    discount: 10,
    unit: "500g (approx. 4-5 apples)",
    rating: 4.8,
    reviews: 124,
    stock: 50,
    category: "Fruits",
    tags: ["Organic", "Fresh", "Seasonal"],
    images: [
      "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      "https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    ],
    nutritionFacts: {
      calories: "52 kcal",
      protein: "0.3g",
      carbs: "14g",
      fiber: "2.4g",
      sugar: "10g",
      fat: "0.2g",
    },
    qualityChecks: ["Certified Organic", "Pesticide-Free", "No Wax Coating", "Freshness Verified", "Hand-Selected"],
    storageInstructions: "Store in a cool, dry place. Refrigerate for extended freshness.",
    origin: "Himachal Pradesh, India",
  }

  const incrementQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1)
    }
  }

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 md:px-6 md:py-12">
      <Link
        href="/products"
        className="mb-6 inline-flex items-center text-sm font-medium text-gray-600 hover:text-green-600"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Products
      </Link>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Product Images */}
        <div className="lg:col-span-1">
          <div className="mb-4 overflow-hidden rounded-xl bg-gray-50">
            <Image
              src={product.images[selectedImage] || "/placeholder.svg"}
              alt={product.name}
              width={500}
              height={500}
              className="h-[400px] w-full object-contain"
            />
          </div>
          <div className="flex gap-2">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`overflow-hidden rounded-lg border-2 ${
                  selectedImage === index ? "border-green-500" : "border-transparent"
                }`}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} ${index + 1}`}
                  width={80}
                  height={80}
                  className="h-20 w-20"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="lg:col-span-2">
          <div className="mb-6">
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                {product.category}
              </span>
              {product.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="mt-2 text-2xl font-bold text-gray-900 md:text-3xl">{product.name}</h1>
            <div className="mt-2 flex items-center gap-2">
              <div className="flex items-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-green-600">${product.discountedPrice.toFixed(2)}</span>
              {product.discount > 0 && (
                <span className="text-lg text-gray-500 line-through">${product.price.toFixed(2)}</span>
              )}
              {product.discount > 0 && (
                <span className="rounded-md bg-red-100 px-2 py-1 text-xs font-medium text-red-800">
                  {product.discount}% OFF
                </span>
              )}
            </div>
            <p className="mt-1 text-sm text-gray-600">{product.unit}</p>
            <p className="mt-2 flex items-center gap-1 text-sm text-gray-700">
              <Truck className="h-4 w-4 text-green-600" />
              <span>Delivery in 15 minutes</span>
            </p>
            <p className="mt-1 flex items-center gap-1 text-sm text-gray-700">
              <Leaf className="h-4 w-4 text-green-600" />
              <span>Sourced from {product.origin}</span>
            </p>
          </div>

          <div className="mb-6">
            <h2 className="mb-2 text-lg font-semibold text-gray-900">Description</h2>
            <p className="text-gray-600">{product.description}</p>
          </div>

          <div className="mb-6">
            <h2 className="mb-2 text-lg font-semibold text-gray-900">Quantity</h2>
            <div className="flex items-center">
              <Button
                variant="outline"
                size="icon"
                onClick={decrementQuantity}
                disabled={quantity <= 1}
                className="h-10 w-10 rounded-l-md rounded-r-none"
              >
                <Minus className="h-4 w-4" />
              </Button>
              <div className="flex h-10 w-16 items-center justify-center border-y bg-white text-center">{quantity}</div>
              <Button
                variant="outline"
                size="icon"
                onClick={incrementQuantity}
                disabled={quantity >= product.stock}
                className="h-10 w-10 rounded-l-none rounded-r-md"
              >
                <Plus className="h-4 w-4" />
              </Button>
              <span className="ml-4 text-sm text-gray-600">{product.stock} available</span>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="mb-2 text-lg font-semibold text-gray-900">Payment Options</h2>
            <RadioGroup defaultValue="online" className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="online" id="online" />
                <Label htmlFor="online" className="flex items-center gap-2">
                  Online Payment
                  <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                    5% Extra Discount
                  </span>
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="cod" id="cod" />
                <Label htmlFor="cod">Cash on Delivery</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button className="flex-1 bg-green-600 hover:bg-green-700">
              <ShoppingBag className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
            <Button variant="outline" className="flex-1 border-green-600 text-green-600 hover:bg-green-50">
              <Heart className="mr-2 h-5 w-5" />
              Add to Wishlist
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <Tabs defaultValue="details">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="details">Product Details</TabsTrigger>
            <TabsTrigger value="nutrition">Nutrition Facts</TabsTrigger>
            <TabsTrigger value="quality">Quality Checks</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          <TabsContent value="details" className="mt-4 rounded-xl border bg-white p-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="mb-3 text-lg font-semibold text-gray-900">Product Information</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="font-medium text-gray-700">Origin:</span>
                    <span className="text-gray-600">{product.origin}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium text-gray-700">Category:</span>
                    <span className="text-gray-600">{product.category}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium text-gray-700">Storage:</span>
                    <span className="text-gray-600">{product.storageInstructions}</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-3 text-lg font-semibold text-gray-900">Benefits</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 text-green-600" />
                    <span className="text-gray-600">Rich in antioxidants and vitamin C</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 text-green-600" />
                    <span className="text-gray-600">Supports heart health and digestion</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 text-green-600" />
                    <span className="text-gray-600">Helps maintain healthy blood sugar levels</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 text-green-600" />
                    <span className="text-gray-600">Natural source of dietary fiber</span>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="nutrition" className="mt-4 rounded-xl border bg-white p-6">
            <h3 className="mb-4 text-lg font-semibold text-gray-900">Nutrition Facts (per 100g)</h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
              {Object.entries(product.nutritionFacts).map(([key, value]) => (
                <div key={key} className="rounded-lg bg-gray-50 p-4 text-center">
                  <p className="text-sm font-medium text-gray-600">{key.charAt(0).toUpperCase() + key.slice(1)}</p>
                  <p className="text-lg font-semibold text-gray-900">{value}</p>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="quality" className="mt-4 rounded-xl border bg-white p-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="mb-4 text-lg font-semibold text-gray-900">Our Quality Assurance</h3>
                <p className="mb-4 text-gray-600">
                  At Sabzi Wala, we take quality seriously. Every product undergoes a rigorous quality check process
                  before it reaches your doorstep.
                </p>
                <ul className="space-y-2">
                  {product.qualityChecks.map((check) => (
                    <li key={check} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-5 w-5 text-green-600" />
                      <span className="text-gray-600">{check}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl bg-green-50 p-6">
                <h3 className="mb-3 text-lg font-semibold text-green-800">Quality Guarantee</h3>
                <p className="mb-4 text-gray-600">
                  Not satisfied with the quality? We offer a no-questions-asked refund or replacement policy.
                </p>
                <div className="rounded-lg bg-white p-4">
                  <h4 className="font-medium text-gray-900">How to claim:</h4>
                  <ol className="ml-5 mt-2 list-decimal space-y-1 text-sm text-gray-600">
                    <li>Take a photo of the product</li>
                    <li>Contact our customer support within 24 hours of delivery</li>
                    <li>Get instant refund or schedule a replacement</li>
                  </ol>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="reviews" className="mt-4 rounded-xl border bg-white p-6">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Customer Reviews</h3>
              <Button variant="outline">Write a Review</Button>
            </div>
            <div className="space-y-6">
              {/* Sample reviews - would be dynamic in a real app */}
              <div className="border-b pb-6">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 overflow-hidden rounded-full bg-gray-200">
                    <Image
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                      alt="Reviewer"
                      width={40}
                      height={40}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Priya Sharma</p>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < 5 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-gray-500">2 weeks ago</span>
                    </div>
                  </div>
                </div>
                <p className="mt-3 text-gray-600">
                  These apples are incredibly fresh and juicy! The delivery was prompt, and the packaging was excellent.
                  Will definitely order again.
                </p>
              </div>
              <div className="border-b pb-6">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 overflow-hidden rounded-full bg-gray-200">
                    <Image
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                      alt="Reviewer"
                      width={40}
                      height={40}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Rahul Patel</p>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-gray-500">1 month ago</span>
                    </div>
                  </div>
                </div>
                <p className="mt-3 text-gray-600">
                  Good quality apples, but a couple of them had minor bruises. Customer service was excellent though and
                  they immediately offered a partial refund. Would buy again.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 overflow-hidden rounded-full bg-gray-200">
                    <Image
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                      alt="Reviewer"
                      width={40}
                      height={40}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Ananya Gupta</p>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < 5 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-gray-500">3 days ago</span>
                    </div>
                  </div>
                </div>
                <p className="mt-3 text-gray-600">
                  These are the best apples I've had in a long time! So crisp and sweet. The 15-minute delivery is
                  amazing - they arrived at my doorstep while I was still planning my meal. Highly recommend!
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
