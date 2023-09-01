import { fadeUp } from '@/const/anim';
import { motion } from 'framer-motion';
import Image from 'next/image'
import React from 'react'
import { BsFillStarFill } from 'react-icons/bs'
import Slider from "react-slick";

function Testimonials({ testimonial }: any) {
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
    function generateArray(upToNumber:any) {
        let result = [];
        for (let i = 1; i <= upToNumber; i++) {
          result.push(i);
        }
        return result;
      }
    return (
        <motion.section
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.1 }}
            className='md:py-20 py-10 md:px-0 px-4'>
            <div className='container mx-auto px-4 bg-sky-100 rounded-[30px] py-36'>
                <motion.div
                    variants={fadeUp}
                    className='md:mb-20 mb-10'>
                    <h2 className="text-sky-900 md:text-[35px] text-[28px] font-medium leading-[52px] text-center">
                        Zet Vandaag de Eerste Stap: Ontdek, Boek, Genees
                    </h2>
                    <Image src="/images/arrow.png" alt='arrow.png' width={38} height={50} className='mx-auto' />
                    <p className="max-w-[761px] mx-auto text-center text-sky-900 text-xl font-normal leading-[38px]">
                        Begin jouw reis naar mentaal welzijn door onze diensten te verkennen, een afspraak te maken en je te begeven op een pad van persoonlijke groei en heling. Wij staan klaar om je bij elke stap te begeleiden.
                    </p>
                </motion.div>
                <div>
                    <Image src="/images/quotes.png" alt='qoutes.png' width={150} height={109} className='ml-[30%] -mb-12 md:block hidden' />
                    <div className='flex md:flex-row flex-col justify-between gap-7 items-center'>
                        <div className='md:w-[30%] w-full'>
                            <div className='md:w-[297px] w-[276px] md:ml-auto'>
                                <p className="text-sky-900 text-lg font-normal leading-[45px]">Testimonials</p>
                                <h2 className="text-sky-900 md:text-[35px] text-[22px] font-semibold leading-[52px]">
                                    Wat Onze Patienten zeggen
                                </h2>
                            </div>
                        </div>
                        <div className='md:w-[70%] w-full'>
                            <Slider {...settings}>
                                {testimonial.map((item: any, idx: number) => {
                                    let star = generateArray(5);
                                    return <motion.div
                                        variants={fadeUp}
                                        key={idx} className='px-3 rounded-[20px]'>
                                        <div className="p-[30px] !w-fit bg-white rounded-[20px] shadow-xl">
                                            <p className="max-w-[397px] text-black md:text-lg text-[15.16px] font-medium leading-[29.99px] tracking-wide">
                                                <span className="text-black text-3xl font-bold leading-[44.98px] tracking-wide">
                                                    “
                                                </span>
                                                <br />
                                                {item?.review}
                                                <br />
                                                <span className="text-black text-3xl font-bold leading-[46.65px] tracking-wide text-right block">
                                                    “
                                                </span>
                                            </p>
                                            <div className='w-full flex justify-between items-center gap-5'>
                                                <div>
                                                    <h4 className="text-black md:text-lg text-sm font-extrabold">
                                                        {item?.name}
                                                    </h4>
                                                    <p className="text-neutral-600 md:text-xs text-[10px] font-normal">
                                                        {item.designation}
                                                    </p>
                                                </div>
                                                <ul className='flex gap-1'>
                                                    {

                                                        star?.map((s: any, i: number) => (
                                                            <li key={i}>
                                                                <BsFillStarFill className="text-sky-900 md:h-8 md:w-8 h-4 w-4 md:p-1 p-0" />
                                                            </li>
                                                        ))
                                                    }

                                                </ul>
                                            </div>
                                        </div>
                                    </motion.div>
                                })}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Testimonials