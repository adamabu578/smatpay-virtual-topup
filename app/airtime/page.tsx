// "use client"

// import type React from "react"

// import { useState } from "react"
// import { motion } from "framer-motion"
// import { ArrowLeft, Airplay } from "lucide-react"
// import Link from "next/link"

// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// export default function AirtimePage() {
//   const [amount, setAmount] = useState("")
//   const [phoneNumber, setPhoneNumber] = useState("")
//   const [network, setNetwork] = useState("")

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     // Handle form submission
//     console.log({ network, phoneNumber, amount })
//   }

//   return (
//     <div className="container mx-auto px-4 py-12">
//       <div className="max-w-md mx-auto">
//         <Link href="/" className="inline-flex items-center text-sm mb-6 hover:text-primary">
//           <ArrowLeft className="mr-2 h-4 w-4" />
//           Back to Home
//         </Link>

//         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
//           <Card className="bg-purple-950">
//             <CardHeader>
//               <div className="flex justify-center mb-4">
//                 <Airplay className="h-10 w-10 text-primary" />
//               </div>
//               <CardTitle className="text-center text-2xl text-white">Airtime Purchase</CardTitle>
//               <CardDescription className="text-center text-white">Buy airtime for any network provider</CardDescription>
//             </CardHeader>
//             <CardContent>
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="space-y-2">
//                   <Label htmlFor="network">Select Network</Label>
//                   <Select value={network} onValueChange={setNetwork} required>
//                     <SelectTrigger id="network">
//                       <SelectValue placeholder="Select network provider" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="mtn">MTN</SelectItem>
//                       <SelectItem value="airtel">Airtel</SelectItem>
//                       <SelectItem value="glo">Glo</SelectItem>
//                       <SelectItem value="9mobile">9Mobile</SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </div>

//                 <div className="space-y-2">
//                   <Label htmlFor="phone">Phone Number</Label>
//                   <Input
//                     id="phone"
//                     type="tel"
//                     placeholder="Enter phone number"
//                     value={phoneNumber}
//                     onChange={(e) => setPhoneNumber(e.target.value)}
//                     required
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <Label>Amount</Label>
//                   <RadioGroup className="grid grid-cols-2 gap-2">
//                     {["100", "200", "500", "1000"].map((value) => (
//                       <div key={value} className="flex items-center">
//                         <RadioGroupItem
//                           value={value}
//                           id={`amount-${value}`}
//                           checked={amount === value}
//                           onClick={() => setAmount(value)}
//                           className="peer sr-only"
//                         />
//                         <Label
//                           htmlFor={`amount-${value}`}
//                           className="flex flex-1 cursor-pointer items-center justify-center rounded-md border border-input bg-background p-3 text-center peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/10"
//                         >
//                           ₦{value}
//                         </Label>
//                       </div>
//                     ))}
//                   </RadioGroup>
//                 </div>

//                 <div className="space-y-2">
//                   <Label htmlFor="custom-amount">Custom Amount</Label>
//                   <Input
//                     id="custom-amount"
//                     type="number"
//                     placeholder="Enter custom amount"
//                     value={amount.match(/^(100|200|500|1000)$/) ? "" : amount}
//                     onChange={(e) => setAmount(e.target.value)}
//                     min="50"
//                   />
//                 </div>

//                 <Button type="submit" className="w-full">
//                   Proceed to Payment
//                 </Button>
//               </form>
//             </CardContent>
//           </Card>
//         </motion.div>
//       </div>
//     </div>
//   )
// }


"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, Airplay, CheckCircle, CreditCard } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function AirtimePage() {
  const [amount, setAmount] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [network, setNetwork] = useState("")
  const [currentStep, setCurrentStep] = useState("airtime") // "airtime", "payment", "success"
  
  // Network providers with images
  const networkProviders = [
    { 
      id: "mtn", 
      name: "MTN",
      logo: "/assets/mtn.png",
      bgColor: "bg-yellow-400"
    },
    { 
      id: "airtel", 
      name: "Airtel",
      logo: "/assets/Airtel-icon.png",
      bgColor: "bg-red-500"
    },
    { 
      id: "glo", 
      name: "Glo",
      logo: "/assets/glo-icon1.png",
      // bgColor: "bg-green-500"
    },
    { 
      id: "9mobile", 
      name: "9Mobile",
      logo: "/assets/etisalat.png",
      bgColor: "bg-black"
    }
  ]
  
  // Payment methods
  const paymentMethods = [
    { id: "card", name: "Credit/Debit Card", icon: CreditCard },
    { id: "bank", name: "Bank Transfer", icon: Airplay },
    { id: "ussd", name: "USSD", icon: Airplay }
  ]
  
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setCurrentStep("payment")
  }
  
  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setCurrentStep("success")
  }
  
  const handleBackToHome = () => {
    setCurrentStep("airtime")
    setNetwork("")
    setPhoneNumber("")
    setAmount("")
    setSelectedPaymentMethod("")
  }

  const renderAirtimeForm = () => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="bg-purple-950">
        <CardHeader>
          <div className="flex justify-center mb-4">
            <Airplay className="h-10 w-10 text-primary" />
          </div>
          <CardTitle className="text-center text-2xl text-white">Airtime Purchase</CardTitle>
          <CardDescription className="text-center text-white">Buy airtime for any network provider</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="network" className="text-white">Select Network</Label>
              <div className="grid grid-cols-4 gap-2">
                {networkProviders.map((provider) => (
                  <div 
                    key={provider.id}
                    className={`cursor-pointer flex flex-col items-center p-3 rounded-md border-2 transition-all
                      ${network === provider.id ? 'border-primary bg-primary/20' : 'border-gray-600'}`}
                    onClick={() => setNetwork(provider.id)}
                  >
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-2 overflow-hidden ${provider.bgColor}`}>
                      <img 
                        src={provider.logo}
                        alt={`${provider.name} logo`}
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                    <span className="text-xs text-white text-center">{provider.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-white">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Enter phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
                className="bg-purple-900 text-white border-gray-600"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-white">Amount</Label>
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
                      className="flex flex-1 cursor-pointer items-center justify-center rounded-md border border-gray-600 bg-purple-900 p-3 text-center text-white
                        peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/10"
                    >
                      ₦{value}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="custom-amount" className="text-white">Custom Amount</Label>
              <Input
                id="custom-amount"
                type="number"
                placeholder="Enter custom amount"
                value={amount.match(/^(100|200|500|1000)$/) ? "" : amount}
                onChange={(e) => setAmount(e.target.value)}
                min="50"
                className="bg-purple-900 text-white border-gray-600"
              />
            </div>

            <Button 
              type="submit" 
              className="w-full"
              disabled={!network || !phoneNumber || !amount}
            >
              Proceed to Payment
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  )
  
  const renderPaymentMethodsForm = () => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="bg-purple-950">
        <CardHeader>
          <div className="flex justify-center mb-4">
            <CreditCard className="h-10 w-10 text-primary" />
          </div>
          <CardTitle className="text-center text-2xl text-white">Payment Method</CardTitle>
          <CardDescription className="text-center text-white">
            Select your preferred payment method
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handlePaymentSubmit} className="space-y-6">
            <div className="space-y-4">
              {paymentMethods.map((method) => (
                <div 
                  key={method.id}
                  className={`flex items-center p-4 rounded-md border-2 cursor-pointer transition-all
                    ${selectedPaymentMethod === method.id ? 'border-primary bg-primary/20' : 'border-gray-600'}`}
                  onClick={() => setSelectedPaymentMethod(method.id)}
                >
                  <method.icon className="h-6 w-6 mr-3 text-white" />
                  <span className="text-white">{method.name}</span>
                </div>
              ))}
            </div>
            
            <div className="py-4 border-t border-gray-600">
              <div className="flex justify-between text-white mb-2">
                <span>Network:</span>
                <span className="font-medium">{networkProviders.find(p => p.id === network)?.name}</span>
              </div>
              <div className="flex justify-between text-white mb-2">
                <span>Phone Number:</span>
                <span className="font-medium">{phoneNumber}</span>
              </div>
              <div className="flex justify-between text-white">
                <span>Amount:</span>
                <span className="font-medium">₦{amount}</span>
              </div>
            </div>

            <div className="flex gap-3">
              <Button 
                type="button" 
                variant="outline" 
                className="flex-1"
                onClick={() => setCurrentStep("airtime")}
              >
                Back
              </Button>
              <Button 
                type="submit" 
                className="flex-1"
                disabled={!selectedPaymentMethod}
              >
                Pay Now
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  )
  
  const renderSuccessPage = () => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="bg-purple-950">
        <CardHeader>
          <div className="flex justify-center mb-4">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
          <CardTitle className="text-center text-2xl text-white">Payment Successful!</CardTitle>
          <CardDescription className="text-center text-white">
            Your airtime purchase was successful
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="py-4 space-y-3">
            <div className="flex justify-between text-white">
              <span>Network:</span>
              <span className="font-medium">{networkProviders.find(p => p.id === network)?.name}</span>
            </div>
            <div className="flex justify-between text-white">
              <span>Phone Number:</span>
              <span className="font-medium">{phoneNumber}</span>
            </div>
            <div className="flex justify-between text-white">
              <span>Amount:</span>
              <span className="font-medium">₦{amount}</span>
            </div>
            <div className="flex justify-between text-white">
              <span>Transaction ID:</span>
              <span className="font-medium">TRX{Math.floor(Math.random() * 10000000)}</span>
            </div>
            <div className="flex justify-between text-white">
              <span>Date:</span>
              <span className="font-medium">{new Date().toLocaleString()}</span>
            </div>
          </div>

          <Button 
            type="button" 
            className="w-full mt-6"
            onClick={handleBackToHome}
          >
            Done
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-md mx-auto">
        <Link href="/" className="inline-flex items-center text-sm mb-6 hover:text-primary">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <AnimatePresence mode="wait">
          {currentStep === "airtime" && renderAirtimeForm()}
          {currentStep === "payment" && renderPaymentMethodsForm()}
          {currentStep === "success" && renderSuccessPage()}
        </AnimatePresence>
      </div>
    </div>
  )
}