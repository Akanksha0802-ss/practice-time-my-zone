import React from 'react';

const Card = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-zinc-100 dark:bg-zinc-950 p-4 font-sans">
      <div className="max-w-sm w-full bg-white dark:bg-zinc-900 rounded-3xl shadow-xl overflow-hidden transform transition-all hover:-translate-y-2 hover:shadow-2xl border border-zinc-200 dark:border-zinc-800">

        {/* Banner Image */}
        <div className="h-32 bg-linear-to-r from-cyan-500 to-blue-500 w-full object-cover"></div>

        <div className="relative px-6 pb-6 pt-12 text-center">
          {/* Profile Image Avatar */}
          <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
            <div className="w-24 h-24 rounded-full border-4 border-white dark:border-zinc-900 bg-white dark:bg-zinc-800 shadow-md flex items-center justify-center overflow-hidden">
              <svg className="w-12 h-12 text-zinc-400 dark:text-zinc-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
            </div>
          </div>

          {/* User Info */}
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mt-2">Akanksha Developer</h2>
          <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-4">@akankshadev_codes</p>

          <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-6 leading-relaxed">
            Frontend enthusiast building beautiful UIs with React and Tailwind CSS. Always exploring new web technologies.
          </p>

          {/* Stats Bar */}
          <div className="flex justify-between items-center bg-zinc-50 dark:bg-zinc-800/50 rounded-2xl p-4 mb-6 border border-zinc-100 dark:border-zinc-800">
            <div className="text-center">
              <span className="block text-xl font-bold text-zinc-900 dark:text-white">124</span>
              <span className="text-xs text-zinc-500 dark:text-zinc-400 uppercase tracking-wider font-semibold">Posts</span>
            </div>
            <div className="w-px h-10 bg-zinc-200 dark:bg-zinc-700"></div>
            <div className="text-center">
              <span className="block text-xl font-bold text-zinc-900 dark:text-white">4.2k</span>
              <span className="text-xs text-zinc-500 dark:text-zinc-400 uppercase tracking-wider font-semibold">Followers</span>
            </div>
            <div className="w-px h-10 bg-zinc-200 dark:bg-zinc-700"></div>
            <div className="text-center">
              <span className="block text-xl font-bold text-zinc-900 dark:text-white">892</span>
              <span className="text-xs text-zinc-500 dark:text-zinc-400 uppercase tracking-wider font-semibold">Following</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3">
            <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-xl shadow-lg shadow-blue-500/30 transition-colors focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
              Follow
            </button>
            <button className="flex-1 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-900 dark:text-white font-medium py-2.5 px-4 rounded-xl transition-colors border border-zinc-200 dark:border-zinc-700">
              Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;