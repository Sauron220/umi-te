import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import en_US from 'antd/lib/locale-provider/en_US';
import id_ID from 'antd/lib/locale-provider/id_ID';
import zh_cn from '../locales/zh_CN'
import styles from './index.css';

const ch = { ...zh_CN, ...zh_cn }

function BasicLayout(props) {
  return (
    <LocaleProvider locale={ch}>
      <div className={styles.normal}>
        <h1 className={styles.title}>Yay! Welcome to umi!</h1>
        {props.children}
      </div>
    </LocaleProvider>
  );
}

export default BasicLayout;
