import './globals.css'
import Contact from './contact/page';
import Header from '@/components/Header'
import Footer from '@/components/Footer'



export const metadata = {
  title: '원호블로그',
  description: '당신의 꿈을 코딩하는 것을 잊지 마세요',
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
