import "./Header.css";
import Switch, { SwitchProps } from "@mui/material/Switch";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";
import { useState } from "react";

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 4,
    margin: 0,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: "var(--clr-accent-100)",
        opacity: 1,
        border: 0,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 17,
    height: 17,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: "#E9E9EA",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

const CustomSelect = styled(Select)({
  "&": {
    fontFamily: "inherit",
    color: "inherit",
  },
  "& .MuiSelect-select": {
    fontFamily: "inherit",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
    paddingRight: 0,
  },

  "& .MuiSelected": {
    backgroundColor: "transparent",
  },
});

const getDownArrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="8"
      viewBox="0 0 14 8"
    >
      <path fill="none" stroke="#A445ED" stroke-width="2.5" d="m1 1 6 6 6-6" />
    </svg>
  );
};

const Header = ({ font, setFont, isDarkTheme, setIsDarkTheme }) => {
  const handleChange = (event) => {
    setFont(event.target.value);
  };

  const handleChangeTheme = (event) => {
    setIsDarkTheme(event.target.checked);
  };

  const CustomMenuItem = styled(MenuItem)({
    "&": {
      color: isDarkTheme ? "#fff" : "#000",
    },
    "&.Mui-selected": {
      backgroundColor: "transparent", // No background color when selected
      "&:hover": {
        backgroundColor: "transparent",
      },
      "&:active": {
        backgroundColor: "transparent", // No background color on active state
      },
    },
    "&:hover": {
      backgroundColor: "transparent",
      color: "var(--clr-accent-100)",

      // No background color on hover
    },
  });

  return (
    <header className="split">
      <img src="/images/logo.svg" alt="logo" />
      <div className="split gap">
        <div class="select-dropdown">
          <CustomSelect
            value={font}
            onChange={handleChange}
            IconComponent={getDownArrow}
            MenuProps={{
              PaperProps: {
                sx: {
                  boxShadow: !isDarkTheme
                    ? "0px 10px 30px 1px rgba(0, 0, 0, 0.1)"
                    : "0px 5px 30px 1px #a445ed",
                  backgroundColor: !isDarkTheme ? "#fff" : "#1f1f1f",
                },
              },
            }}
          >
            <CustomMenuItem value={"sans"}>Sans Serif</CustomMenuItem>
            <CustomMenuItem value={"serif"} className="serif">
              Serif
            </CustomMenuItem>
            <CustomMenuItem value={"mono"} className="mono">
              Mono
            </CustomMenuItem>
          </CustomSelect>
        </div>
        <hr className="header-hr" />
        <IOSSwitch
          className="toggle-switch"
          onChange={handleChangeTheme}
          checked={isDarkTheme}
        />
        <img
          className="moon-img"
          src="/images/icon-moon.svg"
          alt="night mode"
        />
      </div>
    </header>
  );
};

export default Header;
