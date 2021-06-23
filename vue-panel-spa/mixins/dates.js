import moment from 'moment';

export default {
    filters: {
        toDate: function(value) {
            return value ? moment(value).format('DD.MM.YYYY') : null
        },

        toTime: function(value) {
            return value ? moment(value).format('H:mm') : null;
        },

        toDateTime: function(value) {
            return value ? moment(value).format('DD.MM.YYYY H:mm') : null;
        },
    }
}