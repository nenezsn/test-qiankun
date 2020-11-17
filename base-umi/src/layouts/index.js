import styles from './index.css';
import Link from 'umi/link'

function BasicLayout(props) {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>hello umi-plugin-qiankun</h1>
      <Link to='/'>base</Link>
      <Link to='/app1'>app1</Link>
      <Link to='/app2'>app2</Link>
      {props.children}
      <div id='child-app'></div>
    </div>
  );
}

export default BasicLayout;
