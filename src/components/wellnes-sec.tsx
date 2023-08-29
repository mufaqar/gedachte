import { fadeUp, zoomIn } from '@/const/anim'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsCheckCircle } from 'react-icons/bs'

function Wellnes_Sec() {
    return (
        <motion.section
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.1 }}
            className='md:py-20 py-10 bg-sky-100'>
            <div className='container mx-auto px-4 grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-5'>
                <motion.div
                    variants={zoomIn}
                    className='md:order-1 order-2'>
                    <Image src="/images/wellness.png" alt='wellness.png' width={644} height={864} className='w-full max-h-[850px] object-cover rounded-[20px]' />
                </motion.div>
                <motion.div
                    variants={fadeUp}
                    className='grid md:gap-0 gap-12 md:order-2 order-1'>
                    <h2 className="text-sky-900 text-[32px] font-semibold leading-[40px]">
                        Ga op weg naar welzijn
                    </h2>
                    <ul className='grid gap-10 justify-between'>
                        <li>
                            <h3 className='text-blue-800 text-[22px] font-medium capitalize leading-[40px] flex items-center gap-8'>
                                <BsCheckCircle className="w-9 h-9" />
                                <Link href="/services">
                                    Ontdek Onze diensten
                                </Link>
                            </h3>
                            <p className="opacity-80 text-black text-lg font-normal mt-6">
                                Ontdek ons aanbod van op maat gemaakte diensten voor mentale gezondheid, speciaal ontworpen om aan jouw unieke behoeften en doelen te voldoen.
                            </p>
                        </li>
                        <li>
                            <h3 className='text-blue-800 text-[22px] font-medium capitalize leading-[40px] flex items-center gap-8'>
                                <BsCheckCircle className="w-9 h-9" />
                                <Link href="/contact-us#contact_form">
                                    Boek een afspraak
                                </Link>
                            </h3>
                            <p className="opacity-80 text-black text-lg font-normal mt-6">
                                Gebruik ons online boekingssysteem om op jouw gemak een sessie in te plannen.
                            </p>
                        </li>
                        <li>
                            <h3 className='text-blue-800 text-[22px] font-medium capitalize leading-[40px] flex items-center gap-8'>
                                <BsCheckCircle className="w-9 h-9" />
                                <Link href="/blogs#events">
                                    Speciale Events
                                </Link>
                            </h3>
                            <p className="opacity-80 text-black text-lg font-normal mt-6">
                                Ontmoet je toegewijde therapeut voor een gepersonaliseerde sessie gericht op jouw uitdagingen en persoonlijke groei.
                            </p>
                        </li>
                        <li>
                            <h3 className='text-blue-800 text-[22px] font-medium capitalize leading-[40px] flex items-center gap-8'>
                                <BsCheckCircle className="w-9 h-9" />
                                <Link href="/about-us">
                                    Blijvende steun
                                </Link>
                            </h3>
                            <p className="opacity-80 text-black text-lg font-normal mt-6">
                                Profiteer van doorlopende begeleiding, informatieve bronnen en communicatie om je reis naar mentaal welzijn te voeden.
                            </p>
                        </li>
                    </ul>
                </motion.div>
            </div>
        </motion.section>
    )
}

export default Wellnes_Sec