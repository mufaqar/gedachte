import ServiceBox from '@/components/service-box'
import React from 'react'
import { Services_Data } from '@/const/services-data'
import Image from 'next/image'
import Link from 'next/link'

export default function Services() {
    return (
        <main>
            <section className='py-20'>
                <div className='container mx-auto px-4'>
                    <div>
                        <h1 className="max-w-[522px] mx-auto text-center text-sky-900 md:text-[39px] text-[32px] font-semibold leading-[52px] mb-10">
                            Uitgebreide Geestelijke Gezondheidsdiensten
                        </h1>
                        <p className="max-w-[625px] mx-auto opacity-80 text-center text-black text-[22px] font-normal leading-[39px] tracking-wide">
                            Wij bieden een breed scala aan diensten om diverse mentale gezondheidsproblemen aan te pakken.
                        </p>
                    </div>
                </div>
            </section>
            {Services_Data.map((item: any, idx: number) => {
                return <section key={idx} className='py-20'>
                    <div className='container mx-auto bg-sky-100 rounded-[20px] md:px-16 md:pt-[74px] md:pb-9 px-6 py-7'>
                        <ServiceBox data={item} />
                    </div>
                </section>
            })}
            <section className='py-20 relative bg-sky-100'>
                <Image src="/images/service/familie-bg.png" alt='service/familie-bg.png' width={503} height={506} className='absolute inset-0 object-cover h-full md:block hidden' />
                <div className='container mx-auto px-4 grid md:grid-cols-2 grid-cols-1 gap-5 justify-between'>
                    <div className='relative'>
                        <Image src="/images/service/familie.png" alt='service/familie.png' width={666} height={1258} className='md:block hidden h-full' />
                    </div>
                    <div className='grid gap-16'>
                        <div className="md:p-[32.27px] px-3 py-[32.27px] max-w-[490px] mx-auto bg-white rounded-2xl flex-col justify-center items-start gap-[42.41px] flex w-full">
                            <div className="flex-col justify-start md:items-start items-center gap-[25.81px] flex w-full">
                                <h2 className="service_title text-sky-900 text-2xl font-bold md:text-left text-center leading-[47.94px]">
                                    Familiebegeleiding
                                </h2>
                                <p className="service_excrpt opacity-80 text-black md:text-[19px] text-base md:text-left text-center font-medium leading-[39px] tracking-wide">
                                    Je kunt om veel redenen kiezen voor familiebegeleiding, zoals conflicten tussen ouders en kinderen, slechte communicatie of financiële problemen.
                                </p>
                                <p className="service_excrpt opacity-80 text-black md:text-[19px] text-base md:text-left text-center font-medium leading-[39px] tracking-wide">
                                    Je kunt om veel redenen kiezen voor familiebegeleiding, zoals conflicten tussen ouders en kinderen, slechte communicatie of financiële problemen.
                                </p>
                                <div className="md:text-left text-center my-3">
                                    <Link href="#" className="text-center text-white text-base font-semibold uppercase tracking-wide md:px-12 px-8 py-4 bg-sky-900 rounded-[33.61px]">
                                        BoEk online
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <Image src="/images/service/familie.png" alt='service/familie.png' width={539} height={357} className='md:hidden block' />
                        <div className="md:p-[32.27px] px-3 py-[32.27px] max-w-[490px] mx-auto bg-white rounded-2xl flex-col justify-center items-start gap-[42.41px] flex w-full">
                            <div className="flex-col justify-start md:items-start items-center gap-[25.81px] flex w-full">
                                <h2 className="service_title text-sky-900 text-2xl font-bold md:text-left text-center leading-[47.94px]">
                                    Speltherapie
                                </h2>
                                <p className="service_excrpt opacity-80 text-black md:text-[19px] text-base md:text-left text-center font-medium leading-[39px] tracking-wide">
                                    Speltherapie kan kinderen helpen hun gevoelens of ervaringen op een natuurlijke manier te uiten terwijl ze hun emoties en reacties op gebeurtenissen verwerken. Bij Gedachte Gids Counseling Group bieden we speltherapiediensten aan om gezinnen te helpen de emotionele, gedragsmatige, sociale of leeruitdagingen van hun kind te begrijpen.Boek Online
                                </p>
                                <div className="md:text-left text-center my-3">
                                    <Link href="#" className="text-center text-white text-base font-semibold uppercase tracking-wide md:px-12 px-8 py-4 bg-sky-900 rounded-[33.61px]">
                                        BoEk online
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='py-20 md:px-0 px-4'>
                <div className='container mx-auto bg-sky-100 rounded-[20px] md:p-10 md:pb-20 pt-16 pb-16 px-3'>
                    <div>
                        <h2 className="max-w-[636px] mx-auto text-center text-sky-900 text-[32px] font-semibold leading-[52px]">
                            Gespecialiseerde Workshops
                        </h2>
                        <p className="max-w-[516px] mx-auto text-center text-sky-900 md:text-[22px] text-lg font-normal leading-[39px] tracking-wide mt-10">
                            Neem deel aan workshops gericht op specifieke onderwerpen zoals stressmanagement, mindfulness en meer.
                        </p>
                    </div>
                    <ul className='flex md:flex-row flex-col gap-6 mt-12 justify-center items-center'>
                        <li>
                            <Image src="/images/workshop/1.png" alt='workshop/1.png' width={396} height={290} />
                        </li>
                        <li>
                            <Image src="/images/workshop/1.png" alt='workshop/1.png' width={396} height={290} />
                        </li>
                        <li>
                            <Image src="/images/workshop/1.png" alt='workshop/1.png' width={396} height={290} />
                        </li>
                    </ul>
                </div>
            </section>
            <section className='py-20'>
                <div className='container mx-auto px-4 grid md:grid-cols-2 grid-cols-1 gap-5 justify-between'>
                    <div className='md:order-1 order-2'>
                        <Image src="/images/service/relatie.png" alt='service/relatie.png' width={627} height={399} className='w-full h-full' />
                    </div>
                    <div className='grid gap-16 md:order-2 order-1'>
                        <div className="max-w-[522px] mx-auto flex-col justify-center items-start gap-[42.41px] flex w-full">
                            <div className="flex-col justify-start md:items-start items-center gap-[25.81px] flex w-full">
                                <h2 className="service_title text-sky-900 text-2xl font-bold md:text-left text-center leading-[47.94px]">
                                    Gepersonaliseerde Benadering van Genezing
                                </h2>
                                <p className="service_excrpt opacity-80 text-black md:text-[19px] text-base md:text-left text-center font-medium leading-[39px] tracking-wide">
                                    Wij geloven dat de reis van elk individu naar mentaal welzijn uniek is. Onze geestelijke gezondheidsprofessionals hanteren een gepersonaliseerde benadering van genezing, zodat je de zorg en ondersteuning ontvangt die aansluit bij jouw specifieke omstandigheden en doelen.
                                </p>
                                <div className="md:text-left text-center my-3">
                                    <Link href="#" className="text-center text-white text-base font-semibold uppercase tracking-wide md:px-12 px-8 py-4 bg-sky-900 rounded-[33.61px]">
                                        BoEk online
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
