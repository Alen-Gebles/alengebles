import Image from "next/image";
import './info.css';

function Info(){
  return(
    <>
    <section className="info-container">
      <h2 className="linkHead">Links</h2>
      <ul className="linkUl">
        <li className="link"><a href="">Home</a></li>
        <li className="link"><a href="">About me</a></li>
        <li className="link"><a href="">Diary</a></li>
        <li className="link"><a href="">Blog</a></li>
        <li className="link"><a href="">Discord</a></li>
        <li className="link"><a href="">Twitter</a></li>
        <li className="link"><a href="">Github</a></li>
        <li className="link"><a href="">Linkedin</a></li>
        <li className="link"><a href="">Tumbrl</a></li>
        <li className="link"><a href="">Email</a></li>
      </ul>
    </section>
    </>
  )
}

export default Info;
