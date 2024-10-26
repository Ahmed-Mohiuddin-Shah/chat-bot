'use client';

import * as React from 'react';
import { FaArrowLeft, FaArrowRight, FaArrowRightFromBracket, FaChevronLeft, FaChevronRight, FaEye, FaFile, FaRightLong, FaTrash } from 'react-icons/fa6';
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

const PDFs = [
  'PDF 1',
  'PDF 2',
  'PDF 3',
  'PDF 4',
  'PDF 5',
  'PDF 6',
  'PDF 7',
  'PDF 8',
  'PDF 9',
  'PDF 10',
  'PDF 11',
  'PDF 12',
  'PDF 13',
  'PDF 14',
  'PDF 15',
];

export default function HomePage() {
  return (
    <>
      <div className=' flex flex-col gap-2 h-full pt-20'>
        <div className='p-2 text-5xl'>Manage PDFs</div>
        <div className='p-2 w-full flex justify-end'>
          <button
            title='Submit PDF'
            onClick={() => {
              console.log('Hello');
            }}
            className='
          bg-green-600 p-2 rounded-md
          '
          >
            <div className='flex flex-nowrap gap-2'>
              <div>Add PDF</div>
              <div>
                <FaFile />
              </div>
            </div>
          </button>
        </div>
        <div className='w-full p-2'>
          <div className='p-2 w-full border rounded-t-md rounded-b-none'>
            {/* Pagination */}
            <div className='flex flex-row justify-center gap-2'>
              <button
                title='Previous Page'
                onClick={() => {
                  console.log('Previous Page');
                }}
                className=''
              >
                <FaChevronLeft />
              </button>

              <div>
                {/* Page 1 of 5 */}
                <div>Page 1 of 5</div>
              </div>


              <button
                title='Next Page'
                onClick={() => {
                  console.log('Next Page');
                }}
                className=''
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
          <div className='table w-full overflow-x-auto border'>
            <div className='table-header-group'>
              <div className='table-row'>
                <div className='table-cell border overflow-hidden p-3'>PDFs</div>
                <div className='table-cell border p-3 w-24'>Actions</div>
              </div>
            </div>
            <div className='table-row-group'>
              {PDFs.map((pdf, index) => (
                <div key={index} className='table-row'>
                  <div className='table-cell p-2 border'>{pdf}</div>
                  <div className='table-cell p-2 border'>
                    <div className='flex gap-2'>
                      <button
                        title='View PDF'
                        onClick={() => {
                          console.log('View PDF');
                        }}
                        className='bg-blue-600 p-2 rounded-md'
                      >
                        <FaEye />
                      </button>
                      <button
                        title='Delete PDF'
                        onClick={() => {
                          console.log('Delete PDF');
                        }}
                        className='bg-red-600 p-2 rounded-md'
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
