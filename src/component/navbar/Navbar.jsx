import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";

const pages = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Education", id: "education" },
  { name: "Contact", id: "contact" },
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleScroll = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }

    handleCloseNavMenu();
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        background: "transparent",
        py: 2,
        zIndex: 999,
     
      }}
      
    >
      <Container maxWidth="xl">
        <Toolbar
          sx={{
            background: "rgba(15, 23, 42, 0.65)",
            backdropFilter: "blur(18px)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "999px",
            px: { xs: 2, md: 4 },
            py: 1.5,
            display: "flex",
            justifyContent: "space-between",
            boxShadow: "0 0 40px rgba(139, 92, 246, 0.15)",
          }}
        >
          {/* LEFT SIDE */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
            }}
          >
            <Avatar
              sx={{
                width: 50,
                height: 50,
                fontWeight: "bold",
                fontSize: "1.2rem",
                background:
                  "linear-gradient(135deg, #06B6D4 0%, #8B5CF6 100%)",
                color: "#fff",
              }}
            >
              J
            </Avatar>

            <Typography
              sx={{
                fontWeight: 700,
                fontSize: "1.6rem",
                color: "#fff",
                fontFamily: "Outfit",
              }}
            >
              Jeeda.
            </Typography>
          </Box>

          {/* MOBILE MENU */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton onClick={handleOpenNavMenu}>
              <MenuIcon sx={{ color: "#fff" }} />
            </IconButton>

            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.id}
                  onClick={() => handleScroll(page.id)}
                >
                  {page.name}
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* DESKTOP MENU */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 1,
              alignItems: "center",
            }}
          >
            {pages.map((page, index) => (
              <Button
                key={page.id}
                onClick={() => handleScroll(page.id)}
                sx={{
                  color: "#CBD5E1",
                  px: 3,
                  py: 1.2,
                  borderRadius: "16px",
                  fontSize: "1rem",
                  fontWeight: 500,
                  textTransform: "none",
                  transition: "0.3s",

                  ...(index === 0 && {
                    background:
                      "linear-gradient(135deg, #06B6D4 0%, #C084FC 100%)",
                    color: "#fff",
                    boxShadow: "0 0 25px rgba(139, 92, 246, 0.45)",
                  }),

                  "&:hover": {
                    background: "rgba(255,255,255,0.06)",
                    color: "#fff",
                  },
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          {/* RIGHT BUTTON */}
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Button
              onClick={() => handleScroll("contact")}
              sx={{
                background:
                  "linear-gradient(135deg, #06B6D4 0%, #C084FC 100%)",
                color: "#fff",
                px: 4,
                py: 1.3,
                borderRadius: "18px",
                fontSize: "1rem",
                fontWeight: 600,
                textTransform: "none",
                boxShadow: "0 0 25px rgba(139, 92, 246, 0.45)",

                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: "0 0 35px rgba(139, 92, 246, 0.7)",
                },
              }}
            >
              Let&apos;s Talk
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;