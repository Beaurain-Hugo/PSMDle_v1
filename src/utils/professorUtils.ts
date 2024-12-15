import { Professor } from '../types/professor';
import { professors } from '../data/professors';
import { getDaysSinceEpoch } from './dateUtils';

export const getDailyProfessor = (): Professor => {
  const daysSinceEpoch = getDaysSinceEpoch();
  const index = daysSinceEpoch % professors.length;
  return professors[index];
};

export const compareAttribute = (guessValue: string | string[], targetValue: string | string[]): string => {
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