<template>
    <div class="row row-cards">
        <div class="col-sm-12 col-lg-6">
            <stat-counter ref="statCounterRegs" :value="registrationCount" caption="Total Registrations"></stat-counter>
        </div>
        <div class="col-sm-12 col-lg-6">
            <stat-counter ref="statCounterTeams" :value="teamCount" caption="Teams"></stat-counter>
        </div>
        <div class="col-sm-12 col-lg-6">
            <stat-counter ref="statCounterPlayers" :value="playerCount" caption="Accepted Players"></stat-counter>
        </div>
        <div class="col-sm-12 col-lg-6">
            <stat-counter ref="statCounterRevenues" :value="revenueCount" value-sign="$" caption="Revenues"></stat-counter>
        </div>
    </div>
</template>

<script>
    import StatCounter from '../components/StatCardCounter/component.vue';
    import axios from 'axios';

    export default {
        components: { StatCounter },

        data: function () {
            return {
                registrationCount: 0,
                teamCount: 0,
                playerCount: 0,
                revenueCount: 0,
            };
        },

        mounted: function () {
            this.fetchRegistrationsCounter();
            this.fetchTeamsCounter();
            this.fetchPlayersCounter();
            this.fetchRevenuesCounter();
        },

        methods: {
            fetchRegistrationsCounter: function() {
                this.$refs.statCounterRegs.lockElement('card');

                axios.get('/rest/panel/stat/registrations').then(function(response) {
                    this.$refs.statCounterRegs.unlockElement('card');
                    this.registrationCount = response.data.primaryValue;
                }.bind(this));
            },

            fetchTeamsCounter: function() {
                this.$refs.statCounterTeams.lockElement('card');

                axios.get('/rest/panel/stat/teams').then(function(response) {
                    this.$refs.statCounterTeams.unlockElement('card');
                    this.teamCount = response.data.primaryValue;
                }.bind(this));
            },

            fetchPlayersCounter: function() {
                this.$refs.statCounterPlayers.lockElement('card');

                axios.get('/rest/panel/stat/players').then(function(response) {
                    this.$refs.statCounterPlayers.unlockElement('card');
                    this.playerCount = response.data.primaryValue;
                }.bind(this));
            },

            fetchRevenuesCounter: function() {
                this.$refs.statCounterRevenues.lockElement('card');

                axios.get('/rest/panel/stat/revenues').then(function(response) {
                    this.$refs.statCounterRevenues.unlockElement('card');
                    this.revenueCount = response.data.primaryValue;
                }.bind(this));
            },

        }
    }
</script>