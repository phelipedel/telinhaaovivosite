import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TelinhaAoVivo — Sua tela. Ao vivo. Sem complicação.',
  description: 'Compartilhe sua tela em tempo real com o TelinhaAoVivo no Windows e Android. Rápido, simples e protegido por conexão P2P.',
  generator: 'TelinhaAoVivo',
  icons: {
    icon: [
      { url: '/icon.ico' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#020617',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
