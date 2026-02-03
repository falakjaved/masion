import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility to merge Tailwind CSS classes safely
 * Used across Navbar, Footer, Cards, Sheet, etc.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
