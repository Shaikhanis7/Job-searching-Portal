// src/components/PrivacyPolicy.js

import React from 'react';

const PrivacyPolicy = () => {
  const pageStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#111',
    color: '#fff',
    borderRadius: '8px',
    animation: 'fadeIn 0.5s ease-in-out',
  };

  const h1Style = {
    marginBottom: '20px',
    color: '#f5f5f5',
  };

  const pStyle = {
    lineHeight: '1.6',
    marginBottom: '10px',
  };

  return (
    <div style={pageStyle}>
      <h1 style={h1Style}>Privacy Policy</h1>
      <p style={pStyle}>
        Your privacy is important to us. It is [Your Company Name]'s policy to respect your privacy regarding any information we may collect from you across our website, [Your Website Name], and other sites we own and operate.
      </p>
      <p style={pStyle}>
        We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.
      </p>
      <p style={pStyle}>
        We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use, or modification.
      </p>
      <p style={pStyle}>
        We don’t share any personally identifying information publicly or with third parties, except when required to by law.
      </p>
      <p style={pStyle}>
        Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.
      </p>
      <p style={pStyle}>
        You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.
      </p>
      <p style={pStyle}>
        Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.
      </p>
      <p style={pStyle}>
        This policy is effective as of [Date].
      </p>
    </div>
  );
};

export default PrivacyPolicy;




// import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
// import React, { useRef } from "react";
// import { FiArrowRight } from "react-icons/fi";

// const PrivacyPolicy = () => {
//   return (
//     <section className="bg-neutral-950 p-4 md:p-8">
//       <div className="mx-auto max-w-5xl">
//         <Link
//           heading="About"
//           subheading="Learn what we do here"
//           imgSrc="/imgs/random/11.jpg"
//           href="#"
//         />
//         <Link
//           heading="Clients"
//           subheading="We work with great people"
//           imgSrc="/imgs/random/6.jpg"
//           href="#"
//         />
//         <Link
//           heading="Portfolio"
//           subheading="Our work speaks for itself"
//           imgSrc="/imgs/random/4.jpg"
//           href="#"
//         />
//         <Link
//           heading="Careers"
//           subheading="We want cool people"
//           imgSrc="/imgs/random/5.jpg"
//           href="#"
//         />
//         <Link
//           heading="Fun"
//           subheading="Incase you're bored"
//           imgSrc="/imgs/random/10.jpg"
//           href="#"
//         />
//       </div>
//     </section>
//   );
// };

// const Link = ({ heading, imgSrc, subheading, href }) => {
//   const ref = useRef(null);

//   const x = useMotionValue(0);
//   const y = useMotionValue(0);

//   const mouseXSpring = useSpring(x);
//   const mouseYSpring = useSpring(y);

//   const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
//   const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

//   const handleMouseMove = (e) => {
//     const rect = ref.current.getBoundingClientRect();

//     const width = rect.width;
//     const height = rect.height;

//     const mouseX = e.clientX - rect.left;
//     const mouseY = e.clientY - rect.top;

//     const xPct = mouseX / width - 0.5;
//     const yPct = mouseY / height - 0.5;

//     x.set(xPct);
//     y.set(yPct);
//   };

//   return (
//     <motion.a
//       href={href}
//       ref={ref}
//       onMouseMove={handleMouseMove}
//       initial="initial"
//       whileHover="whileHover"
//       className="group relative flex items-center justify-between border-b-2 border-neutral-700 py-4 transition-colors duration-500 hover:border-neutral-50 md:py-8"
//     >
//       <div>
//         <motion.span
//           variants={{
//             initial: { x: 0 },
//             whileHover: { x: -16 },
//           }}
//           transition={{
//             type: "spring",
//             staggerChildren: 0.075,
//             delayChildren: 0.25,
//           }}
//           className="relative z-10 block text-4xl font-bold text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50 md:text-6xl"
//         >
//           {heading.split("").map((l, i) => (
//             <motion.span
//               variants={{
//                 initial: { x: 0 },
//                 whileHover: { x: 16 },
//               }}
//               transition={{ type: "spring" }}
//               className="inline-block"
//               key={i}
//             >
//               {l}
//             </motion.span>
//           ))}
//         </motion.span>
//         <span className="relative z-10 mt-2 block text-base text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50">
//           {subheading}
//         </span>
//       </div>

//       <motion.img
//         style={{
//           top,
//           left,
//           translateX: "-50%",
//           translateY: "-50%",
//         }}
//         variants={{
//           initial: { scale: 0, rotate: "-12.5deg" },
//           whileHover: { scale: 1, rotate: "12.5deg" },
//         }}
//         transition={{ type: "spring" }}
//         src={imgSrc}
//         className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
//         alt={`Image representing a link for ${heading}`}
//       />

//       <motion.div
//         variants={{
//           initial: {
//             x: "25%",
//             opacity: 0,
//           },
//           whileHover: {
//             x: "0%",
//             opacity: 1,
//           },
//         }}
//         transition={{ type: "spring" }}
//         className="relative z-10 p-4"
//       >
//         <FiArrowRight className="text-5xl text-neutral-50" />
//       </motion.div>
//     </motion.a>
//   );
// };
// export default PrivacyPolicy;