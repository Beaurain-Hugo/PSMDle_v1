import React from 'react';
import { getChampionImage } from '../utils/imageUtils';

interface ChampionImageProps {
  name: string;
  size?: 'small' | 'medium' | 'large';
}

export default function ChampionImage({ name, size = 'medium' }: ChampionImageProps) {
  const sizeClasses = {
    small: 'w-8 h-8',
    medium: 'w-12 h-12',
    large: 'w-16 h-16'
  };

  return (
    <img
      src={getChampionImage(name)}
      alt={name}
      className={`${sizeClasses[size]} rounded-full object-cover neon-border`}
      loading="lazy"
    />
  );
}