"use client"

import { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Button } from './ui/button'

export function BackButton() {
  const [show, setShow] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Show if link included a `from=home` query param (client-side navigation from Home)
    try {
      if (searchParams?.get('from') === 'home') {
        setShow(true)
        return
      }
    } catch (e) {
      // fallthrough to other checks
    }
    try {
      const ref = document.referrer
      if (!ref) {
        // if there's history, allow back
        setShow(window.history.length > 1)
        return
      }
      const r = new URL(ref)
      // show only if referrer was the site root or pathname '/'
      if (r.pathname === '/' || r.pathname === '') setShow(true)
    } catch (e) {
      setShow(window.history.length > 1)
    }
  }, [searchParams])

  if (!show) return null

  return (
    <div className="mb-6 text-left">
      <Button variant="outline" onClick={() => router.back()}>
        ← Back
      </Button>
    </div>
  )
}
