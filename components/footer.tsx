import Link from "next/link"
import { CreditCard, Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <CreditCard className="h-5 w-5" />
              <span className="font-bold">SMATPAY</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Quick and secure payments for all your utility bills and subscriptions.
            </p>
          </div>

          <div>
            <h3 className="font-medium mb-3">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/airtime" className="text-muted-foreground hover:text-foreground">
                  Airtime
                </Link>
              </li>
              <li>
                <Link href="/data" className="text-muted-foreground hover:text-foreground">
                  Data Bundle
                </Link>
              </li>
              <li>
                <Link href="/electricity" className="text-muted-foreground hover:text-foreground">
                  Electricity
                </Link>
              </li>
              <li>
                <Link href="/tv" className="text-muted-foreground hover:text-foreground">
                  TV Subscription
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-3">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-foreground">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-3">Connect</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} TopUpPro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
