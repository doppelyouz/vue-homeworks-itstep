export default {
    name: 'addClass',
    mounted(el, bindings) {
        el.classList.add(bindings.value)
    }
}