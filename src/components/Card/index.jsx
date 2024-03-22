import posterImg from "../../assets/arrival.jpg";
import styles from "./styles.module.css";

export default function Card() {
  return (
    <div className={styles.container}>
      <img className={styles.poster} src={posterImg} alt="Star Wars poster" />
      <div>
        <h2 className={styles.title}>Pôster do filme Arrival</h2>
        <p className={styles.description}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, aliquid
          ea! Numquam, est facere ipsam, quod ab ipsum eos distinctio, voluptas
          sapiente dolores placeat. Non aliquam magnam porro incidunt ratione?
          Non dolorem excepturi repellat maiores harum corporis placeat,
          dignissimos nesciunt voluptatem fugiat quas itaque totam nobis
          tenetur, ipsam, cumque perferendis beatae ratione animi magni quae.
        </p>
        <button className={styles.button}>Comprar agora</button>
      </div>
    </div>
  );
}
