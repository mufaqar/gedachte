import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

function Featured_Service({ title, link, img }: any) {
    return (
        <div className='rounded-2xl relative'>
            <Image src={img} alt='service/1.png' width={313} height={381} className='object-cover w-full' />
            <div className='absolute inset-0 p-6'>
                <Link href={link} className='text-[22px] font-bold text-white flex items-center gap-5 justify-between'>
                    <span>
                        {title}<br />Therapie
                    </span>
                    <BsArrowRight size={24} />
                </Link>
            </div>
        </div>
    )
}

export default Featured_Service