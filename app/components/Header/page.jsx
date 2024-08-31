import Image from "next/image";
import './header.css'

function Header(){
  return(
    <>
    <section className="header-container">
      <div className="pfpBox">
        <Image className="headerPfp" src="/pfp.jpg" alt="Profile Picture" width={1000} height={1000}></Image>
        <p className="introduction">
          This is place for my projects and blogs. It&apos;s inspired  my many other sites & my older website.
          <br />
          I&apos;m a web developer who likes to do some design work as well.
        </p>
      </div>

            <button className="headBtn twitterX">
            <svg x="0px" y="0px" width="auto" height="auto" viewBox="0,0,256,256"><g fill="#f8f8f8" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(8.53333,8.53333)"><path d="M26.37,26l-8.795,-12.822l0.015,0.012l7.93,-9.19h-2.65l-6.46,7.48l-5.13,-7.48h-6.95l8.211,11.971l-0.001,-0.001l-8.66,10.03h2.65l7.182,-8.322l5.708,8.322zM10.23,6l12.34,18h-2.1l-12.35,-18z"></path></g></g></svg>
            </button>
            
    </section>
    </>
  )
}

export default Header;