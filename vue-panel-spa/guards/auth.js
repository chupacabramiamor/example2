import axios from 'axios';

export default function(to, from, next) {
    (new Promise((resolve, reject) => {
        if (!to.matched.some(record => record.meta.auth)) {
            resolve();
            return;
        }

        axios.get('/rest/panel/user').then(
            response => resolve(response.data),
            error => reject()
        );
    })).then(
        () => { next() },
        () => { next('/login') }
    );
}