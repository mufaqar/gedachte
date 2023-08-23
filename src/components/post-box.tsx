import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiOutlineShareAlt } from 'react-icons/ai'

function PostBox() {
    return (
        <div>
            <div>
                <Image src="/images/blog/1.png" alt='blog/1.png' width={645} height={437} />
            </div>
            <div className='flex justify-between items-center my-8'>
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
            <div>
                <Link href="#" className="w-[632px] text-sky-900 text-xl font-bold">
                    Stress Begrijpen en Beheersen in het Dagelijks Leven
                </Link>
                <p className="text-neutral-500 text-[15px] font-normal leading-[30px]">
                    Ontdek mindfulness als een krachtig instrument om je mentale welzijn te verbeteren. We leggen uit wat...
                </p>
            </div>
        </div>
    )
}

export default PostBox