import PropTypes from 'prop-types';

const Painting = (props) => {
    const { 
        url, 
        title, 
        authorLink, 
        authorTag, 
        price,
        quantity 
    } = props;
    return (
    <div>
      <img src={url} alt={title} width="480"/>
      <h2>{title}</h2>
      <p>Автор: <a href={authorLink}>{authorTag}</a></p>
      <p>Ціна {price} кредитів</p>
      <p>Доступність: {quantity}шт {quantity >= 10 ? "Є в наявності" : "Закінчується!"}</p>
      <button>До кошика</button>
    </div>
  )};


  Painting.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    authorLink: PropTypes.string.isRequired,
    authorTag: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  };

  export default Painting;