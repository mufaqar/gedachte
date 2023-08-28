import { fadeUp, zoomIn } from '@/const/anim'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

function Vision_Sec() {
    return (
        <motion.section
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.1 }}
            className='md:py-20 py-10'>
            <div className='container mx-auto px-4 grid md:grid-cols-2 grid-cols-1 gap-5 justify-between'>
                <div className='md:order-1 order-2'>
                    <div className='max-w-[559px]'>
                        <motion.h2
                            variants={fadeUp}
                            className="text-sky-900 md:text-[35px] text-[32px] md:text-left text-center font-medium leading-[52px] md:mb-16 mb-7">
                            Onze Missie en Visie
                        </motion.h2>
                        <motion.p
                            variants={fadeUp}
                            className="opacity-80 text-black md:text-[22px] text-lg md:text-left text-center font-normal leading-[39px] tracking-wide">
                            Wij streven ernaar om bruggen te bouwen en zowel geestelijke gezondheidsexperts als individuen te inspireren op weg naar mentaal welzijn. Met een team van ervaren en empathische specialisten zetten we ons volledig in om jouw reis naar een gezondere geest een boost te geven!
                        </motion.p>
                    </div>
                </div>
                <motion.div
                    variants={zoomIn}
                    className='md:order-2 order-1'>
                    <Image src="/images/vision.png" alt='vision.png' width={642} height={387} className='ml-auto' />
                </motion.div>
            </div>
        </motion.section>
    )
}

export default Vision_Sec