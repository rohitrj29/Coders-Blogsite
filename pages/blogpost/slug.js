import React from 'react'
import {userRouter} from 'next/router'
const slug = () => {
    const router=useRouter();
      const {slug}=router.query;
  return (
    <div>     
      {slug}
    </div>
  )
}

export default slug
