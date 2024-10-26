'use client';

import * as React from 'react';
import { useState } from 'react';
import {
  FaChevronLeft,
  FaChevronRight,
  FaEye,
  FaFile,
  FaSpinner,
  FaTrash,
} from 'react-icons/fa6';
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

const AddDocumentModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [isUploading, setIsUploading] = useState<boolean>(false);

  const upload = async () => {
    // get the file from the input
    const pdfInput = document.getElementById('pdf') as HTMLInputElement;
    const pdf = pdfInput.files?.[0];

    if (pdf) {
      setIsUploading(true);
      const formData = new FormData();
      formData.append('pdf', pdf);
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/manage/add-doc`,
          {
            method: 'POST',
            body: formData,
          },
        );
        if (response.ok) {
          console.log('PDF Uploaded Successfully');
          onClose();
        }
      } catch (error) {
        console.error('Error Uploading PDF', error);
      } finally {
        setIsUploading(false);
      }
    }
  };

  return (
    <div className='fixed z-20 top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center'>
      <div className='bg-gray-600 p-4 rounded-md'>
        <div className='flex flex-col gap-4'>
          <div className='text-2xl'>Add PDF</div>
          <div className='flex flex-col gap-2'>
            <input
              id='pdf'
              title='Select PDF'
              type='file'
              accept='.pdf'
              className='border p-2 rounded-md'
            />
            <button
              title='Upload PDF'
              onClick={() => {
                upload();
              }}
              className='bg-green-600 p-2 rounded-md'
            >
              {isUploading ? <FaSpinner className='animate-spin' /> : 'Upload'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const getPDFs = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/manage/get-docs`,
    );
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.error('Error Fetching PDFs', error);
  }
  return [];
};

export default function HomePage() {
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [PDFs, setPDFs] = useState<
    {
      id: string;
      title: string;
    }[]
  >([]);

  const fetchPDFs = async () => {
    const data = await getPDFs();
    setPDFs(data.data);
  };

  const updatePDFs = () => {
    fetchPDFs();
  };

  React.useEffect(() => {
    fetchPDFs();
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <FaSpinner className='animate-spin text-5xl' />
      </div>
    );
  }

  return (
    <>
      <div className=' flex flex-col gap-2 h-full pt-20'>
        {showModal ? (
          <AddDocumentModal
            onClose={() => {
              setShowModal(false);
              updatePDFs();
            }}
          />
        ) : null}

        <div className='p-2 text-5xl'>Manage PDFs</div>
        <div className='p-2 w-full flex justify-end'>
          <button
            title='Add PDF'
            onClick={() => {
              showModal ? setShowModal(false) : setShowModal(true);
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

        {PDFs.length > 0 ? (
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
                  <div className='table-cell border overflow-hidden p-3'>
                    PDFs
                  </div>
                  <div className='table-cell border p-3 w-24'>Actions</div>
                </div>
              </div>
              <div className='table-row-group'>
                {PDFs.map((pdf, index) => (
                  <div key={index} className='table-row'>
                    <div className='table-cell p-2 border'>{pdf.title}</div>
                    <div className='table-cell p-2 border'>
                      <div className='flex gap-2 justify-center w-full h-full'>
                        <a
                          href={`${process.env.NEXT_PUBLIC_API_URL}/manage/get-doc/${pdf.id}`}
                        >
                          <FaEye />
                        </a>
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
        ) : (
          <div className='p-2'>No PDFs Found :(</div>
        )}
      </div>
    </>
  );
}
