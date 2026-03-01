// import React from 'react'

// const Skeleton = () => {
//   return (
//     <div>Please wait we are loading the component</div>
//   )
// }

// export default Skeleton

import React from 'react';

const Skeleton = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-zinc-100 dark:bg-zinc-950 p-4 font-sans">
      <div className="max-w-sm w-full bg-white dark:bg-zinc-900 rounded-3xl shadow-xl overflow-hidden border border-zinc-200 dark:border-zinc-800">

        {/* Skeleton Banner */}
        <div className="h-32 bg-zinc-200 dark:bg-zinc-800 w-full animate-pulse"></div>

        <div className="relative px-6 pb-6 pt-12 text-center">
          {/* Skeleton Avatar */}
          <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
            <div className="w-24 h-24 rounded-full border-4 border-white dark:border-zinc-900 bg-zinc-200 dark:bg-zinc-800 shadow-md animate-pulse"></div>
          </div>

          {/* Skeleton User Info */}
          <div className="h-8 bg-zinc-200 dark:bg-zinc-800 rounded-lg w-48 mx-auto mt-2 animate-pulse"></div>
          <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded w-32 mx-auto mt-3 mb-4 animate-pulse"></div>

          <div className="space-y-2 mb-6">
            <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded w-full mx-auto animate-pulse"></div>
            <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded w-5/6 mx-auto animate-pulse"></div>
            <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded w-3/4 mx-auto animate-pulse"></div>
          </div>

          {/* Skeleton Stats Bar */}
          <div className="flex justify-between items-center bg-zinc-50 dark:bg-zinc-800/50 rounded-2xl p-4 mb-6 border border-zinc-100 dark:border-zinc-800">
            <div className="h-10 bg-zinc-200 dark:bg-zinc-700 rounded w-16 animate-pulse"></div>
            <div className="w-px h-10 bg-zinc-200 dark:bg-zinc-700"></div>
            <div className="h-10 bg-zinc-200 dark:bg-zinc-700 rounded w-16 animate-pulse"></div>
            <div className="w-px h-10 bg-zinc-200 dark:bg-zinc-700"></div>
            <div className="h-10 bg-zinc-200 dark:bg-zinc-700 rounded w-16 animate-pulse"></div>
          </div>

          {/* Skeleton Action Buttons */}
          <div className="flex space-x-3">
            <div className="flex-1 h-11 bg-zinc-200 dark:bg-zinc-800 rounded-xl animate-pulse"></div>
            <div className="flex-1 h-11 bg-zinc-200 dark:bg-zinc-800 rounded-xl animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
