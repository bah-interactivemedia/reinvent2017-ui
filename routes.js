import AppContainer from './src/js/containers/App';
import ReportingContainer from './src/js/containers/ReportingContainer';
import BodyCompositionContainer from './src/js/containers/BodyCompositionContainer';
import MileRunContainer from './src/js/containers/MileRunContainer';
import CurlUpsContainer from './src/js/containers/CurlUpsContainer';

import routes from './src/routes';

export default function routes2({dispatch}) {

    // construct routes from child modules
    let childRoutes = [];

    // add /reports
    childRoutes[childRoutes.length] = {
        path: '/reports',
        component: ReportingContainer
    };

    // add Body Composition
    childRoutes[childRoutes.length] = {
        path: '/bodyComposition',
        component: BodyCompositionContainer
    };

    // add Mile
    childRoutes[childRoutes.length] = {
        path: '/mileRun',
        component: MileRunContainer
    };

    // add Curlups
    childRoutes[childRoutes.length] = {
        path: '/curlUps',
        component: CurlUpsContainer
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
