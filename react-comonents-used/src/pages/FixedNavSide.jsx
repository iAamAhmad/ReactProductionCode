import { useState, useEffect } from 'react';

const FixedNavSide = () => {
   const [sidebarCollapsed, setSidebarCollapsed] = useState(window.innerWidth < 1024); // Automatically collapse sidebar at md breakpoint

   const toggleSidebar = () => {
      setSidebarCollapsed(!sidebarCollapsed);
   };

   useEffect(() => {
      const handleResize = () => {
         setSidebarCollapsed(window.innerWidth < 1024);
      };

      window.addEventListener('resize', handleResize);

      return () => {
         window.removeEventListener('resize', handleResize);
      };
   }, []);

   const sidebarStyle = {
      width: sidebarCollapsed ? '4rem' : '16rem',
      position: 'fixed', // Set sidebar position to fixed
      height: '100%',
      overflow: 'auto',
   };

   const contentStyle = {
      paddingTop: '4rem',
      paddingLeft: sidebarCollapsed ? '4.3rem' : '16.3rem',
      paddingRight: '0.5rem',
   };

   return (
      <div>
         <div className="flex">
            <div className={`min-h-screen bg-green-500`} style={sidebarStyle}>
               {/* Sidebar Content */}
               <div className="flex flex-col h-full">
                  <div className="bg-green-500 h-16">Sidebar Header</div>
                  <div className="flex-grow bg-green-500">
                     {/* Sidebar Buttons */}
                     <button className="my-2">Button 1</button>
                     <button className="my-2">Button 2</button>
                     {/* Add more buttons here */}
                  </div>
               </div>
            </div>
            <div className="min-h-screen flex-grow bg-gray-300" style={contentStyle}>
               {/* Inner Content */}
               <div className="bg-green-700 h-16 flex items-center justify-center fixed w-full top-0">
                  {/* Button to toggle sidebar */}
                  <button onClick={toggleSidebar}>Toggle Sidebar</button>
               </div>
               {/* Third Section */}
               <div className="grid sm:grid-cols-12 gap-3 mt-2 text-center">
                  <div className="min-h-[200px] bg-red-300 sm:col-span-3  gap-3">
                     Main Content
                  </div>
                  <div className="min-h-[200px] bg-green-500 sm:col-span-3">Main Content</div>
                  <div className="min-h-[200px] bg-slate-500 sm:col-span-3 ">Display only Lg</div>
                  <div className="min-h-[200px] bg-slate-500 sm:col-span-3 ">Display only Lg</div>
               </div>
               {/* Third Section */}
               <div className="grid sm:grid-cols-12 gap-3 mt-2 text-center">
                  <div className="min-h-[500px] bg-red-300 sm:col-span-8 k gap-3">
                     Main Content
                  </div>
                  <div className="min-h-[500px] bg-green-500 sm:col-span-4">Main Content</div>
                  
               </div>
               <div className="grid sm:grid-cols-12 gap-3 my-2 text-center">
                  <div className="min-h-[250px] bg-red-300 sm:col-span-4 k gap-3">
                     Main Content
                  </div>
                  <div className="min-h-[250px] bg-green-500 sm:col-span-4">Main Content</div>
                  <div className="min-h-[250px] bg-green-900 sm:col-span-4">Main Content</div>
                  
               </div>
            </div>
         </div>
      </div>
   );
}

export default FixedNavSide;
