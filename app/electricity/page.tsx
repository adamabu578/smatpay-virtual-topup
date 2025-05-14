"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, Bolt } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ElectricityPage() {
  const [meterNumber, setMeterNumber] = useState("")
  const [provider, setProvider] = useState("")
  const [amount, setAmount] = useState("")
  const [meterType, setMeterType] = useState("prepaid")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log({ provider, meterNumber, amount, meterType })
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
                <Bolt className="h-10 w-10 text-primary" />
              </div>
              <CardTitle className="text-center text-2xl">Electricity Bill</CardTitle>
              <CardDescription className="text-center">Pay your electricity bills easily</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="provider">Select Provider</Label>
                  <Select value={provider} onValueChange={setProvider} required>
                    <SelectTrigger id="provider">
                      <SelectValue placeholder="Select electricity provider" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ekedc">Eko Electric (EKEDC)</SelectItem>
                      <SelectItem value="ikedc">Ikeja Electric (IKEDC)</SelectItem>
                      <SelectItem value="aedc">Abuja Electric (AEDC)</SelectItem>
                      <SelectItem value="phedc">Port Harcourt Electric (PHEDC)</SelectItem>
                      <SelectItem value="kedco">Kano Electric (KEDCO)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="meter-type">Meter Type</Label>
                  <Select value={meterType} onValueChange={setMeterType} required>
                    <SelectTrigger id="meter-type">
                      <SelectValue placeholder="Select meter type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="prepaid">Prepaid</SelectItem>
                      <SelectItem value="postpaid">Postpaid</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="meter-number">Meter Number</Label>
                  <Input
                    id="meter-number"
                    type="text"
                    placeholder="Enter meter number"
                    value={meterNumber}
                    onChange={(e) => setMeterNumber(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="amount">Amount</Label>
                  <Input
                    id="amount"
                    type="number"
                    placeholder="Enter amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    min="500"
                    required
                  />
                  <p className="text-xs text-muted-foreground">Minimum amount: ₦500</p>
                </div>

                <Button type="submit" className="w-full">
                  Verify & Proceed
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
