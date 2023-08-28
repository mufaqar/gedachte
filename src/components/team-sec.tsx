import React from 'react'
import TeamBox from './team-box'
import { TeamData } from '@/const/team-data'
import { motion } from 'framer-motion'
import { zoomIn } from '@/const/anim'

function Team_sec() {
    return (
        <motion.section
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.1 }}
            className='md:py-20 py-10'>
            <motion.div
                variants={zoomIn}
                className='container mx-auto px-4'>
                <div className='mb-14'>
                    <h2 className="text-sky-900 text-[35px] md:text-left text-center font-medium leading-[52px]">
                        Specialisten die u kunnen helpen
                    </h2>
                </div>
                <div className='grid md:grid-cols-4 grid-cols-1 gap-5'>
                    {TeamData.slice(0, 8).map((item: any, idx: number) => {
                        return <TeamBox key={idx} data={item} />
                    })}
                </div>
            </motion.div>
        </motion.section>
    )
}

export default Team_sec