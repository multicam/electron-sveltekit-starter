import App from './app.svelte';
import "./scss/app.scss";

const app = new App({
    target: document.body,
    props: {
        title: 'simple-mind'
    }
});

export default app;
