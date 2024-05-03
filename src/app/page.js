
import LayoutHeaderFooter from '@/app/component/layoutHeaderFooter'
import ProfilPage from "@/app/component/profil";
import ScroolDown from "@/app/component/scrooldown";
import Skill from "@/app/component/skill";
import Project from "@/app/component/projects";

export const metadata = {
  title: 'Natanael Rio Wijaya',
  description: 'Portofolio Natanael Rio Wijaya',
}

export default function Home() {
  return (
    <LayoutHeaderFooter>
      <ProfilPage />
      <ScroolDown />
      <Skill />
      <Project />
    </LayoutHeaderFooter >
  )
}
