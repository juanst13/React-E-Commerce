import React from 'react';
import { Link } from 'react-router-dom';
import { applyDiscount, formatMoney } from '../utils/genericFunctions';
import { useDispatch } from 'react-redux';
import { ProductProps, addProduct } from '../../redux/slices/productSlice';

interface CardProps {
  id: string;
  imgSrc: string;
  title: string;
  price: number;
  discount: number;
}

export const SalesCard: React.FC<CardProps> = ({
  id,
  imgSrc,
  title,
  price,
  discount,
}) => {
  const dispatch = useDispatch();

  const hasOffer = !!discount;
  const priceOffer = hasOffer && formatMoney(applyDiscount(price, discount));

  const onClickItem = (item: ProductProps) => {
    dispatch(addProduct(item));
  };

  return (
    <div
      className="card p-3"
      key={id}
      onClick={() =>
        onClickItem({
          title,
          image: imgSrc,
          price,
          discount,
          stock: 10,
          seller: 'Ruben Kang',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fringilla fringilla nulla, vel vulputate erat bibendum eu. Mauris malesuada nunc vitae purus feugiat, sed feugiat felis ullamcorper. Duis tempus sem enim, gravida ullamcorper ante vestibulum ac. Duis a velit aliquet, lacinia enim egestas, gravida magna. Vestibulum dignissim, tortor in blandit euismod, urna felis auctor tortor, nec congue tellus purus et lorem. Nullam vitae arcu a nulla tempor facilisis. Quisque facilisis velit ipsum, quis efficitur leo facilisis sed. Nullam blandit mi tellus. Duis euismod sagittis nibh et facilisis. Praesent enim metus, condimentum eu tortor a, tempus lacinia lectus. Curabitur rhoncus leo non tellus malesuada, at sollicitudin risus euismod. Fusce leo nisl, bibendum a dignissim a, blandit nec felis. Nunc rhoncus massa ac ipsum scelerisque, vel vestibulum elit elementum. Maecenas eleifend et felis vitae mollis.',
          detail: {
            Gender: 'Anime',
            Series: 'Naruto',
            Height: '12 cm',
            Mark: 'Shonen',
          },
          questionsAndAswers: {
            Q1: '¿Lorem Ipsum?',
            Q2: '¿Neque porro quisquam?',
            A1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sollicitudin blandit lectus, vitae imperdiet nisl varius a. Pellentesque rhoncus vehicula dolor id varius. Integer erat nibh, maximus eget consequat eu, laoreet in quam. Nam vel tortor eu libero fermentum dictum et vitae diam. Integer ac elit sed mauris tempus ultricies. Integer semper, odio eget dapibus gravida, velit ligula convallis tortor, in suscipit erat est sit amet urna. Aenean tristique eu tortor congue placerat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus in nulla libero',
            A2: 'Duis pulvinar eu neque at lacinia. Duis maximus odio in diam ullamcorper, at suscipit lacus sagittis. Phasellus imperdiet et metus id hendrerit. Donec ornare aliquam nisi, quis eleifend erat semper a. Maecenas tempor id velit id luctus. Donec viverra ipsum eu diam rhoncus commodo. Sed luctus mollis bibendum. Praesent auctor euismod leo, id dictum nisi molestie ut. Nam pellentesque erat odio, id condimentum velit scelerisque vel. Mauris et massa enim. Etiam eu egestas justo. Nullam convallis aliquam lorem tincidunt elementum. In nec placerat magna.',
          },
        })
      }
    >
      <Link to="/product" id="cardData">
        <img src={imgSrc} className="card-img-top" alt="..." id="imageCard" />
        <div className="card-body">
          <p className="card-text" id="titleCard">
            {title}
          </p>
          {hasOffer ? <del>{formatMoney(price)}</del> : <br />}
          <div className="column" id="infoPrice">
            <div className="card-text" id="Price">
              {priceOffer ? priceOffer : formatMoney(price)}
            </div>
            <div className="card-text" id="discount">
              {hasOffer && `${discount}% OFF`}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
