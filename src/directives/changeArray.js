export default {
    name: 'changeArray',
    mounted(el, bindings) {
        if(bindings.modifiers.reverse) {
            const reverse = bindings.value.reverse();
            console.log(reverse);
            return reverse;
        } else if(bindings.modifiers.random) {
            const random = bindings.value.sort(() => Math.random() - 0.5);
            console.log(random);
            return random
        }
    }
}