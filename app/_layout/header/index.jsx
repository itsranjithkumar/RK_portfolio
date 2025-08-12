'use client';

import { motion } from 'framer-motion';
import { MoveDownRight } from 'lucide-react';
import Image from 'next/image';

import { ParallaxSlider } from '@/components';

import { slideUp } from './variants';

export function Header() {
  return (
    <motion.header
      className='relative h-screen overflow-hidden bg-secondary-foreground text-background'
      variants={slideUp}
      initial='initial'
      animate='enter'
      role="banner"
      aria-label="Hero section"
    >
      <Image
        src="/image2.jpg"
        className='object-cover w-full h-full'
        fill={true}
        priority={true}
        quality={100}
        sizes='100vw'
        alt='Ranjith Kumar - Full Stack Developer based in [Your Location]'
        role="img"
      />

      <div 
        className='relative flex h-full flex-col justify-end gap-2 md:flex-col-reverse md:justify-normal'
        itemScope 
        itemType="http://schema.org/Person"
      >
        <div className='select-none'>
          <h1 
            className='text-[max(9em,15vw)] text-center md:text-left' 
            aria-label="Ranjith Kumar"
            itemProp="name"
          >
            <ParallaxSlider repeat={4} baseVelocity={2} aria-hidden="true">
              <span className='pe-12'>
                Ranjith Kumar
                <span className='spacer'>—</span>
              </span>
            </ParallaxSlider>
          </h1>
          <meta itemProp="jobTitle" content="Full Stack Developer" />
          <meta itemProp="image" content="/image2.jpg" />
        </div>

        <div className='md:ml-auto' role="contentinfo">
          <div className='mx-10 max-md:my-12 md:mx-36'>
            <div className='mb-4 md:mb-20' aria-hidden="true">
              <MoveDownRight size={28} strokeWidth={1.25} />
            </div>

            <div className='space-y-2'>
              <h4 
                className='text-[clamp(1.55em,2.5vw,2.75em)] font-medium' 
                aria-label="Role: Full Stack Developer"
                itemProp="description"
              >
                <span className='block'>Full Stack</span>
                <span className='block'>Developer</span>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
