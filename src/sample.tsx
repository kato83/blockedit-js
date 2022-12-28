import type { Component } from 'solid-js';
import { render } from 'solid-js/web';

export const App: Component = () => <div>TEST</div>


export const init = () => render(() => <App />, document.getElementById('root'));
