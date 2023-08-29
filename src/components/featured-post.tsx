import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Featured_Post({img} : any) {
    return (
        <div>
            <div className='featured_img'>
                <Image src={img} alt={img} width={645} height={437} />
            </div>
            <div className='post_meta flex justify-between items-center my-8'>
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
            <div className='post_content'>
                <Link href="#" className="post-title w-[632px] text-sky-900 text-xl font-bold">
                    Stress Begrijpen en Beheersen in het Dagelijks Leven
                </Link>
                <p className="post_excrpt text-neutral-500 text-[15px] font-normal leading-[30px] mt-2.5">
                    Ontdek mindfulness als een krachtig instrument om je mentale welzijn te verbeteren. We leggen uit wat...
                </p>
            </div>
        </div>
    )
}

export default Featured_Post