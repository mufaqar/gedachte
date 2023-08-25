import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function EventBox({data} : any) {
    return (
        <div className="p-[30px] shadow rounded-xl flex flex-col gap-[22px]">
            <div className=''>
                <Image src={data?.img} alt={data?.img} width={330} height={425} className='w-full' />
            </div>
            <div>
                <p className="text-black text-xs font-normal leading-[14.57px] mb-5">
                    {data?.date}
                </p>
                <h4 className="text-black text-[17px] font-bold leading-none">
                   {data?.title}
                </h4>
            </div>
            <div className='w-full h-[1px] bg-black/20'></div>
            <div className='flex justify-between'>
                <span>
                    <Link href="#" className="text-center text-white text-xs font-semibold uppercase tracking-tight px-12 py-2.5 bg-sky-900 rounded-3xl">
                        Doe mee
                    </Link>
                </span>
                <span className="text-black text-xs font-normal leading-[30.79px]">
                    {data?.subscriber} Subscribers
                </span>
            </div>
        </div>
    )
}

export default EventBox