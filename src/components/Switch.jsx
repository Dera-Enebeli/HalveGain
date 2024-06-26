import React, { useState, useContext, useEffect } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import { ThemeContext } from "styled-components";
import styled from "styled-components";

function Switch() {
  const theme = useContext(ThemeContext);

  const setMode = (mode) => {
    window.localStorage.setItem("type", mode);
    theme.setDefaultTheme(mode);
  };
  const handleChange = () => {
    theme.defaultTheme === "light" ? setMode("dark") : setMode("light");
    setIsDarkMode(true);
    if (theme.isDark) {
      setMode("light");
      setIsDarkMode(false);
    }
  };
  useEffect(() => {
    const localTheme = window.localStorage.getItem("type");
    localTheme && theme.setDefaultTheme(localTheme);
  }, []);
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <Button>
      <DarkModeToggle
        onChange={handleChange}
        checked={theme.isDark}
        size={70}
      />
    </Button>
  );
}

const Button = styled.div`
  display: flex;
  align-items: flex-end;
  @media screen and (max-width: 640px) {
    display: none;
  }
  @media screen and (max-width: 890px) {
    display: none;
  }
`;

export default Switch;
