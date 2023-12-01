import { useState } from 'react'
import PageNav from "../components/PageNav"


function PageNotFound() {
  const [count, setCount] = useState(0)

  return(
    <div>
      <PageNav /> Not Found</div>
    ) 
 
}

export default PageNotFound