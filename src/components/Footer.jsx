import React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <p>
        &copy; {year} Ifedore Local Government Area · Ondo State, Nigeria · All rights reserved
      </p>
      <p className='footer-link'>
        Made with <FavoriteBorderIcon sx={{ color: '#62d894', fontSize: '13px'}}/> by <a href="https://www.thetrybeco.org/">TheTrybeCo</a> 
      </p>
    </div>
  )
}

export default Footer