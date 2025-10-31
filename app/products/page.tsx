"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ChevronDown, Filter, Search, SlidersHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ProductCard } from "@/components/product-card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState([0, 10])
  const [sortOption, setSortOption] = useState("featured")
  const [showFilters, setShowFilters] = useState(false)

  // This would normally come from a database or API
  const products = [
    {
      id: 1,
      name: "Fresh Organic Apples",
      price: 2.99,
      unit: "500g",
      discount: 10,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      category: "Fruits",
      bgColor: "bg-red-50",
    },
    {
      id: 2,
      name: "Organic Bananas",
      price: 1.99,
      unit: "1kg",
      discount: 0,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1603833665858-e61d17a86224?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80",
      category: "Fruits",
      bgColor: "bg-yellow-50",
    },
    {
      id: 3,
      name: "Red Tomatoes",
      price: 3.49,
      unit: "500g",
      discount: 15,
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1607305387299-a3d9611cd469?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      category: "Vegetables",
      bgColor: "bg-red-50",
    },
    {
      id: 4,
      name: "Green Spinach",
      price: 1.79,
      unit: "250g",
      discount: 0,
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      category: "Vegetables",
      bgColor: "bg-green-50",
    },
    {
      id: 5,
      name: "Fresh Oranges",
      price: 4.99,
      unit: "1kg",
      discount: 5,
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      category: "Citrus",
      bgColor: "bg-orange-50",
    },
    {
      id: 6,
      name: "Avocados",
      price: 6.99,
      unit: "2pcs",
      discount: 0,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1519162808019-7de1683fa2ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80",
      category: "Fruits",
      bgColor: "bg-green-50",
    },
    {
      id: 7,
      name: "Carrots",
      price: 1.49,
      unit: "500g",
      discount: 0,
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      category: "Vegetables",
      bgColor: "bg-orange-50",
    },
    {
      id: 8,
      name: "Strawberries",
      price: 3.99,
      unit: "250g",
      discount: 10,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      category: "Fruits",
      bgColor: "bg-red-50",
    },
    {
      id: 9,
      name: "Broccoli",
      price: 2.49,
      unit: "1pc",
      discount: 0,
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      category: "Vegetables",
      bgColor: "bg-green-50",
    },
    {
      id: 10,
      name: "Grapes",
      price: 5.99,
      unit: "500g",
      discount: 5,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1537640538966-79f369143f8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1773&q=80",
      category: "Fruits",
      bgColor: "bg-purple-50",
    },
    {
      id: 11,
      name: "Bell Peppers",
      price: 3.29,
      unit: "3pcs",
      discount: 0,
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      category: "Vegetables",
      bgColor: "bg-red-50",
    },
    {
      id: 12,
      name: "Kiwi",
      price: 4.49,
      unit: "4pcs",
      discount: 10,
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
      category: "Fruits",
      bgColor: "bg-green-50",
    },
    {
      id: 13,
      name: "Cauliflower",
      price: 2.99,
      unit: "1pc",
      discount: 0,
      rating: 4.4,
      image:
        "https://images.unsplash.com/photo-1613743983303-b3e89f8a2b80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      category: "Vegetables",
      bgColor: "bg-gray-50",
    },
    {
      id: 14,
      name: "Pineapple",
      price: 3.99,
      unit: "1pc",
      discount: 15,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      category: "Fruits",
      bgColor: "bg-yellow-50",
    },
    {
      id: 15,
      name: "Cucumber",
      price: 1.29,
      unit: "2pcs",
      discount: 0,
      rating: 4.3,
      image:
        "https://images.unsplash.com/photo-1604977042946-1eecc30f269e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      category: "Vegetables",
      bgColor: "bg-green-50",
    },
    {
      id: 16,
      name: "Dragon Fruit",
      price: 7.99,
      unit: "1pc",
      discount: 0,
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1527325678964-54921661f888?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80",
      category: "Exotic",
      bgColor: "bg-pink-50",
    },
  ]

  const categories = ["Fruits", "Vegetables", "Citrus", "Exotic", "Organic", "Seasonal"]

  // Filter products based on search query, categories, and price range
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category)
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]
    return matchesSearch && matchesCategory && matchesPrice
  })

  // Sort products based on selected option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case "price-low-high":
        return a.price - b.price
      case "price-high-low":
        return b.price - a.price
      case "rating":
        return b.rating - a.rating
      case "discount":
        return b.discount - a.discount
      default:
        return 0 // featured - no specific sort
    }
  })

  const toggleCategory = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category))
    } else {
      setSelectedCategories([...selectedCategories, category])
    }
  }

  const clearFilters = () => {
    setSelectedCategories([])
    setPriceRange([0, 10])
    setSearchQuery("")
  }

  return (
    <div className="container mx-auto px-4 py-8 md:px-6 md:py-12">
      <Link href="/" className="mb-6 inline-flex items-center text-sm font-medium text-gray-600 hover:text-green-600">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Home
      </Link>

      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">All Products</h1>
        <p className="mt-2 text-gray-600">Browse our wide selection of fresh fruits and vegetables</p>
      </div>

      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
          <Input
            type="search"
            placeholder="Search products..."
            className="pl-9"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="sm:hidden" onClick={() => setShowFilters(!showFilters)}>
            <Filter className="mr-2 h-4 w-4" />
            Filters
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                <SlidersHorizontal className="mr-2 h-4 w-4" />
                Sort by: {sortOption === "featured" ? "Featured" : sortOption.replace(/-/g, " ")}
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setSortOption("featured")}>Featured</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSortOption("price-low-high")}>Price: Low to High</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSortOption("price-high-low")}>Price: High to Low</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSortOption("rating")}>Highest Rated</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSortOption("discount")}>Biggest Discount</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        {/* Filters - Desktop */}
        <div className="hidden rounded-xl border bg-white p-6 md:block">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-semibold text-gray-900">Filters</h2>
            <Button variant="ghost" size="sm" onClick={clearFilters} className="h-8 text-sm">
              Clear all
            </Button>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="mb-3 font-medium text-gray-900">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <div key={category} className="flex items-center">
                    <Checkbox
                      id={`category-${category}`}
                      checked={selectedCategories.includes(category)}
                      onCheckedChange={() => toggleCategory(category)}
                    />
                    <label htmlFor={`category-${category}`} className="ml-2 text-sm text-gray-600">
                      {category}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="mb-3 font-medium text-gray-900">Price Range</h3>
              <div className="px-2">
                <Slider
                  defaultValue={[0, 10]}
                  min={0}
                  max={10}
                  step={0.5}
                  value={priceRange}
                  onValueChange={setPriceRange}
                />
                <div className="mt-2 flex items-center justify-between text-sm text-gray-600">
                  <span>${priceRange[0].toFixed(2)}</span>
                  <span>${priceRange[1].toFixed(2)}</span>
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="mb-3 font-medium text-gray-900">Availability</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Checkbox id="in-stock" defaultChecked />
                  <label htmlFor="in-stock" className="ml-2 text-sm text-gray-600">
                    In Stock
                  </label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="discount-only" />
                  <label htmlFor="discount-only" className="ml-2 text-sm text-gray-600">
                    Discount Only
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Filters - Mobile */}
        {showFilters && (
          <div className="mb-4 rounded-xl border bg-white p-4 md:hidden">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="categories">
                <AccordionTrigger>Categories</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div key={category} className="flex items-center">
                        <Checkbox
                          id={`mobile-category-${category}`}
                          checked={selectedCategories.includes(category)}
                          onCheckedChange={() => toggleCategory(category)}
                        />
                        <label htmlFor={`mobile-category-${category}`} className="ml-2 text-sm text-gray-600">
                          {category}
                        </label>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="price">
                <AccordionTrigger>Price Range</AccordionTrigger>
                <AccordionContent>
                  <div className="px-2">
                    <Slider
                      defaultValue={[0, 10]}
                      min={0}
                      max={10}
                      step={0.5}
                      value={priceRange}
                      onValueChange={setPriceRange}
                    />
                    <div className="mt-2 flex items-center justify-between text-sm text-gray-600">
                      <span>${priceRange[0].toFixed(2)}</span>
                      <span>${priceRange[1].toFixed(2)}</span>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="availability">
                <AccordionTrigger>Availability</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Checkbox id="mobile-in-stock" defaultChecked />
                      <label htmlFor="mobile-in-stock" className="ml-2 text-sm text-gray-600">
                        In Stock
                      </label>
                    </div>
                    <div className="flex items-center">
                      <Checkbox id="mobile-discount-only" />
                      <label htmlFor="mobile-discount-only" className="ml-2 text-sm text-gray-600">
                        Discount Only
                      </label>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <div className="mt-4 flex justify-end">
              <Button variant="outline" size="sm" onClick={clearFilters}>
                Clear all filters
              </Button>
            </div>
          </div>
        )}

        {/* Product Grid */}
        <div className="md:col-span-3">
          {/* Active filters */}
          {(selectedCategories.length > 0 || searchQuery || priceRange[0] > 0 || priceRange[1] < 10) && (
            <div className="mb-4 flex flex-wrap gap-2">
              {selectedCategories.map((category) => (
                <Badge key={category} variant="secondary" className="flex items-center gap-1">
                  {category}
                  <button
                    onClick={() => toggleCategory(category)}
                    className="ml-1 rounded-full p-0.5 hover:bg-gray-200"
                  >
                    ✕
                  </button>
                </Badge>
              ))}
              {searchQuery && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  Search: {searchQuery}
                  <button onClick={() => setSearchQuery("")} className="ml-1 rounded-full p-0.5 hover:bg-gray-200">
                    ✕
                  </button>
                </Badge>
              )}
              {(priceRange[0] > 0 || priceRange[1] < 10) && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  Price: ${priceRange[0].toFixed(2)} - ${priceRange[1].toFixed(2)}
                  <button onClick={() => setPriceRange([0, 10])} className="ml-1 rounded-full p-0.5 hover:bg-gray-200">
                    ✕
                  </button>
                </Badge>
              )}
              <Button variant="ghost" size="sm" onClick={clearFilters} className="h-7 text-xs">
                Clear all
              </Button>
            </div>
          )}

          {sortedProducts.length === 0 ? (
            <div className="flex h-64 flex-col items-center justify-center rounded-xl border bg-white p-6 text-center">
              <Search className="mb-2 h-12 w-12 text-gray-300" />
              <h2 className="text-xl font-semibold text-gray-900">No products found</h2>
              <p className="mt-1 text-gray-600">Try adjusting your search or filter criteria</p>
              <Button variant="outline" className="mt-4" onClick={clearFilters}>
                Clear all filters
              </Button>
            </div>
          ) : (
            <>
              <p className="mb-4 text-sm text-gray-600">{sortedProducts.length} products found</p>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {sortedProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    image={product.image}
                    name={product.name}
                    price={product.price}
                    unit={product.unit}
                    discount={product.discount}
                    rating={product.rating}
                    bgColor={product.bgColor}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
