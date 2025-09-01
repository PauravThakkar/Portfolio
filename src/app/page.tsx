import Navbar from "./Components/Navbar";
import Image from "next/image";
import styles from "./styles.module.scss"

export default function Home() {
  return (
    <>
    <div className={`${styles.home} page`}>
      <Navbar>
      </Navbar>
      <div className={styles.homeBanner}></div>
      <div className={styles.dummyContent}>
        This is the dummy content to test the parallax scroll
      </div>
    </div>
    </>
  );
}
