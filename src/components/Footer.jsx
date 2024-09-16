import React from "react";

const encodeEmail = (email) => {
  return email
    .split("")
    .map((char) => `&#${char.charCodeAt(0)};`)
    .join("");
};

const Footer = () => {
  const email = encodeEmail("amruthadharahosad@gmail.com"); // Encode the email
  const emailAddress = "amruthadharahosad@gmail.com"; // Original email for the link
  return (
    <footer className="bg-primaryDark text-white pt-8 pb-2 text-center">
      <a
        className="underline py-8"
        href={`mailto:${emailAddress}`}
        dangerouslySetInnerHTML={{ __html: email }}
      />
      <p className="text-xs">
        © {new Date().getFullYear()} Dharma Chakra 111®. All rights reserved.
      </p>
      <p className="mt-2 text-xs italic opacity-60">
        Developed & Maintained by{" "}
        <a
          className="underline"
          href="https://www.perspectiv.in/"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.persepctiv.in
        </a>
      </p>
    </footer>
  );
};

export default Footer;
