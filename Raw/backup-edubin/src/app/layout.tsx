import '@safer/slick.css';
import '@safer/animate.css';
import '@safer/nice-select.css';
import '@safer/jquery.nice-number.min.css';
import '@safer/magnific-popup.css';
import '@safer/bootstrap.min.css';
import '@safer/font-awesome.min.css';
import '@safer/default.css';
import '@safer/style.css';
import '@safer/responsive.css';
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
