<template src="./tpl.htm" id="pagination-tpl"></template>

<script type="text/javascript">
    module.exports = {
        template: '#pagination-tpl',

        props: [ 'value', 'total', 'perpage', 'siblings', 'lSiblings', 'rSiblings', 'count' ],

        data: function() {
            return {
                pages: [],
                TYPE_SEPARATOR: 1,
                TYPE_PAGE: 2,
                currentPage: this.value
            };
        },

        mounted: function() {
            this.init();
        },

        methods: {
            init: function() {
                this.currentPage = this.value;
                if (this.total > 0) {
                    this.pages = [];

                    for (var i = 1; i <= this.getPagesCount; i++) {
                        this.pages.push(i);
                    }
                }
            },
            forward: function() {
                if (this.count !== undefined) {
                    if (this.count < this.perpage) {
                        return;
                    }
                }

                this.jump(this.currentPage + 1);
            },
            backward: function() {
                this.jump(this.currentPage - 1);
            },
            jump: function(page) {
                page = page || 1;

                if (page < 1 || page > this.getPagesCount) {
                    return;
                }

                this.currentPage = page;
                this.$emit('input', page);
            }
        },

        computed: {
            getPagesCount: function() {
                return Math.floor(this.total / this.perpage) + 1;
            },

            getPagesItems: function() {
                var generateItem = function(type, number, caption) {
                    return {
                        number: number,
                        caption: caption || number,
                        type: type
                    };
                };

                var rSiblings = this.rSiblings || 1;
                var lSiblings = this.lSiblings || 1;
                var result = [];

                if (this.pages.length <= 1) {
                    return result;
                }

                for (var i = this.currentPage - lSiblings; i <= this.currentPage + rSiblings; i++) {
                    if (i > 1 && i < this.pages.length) {
                        result.push(generateItem(this.TYPE_PAGE, i));
                    }
                }

                if (this.getPagesCount > rSiblings + 2) {
                    if (this.currentPage - lSiblings > 2) {
                        result.unshift(generateItem(this.TYPE_SEPARATOR, '...'));
                    }

                    if (this.currentPage + rSiblings < this.pages.length) {
                        result.push(generateItem(this.TYPE_SEPARATOR, '...'));
                    }
                }

                result.unshift(generateItem(this.TYPE_PAGE, 1));
                result.push(generateItem(this.TYPE_PAGE, this.pages.length));

                return result;
            },
        },

        watch: {
            total: function(value) {
                if (value > 0) {
                    this.init();
                }
            }
        }
    }
</script>