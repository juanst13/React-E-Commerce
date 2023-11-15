import React from 'react'
import error404 from '../../assets/images/error404.png';

import './styles.css';

export const NotFound = () => {
  return (
    <div className='container' id='div404'>
        <img src={error404} alt='Error 404' id='image404' />
        <h1>Página no encontrada</h1>
    </div>
  )
}
