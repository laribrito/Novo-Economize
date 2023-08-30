import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

import Logo from '@/../public/logo.png'

export default function Home() {
  return (<>
    <div className={styles.mainContent}>
      <h1>
        <span>Olá! Agora sua meta é</span><br/>
        Economize!
      </h1>
    </div>

    <div className={styles.areaLogin}>
      <form>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" />

        <label htmlFor="password">Senha:</label>
        <input type="password" id="password"/>

        <button type='submit'>Entrar</button>
      </form>
      <Link href={"/cadastrar"}>Cadastre-se</Link>
    </div>

    <Image src={Logo} className={styles.logoHome} alt="Logo do Economize!" />
    </>
  )
}
