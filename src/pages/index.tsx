import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="w-[542px] h-5 justify-start items-start gap-[39px] inline-flex">
        <div className="text-right text-black text-lg font-extrabold leading-[19.05px]">Home</div>
        <div className="text-right text-black text-lg font-semibold leading-[19.05px]">Diensten</div>
        <div className="text-right text-black text-lg font-semibold leading-[19.05px]">Hulpmiddelen</div>
        <div className="text-right text-black text-lg font-semibold leading-[19.05px]">Over Ons</div>
        <div className="text-right text-black text-lg font-semibold leading-[19.05px]">Contact</div>
      </div>


      <div className="w-[1312px] h-[864px] justify-start items-center gap-[92px] inline-flex">
        <img className="w-[643px] h-[864px] rounded-[20px]" src="https://via.placeholder.com/643x864" />
        <div className="bg-sky-100 flex-col justify-center items-start gap-[58px] inline-flex">
          <div className="text-sky-900 text-[32px] font-semibold leading-[52px]">Ga op weg naar welzijn</div>
          <div className="h-[720px] flex-col justify-start items-start gap-[49px] flex">
            <div className="self-stretch h-[168px] flex-col justify-center items-start gap-6 flex">
              <div className="w-[339px] justify-start items-center gap-8 inline-flex">
                <div className="w-[37px] h-[37px] relative">
                </div>
                <div className="w-60 h-[54px]"><span className="text-blue-800 text-[22px] font-medium leading-[52px]">Ontdek </span><span className="text-blue-800 text-[22px] font-medium capitalize leading-[52px]">Onze diensten</span></div>
              </div>
              <div className="self-stretch opacity-80 text-black text-lg font-normal leading-[30px]">Ontdek ons aanbod van op maat gemaakte diensten voor mentale gezondheid, speciaal ontworpen om aan jouw unieke behoeften en doelen te voldoen.</div>
            </div>
            <div className="self-stretch h-[136px] flex-col justify-center items-start gap-6 flex">
              <div className="w-[339px] justify-start items-center gap-8 inline-flex">
                <div className="w-[37px] h-[37px] relative">
                </div>
                <div className="text-blue-800 text-[22px] font-medium capitalize leading-[52px]">Boek een afspraak</div>
              </div>
              <div className="self-stretch opacity-80 text-black text-lg font-normal leading-[30px]">Gebruik ons online boekingssysteem om op jouw gemak een sessie in te plannen.</div>
            </div>
            <div className="self-stretch h-[136px] flex-col justify-center items-start gap-6 flex">
              <div className="w-[339px] justify-start items-center gap-8 inline-flex">
                <div className="w-[37px] h-[37px] relative">
                </div>
                <div className="text-blue-800 text-[22px] font-medium capitalize leading-[52px]">Speciale Events</div>
              </div>
              <div className="self-stretch opacity-80 text-black text-lg font-normal leading-[30px]">Ontmoet je toegewijde therapeut voor een gepersonaliseerde sessie gericht op jouw uitdagingen en persoonlijke groei.</div>
            </div>
            <div className="self-stretch h-[133px] flex-col justify-center items-start gap-6 flex">
              <div className="w-[339px] justify-start items-center gap-8 inline-flex">
                <div className="w-[37px] h-[37px] relative">
                </div>
                <div className="w-[394px] h-[49px] text-blue-800 text-[22px] font-medium capitalize leading-[52px]">Blijvende steun</div>
              </div>
              <div className="self-stretch opacity-80 text-black text-lg font-normal leading-[30px]">Profiteer van doorlopende begeleiding, informatieve bronnen en communicatie om je reis naar mentaal welzijn te voeden.</div>
            </div>
          </div>
        </div>
      </div>

    </main >
  )
}
