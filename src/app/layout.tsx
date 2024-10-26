'use client';

import { usePathname } from 'next/navigation';
import * as React from 'react';
import { FaArrowUp, FaPaperclip } from 'react-icons/fa6';

import '@/styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Check if the page is the root page
  const isRootPage = usePathname() === '/';

  return (
    <html>
      <body
        className='bg-gray-950
        text-slate-50'
      >
        <div className='m-5 rounded-xl fixed inset-0 flex flex-col items-center justify-center p-5 bg-gray-800 gap-5'>
          <nav className='fixed z-10 top-10 w-full flex items-center justify-center mt-2'>
            <div className='bg-gray-700 gap-5 flex flex-row justify-between items-center rounded-full p-2 '>
              <a href='/' className='w-full'>
                <div
                  className={
                    (isRootPage ? 'bg-gray-900' : 'bg-slate-600') +
                    ' px-5 py-2 rounded-full w-full flex justify-center'
                  }
                >
                  Chat
                </div>
              </a>
              <a href='/manage' className='w-full'>
                <div
                  className={
                    (!isRootPage ? 'bg-gray-900' : 'bg-slate-600') +
                    ' px-5 py-2 rounded-full w-full flex justify-center'
                  }
                >
                  Manage
                </div>
              </a>
            </div>
          </nav>
          <div className='h-full w-full xl:px-16 md:px-16 lg:px-16 sm:px-5 px-2 no-scrollbar overflow-scroll'>
            {children}
          </div>
          {isRootPage && (
            <div className='fixed bottom-10 w-full xl:px-20 md:px-20 lg:px-20 sm:px-10 px-8'>
              <div className='bg-gray-700 gap-5 rounded-[26px] min-w-full w-full p-2 flex '>
                <div className='flex flex-col-reverse'>
                  <div className='bg-slate-600 p-3 rounded-full flex flex-col-reverse justify-center'>
                    <FaPaperclip className='' />
                  </div>
                </div>
                <div
                  contentEditable={true}
                  className=' flex-grow text-slate-50 outline-none overflow-scroll no-scrollbar'
                  data-placeholder='Type your message :)'
                ></div>
                <div className='flex flex-col-reverse'>
                  <div className='bg-slate-600 p-3 rounded-full flex justify-center'>
                    <FaArrowUp className='' />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </body>
    </html>
  );
}
