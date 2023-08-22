import Image from 'next/image'
import React from 'react'

function Testimonials() {
    return (
        <section className='py-20'>
            <div className='container mx-auto px-4 bg-sky-100 rounded-[30px] py-36'>
                <div className='md:mb-20 mb-10'>
                    <h2 className="text-sky-900 text-[35px] font-medium leading-[52px] text-center">
                        Zet Vandaag de Eerste Stap: Ontdek, Boek, Genees
                    </h2>
                    <Image src="/images/arrow.png" alt='arrow.png' width={38} height={50} className='mx-auto' />
                    <p className="max-w-[761px] mx-auto text-center text-sky-900 text-xl font-normal leading-[38px]">
                        Begin jouw reis naar mentaal welzijn door onze diensten te verkennen, een afspraak te maken en je te begeven op een pad van persoonlijke groei en heling. Wij staan klaar om je bij elke stap te begeleiden.
                    </p>
                </div>
                <div>
                    <Image src="/images/quotes.png" alt='qoutes.png' width={150} height={109} className='mx-auto' />
                    <div className='max-w-[297px] md:ml-[112px]'>
                        <p className="text-sky-900 text-lg font-normal leading-[52px]">Testimonials</p>
                        <h2 className="text-sky-900 text-[35px] font-semibold leading-[52px]">
                            Wat Onze Patienten zeggen
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials