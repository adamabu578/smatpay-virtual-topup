"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, Airplay } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AirtimePage() {
  const [amount, setAmount] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [network, setNetwork] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log({ network, phoneNumber, amount })
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
                <Airplay className="h-10 w-10 text-primary" />
              </div>
              <CardTitle className="text-center text-2xl">Airtime Purchase</CardTitle>
              <CardDescription className="text-center">Buy airtime for any network provider</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="network">Select Network</Label>
                  <Select value={network} onValueChange={setNetwork} required>
                    <SelectTrigger id="network">
                      <SelectValue placeholder="Select network provider" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mtn">MTN</SelectItem>
                      <SelectItem value="airtel">Airtel</SelectItem>
                      <SelectItem value="glo">Glo</SelectItem>
                      <SelectItem value="9mobile">9Mobile</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter phone number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label>Amount</Label>
                  <RadioGroup className="grid grid-cols-2 gap-2">
                    {["100", "200", "500", "1000"].map((value) => (
                      <div key={value} className="flex items-center">
                        <RadioGroupItem
                          value={value}
                          id={`amount-${value}`}
                          checked={amount === value}
                          onClick={() => setAmount(value)}
                          className="peer sr-only"
                        />
                        <Label
                          htmlFor={`amount-${value}`}
                          className="flex flex-1 cursor-pointer items-center justify-center rounded-md border border-input bg-background p-3 text-center peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/10"
                        >
                          ₦{value}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="custom-amount">Custom Amount</Label>
                  <Input
                    id="custom-amount"
                    type="number"
                    placeholder="Enter custom amount"
                    value={amount.match(/^(100|200|500|1000)$/) ? "" : amount}
                    onChange={(e) => setAmount(e.target.value)}
                    min="50"
                  />
                </div>

                <Button type="submit" className="w-full">
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
