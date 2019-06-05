import React from 'react';

export const RatingElement = props => (
  <div className="element">
    <div className="elementImage"><img alt={props.name} src={`https://picsum.photos/80/80?image=${props.imgId}`} /></div>
    <div className="elementName">{ props.name }</div>
    <div className="elementRating">
        Rating is: { props.rating }
    </div>
    <div className="elementBtns">
      <div className="up">
        <button
          type="button"
          onClick={(event) => {
            event.preventDefault();
            props.setRating({ id: props.id, action: 1 });
          }
          }
        >
            Up rating
        </button>
      </div>
      <div className="down">
        <button
          type="button"
          onClick={(event) => {
            event.preventDefault();
            props.setRating({ id: props.id, action: -1 });
          }
        }
        >
            Down rating
        </button>
      </div>
    </div>
  </div>
);
export default RatingElement;
