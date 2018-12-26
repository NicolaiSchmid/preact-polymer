import { h, render } from 'preact';

import App from './components/App/App';

import './style/index.css';
import './style/fonts.css';
import './style/shared.css';

render(<App />, document.querySelector('.render'));
