import { Box, List, ListItem, ListItemButton } from "@mui/material";
import type React from "react";

type PropsDrawerList = {
    scrollToSection: (sectionId: string) => void
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function DrawerList({ scrollToSection, setOpen }: PropsDrawerList) {
    return (
        <Box sx={{ backgroundColor: "#000", color: "#fff", height: "100vh" }}>
            <List>
                <ListItem>
                    <ListItemButton>
                        <button onClick={() => {
                            scrollToSection("inicio")
                            setOpen(false)
                        }} className="uppercase p_mobile">Início</button>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <button onClick={() => {
                            scrollToSection("habilidades")
                            setOpen(false)
                        }} className="uppercase p_mobile">Habilidades</button>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <button onClick={() => {
                            scrollToSection("projetos")
                            setOpen(false)
                        }} className="uppercase p_mobile">Projetos</button>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    )
}