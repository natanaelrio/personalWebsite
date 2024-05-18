
import LayoutHeaderFooter from '@/component/layoutHeaderFooter'
import ProfilPage from "@/component/profil";
import ScroolDown from "@/component/scrooldown";
import Skill from "@/component/skill";
import Project from "@/component/projects";
// export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Natanael Rio Wijaya',
  description: 'Portofolio Natanael Rio Wijaya',
}
// export async function AmbilView() {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/get-viewproduct?id=1`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': process.env.NEXT_PUBLIC_SECREET
//     },
//     next: { revalidate: 0 }
//   })

//   return res.json()
// }

export default async function Home() {
  // const dataID = await AmbilView()
  // dataID.data[0].view_barang
  return (
    <LayoutHeaderFooter view={1}>
      <ProfilPage />
      <ScroolDown />
      <Skill />
      <Project />
    </LayoutHeaderFooter >
  )
}
