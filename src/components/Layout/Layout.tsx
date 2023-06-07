import styles from '../../../styles/Layout.module.css'
import { FCC } from '../../types/FCC'
import { Head } from '../Head/Head'

export const Layout: FCC = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head />
      <main className={styles.main}>{children}</main>
    </div>
  )
}
