import { socialMedia } from "../data";
import PageLinks from "./pageLinks";
import SocialLink from "./SocialLink";
/*import { pageLinks } from "../data";*/


const Footer = () => {
  return (
<footer className ="section footer">

    <PageLinks parentClass='footer-links' itemClass='footer-link'/>

      {/* { <ul className ="footer-links">
      {pageLinks.map((link)=>{
        const {id, href, text}=link
        return(
          <li key = {id}>
          <a href={href} className ="footer-link">{text}</a>
        </li>
        )
      })}      
      </ul> } */}

      
      <ul className ="footer-icons">
    {socialMedia.map((link)=>{
      
      return(
        <SocialLink key = {link.id} {...link} itemClass = 'footer-icon'></SocialLink>
    )})}         
      </ul>


      <p className ="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear( )}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer