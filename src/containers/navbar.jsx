'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { getAuth, signOut } from 'firebase/auth';
import { auth } from '@/config/firebase';
import { useRouter } from 'next/navigation';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const auth = getAuth();
    setUser(auth.currentUser);
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    const auth = getAuth();
    await signOut(auth);
    setUser(null);
    router.push('/auth/login');
  };

  return (
    <nav className='fixed top-0 z-50 w-full border-b border-white/10 backdrop-blur-xl'>
      <div className='mx-auto max-w-7xl px-5 sm:px-6 lg:px-8'>
        <div className='flex h-16 items-center justify-between'>
          <div className='flex items-center'>
            <Link href='/' className='text-xl font-bold'>
              <img src='/logoWithText.png' alt='logo' className='h-9 lg:h-11' />
            </Link>
          </div>

          <div className='hidden md:block'>
            <div className='ml-10 flex items-center space-x-8 text-white'>
              <Link href='#pricing' className='text-sm hover:text-white/80'>
                Pricing
              </Link>
              <Link href='#whyUs' className='text-sm hover:text-white/80'>
                Why Us
              </Link>
              <Link href='#contact' className='text-sm hover:text-white/80'>
                Contact
              </Link>
              {!loading &&
                (user ? (
                  <Button
                    variant='ghost'
                    className='text-sm'
                    onClick={handleLogout}
                  >
                    Logout
                  </Button>
                ) : (
                  <>
                    <Link href='/auth/login'>
                      <Button variant='ghost' className='text-sm'>
                        Login
                      </Button>
                    </Link>
                    <Link href='/auth/signup'>
                      <Button className='w-full'>Sign Up</Button>
                    </Link>
                  </>
                ))}
            </div>
          </div>

          <div className='md:hidden'>
            <Button
              variant='ghost'
              size='icon'
              onClick={() => setIsOpen(!isOpen)}
              className='inline-flex items-center justify-center  text-white'
            >
              {isOpen ? (
                <X className='h-6 w-6' />
              ) : (
                <Menu className='h-6 w-6' />
              )}
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className='md:hidden'>
          <div className='space-y-1 px-2 pb-3 pt-2'>
            <Link
              href='/features'
              className='block px-3 py-2 text-base text-white hover:bg-white/5'
            >
              Features
            </Link>
            <Link
              href='/pricing'
              className='block px-3 py-2 text-base text-white hover:bg-white/5'
            >
              Pricing
            </Link>
            <Link
              href='/contact'
              className='block px-3 py-2 text-base text-white hover:bg-white/5'
            >
              Contact
            </Link>
            {!loading &&
              (user ? (
                <Button
                  variant='ghost'
                  className='w-full justify-start text-white text-base'
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              ) : (
                <>
                  <div className='px-3 py-2'>
                    <Link href='/auth/login'>
                      <Button
                        variant='ghost'
                        className='w-full justify-start text-white text-base'
                      >
                        Login
                      </Button>
                    </Link>
                  </div>
                  <div className='px-3 py-2'>
                    <Link href='/auth/signup'>
                      <Button className='w-full'>Sign Up</Button>
                    </Link>
                  </div>
                </>
              ))}
          </div>
        </div>
      )}
    </nav>
  );
}
