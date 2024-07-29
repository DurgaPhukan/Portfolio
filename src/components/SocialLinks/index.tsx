import React from "react";

const SocialLinks = () => {
  return (
    <div>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: 15,
          listStyle: "none",
        }}
      >
        <li>LinkedIN</li>
        <li>GitHub</li>
        <li>Insta</li>
        <li>
          <address>
            Written by <a href="mailto:webmaster@example.com">Jon Doe</a>
            {/* <br />
            Visit us at:
            <br />
            Example.com
            <br />
            Box 564, Disneyland
            <br /> */}
            {/* USA */}
          </address>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
