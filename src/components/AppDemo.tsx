'use client'

import { useCallback, useMemo, useRef, useState } from 'react'

import { AppScreen } from '@/components/AppScreen'

const videoLinks = [
  'https://video.twimg.com/ext_tw_video/1699853924964962304/pu/vid/avc1/480x852/Bu5HT0BTFk3BkiZJ.mp4?tag=12',
  'https://video.twimg.com/ext_tw_video/1706326800270336000/pu/vid/avc1/480x852/2rdGKLgT_OE7vcS7.mp4?tag=12',
  'https://video.twimg.com/ext_tw_video/1690008752404221952/pu/vid/640x360/u1VplRGv9QOVcg84.mp4?tag=12',
]

export function AppDemo() {
  const [videoIndex, setVideoIndex] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  const source = useMemo(() => videoLinks[videoIndex], [videoIndex])

  const playNext = useCallback(() => {
    if (videoIndex < videoLinks.length) {
      setVideoIndex(videoIndex + 1)
      if (videoRef.current) {
        videoRef.current.src = source
        videoRef.current.play()
      }
    } else setVideoIndex(videoIndex + 1)
  }, [source, videoIndex])

  return (
    <AppScreen>
      <AppScreen.Body>
        <video
          className="h-full object-cover"
          ref={videoRef}
          autoPlay
          muted
          onEnded={() => playNext()}
        >
          <source src={source} />
        </video>
      </AppScreen.Body>
    </AppScreen>
  )
}
