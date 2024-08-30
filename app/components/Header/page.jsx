import Image from "next/image";
import './header.css'

function Header(){
  return(
    <>
    <section className="header-container">
      <Image className="headerPfp" src="/pfp.jpg" alt="Profile Picture" width={60} height={60}></Image>
      <p className="myName">I&apos;m Allen Gebles</p>
      <div className="headerBanner">
        <div className="headerBannerText">
          <h2 className="headerBannerH2">Web Developer & Designer</h2>
          <p className="headerBannerP">Crafting visually appealing & functional web experiences.</p>
        </div>
        <div className="headerBannerBtn">
            <button className="headBtn twitterX">
            <svg x="0px" y="0px" width="auto" height="auto" viewBox="0,0,256,256"><g fill="#f8f8f8" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(8.53333,8.53333)"><path d="M26.37,26l-8.795,-12.822l0.015,0.012l7.93,-9.19h-2.65l-6.46,7.48l-5.13,-7.48h-6.95l8.211,11.971l-0.001,-0.001l-8.66,10.03h2.65l7.182,-8.322l5.708,8.322zM10.23,6l12.34,18h-2.1l-12.35,-18z"></path></g></g></svg>
            </button>
            <a href="mailto:alengebles@gmail.com">
              <button className="headBtn contact"><span>@</span>Contact Me</button>
            </a>
            
        </div>
      </div>
    </section>
    </>
  )
}

export default Header;