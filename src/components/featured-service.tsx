import { zoomIn } from '@/const/anim'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

function Featured_Service({ title, link, img }: any) {
    return (
        <motion.div
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.1 }}
        >
            <motion.div
                variants={zoomIn}
                className='rounded-2xl relative'>
                <Image src={img} alt='service/1.png' width={313} height={381} className='object-cover w-full' />
                <div className='absolute inset-0 p-6'
                >
                    <Link href={link} className='text-[22px] font-bold text-white flex items-center gap-5 justify-between'>
                        <span>
                            {title}<br />Therapie
                        </span>
                        <BsArrowRight size={24} />
                    </Link>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default Featured_Service