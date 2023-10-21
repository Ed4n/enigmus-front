import Image from 'next/image'
import { Inter } from 'next/font/google'
import Menu from '@/components/Menu'
import MainLayout from '@/layouts/MainLayout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='bg-sphinx-yellow-50 w-full h-screen flex justify-center items-center'>

      <Menu />
    </main >
  )
}
