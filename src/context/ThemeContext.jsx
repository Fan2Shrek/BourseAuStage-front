import { createContext, useCallback, useState } from "react";

import ThemeEnum from "../enum/ThemeEnum";
import { DefaultTheme } from "../theme/DefaultTheme";
import { Darktheme } from "../theme/DarkTheme";

export const ThemeContext = createContext({
    theme: null,
    handleTheme: () => {},
});

export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState(ThemeEnum.LIGHT);
    const isLight = theme === ThemeEnum.LIGHT;

    const handleTheme = useCallback(() => {
        isLight ? setTheme(ThemeEnum.DARK) : setTheme(ThemeEnum.LIGHT);
    }, [isLight]);

    return <ThemeContext.Provider value={{
        theme,
        handleTheme,
    }}>
        {isLight && <DefaultTheme />}
        {!isLight && <Darktheme />}

        {children}
    </ThemeContext.Provider>;
};
