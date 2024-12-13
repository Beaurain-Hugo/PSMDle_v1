import { Champion } from '../types/champion';
import { champions } from '../data/champions';
import { getDaysSinceEpoch } from './dateUtils';

export const getDailyChampion = (): Champion => {
  const daysSinceEpoch = getDaysSinceEpoch();
  const index = daysSinceEpoch % champions.length;
  return champions[index];
};

export const compareAttribute = (guessValue: any, targetValue: any): string => {
  if (Array.isArray(guessValue) && Array.isArray(targetValue)) {
    return guessValue.some(v => targetValue.includes(v)) 
      ? guessValue.every(v => targetValue.includes(v)) && targetValue.every(v => guessValue.includes(v))
        ? 'bg-[rgba(0,255,0,0.3)] border-[#00ff00]'
        : 'bg-[rgba(255,255,0,0.3)] border-[#ffff00]'
      : 'bg-[rgba(255,0,0,0.3)] border-[#ff0000]';
  }
  return guessValue === targetValue 
    ? 'bg-[rgba(0,255,0,0.3)] border-[#00ff00]'
    : 'bg-[rgba(255,0,0,0.3)] border-[#ff0000]';
};