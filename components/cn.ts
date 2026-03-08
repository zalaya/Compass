import { clsx, type ClassValue } from 'clsx'

/**
 * Utility function for constructing a string of class names.
 *
 * @param inputs An array of class names, which can be strings, objects, or arrays.
 * @returns A string of class names.
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}
