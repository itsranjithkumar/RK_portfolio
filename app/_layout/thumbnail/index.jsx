'use client';

import { useRef } from 'react';

import { useFollowPointer } from '@/hooks';

import {
  ThumbnailAction,
  ThumbnailCursorCircle,
  ThumbnailCursorLabel,
  ThumbnailLabel,
  ThumbnailList,
  ThumbnailModal,
} from './components';
import { scaleUp } from './variants';

export function Thumbnail() {
  /** @type {import('react').MutableRefObject<HTMLElement>} */
  const modal = useRef(null);
  /** @type {import('react').MutableRefObject<HTMLElement>} */
  const cursor = useRef(null);
  /** @type {import('react').MutableRefObject<HTMLElement>} */
  const label = useRef(null);

  const {
    item: { active, index },
    handlePointerEnter,
    handlePointerLeave,
    moveItems,
  } = useFollowPointer({
    modal,
    cursor,
    label,
  });

  return (
    <section
      className='container relative'
      onPointerMove={({ clientX, clientY }) => moveItems(clientX, clientY)}
    >
      <div className='my-8 flex flex-col gap-10'>


        <div className="flex flex-col items-center mb-4">
          {/* <span className="text-2xl md:text-3xl font-semibold text-black dark:text-white mb-2">Video Gallery</span> */}
          <span className="text-lg md:text-xl text-black/70 dark:text-white/70 max-w-2xl text-center">Watch my projects in action — See how they work</span>
        </div>
        <ThumbnailList
          handlePointerEnter={handlePointerEnter}
          handlePointerLeave={handlePointerLeave}
          moveItems={moveItems}
        />
        <ThumbnailModal
          ref={modal}
          variants={scaleUp}
          active={active}
          index={index}
        />
        <ThumbnailCursorCircle
          ref={cursor}
          variants={scaleUp}
          active={active}
        />
        <ThumbnailCursorLabel ref={label} variants={scaleUp} active={active}>
          View
        </ThumbnailCursorLabel>
        <ThumbnailAction>
          More work<sup className='text-muted-foreground'>14</sup>
        </ThumbnailAction>
      </div>
    </section>
  );
}
