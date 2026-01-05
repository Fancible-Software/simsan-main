"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { colors } from "@/lib/theme";
import { CONTACT_INFO } from "@/constants";
import { useState } from "react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about-us" },
  { label: "Services", path: "/our-services" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact Us", path: "/contact" },
];

function HamburgerIcon({ color = colors.primary }) {
  return (
    <svg aria-label="Open menu" width={32} height={32} viewBox="0 0 32 32" fill="none">
      <rect y="7" width="32" height="3.5" rx="1.75" fill={color}/>
      <rect y="14" width="32" height="3.5" rx="1.75" fill={color}/>
      <rect y="21" width="32" height="3.5" rx="1.75" fill={color}/>
    </svg>
  );
}

function CloseSvgIcon({ color = colors.primary }) {
  return (
    <svg aria-label="Close menu" width={28} height={28} viewBox="0 0 28 28" fill="none">
      <line x1="6" y1="6" x2="22" y2="22" stroke={color} strokeWidth={2.6} strokeLinecap="round"/>
      <line x1="22" y1="6" x2="6" y2="22" stroke={color} strokeWidth={2.6} strokeLinecap="round"/>
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => setMobileOpen((prev) => !prev);

  // Mobile Drawer contents
  const drawer = (
    <Box className="w-72 flex flex-col h-full bg-white">
      <Box className="flex justify-between items-center px-3 py-4 border-b">
        <Link href="/">
          <Image src="/icons/logo.svg" alt="Logo" width={160} height={44} priority />
        </Link>
        <IconButton onClick={handleDrawerToggle} aria-label="Close menu"><CloseSvgIcon /></IconButton>
      </Box>
      <List className="flex-1">
        {navItems.map((item) => (
          <ListItem key={item.path} disablePadding>
            <Link href={item.path} className="w-full no-underline">
              <ListItemButton selected={pathname === item.path} onClick={handleDrawerToggle}>
                <ListItemText 
                  primary={item.label}
                  primaryTypographyProps={{
                    sx: {
                      color: pathname === item.path ? colors.primary : colors.text.primary,
                      fontWeight: pathname === item.path ? 700 : 400,
                      fontSize: 19,
                    },
                  }}
                />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
      <Box className="p-4">
        <Link href="/estimate" className="w-full no-underline">
          <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: colors.primary,
              color: colors.text.white,
              py: { xs: 1, sm: 1.25, md: 1.5 },
              px: { xs: 2, sm: 2.5, md: 3 },
              borderRadius: { xs: 12, sm: 16, md: 20 },
              fontWeight: 700,
              fontSize: { xs: 14, sm: 16, md: 18 },
              textTransform: "none",
              '&:hover': { backgroundColor: colors.primary, opacity: 0.92 },
            }}
          >
            REQUEST AN ESTIMATE →
          </Button>
        </Link>
      </Box>
    </Box>
  );

  return (
    <>
      {/* Top Contact Bar */}
      <Box
        className="flex flex-col md:flex-row justify-between items-center gap-y-1 px-2 md:px-4 py-1 text-white text-xs md:text-sm"
        sx={{
          background: `linear-gradient(to right, ${colors.secondary} 0%, ${colors.secondary} 40%, ${colors.primary} 40%, ${colors.primary} 100%)`,
        }}
      >
        <Box className="flex items-center gap-2">
          <img src="/icons/email.svg" alt="Email" />
          <a href={`mailto:${CONTACT_INFO.EMAIL}`} className="text-white hover:text-gray-200 transition-colors no-underline">
            <Typography variant="body2" component="span">{CONTACT_INFO.EMAIL}</Typography>
          </a>
        </Box>
        <Box className="flex items-center gap-2">
          <img src="/icons/phone.svg" alt="Phone" />
          <a href="tel:+17782227988" className="text-white hover:text-gray-200 transition-colors no-underline">
            <Typography variant="body2" component="span">{CONTACT_INFO.PHONE}</Typography>
          </a>
        </Box>
      </Box>

      {/* Main Header */}
      <AppBar position="static" elevation={0} className="bg-white" sx={{ backgroundColor: "white" }}>
        <Toolbar className="justify-between px-3 md:px-8 py-1 min-h-0 md:min-h-[56px]">
          {/* Hamburger for Mobile and Tablet */}
          <Box className="flex items-center lg:hidden">
            <IconButton aria-label="open menu" edge="start" onClick={handleDrawerToggle}>
              <HamburgerIcon />
            </IconButton>
          </Box>
          {/* Logo - Centered on Mobile/Tablet, Left on Desktop */}
          <Link href="/" className="no-underline flex-1 flex lg:flex-none lg:justify-start justify-center">
            <Box className="flex items-center">
              <Image
                src="/icons/logo.svg"
                alt="Simsan Fraser Maintenance Ltd."
                width={160}
                height={80}
                priority
                className="md:w-[188px] md:h-[80px] w-[130px] h-[34px] object-contain"
              />
            </Box>
          </Link>
          {/* Desktop Navigation */}
          <Box className="hidden lg:flex gap-1 items-center flex-1 justify-center">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path} className="no-underline">
                <Button
                  sx={{
                    color: pathname === item.path ? colors.primary : colors.text.primary,
                    fontWeight: pathname === item.path ? 600 : 400,
                    textTransform: "none",
                    fontSize: 17,
                    '&:hover': {
                      backgroundColor: "transparent",
                      color: colors.primary,
                    },
                  }}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </Box>
          {/* CTA Button on desktop */}
          <Box className="hidden lg:flex items-center flex-1 justify-end">
            <Link href="/estimate" className="no-underline">
              <Button
                variant="contained"
                sx={{
                  backgroundColor: colors.primary,
                  color: colors.text.white,
                  px: 3,
                  py: 1,
                  textTransform: "none",
                  borderRadius: 20,
                  fontWeight: 600,
                  fontSize: 17,
                  '&:hover': { backgroundColor: colors.primary, opacity: 0.9 },
                }}
              >
                REQUEST AN ESTIMATE →
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      {/* Drawer for mobile nav and CTA */}
      <Drawer anchor="left" open={mobileOpen} onClose={handleDrawerToggle}>
        {drawer}
      </Drawer>
    </>
  );
}
