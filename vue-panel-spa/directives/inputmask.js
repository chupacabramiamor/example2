var Inputmask = require('inputmask').default;

export default {

    bind: function (el, binding) {
        (new Inputmask(binding.value)).mask(el);
    }
}