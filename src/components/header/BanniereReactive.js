import { Camera, Code2, Contact } from 'lucide-react';
import { useEffect, useState } from 'react';

function BanniereReactive() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isTop = window.scrollY < 100;
            setIsScrolled(!isTop);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <nav className={`fixed top-0 left-0 w-full ${isScrolled ? 'bg-secondary shadow-lg' : 'bg-transparent'} transition-all ease-in-out duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <ul className='flex gap-[20px] justify-center py-[10px]'>
                    <li><a href='#' className='py-[15px] px-[5px] hover:bg-primary rounded text-text flex gap-2 Raleway-h3'><Code2/> Développement</a></li>
                    <li><a href='#' className='py-[15px] px-[5px] hover:bg-primary rounded text-text flex gap-2 Raleway-h3'><Camera/> Photographie</a></li>
                    <li><a href='#' className='py-[15px] px-[5px] hover:bg-primary rounded text-text flex gap-2 Raleway-h3'><Contact/> Contact</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default BanniereReactive;