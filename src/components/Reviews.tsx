'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import clsx from 'clsx'
import { useInView } from 'framer-motion'
import Image from 'next/image'

import { Container } from '@/components/Container'
import image1 from '@/images/photos/wp-img1.jpeg'
import image2 from '@/images/photos/wp-img2.jpeg'
import image3 from '@/images/photos/wp-img3.jpeg'
import image4 from '@/images/photos/wp-img-4.jpeg'
import image5 from '@/images/photos/wp-img5.jpeg'
import image6 from '@/images/photos/wp-img6.jpg'
import image7 from '@/images/photos/wp-img7.jpg'

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex snap-x snap-mandatory  justify-center gap-5 overflow-y-hidden overflow-x-scroll py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5, image6, image7].map(
          (image, imageIndex) => (
            <div
              key={image.src}
              className={clsx(
                'relative aspect-[9/10] w-44 flex-none snap-center overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
                rotations[imageIndex % rotations.length],
              )}
            >
              <Image
                src={image}
                alt=""
                sizes="(min-width: 640px) 18rem, 11rem"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          ),
        )}
      </div>
    </div>
  )
}

export function Reviews() {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-title"
      className="pb-16 pt-20 sm:pb-24 sm:pt-32"
    >
      <Container>
        <h2
          id="reviews-title"
          className="text-3xl font-medium tracking-tight text-gray-900 sm:text-center"
        >
          Your Night, Your Way
        </h2>
        <p className="mt-2 text-lg text-gray-600 sm:text-center">
          Whether you&apos;re new in town, a seasoned night owl, or just looking
          to switch things up, our app is your ticket to the best nightlife
          experiences. Join the league of night explorers and make every evening
          an adventure to remember.
        </p>
        <Photos />
      </Container>
    </section>
  )
}
