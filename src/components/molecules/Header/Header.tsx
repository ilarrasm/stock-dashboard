import { Box, Typography } from "@mui/material";
import logo from "../../../../public/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Box
      display="flex"
      height="90px"
      p="1rem"
      justifyContent="center"
      alignItems="center"
      borderBottom="1px solid gray"
    >
      <Link to="/" style={{ textDecoration: "none" }}>
        <Box display="flex" justifyContent="center" alignItems="center">
          <img src={logo} height="64px" />
          <Typography color="black">Stratton Oakmont</Typography>
        </Box>
      </Link>
    </Box>
  );
};

export default Header;
