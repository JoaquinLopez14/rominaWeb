import FadeIn from "./components/FadeIn";

function Finish() {
    return (
      <div className="min-h-screen font-secundary flex flex-col text-center items-center justify-center bg-black text-white text-xl">
        <div className="w-[90%]">
        <FadeIn delay={1}><h1>Viste la cantidad de cosas que pasaron estos 3 años?</h1></FadeIn>
        <FadeIn delay={3}><h2>Parecen irreales algunos numeros</h2></FadeIn>
        <FadeIn delay={5}><h2>Demas esta decirte que estoy muy feliz con vos a mi lado</h2></FadeIn>
        <FadeIn delay={7}><h2>Espero que los numeros sigan creciendo</h2></FadeIn>
        <FadeIn delay={9}><h2>Nada me hace mas feliz</h2></FadeIn>
        <FadeIn delay={11}><h2>Que escribir esta historia con vos</h2></FadeIn>
        <FadeIn delay={13}><h2>Te amo mucho Julieta, gracias por todo.</h2></FadeIn>
        <FadeIn delay={16}><h2 className="mt-10">Fin</h2></FadeIn>
        </div>
      </div>
    );
}
  
  export default Finish;
  