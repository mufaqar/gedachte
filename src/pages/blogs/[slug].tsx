import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CgLoadbarSound } from 'react-icons/cg'
import { LuClock9 } from 'react-icons/lu'
import { BsFacebook, BsTwitter, BsPinterest } from 'react-icons/bs'
import Comments_Sec from '@/components/comment-sec'
import { Posts_Data } from '@/const/posts-data'
import PostBox from '@/components/post-box'

function Single_Blog() {
    return (
        <main>
            <section className="bg-sky-900/60 md:py-20 py-10 bg-[url('/images/blog/6.png')] bg-center bg-no-repeat bg-cover bg-blend-multiply">
                <div className='container mx-auto px-8'>
                    <h1 className="text-white text-[39px] md:text-left text-center font-semibold leading-[45px] mb-4">
                        Stress Begrijpen en Beheersen in het Dagelijks Leven
                    </h1>
                    <p className="md:w-[520px] w-[300px] md:mx-0 mx-auto text-white md:text-lg text-base md:text-left text-center font-normal leading-[26.94px] mb-12">
                        Verken het concept van stress, de meest voorkomende triggers en praktische strategieën om dagelijkse stress te beheersen.
                    </p>
                    <div className='post_meta flex flex-wrap gap-2.5 md:justify-start justify-center items-center'>
                        <span className="text-neutral-200 md:text-xl sm font-normal leading-10">
                            by Joanna Wellick
                        </span>
                        <span className='h-[1px] w-5 bg-neutral-200'></span>
                        <span className="text-neutral-200 md:text-base text-xs font-normal tracking-tight flex gap-1 items-center">
                            <LuClock9 className="w-4 h-4" /> 2 minute read
                        </span>
                        <span className='h-[1px] w-5 bg-neutral-200'></span>
                        <span className="text-neutral-200 md:text-base text-xs font-normal tracking-tight flex gap-1 items-center">
                            <CgLoadbarSound className="w-4 h-4" /> 1.6K views
                        </span>
                        <span className='h-[1px] w-5 bg-neutral-200'></span>
                        <ul className='flex flex-wrap gap-2.5 text-neutral-200 items-center'>
                            <li>
                                <BsFacebook className="w-4 h-4" />
                            </li>
                            <li>
                                <BsTwitter className="w-4 h-4" />
                            </li>
                            <li>
                                <BsPinterest className="w-4 h-4" />
                            </li>
                            <li className="text-neutral-200 md:text-base text-xs font-normal tracking-tight">
                                1.2K shares
                            </li>
                        </ul>

                    </div>
                </div>
            </section>
            <section className='md:py-20 py-10'>
                <div className='container mx-auto px-4 flex md:flex-row flex-col gap-7'>
                    <div className='md:w-2/3 w-full'>
                        <p className="max-w-[711px] text-black md:text-lg text-base font-normal leading-[39px] tracking-wide">
                            Stress is een onvermijdelijk onderdeel van ons leven, vaak veroorzaakt door de eisen van werk, relaties en diverse verantwoordelijkheden. Hoewel een bepaald niveau van stress motiverend kan zijn, kan chronische stress een zware wissel trekken op onze mentale en fysieke gezondheid. Begrijpen wat stress is en effectieve strategieën leren om het te beheersen, kan ons in staat stellen gezonder en evenwichtiger te leven.
                        </p>
                    </div>
                    <div className='md:w-1/3 w-full'>
                        <Image src="/images/blog/post1.png" alt='images/blog/post1.png' width={478} height={268} />
                    </div>
                </div>
                <div className='container mx-auto px-4 my-8 grid gap-8'>
                    <h2 className="text-sky-900 text-[28px] font-semibold leading-[45px]">
                        Wat is Stress?
                    </h2>
                    <p className="text-black md:text-lg text-base font-normal leading-[39px] tracking-wide">
                        Stress is de natuurlijke reactie van het lichaam op elke vraag of bedreiging. Wanneer we worden geconfronteerd met een uitdaging, of het nu een strakke deadline op het werk is of een persoonlijk probleem, geeft ons lichaam stresshormonen af zoals cortisol en adrenaline. Deze hormonen bereiden ons voor om snel te reageren, algemeen bekend als de 'vecht-of-vlucht'-reactie. In korte uitbarstingen kan deze reactie gunstig zijn, maar langdurige blootstelling aan stressoren kan leiden tot chronische stress en de bijbehorende gezondheidseffecten.
                    </p>
                    <h2 className="text-sky-900 text-[28px] font-semibold leading-[45px]">
                        Stressoren Identificeren
                    </h2>
                    <p className="text-black md:text-lg text-base font-normal leading-[39px] tracking-wide">
                        De eerste stap in het beheersen van stress is het identificeren van de bronnen, ook wel stressoren genoemd. Stressoren kunnen sterk variëren van persoon tot persoon en kunnen werkgerelateerde druk, financiële zorgen, relatieproblemen, gezondheidsproblemen en meer omvatten. Door de specifieke stressoren die ons beïnvloeden te lokaliseren, kunnen we werken aan het aanpakken of minimaliseren van hun impact op ons leven.
                    </p>
                    <h2 className="text-sky-900 text-[28px] font-semibold leading-[45px]">
                        De Impact van Chronische Stress
                    </h2>
                    <p className="text-black md:text-lg text-base font-normal leading-[39px] tracking-wide">
                        Chronische stress, indien niet beheerd, kan ernstige gevolgen hebben voor zowel onze fysieke als mentale gezondheid. Het is gekoppeld aan een reeks problemen zoals een verhoogd risico op hartziekten, verzwakte immuunfunctie, slaapstoornissen, angst en depressie. Het herkennen van de tekenen van chronische stress, zoals aanhoudende vermoeidheid, prikkelbaarheid en veranderingen in eetlust, is cruciaal voor het nemen van proactieve stappen in de richting van het beheer ervan."
                    </p>
                </div>
            </section>
            <section className='md:py-20 py-10'>
                <div className='container mx-auto px-4 grid gap-8'>
                    <div className='flex md:flex-row flex-col md:gap-12 gap-7'>
                        <div className='md:w-1/3 w-full'>
                            <Image src="/images/blog/post2.png" alt='images/blog/post2.png' width={445} height={448} />
                        </div>
                        <div className='md:w-2/3 w-full grid gap-8'>
                            <h2 className="text-sky-900 text-[28px] font-semibold leading-[45px]">
                                Effective Stress Management Strategie
                            </h2>
                            <h3 className="text-sky-900 text-2xl font-semibold leading-[45px]">
                                1 -Beoefen Ontspanningstechnieken:
                            </h3>
                            <p className="max-w-[578px] text-black md:text-lg text-base font-normal leading-[39px] tracking-wide">
                                Doe aan ontspanningstechnieken zoals diepe ademhaling, meditatie en progressieve spierontspanning. Deze methoden activeren de ontspanningsreactie van het lichaam, wat de stressreactie tegengaat.
                            </p>
                            <h3 className="text-sky-900 text-2xl font-semibold leading-[45px]">
                                2 - Regelmatige Lichamelijke Activiteit:
                            </h3>
                            <p className="max-w-[578px] text-black md:text-lg text-base font-normal leading-[39px] tracking-wide">
                                Beweging zorgt voor de afgifte van endorfines, de natuurlijke stemmingverbeteraars van het lichaam. Regelmatige lichamelijke activiteit kan stress verminderen en het algehele welzijn verbeteren.
                            </p>
                        </div>
                    </div>
                    <div className='flex md:flex-row flex-col md:gap-12 gap-7'>
                        <div className='md:w-1/3 w-full'>
                            <Image src="/images/blog/post3.png" alt='images/blog/post3.png' width={445} height={448} />
                        </div>
                        <div className='md:w-2/3 w-full grid gap-8'>
                            <h3 className="text-sky-900 text-2xl font-semibold leading-[45px]">
                                3 - Gezonde Levensstijlkeuzes:
                            </h3>
                            <p className="max-w-[578px] text-black md:text-lg text-base font-normal leading-[39px] tracking-wide">
                                Houd een evenwichtig dieet aan, prioriteer slaap en beperk de consumptie van stimulerende middelen zoals cafeïne en nicotine. Een gezonde levensstijl ondersteunt de veerkracht van het lichaam tegen stress.
                            </p>
                            <h3 className="text-sky-900 text-2xl font-semibold leading-[45px]">
                                4 - Tijdmanagement:
                            </h3>
                            <p className="max-w-[578px] text-black md:text-lg text-base font-normal leading-[39px] tracking-wide">
                                Organiseer taken en prioriteer verantwoordelijkheden. Effectief tijdmanagement kan voorkomen dat je je overweldigd voelt en een gevoel van controle creëren.
                            </p>
                        </div>
                    </div>
                    <div className='flex md:flex-row flex-col md:gap-12 gap-7'>
                        <div className='md:w-1/3 w-full'>
                            <Image src="/images/blog/post4.png" alt='images/blog/post4.png' width={445} height={448} />
                        </div>
                        <div className='md:w-2/3 w-full grid gap-8'>
                            <h3 className="text-sky-900 text-2xl font-semibold leading-[45px]">
                                5 - Zoek Sociale Ondersteuning:
                            </h3>
                            <p className="max-w-[578px] text-black md:text-lg text-base font-normal leading-[39px] tracking-wide">
                                Maak verbinding met vrienden, familie of steungroepen. Het delen van je gevoelens en zorgen met anderen kan de emotionele last verlichten. 6 - Stel Grenzen:
                            </p>
                            <h3 className="text-sky-900 text-2xl font-semibold leading-[45px]">
                                6 - Stel Grenzen:
                            </h3>
                            <p className="max-w-[578px] text-black md:text-lg text-base font-normal leading-[39px] tracking-wide">
                                Leer nee te zeggen wanneer nodig en stel grenzen die je tijd en energie beschermen.
                            </p>
                            <h3 className="text-sky-900 text-2xl font-semibold leading-[45px]">
                                7 - Mindfulness en Mind-Body Praktijken:
                            </h3>
                            <p className="max-w-[578px] text-black md:text-lg text-base font-normal leading-[39px] tracking-wide">
                                Doe aan mindfulnessmeditatie, yoga of tai chi. Deze praktijken bevorderen het bewustzijn van het huidige moment en kunnen stress op termijn verminderen.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='md:py-20 py-10'>
                <div className='container mx-auto px-4 grid gap-8'>
                    <h2 className="text-sky-900 text-[28px] font-semibold leading-[45px]">
                        Stressoren Identificeren
                    </h2>
                    <p className="text-black md:text-lg text-base font-normal leading-[39px] tracking-wide">
                        De eerste stap in het beheersen van stress is het identificeren van de bronnen, ook wel stressoren genoemd. Stressoren kunnen sterk variëren van persoon tot persoon en kunnen werkgerelateerde druk, financiële zorgen, relatieproblemen, gezondheidsproblemen en meer omvatten. Door de specifieke stressoren die ons beïnvloeden te lokaliseren, kunnen we werken aan het aanpakken of minimaliseren van hun impact op ons leven.
                    </p>
                    <h2 className="text-sky-900 text-[28px] font-semibold leading-[45px]">
                        De Impact van Chronische Stress
                    </h2>
                    <p className="text-black md:text-lg text-base font-normal leading-[39px] tracking-wide">
                        Chronische stress, indien niet beheerd, kan ernstige gevolgen hebben voor zowel onze fysieke als mentale gezondheid. Het is gekoppeld aan een reeks problemen zoals een verhoogd risico op hartziekten, verzwakte immuunfunctie, slaapstoornissen, angst en depressie. Het herkennen van de tekenen van chronische stress, zoals aanhoudende vermoeidheid, prikkelbaarheid en veranderingen in eetlust, is cruciaal voor het nemen van proactieve stappen in de richting van het beheer ervan."
                    </p>
                    <h2 className="text-sky-900 text-[28px] font-semibold leading-[45px]">
                        Stressoren Identificeren
                    </h2>
                    <p className="text-black md:text-lg text-base font-normal leading-[39px] tracking-wide">
                        De eerste stap in het beheersen van stress is het identificeren van de bronnen, ook wel stressoren genoemd. Stressoren kunnen sterk variëren van persoon tot persoon en kunnen werkgerelateerde druk, financiële zorgen, relatieproblemen, gezondheidsproblemen en meer omvatten. Door de specifieke stressoren die ons beïnvloeden te lokaliseren, kunnen we werken aan het aanpakken of minimaliseren van hun impact op ons leven.
                    </p>
                </div>
            </section>
            <Comments_Sec />
            <section className='md:py-20 py-10'>
                <div className='container mx-auto px-4'>
                    <h2 className="text-sky-900 text-[32px] md:text-left text-center font-semibold leading-[45px] mb-2">
                        Vergelijkbare Artikelen
                    </h2>
                </div>
                <div className='container mx-auto px-4 grid md:grid-cols-3 grid-cols-1 gap-7 md:mt-20 mt-10'>
                    {Posts_Data.slice(0, 3).map((item: any, idx: number) => {
                        return <PostBox key={idx} data={item} />
                    })}
                </div>
                <div className='container mx-auto px-4 pt-20 text-center'>
                    <Link href="#" className="text-center text-white text-[14.91px] font-semibold uppercase tracking-wide px-16 py-4 bg-sky-900 rounded-[36.46px]">
                        Lees Meer
                    </Link>
                </div>
            </section>
        </main>
    )
}

export default Single_Blog