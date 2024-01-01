'use client'
import { usePathname } from 'next/navigation'
import React from 'react'

const Checkroute = () => {
    const path = usePathname();
    
  return (
    <>   
    <link rel="icon" href="/favicon.ico" sizes="any" />
    </>
  )
}

export default Checkroute
