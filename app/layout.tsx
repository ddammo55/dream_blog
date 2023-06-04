import './globals.css'
import Contact from './contact/page';
import Header from '@/components/Header'
import Footer from '@/components/Footer'



export const metadata = {
  title: {
    default : process.env.HOME_TITLE,
    template : '바이클로 블로그 | %s'
  },
  description: '풀스택 개발자 바이클로의 블로그',
  icons : {
    icon : '/favicon.ico',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='flex flex-col w-full mx-auto px-6'>
         <Header />
            <main className='grow'>{children}</main>
         <Footer/>
      </body>
    </html>
  )
}
