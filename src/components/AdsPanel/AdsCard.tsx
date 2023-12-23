import styles from "./styles.module.css";

export interface ICardProps {
  title?: string;
  imgUrl?: string;
  price?: number;
  description?: string;
  urlAvito?: string;
  date?: string;
  city?: string;
  region?: string;
  averagePrice?: number;
}

const ProductCard = (props: ICardProps) => {
  const price = props.price?.toLocaleString("ru");
  const averagePrice = (props.price && props.averagePrice) && ((props.price / props.averagePrice - 1) * 100).toFixed(2) + "%"
  return (
    <div className={styles.productCard}>
      <div className={styles.productInfo}>
        <img
          className={styles.productImg}
          src={props.imgUrl}
          alt={props.title}
        />
        <h3 className={styles.productTitle}>{props.title}</h3>
        <span className={styles.productPrice}>{price} ₽</span>
        <span className={styles.productAveragePrice}>Отклонение от средней цены: {averagePrice}</span>
        <p className={styles.productDescription}>{props.description}</p>
        <span className={styles.productCity}>{props.city}</span>
        <span className={styles.productRegion}>{props.region}</span>        
        <a href={props.urlAvito} target="_blank" className={styles.productUrl}>
          Ссылка на Avito
        </a>
        <p className={styles.productDate}>Дата публикации: {props.date}</p>
      </div>
    </div>
  );
};

export default ProductCard;
