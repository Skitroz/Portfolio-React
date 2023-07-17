import Banniere from './header/banniere';
import MainHeader from './header/MainHeader';

function Header() {
    return (
        <div className="h-screen bg-blue-950">
        <Banniere telephone={"06 38 17 69 64"} mail={"contact@matheobatelier.fr"}/>
        <MainHeader />
        </div>
    );
}

export default Header;
