import Sidebar from '@/Components/Sidebar'
import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Ai Generator',
  description: 'Ai Generator build by Makcom',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='flex flex-row'>
        <Sidebar />
        {children}
      </body>
    </html>
  )
}
