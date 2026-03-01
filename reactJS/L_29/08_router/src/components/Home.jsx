import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <div className="inline-flex items-center justify-center p-2 mb-8 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 font-semibold text-sm">
        <span className="px-3 py-1 bg-white dark:bg-zinc-800 rounded-full shadow-sm mr-3">New</span>
        React Router Example is live
      </div>
      <h1 className="mb-6 text-4xl font-extrabold tracking-tight leading-none text-zinc-900 md:text-5xl lg:text-6xl dark:text-white">
        Welcome to your <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">MyZone Space</span>
      </h1>
      <p className="mb-8 text-lg font-normal text-zinc-500 lg:text-xl sm:px-16 xl:px-48 dark:text-zinc-400">
        This is the home page. Navigate through the site to explore nested routes and unique layouts.
      </p>
      <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
        <Link to="/about" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-900 shadow-lg shadow-indigo-500/30 transition-all hover:-translate-y-1">
          Learn more
          <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
          </svg>
        </Link>
      </div>
    </div>
  )
}

export default Home