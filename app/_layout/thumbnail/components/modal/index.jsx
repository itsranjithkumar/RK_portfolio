'use client';

import { forwardRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Center } from '@/components';
import { thumbnailOptions } from '@/data';
import { randomId } from '@/utils';

const MotionComponent = motion(Center);

export const ThumbnailModal = forwardRef(
  /**
   * @param {import('react').HTMLAttributes<HTMLElement> & { variants: import('framer-motion').Variants; active: boolean; index: number;}} props
   * @param {import('react').ForwardedRef<HTMLElement>} ref
   */
  function ThumbnailModal({ variants, active, index, ...props }, ref) {
    const [loading, setLoading] = useState(true);

    const items = thumbnailOptions.map(({ title, image, description }) => {
      const id = randomId();
      return (
        <Center key={id} className='h-full w-full'>
          <div className="relative w-full h-full">
            <div className={`absolute inset-0 bg-secondary/10 backdrop-blur-sm transition-opacity duration-300 ${loading ? 'opacity-100' : 'opacity-0'}`}>
              <Center className="h-full">
                <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
              </Center>
            </div>
            <Image
              src={image}
              width={320}
              height={320}
              alt={`${title} thumbnail image`}
              className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
              onLoadingComplete={() => setLoading(false)}
            />
            <AnimatePresence>
              {active && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent"
                >
                  <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
                  <p className="text-white/90 text-sm">{description}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Center>
      );
    });

    return (
      <MotionComponent
        ref={ref}
        className='pointer-events-none fixed left-1/2 top-1/2 h-80 w-80 overflow-hidden rounded-lg bg-secondary-foreground shadow-2xl'
        variants={variants}
        initial='initial'
        animate={active ? 'enter' : 'closed'}
        {...props}
      >
        <div
          className='relative h-full w-full transition-transform duration-500 ease-out'
          style={{
            transform: `translateY(${index * -100}%)`,
          }}
        >
          {items}
        </div>
      </MotionComponent>
    );
  },
);
