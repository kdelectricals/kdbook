"use client";

import { useState } from "react";
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, IconButton, Divider, Tooltip } from "@mui/material";
import { Home, Receipt, People, Settings, Menu, Logout } from "@mui/icons-material";
import Link from "next/link";

const menuItems = [
  { text: "Dashboard", icon: <Home />, path: "/" },
  { text: "Invoices", icon: <Receipt />, path: "/invoices" },
  { text: "Customers", icon: <People />, path: "/customers" },
  { text: "Settings", icon: <Settings />, path: "/settings" },
];

export default function Sidebar() {
  const [open, setOpen] = useState(true);

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: open ? 240 : 80,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: open ? 240 : 80,
          transition: "width 0.3s ease-in-out",
          backgroundColor: "#1e293b", // Dark blue-gray
          color: "white",
        },
      }}
    >
      {/* Sidebar Header */}
      <div style={{ display: "flex", justifyContent: open ? "space-between" : "center", padding: "10px", alignItems: "center" }}>
        {open && <h3 style={{ margin: 0 }}>KD Electricals</h3>}
        <IconButton onClick={() => setOpen(!open)} sx={{ color: "white" }}>
          <Menu />
        </IconButton>
      </div>

      <Divider sx={{ backgroundColor: "#374151" }} />

      {/* Menu Items */}
      <List>
        {menuItems.map(({ text, icon, path }) => (
          <Tooltip key={text} title={!open ? text : ""} placement="right">
            <ListItem disablePadding>
              <Link href={path} passHref style={{ textDecoration: "none", width: "100%", color: "white" }}>
                <ListItemButton sx={{ "&:hover": { backgroundColor: "#374151" } }}>
                  <ListItemIcon sx={{ color: "white" }}>{icon}</ListItemIcon>
                  {open && <ListItemText primary={text} />}
                </ListItemButton>
              </Link>
            </ListItem>
          </Tooltip>
        ))}
      </List>

      <Divider sx={{ backgroundColor: "#374151" }} />

      {/* Logout Button */}
      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{ "&:hover": { backgroundColor: "#374151" } }}>
            <ListItemIcon sx={{ color: "white" }}>
              <Logout />
            </ListItemIcon>
            {open && <ListItemText primary="Logout" />}
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
}
