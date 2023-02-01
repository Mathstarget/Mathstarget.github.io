import '@safer/assets/css/style.css';
import '@safer/assets/css/responsive.css';
import '@safer/assets/fontawesome/css/all.min.css';
import Header from '@code/header';
import Footer from '@code/footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
    
      </head>
      <body><Header />{children}<Footer /></body>
    </html>
  )
}
