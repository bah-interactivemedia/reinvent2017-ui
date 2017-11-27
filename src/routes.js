import HomePageContainer from './js/containers/HomePageContainer';

// list of ui-navigation specific routes only
export default function routes() {
    return {
        indexRoute: {
            component: HomePageContainer
        }
    };
}
