import React from 'react'

const Contact = () => {
  return (
    <div className="w-full max-w-2xl mx-auto mt-10">
      <div className="bg-white dark:bg-zinc-900 overflow-hidden shadow-xl rounded-2xl border border-zinc-200 dark:border-zinc-800">
        <div className="px-6 py-8 sm:p-10 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/50">
          <h3 className="text-2xl leading-6 font-semibold text-zinc-900 dark:text-white">
            Get in touch
          </h3>
          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
            Fill out the form below and we'll reply as soon as possible.
          </p>
        </div>

        <form className="px-6 py-8 sm:p-10 space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="first_name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">First name</label>
              <input type="text" id="first_name" className="mt-1 block w-full rounded-md border-zinc-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-3 bg-zinc-50 dark:bg-zinc-800 dark:border-zinc-700 dark:text-white" placeholder="John" />
            </div>
            <div>
              <label htmlFor="last_name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Last name</label>
              <input type="text" id="last_name" className="mt-1 block w-full rounded-md border-zinc-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-3 bg-zinc-50 dark:bg-zinc-800 dark:border-zinc-700 dark:text-white" placeholder="Doe" />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Email</label>
            <input type="email" id="email" className="mt-1 block w-full rounded-md border-zinc-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-3 bg-zinc-50 dark:bg-zinc-800 dark:border-zinc-700 dark:text-white" placeholder="you@example.com" />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Message</label>
            <textarea id="message" rows="4" className="mt-1 block w-full rounded-md border-zinc-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-3 bg-zinc-50 dark:bg-zinc-800 dark:border-zinc-700 dark:text-white" placeholder="How can we help?"></textarea>
          </div>

          <button type="button" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors">
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact