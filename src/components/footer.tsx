import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiSolidPhoneCall, BiSolidEnvelope } from 'react-icons/bi'
import { HiMapPin } from 'react-icons/hi2'

function Footer() {
  return (
    <footer className='bg-white'>
      <div className='py-16 container mx-auto px-4 grid md:grid-cols-4 grid-cols-1 gap-7'>
        <div>
          <Link href="/">
            <Image src="/images/logo.png" alt='logo' width={230} height={65} className='' />
          </Link>
        </div>
        <div>
          <h6 className='text-lg font-semibold text-title_clr mb-5'>
            Reach us
          </h6>
          <ul className='grid gap-4'>
            <li>
              <Link href="tel:+31622729374" className='text-base font-normal text-title_clr flex gap-2 items-center'>
                <BiSolidPhoneCall className="w-6 h-6" />
                <span>
                  +316 22729374
                </span>
              </Link>
            </li>
            <li>
              <Link href="mailto:GedachteGids@gmail.com" className='text-base font-normal text-title_clr flex gap-2 items-center'>
                <BiSolidEnvelope className="w-6 h-6" />
                <span>
                  GedachteGids@gmail.com
                </span>
              </Link>
            </li>
            <li>
              <span className='text-base font-normal text-title_clr flex gap-2 items-center'>
                <HiMapPin className="w-6 h-6" />
                <span>
                  Wiegelstraat 10A,
                  Amsterdam
                </span>
              </span>
            </li>
          </ul>
        </div>
        <div>
          <h6 className='text-lg font-semibold text-title_clr mb-5'>
            Menu
          </h6>
          <ul className='grid gap-4'>
            <li>
              <Link href="/" className='text-base font-normal text-title_clr flex gap-2 items-center'>
                Home
              </Link>
            </li>
            <li>
              <Link href="#" className='text-base font-normal text-title_clr flex gap-2 items-center'>
                Diensten
              </Link>
            </li>
            <li>
              <Link href="#" className='text-base font-normal text-title_clr flex gap-2 items-center'>
                Hulpmiddelen
              </Link>
            </li>
            <li>
              <Link href="#" className='text-base font-normal text-title_clr flex gap-2 items-center'>
                Over Ons
              </Link>
            </li>
            <li>
              <Link href="#" className='text-base font-normal text-title_clr flex gap-2 items-center'>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer