import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { ThemeProvider } from './components/ThemeProvider'
import AOSWrapper from './components/AOSWrapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Akarshana - Gravity-Powered Electrical Energy Generation',
  description: 'Elevate. Innovate. Levitate. Lifting dreams, grounding reality.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <AOSWrapper>
            <Header />
            <main>{children}</main>
            <Footer />
          </AOSWrapper>
        </ThemeProvider>
      </body>
    </html>
  )
}

