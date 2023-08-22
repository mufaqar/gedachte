import Image from 'next/image'
import { Inter } from 'next/font/google'
import Banner from '@/components/banner'
import Service_Box from '@/components/service-box'
import Wellnes_Sec from '@/components/wellnes-sec'
import Team_sec from '@/components/team-sec'
import Vision_Sec from '@/components/vision-sec'
import Testimonials from '@/components/testimonials'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={``}>
      <Banner />
      <section className='py-20'>
        <div className='container mx-auto px-4 grid md:grid-cols-4 grid-cols-1 gap-5'>
          <Service_Box
            img="/images/service/1.png"
            title="Individuele"
            link="#"
          />
          <Service_Box
            img="/images/service/2.png"
            title="Groep"
            link="#"
          />
          <Service_Box
            img="/images/service/3.png"
            title="Relatie"
            link="#"
          />
          <Service_Box
            img="/images/service/4.png"
            title="Speciale"
            link="#"
          />
        </div>
      </section>
      <Wellnes_Sec />
      <Team_sec />
      <Vision_Sec />
      <Testimonials />
    </main >
  )
}
