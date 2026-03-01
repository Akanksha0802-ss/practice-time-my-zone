// import React from 'react'

// const About = () => {
//   return (
//     <div>About</div>
//   )
// }

// export default About

//-----------
import React from 'react'
import { Link, Outlet } from "react-router-dom";

const About = () => {
  return (
    <div className="w-full max-w-4xl mx-auto mt-10 p-8 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-xl rounded-2xl shadow-xl border border-zinc-200 dark:border-zinc-800 transition-all hover:shadow-2xl">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">About Us</h2>
        <div className="h-1 w-20 bg-linear-to-r from-pink-500 to-orange-400 rounded-full mb-6"></div>
        <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6">
          We are building amazing things with React Router v7. This page demonstrates nested routing structures.
        </p>
      </div>

      <div className="p-6 bg-zinc-50 dark:bg-zinc-800/80 rounded-xl border border-zinc-100 dark:border-zinc-700">
        <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200 mb-4">Team Members</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <li>
            <Link to="/about/vikas" className="flex items-center p-4 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 hover:border-pink-500 hover:shadow-md transition-all group">
              <div className="w-10 h-10 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center text-pink-600 dark:text-pink-400 font-bold mr-4 group-hover:scale-110 transition-transform">
                V
              </div>
              <div>
                <div className="font-medium text-zinc-900 dark:text-white">Vikas</div>
                <div className="text-sm text-zinc-500 dark:text-zinc-400">View profile →</div>
              </div>
            </Link>
          </li>
        </ul>
      </div>

      <div className="mt-8">
        <Outlet />
      </div>
    </div>
  );
};

export default About