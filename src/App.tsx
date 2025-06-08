import Header from "./components/Header"
import img_me from "./assets/gabrielPerfil.jpg"

//LOGO SOCIAL
import linkedin_logo from "./assets/linkedin-logo-design-30.webp"
import instagram_logo from "./assets/instagram-glyph-logo-png_seeklogo-286192.webp"
import github_logo from "./assets/github-icon-1-logo.webp"
import whats_logo from "./assets/Whatsapp-logo-vetor.webp"

//LOGO SKILLS
import react_logo from "./assets/skills/React-Logo-500x281.webp"
import tailwind_logo from "./assets/skills/tailwind-css-2.webp"
import type_logo from "./assets/skills/typescript.webp"
import javascript_logo from "./assets/skills/javascript-logo-0.webp"
import nextjs_logo from "./assets/skills/nextjs-icon.webp"
import html_logo from "./assets/skills/167_Html5_logo_logos-512.webp"
import css_logo from "./assets/skills/css-logo-03.webp"
import { Drawer } from "@mui/material"
import DrawerList from "./components/DrawerList"
import { useState } from "react"
import CarouselMobile from "./components/Carousel"

//PRINT PROJETOS
import todoProject from "./assets/printTodo.png"
import teacherProject from "./assets/printTeacherhunt.png"
import printPort from "./assets/printPort.png"
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/16/solid"

function App() {

  function scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId)

    if (sectionId) {
      section?.scrollIntoView({ behavior: "smooth" })
    }
  }

  const [openDrawer, setOpenDrawer] = useState(false)

  function toggleDrawer(newOpen: boolean) {
    setOpenDrawer(newOpen)
  }

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
    <>
      <Header
        toggleDrawer={toggleDrawer}
        scrollToSection={scrollToSection}
      />

      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => toggleDrawer(false)}
      >
        <DrawerList
          scrollToSection={scrollToSection}
          setOpen={setOpenDrawer}
        />
      </Drawer>

      <main className="main relative">

        <div className="flex justify-center h-screen" id="inicio">
          <div className="flex justify-around items-center  w-full">

            <div className="text-white font-sans space-y-3">
              <p className="text-xl">Bem-vindo(a)</p>
              <p className="text-4xl text-green-700">
                Olá, eu sou Gabriel <br />Silva
              </p>
              <p className="lg:hidden text-white text-2xl font-semibold">
                <span className="text-green-700">Desenvolvedor</span> Front-end
              </p>
              <div className="flex gap-3 bg-zinc-300 max-w-[200px] justify-center p-1 rounded-md">
                <a href="https://www.instagram.com/gsylvaaa/" target="_blank">
                  <img src={instagram_logo} alt="" className="w-[30px]" />
                </a>
                <a href="https://github.com/gabriellxz" target="_blank">
                  <img src={github_logo} alt="" className="w-[30px]" />
                </a>
                <a href="https://www.linkedin.com/in/gabriel-silva-5968902b8/" target="_blank">
                  <img src={linkedin_logo} alt="" className="w-[30px]" />
                </a>
              </div>
            </div>

            <div className="space-y-4 hidden lg:block">
              <p className="text-white text-center text-4xl font-semibold">
                <span className="text-green-700">Desenvolvedor</span> Front-end
              </p>
              <div className="flex justify-center">
                <img src={img_me} alt="me" className="w-full max-w-[500px] h-[500px] rounded-full" />
              </div>
            </div>

          </div>
        </div>

        <div className="bg-zinc-900 mt-[100px] p-3" id="habilidades">
          <h1 className="text-white uppercase text-center font-semibold text-3xl p-3">habilidades</h1>
          <div className="hidden sm:grid sm:grid-cols-3 place-items-center sm:items-center mt-[50px] gap-5">
            {
              arraySkills.map(skill => (
                <div key={skill.nome} className="bg-zinc-800 w-[200px] h-[200px] relative flex flex-col">
                  <div className="flex-1 flex justify-center items-center">
                    <img src={skill.img} alt="" className="w-[100px] h-[100px] object-contain" />
                  </div>
                  <div className="text-center bg-black text-white w-full py-2">
                    <span>{skill.nome}</span>
                  </div>
                </div>
              ))
            }
          </div>
          <div className="sm:hidden">
            <CarouselMobile />
          </div>
        </div>

        <div className="p-3" id="projetos">
          <h1 className="text-white uppercase text-center font-semibold text-3xl p-3">projetos</h1>

          <div className="flex flex-wrap justify-around gap-5 mt-[50px]">

            <div className="max-w-[500px] w-full bg-zinc-900 p-3 text-white font-sans rounded-md">
              <div className="pb-3 flex items-center gap-5">
                <a href="https://github.com/gabriellxz/todolist" target="_blank">
                  <img src={github_logo} alt="" className="w-[30px] bg-white rounded-md" />
                </a>
                <a href="https://todolist-ruddy-pi.vercel.app/" target="_blank">
                  <ArrowTopRightOnSquareIcon className="w-[40px] text-green-700" />
                </a>
              </div>

              <img src={todoProject} alt="" />
              <div className="space-y-5">
                <p className="text-xl">Gerenciador de Todos</p>

                <div className="flex gap-5 flex-wrap uppercase">
                  <span className="bg-green-700 p-1 rounded-sm">React</span>
                  <span className="bg-green-700 p-1 rounded-sm">TypeScript</span>
                  <span className="bg-green-700 p-1 rounded-sm">Tailwind</span>
                  <span className="bg-green-700 p-1 rounded-sm">React-dom</span>
                </div>
              </div>
            </div>

            <div className="max-w-[500px] w-full bg-zinc-900 p-3 text-white font-sans rounded-md">
              <div className="pb-3 flex items-center gap-5">
                <a href="https://github.com/gabriellxz/front-projeto-teacherHunt" target="_blank">
                  <img src={github_logo} alt="" className="w-[30px] bg-white rounded-md" />
                </a>
                <a href="https://teacherhunt.vercel.app/" target="_blank">
                  <ArrowTopRightOnSquareIcon className="w-[40px] text-green-700" />
                </a>
              </div>

              <img src={teacherProject} alt="" />
              <div className="space-y-5">
                <p className="text-xl">Telas de login e cadastro TeacherHunt</p>

                <div className="uppercase flex flex-wrap gap-5">
                  <span className="bg-green-700 p-1 rounded-sm">React</span>
                  <span className="bg-green-700 p-1 rounded-sm">JavaScript</span>
                  <span className="bg-green-700 p-1 rounded-sm">Tailwind</span>
                  <span className="bg-green-700 p-1 rounded-sm">React-dom</span>
                  <span className="bg-green-700 p-1 rounded-sm">React-hook-form</span>
                  <span className="bg-green-700 p-1 rounded-sm">Axios</span>
                </div>
              </div>
            </div>

            <div className="max-w-[500px] w-full bg-zinc-900 p-3 text-white font-sans rounded-md">
              <div className="pb-3 flex items-center gap-5">
                <a href="https://github.com/gabriellxz/portifolio-gabriel" target="_blank">
                  <img src={github_logo} alt="" className="w-[30px] bg-white rounded-md" />
                </a>
                <a href="https://gabriel-silva-ashen.vercel.app/" target="_blank">
                  <ArrowTopRightOnSquareIcon className="w-[40px] text-green-700" />
                </a>
              </div>

              <img src={printPort} alt="" />
              <div className="space-y-5">
                <p className="text-xl">Portifólio</p>

                <div className="uppercase flex flex-wrap gap-5">
                  <span className="bg-green-700 p-1 rounded-sm">React</span>
                  <span className="bg-green-700 p-1 rounded-sm">TypeScript</span>
                  <span className="bg-green-700 p-1 rounded-sm">Tailwind</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        <a href="https://wa.me/5585982301653" target="_blank">
          <img src={whats_logo} alt="" className="fixed right-0 bottom-0 w-[60px]" />
        </a>
      </main>


    </>
  )
}

export default App
