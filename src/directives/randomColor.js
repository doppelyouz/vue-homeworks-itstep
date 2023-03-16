
export default {
    name: 'randomColor',
    updated(el) {
        el.style.background = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase();
    }
}