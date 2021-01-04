import React from 'react'
import './Body.css'
import Header from '../Header/Header'
import { useDataLayerValue } from '../../DataLayer'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from '../SongRow/SongRow';


function Body({ spotify }) {
 const [{ discover_weekly }, dispatch] = useDataLayerValue()

 return (
  <div className="body">
   <Header spotify={spotify} />
   <div className="body__info">
    <img src="https://newjams-images.scdn.co/v2/discover-weekly/j2OIQgTGzXWHMKruHd7dh8zHaKvElaof-HU6_J9ouKevuqLuNf2YRrAxMHAKd8FXkHvjHs6h2PERUXZs9jkg4dOyfXTepX2KG7i2PA8QHLsCsWn1tBz8izgMLLDwcjPQhBYMpTlcJrWMfSvu09CDsQ==/MDU6MDA6NTBUNjEtMzAtMA==/default" alt="" />
    <div className="body__infoText">
     <strong>PLAYLIST</strong>
     <h2>Discover Weekly</h2>
     <p>{discover_weekly?.description}</p>
    </div>
   </div>

   <div className="body__songs">
    <div className="body__icons">
     <PlayCircleFilledIcon className="body__shuffle" />
     <FavoriteIcon fontSize="large" />
     <MoreHorizIcon />
    </div>
    {/* list of songs */}
    {
     discover_weekly?.tracks.items.map((item, i) => (
      <SongRow key={i} track={item.track} />
     ))
    }
   </div>
  </div>
 )
}

export default Body
