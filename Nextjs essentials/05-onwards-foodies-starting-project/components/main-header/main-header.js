import Link from "next/link";
import Image from "next/image";

import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";
import LogoImg from '@/assets/logo.png';
import classes from './main-header.module.css';

export default function MainHeader() {

    return ( 
    <>
        <MainHeaderBackground />
        <header className={classes.header}>
            <Link className={classes.logo} href="/">
                <Image src={LogoImg} alt="A plate with food on it"/>
                NextLevel Food
            </Link>

            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink href="/meals">Browse Meals</NavLink>
                    </li>
                    <li>
                        <NavLink href="/community">Foodies community</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    </>
    );
}