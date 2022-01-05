import React from 'react';
import { useNavigate } from 'react-router-dom';

import '../PageNotFound.css';
import Bye from '../404.svg';

function PageNotFound () {
  const navigate = useNavigate();

  return (
    <div className="not-found">
      <h3 className="not-found__title">
       <span>404</span> - Page not found
      </h3>
      <img className="not-found__image" src={Bye} alt=""/>
      <p className="not-found__text">
      Oh, there's nothing here... 🥺
      </p>
      <button className="button btn button_type_to-main" onClick={() => navigate(-1)}>Go Back</button>
    </div>
  )
}

export { PageNotFound };