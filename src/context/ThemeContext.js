import React from "react";

const ThemeContext = React.createContext({
    isDarkTheme: false,
    onClickTheme: () => {}
})

export default ThemeContext