import saa from  "../assets/aws-certified-solutions-architect-associate.png";
import clf from "../assets/aws-certified-cloud-practitioner.png";
import { useState } from "react";

const Certifications=()=>{

    const [certificatesList,setCertificatesList]  = useState([
        {
            title:"AWS Certified Solutions Architect Associate",
            validity:"valid till 03-01-2028",
            link:"https://drive.google.com/file/d/1WO8jAi4S449NPVjAQHzGiDg6zDkXGVKE/view?usp=drive_link",
            image:saa,
            id:1
        },
        {
            title:"AWS Certified Cloud Practitioner Foundational",
            validity:"valid till 03-01-2028",
            image:clf,
            link:"https://drive.google.com/file/d/176B8g1JXJ2gUnxnecVqX_aRBgSG9YtT9/view?usp=drive_link",
            id:2
        }
    ]); 

    return(
        <>
            <section className="py-16 mx-auto sm:py-20">
                <div className="mx-auto flex justify-center object-center  px-4 py-16  sm:py-24 lg:max-w-7xl ">
                    <div className="flex justify-center object-center flex-col gap-12 sm:gap-16">
                        <div className=" mx-auto grid gap-12 space-y-10 md:space-y-0 sm:gap-16 lg:grid-cols-3">
                            {certificatesList.map((certificate)=>
                                (
                                    <div key={certificate.title} className="group h-96 w-96 [perspective:1000px]">
                                    <div key={certificate.id} className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                                    {/* Front face with image */}
                                    <div className="absolute inset-0 h-full w-full rounded-xl [backface-visibility:hidden]">
                                    {certificate.image && (
                                        <img
                                        className="object-cover cursor-pointer object-left h-full w-full rounded-xl"
                                        src={certificate.image}
                                        alt={certificate.title}
                                        width={320}
                                        height={320}
                                        />
                                    )}</div>
                            
                                    {/* Back face with title */}
                                    <div className="absolute inset-0 h-full w-full rounded-xl bg-gray-200 px-12 text-center text-black-200  [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                        <div className="flex min-h-full flex-col items-center justify-center">
                                            <h1 className="text-3xl font-semibold">{certificate.title}</h1>
                                            <br/>
                                            <p>{certificate.validity}</p>
                                            <a href={certificate.link} className="inline-flex">
                                                <button className="my-2 bg-yellow-800 hover:bg-yellow-700 text-white font-bold py-2 px-4 w-auto rounded-full inline-flex items-center">
                                                    <span>Link to Certificate 🔗</span>
                                                </button>
                                            </a>                                            
                                        </div>
                                    </div>
                                    </div>
                                    </div>
                                ))
                            }
                            </div>
                    </div>
                </div>
                <div className="flex items-end justify-end">
                        <button className="px-3 py-2 bg-orange-500 rounded-full shadow-md text-white hover:bg-lime-300 mr-10">
                            {/*<a href={resume} target="_blank" rel="noopener noreferrer">*/}
                            <a href="/my-portfolio-react-website/#/contact">
                                <i className='fas fa-arrow-right'></i>
                            </a>
                        </button>
                    </div>
            </section>

        </>
    );
}
export default Certifications;