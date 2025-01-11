const Skills = () =>{
    return (
        <>
            <div className="Main-Container py-14">
            <h1 className="text-5xl font-bold text-center underline">My Skills</h1>
                {/* My expertise section */}
                <div className="Box-container">
                    <div className="py-8">
                        {/*text-container*/}
                        <h1 className="text-3xl text-center font-semibold text-amber-600 animate-pulse"> I have worked with these
                            technologies.</h1>
                    </div>
                    <div className="">
                        {/*skills container*/}
                        <div className="flex space-x-3 flex-wrap h-fit items-center justify-center py-3">
                            <p className="cursor-pointer bg-sky-200 w-fit px-3 py-2 mt-3 hover:bg-gray-300 rounded-full shadow-md">Core Java</p>
                            <p className="cursor-pointer bg-sky-200 w-fit px-3 py-2 mt-3 hover:bg-gray-300 rounded-full shadow-md">J2EE</p>
                            <p className="cursor-pointer bg-sky-200 w-fit px-3 py-2 mt-3 hover:bg-gray-300 rounded-full shadow-md">SpringBoot Framework</p>
                            <p className="cursor-pointer bg-sky-200 w-fit px-3 py-2 mt-3 hover:bg-gray-300 rounded-full shadow-md">Hibernate(ORM/Tool)</p>
                            <p className="cursor-pointer bg-sky-200 w-fit px-3 py-2 mt-3 hover:bg-gray-300 rounded-full shadow-md">MVC</p>
                            <p className="cursor-pointer bg-sky-200 w-fit px-3 py-2 mt-3 hover:bg-gray-300 rounded-full shadow-md">Asp.Net Core</p>
                            <p className="cursor-pointer bg-sky-200 w-fit px-3 py-2 mt-3 hover:bg-gray-300 rounded-full shadow-md">AWS</p>
                            <p className="cursor-pointer bg-sky-200 w-fit px-3 py-2 mt-3 hover:bg-gray-300 rounded-full shadow-md">Red Hat Linux</p>
                            <p className="cursor-pointer bg-sky-200 w-fit px-3 py-2 mt-3 hover:bg-gray-300 rounded-full shadow-md">unix</p>
                            <p className="cursor-pointer bg-sky-200 w-fit px-3 py-2 mt-3 hover:bg-gray-300 rounded-full shadow-md">Pro*c</p>
                            <p className="cursor-pointer bg-sky-200 w-fit px-3 py-2 mt-3 hover:bg-gray-300 rounded-full shadow-md">Angular</p>
                            <p className="cursor-pointer bg-sky-200 w-fit px-3 py-2 mt-3 hover:bg-gray-300 rounded-full shadow-md">React</p>
                            <p className="cursor-pointer bg-sky-200 w-fit px-3 py-2 mt-3 hover:bg-gray-300 rounded-full shadow-md">JavaScript</p>
                            <p className="cursor-pointer bg-sky-200 w-fit px-3 py-2 mt-3 hover:bg-gray-300 rounded-full shadow-md">XML</p>
                            <p className="cursor-pointer bg-sky-200 w-fit px-3 py-2 mt-3 hover:bg-gray-300 rounded-full shadow-md">HTML/CSS</p>
                            <p className="cursor-pointer bg-sky-200 w-fit px-3 py-2 mt-3 hover:bg-gray-300 rounded-full shadow-md">NoSQL</p>
                            <p className="cursor-pointer bg-sky-200 w-fit px-3 py-2 mt-3 hover:bg-gray-300 rounded-full shadow-md">Python</p>
                            <p className="cursor-pointer bg-sky-200 w-fit px-3 py-2 mt-3 hover:bg-gray-300 rounded-full shadow-md">State Management</p>
                            <p className="cursor-pointer bg-sky-200 w-fit px-3 py-2 mt-3 hover:bg-gray-300 rounded-full shadow-md">VS Code</p>
                            <p className="cursor-pointer bg-sky-200 w-fit px-3 py-2 mt-3 hover:bg-gray-300 rounded-full shadow-md">Eclipse</p>
                            <p className="cursor-pointer bg-sky-200 w-fit px-3 py-2 mt-3 hover:bg-gray-300 rounded-full shadow-md">Visual Studio 2022</p>
                            <p className="cursor-pointer bg-sky-200 w-fit px-3 py-2 mt-3 hover:bg-gray-300 rounded-full shadow-md">Geany</p>
                            <p className="cursor-pointer bg-sky-200 w-fit px-3 py-2 mt-3 hover:bg-gray-300 rounded-full shadow-md">Jetbrains Intellij</p>
                            <p className="cursor-pointer bg-sky-200 w-fit px-3 py-2 mt-3 hover:bg-gray-300 rounded-full shadow-md">GDB</p>
                            <p className="cursor-pointer bg-sky-200 w-fit px-3 py-2 mt-3 hover:bg-gray-300 rounded-full shadow-md">Valgrind</p>
                            <p className="cursor-pointer bg-sky-200 w-fit px-3 py-2 mt-3 hover:bg-gray-300 rounded-full shadow-md">webapi</p>
                            <p className="cursor-pointer bg-sky-200 w-fit px-3 py-2 mt-3 hover:bg-gray-300 rounded-full shadow-md">Winforms</p>
                            <p className="cursor-pointer bg-sky-200 w-fit px-3 py-2 mt-3 hover:bg-gray-300 rounded-full shadow-md">JSON</p>
                            <p className="cursor-pointer bg-sky-200 w-fit px-3 py-2 mt-3 hover:bg-gray-300 rounded-full shadow-md">GitHub</p>
                            <p className="cursor-pointer bg-sky-200 w-fit px-3 py-2 mt-3 hover:bg-gray-300 rounded-full shadow-md">SVN</p>
                        </div>
                    </div>
                    <div className="py-8 px-16">
                        {/*text-container*/}
                        <h1 className="text-3xl text-center font-semibold text-amber-600 ">With the help of these
                            technologies, I have created some projects.</h1>
                        <h4 className="underline px-3 py-5">Learn more about my awesome Projects!...</h4>
                        <div className="items-end justify-end flex">
                            <button className="px-3 py-2 bg-orange-500 rounded-full shadow-md text-white hover:bg-lime-300">
                                <a href="/my-portfolio-react-website/#/portfolio">
                                    <i className='fas fa-arrow-right'></i>
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Skills;