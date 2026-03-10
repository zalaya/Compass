import { type ClassValue, clsx } from 'clsx'

/**
 * Utility function for constructing a string of class names.
 *
 * @param inputs An array of class names, which can be strings, objects, or arrays.
 * @returns A string of class names.
 */
export const cn = (...inputs: ClassValue[]) => {
  return clsx(inputs)
}
