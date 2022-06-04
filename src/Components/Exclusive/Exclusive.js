import React from 'react'
import './Exclusive.css'

import ExclusiveNavigation from './Exclusive-heading/ExclusiveNavigation'
import ExclusiveBanner from './ExclusiveBanner/ExclusiveBanner'
import Boron from '../Boron/Boron'
import Aragon from '../Aragon/Aragon'
import Obsidian from '../Obsidian/Obsidian'
import Kryptonite from '../Kryptonite/Kryptonite'

const Exclusive = () => {
  return (
    <div className="exclusive">
      <ExclusiveNavigation />
      <ExclusiveBanner />
      <Boron />
      <Aragon />
      <Obsidian />
      <Kryptonite />
    </div>
  )
}

export default Exclusive
