import React from "react";
import Link from "next/link";
import Image from "next/image";
function ContactSection() {
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I'm currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!{" "}
        </p>
        <Link
          href="https://www.linkedin.com/in/gokul-mani/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via via-purple-500 to-pink-500 hover:bg-slate-200 text-white">
            Linkedin
          </button>
        </Link>
        <Link
          href="mailto:Gokul Mani<goku.mani@outlook.com>"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3">
            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
              Mail
            </span>
          </button>
        </Link>
      </div>
    </section>
  );
}

export default ContactSection;
