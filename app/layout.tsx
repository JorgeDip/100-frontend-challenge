import type { Metadata } from "next"
import { Nunito } from "next/font/google"
import "./globals.css"
import { ViewTransitions } from "next-view-transitions"

const nunito = Nunito({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "100 Challenges",
  description: "100 frontend challenges to help you grow as a developer",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ViewTransitions>
      <html lang='en'>
        <head>
          <link rel='shortcut icon' href='/images/favicon2.png' type='image/x-icon' />
        </head>
        <body className={nunito.className}>{children}</body>
      </html>
    </ViewTransitions>
  )
}
