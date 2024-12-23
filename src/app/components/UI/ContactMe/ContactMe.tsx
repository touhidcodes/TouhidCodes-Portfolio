import Image from "next/image";
import Link from "next/link";
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
      <div className="mx-auto max-w-screen-xl text-white  px-5 md:px-10">
        <h1 className=" text-5xl font-bold text-center text-white mb-5">
          Contact Me
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Column - Contact Information */}
          <div className="mt-5 lg:mt-10 h-full">
            <h4 className="text-6xl text-center lg:text-start">Connect With</h4>
            <div className="mt-10">
              {/* contact email */}
              <div className="flex flex-row items-center">
                <Link
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=touhidcodes@gmail.com"
                  target="_blank"
                >
                  <div className="rounded-xl py-2 px-3 md:py-4 md:px-5 glass bg-gray-300 w-16 md:w-20">
                    <Image
                      src={"/assets/icons/email.png"}
                      width={50}
                      height={50}
                      alt="email"
                      className=""
                    />
                  </div>
                </Link>
                <div className="flex flex-col justify-center ml-3 md:ml-5">
                  <div className="md:text-2xl">Email:</div>
                  <div className="md:text-2xl">touhidcodes@gmail.com</div>
                </div>
              </div>
              {/* contact phone */}
              <div className="flex flex-row items-center mt-5">
                <Link href="tel:+8801318434934" target="_blank">
                  <div className="rounded-xl py-2 px-3 md:py-4 md:px-5 glass bg-gray-300 w-16 md:w-20">
                    <Image
                      src={"/assets/icons/phone.png"}
                      width={50}
                      height={50}
                      alt="phone"
                    />
                  </div>
                </Link>
                <div className="flex flex-col justify-center ml-3 md:ml-5">
                  <div className="md:text-2xl">Phone:</div>
                  <div className="md:text-2xl">+8801318434934</div>
                </div>
              </div>
              {/* contact linkedin */}
              <div className="flex flex-row items-center mt-5">
                <Link
                  href="https://www.linkedin.com/in/touhidur-zaman"
                  target="_blank"
                >
                  <div className="rounded-xl py-2 px-3 md:py-4 md:px-5 glass bg-gray-300 w-16 md:w-20">
                    <Image
                      src={"/assets/icons/linkedin.png"}
                      width={50}
                      height={50}
                      alt="email"
                      className=""
                    />
                  </div>
                </Link>
                <div className="flex flex-col justify-center ml-3 md:ml-5">
                  <div className="md:text-2xl">LinkedIn:</div>
                  <div className="md:text-2xl">touhidur-zaman</div>
                </div>
              </div>
              {/* contact github */}
              <div className="flex flex-row items-center mt-5">
                <Link href="https://github.com/touhidcodes" target="_blank">
                  <div className="rounded-xl py-2 px-3 md:py-4 md:px-5 glass bg-gray-300 w-16 md:w-20">
                    <Image
                      src={"/assets/icons/github.png"}
                      width={50}
                      height={50}
                      alt="email"
                      className=""
                    />
                  </div>
                </Link>
                <div className="flex flex-col justify-center ml-3 md:ml-5">
                  <div className="md:text-2xl">GitHub:</div>
                  <div className="md:text-2xl">touhidcodes</div>
                </div>
              </div>
            </div>
          </div>
          {/* Right Column - Contact Form */}
          <div className="flex flex-col items-center justify-between lg:block h-full">
            <h4 className="text-6xl mt-5 lg:mt-10">Let&apos;s get in touch.</h4>
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
                  className="textarea w-full rounded-md textarea-lg text-white bg-[#4c4c54] outline outline-1 outline-gray-500 items-stretch h-32"
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
