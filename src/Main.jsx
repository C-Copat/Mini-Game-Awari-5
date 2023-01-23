import { Route, Routes } from "react-router-dom";

import NavBar from "./components/molecules/NavBar";
import Config from "./components/pages/Config";
import Game from "./components/pages/Game";
import HomePage from "./components/pages/HomePage";
import NotFound from "./components/pages/NotFound";
import YouWon from "./components/pages/YouWon";



export default function Main () {

    return(
    <>
    <NavBar />
    <Routes>
        <Route path="/" element={ <HomePage />}/>
        <Route path="/game" element={ <Game />}/>
        <Route path="/config" element={ <Config />}/>
        <Route path="/won" element={ <YouWon />}/>
        <Route path="/*" element={ <NotFound />}/>
    </Routes>
    </>

    )
}