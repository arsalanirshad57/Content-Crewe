'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Github, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className='border-t border-white/10 bg-black py-12'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='grid gap-8 lg:grid-cols-4'>
          <div>
            <Link href='/' className='text-xl font-bold'>
              <img src='/logoWithText.png' alt='logo' className='h-8' />
            </Link>
            <p className='mt-4 text-sm text-neutral-400'>
              Get Started Today and Build Your Future Video Team – Hire the
              Experts You Need to Bring Your Vision to Life!
            </p>
          </div>

          <div>
            <h3 className='font-semibold text-white'>Pages</h3>
            <ul className='mt-4 space-y-2'>
              <li>
                <Link
                  href='/about'
                  className='text-sm text-neutral-400 hover:text-white'
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href='/features'
                  className='text-sm text-neutral-400 hover:text-white'
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href='/pricing'
                  className='text-sm text-neutral-400 hover:text-white'
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='font-semibold text-white'>Legal</h3>
            <ul className='mt-4 space-y-2'>
              <li>
                <Link
                  href='/privacy'
                  className='text-sm text-neutral-400 hover:text-white'
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href='/terms'
                  className='text-sm text-neutral-400 hover:text-white'
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href='/cookies'
                  className='text-sm text-neutral-400 hover:text-white'
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='font-semibold text-white'>Newsletter</h3>
            <p className='mt-4 text-sm text-neutral-400'>
              Subscribe to our newsletter for updates.
            </p>
            <form className='mt-4 flex gap-2'>
              <Input
                type='email'
                placeholder='Enter your email'
                className='bg-white/5'
              />
              <Button type='submit'>Subscribe</Button>
            </form>
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
