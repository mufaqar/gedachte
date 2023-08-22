import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function TeamBox({ data }: any) {
    return (
        <div className="grid gap-5 py-6 bg-white rounded-[20px] border border-black border-opacity-10 relative group">
            <div>
                <Image src={data?.img} alt={data?.img} width={175} height={174} className='mx-auto mb-8' />
                <h3 className="text-center text-blue-800 text-[22px] font-bold leading-[40px]">
                    {data?.name}
                </h3>
                <div className="text-center my-3">
                    <Link href="#" className="bg-blue-800 bg-opacity-20 rounded-3xl text-center text-sky-900 text-sm font-semibold leading-[39.12px] py-1.5 px-5">
                        {data?.role}
                    </Link>
                </div>
                <p className="text-center text-sky-900 text-sm font-semibold">
                    {data?.uni}
                </p>
            </div>
            <div className='border-t border-black/10'>
                <p className="flex justify-between px-5 pt-5">
                    <span className="text-sky-900 text-[13px] font-semibold leading-[30px]">
                        {data?.clints}
                    </span>
                    <span className="text-sky-900 text-[15px] font-bold leading-[30px]">
                        {data?.rating}
                    </span>
                </p>
            </div>
            <div className="h-full w-full bg-sky-900 bg-opacity-95 rounded-[20px] border border-black border-opacity-10 absolute p-8 opacity-0 group-hover:opacity-100">
                <p className="text-white text-base font-normal leading-[27px]">
                    {data?.content}
                </p>
            </div>
        </div>
    )
}

export default TeamBox