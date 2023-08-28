import { fadeUp, zoomIn } from '@/const/anim'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function WorkTogather() {
    return (
        <motion.section
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.1 }}
            className='md:py-20 py-10 bg-sky-100'>
            <div className='container mx-auto px-4 grid md:grid-cols-2 grid-cols-1 gap-10 items-center'>
                <motion.div
                    variants={fadeUp}>
                    <p className="text-sky-900 text-lg font-bold md:text-left text-center uppercase tracking-wide">
                        Voel je thuis bij ons
                    </p>
                    <h2 className="text-sky-900 md:text-[39px] text-[28px] md:text-left text-center font-bold mb-8">
                        Neem contact met ons op om samen te werken aan jouw hersteltraject.Plan Nu een Afspraak
                    </h2>
                    <div className=' md:text-left text-center'>
                        <Link href="/contact-us#contact_form" className="text-center text-sky-900 text-[14.91px] font-semibold uppercase tracking-wide px-6 py-2.5 bg-white rounded-[36.46px]">
                            Plan Nu een Afspraak
                        </Link>
                    </div>
                </motion.div>
                <motion.div
                    variants={zoomIn}
                    className=''>
                    <Image src="/images/rectangle.png" alt='rectangle.png' width={499} height={506} className='ml-auto' />
                </motion.div>
            </div>
        </motion.section>
    )
}

export default WorkTogather