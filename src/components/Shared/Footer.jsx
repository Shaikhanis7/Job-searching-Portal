import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="absolute bottom-0 left-0 w-full h-[8vh] flex flex-row justify-center items-center border-t-4 border-primary/white bg-black">
      <div className="w-1/4 h-full text-white font-bold flex justify-start items-center text-lg"> © canada.com</div>
      <div className='w-2/4 h-full font-bold flex flex-row justify-end items-center gap-8 '>
        <a href='https://www.facebook.com/' target='_blank' className='h-8 w-8 rounded-md text-white hover:bg-secondary/50 hover:text-background flex justify-center items-center'>
          <Facebook className='h-7 w-7' />
        </a>
        <a href='https://x.com/?lang=en-in' target='_blank' className='h-8 w-8 rounded-md text-white hover:bg-primary/50 hover:text-background flex justify-center items-center'>
          <Twitter className='h-7 w-7' />
          </a>
          <a href="https://www.linkedin.com/in/thilagavathi-k-308435255/" target='_blank' className='h-8 w-8 rounded-md text-white hover:bg-primary/50 hover:text-background flex justify-center items-center'>
          <Linkedin className='h-7 w-7 '/>
          </a>
          <a href="https://www.instagram.com/" target='_blank' className='h-8 w-8 rounded-md text-white hover:bg-primary/50 hover:text-background flex justify-center items-center'>
          <Instagram className='h-7 w-7 '/>
          </a>
          <a href="https://web.whatsapp.com/" target='_blank' className='h-8 w-8 rounded-md text-white hover:bg-primary/50 hover:text-background flex justify-center items-center'>
          <FaWhatsapp className='h-7 w-7 '/>
          </a>
        
      </div>
    </div>
  )
}

export default Footer

// import React from 'react';
// import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
// import { FaWhatsapp } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

// const Footer = () => {
//   return (
//     <footer className="bg-black text-white py-8 px-4">
//       <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-8 lg:space-y-0">
//         {/* About Us Section */}
//         <div className="w-full lg:w-1/4">
//           <h3 className="font-bold text-lg mb-4">ABOUT US</h3>
//           <p className="text-sm text-gray-400">Heaven fruitful doesn't cover lesser days. Appear creeping seasons so behold.</p>
//         </div>

//         {/* Contact Info Section */}
//         <div className="w-full lg:w-1/4">
//           <h3 className="font-bold text-lg mb-4">CONTACT INFO</h3>
//           <p className="text-sm text-gray-400">Address: Your address goes here, your demo address.</p>
//           <p className="text-sm text-gray-400">Phone: +8880 44338899</p>
//           <p className="text-sm text-gray-400">Email: info@colorlib.com</p>
//         </div>

//         {/* Important Links Section */}
//         <div className="w-full lg:w-1/4">
//           <h3 className="font-bold text-lg mb-4">IMPORTANT LINKS</h3>
//           <ul className="space-y-2">
//             <li><a href="#" className="text-sm text-gray-400 hover:text-primary">View Project</a></li>
//             <li><a href="#" className="text-sm text-gray-400 hover:text-primary">Contact Us</a></li>
//             <li><a href="#" className="text-sm text-gray-400 hover:text-primary">Testimonial</a></li>
//             <li><a href="#" className="text-sm text-gray-400 hover:text-primary">Properties</a></li>
//             <li><a href="#" className="text-sm text-gray-400 hover:text-primary">Support</a></li>
//           </ul>
//         </div>

//         {/* Newsletter Section */}
//         <div className="w-full lg:w-1/4">
//           <h3 className="font-bold text-lg mb-4">NEWSLETTER</h3>
//           <p className="text-sm text-gray-400 mb-4">Heaven fruitful doesn't over lesser in days. Appear creeping.</p>
//           <form className="flex">
//             <input type="email" className="p-2 w-full rounded-l-md bg-gray-800 text-white focus:outline-none" placeholder="Email Address" />
//             <button type="submit" className="p-2 bg-primary rounded-r-md">
//               <span className="text-white">Send</span>
//             </button>
//           </form>
//         </div>
//       </div>

//       {/* Social Media Icons Section */}
//       <div className="flex justify-center mt-8 space-x-4">
//         <a href="#" target="_blank" className="h-8 w-8 rounded-md text-white hover:bg-secondary/50 hover:text-background flex justify-center items-center">
//           <Facebook className="h-7 w-7" />
//         </a>
//         <a href="#" target="_blank" className="h-8 w-8 rounded-md text-white hover:bg-primary/50 hover:text-background flex justify-center items-center">
//           <Twitter className="h-7 w-7" />
//         </a>
//         <a href="#" target="_blank" className="h-8 w-8 rounded-md text-white hover:bg-primary/50 hover:text-background flex justify-center items-center">
//           <Linkedin className="h-7 w-7" />
//         </a>
//         <a href="#" target="_blank" className="h-8 w-8 rounded-md text-white hover:bg-primary/50 hover:text-background flex justify-center items-center">
//           <Instagram className="h-7 w-7" />
//         </a>
//         <a href="#" target="_blank" className="h-8 w-8 rounded-md text-white hover:bg-primary/50 hover:text-background flex justify-center items-center">
//           <FaWhatsapp className="h-7 w-7" />
//         </a>
//       </div>
//     </footer>
//   );
// }

// export default Footer;
