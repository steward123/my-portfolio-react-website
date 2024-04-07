import {useState} from "react";
import {Link} from "react-router-dom";
import navBackground from "../assets/gradients.jpg";
import resume from "../assets/Resume-Soumit-Mondal.pdf";
const Header = ()=>{
    const [logo, setLogo] = useState("SM");
    const[menuLinks,setmenuLinks] = useState([
        /*{
            title:"Home",
            link:"/home",
            id:1
        }, */
        {
            title:"About",
            link:"/about",
            id:2
        },
        {
            title:"Skills",
            link:"/skill",
            id:3
        },
        {
            title:"Portfolio",
            link:"/portfolio",
            id:4
        },
        {
            title:"Contact",
            link:"/contact",
            id:5
        }
    ]);
    const [bannerLink,setBannerLink] = useState([{
        link:"/",
        id:0
    }]);
    const[downbutton, setDownbutton]=useState([
        {
            title:"Resume",
            link:resume,
            id:6
        }
    ]);
  return (
      <>
          <div className="h-16 main flex justify-between items-center align-middle px-16 bg-gray-100" style={
              {
                  backgroundImage:`url(${navBackground})`,
                  boxShadow:"inset 0 0 0 850px rgba(0,0,0,0.3)"
              }
          }>
              <div>
                  {/*brand logo*/}
                  <button className="bg-lime-300 px-2 py-2 rounded-full shadow-md">
                      <a href="/my-portfolio-react-website/#">
                        <h1 className="text-2xl font-bold text-white">{logo}</h1>
                      </a>
                  </button>
              </div>
              <div class="space-x-3 text-white">
                  {/*menus*/}
                  { menuLinks.map((link)=> (
                      <Link key={link.id} to={link.link} className="hover:text-amber-500">{link.title}</Link>
                  ))}

                  {/*<a href="/Skills" className="hover:text-orange-600">
                      Skills
                  </a>
                  <a href="/Portfolio" className="hover:text-orange-600">
                      Portfolio
                  </a>
                  <a href="/Contact" className="hover:text-orange-600">
                      Contact
                  </a> */}
              </div>
              <div>
                  {/*buttons*/}
                  {
                      downbutton.map((btn)=>(
                    <a key={btn.id} href={btn.link} target="_blank" rel="noopener noreferrer">
                        <button className="px-3 py-1 bg-orange-500 rounded-full text-white shadow-lg">{btn.title}</button>
                    </a> ))
                  }
              </div>
          </div>
      </>
  );
}

export default Header;