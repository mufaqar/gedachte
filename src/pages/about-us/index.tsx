import { TeamData } from '@/const/team-data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function About_Us() {
  return (
    <main>
      <section className='py-24'>
        <div className='relative'>
          <Image src="/images/about-bg.png" alt='about-bg.png' width={498} height={506} className='absolute inset-y-0 right-0 z-[-2] object-cover h-full md:block hidden' />
          <div className='container mx-auto px-4 grid md:grid-cols-2 grid-cols-1 gap-5 items-center justify-between'>
            <div>
              <div className=''>
                <p className="text-sky-900 text-2xl md:text-left text-center font-medium max-w-[522px] mb-5">
                  Ons Verhaal
                </p>
                <h2 className="text-sky-900 md:text-[39px] text-2xl md:text-left text-center font-medium leading-[45px] mb-7 max-w-[522px]">
                  Samen Werken aan Mentaal Welzijn
                </h2>
                <p className="opacity-80 text-black md:text-[22px] text-base md:text-left text-center font-normal leading-[39px] tracking-wide mb-10 max-w-[625px]">
                  Bij Gedachte Gids worden we gedreven door onze passie voor geestelijke gezondheidszorg en onze visie op een wereld waarin iedereen toegang heeft tot de ondersteuning die ze nodig hebben. Opgericht door een team van toegewijde professionals met jarenlange ervaring in het veld, is Gedachte Gids snel uitgegroeid tot een toonaangevende dienstverlener voor psychologen, therapeuten en geestelijke gezondheidsprofessionals.
                </p>
              </div>
            </div>
            <div className='relative'>
              <Image src="/images/story-mbl.png" alt='story-mbl.png' width={324} height={233} className='md:hidden block' />
              <Image src="/images/story.png" alt='story.png' width={556} height={396} className='md:block hidden ml-auto' />
            </div>
          </div>
        </div>
      </section>
      <section className='py-24'>
        <div className='relative'>
          <Image src="/images/about-bg.png" alt='about-bg.png' width={498} height={506} className='absolute inset-y-0 left-0 z-[-2] object-cover h-full md:block hidden' />
          <div className='container mx-auto px-4 grid md:grid-cols-2 grid-cols-1 gap-5 items-center justify-between'>
            <div className='md:order-2 order-1'>
              <div className=''>
                <p className="text-sky-900 text-2xl md:text-left text-center font-medium max-w-[522px] mb-5">
                  Onze Waarden
                </p>
                <h2 className="text-sky-900 md:text-[39px] text-2xl md:text-left text-center font-medium leading-[45px] mb-7 max-w-[614px]">
                  Geestelijke Gezondheid op de Eerste Plaats
                </h2>
                <p className="opacity-80 text-black md:text-[22px] text-base md:text-left text-center font-normal leading-[39px] tracking-wide mb-10 max-w-[625px]">
                  De kern van onze organisatie wordt gevormd door onze waarden, die ons leiden bij elke interactie en beslissing. We geven prioriteit aan empathie, compassie en respect in onze benadering van geestelijke gezondheidszorg. We zijn toegewijd aan het creëren van een veilige en inclusieve omgeving waar individuen zich op hun gemak voelen om de hulp te zoeken die ze nodig hebben.
                </p>
              </div>
            </div>
            <div className='relative md:order-1 order-2'>
              <Image src="/images/values-mbl.png" alt='values-mbl.png' width={324} height={233} className='md:hidden block' />
              <Image src="/images/values.png" alt='values.png' width={556} height={396} className='md:block hidden' />
            </div>
          </div>
        </div>
      </section>

      <section className='py-20'>
        <div className='container mx-auto px-4'>
          <div>
            <p className="text-sky-900 text-2xl md:text-left text-center font-medium capitalize leading-[52px]">
              Wij zijn er voor u
            </p>
            <div className="text-sky-900 text-[39px] md:text-left text-center font-semibold leading-[52px]">
              Ons Team
            </div>
          </div>
          <div className='grid md:grid-cols-4 grid-cols-1 gap-5 mt-14'>
            {TeamData.slice(8).map((item: any, idx: number) => {
              return <div key={idx} className="grid gap-5 py-6 ">
                <div className='rounded-full w-[200px] h-[174px] mx-auto mb-8 relative'>
                  <Image src={item?.img} alt={item?.img} width={200} height={174} className='' />
                </div>
                <p className="text-center text-black text-[22px] font-bold">
                  {item?.name}
                </p>
                <p className="text-center text-zinc-500 text-base font-medium">
                  {item?.role}
                </p>
                <ul className='flex gap-7 justify-center items-center'>
                  <li>
                    <Link href="#" className='block w-fit'>
                      <Image src="/images/team/fb.png" alt='team/fb.png' width={18} height={18} />
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className='block w-fit'>
                      <Image src="/images/team/email.png" alt='team/email.png' width={18} height={18} />
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className='block w-fit'>
                      <Image src="/images/team/twiter.png" alt='team/twiter.png' width={18} height={18} />
                    </Link>
                  </li>
                </ul>
              </div>
            })}
          </div>
        </div>
      </section>

      <section className='py-24'>
        <div className='relative'>
          <Image src="/images/about-bg.png" alt='about-bg.png' width={498} height={506} className='absolute inset-y-0 right-0 z-[-2] object-cover h-full md:block hidden' />
          <div className='container mx-auto px-4 grid md:grid-cols-2 grid-cols-1 gap-5 items-center justify-between'>
            <div>
              <div className=''>
                <p className="text-sky-900 text-2xl md:text-left text-center font-medium max-w-[522px] mb-5">
                  Barrières Doorbreke
                </p>
                <h2 className="text-sky-900 md:text-[39px] text-2xl md:text-left text-center font-medium leading-[45px] mb-7 max-w-[522px]">
                  Toegankelijke Geestelijke Gezondheid
                </h2>
                <p className="opacity-80 text-black md:text-[22px] text-base md:text-left text-center font-normal leading-[39px] tracking-wide mb-10 max-w-[625px]">
                  We begrijpen dat toegang tot geestelijke gezondheidsdiensten geen uitdaging mag zijn. Ons platform is ontworpen om barrières te doorbreken en geestelijke gezondheidszorg toegankelijk te maken voor iedereen. Of je nu de voorkeur geeft aan persoonlijke sessies of online counseling, we hebben opties om aan jouw voorkeuren en behoeften te voldoen."
                </p>
              </div>
            </div>
            <div className='relative'>
              <Image src="/images/barriers-mbl.png" alt='barriers-mbl.png' width={324} height={233} className='md:hidden block' />
              <Image src="/images/barriers.png" alt='barriers.png' width={556} height={396} className='md:block hidden ml-auto' />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
