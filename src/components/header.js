import Banniere from './header/banniere';
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
            <Banniere telephone={"06 38 17 69 64"} mail={"contact@matheobatelier.fr"}/>
            <MainHeader />
        </div>
    );
}

export default Header;