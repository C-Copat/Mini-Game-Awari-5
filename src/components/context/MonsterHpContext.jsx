import React, { createContext, useContext, useState } from "react"

// creating contetxs

export const MonsterMaxHpContext = createContext();
export const MonsterCurrentHpContext = createContext();

// creating a context + custom hook to set maxHp

export const NameContext = createContext()
export const NameUpdateContext = createContext();

export function useUpdateName() {
    return useContext(NameUpdateContext)  //which is the original 'setName'
}

export function useName() {
    return useContext(NameContext) //which is the original 'name'
}



// Wrapper for the ContextMonsterHp

export function MonsterHpProvider ({ children }) {
    
    const [maxHp,setMaxHp] = React.useState(10)
    const [currentHp,setCurrentHp] = React.useState(maxHp)

    // state for custom hook

    const [name, setName] = React.useState('Raven')

    return(
        <>
            <MonsterMaxHpContext.Provider value={[maxHp,setMaxHp]}>
                <MonsterCurrentHpContext.Provider value={[currentHp,setCurrentHp]}>
                    <NameUpdateContext.Provider value={setName}>
                        <NameContext.Provider value={name}>
                        {children}
                        </NameContext.Provider>
                    </NameUpdateContext.Provider>
                </MonsterCurrentHpContext.Provider>
            </MonsterMaxHpContext.Provider>
        </>
    )
}

/* This is a problematic implementation because it triggers re-render of all components that */