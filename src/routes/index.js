//Layouts
import { HeaderOnly } from '~/components/Layout';

// Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';
import Setting from '~/pages/Setting';

// Public Routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/search', component: Search },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: null },
    { path: '/setting', component: Setting, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
