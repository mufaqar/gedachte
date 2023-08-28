import React from 'react'
import { BiComment } from 'react-icons/bi'
import { FaShare } from 'react-icons/fa'
import { BsFacebook, BsTwitter, BsPinterest } from 'react-icons/bs'
import ComentBox from './coment-box'

export default function Comments_Sec() {
    return (
        <section className='md:py-20 py-10'>
            <div className='container mx-auto px-4'>
                <div className='md:flex hidden flex-wrap justify-between items-center mb-5'>
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
                <div className="comment_box relative rounded-[20px] md:border border-black/30 grid md:grid-cols-2 grid-cols-1 gap-7 md:py-12 py-0 md:px-14 px-0">
                    <span className="text-sky-900 text-base font-medium leading-10 flex flex-wrap gap-2 items-center md:hidden">
                        <BiComment />  36 Comments
                    </span>
                    <div className='flex flex-col gap-5 h-[500px] overflow-y-scroll px-5'>
                        {[0, 1, 2, 3, 4, 5, 6, 7].map((item: any, idx: number) => {
                            return <ComentBox key={idx} />
                        })}
                    </div>
                    <div>
                        <ul className='md:hidden flex flex-wrap gap-5 items-center justify-end my-10'>
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
                        <div className='max-w-[388px] mx-auto'>
                            <h4 className="text-black text-[19.19px] font-bold leading-tight mb-5">
                                Laat een Bericht Achter
                            </h4>
                            <p className="text-black text-xs font-normal leading-tight">
                                Uw email wordt niet gepubliseerd
                            </p>
                            <form className="flex-col justify-start items-start gap-[29px] flex mt-6">
                                <div className="w-full relative">
                                    <label htmlFor='name' className="text-black text-xs font-medium leading-tight">Naam</label>
                                    <input className="w-full py-3 text-neutral-400 placeholder:text-neutral-400 text-sm font-medium leading-tight border-b border-neutral-400 focus:outline-0 mt-2"
                                        placeholder='John Doe'
                                        type="text"
                                        id="name"
                                    />
                                </div>
                                <div className="w-full relative">
                                    <label htmlFor='email' className="text-black text-xs font-medium leading-tight">Email</label>
                                    <input className="w-full py-3 text-neutral-400 placeholder:text-neutral-400 text-sm font-medium leading-tight border-b border-neutral-400 focus:outline-0 mt-2"
                                        placeholder='Johndoe@gmail.com'
                                        type="email"
                                        id="email"
                                    />
                                </div>
                                <div className="w-full relative">
                                    <label htmlFor='comment' className="text-black text-xs font-medium leading-tight">Comment</label>
                                    <input className="w-full py-3 text-neutral-400 placeholder:text-neutral-400 text-sm font-medium leading-tight border-b border-neutral-400 focus:outline-0 mt-2"
                                        placeholder='Schrijf jouw comment hier...'
                                        type="text"
                                        id="comment"
                                    />
                                </div>
                                <button type="submit" className="md:w-auto w-full py-3 px-9 mx-auto bg-sky-900 rounded-3xl text-center text-white text-[13.01px] font-semibold uppercase tracking-tight">
                                    Stuur Bericht
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
