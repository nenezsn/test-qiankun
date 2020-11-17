import styles from './index.css';
import Link from 'umi/link'
export default function() {
  return (
    <div className={styles.normal}>
        <Link to='/test'>to test</Link>
        this is app1
    </div>
  );
}
