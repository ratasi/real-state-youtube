import type { Metadata } from 'next'
import { Inter, Quicksand } from 'next/font/google'
import './globals.css'

const quickSand = Quicksand({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Real State - TarreDev',
  description: 'Aplicación creada del video de Youtube de TarreDev',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={quickSand.className}>{children}</body>
    </html>
  )
}
