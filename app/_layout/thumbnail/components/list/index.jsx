'use client';

import Link from 'next/link';
import Image from 'next/image';

import { thumbnailOptions } from '@/data';

/**
 * @param {Object} props
 * @param {(index: number) => void} props.handlePointerEnter
 * @param {(index: number) => void} props.handlePointerLeave
 * @param {(x: number, y: number) => void} props.moveItems
 */
export function ThumbnailList({
  handlePointerEnter,
  handlePointerLeave,
  moveItems,
}) {
  const items = thumbnailOptions.map(({ href, title, category, year, duration, tech, tags, description, technologies, metrics }, index) => {
    const id = index;
    return (
      <li
        key={`thumbnail-list-${id}`}
        className='thumbnail-item border-t border-solid transition-all last-of-type:border-b'
        style={{
          paddingInline: 'calc(clamp(1em,3vw,4em) * 2)',
          paddingBlock: 'clamp(1em,3vw,4em)',
        }}
        onPointerEnter={({ clientX, clientY }) => {
          handlePointerEnter(id);
          moveItems(clientX, clientY);
        }}
        onPointerLeave={({ clientX, clientY }) => {
          handlePointerLeave(id);
          moveItems(clientX, clientY);
        }}
      >
        <Link
          href={href}
          className='group'
          passHref
        >
          <div className="flex justify-between items-start gap-8 max-lg:flex-col">
            {/* Left Section - Title and Basic Info */}
            <div className="flex flex-col gap-4">
              <h4
                style={{
                  fontSize: 'calc(clamp(3.25em, 7vw, 8em) * 0.75)',
                }}
                className="text-black"
              >
                {title}
              </h4>
              <div className="flex items-center gap-4 text-muted-foreground">
                <span className="font-medium">Design & Development</span>
                <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/50" />
                <span>2024</span>
              </div>
            </div>

            {/* Right Section - Project Description */}
            <div className="flex-1 max-w-[400px]">
              <div className="space-y-4">
                <p className="text-sm leading-relaxed text-neutral-600">
                  A dynamic e-commerce platform built with Next.js and React. Features include real-time inventory management, AI-powered product recommendations, and seamless payment integration. The platform achieved a 40% increase in user engagement and 25% higher conversion rates.
                </p>
                
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-3 py-1 bg-neutral-100 text-neutral-600 rounded-full">
                    E-commerce
                  </span>
                  <span className="text-xs px-3 py-1 bg-neutral-100 text-neutral-600 rounded-full">
                    AI Integration
                  </span>
                  <span className="text-xs px-3 py-1 bg-neutral-100 text-neutral-600 rounded-full">
                    Real-time Data
                  </span>
                </div>

                <span className="inline-flex items-center gap-2 text-black font-medium group-hover:gap-3 transition-all duration-300">
                  View Project Details
                  <svg 
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14m-7-7l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </Link>
      </li>
    );
  });

  return <ul className='group'>{items}</ul>;
}
