"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Minus, Plus, ShoppingBag, Trash2, Truck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export default function CartPage() {
  // This would normally come from a cart state or context
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Fresh Organic Apples",
      price: 2.99,
      discountedPrice: 2.69,
      quantity: 2,
      image:
        "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      unit: "500g",
    },
    {
      id: 2,
      name: "Red Tomatoes",
      price: 3.49,
      discountedPrice: 2.97,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1607305387299-a3d9611cd469?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      unit: "500g",
    },
    {
      id: 3,
      name: "Fresh Oranges",
      price: 4.99,
      discountedPrice: 4.74,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      unit: "1kg",
    },
  ])

  const [paymentMethod, setPaymentMethod] = useState("online")

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return
    setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const subtotal = cartItems.reduce((total, item) => total + item.discountedPrice * item.quantity, 0)
  const deliveryFee = subtotal >= 15 ? 0 : 2.99
  const discount = paymentMethod === "online" ? subtotal * 0.05 : 0
  const total = subtotal + deliveryFee - discount

  return (
    <div className="container mx-auto px-4 py-8 md:px-6 md:py-12">
      <h1 className="mb-8 text-2xl font-bold text-gray-900 md:text-3xl">Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-xl border bg-white p-12 text-center">
          <ShoppingBag className="mb-4 h-16 w-16 text-gray-300" />
          <h2 className="mb-2 text-xl font-semibold text-gray-900">Your cart is empty</h2>
          <p className="mb-6 text-gray-600">Looks like you haven't added any items to your cart yet.</p>
          <Link href="/products">
            <Button className="bg-green-600 hover:bg-green-700">Start Shopping</Button>
          </Link>
        </div>
      ) : (
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="rounded-xl border bg-white">
              <div className="p-6">
                <h2 className="mb-4 text-xl font-semibold text-gray-900">Cart Items ({cartItems.length})</h2>
                <div className="space-y-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex flex-col gap-4 sm:flex-row">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg bg-gray-50">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          width={96}
                          height={96}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex flex-1 flex-col justify-between">
                        <div>
                          <h3 className="font-medium text-gray-900">
                            <Link href={`/product/${item.name.toLowerCase().replace(/\s+/g, "-")}`}>{item.name}</Link>
                          </h3>
                          <p className="mt-1 text-sm text-gray-600">{item.unit}</p>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="w-8 text-center">{item.quantity}</span>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="text-right">
                              <div className="font-medium text-gray-900">
                                ${(item.discountedPrice * item.quantity).toFixed(2)}
                              </div>
                              {item.price !== item.discountedPrice && (
                                <div className="text-sm text-gray-500 line-through">
                                  ${(item.price * item.quantity).toFixed(2)}
                                </div>
                              )}
                            </div>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 text-gray-500 hover:text-red-500"
                              onClick={() => removeItem(item.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-xl border bg-white p-6">
              <h2 className="mb-4 text-xl font-semibold text-gray-900">Delivery Address</h2>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Enter your full name" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="Enter your phone number" className="mt-1" />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" placeholder="Enter your address" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="city">City</Label>
                  <Input id="city" placeholder="Enter your city" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="pincode">Pincode</Label>
                  <Input id="pincode" placeholder="Enter your pincode" className="mt-1" />
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="rounded-xl border bg-white p-6">
              <h2 className="mb-4 text-xl font-semibold text-gray-900">Order Summary</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium text-gray-900">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Delivery Fee</span>
                  <span className="font-medium text-gray-900">
                    {deliveryFee === 0 ? "Free" : `$${deliveryFee.toFixed(2)}`}
                  </span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Online Payment Discount (5%)</span>
                    <span className="font-medium text-green-600">-${discount.toFixed(2)}</span>
                  </div>
                )}
                <Separator />
                <div className="flex justify-between">
                  <span className="text-lg font-semibold text-gray-900">Total</span>
                  <span className="text-lg font-semibold text-gray-900">${total.toFixed(2)}</span>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="mb-2 font-medium text-gray-900">Payment Method</h3>
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="flex flex-col space-y-2">
                  <div className="flex items-center space-x-2 rounded-lg border p-3">
                    <RadioGroupItem value="online" id="online" />
                    <Label htmlFor="online" className="flex items-center gap-2">
                      Online Payment
                      <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                        5% Extra Discount
                      </span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 rounded-lg border p-3">
                    <RadioGroupItem value="cod" id="cod" />
                    <Label htmlFor="cod">Cash on Delivery</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="mt-6 flex flex-col gap-2">
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Proceed to Checkout <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Link href="/products">
                  <Button variant="outline" className="w-full">
                    Continue Shopping
                  </Button>
                </Link>
              </div>

              <div className="mt-6 rounded-lg bg-green-50 p-4">
                <div className="flex items-center gap-2 text-green-800">
                  <Truck className="h-5 w-5" />
                  <span className="font-medium">Delivery in 15 minutes</span>
                </div>
                <p className="mt-1 text-sm text-gray-600">
                  Order now and get your fresh produce delivered to your doorstep in just 15 minutes!
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
