/* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */
import { h } from 'preact';

import style from './style.css';

export default function() {
  return (
    <div class={style.wrapper}>
      <div class={style.article}>
        <h2>Willkommen bei Lopha!</h2>
        <p>Wir sind Musiker, reden über Medizin und machen noch eine Menge mehr.</p>
      </div>
    </div>
  );
}
