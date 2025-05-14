"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, Tv } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function TvPage() {
  const [smartCardNumber, setSmartCardNumber] = useState("")
  const [provider, setProvider] = useState("")
  const [selectedPackage, setSelectedPackage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log({ provider, smartCardNumber, package: selectedPackage })
  }

  const packagesByProvider = {
    dstv: [
      { id: "dstv-1", name: "Access", price: "2,000" },
      { id: "dstv-2", name: "Family", price: "4,000" },
      { id: "dstv-3", name: "Compact", price: "9,000" },
      { id: "dstv-4", name: "Premium", price: "21,000" },
    ],
    gotv: [
      { id: "gotv-1", name: "Lite", price: "1,000" },
      { id: "gotv-2", name: "Value", price: "2,000" },
      { id: "gotv-3", name: "Plus", price: "3,500" },
      { id: "gotv-4", name: "Max", price: "4,850" },
    ],
    startimes: [
      { id: "startimes-1", name: "Nova", price: "900" },
      { id: "startimes-2", name: "Basic", price: "1,850" },
      { id: "startimes-3", name: "Smart", price: "2,600" },
      { id: "startimes-4", name: "Super", price: "4,900" },
    ],
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-md mx-auto">
        <Link href="/" className="inline-flex items-center text-sm mb-6 hover:text-primary">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Card>
            <CardHeader>
              <div className="flex justify-center mb-4">
                <Tv className="h-10 w-10 text-primary" />
              </div>
              <CardTitle className="text-center text-2xl">TV Subscription</CardTitle>
              <CardDescription className="text-center">Renew your TV subscription</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="provider">Select Provider</Label>
                  <Select value={provider} onValueChange={setProvider} required>
                    <SelectTrigger id="provider">
                      <SelectValue placeholder="Select TV provider" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dstv">DSTV</SelectItem>
                      <SelectItem value="gotv">GOTV</SelectItem>
                      <SelectItem value="startimes">StarTimes</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="smart-card">Smart Card / IUC Number</Label>
                  <Input
                    id="smart-card"
                    type="text"
                    placeholder="Enter smart card number"
                    value={smartCardNumber}
                    onChange={(e) => setSmartCardNumber(e.target.value)}
                    required
                  />
                </div>

                {provider && (
                  <div className="space-y-2">
                    <Label>Select Package</Label>
                    <div className="grid grid-cols-1 gap-2">
                      {packagesByProvider[provider as keyof typeof packagesByProvider]?.map((pkg) => (
                        <div
                          key={pkg.id}
                          className={`flex justify-between items-center p-3 border rounded-md cursor-pointer ${
                            selectedPackage === pkg.id ? "border-primary bg-primary/10" : "border-input"
                          }`}
                          onClick={() => setSelectedPackage(pkg.id)}
                        >
                          <div>
                            <p className="font-medium">{pkg.name}</p>
                          </div>
                          <div>
                            <p className="font-bold">₦{pkg.price}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <Button type="submit" className="w-full" disabled={!provider || !smartCardNumber || !selectedPackage}>
                  Proceed to Payment
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
