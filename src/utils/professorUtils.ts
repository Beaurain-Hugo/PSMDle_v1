import { Professor } from '../types/professor';
import { professors } from '../data/professors';
import { getDaysSinceEpoch } from './dateUtils';

const LAST_VISIT_KEY = 'lastVisit';

const isNewDay = (): boolean => {
  const lastVisit = localStorage.getItem(LAST_VISIT_KEY);
  const daysSinceEpoch = getDaysSinceEpoch();
  if (lastVisit === null || parseInt(lastVisit) !== daysSinceEpoch) {
    localStorage.setItem(LAST_VISIT_KEY, daysSinceEpoch.toString());
    return true;
  }
  return false;
};

export const getDailyProfessor = (): Professor => {
  if (isNewDay()) {
    localStorage.clear();
  }
  const daysSinceEpoch = getDaysSinceEpoch();
  const index = daysSinceEpoch % professors.length;
  return professors[index];
};

export const getYesterdayProfessor = (): Professor => {
  if (isNewDay()) {
    localStorage.clear();
  }
  const daysSinceEpoch = getDaysSinceEpoch();
  const index = (daysSinceEpoch-1) % professors.length;
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