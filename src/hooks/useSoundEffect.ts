"use client";

import { useCallback, useRef, useEffect } from "react";

const SOUND_URLS = {
  CLICK: "https://cdn.pixabay.com/audio/2022/03/20/audio_5b2733c874.mp3",
  TYPEWRITER: "https://cdn.pixabay.com/audio/2025/04/15/audio_f7d87295a5.mp3",
  WHOOSH: "https://cdn.pixabay.com/audio/2024/07/30/audio_2944d6d258.mp3",
};

export const useSoundEffect = () => {
  const audioRefs = useRef<{ [key: string]: HTMLAudioElement }>({});

  useEffect(() => {
    // Preload sounds
    Object.entries(SOUND_URLS).forEach(([key, url]) => {
      const audio = new Audio(url);
      audio.preload = "auto";
      audioRefs.current[key] = audio;
    });
  }, []);

  const playSound = useCallback(
    (soundKey: keyof typeof SOUND_URLS, volume = 0.5) => {
      const audio = audioRefs.current[soundKey];
      if (audio) {
        // Clone audio to allow overlapping sounds
        const playNode = audio.cloneNode() as HTMLAudioElement;
        playNode.volume = volume;
        playNode
          .play()
          .catch((e) => console.log("Audio play blocked by browser:", e));
      }
    },
    [],
  );

  return { playSound };
};
