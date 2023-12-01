import { useState } from 'react'
import PageNav from "../components/PageNav"


function Pricing() {
  const [count, setCount] = useState(0)

  return (
    <div>
  <PageNav />
  <div>Pricing</div>
  </div>
 )
}

export default Pricing