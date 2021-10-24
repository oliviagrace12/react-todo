import React, { useEffect, useContext } from 'react'
import { useResource } from 'react-request-hook'
import { ThemeContext } from './Contexts'

function ThemeItem({ theme, active, onClick }) {
    return (
        <span onClick={onClick} style={{ cursor: 'pointer', paddingLeft: 8, fontWeight: active ? 'bold' : 'normal' }}>
            <span>[</span>
            <span style={{ color: theme.primaryColor }}>Primary</span>
            <span>/</span>
            <span style={{ color: theme.secondaryColor }}>Secondary</span>
            <span>]</span>

        </span>
    )
}

export default function ChangeTheme({ theme, setTheme }) {

    // const { theme, setTheme } = useContext(ThemeContext)

    const [themes, getThemes] = useResource(() => ({
        url: '/themes',
        method: 'get'
    }))

    useEffect(getThemes, [])

    const { data, isLoading } = themes

    function isActive(t) { return t.primaryColor === theme.primaryColor && t.secondaryColor === theme.secondaryColor }

    return (
        <div>
            Change theme:

            {isLoading && "Loading themes..."}

            {data && data.map((t, i) =>
                <ThemeItem key={'theme-' + i} theme={t} active={isActive(t)} onClick={() => setTheme(t)} />
            )}
        </div>
    )
}