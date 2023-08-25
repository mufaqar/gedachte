import React from 'react'
import { BiComment } from 'react-icons/bi'
import { FaShare } from 'react-icons/fa'
import { BsFacebook, BsTwitter, BsPinterest } from 'react-icons/bs'
import ComentBox from './coment-box'

export default function Comments_Sec() {
    return (
        <section className='py-20'>
            <div className='container mx-auto px-4'>
                <div className='flex flex-wrap justify-between items-center mb-5'>
                    <div>
                        <span className="text-sky-900 text-base font-medium leading-10 flex flex-wrap gap-2 items-center">
                            <BiComment />  36 Comments
                        </span>
                    </div>
                    <ul className='flex flex-wrap gap-5 items-center'>
                        <li>
                            <span className="text-sky-900 text-base font-medium leading-10 flex flex-wrap gap-2 items-center">
                                <FaShare />  Share
                            </span>
                        </li>
                        <li>
                            <BsFacebook className="fill-indigo-800 w-7 h-7" />
                        </li>
                        <li>
                            <BsTwitter className="fill-sky-500 w-7 h-7" />
                        </li>
                        <li>
                            <BsPinterest className="fill-red-600 w-7 h-7" />
                        </li>
                    </ul>
                </div>
                <div className="relative h-[646px] overflow-y-scroll rounded-[20px] md:border border-black/30 grid md:grid-cols-2 grid-cols-1 gap-7 py-12 md:px-14 px-0">
                    <div>
                        <ComentBox />
                    </div>
                    <div>
                        <h4 className="text-black text-[19.19px] font-bold leading-tight">
                            Laat een Bericht Achter
                        </h4>
                        <p className="text-black text-xs font-normal leading-tight">
                            Uw email wordt niet gepubliseerd
                        </p>
                        <form className="self-stretch h-[169.09px] flex-col justify-start items-start gap-[29px] flex">
                            <div className="self-stretch h-[65.43px] relative">
                                <div className="w-[126.81px] left-0 top-0 absolute text-black text-xs font-medium leading-tight">Naam</div>
                                <div className="w-[84.54px] left-0 top-[35.31px] absolute text-neutral-400 text-sm font-medium leading-tight">John Doe</div>
                            </div>
                            <div className="h-[74.66px] relative">
                                <div className="w-[59.21px] left-0 top-0 absolute text-black text-xs font-medium leading-tight">Email</div>
                                <div className="w-[136.68px] left-0 top-[38.83px] absolute text-center">Johndoe@gmail.com</div>
                            </div>
                            <div className="w-[388px] h-[68.97px] relative">
                                <div className="left-0 top-0 absolute text-black text-xs font-medium leading-tight">Comment</div>
                                <div className="left-0 top-[39.30px] absolute text-neutral-400 text-sm font-medium leading-tight">Schrijf jouw comment hier...</div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </section>
    )
}
