import bannerImage from "../assets/H-10959.jpg";
import bannerBackground from "../assets/gradients.jpg";
const About=()=>{
    return(
      <>
          <div className="main-container border-collapse bg-gray-200 py-14 h-fit">
              { /*<h1 className="text-center text-5xl pb-12 underline font-bold">About</h1> */}
              <div className="flex items-center">
                  {/* image container*/}
                  <div className="w-full flex justify-center items-center">
                      <img src={bannerImage} alt="Soumit Kumar Mondal" className="rounded-2xl shadow-lg border-4"/>
                  </div>
                  {/*text container*/}
                  <div className="w-full flex justify-center border-collapse">
                      <div className="space-y-5 me-10">
                          <h1 className="text-5xl font-semibold">Application Developer</h1>
                          <p className="text-sm">1️⃣ 
                            Dedicated IT Professional, with a proven track record in delivering high-performance, scalable solutions. Leveraging a strong foundation in Agile Methodologies and System Programming, I thrive on solving complex problems and optimizing system performance. With a Bachelor of Technology in Electrical and Electronics Engineering from OP Jindal University and having professional Experience at Tata Consultancy Services Limited.</p>
                            <p className="text-sm">2️⃣ My work involves developing, and deploying high-efficiency software and participating in every phase of the Software-Development-Life-Cycle(SDLC) from analysis, design, testing, and deployment and interacting with the clients to make them understand the solution of the problem proposed.<br/><br/>
My recent works where I take pride in delivering solutions are as follows: <br/><br/>
 ➡️ Dashboard that has made the monitoring process in a completely automated way, as evidenced it has improvement of the efficiency of the system by 95%.<br/><br/>
 ➡️ I have recently designed a tool to collect the data from the Multiple AWR(Automatic Workload Repository) sheets and can be integrated with any Business Intelligence tools for further analysis or can be used to design any machine learning algorithm to predict before the time when the database will fail or can be used to find the cause which query is taking a large time to execute affecting the business time or can be used to find out the if the machine configuration is bottleneck.</p>
 <p className="text-sm">
 3️⃣ As an accomplishment,<br/><br/>
 ➡️ For my work, I have been awarded twice as "Star of the Month" at my current Organization.<br/><br/>
 ➡️ Outside of work, I love solving coding problems, I have solved 1000+ coding problems on some famous coding platforms hackerrank and Leetcode.<br/><br/>
 ➡️ I have achieved aws certification and have a good knowledge of cloud services. </p>
 <p className="text-sm">4️⃣ I'm passionate about leveraging my skills to drive technological advancement and always seek opportunities for my expertise to contribute to the organization.</p>
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