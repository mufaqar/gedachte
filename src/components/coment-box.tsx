import Image from 'next/image'
import React from 'react'

function ComentBox() {
    return (
        <div className="p-5 bg-sky-100/50 rounded-[10px]">
            <div className="justify-start items-center gap-3.5 inline-flex">
                <Image className="w-[28.76px] h-[28.76px] rounded-full" src="/images/blog/author.png" alt='blog/author.png' width={33} height={34} />
                <p className="text-slate-700 text-sm font-medium">
                    amyrobson
                </p>
                <span className="text-gray-500 text-sm font-normal leading-snug">
                    1 maand geleden
                </span>
            </div>
            <p className="text-gray-500 text-sm font-medium leading-snug">
                Uitstekend werk wat betreft de lay-out en het kleurenschema! Het is visueel aantrekkelijk. Slechts een klein probleem met het navigatiemenu, maar dat is geen dealbreaker.
            </p>
        </div>
    )
}

export default ComentBox