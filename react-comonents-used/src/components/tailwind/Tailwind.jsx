

const Tailwind = () => {
   return (
      <div className="grid sm:grid-cols-12 gap-3 m-2">
         <div className="min-h-[300px] bg-slate-300 sm:col-span-3 hidden sm:block">Display only Lg</div>
         <div className="min-h-[300px] bg-slate-500 sm:col-span-9">Main Content</div>
      </div>
   )
}

export default Tailwind
