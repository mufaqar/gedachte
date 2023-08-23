import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function WorkTogather() {
    return (
        <section className='py-20 bg-sky-100'>
            <div className='container mx-auto px-4 grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-5 items-center'>
                <div>
                    <p className="text-sky-900 text-lg font-bold uppercase tracking-wide">
                        Voel je thuis bij ons
                    </p>
                    <h2 className="text-sky-900 md:text-[39px] text-[28px] font-bold mb-8">
                        Neem contact met ons op om samen te werken aan jouw hersteltraject.Plan Nu een Afspraak
                    </h2>
                    <Link href="#" className="text-center text-sky-900 text-[14.91px] font-semibold uppercase tracking-wide px-6 py-2.5 bg-white rounded-[36.46px]">
                        Plan Nu een Afspraak
                    </Link>
                </div>
                <div className=''>
                    <Image src="/images/rectangle.png" alt='rectangle.png' width={499} height={506} className='ml-auto' />
                </div>
            </div>
        </section>
    )
}

export default WorkTogather