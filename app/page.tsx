"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Airplay, Bolt, Tv, Wifi } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  const services = [
    {
      title: "Airtime",
      description: "Purchase airtime for any network",
      icon: <Airplay className="h-8 w-8 text-primary" />,
      href: "/airtime",
    },
    {
      title: "Data Bundle",
      description: "Buy data bundles for all networks",
      icon: <Wifi className="h-8 w-8 text-primary" />,
      href: "/data",
    },
    {
      title: "Electricity",
      description: "Pay your electricity bills",
      icon: <Bolt className="h-8 w-8 text-primary" />,
      href: "/electricity",
    },
    {
      title: "TV Subscription",
      description: "Renew your TV subscription",
      icon: <Tv className="h-8 w-8 text-primary" />,
      href: "/tv",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        {/* <h2 className="text-4xl font-bold mb-4 font-serif">WELCOME TO</h2>
        <h2 className="text-2xl text-purple-800 font-bold mb-4">SMATPAY</h2> */}
            <div>
            <motion.h2
              className="text-4xl font-bold mb-4 font-serif"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              WELCOME TO
            </motion.h2>

                <motion.h2
                  className="text-2xl text-purple-800 font-extralight mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                >
                  SMATPAY
                </motion.h2>
           </div>


        {/* <Image src="/assets/character.png" alt="Logo" width={300} height={100} className="" />
        <h1 className="text-4xl font-bold tracking-tight mb-4"><span className="text-purple-700">SMATPAY</span> VTU Services</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Quick and secure payments for all your utility bills and subscriptions in one place.
        </p> */}
    <div className="text-center py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <Image
          src="/assets/character.png"
          alt="Logo"
          width={300}
          height={100}
          className="mx-auto"
        />
      </motion.div>

      <motion.h1
        className="text-4xl font-bold tracking-tight mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <span className="text-purple-700">SMATPAY</span> VTU Services
      </motion.h1>

      <motion.p
        className="text-muted-foreground max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        Quick and secure payments for all your utility bills and subscriptions in one place.
      </motion.p>
    </div>

      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {services.map((service, index) => (
          <motion.div key={index} variants={item}>
            <Link href={service.href} className="block h-full">
              <Card className="h-full transition-all hover:shadow-lg hover:border-purple-400">
                <CardHeader>
                  <div className="flex justify-center mb-2">{service.icon}</div>
                  <CardTitle className="text-center">{service.title}</CardTitle>
                  <CardDescription className="text-center">{service.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button className="w-full bg-purple-950">Select</Button>
                </CardFooter>
              </Card>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-16 text-center"
      >
        <h2 className="text-2xl font-bold mb-4">Recent Transactions</h2>
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-center items-center h-40">
              <p className="text-muted-foreground">No recent transactions</p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}



