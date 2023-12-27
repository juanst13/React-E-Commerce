import payment from '../../../assets/images/payment.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCreditCard,
  faMoneyBill1Wave,
  faLandmark,
} from '@fortawesome/free-solid-svg-icons';

import './styles.css';

const elements = [
  {
    id: '1',
    imgSrc: faCreditCard,
    title: 'Tarjeta de crédito',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquam, nunc sed vehicula lacinia, erat purus semper dui, eget gravida mi nisi ac dui.',
  },
  {
    id: '2',
    imgSrc: faMoneyBill1Wave,
    title: 'Efectivo',
    message:
      'Sed porttitor orci nisi, at aliquam dolor condimentum eget. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
  },
  {
    id: '3',
    imgSrc: faLandmark,
    title: 'Transferencia bancaria',
    message:
      'Vivamus sed dolor ac magna accumsan posuere quis ut libero. Integer augue nisi, molestie in eros a, sodales aliquet justo. Sed ultricies risus nisi, a fermentum tortor aliquam vitae.',
  },
];

export const HelpPayments = () => {
  return (
    <div id="globalContainer">
      <img src={payment} alt="how-payment" id="image" />
      <div className="row mt-5 mb-5" id="infoContainer">
        <h4>Puedes pagar tus compras con estos medios</h4>
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
