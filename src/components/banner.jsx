import BannerImage from "../assets/H-10959.jpg";
import bannerBackground from "../assets/gradients.jpg";
import Typed from "typed.js";
import {useEffect, useRef} from "react";
const Banner=()=>{
    const githubUrl = "https://github.com/steward123";
    //old linkedIn-url
    //const linkedInUrl = "https://www.linkedin.com/in/soumit-mondal-2a958117b";
    const linkedInUrl = "https://www.linkedin.com/in/soumit-mondal/";
    const leetCodeUrl = "https://leetcode.com/kumarsoumit6/";
    const hackerRankurl = "https://www.hackerrank.com/profile/kumarsoumit6";
    const facebookUrl = "https://www.facebook.com/soumit.mondal.188/";

    const el = useRef(null);
    useEffect(() => {
        const typed = new Typed(el.current,{
            strings:["Backend Developer","Frontend Developer","Fullstack-web Developer"],
            startDelay:100,
            typeSpeed:100,
            backSpeed:80,
            backDelay:100,
            loop:true
        });
        return ()=>{
            typed.destroy();
        }
    }, []);
    return(
        <>
            <div style={
                {
                    backgroundImage:`url(${bannerBackground})`,
                    boxShadow:"inset 0 0 0 850px rgba(0,0,0,0.3)"
                }
            } className="Main-container flex h-screen items-center">
                <div className="w-full flex justify-center text-white">
                    <div className="w-2/3 space-y-3 ms-10">
                        {/*Text*/}
                        <h3 className="text-2xl font-semibold">Hi, &#128075; I am</h3>
                        <h1 className="text-4xl font-bold">Soumit Kumar Mondal</h1>
                        <h2 className="text-xl">And I Am A <span className="underline font-bold" ref={el}></span>
                        </h2>
                        <p className="">I'm Soumit a full-stack web developer having an experience of 2.5 years in
                            designing and
                            developing solution that is user-friendly and more economical to use.</p>
                        <div className="icons-container flex space-x-5">
                            {/*icons*/}
                            <a href={facebookUrl} className="h-12 w-12 flex justify-center items-center rounded-full bg-gray-400  hover:bg-amber-500">
                                <i className="fa-brands text-4xl text-white fa-facebook"></i>
                            </a>
                            <a href={linkedInUrl} className="h-12 w-12 flex justify-center items-center rounded-full bg-gray-400  hover:bg-amber-500">
                                <i className="fa-brands text-4xl text-white fa-linkedin"></i>
                            </a>
                            <a href={githubUrl} className="h-12 w-12 flex justify-center items-center rounded-full bg-gray-400  hover:bg-amber-500">
                                <i className="fa-brands text-4xl text-white fa-github"></i>
                            </a>
                            <a href={hackerRankurl} className="h-12 w-12 flex justify-center items-center rounded-full bg-gray-400  hover:bg-amber-500">
                                <i className="fa-brands text-4xl text-white fa-hackerrank"></i>
                            </a>
                        </div>
                        <button className="px-3 py-2 bg-orange-500 rounded-full shadow-md text-white">
                            <a href="/my-portfolio-react-website/#/contact">Contact Me!</a>
                        </button>
                    </div>
                </div>
                <div className="w-full flex justify-center">
                    {/*Image*/}
                    <img className="rounded-full shadow-lg w-fit border-4" src={BannerImage}/>
                </div>
            </div>
        </>
    );
}

export default Banner;