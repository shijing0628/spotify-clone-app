import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import './Player.css'
import Body from '../Body/Body'
import Footer from '../Footer/Footer'

function Player({ spotify }) {
 return (
  <div className="player">
   <div className="player__body">
    {/* sidebar */}
    <Sidebar />
    {/* body */}
    <Body />
   </div>

   {/* footer */}
   <Footer />
  </div>
 )
}

export default Player
