import React, { createContext, useContext, useState } from "react"

export const MonsterMaxHpContext = createContext();
export const MonsterCurrentHpContext = createContext();


// Wrapper for the ContextMonsterHp

export function MonsterHpProvider ({ children }) {
    
    const [maxHp,setMaxHp] = React.useState(10)
    const [currentHp,setCurrentHp] = React.useState(maxHp)

    return(
        <>
            <MonsterMaxHpContext.Provider value={[maxHp,setMaxHp]}>
                <MonsterCurrentHpContext.Provider value={[currentHp,setCurrentHp]}>
                    {children}
                </MonsterCurrentHpContext.Provider>
            </MonsterMaxHpContext.Provider>

        </>
    )


}

/* This is a problematic implementation because it triggers re-render of all components that */