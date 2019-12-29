import React, { useContext } from 'react';
import { CurrentUserContext } from '../context/currentUser';
import { NavLink } from 'react-router-dom';

const FeedToggler = ({ tagName }) => {
  const [currentUserState] = useContext(CurrentUserContext);
  return (
    <div className='feed-toggler'>
      <ul className='nav nav-pills outline-active'>
        {currentUserState.isLoggedIn && (
          <li className='nav-item'>
            <NavLink to='/feed' className='nav-link'>
              Your fedd
            </NavLink>
          </li>
        )}
        <li className='nav-item'>
          <NavLink to='/' className='nav-link' exact>
            Global fedd
          </NavLink>
        </li>
        {tagName && (
          <li className='nav-item'>
            <NavLink to={`/tags/${tagName}`} className='nav-link'>
              <i className='ion-pound'></i>&nbsp;
              {tagName}
            </NavLink>
          </li>
        )}
      </ul>
    </div>
  );
};

export default FeedToggler;
