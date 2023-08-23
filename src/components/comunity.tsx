import Image from 'next/image'
import React from 'react'

function Comunity() {
    return (
        <section className='py-20 relative'>
            <Image src="/images/comunity-bg.png" alt='comunity-bg.png' width={503} height={506} className='absolute inset-0 z-[-2] object-cover h-full md:block hidden' />
            <div className='container mx-auto px-4 grid md:grid-cols-2 grid-cols-1 gap-5 justify-between'>
                <div className='relative'>
                    <Image src="/images/comunity-mbl.png" alt='comunity-mbl.png' width={324} height={233} className='md:hidden block' />
                    <Image src="/images/comunity.png" alt='comunity.png' width={539} height={357} className='md:block hidden' />
                </div>
                <div>
                    <div className=''>
                        <h2 className="text-sky-900 text-[32px] font-medium leading-[52px] mb-7">
                            Word Lid van Onze Bloeiende Community
                        </h2>
                        <p className="opacity-80 text-black text-[22px] font-normal leading-[39px] tracking-wide">
                            Sluit je aan bij onze bruisende gemeenschap van mensen die actief werken aan een betere mentale gezondheid. Met onze boeiende blogs, podcasts en video's bieden we je waardevolle inzichten en strategieën om je welzijn te verbeteren. Mis onze regelmatige updates en deskundige bijdragen aan de discussie over mentale gezondheid en zelfzorg niet.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Comunity