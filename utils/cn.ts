import { clsx, type ClassValue } from 'clsx'

/**
 * Utility function for conditionally joining classNames together
 * Useful for combining Tailwind CSS classes with conditional logic
 *
 * @param inputs - Class values to combine
 * @returns Combined class string
 *
 * @example
 * ```tsx
 * import { cn } from '@/utils/cn'
 *
 * // Basic usage
 * cn('text-red-500', 'font-bold') // 'text-red-500 font-bold'
 *
 * // Conditional classes
 * cn('text-base', isActive && 'text-blue-500', isDark && 'dark:text-white')
 *
 * // With objects
 * cn('btn', {
 *   'btn-primary': variant === 'primary',
 *   'btn-secondary': variant === 'secondary',
 *   'opacity-50': disabled
 * })
 *
 * // With arrays
 * cn(['text-base', 'font-medium'], isError ? 'text-red-500' : 'text-gray-700')
 * ```
 */
export function cn(...inputs: ClassValue[]): string {
	return clsx(inputs)
}
