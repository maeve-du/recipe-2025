import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function clsMerge(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
