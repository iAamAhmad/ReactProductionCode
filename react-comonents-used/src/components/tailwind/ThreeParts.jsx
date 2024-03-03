

const ThreeParts = () => {
   return (
      <div className="grid sm:grid-cols-12 gap-3 m-2 text-center">
         <div className="min-h-[300px] bg-red-300 sm:col-span-2 hidden sm:block">Display only Lg</div>
         <div className="min-h-[300px] bg-green-500 sm:col-span-8">Main Content</div>
         <div className="min-h-[300px] bg-slate-500 sm:col-span-2 hidden sm:block">Display only Lg</div>

      </div>
   )
}

export default ThreeParts
