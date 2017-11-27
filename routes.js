import AppContainer from './src/js/containers/App';
import routes from './src/routes';

export default function routes2({dispatch}) {
    // add index route and finalize
    let ret = {
        path: '/',
        component: AppContainer,
        indexRoute: routes({dispatch}).indexRoute,
        childRoutes: []
    };

    return ret;
}
