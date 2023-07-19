import { Github } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import './police.css';

function MainHeader() {

    return (
        <div className='px-36 py-56'>
            <div>
            <h1 className="text-primary text-[50px] Raleway-h1-italic">Salut, je m'appelle</h1>
            <h2 className="text-secondary text-[70px] Raleway-h1-italic mt-[-15px]">MATHÉO</h2>
            <h4 className="text-secondary Raleway text-[25px] Raleway-h3 pt-4">Développeur web</h4>
            </div>
            <div className='pt-[100px] flex gap-[20px]'>
                <a href="https://github.com/Skitroz" target="_blank" rel="noreferrer"><Github className='text-primary' size={35}/></a>
                <a href="https://fr.linkedin.com/in/matheobtl" target="_blank" rel="noreferrer"><Linkedin className="text-primary" size={35}/></a>
            </div>
        </div>
    );
}

export default MainHeader;