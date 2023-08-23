import Image from 'next/image'
import React from 'react'
import { BsFillStarFill } from 'react-icons/bs'
import Slider from "react-slick";

function Testimonials() {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        // className: "center",
        // centerMode: true,
        // centerPadding: "0",
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
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
                    <Image src="/images/quotes.png" alt='qoutes.png' width={150} height={109} className='ml-[30%] -mb-12' />
                    <div className='flex md:flex-row flex-col justify-between gap-7 items-center'>
                        <div className='md:w-[30%] w-full'>
                            <div className='w-[297px] md:ml-auto'>
                                <p className="text-sky-900 text-lg font-normal leading-[52px]">Testimonials</p>
                                <h2 className="text-sky-900 text-[35px] font-semibold leading-[52px]">
                                    Wat Onze Patienten zeggen
                                </h2>
                            </div>
                        </div>
                        <div className='md:w-[70%] w-full'>
                            <Slider {...settings}>
                                {[0, 1, 2, 3].map((item: any, idx: number) => {
                                    return <div key={idx} className='px-3 rounded-[20px]'>
                                        <div className="p-[30px] !w-fit bg-white rounded-[20px] shadow-xl">
                                            <p className="max-w-[397px] text-black text-lg font-medium leading-[29.99px] tracking-wide">
                                                <span className="text-black text-3xl font-bold leading-[44.98px] tracking-wide">
                                                    “
                                                </span>
                                                <br />
                                                Gedachte Gids heeft mijn leven veranderd. Dankzij hun deskundige begeleiding voel ik me nu veel gelukkiger en zelfverzekerder. Een absolute aanrader!
                                                <br />
                                                <span className="text-black text-3xl font-bold leading-[46.65px] tracking-wide text-right block">
                                                    “
                                                </span>
                                            </p>
                                            <div className='w-full flex justify-between gap-5'>
                                                <div>
                                                    <h4 className="text-black text-lg font-extrabold">
                                                        Sandra de Vries
                                                    </h4>
                                                    <p className="text-neutral-600 text-xs font-normal">
                                                        Regional Markets Executive
                                                    </p>
                                                </div>
                                                <ul className='flex gap-1'>
                                                    <li>
                                                        <BsFillStarFill className="text-sky-900 h-8 w-8 p-1" />
                                                    </li>
                                                    <li>
                                                        <BsFillStarFill className="text-sky-900 h-8 w-8 p-1" />
                                                    </li>
                                                    <li>
                                                        <BsFillStarFill className="text-sky-900 h-8 w-8 p-1" />
                                                    </li>
                                                    <li>
                                                        <BsFillStarFill className="text-sky-900 h-8 w-8 p-1" />
                                                    </li>
                                                    <li>
                                                        <BsFillStarFill className="text-sky-900 h-8 w-8 p-1" />
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                })}
                                {/* <div className="p-[30px] bg-white rounded-[20px] drop-shadow-2xl flex-col justify-center items-center gap-[30px] inline-flex">
                                    <p className="w-[397px] text-black text-lg font-medium leading-[29.99px] tracking-wide">
                                        <span className="text-black text-3xl font-bold leading-[44.98px] tracking-wide">
                                            “
                                        </span>
                                        <br />
                                        Gedachte Gids heeft mijn leven veranderd. Dankzij hun deskundige begeleiding voel ik me nu veel gelukkiger en zelfverzekerder. Een absolute aanrader!
                                        <br />
                                        <span className="text-black text-3xl font-bold leading-[46.65px] tracking-wide text-right block">
                                            “
                                        </span>
                                    </p>
                                    <div className='w-full flex justify-between gap-5'>
                                        <div>
                                            <h4 className="text-black text-lg font-extrabold">
                                                Sandra de Vries
                                            </h4>
                                            <p className="text-neutral-600 text-xs font-normal">
                                                Regional Markets Executive
                                            </p>
                                        </div>
                                        <ul className='flex gap-1'>
                                            <li>
                                                <BsFillStarFill className="text-sky-900 h-8 w-8 p-1" />
                                            </li>
                                            <li>
                                                <BsFillStarFill className="text-sky-900 h-8 w-8 p-1" />
                                            </li>
                                            <li>
                                                <BsFillStarFill className="text-sky-900 h-8 w-8 p-1" />
                                            </li>
                                            <li>
                                                <BsFillStarFill className="text-sky-900 h-8 w-8 p-1" />
                                            </li>
                                            <li>
                                                <BsFillStarFill className="text-sky-900 h-8 w-8 p-1" />
                                            </li>
                                        </ul>
                                    </div>
                                </div> */}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials