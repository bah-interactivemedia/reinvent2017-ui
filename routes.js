import AppContainer from './src/js/containers/App';
import ReportingContainer from './src/js/containers/ReportingContainer';
import routes from './src/routes';

export default function routes2({dispatch}) {

    // construct routes from child modules
    let childRoutes = [];

    // add /reports
    childRoutes[childRoutes.length] = {
        path: '/reports',
        component: ReportingContainer
    };

    // add index route and finalize
    let ret = {
        path: '/',
        component: AppContainer,
        indexRoute: routes({dispatch}).indexRoute,
        childRoutes: childRoutes
    };

    return ret;
}
