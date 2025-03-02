import ScrollLink from "@/components/ScrollLink";

const Navbar = () => {
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[80%] sm:w-[30rem] h-[1.7rem] sm:h-[2.6rem] rounded-[16px] border border-slate-950 bg-slate-900 border-opacity-40 bt-white z-50">
      <div className="container mx-auto flex justify-center items-center h-full">
        <ul className="flex text-gray-400 gap-5 sm:gap-[25px] text-[13px] sm:text-[18px]">
          <li className="flex"> <ScrollLink to="home" className="hover:text-white">Home</ScrollLink> </li>
          <li className="flex"> <ScrollLink to="about" className="hover:text-white">About</ScrollLink> </li>
          <li className="flex"> <ScrollLink to="articles" className="hover:text-white">Articles</ScrollLink> </li>
          <li className="flex"> <ScrollLink to="projects" className="hover:text-white ">Projects</ScrollLink> </li>
          <li className="flex"> <ScrollLink to="skills" className="hover:text-white ">Skills</ScrollLink> </li>
          <li className="flex"> <ScrollLink to="contact" className="hover:text-white">Contact</ScrollLink> </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
