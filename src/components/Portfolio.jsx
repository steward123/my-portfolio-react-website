import springIcon from "../assets/spring-3.svg";
import dotnetIcon from "../assets/microsoft-dot-net-icon.svg";
import tiIcon from "../assets/texas-instruments-1.svg";
import mIcon from "../assets/matlab.svg";
{/*import resume from "../assets/Resume-Soumit-Mondal.pdf"; */}
const Portfolio = ()=>{
    return(
        <>
            <div className="Main-Container py-14 ">
                <h1 className="text-5xl font-bold text-center underline">My Projects</h1>
                <div className="projects-container flex-col mt-10 space-y-5 px-16">
                    <div className="Projects1 bg-slate-200 shadow-lg rounded-xl cursor-pointer hover:bg-gray-100">
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
                    </div>
                    <div className="Projects2  bg-slate-200 shadow-lg rounded-xl cursor-pointer hover:bg-gray-100">
                        <h4 className="text-3xl py-6 text-amber-600 px-2">Movie Rental Application</h4>
                        <p className="pb-4 px-2">
                            A web application which rent movies to it's users for certain time period.
                            <h4 className="py-3 font-semibold underline">
                                Application has been built using :
                                <div className="icons flex space-x-5 px-2 py-2">
                                    <div>
                                        <img src={dotnetIcon}
                                             className="text-xl rounded-full bg-slate-50 h-12 w-12 items-center justify-center hover:bg-amber-300 flex"></img>
                                    </div>
                                    <div>
                                        <i className="fa-brands fa-angular text-4xl rounded-full bg-slate-50 h-12 w-12 items-center justify-center flex hover:bg-amber-300"></i>
                                    </div>
                                    <div>
                                        <i className="fa-solid fa-database text-4xl rounded-full bg-slate-50 h-12 w-12 items-center justify-center flex hover:bg-amber-300"></i>
                                    </div>
                                </div>
                            </h4>
                        </p>
                    </div>
                    <div className="Projects3 bg-slate-200 shadow-lg rounded-xl cursor-pointer hover:bg-gray-100">
                        <h4 className="text-3xl py-6 text-amber-600 px-2">Innovative Fault Detection Algorithm for
                            Transmission-Line Protection</h4>
                        <p className="pb-4 px-2">
                            With the help of embedded microcontroller boards, I have designed a solution which can
                            easily detect the fault occured in which phase of the transmission line. Along with that I
                            have also done the software-in-loop (SIL) testing of the designed system which provides test
                            data that can be used with machine-learning for betterment of the device and improving the
                            protection system of the transmission lines.

                            <h4 className="py-3 font-semibold underline">
                                Application has been built using :
                                <div className="icons flex space-x-5 px-2 py-2">
                                    <div>
                                        <img src={tiIcon}
                                             className="text-xl rounded-full bg-slate-50 h-12 w-12 items-center justify-center hover:bg-amber-300 flex"></img>
                                    </div>
                                    <div>
                                        <img src={mIcon}
                                             className="text-xl rounded-full bg-slate-50 h-12 w-12 items-center justify-center hover:bg-amber-300 flex"></img>
                                    </div>
                                </div>
                            </h4>
                        </p>
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