import React from 'react'
import { Link, Outlet } from "react-router-dom";

const Vikas = () => {
  return (
    <div className="w-full max-w-4xl mx-auto mt-10 p-8 border-l-4 border-emerald-500 bg-white dark:bg-zinc-900 rounded-r-2xl shadow-lg">
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 text-2xl font-bold">
          V
        </div>
        <div>
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Vikas Profile</h2>
          <p className="text-zinc-500 dark:text-zinc-400">Senior Developer</p>
        </div>
      </div>

      <div className="prose dark:prose-invert max-w-none mb-8">
        <p>Welcome to Vikas's personal profile page. Here you can find out more about his projects and connections.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-zinc-50 dark:bg-zinc-800/80 p-5 rounded-xl border border-zinc-100 dark:border-zinc-700">
          <div className="text-zinc-500 dark:text-zinc-400 text-sm mb-1">Connections</div>
          <ul className="space-y-2">
            <li>
              <Link to="/vikas/akanksha" className="flex items-center text-emerald-600 dark:text-emerald-400 hover:underline">
                <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 font-bold mr-3 text-xs">
                  A
                </div>
                Akanksha Singh
              </Link>
            </li>
          </ul>
        </div>

        <div className="bg-zinc-50 dark:bg-zinc-800/80 p-5 rounded-xl border border-zinc-100 dark:border-zinc-700 md:col-span-2">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Vikas