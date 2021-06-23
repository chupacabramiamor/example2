import Vue from 'vue';
import VueRouter from 'vue-router';
import AuthGuard from './guards/auth.js';
import LoginPageComponent from './views/pages/login.vue';
import HomePageComponent from './views/pages/home.vue';
import ApplicantsPageComponent from './views/pages/applicants.vue';
import TeamsPageComponent from './views/pages/teams.vue';
import TeamDetailsPageComponent from './views/pages/team-details.vue';

Vue.use(VueRouter);

var router = new VueRouter({
    routes: [
        { path: '/', component: HomePageComponent, meta: { auth: true, nav: 'home' } },
        { path: '/login', component: LoginPageComponent, meta: { layout: 'Login' } },
        { path: '/applicants', component: ApplicantsPageComponent, meta: { auth: true, nav: 'applicants' } },
        { path: '/teams/:id', component: TeamDetailsPageComponent, meta: { auth: true, nav: 'teams' } },
        { path: '/teams', component: TeamsPageComponent, meta: { auth: true, nav: 'teams' } },
    ],

    // mode: 'history'
});

router.beforeEach(AuthGuard);

export default router;