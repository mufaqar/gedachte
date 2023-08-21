import Link from 'next/link'
import React from 'react'

function Banner() {
    return (
        <section className='py-20 bg-[url("/images/mainbg.png")] bg-center bg-no-repeat bg-cover min-h-screen flex items-center'>
            <div className='container mx-auto px-4'>
                <div className='max-w-[620px] mx-auto'>
                    <h1 className='text-4xl font-medium text-white text-center'>
                        Welkom bij Gedacht Gids<br />
                        - Jouw Pad naar Mentaal welzijn
                    </h1>
                    <p className='text-xl font-normal text-white text-center my-7'>
                        Navigeer Je Weg naar een Gelukkiger Jij: Wij Zijn Je Persoonlijke Gids voor Mentale Gezondheid en Algeheel Welzijn
                    </p>
                    <div>
                        <Link href="#" className='text-sm font-semibold uppercase bg-title_clr text-white py-4 px-6 rounded-[36px] w-fit block mx-auto'>
                            Plan Nu een Afspraak
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner