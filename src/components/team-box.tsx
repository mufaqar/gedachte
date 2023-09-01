import { zoomIn } from '@/const/anim'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsFillStarFill } from 'react-icons/bs'

function TeamBox({ data }: any) {
    return (
        <motion.div
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.1 }}>
            <motion.div
                variants={zoomIn}
                className="grid gap-5 py-6 bg-white rounded-[20px] border border-black border-opacity-10 relative group">
                <div>
                    <div className='rounded-full w-[175px] h-[174px] mx-auto mb-8 relative'>
                        <Image src={data?.featureImage?.asset.url} alt={data?.img} width={175} height={174} className='' />
                        <Image src="/images/team/check.png" alt="check.png" width={38} height={37} className='absolute bottom-5 right-2' />
                    </div>
                    <h3 className="text-center text-blue-800 text-[22px] font-bold leading-[40px]">
                        {data?.name}
                    </h3>
                    <div className="text-center my-3">
                        <Link href="#" className="bg-blue-800 bg-opacity-20 rounded-3xl text-center text-sky-900 text-sm font-semibold leading-[39.12px] py-1.5 px-5">
                            {data?.designation}
                        </Link>
                    </div>
                    <p className="text-center text-sky-900 text-sm font-semibold">
                        {data?.university}
                    </p>
                </div>
                <div className='border-t border-black/10'>
                    <p className="flex justify-between px-5 pt-5">
                        <span className="text-sky-900 text-[13px] font-semibold leading-[30px]">
                            {data?.client| 0} clients
                        </span>
                        <span className="text-sky-900 text-[15px] font-bold leading-[30px] flex items-center gap-1">
                            {data?.rating | 0} <BsFillStarFill />
                        </span>
                    </p>
                </div>
                <div className="h-full w-full bg-sky-900 bg-opacity-95 rounded-[20px] border border-black border-opacity-10 absolute p-3 opacity-0 group-hover:opacity-100 transition duration-700 ease-in-out">
                    <p className="text-white text-sm font-normal leading-[27px]">
                        {data?.about}
                    </p>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default TeamBox