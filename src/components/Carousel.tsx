//LOGO SKILLS
import react_logo from "../assets/skills/React-Logo-500x281.webp"
import tailwind_logo from "../assets/skills/tailwind-css-2.webp"
import type_logo from "../assets/skills/typescript.webp"
import javascript_logo from "../assets/skills/javascript-logo-0.webp"
import nextjs_logo from "../assets/skills/nextjs-icon.webp"
import html_logo from "../assets/skills/167_Html5_logo_logos-512.webp"
import css_logo from "../assets/skills/css-logo-03.webp"
import { Box, Card } from "@mui/material"

export default function CarouselMobile() {

    const arraySkills = [
        {
            nome: "React",
            img: react_logo
        },
        {
            nome: "Tailwind",
            img: tailwind_logo
        },
        {
            nome: "TypeScript",
            img: type_logo
        },
        {
            nome: "JavaScript",
            img: javascript_logo
        },
        {
            nome: "TypeScript",
            img: type_logo
        },
        {
            nome: "NextJs",
            img: nextjs_logo
        },
        {
            nome: "HTML",
            img: html_logo
        },
        {
            nome: "CSS",
            img: css_logo
        }
    ]

    return (
        <Box
            sx={{
                display: 'flex',
                gap: 2,
                py: 2,
                px: 1,
                overflowX: 'auto',
                scrollSnapType: 'x mandatory',
                scrollPaddingX: '1rem',
                '& > *': {
                    scrollSnapAlign: 'center',
                    flexShrink: 0,
                },
                '::-webkit-scrollbar': { display: 'none' },
            }}
        >
            {arraySkills.map((skill, index) => (
                <Card
                    key={index}
                    sx={{
                        width: 200,
                        height: 200,
                        backgroundColor: '#27272a',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        p: 2,
                    }}
                >
                    <Box
                        sx={{
                            height: 100,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '100%',
                        }}
                    >
                        <img
                            src={skill.img}
                            alt={skill.nome}
                            style={{ width: 100, height: 100, objectFit: 'contain' }}
                        />
                    </Box>
                    <Box
                        sx={{
                            width: '100%',
                            textAlign: 'center',
                            backgroundColor: 'black',
                            color: 'white',
                            py: 1,
                            mt: 1,
                            borderRadius: '4px',
                        }}
                    >
                        <p>{skill.nome}</p>
                    </Box>
                </Card>
            ))}
        </Box>
    )
}