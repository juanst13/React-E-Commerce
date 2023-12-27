import shipments from '../../../assets/images/shipments.jpeg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckFast, faShip } from '@fortawesome/free-solid-svg-icons';

const elements = [
  {
    id: '1',
    imgSrc: faTruckFast,
    title: 'Envíos nacionales',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquam, nunc sed vehicula lacinia, erat purus semper dui, eget gravida mi nisi ac dui.',
  },
  {
    id: '2',
    imgSrc: faShip,
    title: 'Envíos internacionales',
    message:
      'Sed porttitor orci nisi, at aliquam dolor condimentum eget. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
  },
];

export const HelpShipments = () => {
  return (
    <div id="globalContainer">
      <img src={shipments} alt="how-payment" id="image" />
      <div className="row mt-5 mb-5" id="infoContainer">
        <h4>Contamos con estos medios de envíos</h4>
        {elements.map((item) => (
          <div className="card mt-5" id="infoCard" key={item.id}>
            <div className="info-slide" id="infoCardText">
              <FontAwesomeIcon
                icon={item.imgSrc}
                id="infoIconColor"
                size="4x"
              />
              <h4 className="mt-4" id="infoTitleCard">
                {item.title}
              </h4>
              <p id="infoDescriptionCard">
                <span>{item.message}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
