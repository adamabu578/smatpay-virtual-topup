"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, Wifi } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function DataPage() {
  const [phoneNumber, setPhoneNumber] = useState("")
  const [network, setNetwork] = useState("")
  const [plan, setPlan] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log({ network, phoneNumber, plan })
  }

  const dataPlansByNetwork = {
    mtn: [
      { id: "mtn-1", name: "1GB - 1 Day", price: "300" },
      { id: "mtn-2", name: "2GB - 7 Days", price: "500" },
      { id: "mtn-3", name: "5GB - 30 Days", price: "1,500" },
      { id: "mtn-4", name: "10GB - 30 Days", price: "2,500" },
    ],
    airtel: [
      { id: "airtel-1", name: "1.5GB - 7 Days", price: "500" },
      { id: "airtel-2", name: "3GB - 30 Days", price: "1,000" },
      { id: "airtel-3", name: "6GB - 30 Days", price: "1,500" },
      { id: "airtel-4", name: "10GB - 30 Days", price: "2,500" },
    ],
    glo: [
      { id: "glo-1", name: "1GB - 1 Day", price: "200" },
      { id: "glo-2", name: "2GB - 14 Days", price: "500" },
      { id: "glo-3", name: "5.5GB - 30 Days", price: "1,000" },
      { id: "glo-4", name: "10GB - 30 Days", price: "2,000" },
    ],
    "9mobile": [
      { id: "9mobile-1", name: "1GB - 7 Days", price: "500" },
      { id: "9mobile-2", name: "2.5GB - 30 Days", price: "1,000" },
      { id: "9mobile-3", name: "4GB - 30 Days", price: "1,500" },
      { id: "9mobile-4", name: "11GB - 30 Days", price: "4,000" },
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
                <Wifi className="h-10 w-10 text-primary" />
              </div>
              <CardTitle className="text-center text-2xl">Data Bundle</CardTitle>
              <CardDescription className="text-center">Purchase data bundles for any network</CardDescription>
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

                {network && (
                  <div className="space-y-2">
                    <Label>Select Data Plan</Label>
                    <div className="grid grid-cols-1 gap-2">
                      {dataPlansByNetwork[network as keyof typeof dataPlansByNetwork]?.map((dataPlan) => (
                        <div
                          key={dataPlan.id}
                          className={`flex justify-between items-center p-3 border rounded-md cursor-pointer ${
                            plan === dataPlan.id ? "border-primary bg-primary/10" : "border-input"
                          }`}
                          onClick={() => setPlan(dataPlan.id)}
                        >
                          <div>
                            <p className="font-medium">{dataPlan.name}</p>
                          </div>
                          <div>
                            <p className="font-bold">₦{dataPlan.price}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <Button type="submit" className="w-full" disabled={!network || !phoneNumber || !plan}>
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
