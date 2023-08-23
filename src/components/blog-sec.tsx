import React from 'react'
import PostBox from './post-box'
import Link from 'next/link'
import { AiOutlineShareAlt } from 'react-icons/ai'
import Image from 'next/image'

function Blog_Sec() {
    return (
        <section className='py-20'>
            <div className='container mx-auto px-4'>
                <div className='mb-12'>
                    <h2 className="py-[30px] border-b border-violet-950/40 max-w-[480px]">
                        <span className="text-sky-900 text-[32px] font-semibold leading-[52px]">
                            Leer Meer Van Onze
                        </span><br />
                        <span className="text-sky-900 text-[32px] font-bold leading-[52px]">
                            Specialisten
                        </span>
                    </h2>
                </div>
                <div className='grid md:grid-cols-2 grid-cols-1 md:gap-20 gap-7 items-center'>
                    <div>
                        <div>
                            <Image src="/images/blog/1.png" alt='blog/1.png' width={645} height={437} className='w-full' />
                        </div>
                        <div className='grid md:grid-cols-2 grid-cols-1 justify-between my-8'>
                            <div className='flex justify-between items-center'>
                                <div className='flex gap-3 items-center'>
                                    <Image src="/images/blog/author.png" alt='blog/author.png' width={33} height={34} />
                                    <span>
                                        <Link href="#" className="text-neutral-900 text-sm font-normal leading-loose">
                                            Joanna Wellick
                                        </Link>
                                    </span>
                                </div>
                                <span className='h-[1px] w-8 bg-black/10'></span>
                                <Link href="#" className="text-gray-500 text-sm font-normal leading-loose">
                                    Juni 28, 2023
                                </Link>
                            </div>
                            <div className='md:flex hidden justify-end'>
                                <Link href="#" className="text-gray-500 text-sm font-normal leading-loose flex items-center">
                                    <AiOutlineShareAlt />  1K shares
                                </Link>
                            </div>
                        </div>
                        <div>
                            <Link href="#" className="w-[632px] text-sky-900 text-xl font-bold">
                                Stress Begrijpen en Beheersen in het Dagelijks Leven
                            </Link>
                            <p className="opacity-80 text-black text-base font-normal leading-[33.92px] tracking-tight">
                                Duik in het concept van stress, ontdek de meest voorkomende triggers en leer praktische strategieën om dagelijkse stress te beheersen. Wij bieden je concrete tips om stressverlagende technieken moeiteloos in je dagelijkse routine te integreren.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className='flex md:flex-row flex-col gap-10'>
                            <PostBox />
                            <PostBox />
                        </div>
                        <div className="mt-5 bg-white rounded-[20px] border border-black border-opacity-10 flex md:flex-row flex-col-reverse">
                            <div className='w-full py-5 px-10 flex flex-col gap-3 justify-center items-center'>
                                <p className="text-sky-900 text-[22px] font-bold capitalize leading-[35px]">
                                    Zie meer blogs
                                </p>
                                <Link href="#" className="text-center text-white text-[10.08px] font-semibold uppercase tracking-tight px-6 py-2.5 bg-sky-900 rounded-3xl">
                                    Ga naar blogs
                                </Link>
                            </div>
                            <Image src="/images/blog/cta.png" alt="blog/cta.png" width={286} height={147} className='object-cover w-full h-full' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog_Sec