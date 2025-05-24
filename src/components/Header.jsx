import { useMediaQuery } from 'react-responsive';
import HeaderDesktop from "./HeaderDesktop"
import HeaderMobile from "./HeaderMobile";

export default function Header(){
    const isMobile = useMediaQuery({ maxWidth: 600 });
    return isMobile ? <HeaderMobile /> : <HeaderDesktop />;
}