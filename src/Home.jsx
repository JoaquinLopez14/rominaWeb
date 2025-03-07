import React from "react";
import { Link } from "react-router-dom";
import bgHome from "/bg-home.png"
import read from "./assets/read.png"
import hmm from "./assets/hmm.webp"
import wtf from "./assets/wtf.webp"
import love2 from "./assets/love2.png"
import sleep from "./assets/sleep.webp"
import ashemed from "./assets/ashemed.png"
import sexy from "./assets/sexy.png"
import thanks from "./assets/thanks.webp"
import love3 from "./assets/love3.png"
import voice from "./assets/voice.webp"
import photos from "./assets/photos.gif"
import joa from "./assets/joa.png"
import juli from "./assets/juli.png"
import AnimatedCounter from "./components/AnimatedCounter"
import FadeIn from "./components/FadeIn"

function Home() {
    return(
        <>
        <section className="min-h-screen flex flex-col justify-center items-center text-center font-secundary bg-[#06171c]/90 font-bold" style={{backgroundImage:`url(${bgHome})`}}>
            <div className="min-h-screen text-center flex flex-col items-center gap-10 justify-center p-10">
            <FadeIn delay={0.5}><h1 className="text-white text-center p-2 text-5xl"> Repasemos su historia </h1></FadeIn>
            <FadeIn delay={0.8}><h1 className="text-white text-xl">Para eso, Joaquin me brindó su chat.</h1></FadeIn>
            <FadeIn delay={1}><h1 className="text-white text-xl">Con su permiso, no el tuyo, voy a leerlo.</h1></FadeIn>
                <FadeIn delay={3}><img src={read} className="w-36"></img></FadeIn>
            </div>
            <div className="min-h-screen flex flex-col gap-10 justify-center items-center">
                <h1 className="text-white text-xl">Pude recopilar algunos datos interesantes</h1>
                <h1 className="text-white text-4xl">¿Estas lista?</h1>
                <img src={hmm}></img>
            </div>
            <div className="min-h-screen flex flex-col gap-10 justify-center items-center">
                <h2 className="text-white text-2xl">Han intercambiado un total de:</h2>
                <AnimatedCounter from={0} to={1549187} duration={5}/>
                <h1 className="text-white text-4xl"> Palabras </h1>
                <FadeIn delay={4}><img src={wtf}></img></FadeIn>
            </div>
            <div className="min-h-screen flex flex-col gap-10 justify-center items-center">
                <h2 className="text-white text-xl ">Se han dicho "Te Amo"</h2>
                <AnimatedCounter from={0} to={764} duration={5}/>
                <h1 className="text-white text-4xl"> Veces </h1>
                <FadeIn delay={4}><img src={love2} className="w-60"></img></FadeIn>
            </div>
            <div className="min-h-screen flex flex-col gap-10 justify-center items-center">
                <h2 className="text-white text-xl">Se han dicho "Buenos Dias"</h2>
                <AnimatedCounter from={0} to={498} duration={5}/>
                <h1 className="text-white text-4xl"> Veces </h1>
                <FadeIn delay={4}><img src={sleep}></img></FadeIn>
            </div>
            <div className="min-h-screen flex flex-col gap-10 justify-center items-center">
                <h2 className="text-white text-xl">Se han perdonado</h2>
                <AnimatedCounter from={0} to={322} duration={5}/>
                <h1 className="text-white text-4xl"> Veces </h1>
                <FadeIn delay={4}><img src={ashemed} className="w-60"></img></FadeIn>
            </div>
            <div className="min-h-screen flex flex-col gap-10 justify-center items-center">
                <h2 className="text-white text-xl">Se piropearon</h2>
                <AnimatedCounter from={0} to={504} duration={5}/>
                <h1 className="text-white text-4xl"> Veces </h1>
                <FadeIn delay={4}><img src={sexy} className="w-60"></img></FadeIn>
            </div>
            <div className="min-h-screen flex flex-col gap-10 justify-center items-center">
                <h2 className="text-white text-xl">Se dijieron "Gracias"</h2>
                <AnimatedCounter from={0} to={523} duration={5}/>
                <h1 className="text-white text-4xl"> Veces </h1>
                <FadeIn delay={4}><img src={thanks} className="w-60"></img></FadeIn>
            </div>
            <div className="min-h-screen flex flex-col gap-10 justify-center items-center">
                <h2 className="text-white text-xl">Se dijieron mutuamente "amor"</h2>
                <AnimatedCounter from={0} to={41822} duration={5}/>
                <h1 className="text-white text-4xl"> Veces </h1>
                <FadeIn delay={4}><img src={love3} className="w-60"></img></FadeIn>
            </div>
            <div className="min-h-screen flex flex-col gap-10 justify-center items-center">
                <h2 className="text-white text-xl">Se mandaron</h2>
                <AnimatedCounter from={0} to={7820} duration={5}/>
                <h1 className="text-white text-4xl"> Audios </h1>
                <FadeIn delay={4}><img src={voice} className="w-60"></img></FadeIn>
            </div>
            <div className="min-h-screen flex flex-col gap-10 justify-center items-center">
                <h2 className="text-white text-xl">Se mandaron</h2>
                <AnimatedCounter from={0} to={4103} duration={5}/>
                <h1 className="text-white text-4xl"> Fotos </h1>
                <FadeIn delay={4}><img src={photos} className="w-60"></img></FadeIn>
            </div>
            <div className="min-h-screen flex flex-col gap-10 justify-center items-center">
                <h2 className="text-white text-xl">Joaquin mandó</h2>
                <AnimatedCounter from={0} to={37261} duration={5}/>
                <h1 className="text-white text-4xl"> Mensajes </h1>
                <FadeIn delay={4}><img src={joa} className="w-40"></img></FadeIn>
            </div>
            <div className="min-h-screen flex flex-col gap-10 justify-center items-center">
                <h2 className="text-white text-xl">Julieta mandó</h2>
                <AnimatedCounter from={0} to={53992} duration={5}/>
                <h1 className="text-white text-4xl"> Mensajes </h1>
                <FadeIn delay={4}><img src={juli} className="w-60"></img></FadeIn>
            </div>
            <Link to = "/finish"><button className="w-44 p-1 mb-10 bg-black rounded-2xl text-sm text-white border-2 border-white">Una última cosa</button>
            </Link>
        </section>
        </>
    )
}

export default Home