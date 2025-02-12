import DashBoard from '@/components/Dashboard/DashBoard'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <Suspense >
          <DashBoard/>
    </Suspense>
  )
}

export default page