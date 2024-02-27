import Image from "next/image";
import styles from "./contact.module.scss";

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <form className={styles.form}>
          <input type="text" placeholder="Name and surname" />
          <input type="email" placeholder="Email addresses" />
          <input type="tel" placeholder="Phone number (optional)" />
          <textarea
            name="text"
            cols={30}
            rows={20}
            placeholder="Message"
          ></textarea>
          <button>Send</button>
        </form>
      </div>
      <>
        <Image
          className={styles.item}
          alt="Contact"
          src={"/assets/contact.png"}
          width={500}
          height={500}
        />
      </>
    </div>
  );
};

export default Contact;
