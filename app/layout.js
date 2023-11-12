import Navbar from '@/components/Navbar'
import './globals.css'
import Circle from '@/components/Circle'
import Footer from '@/components/Footer'


export const metadata = {
  title: 'Khalid Kakar',
  description: `Welcome to my portfolio! I'm Khalid Kakar, a passionate web developer specializing in cutting-edge technologies. With a focus on delivering seamless and responsive web experiences, I bring expertise in Next.js, React.js, JavaScript, HTML, CSS, MongoDB, and Tailwind CSS to the table`,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#27167e] overflow-x-hidden">
        <Circle />
      <Navbar />
        <main>
        {children}
        </main>
      <Footer />
        </body>
    </html>
  )
}
