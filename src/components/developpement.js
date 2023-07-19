import CheerHope from './img/developpement/CheerHope.png'
import LhumainEntreVosMains from './img/developpement/LhumainEntreVosMains.png'
import LouisVuitton from './img/developpement/LouisVuitton.png'
import SkyzeProno from './img/developpement/SkyzeProno.png'
import './header/police.css'

function Developpement() {
    return (
        <div className='bg-background text-text'>
            <section className='Raleway'>
                <h2 className="text-center py-[50px] text-3xl Raleway-h1">Projet Développement Web</h2>
                <div className="flex justify-center items-center gap-[150px] pb-[75px]">
                    <article className="text-center w-[700px] border-[1px] border-gray-400 pb-[5px]">
                        <img src={CheerHope} alt='Cheer Hope' className='pb-8'/>
                        <h3 className='Raleway-h3 text-xl pb-2'>Cheer Hope</h3>
                        <p className='Raleway-p pb-[10px]'>Projet associatif réalisé au cours de la première année à la Normandie Web School.</p>
                    </article>
                    <article className="text-center w-[700px] border-[1px] border-gray-400 w-[500px] pb-[5px]">
                        <img src={LhumainEntreVosMains} alt='L'humain entre vos mains className='pb-8'/>
                        <h3 className='Raleway-h3 text-xl pb-2'>Louis Vuitton</h3>
                        <p className='Raleway-p pb-[10px]'>Page vitrine réalisé pour un devoir en première année à la Normandie Web School.</p>
                    </article>
                </div>
                <div className="flex justify-center items-center gap-[150px] pb-[50px]">
                    <article className="text-center w-[700px] border-[1px] border-gray-400 pb-[5px]">
                        <img src={LouisVuitton} alt='Louis Vuitton' className='pb-8'/>
                        <h3 className='Raleway-h3 text-xl pb-2'>SkyzeProno</h3>
                        <p className='Raleway-p pb-[10px]'>Projet personnel d'un site de pronostic totalement gratuit réalisé en HTML5 & CSS3.</p>
                    </article>
                    <article className="text-center w-[700px] border-[1px] border-gray-400 pb-[5px]">
                        <img src={SkyzeProno} alt='SkyzeProno' className='pb-8'/>
                        <h3 className='Raleway-h3 text-xl pb-2'>L'humain entre vos mains</h3>
                        <p className='Raleway-p pb-[10px]'>Projet associatif réalisé lors de mon stage en première année à la Normandie Web School.</p>
                    </article>
                </div>
            </section>
        </div>
    );
}

export default Developpement;