import springIcon from "../assets/spring-3.svg";
{/*import dotnetIcon from "../assets/microsoft-dot-net-icon.svg";*/}
import tiIcon from "../assets/texas-instruments-1.svg";
import mIcon from "../assets/matlab.svg";
{/*import resume from "../assets/Resume-Soumit-Mondal.pdf"; */}
const Portfolio = ()=>{
    return(
        <>
            <div className="Main-Container py-14 ">
                <h1 className="text-5xl font-bold text-center underline">My Projects</h1>
                <div className="projects-container flex-col mt-10 space-y-5 px-16">

                <div className="Projects1  bg-slate-200 shadow-lg rounded-xl cursor-pointer hover:bg-gray-100">
                        <h4 className="text-3xl py-6 text-amber-600 px-2"> Crello Blog</h4>
                        <p className="pb-4 px-2">
                        An innovative modern blogging application built with Node.js and React provides features such as user authentication, blog management, real-time commenting, and search functionality, ensuring a responsive and engaging user experience. Deployed to the cloud with scalable architecture, it uses MongoDB for data storage, JWT authentication for security, and CI/CD pipelines for efficient deployment. The result is a high-performance, reliable, and easy-to-maintain platform ideal for sharing content and building communities.
                            <h4 className="py-3 font-semibold underline">
                                Application has been built using :
                                <div className="icons flex space-x-5 px-2 py-2">
                                    <div>
                                        {/*<img src={dotnetIcon}
                                             className="text-xl rounded-full bg-slate-50 h-12 w-12 items-center justify-center hover:bg-amber-300 flex"></img> */}
                                        <i className="fa-brands fa-js text-4xl rounded-full bg-slate-50 h-12 w-12 items-center justify-center flex hover:bg-amber-300"></i>
                                    </div>
                                    <div>
                                        <i className="fa-brands fa-react text-4xl rounded-full bg-slate-50 h-12 w-12 items-center justify-center flex hover:bg-amber-300"></i>
                                    </div>
                                    <div>
                                        <i className="fa-solid fa-database text-4xl rounded-full bg-slate-50 h-12 w-12 items-center justify-center flex hover:bg-amber-300"></i>
                                    </div>
                                    <div>
                                        <i className="fa-brands fa-aws text-4xl rounded-full bg-slate-50 h-12 w-12 items-center justify-center flex hover:bg-amber-300"></i>
                                    </div>                                  
                                </div>
                            </h4>
                        </p>
                        <a href="https://github.com/steward123/MyBlogApp" className="inline-flex ml-5">
                            <button className="my-2 bg-slate-50 hover:bg-amber-300 text-black font-sm py-2 px-4 w-auto rounded-full inline-flex items-center">
                                <span>Link to Project ↗️</span>
                            </button>
                        </a>                        
                    </div>

                    <div className="Projects2 bg-slate-200 shadow-lg rounded-xl cursor-pointer hover:bg-gray-100">
                        <h4 className="text-3xl py-6 text-amber-600 px-2">Netflix Shows Analysis with Interactive BI Dashboard</h4>
                        <p className="pb-4 px-2">
                            Netflix is a popular streaming service that offers a wide range of TV shows and movies. This project aims to analyze the Netflix shows dataset using Amazon QuickSight a Business Intelligence Tool(BI-Tool) to gain insights into the content available on the platform. The interactive dashboard provides visualizations such as show distribution by genre, release year and many more. By exploring the data, users can discover trends, patterns, and correlations that help them make informed decisions about what to watch.
                            <h4 className="py-3 font-semibold underline">
                                Application has been built using :
                                <div className="icons flex space-x-5 px-2 py-2">
                                    {/*<div>
                                        <img src={tiIcon}
                                             className="text-xl rounded-full bg-slate-50 h-12 w-12 items-center justify-center hover:bg-amber-300 flex"></img>
                                    </div>*/}
                                    {/*<div>
                                        <img src={mIcon}
                                             className="text-xl rounded-full bg-slate-50 h-12 w-12 items-center justify-center hover:bg-amber-300 flex"></img>
                                    </div>*/}

                                    <i className="fa-brands fa-aws text-4xl rounded-full bg-slate-50 h-12 w-12 items-center justify-center flex hover:bg-amber-300"></i>
                                </div>
                            </h4>
                        </p>
                        <a href="https://github.com/steward123/Netflix_Analysis_Quicksight" className="inline-flex ml-5">
                            <button className="my-2 bg-slate-50 hover:bg-amber-300 text-black font-sm py-2 px-4 w-auto rounded-full inline-flex items-center">
                                <span>Link to Project ↗️</span>
                            </button>
                        </a>                        
                    </div>

                    <div className="Projects3 bg-slate-200 shadow-lg rounded-xl cursor-pointer hover:bg-gray-100">
                        <h4 className="text-3xl py-6 text-amber-600 px-2">Personalized Expense Tracker</h4>
                        <p className="pb-4 px-2">
                            An one stop solution for all the problem that has been bugging all the person since age's.
                            It
                            is an web application where we can track all the records of expenses happen in a month , we
                            can find the average monthly usage, based on the data it can also provide how much money has
                            been spent last year, It also has a todo list with it which can be used for various
                            purposes.
                            <h4 className="py-3 font-semibold underline">
                                Application has been built using :
                                <div className="icons flex space-x-5 px-2 py-2">
                                    <div>
                                        <i className="fa-brands fa-java text-4xl rounded-full bg-slate-50 h-12 w-12 items-center justify-center flex hover:bg-amber-300"></i>
                                    </div>
                                    <div>
                                        <i className="fa-brands fa-angular text-4xl rounded-full bg-slate-50 h-12 w-12 items-center justify-center flex hover:bg-amber-300"></i>
                                    </div>
                                    <div>
                                        <i className="fa-solid fa-database text-4xl rounded-full bg-slate-50 h-12 w-12 items-center justify-center flex hover:bg-amber-300"></i>
                                    </div>
                                    <div>
                                        <img src={springIcon}
                                             className="text-xl rounded-full bg-slate-50 h-12 w-12 items-center justify-center hover:bg-amber-300 flex"></img>
                                    </div>
                                </div>
                            </h4>
                        </p>
                        <a href="https://github.com/steward123/PersonalizedExpenseTracker" className="inline-flex ml-5">
                            <button className="my-2 bg-slate-50 hover:bg-amber-300 text-black font-sm py-2 px-4 w-auto rounded-full inline-flex items-center">
                                <span>Link to Project ↗️</span>
                            </button>
                        </a>
                    </div>
                    <div className="flex items-end justify-end">
                        <button className="px-3 py-2 bg-orange-500 rounded-full shadow-md text-white hover:bg-lime-300">
                            {/*<a href={resume} target="_blank" rel="noopener noreferrer">*/}
                            <a href="/my-portfolio-react-website/#/certifications">
                                <i className='fas fa-arrow-right'></i>
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Portfolio;