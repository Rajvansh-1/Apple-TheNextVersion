import React from "react";

import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="p-5 sm:px-10">
      <div className="screen-max-width">
        <div className="">
          <p className="text-gray text-xs font-semibold">
            More ways to shop:{" "}
            <span className="text-blue cursor-pointer hover:underline">
              Find an Apple Store
            </span>{" "}
            or{" "}
            <span className="text-blue cursor-pointer hover:underline">
              other retailer
            </span>{" "}
            near you.
          </p>
          <p className="text-gray text-xs font-semibold">
            Or call{" "}
            <span className="text-blue cursor-pointer hover:underline">
              (800) 555-0100
            </span>
            .
          </p>
        </div>

        <div className="my-5 h-px w-full bg-neutral-700" aria-hidden />

        <div className="flex flex-col justify-between md:flex-row md:items-center">
          

          <div className="flex items-center">
            {footerLinks.map((link, i) => (
              <p key={link} className="text-gray text-xs font-semibold">
                <span className="mx-2 cursor-pointer hover:underline">
                  {link}
                </span>
                {i !== footerLinks.length - 1 && "|"}
              </p>
            ))}

            <div className="flex items-center ml-4">
              <span className="text-gray text-xs font-semibold mr-2">
                Designed &amp; Developed by Rajvansh
              </span>

              <a
                href="https://github.com/rajvansh"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Rajvansh on GitHub"
                className="text-gray hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M12 .297a12 12 0 00-3.797 23.412c.6.111.82-.261.82-.58 0-.287-.011-1.045-.017-2.051-3.338.726-4.042-1.61-4.042-1.61-.546-1.389-1.333-1.76-1.333-1.76-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.238 1.84 1.238 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.304.76-1.604-2.665-.304-5.467-1.333-5.467-5.93 0-1.31.468-2.381 1.235-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 016.006 0c2.292-1.552 3.297-1.23 3.297-1.23.654 1.653.243 2.873.12 3.176.77.839 1.233 1.91 1.233 3.22 0 4.61-2.806 5.624-5.48 5.92.43.372.814 1.102.814 2.222 0 1.604-.015 2.897-.015 3.293 0 .321.218.697.825.579A12 12 0 0012 .297z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
