import React from 'react'

export const ThemeContext = React.createContext({
    theme: {
        primaryColor: 'deepskyblue',
        secondaryColor: 'coral'
    }
})

export const StateContext = React.createContext({
    state: {},
    dispatch: () => { }
})

