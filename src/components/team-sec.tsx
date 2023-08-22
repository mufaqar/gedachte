import React from 'react'
import TeamBox from './team-box'
import { TeamData } from '@/const/team-data'

function Team_sec() {
    return (
        <section className='py-20'>
            <div className='container mx-auto px-4'>
                <div className='mb-14'>
                    <h2 className="text-sky-900 text-[35px] font-medium leading-[52px]">
                        Specialisten die u kunnen helpen
                    </h2>
                </div>
                <div className='grid md:grid-cols-4 grid-cols-1 gap-5'>
                    {TeamData.map((item: any, idx: number) => {
                        return <TeamBox key={idx} data={item} />
                    })}
                </div>
            </div>
        </section>
    )
}

export default Team_sec