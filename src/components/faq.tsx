import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { Faqs_Data } from '@/const/faq-data'
import { motion } from "framer-motion";
import { fadeUp } from "@/const/anim";

export default function Faqs() {
    const [open, setOpen] = useState(1);
    const handleFaq = (id: any) => {
        if (open === id) {
            return setOpen(id)
        }
        setOpen(id)
    }

    return (
        <motion.div className="max-w-[813px] mx-auto divide-y ">
            {Faqs_Data.map((item: any, idx: number) => {
                return <motion.div key={idx}
                    variants={fadeUp}
                    className="w-full h-fit py-[30px]">
                    <div className="">
                        <div className="flex md:flex-row flex-row-reverse justify-between cursor-pointer" onClick={() => handleFaq(item.id)}>
                            <p className="text-sky-900 md:text-[22px] text-lg font-medium leading-7 w-full" >
                                {item.question}
                            </p>
                            <span className="text-lightBlue w-7 h-7">
                                {
                                    open === item.id ? (<AiOutlineMinus size={18} />) : (<AiOutlinePlus size={18} />)
                                }
                            </span>
                        </div>
                    </div>
                    <div className={`${open === item.id ? 'flex' : 'hidden'} `}>
                        <p className="text-sky-900 text-lg font-normal leading-[30px] mt-5" >
                            {item.ans}
                        </p>
                    </div>
                </motion.div>

            })}
        </motion.div>
    );
}