import Image from "next/image";
import Header from "./components/Header/page";
import Info from "./components/Info/page"

export default function Home() {
  return(
    <>
    <main className="mainContainer">
      <div className="flex flex-row gap-3">
        <Header />
        <Info />    
      </div>
    </main>
    
    </>
  )
}
