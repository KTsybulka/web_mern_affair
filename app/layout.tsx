import type { Metadata } from "next";
import { Poppins } from 'next/font/google';

import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})


export const metadata: Metadata = {
  title: "Affair",
  description: "Affair is a platform designed for event management, streamlining the planning and execution of events",
  icons: {
    icon: '/assets/images/logo.svg'
  }
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={poppins.variable}>{children}</body>
      </html>
    </ClerkProvider>

    // <ClerkProvider>
    //   <html lang="en">
    //     <body className={poppins.variable}>
    //       <SignedOut>
    //         <SignInButton />
    //       </SignedOut>
    //       <SignedIn>
    //         <UserButton />
    //       </SignedIn>
    //       {children}
    //     </body>
    //   </html>
    // </ClerkProvider>
  )
}
