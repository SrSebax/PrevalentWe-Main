import Head from 'next/head';
import React from 'react';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import TimeLineCV from './cv';

function Index() {
  return (
    <div>
      <Head>
        <title>PrevalentWe</title>
      </Head>

      <div className='grid justify-center items-center my-10'>
        <div className='flex justify-center'>
          <h1 className='text-4xl  text-gray-700'>Mi CV</h1>
        </div>

        <div className='flex flex-col justify-center items-center mt-5 text-center'>
          <div className='text-gray-500'>
            ¡Aún no tienes hitos! Ingresa tu información de vida
          </div>
        </div>

        <div className=' gap-10 mt-5 flex items-center justify-center text-center '>
          <div className=' col-span-1'>
            <div className=' bg-yellow-400 w-12 h-12 rounded-full text-white text-2xl flex flex-col items-center justify-center ml-7'>
              <Icon icon='fa-solid:university' />
            </div>
            <div className='mt-5 font-bold text-blue-500'>
              <Link href='./academy'>
                {' '}
                <span>
                  {' '}
                  AGREGAR <br /> INFORMACION <br /> ACADEMICA
                </span>
              </Link>
            </div>
          </div>

          <div className='col-span-2'>
            <div className=' bg-green-400 w-12 h-12 rounded-full text-white text-2xl flex flex-col items-center justify-center ml-5'>
              <Icon icon='fa-solid:suitcase' />
            </div>
            <div className='mt-5 font-bold text-blue-500'>
              <Link href='./hitos/create'>
                <span>
                  {' '}
                  AGREGAR <br /> EXPERIENCIA <br /> LABORAL
                </span>
              </Link>
            </div>
          </div>

          <div className='col-span-3'>
            <div className='w-12 h-12 rounded-full bg-red-500 text-white text-2xl flex flex-col items-center justify-center ml-3'>
              <Icon icon='fa-solid:check-double' />
            </div>
            <div className='mt-5 font-bold text-blue-500'>
              <Link href='./hitos/create_staff'>
                <span>
                  {' '}
                  CREAR <br /> HITO <br /> PERSONAL
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <TimeLineCV />
    </div>
  );
}

export default Index;
