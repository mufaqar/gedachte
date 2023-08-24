import Link from 'next/link'
import React from 'react'

function Banner() {
    return (
        <section className='py-20 bg-[url("/images/mainbg.png")] bg-center bg-no-repeat bg-cover min-h-screen flex items-center'>
            <div className='container mx-auto px-4'>
                <div className='max-w-[620px] mx-auto'>
                    <h1 className='md:text-4xl text-[32px] font-medium text-white text-center max-w-[502px] mx-auto'>
                        Welkom bij Gedacht Gids - Jouw Pad naar Mentaal welzijn
                    </h1>
                    <p className='md:text-xl text-base font-normal text-white text-center my-7'>
                        Navigeer Je Weg naar een Gelukkiger Jij: Wij Zijn Je Persoonlijke Gids voor Mentale Gezondheid en Algeheel Welzijn
                    </p>
                    <div>
                        <Link href="#" className='text-sm font-semibold uppercase bg-white text-sky-900 py-4 px-6 rounded-[36px] w-fit block mx-auto'>
                            Plan Nu een Afspraak
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner