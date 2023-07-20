import CDVR from '../img/Projet-Graphique/cdv_recto.jpg'
import CDVV from '../img/Projet-Graphique/cdv_verso.jpg'
import Iphone from '../img/Projet-Graphique/iphone__M.png'
import LogoMatheo from '../img/Projet-Graphique/Mon projet.jpg'

function ProjetGraphique() {
    return (
        <div className='bg-background text-text pt-[100px]'>
            <section className='Raleway'>
                <div className="flex justify-center items-center gap-[150px] pb-[75px]">
                    <article className="text-center w-[700px] border-[1px] border-gray-400 pb-[5px]">
                        <div className='flex justify-center items-center pt-[10px]'>
                        <img src={LogoMatheo} alt='Logo Mathéo' className='pb-8 w-[680px] h-[600px]' />
                        </div>
                        <h3 className='Raleway-h3 text-xl pb-2'>Logo floral avec citation</h3>
                        <p className='Raleway-p pb-[10px]'>Logo s'inspirant de la première lettre de mon prénom.</p>
                    </article>
                    <article className="text-center w-[700px] border-[1px] border-gray-400 pb-[5px]">
                        <div className='flex justify-center items-center pt-[10px]'>
                        <img src={Iphone} alt='Mockup iphone' humain entre vos mains className='pb-8 w-[680px] h-[600px]' />
                        </div>
                        <h3 className='Raleway-h3 text-xl pb-2'>Mockup</h3>
                        <p className='Raleway-p pb-[10px]'>Mockup réalisé au cours de la première année à La Normandie Web School.</p>
                    </article>
                </div>
                <div className="flex justify-center items-center gap-[150px] pb-[50px]">
                    <article className="text-center w-[700px] border-[1px] border-gray-400 pb-[5px]">
                        <img src={CDVR} alt='Louis Vuitton' className='pb-8' />
                        <h3 className='Raleway-h3 text-xl pb-2'>Mockup Carte de Visite</h3>
                        <p className='Raleway-p pb-[10px]'>Mockup réalisé au cours de la première année à La Normandie Web School
                            inspirant d'une carte de visite.​</p>
                    </article>
                    <article className="text-center w-[700px] border-[1px] border-gray-400 pb-[5px]">
                        <img src={CDVV} alt='SkyzeProno' className='pb-8' />
                        <h3 className='Raleway-h3 text-xl pb-2'>Mockup Carte de Visite</h3>
                        <p className='Raleway-p pb-[10px]'>Mockup réalisé au cours de la première année à La Normandie Web School
                            inspirant d'une carte de visite.​</p>
                    </article>
                </div>
            </section>
        </div>
    )
}

export default ProjetGraphique;