import { h, Component } from 'preact';
import AsyncRoute from 'preact-async-route';
import Router from 'preact-router';
import ReactGA from 'react-ga';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import style from './style.css';

if (module.hot) {
  require('preact/debug'); // eslint-disable-line global-require
}

export default class App extends Component {
  componentWillMount() {
    document.addEventListener('scroll', this.scrollListener);

    if (navigator.doNotTrack !== '1') {
      ReactGA.initialize(GOOGLE_ANALYTICS_CODE); // eslint-disable-line no-undef
      ReactGA.set({ anonymizeIp: true });
    }
  }

  handleRoute = event => {
    navigator.doNotTrack !== '1' && ReactGA.pageview(event.url); // eslint-disable-line no-unused-expressions
  };

  scrollListener = () => {
    const scrollProgress = window.scrollY / window.innerHeight;

    this.wrapper.style.setProperty('--scale-factor', `${-100 * (scrollProgress - 1)}px`);
    this.wrapper.style.setProperty('--scroll-progress', scrollProgress);
  };

  render() {
    return (
      <div class={style.body}>
        <div class={style.wrapper}>
          <div class={style.header}>
            <Header />
          </div>
          <main class={style.content}>
            <Router onChange={this.handleRoute}>
              <AsyncRoute
                path="/"
                getComponent={() => import('../../routes/Home/Home').then(module => module.default)}
              />
              <AsyncRoute
                path="/imprint"
                getComponent={() =>
                  import('../../routes/Imprint/Imprint').then(module => module.default)
                }
              />
            </Router>
          </main>
          <div class={style.footer}>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}
