import Image from "next/image";
import styles from "./contact.module.scss";

const Contact = () => {
  return (
    <div className={styles.wrapper}>
      <div>Form</div>
      <div>
        <Image alt="Contact" src={"/assets/contact.png"} fill />
      </div>
    </div>
  );
};

export default Contact;
