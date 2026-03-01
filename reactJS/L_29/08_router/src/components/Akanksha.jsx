import React from 'react'

const Akanksha = () => {
  return (
    <div className="relative overflow-hidden bg-linear-to-br from-purple-500 to-indigo-600 rounded-2xl p-6 text-white shadow-xl transform transition-all hover:scale-[1.02]">
      <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full bg-white opacity-10 blur-2xl"></div>
      <div className="absolute bottom-0 left-0 -ml-8 -mb-8 w-24 h-24 rounded-full bg-white opacity-10 blur-xl"></div>

      <div className="relative z-10">
        <div className="flex justify-between items-start mb-4">
          <div className="w-12 h-12 rounded-full bg-purple-900/50 flex items-center justify-center border border-purple-300/30 text-xl font-bold shadow-inner">
            A
          </div>
          <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm border border-white/10">
            Active
          </span>
        </div>

        <h3 className="text-2xl font-bold mb-1">Akanksha Singh</h3>
        <p className="text-purple-100/80 text-sm mb-4">Frontend Developer</p>

        <div className="flex space-x-3 mt-6">
          <div className="text-center bg-purple-900/30 rounded-lg p-2 flex-1 backdrop-blur-sm border border-white/10">
            <div className="text-xl font-bold">128</div>
            <div className="text-xs text-purple-200">Projects</div>
          </div>
          <div className="text-center bg-purple-900/30 rounded-lg p-2 flex-1 backdrop-blur-sm border border-white/10">
            <div className="text-xl font-bold">1.2k</div>
            <div className="text-xs text-purple-200">Followers</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Akanksha