import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";

const ContactMe = () => {
  // const form = useRef();
  console.log();
  const sendEmail = (e: any) => {
    // e.preventDefault();
    // emailjs
    //   .sendForm(
    //     `${import.meta.env.VITE_email_service_id}`,
    //     `${import.meta.env.VITE_email_template_id}`,
    //     form.current,
    //     `${import.meta.env.VITE_email_public_key}`
    //   )
    //   .then(
    //     (result) => {
    //       if (result.text === "OK") {
    //         e.target.reset();
    //         toast("Your message successfully sent!", {
    //           position: "top-right",
    //           autoClose: 5000,
    //           hideProgressBar: false,
    //           closeOnClick: true,
    //           pauseOnHover: true,
    //           draggable: true,
    //           progress: undefined,
    //           theme: "light",
    //         });
    //       }
    //     },
    //     (error) => {
    //       toast(error.text, {
    //         position: "top-right",
    //         autoClose: 5000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //         theme: "light",
    //       });
    //     }
    //   );
  };
  return (
    <div className="bg-[#1d1e1f] py-10 lg:py-20" id="contact">
      <div className="mx-auto max-w-screen-xl text-white  px-10">
        <h1 className=" text-5xl font-bold text-center text-white mb-5">
          Contact Me
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="mt-5 lg:mt-10">
            <h4 className="text-6xl mt-5 lg:mt-10 text-center lg:text-start">
              Connect With
            </h4>
            <div className="mt-10">
              <div className="border border-1 rounded-xl py-3 px-5">
                <h4 className="lg:text-2xl">Email: touhidcodes@gmail.com</h4>
              </div>
              <div className="border border-1 rounded-xl py-3 px-5 mt-5">
                <h4 className="lg:text-2xl">Phone: +88 01318434934</h4>
              </div>
              <div className="border border-1 rounded-xl py-3 px-5 mt-5">
                <h4 className="lg:text-2xl">
                  LinkedIn: linkedin.com/in/touhidur-zaman/
                </h4>
              </div>
              <div className="border border-1 rounded-xl py-3 px-5 mt-5">
                <h4 className="lg:text-2xl">Github: github.com/touhidcodes</h4>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center lg:block">
            <h4 className="text-6xl mt-5 lg:mt-10">
              Let&apos;s get <br /> in touch.
            </h4>
            <form
              className="chillax card-body p-0 lg:pr-10 mt-10"
              // ref={form}
              // onSubmit={sendEmail}
            >
              <div className="form-control">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input rounded-md text-white bg-[#4c4c54] outline outline-1 outline-gray-500"
                  required
                />
              </div>
              <div className="form-control mt-2">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="input rounded-md text-white bg-[#4c4c54] outline outline-1 outline-gray-500"
                  required
                />
              </div>
              <div className="form-control mt-2">
                <input
                  type="text"
                  name="message"
                  placeholder="Your Message"
                  className="textarea rounded-md textarea-lg w-full text-white bg-[#4c4c54] outline outline-1 outline-gray-500"
                  required
                />
              </div>
              <div className="form-control mt-3">
                <input
                  className="btn text-xl chillax"
                  type="submit"
                  value="SEND MESSAGE"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
