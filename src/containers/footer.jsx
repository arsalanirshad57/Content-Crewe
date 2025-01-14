'use client';
import Link from 'next/link';
import { Github, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className='border-t border-white/10 bg-black py-8'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between space-x-8 '>
          <Link href='/' className='text-xl font-bold'>
            <img src='/logoWithText.png' alt='logo' className='h-8' />
          </Link>

          <div className='mt-6 flex space-x-4'>
            <Link href='#' className='text-neutral-400 hover:text-white'>
              <Github className='h-5 w-5' />
            </Link>
            <Link href='#' className='text-neutral-400 hover:text-white'>
              <Twitter className='h-5 w-5' />
            </Link>
            <Link href='#' className='text-neutral-400 hover:text-white'>
              <Linkedin className='h-5 w-5' />
            </Link>
          </div>
        </div>

        <div className='mt-12 border-t border-white/10 pt-8 text-center'>
          <p className='text-sm text-neutral-400'>
            © {new Date().getFullYear()} Deploy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
