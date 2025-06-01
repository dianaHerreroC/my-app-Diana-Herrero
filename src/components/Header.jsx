import { useMediaQuery } from 'react-responsive';
import HeaderDesktop from "./HeaderDesktop"
import HeaderMobile from "./HeaderMobile";

export default function Header(){
    const isMobile = useMediaQuery({ orientation: 'portrait' });
    return isMobile ? <HeaderMobile /> : <HeaderDesktop />;
}