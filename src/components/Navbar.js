// import React, { useRef } from "react"
// //import { btnHome, btnProjects, btnContact } from "./Carousel"

// // export const handleBtnHome = () => {
// //   btnHome.current.click()
// // }

// // export const handleBtnProjects = () => {
// //   btnProjects.current.click()
// // }

// // export const handleBtnContact = () => {
// //   btnContact.current.click()
// // }
// export default function Navbar({ home, projects, contact }) {
//   // const home = useRef(null)
//   // const projects = useRef(null)
//   // const contact = useRef(null)

//   const menu = useRef(null)
//   const handleBtnMenu = () => {
//     menu.current.classList.toggle("hide")
//   }

//   const buttons = (
//     <>
//       <div className="btn-container pixelated">
//         <button className="btn">HOME</button>
//       </div>
//       <div className="btn-container pixelated">
//         <button className="btn">PROJECTS</button>
//       </div>
//       <div className="btn-container pixelated">
//         <button className="btn">CONTACT</button>
//       </div>
//     </>
//   )
//   return (
//     <div>
//       {/* <nav className="nav">
//         <div className="buttons">{buttons}</div>
//         <div className="menu-container">
//           <div className="btn-container pixelated">
//             <button className="btn" onClick={handleBtnMenu}>
//               MENU
//             </button>
//           </div>
//           <div ref={menu} className="menu hide">
//             {buttons}
//           </div>
//         </div>
//       </nav> */}
//     </div>
//   )
// }
