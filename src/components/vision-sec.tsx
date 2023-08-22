import Image from 'next/image'
import React from 'react'

function Vision_Sec() {
    return (
        <section className='py-20'>
            <div className='container mx-auto px-4 grid md:grid-cols-2 grid-cols-1 gap-5 justify-between'>
                <div>
                    <div className='max-w-[559px]'>
                        <h2 className="text-sky-900 text-[35px] font-medium leading-[52px] md:mb-16 mb-7">
                            Onze Missie en Visie
                        </h2>
                        <p className="opacity-80 text-black text-[22px] font-normal leading-[39px] tracking-wide">
                            Wij streven ernaar om bruggen te bouwen en zowel geestelijke gezondheidsexperts als individuen te inspireren op weg naar mentaal welzijn. Met een team van ervaren en empathische specialisten zetten we ons volledig in om jouw reis naar een gezondere geest een boost te geven!
                        </p>
                    </div>
                </div>
                <div>
                    <Image src="/images/vision.png" alt='vision.png' width={642} height={387} className='ml-auto' />
                </div>
            </div>
        </section>
    )
}

export default Vision_Sec