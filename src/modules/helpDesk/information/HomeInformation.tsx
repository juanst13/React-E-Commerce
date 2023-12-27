import info from '../../../assets/images/info.jpeg';

const elements = [
  {
    id: '1',
    message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae sagittis arcu, varius aliquam eros. Proin posuere rhoncus elit, blandit efficitur justo ornare vitae. Duis tristique massa eget purus rutrum tincidunt nec nec felis. Phasellus vestibulum magna at sagittis vestibulum. Vivamus mattis ante vulputate mi laoreet, vitae vehicula eros cursus. Curabitur bibendum viverra risus eu pellentesque. Suspendisse eu erat vel nibh faucibus cursus non non erat. Nam pellentesque libero magna, at imperdiet augue finibus vel. In ac sodales ipsum. Aliquam accumsan blandit libero, et pulvinar nunc lacinia eu. Aliquam eget tortor id mi tempus vehicula a in dui. Cras velit ligula, euismod sed lorem at, porttitor lobortis justo. Ut vel magna sit amet dolor finibus semper nec sit amet nulla. Nullam quam nisi, sodales vel purus non, interdum maximus libero.

      Donec a consequat metus. Morbi auctor, dolor eget lacinia laoreet, sem nunc aliquet metus, sodales aliquam erat enim id nisi. Aenean rhoncus venenatis augue nec ullamcorper. Nunc vitae felis venenatis, tincidunt leo vitae, sagittis mauris. Ut turpis nibh, eleifend quis neque a, vulputate suscipit elit. Proin pretium bibendum orci, cursus tempus urna pulvinar a. Ut vehicula suscipit eros ut laoreet. Duis efficitur venenatis odio a porttitor. Nunc porttitor tortor et leo dapibus, nec iaculis lorem tempus.
      
      Donec posuere scelerisque placerat. Etiam id bibendum leo, vel molestie felis. Suspendisse eget convallis erat. Suspendisse auctor odio ac leo convallis, vel dignissim urna rhoncus. Nunc venenatis vehicula nunc ut auctor. Morbi a ante pulvinar, ornare velit a, tempus enim. Pellentesque posuere augue a felis egestas cursus. Ut ut tortor tempor, pharetra nisl quis, aliquam sem. Nulla id condimentum nisl. Nullam varius sollicitudin sapien et commodo. Duis nisl orci, consequat ut cursus in, vulputate et lacus. Nunc ante dui, efficitur et orci et, ultricies suscipit quam. Vestibulum ullamcorper, orci a semper accumsan, nulla dui cursus mauris, at rhoncus lacus orci in sem. In hac habitasse platea dictumst. Mauris convallis commodo risus ac imperdiet. Etiam imperdiet in lectus sed vestibulum.
      
      Proin fringilla diam augue, vitae placerat mi pulvinar ut. Sed auctor vel lacus a convallis. Pellentesque quis dictum tortor. Donec laoreet elementum semper. Nunc rhoncus nisi diam, ac finibus dui consectetur ac. Praesent vitae mauris massa. Praesent imperdiet aliquet odio, a mattis risus. Nullam ipsum tellus, pellentesque vitae elit vel, luctus finibus ligula. Vestibulum condimentum enim vitae dignissim fermentum. Quisque posuere tortor sed ligula tristique sollicitudin.
      
      Curabitur varius, dolor non scelerisque commodo, diam diam tempus nisl, id dapibus magna felis ut nunc. Nam posuere dictum ultricies. Aenean ac tincidunt libero. Curabitur non iaculis ipsum, vitae blandit dui. Cras a enim libero. Morbi molestie imperdiet neque, quis pretium nunc faucibus nec. Maecenas imperdiet tellus vitae orci blandit malesuada nec vitae ipsum. Ut at nisl et tellus tempor lacinia quis eget mi. Curabitur vitae aliquet nisi, eget viverra sapien. Duis et blandit sapien, sed convallis ex.
      `,
  },
];

export const HomeInformation = () => {
  return (
    <div id="globalContainer">
      <img src={info} alt="how-payment" id="image" />
      <div id="homeInfoContainer">
        <h4>Información General</h4>
        {elements.map((item) => (
          <p id="infoDescriptionCard">
            <span>{item.message}</span>
          </p>
        ))}
      </div>
    </div>
  );
};
