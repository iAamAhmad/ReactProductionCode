

const FixedNavSide = () => {
   return (
      <div>
         <div className="grid sm:grid-cols-12 m-2 gap-3 text-center">
            <div className="min-h-[700px] bg-green-500 sm:col-span-2">
               Side Bar
            </div>
            <div className="min-h-[700px] bg-gray-300 sm:col-span-10">
               {/* Inner Content */}
               <div className="grid sm:grid-cols-1 gap-3 text-center">
                  <div className="bg-green-700 min-h-[50px]">Whole Content</div>
               </div>
               {/* Third Section */}
               <div className="grid sm:grid-cols-12 gap-3 my-2 text-center">
                  <div className="min-h-[300px] bg-red-300 sm:col-span-4 hidden sm:block gap-3">
                     Main Content
                  </div>
                  <div className="min-h-[300px] bg-green-500 sm:col-span-4">Main Content</div>
                  <div className="min-h-[300px] bg-slate-500 sm:col-span-4 hidden sm:block">Display only Lg</div>

               </div>
               {/* Third Section */}
               <div className="grid sm:grid-cols-12 gap-3  text-center">
                  <div className="min-h-[300px] bg-red-300 sm:col-span-4 hidden sm:block gap-3">
                     Main Content
                  </div>
                  <div className="min-h-[300px] bg-green-500 sm:col-span-4">Main Content</div>
                  <div className="min-h-[300px] bg-slate-500 sm:col-span-4 hidden sm:block">Display only Lg</div>

               </div>
            </div>
         </div>
      </div>
   )
}

export default FixedNavSide
