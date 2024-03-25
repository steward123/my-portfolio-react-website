import bannerImage from "../assets/H-10959.jpg";
import bannerBackground from "../assets/gradients.jpg";
const About=()=>{
    return(
      <>
          <div className="main-container border py-14 bg-gray-200 h-screen">
              <h1 className="text-center text-5xl pb-16 underline font-bold">About</h1>
              <div className="flex items-center">
                  {/* image container*/}
                  <div className="w-full flex justify-center items-center">
                      <img src={bannerImage} alt="Soumit Kumar Mondal" className="rounded-2xl shadow-lg border-4"/>
                  </div>
                  {/*text container*/}
                  <div className="w-full flex justify-center">
                      <div className="space-y-5 me-10">
                          <h1 className="text-5xl font-semibold">Fullstack web-Developer</h1>
                          <p className="">I am having an experience in designing fullstack web application with the help of
                              technologies like Java, Asp.Net Core, Node.js and some Javascript frameworks Angular, React Js
                              that play a vital role in developing the backend and frontend of the application.</p>
                          <p className="">I am also having an experience in using a variety of databases like RDBMS, NoSQL that are well
                              known in
                              the industry, and last but not the least I am having an knowledge of debugging techniques, tools and IDEs that help in developing the application.</p>
                          <h4 className="underline">Read more about my skills...</h4>
                          <div className="items-end justify-end flex">
                          <button className="px-3 py-2 bg-orange-500 rounded-full shadow-md text-white hover:bg-lime-300">
                              <a href="/my-portfolio-react-website/#/skill">
                                  <i class='fas fa-arrow-right'></i>
                              </a>
                          </button>
                          </div>
                      </div>
                  </div>


              </div>
          </div>
      </>
    );
}

export default About;