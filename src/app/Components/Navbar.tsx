'use client';

import style from "./Styles.module.scss"
import { useRouter } from 'next/navigation';
export default function Navbar() {
  const router = useRouter();
  return (
    <div className={style.navbar}>
      <div className={style.navbarCenter}>  
        <a onClick={() => {router.push("/")}}>Portfolio</a>
        <a onClick={() => {router.push("/resume")}}>Resume</a>
        <a onClick={() => {router.push("/contact")}}>Contact</a>
      </div>
    </div>
  );
}