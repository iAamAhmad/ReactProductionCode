

const FShapedLayout = () => {
  return (
    <div>
      {/* First Section */}
      <div className="grid sm:grid-cols-1 m-2 gap-3 text-center">
        <div className="bg-black min-h-[100px]">Whole Content</div>
      </div>
      {/* Second Section */}
      <div className="grid sm:grid-cols-12 gap-3 m-2 text-center">
        <div className="min-h-[300px] bg-red-300 sm:col-span-3 hidden sm:block">Display only Lg</div>
        <div className="min-h-[300px] bg-green-500 sm:col-span-6">Main Content</div>
        <div className="min-h-[300px] bg-slate-500 sm:col-span-3 hidden sm:block">Display only Lg</div>

      </div>
      {/* Third Section */}
      <div className="grid sm:grid-cols-12 gap-3 m-2 text-center">
        <div className="min-h-[300px] bg-red-300 sm:col-span-3 hidden sm:block">Display only Lg</div>
        <div className="min-h-[300px] bg-green-500 sm:col-span-6">Main Content</div>
        <div className="min-h-[300px] bg-slate-500 sm:col-span-3 hidden sm:block">Display only Lg</div>

      </div>
    </div>
  )
}

export default FShapedLayout
