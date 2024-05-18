
import LayoutHeaderFooter from '@/component/layoutHeaderFooter'
import ProfilPage from "@/component/profil";
import ScroolDown from "@/component/scrooldown";
import Skill from "@/component/skill";
import Project from "@/component/projects";

export const metadata = {
  title: 'Natanael Rio Wijaya',
  description: 'Portofolio Natanael Rio Wijaya',
}

export default async function Home() {

  return (
    <LayoutHeaderFooter>
      <ProfilPage />
      <ScroolDown />
      <Skill />
      <Project />
    </LayoutHeaderFooter >
  )
}
