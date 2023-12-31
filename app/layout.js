import { Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Bye 2023',
  description: 'Say goodbye to 2023 by posting a rating of 2023!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://cdn.jsdelivr.net/npm/daisyui@4.4.24/dist/full.min.css" rel="stylesheet" type="text/css" />
 
      </head>
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}
