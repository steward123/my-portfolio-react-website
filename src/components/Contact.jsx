import contactUsImage from '../assets/contact-us-3483604-2912020.png';
const Contact =()=>{
    return(
      <>
          <div className="Main-container py-14 bg-slate-50 h-screen">
              <h1 className="text-5xl font-bold text-center justify-center underline">Contact Me!!</h1>
              <div className="flex items-center mt-14">
              {/*Image container*/}
              <div className="w-full flex justify-center items-center">
                  <img src={contactUsImage}></img>
              </div>
                  {/* Form-container*/}
              <div className="w-full flex justify-center">
              <div className="space-y-5 me-10">
                  <form className="mt-6">
                      <div className="mb-2">
                          <label>
                              <span className="text-gray-700">Enter Your name</span>
                              <input
                                  type="text"
                                  name="name"
                                  className="

            w-full
             px-16 py-2 mt-2
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
            border
          "
                                  placeholder="Tokito Muichiro"
                              />
                          </label>
                      </div>
                      <div className="mb-2">
                          <label>
                              <span className="text-gray-700">Email address</span>
                              <input
                                  name="email"
                                  type="email"
                                  className="

            w-full
            mt-2 px-16 py-2
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
            border
          "
                                  placeholder="muichiro.tokoito@example.com"
                                  required
                              />
                          </label>
                      </div>
                      <div className="mb-2">
                          <label>
                              <span className="text-gray-700">Message</span>
                              <textarea
                                  name="message"
                                  className="

            w-full
            mt-2 px-16 py-8
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
            border
          "
                                  rows="5"
                              ></textarea>
                          </label>
                      </div>

                      <div className="mb-6">
                          <button
                              type="submit"
                              className="
            h-10
            px-5
            text-indigo-100
            bg-indigo-700
            rounded-full
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-indigo-800
          "
                          >
                              Contact Me
                          </button>
                      </div>
                      <div></div>
                  </form>
              </div>
              </div>
              </div>
          </div>
      </>
    );
}

export default Contact;