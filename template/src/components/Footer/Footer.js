import { h } from 'preact';
import { Link } from 'preact-router/match';

import style from './style.css';

export default () => (
  <footer class={style.footer}>
    <div class={style.child}>Lopha</div>
    <Link href="/imprint" class={style.child}>
      Impressum & Datenschutz
    </Link>
  </footer>
);
