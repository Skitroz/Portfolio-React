import { useState } from "react";
import Developpement from "./main/developpement";
import { Camera, Code2, Contact } from "lucide-react";
import ProjetGraphique from "./main/ProjetGraphique";
import './css/styles.css'

function Main() {
    const [sectionVisible, setSectionVisible] = useState(null); // État pour suivre la section actuellement ouverte

    const menuBoutton = (section) => {
        if (section === sectionVisible) {
            // Si la section cliquée est déjà ouverte, on la ferme
            setSectionVisible(null);
        } else {
            // Si la section cliquée est fermée, on l'ouvre
            setSectionVisible(section);
        }
    }

    return (
        <div className="bg-background">
            <h1 className="text-center Raleway-h1 pt-[50px] text-6xl hover-animation">Portfolio</h1>
            <div className="flex flex-wrap justify-center space-x-6 py-[25px]">
                <div>
                    <button onClick={() => menuBoutton("Developpement")} className={`py-[15px] px-[5px] hover:bg-primary rounded text-text flex gap-2 Raleway-h3 ${sectionVisible === "Developpement" ? 'active' : ''}`}><Code2 /> Développement</button>
                </div>
                <div>
                    <button onClick={() => menuBoutton("ProjetGraphique")} className={`py-[15px] px-[5px] hover:bg-primary rounded text-text flex gap-2 Raleway-h3 ${sectionVisible === "ProjetGraphique" ? 'active' : ''}`}><Camera /> Photographie</button>
                </div>
                <div>
                    <button onClick={() => menuBoutton("Contact")} className={`py-[15px] px-[5px] hover:bg-primary rounded text-text flex gap-2 Raleway-h3 ${sectionVisible === "Contact" ? 'active' : ''}`}><Contact /> Contact</button>
                </div>
                <div className="w-full">
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
        </div>
    )
}

export default Main;
