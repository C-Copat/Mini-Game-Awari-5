import { Route, Routes } from "react-router-dom";


import GlossaryHeader from "./components/molecules/GlossaryHeader";
import NavBar from "./components/molecules/NavBar";
import Config from "./components/pages/Config";
import Game from "./components/pages/Game";
import Glossary from "./components/pages/Glossary/Glossary";
import HomePage from "./components/pages/HomePage";
import MonsterNotFound from "./components/pages/Glossary/MonsterNotFound";
import NotFound from "./components/pages/NotFound";
import YouWon from "./components/pages/YouWon";
import ShowMonster from "./components/pages/Glossary/ShowMonster";
import NewMonster from "./components/pages/Glossary/NewMonster";

export default function Main () {

    return(
    <>
    <NavBar />
    <Routes>
        <Route path="/" element={ <HomePage />}/>
        <Route path="/game" element={ <Game />}/>
        <Route path="/config" element={ <Config />}/>
        <Route path="/won" element={ <YouWon />}/>
        <Route path="/glossary" element={ <GlossaryHeader />}>
            <Route index element={<Glossary />} />
            <Route path=":id" element={<ShowMonster />} />
            <Route path="new" element={<NewMonster />} />
            <Route path="notfound" element={<MonsterNotFound />} />
        </Route>
        <Route path="*" element={ <NotFound />}/>
    </Routes>
    </>

)
}




/* <Route path="*" element={ <MonsterNotFound />} /> */