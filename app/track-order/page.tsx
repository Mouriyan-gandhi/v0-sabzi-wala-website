"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Check, Clock, Package, Search, ShoppingBag, Truck, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"

export default function TrackOrderPage() {
  const [orderNumber, setOrderNumber] = useState("")
  const [isTracking, setIsTracking] = useState(false)

  // This would normally come from an API call
  const orderDetails = {
    orderNumber: "SBZ10023456",
    orderDate: "April 14, 2025",
    orderTime: "11:30 AM",
    estimatedDelivery: "11:45 AM",
    status: "out_for_delivery", // pending, confirmed, preparing, out_for_delivery, delivered
    statusText: "Out for Delivery",
    progress: 75,
    deliveryPerson: {
      name: "Rajesh Kumar",
      phone: "+91 98765 43210",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    },
    items: [
      {
        id: 1,
        name: "Fresh Organic Apples",
        quantity: 2,
        price: 2.69,
        image:
          "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      },
      {
        id: 2,
        name: "Red Tomatoes",
        quantity: 1,
        price: 2.97,
        image:
          "https://images.unsplash.com/photo-1607305387299-a3d9611cd469?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      },
      {
        id: 3,
        name: "Fresh Oranges",
        quantity: 1,
        price: 4.74,
        image:
          "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      },
    ],
    total: 10.4,
    deliveryFee: 0,
    paymentMethod: "Online Payment",
    address: "123 Green Avenue, Sector 42, Gurugram, Haryana - 122001",
  }

  const handleTrackOrder = (e) => {
    e.preventDefault()
    if (orderNumber.trim()) {
      setIsTracking(true)
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case "pending":
        return <Clock className="h-6 w-6 text-yellow-500" />
      case "confirmed":
        return <Check className="h-6 w-6 text-green-500" />
      case "preparing":
        return <Package className="h-6 w-6 text-blue-500" />
      case "out_for_delivery":
        return <Truck className="h-6 w-6 text-purple-500" />
      case "delivered":
        return <ShoppingBag className="h-6 w-6 text-green-500" />
      default:
        return <Clock className="h-6 w-6 text-gray-500" />
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 md:px-6 md:py-12">
      <Link href="/" className="mb-6 inline-flex items-center text-sm font-medium text-gray-600 hover:text-green-600">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Home
      </Link>

      <h1 className="mb-8 text-2xl font-bold text-gray-900 md:text-3xl">Track Your Order</h1>

      {!isTracking ? (
        <div className="mx-auto max-w-md rounded-xl border bg-white p-6 shadow-sm">
          <form onSubmit={handleTrackOrder}>
            <div className="mb-4 text-center">
              <ShoppingBag className="mx-auto mb-2 h-12 w-12 text-green-600" />
              <h2 className="text-xl font-semibold text-gray-900">Enter Your Order Number</h2>
              <p className="mt-1 text-gray-600">Please enter the order number that was sent to your email or phone.</p>
            </div>
            <div className="relative mb-4">
              <Input
                type="text"
                placeholder="e.g., SBZ10023456"
                value={orderNumber}
                onChange={(e) => setOrderNumber(e.target.value)}
                className="pr-10"
              />
              <Search className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
            </div>
            <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
              Track Order
            </Button>
          </form>
        </div>
      ) : (
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="rounded-xl border bg-white p-6 shadow-sm">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">Order #{orderDetails.orderNumber}</h2>
                  <p className="text-sm text-gray-600">
                    Placed on {orderDetails.orderDate} at {orderDetails.orderTime}
                  </p>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
                  {getStatusIcon(orderDetails.status)}
                  <span>{orderDetails.statusText}</span>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="mb-3 font-medium text-gray-900">Delivery Progress</h3>
                <Progress value={orderDetails.progress} className="h-2 w-full bg-gray-200" />
                <div className="mt-4 grid grid-cols-4 text-center">
                  <div className="flex flex-col items-center">
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-full ${
                        orderDetails.progress >= 0 ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-400"
                      }`}
                    >
                      <Check className="h-4 w-4" />
                    </div>
                    <span className="mt-1 text-xs font-medium">Confirmed</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-full ${
                        orderDetails.progress >= 33 ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-400"
                      }`}
                    >
                      <Package className="h-4 w-4" />
                    </div>
                    <span className="mt-1 text-xs font-medium">Preparing</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-full ${
                        orderDetails.progress >= 66 ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-400"
                      }`}
                    >
                      <Truck className="h-4 w-4" />
                    </div>
                    <span className="mt-1 text-xs font-medium">On the way</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-full ${
                        orderDetails.progress >= 100 ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-400"
                      }`}
                    >
                      <ShoppingBag className="h-4 w-4" />
                    </div>
                    <span className="mt-1 text-xs font-medium">Delivered</span>
                  </div>
                </div>
              </div>

              <div className="mb-6 rounded-lg bg-green-50 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-green-600" />
                    <span className="font-medium text-green-800">Estimated Delivery Time</span>
                  </div>
                  <span className="font-semibold text-green-800">{orderDetails.estimatedDelivery}</span>
                </div>
              </div>

              {orderDetails.status === "out_for_delivery" && (
                <div className="mb-6 rounded-lg border p-4">
                  <h3 className="mb-3 font-medium text-gray-900">Delivery Person</h3>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 overflow-hidden rounded-full">
                      <Image
                        src={orderDetails.deliveryPerson.image || "/placeholder.svg"}
                        alt={orderDetails.deliveryPerson.name}
                        width={48}
                        height={48}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{orderDetails.deliveryPerson.name}</p>
                      <p className="text-sm text-gray-600">{orderDetails.deliveryPerson.phone}</p>
                    </div>
                    <Button className="ml-auto bg-green-600 hover:bg-green-700">Call</Button>
                  </div>
                </div>
              )}

              <div>
                <Tabs defaultValue="items">
                  <TabsList className="w-full justify-start">
                    <TabsTrigger value="items">Order Items</TabsTrigger>
                    <TabsTrigger value="details">Order Details</TabsTrigger>
                  </TabsList>
                  <TabsContent value="items" className="mt-4">
                    <div className="space-y-4">
                      {orderDetails.items.map((item) => (
                        <div key={item.id} className="flex items-center gap-4">
                          <div className="h-16 w-16 overflow-hidden rounded-lg bg-gray-50">
                            <Image
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              width={64}
                              height={64}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-900">{item.name}</h4>
                            <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="details" className="mt-4">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-gray-900">Delivery Address</h4>
                        <p className="text-gray-600">{orderDetails.address}</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Payment Method</h4>
                        <p className="text-gray-600">{orderDetails.paymentMethod}</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Order Summary</h4>
                        <div className="mt-2 space-y-1 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Subtotal</span>
                            <span>${orderDetails.total.toFixed(2)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Delivery Fee</span>
                            <span>
                              {orderDetails.deliveryFee === 0 ? "Free" : `$${orderDetails.deliveryFee.toFixed(2)}`}
                            </span>
                          </div>
                          <div className="flex justify-between font-medium">
                            <span>Total</span>
                            <span>${(orderDetails.total + orderDetails.deliveryFee).toFixed(2)}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>

          <div>
            <div className="rounded-xl border bg-white p-6 shadow-sm">
              <h3 className="mb-4 font-semibold text-gray-900">Need Help?</h3>
              <div className="space-y-4">
                <div className="rounded-lg bg-gray-50 p-4">
                  <div className="flex items-center gap-2">
                    <User className="h-5 w-5 text-gray-600" />
                    <h4 className="font-medium text-gray-900">Contact Support</h4>
                  </div>
                  <p className="mt-1 text-sm text-gray-600">
                    Having issues with your order? Our customer support team is here to help.
                  </p>
                  <Button className="mt-3 w-full bg-green-600 hover:bg-green-700">Contact Support</Button>
                </div>
                <div className="rounded-lg bg-gray-50 p-4">
                  <div className="flex items-center gap-2">
                    <ShoppingBag className="h-5 w-5 text-gray-600" />
                    <h4 className="font-medium text-gray-900">Order Again</h4>
                  </div>
                  <p className="mt-1 text-sm text-gray-600">
                    Loved your order? Reorder the same items with just one click.
                  </p>
                  <Button variant="outline" className="mt-3 w-full">
                    Reorder Items
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
