import './header.css';

function Banniere({telephone, mail}) {
    return (
        <div className="bg-slate-700 py-6 px-[400px] text-white">
            <nav className="flex justify-between">
                <ul className="flex gap-5">
                    <li className="flex items-center gap-2 VictorMono">
                        <i className="fa-solid fa-phone fa-sg"></i>
                        {telephone}
                    </li>
                    <li className="flex items-center gap-2 VictorMono">
                        <i className="fa-solid fa-at fa-sg"></i>
                        {mail}
                    </li>
                </ul>
                <ul className="flex gap-5">
                    <a href="https://github.com/Skitroz" target="_blank" rel="noreferrer"><i className="fa-brands fa-github fa-lg"></i></a>
                    <a href="https://www.instagram.com/skitroz/" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram fa-lg"></i></a>
                    <a href="https://fr.linkedin.com/in/matheobtl" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin fa-lg"></i></a>
                </ul>
            </nav>
        </div>
    );
}

export default Banniere;
