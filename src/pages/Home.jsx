import {gsap} from 'gsap'
import abstract from '../assets/abstract.jpg'

const Home = () => {

    const glass = document.getElementById('glass');

        const tl = gsap.timeline({defaults: {ease: "power2.inOut", duration: 2}})

        tl.from('imggl', {x: '-10%', opacity: 0})
        .from('.containergl', {opacity: 0, delay: .5, duration: 1}, "-=1.5")
        .from('.containergl', {x:'-20%', backdropFilter: 'blur(0px)'})
        .from('.seq', {y: -30, opacity: 0, stagger: .2, duration: .5}, "-=.5")
        .from('h1', {y: 20, clipPath: 'inset(0 0 100% 0'}, "-=.8")


    return (
        <>

            <section className="containergl">
                

                <img src={abstract} alt="abstract background corridor" className="imggl"/>
                    <div className="circle"></div>

                    <div className="Glasscontainer" id="glass">
                        <h2 className="seq">Hello</h2>
                        <p className="seq">Lad os komme igang!</p>
                    </div>

                    <h1>Velkommen</h1>

            </section>

        </>
    )



}

export default Home;