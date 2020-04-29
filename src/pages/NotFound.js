import React from 'react';
import './styles/NotFound.css'

function NotFound() {
  return (
    <React.Fragment>
      <div className="NotFound__container">
        <div className="phrase__container">
          <h1 className="error">
            404: Not Found
                    </h1>
          <p className="phrase">
            La página que estás buscando no existe!</p>
        </div>
      </div>
    </React.Fragment>

  )

}

export default NotFound