<template id="team-detais-tpl" src="./tpl.htm"></template>

<script>
    import axios from 'axios';
    var ModalSimple = require('../ModalSimple/component.vue').default;
    var DateMixin = require('../../../mixins/dates.js').default;

    export default {
        template: '#team-detais-tpl',

        components: { ModalSimple },

        mixins: [ DateMixin ],

        props: [ 'uid' ],

        data: function() {
            return {
                team: null,
                fieldPositions: []
            }
        },

        mounted: function() {
            axios.get('/rest/panel/dirs/positions').then(function(response) {
                this.fieldPositions = response.data;
            }.bind(this));

            this.fetch(this.uid).then(() => {
                this.$refs.modal.show();
            });
        },

        methods: {
            fetch: function(id) {
                this.$refs.modal.lockElement('footer');
                return axios.get('/rest/panel/teams/' + id).then(function(response) {
                    this.$refs.modal.unlockElement('footer');
                    this.team = response.data;
                }.bind(this));
            },

            refresh: function() {
                this.fetch(this.team.id);
            },

            followToTeams() {
                this.$router.push('/teams');
            }
        },

        computed: {
            playerPositions: function() {
                return this.fieldPositions.map(function(item) {
                    item.player = this.team.player_list.find(function(player) {
                        return player.field_position == item.key;
                    });

                    return item;
                }.bind(this));
            }
        }
    }
</script>

<style>
    #field {
        display: grid;
        grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-gap: 1vw;
        border: solid 1px #aaa;
        height: 255px;
        background-image: url('/assets/images/field.png');
        background-size: cover;
    }

    #field > div {
        font-size: 1em;
        padding: 0.2em;
        text-align: center;
        color: #fff;
        font-weight: bold;
        text-shadow: 0px 1px 2px black;
    }

    #field.pos-gk {

    }
</style>