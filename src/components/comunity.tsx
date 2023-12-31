import { fadeUp, zoomIn } from '@/const/anim'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Comunity() {
    return (
        <motion.section
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.1 }}
            className='md:py-20 py-10 relative'>
            <Image src="/images/comunity-bg.png" alt='comunity-bg.png' width={503} height={506} className='absolute inset-0 z-[-2] object-cover h-full md:block hidden' />
            <div className='container mx-auto px-4 grid md:grid-cols-2 grid-cols-1 gap-5 items-center justify-between'>
                <motion.div
                    variants={zoomIn}
                    className='relative'>
                    <Image src="/images/comunity-mbl.png" alt='comunity-mbl.png' width={324} height={233} className='md:hidden block' />
                    <Image src="/images/comunity.png" alt='comunity.png' width={539} height={357} className='md:block hidden' />
                </motion.div>
                <div>
                    <motion.div
                        variants={fadeUp}
                        className=''>
                        <h2 className="text-sky-900 md:text-[32px] text-3xl font-medium leading-[52px] mb-7">
                            Word Lid van Onze Bloeiende Community
                        </h2>
                        <p className="opacity-80 text-black md:text-[22px] text-base font-normal leading-[39px] tracking-wide mb-10">
                            Sluit je aan bij onze bruisende gemeenschap van mensen die actief werken aan een betere mentale gezondheid. Met onze boeiende blogs, podcasts en video's bieden we je waardevolle inzichten en strategieën om je welzijn te verbeteren. Mis onze regelmatige updates en deskundige bijdragen aan de discussie over mentale gezondheid en zelfzorg niet.
                        </p>
                        <Link href="/contact-us#contact_form" className="text-center text-white text-[14.91px] font-semibold uppercase tracking-wide px-6 py-2.5 bg-sky-900 rounded-[36.46px]">
                            Plan Nu een Afspraak
                        </Link>
                    </motion.div>
                </div>

            </div>
        </motion.section>
    )
}

export default Comunity