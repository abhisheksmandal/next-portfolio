import { describe, it, expect } from 'vitest'
import { cn } from '@/lib/utils'

describe('utils.cn', () => {
  it('merges and dedupes class names', () => {
    const result = cn('px-4', 'py-2', 'px-4', 'text-sm')
    expect(result).toContain('px-4')
    expect(result).toContain('py-2')
    expect(result).toContain('text-sm')
  })

  it('resolves conflicting tailwind classes using twMerge', () => {
    const result = cn('px-2', 'px-4')
    expect(result).toContain('px-4')
    expect(result).not.toContain('px-2')
  })
})
