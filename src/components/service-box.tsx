import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function ServiceBox({ data }: any) {
  return (
    <div className={`flex flex-col gap-8 items-center ${data.id === 2 ? "md:flex-row-reverse" : "md:flex-row"}`}>
      <div className='md:w-1/2 w-full'>
        <div className="md:p-[32.27px] px-2 py-[32.27px] max-w-[490px] mx-auto bg-white rounded-2xl flex-col justify-center items-start gap-[42.41px] flex w-full">
          <div className="flex-col justify-start md:items-start items-center gap-[25.81px] flex w-full">
            <h2 className="service_title text-sky-900 text-2xl font-bold md:text-left text-center leading-[47.94px]">
              {data?.title}
            </h2>
            <p className="service_excrpt text-sky-900 text-base font-normal md:text-left text-center leading-9 tracking-tight">
              {data?.excrpt}
            </p>
            <div className="md:text-left text-center my-3">
              <Link href="#" className="text-center text-white text-base font-semibold uppercase tracking-wide md:px-12 px-8 py-4 bg-sky-900 rounded-[33.61px]">
                BoEk online
              </Link>
            </div>
          </div>
          <div className="service_feature rounded-2xl">
            <Image src={data?.img} alt={data?.img} width={482} height={307} />
          </div>
        </div>
      </div>
      <div className='service_desc md:w-1/2 w-full'>
        <div className='max-w-[522px] grid gap-10'>
          {data?.desc?.map((item: any, _idx: any) => {
            return <p key={_idx} className="opacity-80 text-black md:text-[19px] text-base font-medium md:text-left text-center leading-[39px] tracking-wide">
              {item.para}
            </p>
          })}
        </div>
      </div>
    </div>
  )
}

export default ServiceBox