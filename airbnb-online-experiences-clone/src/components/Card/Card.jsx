import React from 'react';
import PropTypes from 'prop-types';
import './Card.scss';

function getBadgeContent(openSpots, location){
  let badgeContent
  if (openSpots === 0) {
    badgeContent = "sold out"
  } else if (location === "Online") {
    badgeContent = "online"
  }
  return badgeContent
}

function Card({key, title, description, price, coverImg, stats, location, openSpots}){
  const badgeContent = getBadgeContent(openSpots, location)
  return (
    <div className="card">
      { badgeContent && <div className='card__badge'>{badgeContent}</div> }
      <div className="card__img">
        <img src={`../images/${coverImg}`} alt="" />
      </div>
      <div className="card__info">
        <div className="card__info--score">
          <span className='score'>{stats.rating}</span>
          <span className='votes -secondary'>({stats.reviewCount})</span>
          <span className='location -secondary'>{location}</span>
        </div>
        <p className="card__info--title">{title}</p>
        <p className="card__info--price">From ${price} <span>/ person</span></p>
      </div>
    </div>
  )
}

export default Card;
