import { useState, useEffect } from 'react';

const FixedNavSide = () => {
   const [sidebarCollapsed, setSidebarCollapsed] = useState(window.innerWidth < 640); // Automatically collapse sidebar at sm breakpoint

   const toggleSidebar = () => {
      setSidebarCollapsed(!sidebarCollapsed);
   };

   useEffect(() => {
      const handleResize = () => {
         setSidebarCollapsed(window.innerWidth < 640);
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
      paddingLeft: sidebarCollapsed ? '4rem' : '16.5rem',
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
                  <div className="min-h-[300px] bg-red-300 sm:col-span-4 hidden sm:block gap-3">
                     Main Content
                  </div>
                  <div className="min-h-[300px] bg-green-500 sm:col-span-4">Main Content</div>
                  <div className="min-h-[300px] bg-slate-500 sm:col-span-4 hidden sm:block">Display only Lg</div>
               </div>
               {/* Third Section */}
               <div className="grid sm:grid-cols-12 gap-3 mt-2 text-center">
                  <div className="min-h-[300px] bg-red-300 sm:col-span-4 hidden sm:block gap-3">
                     Main Content
                  </div>
                  <div className="min-h-[300px] bg-green-500 sm:col-span-4">Main Content</div>
                  <div className="min-h-[300px] bg-slate-500 sm:col-span-4 hidden sm:block">Display only Lg</div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default FixedNavSide;
