import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiSolidPhoneCall, BiSolidEnvelope } from 'react-icons/bi'
import { HiMapPin } from 'react-icons/hi2'
import { BiLogoFacebookCircle, BiLogoTwitter, BiLogoInstagram } from 'react-icons/bi'

function Footer() {
  return (
    <footer className='bg-white'>
      <div className='py-16 container mx-auto px-4 flex md:flex-row flex-col justify-between gap-7 border-b border-indigo-950/10'>
        <div className='md:w-fit w-full'>
          <Link href="/">
            <Image src="/images/logo.png" alt='logo' width={230} height={65} className='' />
          </Link>
          <ul className='flex gap-4 mt-10'>
            <li className='h-10 w-10 bg-title_clr flex items-center justify-center rounded-full'>
              <Link href="#">
                <BiLogoFacebookCircle className="text-2xl text-white" />
              </Link>
            </li>
            <li className='h-10 w-10 bg-title_clr flex items-center justify-center rounded-full'>
              <Link href="#">
                <BiLogoTwitter className="text-2xl text-white" />
              </Link>
            </li>
            <li className='h-10 w-10 bg-title_clr flex items-center justify-center rounded-full'>
              <Link href="#">
                <BiLogoInstagram className="text-2xl text-white" />
              </Link>
            </li>
          </ul>
        </div>
        <div className='md:w-fit w-full'>
          <h6 className='text-sky-900 text-lg font-semibold leading-relaxed mb-5'>
            Reach us
          </h6>
          <ul className='grid gap-4'>
            <li>
              <Link href="tel:+31622729374" className='text-sky-900 text-base font-normal flex gap-2 items-center'>
                <BiSolidPhoneCall className="w-6 h-6" />
                <span>
                  +316 22729374
                </span>
              </Link>
            </li>
            <li>
              <Link href="mailto:GedachteGids@gmail.com" className='text-sky-900 text-base font-normal flex gap-2 items-center'>
                <BiSolidEnvelope className="w-6 h-6" />
                <span>
                  GedachteGids@gmail.com
                </span>
              </Link>
            </li>
            <li>
              <span className='text-sky-900 text-base font-normal flex gap-2 items-center'>
                <HiMapPin className="w-6 h-6" />
                <span>
                  Wiegelstraat 10A,
                  Amsterdam
                </span>
              </span>
            </li>
          </ul>
        </div>
        <div className='md:w-fit w-full'>
          <h6 className='text-sky-900 text-lg font-semibold leading-relaxed mb-5'>
            Menu
          </h6>
          <ul className='grid gap-4'>
            <li>
              <Link href="/" className='text-sky-900 text-base font-normal'>
                Home
              </Link>
            </li>
            <li>
              <Link href="#" className='text-sky-900 text-base font-normal'>
                Diensten
              </Link>
            </li>
            <li>
              <Link href="#" className='text-sky-900 text-base font-normal'>
                Hulpmiddelen
              </Link>
            </li>
            <li>
              <Link href="#" className='text-sky-900 text-base font-normal'>
                Over Ons
              </Link>
            </li>
            <li>
              <Link href="#" className='text-sky-900 text-base font-normal'>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className='md:w-fit w-full'>
          <div className='bg-sky-100 rounded-[10px] py-4 px-5'>
            <h6 className='text-sky-900 text-lg font-semibold leading-relaxed mb-8'>
              Ontvang Onze Nieuwsbrief
            </h6>
            <form action="#">
              <div className="items-center flex bg-white rounded-[26px]">
                <div className="relative w-full">
                  <label htmlFor="email" className="hidden mb-2 text-sm font-medium text-gray-900">Email address</label>
                  <input className="block p-3 w-full text-zinc-600 text-sm font-normal bg-transparent rounded-tl-[26px] rounded-bl-[26px] focus:ring-0 focus:outline-0"
                    placeholder="Jouw emailadres"
                    type="email"
                    id="email" />
                </div>
                <div className='w-[174px] px-[17.79px] py-[4.45px] bg-sky-900 rounded-3xl justify-center items-center gap-[4.45px] inline-flex'>
                  <button type="submit" className="py-3 px-5 w-full text-center text-white text-[10.08px] font-semibold uppercase tracking-tight">
                    Abbonneer
                  </button>
                </div>
              </div>
              <p className="opacity-50 text-sky-900 text-[13px] font-medium mt-9 mb-4">
                * Wij sturen u weekelijks een brief met nieuwe updates
              </p>
            </form>
          </div>
        </div>
      </div>
      <div className='container mx-auto px-4 pt-14 pb-5'>
        <p className='text-neutral-500 text-base font-normal leading-[34px] text-center'>
          Copyright Gedachte gids. All right reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer