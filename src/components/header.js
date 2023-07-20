import MainHeader from './header/MainHeader';
import Accueil from './img/accueil-bg.jpg';

function Header() {

    const backgroundImage = {
        backgroundImage: `url(${Accueil})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }

    return (
        <div style={backgroundImage} className="h-screen bg-background">
            <MainHeader />
        </div>
    );
}

export default Header;