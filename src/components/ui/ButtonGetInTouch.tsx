import { ArrowUpRight } from 'lucide-react'
import React from 'react'

export default function ButtonGetInTouch() {
  return (
    <a href="/contact-us" className="justify-center flex bg-chart-3 text-white p-4 uppercase font-light text-base">
      Get in touch  <ArrowUpRight size={24} strokeWidth={1} className="ms-2" />
    </a>
  )
}
