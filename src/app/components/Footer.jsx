import React from "react";
import Image from "next/image";
function Footer() {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span>
          {" "}
          <Image src="/images/logo2.png" width={50} height={50} />
        </span>
        <p className="text-slate-600 lg:mr-2">
          ©Gokul Mani. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
