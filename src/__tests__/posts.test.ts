import { describe, it, expect } from 'vitest'
import { posts } from '@/lib/posts'

describe('posts data', () => {
  it('loads posts from JSON', () => {
    expect(Array.isArray(posts)).toBe(true)
    expect(posts.length).toBeGreaterThan(0)
  })

  it('each post has required fields', () => {
    for (const p of posts) {
      expect(p.slug).toBeTruthy()
      expect(p.title).toBeTruthy()
      expect(p.content).toBeTruthy()
    }
  })
})
