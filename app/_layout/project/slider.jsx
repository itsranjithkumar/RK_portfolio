'use client';

import Image from 'next/image';

import { Center } from '@/components';

/**
 * @param {Object} props
 * @param {'image' | 'video'} props.type
 * @param {string} props.source
 * @param {string} [props.title]
 * @param {string} [props.caption]
 */
export function ProjectSlider({ type, source, title, caption }) {
  return (
    <div className="relative w-[400px] h-[300px] rounded-3xl shadow-2xl bg-white/10 backdrop-blur-md border border-white/20 overflow-hidden group transition-all duration-300 hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] hover:border-primary/60 before:absolute before:inset-0 before:bg-gradient-to-br before:from-primary/30 before:to-transparent before:opacity-0 group-hover:before:opacity-100 before:transition-opacity">
      {type === 'image' ? (
        <Image
          src={source}
          alt={title || ''}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="400px"
        />
      ) : (
        <video
          src={source}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          autoPlay
          muted
          loop
          playsInline
          poster={type === 'video' ? source.replace(/\.(mp4|webm)$/, '.jpg') : undefined}
        />
      )}
      {/* Animated Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6">
        <div className="flex items-center gap-2 mb-2">
          {type === 'video' && (
            <span className="flex items-center justify-center w-8 h-8 bg-white/20 rounded-full">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <polygon points="9.5,7.5 16.5,12 9.5,16.5" />
              </svg>
            </span>
          )}
          {title && <span className="text-white text-xl font-bold drop-shadow">{title}</span>}
        </div>
        {caption && <p className="text-white/80 text-sm">{caption}</p>}
      </div>
      {/* Glow border */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl border-2 border-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
    </div>
  );
}
