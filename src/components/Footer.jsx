const Footer = () => {
    return (
        
      <footer className="bg-gray-800 text-white py-6">
        
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between ">
            
            <div className="text-center md:text-left">
  
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-green-500 mb-6">
              MyAniBase</h1>
              <p>© {new Date().getFullYear()} All rights reserved.</p>
            </div>
            
            <div className="flex space-x-24 mt-4 md:mt-0">
            <div className="space-y-3">
            <div className="">
              <a href="https://github.com/sanyam-saurabh/" className="font-semibold text-white hover:text-blue-500">GitHub</a>
            </div>
            <div className="">
              <a href="https://www.linkedin.com/in/sanyam-saurabh/" className="font-semibold text-white hover:text-blue-500">LinkedIn</a>
            </div>
            
  
            </div>
  
            <div className="space-y-3">
            <div className="">
              <a href="https://sanyam-saurabh.github.io/Portfolio/" className=" font-semibold text-white hover:text-blue-500">PortFolio</a>
            </div>
            <div className="flex items-center space-x-4">
              <a href="mailto:saurabhemc2@gmail.com" className="font-semibold text-white hover:text-blue-500">saurabhemc2@gmail.com</a>
            </div>
  
            
            </div>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  

export default Footer;