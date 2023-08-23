import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { GrClose } from 'react-icons/gr'

function Header() {
    const [open, setOpen] = useState(false)
    return (
        <header className='py-5 relative z-50'>
            <div className='container mx-auto px-4 flex justify-between items-center'>
                <div className='md:w-1/4 w-1/2'>
                    <Link href="/">
                        <Image src="/images/logo.png" alt='logo' width={230} height={65} className='' />
                    </Link>
                </div>
                <nav className='md:w-2/4 w-1/2'>
                    <button className='md:hidden block ml-auto' onClick={() => setOpen(!open)}>
                        {
                            open ? (<GrClose size={26} />) : (<FaBars size={26} />)
                        }
                    </button>
                    <ul className={`flex md:flex-row flex-col justify-center md:gap-10 md:static bg-transparent absolute ${open ? 'left-0 right-0 top-20 gap-8 !bg-sky-900 rounded-tl-[20px] rounded-bl-[20px] px-6 py-8' : 'top-[-200px]'}`}>
                        <li>
                            <Link href="/" className={`text-lg font-semibold text-black ${open ? "text-white" : ""}`}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className={`text-lg font-semibold text-black ${open ? "text-white" : ""}`}>
                                Diensten
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className={`text-lg font-semibold text-black ${open ? "text-white" : ""}`}>
                                Hulpmiddelen
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className={`text-lg font-semibold text-black ${open ? "text-white" : ""}`}>
                                Over Ons
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className={`text-lg font-semibold text-black ${open ? "text-white" : ""}`}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className='md:w-1/4 md:block hidden'>
                    <ul className='flex justify-end gap-10 items-center'>
                        <li>
                            <Link href="#" className='text-sm font-semibold uppercase bg-title_clr text-white py-4 px-6 rounded-[36px] block'>
                                Plan Nu een Afspraak
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header