import { AtSign, Github, Instagram, Linkedin, Phone } from 'lucide-react';
import './police.css';

function Banniere({telephone, mail}) {

    return (
        <div className="bg-secondary py-6 px-[400px] h-[8vh]">
            <nav className="flex justify-between">
                <ul className="flex gap-5">
                    <li className="flex items-center gap-2 Raleway-h3 text-text">
                        <Phone />
                        {telephone}
                    </li>
                    <li className="flex items-center gap-2 Raleway-h3 text-text">
                        <AtSign />
                        {mail}
                    </li>
                </ul>
                <ul className="flex gap-5">
                    <a href="https://github.com/Skitroz" target="_blank" rel="noreferrer"><Github /></a>
                    <a href="https://www.instagram.com/skitroz/" target="_blank" rel="noreferrer"><Instagram /></a>
                    <a href="https://fr.linkedin.com/in/matheobtl" target="_blank" rel="noreferrer"><Linkedin /></a>
                </ul>
            </nav>
        </div>
    );
}

export default Banniere;
