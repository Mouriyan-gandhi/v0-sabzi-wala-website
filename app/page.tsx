import Link from "next/link"
import Image from "next/image"
import {
  Apple,
  ArrowRight,
  Clock,
  Leaf,
  MapPin,
  Search,
  ShoppingBag,
  Star,
  Truck,
  Shield,
  ThumbsUp,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CategoryCard } from "@/components/category-card"
import { ProductCard } from "@/components/product-card"
import { FeatureCard } from "@/components/feature-card"
import { QualityPromise } from "@/components/quality-promise"
import { TestimonialCard } from "@/components/testimonial-card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Leaf className="h-6 w-6 text-green-600" />
              <span className="text-xl font-bold text-green-600">Sabzi Wala</span>
            </Link>
            <div className="ml-4 hidden items-center gap-2 md:flex">
              <MapPin className="h-4 w-4 text-gray-500" />
              <span className="text-sm font-medium">Deliver to: Home</span>
            </div>
          </div>
          <div className="relative hidden w-full max-w-sm md:flex">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              type="search"
              placeholder="Search for fruits, vegetables..."
              className="w-full rounded-full bg-gray-100 pl-8 pr-4"
            />
          </div>
          <div className="flex items-center gap-4">
            <Link href="/track-order">
              <Button variant="ghost" size="sm" className="hidden md:inline-flex">
                Track Order
              </Button>
            </Link>
            <Link href="/cart">
              <Button variant="outline" size="icon" className="relative">
                <ShoppingBag className="h-5 w-5" />
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-600 text-xs font-medium text-white">
                  3
                </span>
              </Button>
            </Link>
            <Link href="/account">
              <Button className="hidden bg-green-600 hover:bg-green-700 md:inline-flex">My Account</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative overflow-hidden py-12 md:py-16">
          {/* Colorful background with fruits and vegetables */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Colorful fruits and vegetables background"
              fill
              className="object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/30 to-yellow-500/30"></div>
          </div>

          {/* Decorative fruit elements */}
          <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-red-400 opacity-20"></div>
          <div className="absolute -right-10 top-20 h-32 w-32 rounded-full bg-yellow-400 opacity-20"></div>
          <div className="absolute bottom-20 right-10 h-24 w-24 rounded-full bg-green-400 opacity-20"></div>
          <div className="absolute left-1/4 top-10 h-16 w-16 rounded-full bg-orange-400 opacity-20"></div>

          <div className="container relative z-10 px-4 md:px-6">
            <div className="grid gap-6 md:grid-cols-2 md:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter text-green-900 sm:text-4xl md:text-5xl">
                    Fresh Fruits & Vegetables Delivered in 15 Minutes
                  </h1>
                  <p className="max-w-[600px] text-green-800 md:text-xl">
                    Order farm-fresh produce and get it delivered to your doorstep in just 15 minutes.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/products">
                    <Button className="bg-green-600 hover:bg-green-700">Shop Now</Button>
                  </Link>
                  <Link href="/quality-promise">
                    <Button variant="outline" className="border-green-700 text-green-700 hover:bg-green-100">
                      Our Quality Promise
                    </Button>
                  </Link>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Clock className="h-5 w-5 text-green-700" />
                    <span className="text-sm font-medium text-green-800">15 Min Delivery</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-5 w-5 text-yellow-600" />
                    <span className="text-sm font-medium text-green-800">4.8/5 Rating</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Truck className="h-5 w-5 text-green-700" />
                    <span className="text-sm font-medium text-green-800">Free Delivery</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[300px] w-[300px] md:h-[400px] md:w-[400px]">
                  <div className="absolute left-0 top-0 h-full w-full rounded-full bg-gradient-to-br from-green-200 to-yellow-200 opacity-70"></div>
                  <div className="relative z-10 h-full w-full">
                    {/* Fruit arrangement */}
                    <Image
                      src="https://images.unsplash.com/photo-1619566636858-adf3ef46400b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                      alt="Fresh fruits arrangement"
                      width={200}
                      height={200}
                      className="absolute -right-10 -top-10 h-40 w-40 rounded-full object-cover shadow-lg"
                    />
                    <Image
                      src="https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80"
                      alt="Fresh vegetables"
                      width={180}
                      height={180}
                      className="absolute -bottom-5 left-0 h-48 w-48 rounded-full object-cover shadow-lg"
                    />
                    <Image
                      src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                      alt="Colorful produce"
                      width={160}
                      height={160}
                      className="absolute bottom-20 right-0 h-44 w-44 rounded-full object-cover shadow-lg"
                    />
                    <Image
                      src="https://images.unsplash.com/photo-1519162808019-7de1683fa2ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80"
                      alt="Avocados"
                      width={120}
                      height={120}
                      className="absolute left-20 top-10 h-32 w-32 rounded-full object-cover shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-green-800 md:text-3xl">Categories</h2>
                <p className="text-gray-600">Explore our wide range of fresh produce</p>
              </div>
              <Link
                href="/categories"
                className="flex items-center gap-1 text-sm font-medium text-green-600 hover:underline"
              >
                View All Categories <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              <CategoryCard
                icon={<Apple className="h-8 w-8 text-red-500" />}
                name="Fruits"
                bgColor="bg-gradient-to-br from-red-100 to-red-200"
                textColor="text-red-800"
                image="https://images.unsplash.com/photo-1619566636858-adf3ef46400b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
              />
              <CategoryCard
                icon={<Leaf className="h-8 w-8 text-green-500" />}
                name="Vegetables"
                bgColor="bg-gradient-to-br from-green-100 to-green-200"
                textColor="text-green-800"
                image="https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80"
              />
              <CategoryCard
                icon={<Apple className="h-8 w-8 text-orange-500" />}
                name="Citrus"
                bgColor="bg-gradient-to-br from-orange-100 to-orange-200"
                textColor="text-orange-800"
                image="https://images.unsplash.com/photo-1611080626919-7cf5a9dbab12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
              />
              <CategoryCard
                icon={<Leaf className="h-8 w-8 text-purple-500" />}
                name="Exotic"
                bgColor="bg-gradient-to-br from-purple-100 to-purple-200"
                textColor="text-purple-800"
                image="https://images.unsplash.com/photo-1604977042946-1eecc30f269e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
              />
              <CategoryCard
                icon={<Apple className="h-8 w-8 text-yellow-500" />}
                name="Seasonal"
                bgColor="bg-gradient-to-br from-yellow-100 to-yellow-200"
                textColor="text-yellow-800"
                image="https://images.unsplash.com/photo-1528825871115-3581a5387919?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
              />
              <CategoryCard
                icon={<Leaf className="h-8 w-8 text-blue-500" />}
                name="Organic"
                bgColor="bg-gradient-to-br from-blue-100 to-blue-200"
                textColor="text-blue-800"
                image="https://images.unsplash.com/photo-1607305387299-a3d9611cd469?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
              />
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-green-800 md:text-3xl">Popular Items</h2>
                <p className="text-gray-600">Most loved products by our customers</p>
              </div>
              <Link
                href="/products"
                className="flex items-center gap-1 text-sm font-medium text-green-600 hover:underline"
              >
                View All Products <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              <ProductCard
                image="https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                name="Fresh Apples"
                price={2.99}
                unit="500g"
                discount={10}
                rating={4.8}
                bgColor="bg-red-50"
              />
              <ProductCard
                image="https://images.unsplash.com/photo-1603833665858-e61d17a86224?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80"
                name="Organic Bananas"
                price={1.99}
                unit="1kg"
                discount={0}
                rating={4.7}
                bgColor="bg-yellow-50"
              />
              <ProductCard
                image="https://images.unsplash.com/photo-1607305387299-a3d9611cd469?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                name="Red Tomatoes"
                price={3.49}
                unit="500g"
                discount={15}
                rating={4.5}
                bgColor="bg-red-50"
              />
              <ProductCard
                image="https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                name="Green Spinach"
                price={1.79}
                unit="250g"
                discount={0}
                rating={4.6}
                bgColor="bg-green-50"
              />
              <ProductCard
                image="https://images.unsplash.com/photo-1611080626919-7cf5a9dbab12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                name="Fresh Oranges"
                price={4.99}
                unit="1kg"
                discount={5}
                rating={4.9}
                bgColor="bg-orange-50"
              />
              <ProductCard
                image="https://images.unsplash.com/photo-1519162808019-7de1683fa2ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80"
                name="Avocados"
                price={6.99}
                unit="2pcs"
                discount={0}
                rating={4.7}
                bgColor="bg-green-50"
              />
              <ProductCard
                image="https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                name="Carrots"
                price={1.49}
                unit="500g"
                discount={0}
                rating={4.5}
                bgColor="bg-orange-50"
              />
              <ProductCard
                image="https://images.unsplash.com/photo-1464965911861-746a04b4bca6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                name="Strawberries"
                price={3.99}
                unit="250g"
                discount={10}
                rating={4.8}
                bgColor="bg-red-50"
              />
              <ProductCard
                image="https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                name="Broccoli"
                price={2.49}
                unit="1pc"
                discount={0}
                rating={4.6}
                bgColor="bg-green-50"
              />
              <ProductCard
                image="https://images.unsplash.com/photo-1537640538966-79f369143f8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1773&q=80"
                name="Grapes"
                price={5.99}
                unit="500g"
                discount={5}
                rating={4.7}
                bgColor="bg-purple-50"
              />
            </div>
          </div>
        </section>
        <QualityPromise />
        <section className="bg-gradient-to-r from-green-50 to-yellow-50 py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold tracking-tight text-green-800 md:text-3xl">Why Choose Sabzi Wala?</h2>
              <p className="mx-auto mt-2 max-w-[600px] text-gray-600">
                We're committed to delivering the freshest produce right to your doorstep
              </p>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <FeatureCard
                icon={<Clock className="h-10 w-10 text-green-600" />}
                title="15-Minute Delivery"
                description="Get your fresh produce delivered in just 15 minutes or less"
                color="bg-gradient-to-br from-green-100 to-green-200"
              />
              <FeatureCard
                icon={<Shield className="h-10 w-10 text-red-600" />}
                title="Quality Guarantee"
                description="Not satisfied with quality? Get instant refund or replacement"
                color="bg-gradient-to-br from-red-100 to-red-200"
              />
              <FeatureCard
                icon={<ThumbsUp className="h-10 w-10 text-yellow-600" />}
                title="Multiple Payment Options"
                description="Pay online or choose cash on delivery - your choice!"
                color="bg-gradient-to-br from-yellow-100 to-yellow-200"
              />
              <FeatureCard
                icon={<Truck className="h-10 w-10 text-blue-600" />}
                title="Order Tracking"
                description="Track your order in real-time from our store to your door"
                color="bg-gradient-to-br from-blue-100 to-blue-200"
              />
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold tracking-tight text-green-800 md:text-3xl">What Our Customers Say</h2>
              <p className="mx-auto mt-2 max-w-[600px] text-gray-600">
                Don't just take our word for it - hear from our happy customers
              </p>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <TestimonialCard
                name="Priya Sharma"
                image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                rating={5}
                text="The quality of fruits and vegetables is exceptional! I've been ordering for 3 months now and have never been disappointed. The 15-minute delivery is a game-changer for my busy schedule."
                date="2 weeks ago"
                color="bg-gradient-to-br from-green-50 to-green-100"
              />
              <TestimonialCard
                name="Rahul Patel"
                image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                rating={4}
                text="I love the variety of organic options available. The order tracking feature is very helpful, and the produce is always fresh. Just wish they had more exotic fruits in stock."
                date="1 month ago"
                color="bg-gradient-to-br from-orange-50 to-orange-100"
              />
              <TestimonialCard
                name="Ananya Gupta"
                image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                rating={5}
                text="The quality assurance is no joke! Once I received slightly bruised apples, and they replaced them within an hour. The cash on delivery option is very convenient. Highly recommend!"
                date="3 days ago"
                color="bg-gradient-to-br from-purple-50 to-purple-100"
              />
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-white py-8 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-2">
                <Leaf className="h-6 w-6 text-green-600" />
                <span className="text-xl font-bold text-green-600">Sabzi Wala</span>
              </div>
              <p className="mt-2 text-sm text-gray-600">
                Your neighborhood's 15-minute delivery service for fresh fruits and vegetables.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="mt-2 space-y-2 text-sm">
                <li>
                  <Link href="/about" className="text-gray-600 hover:text-green-600">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-600 hover:text-green-600">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/faqs" className="text-gray-600 hover:text-green-600">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="/track-order" className="text-gray-600 hover:text-green-600">
                    Track Your Order
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Categories</h3>
              <ul className="mt-2 space-y-2 text-sm">
                <li>
                  <Link href="/category/fruits" className="text-gray-600 hover:text-green-600">
                    Fruits
                  </Link>
                </li>
                <li>
                  <Link href="/category/vegetables" className="text-gray-600 hover:text-green-600">
                    Vegetables
                  </Link>
                </li>
                <li>
                  <Link href="/category/organic" className="text-gray-600 hover:text-green-600">
                    Organic
                  </Link>
                </li>
                <li>
                  <Link href="/category/exotic" className="text-gray-600 hover:text-green-600">
                    Exotic
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Contact Us</h3>
              <ul className="mt-2 space-y-2 text-sm">
                <li className="text-gray-600">Email: support@sabziwala.com</li>
                <li className="text-gray-600">Phone: +91 9876543210</li>
                <li className="text-gray-600">Address: 123 Fresh Street, Mumbai, India</li>
              </ul>
              <div className="mt-4 flex gap-4">
                <Link href="#" className="text-gray-600 hover:text-green-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </Link>
                <Link href="#" className="text-gray-600 hover:text-green-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </Link>
                <Link href="#" className="text-gray-600 hover:text-green-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7-1.1-2.4-1.1c-1.4 0-2.9.9-3.6 2.4-1.6 2.6-1.7 5.8.2 8.5 0 0 1.4 1.6 4.5 1.6 1.4 0 2.9-.3 4.3-1.1-1.1 1.9-2.4 3.7-3.6 5.4-2.4 1.7-4 2.5-6.1 2.5-4.1 0-7.4-3.2-7.4-7s3.3-7 7.4-7c1.4 0 2.6.3 3.6.9"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-gray-600">
            <p>© {new Date().getFullYear()} Sabzi Wala. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
