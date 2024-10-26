'use client';

import * as React from 'react';
import { FaCircleDot, FaRobot } from 'react-icons/fa6';
import '@/lib/env';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <>
      <div className='flex flex-col-reverse gap-2 h-full pb-20'>
        {/* Loading Response */}
        <div className='flex w-full justify-start'>
          <div className='p-2 text-wrap justify-self-end rounded-3xl'>
            <p>
              <FaCircleDot className='animate-pulse' />
            </p>
          </div>
        </div>

        <div className='p-2 gap-2 flex w-full justify-start'>
          <div>
            <FaRobot />
          </div>
          <div className='p-2 text-wrap break-words justify-self-end rounded-lg max-w-md'>
            <p>
              Chatbot goes
              here...blahblahbllaksaejhfuewifulwehiewnrivbyrwyibtiueyiytuietbertiueytieyytuieteuiytuieytuibetbeyutoerytbiqevprtvoeqyw
            </p>
          </div>
        </div>
        <div className='p-2 flex w-full justify-end'>
          <div className='p-2 bg-slate-700 text-wrap break-words justify-self-end rounded-lg max-w-md'>
            <p>
              User question goes here...
              khnewvbyitucoivuebhtoqercuiijvrbqwebkcrjvoucfhkbvrhkrhcjlrhnblrbhgubrvkecbevtlrvyiowriwucngbvuiucwuhbvowiegcnuiucnubrvce
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
