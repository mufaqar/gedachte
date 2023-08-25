import EventBox from '@/components/event-box'
import React from 'react'
import { Events_Data } from '@/const/events-data'
import PostBox from '@/components/post-box'
import { Posts_Data } from '@/const/posts-data'
import Link from 'next/link'

function Blogs() {
    return (
        <main>
            <section className='py-20'>
                <div className='container mx-auto px-4'>
                    <div>
                        <p className="text-center text-sky-900 text-2xl font-medium">
                            Gedachte blog
                        </p>
                        <h1 className="text-center text-sky-900 text-[35px] font-semibold">
                            Workshops & Events
                        </h1>
                    </div>
                </div>
            </section>
            <section className='py-20'>
                <div className='container mx-auto px-4 grid md:grid-cols-3 grid-cols-1 gap-7'>
                    {Events_Data.map((item: any, idx: number) => {
                        return <EventBox key={idx} data={item} />
                    })}
                </div>
            </section>
            <section className='py-20'>
                <div className='container mx-auto px-4 border-b border-black/20'>
                    <h2 className="text-sky-900 text-[35px] md:text-left text-center font-semibold leading-[45px] mb-2">
                        Onze Blog
                    </h2>
                    <p className="opacity-80 text-black md:text-[25px] text-[19px] md:text-left text-center font-medium leading-[45px] mb-5">
                        Ideeën, Begeleiding en Motivatie voor een Leven van Uitmuntendheid
                    </p>
                </div>
                <div className='container mx-auto px-4 grid md:grid-cols-2 grid-cols-1 gap-7 mt-20'>
                    {Posts_Data.map((item: any, idx: number) => {
                        return <PostBox key={idx} data={item} />
                    })}
                </div>
                <div className='container mx-auto px-4 pt-20 text-center'>
                    <Link href="#" className="text-center text-white text-[14.91px] font-semibold uppercase tracking-wide px-16 py-4 bg-sky-900 rounded-[36.46px]">
                        Lees Meer
                    </Link>
                </div>
            </section>
        </main>
    )
}

export default Blogs