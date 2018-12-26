import { h } from 'preact';
import { Link } from 'preact-router';

import '@polymer/paper-button';

import style from './style.css';

export default function() {
  return (
    <header class={style.header}>
      <Link href="/" tabindex="-1" className={style.link}>
        <paper-button className={style.button}>Home</paper-button>
      </Link>

      <Link href="/beat" tabindex="-1" className={style.link}>
        <paper-button className={style.button}>Beat</paper-button>
      </Link>
    </header>
  );
}
