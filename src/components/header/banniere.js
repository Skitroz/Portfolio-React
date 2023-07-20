import { useState, useEffect } from "react";
import Developpement from "../main/developpement";
import { Camera, Code2, Contact } from "lucide-react";
import ProjetGraphique from "../main/ProjetGraphique";
import '../css/styles.css'

function Banniere() {
        // Initialisez l'état sectionVisible à "Developpement" par défaut
        const [sectionVisible, setSectionVisible] = useState("Developpement");

        const menuBoutton = (section) => {
            if (section === sectionVisible) {
                setSectionVisible(null);
            } else {
                setSectionVisible(section);
            }
        }
    
        // Utilisez useEffect pour afficher la section par défaut lors du chargement initial
        useEffect(() => {
            setSectionVisible("Developpement");
        }, []);
    
    return (
        <div>
            <nav className="fixed top-0 left-0 w-full z-10 bg-background">
                <ul className='flex gap-[20px] justify-center py-[10px]'>
                    <li><button onClick={() => menuBoutton("Developpement")} className={`py-[15px] px-[5px] hover:bg-primary rounded text-text flex gap-2 Raleway-h3 ${sectionVisible === "Developpement" ? 'active' : ''}`}><Code2 /> Développement</button></li>
                    <li><button onClick={() => menuBoutton("ProjetGraphique")} className={`py-[15px] px-[5px] hover:bg-primary rounded text-text flex gap-2 Raleway-h3 ${sectionVisible === "ProjetGraphique" ? 'active' : ''}`}><Camera /> Projet Graphique</button></li>
                    <li><button onClick={() => menuBoutton("Contact")} className={`py-[15px] px-[5px] hover:bg-primary rounded text-text flex gap-2 Raleway-h3 ${sectionVisible === "Contact" ? 'active' : ''}`}><Contact /> Contact</button></li>
                </ul>
            </nav>
            <div>
                <h3 className="text-center Raleway-h1 bg-background pt-[45px] text-6xl">Portfolio</h3>
                    {sectionVisible === "Developpement" && (
                        <Developpement />
                    )}
                    {sectionVisible === "ProjetGraphique" && (
                        <ProjetGraphique />
                    )}
                    {sectionVisible === "Contact" && (
                        <div>
                            <p>Section Contact</p>
                        </div>
                    )}
                </div>
        </div>
    );
}

export default Banniere;
