export default {
    name: 'dayOff',
    mounted(el) {
        let date = new Date();
        let options = {weekday: 'long'};
        const weekDay = date.toLocaleString("ru", options);
        if((weekDay === 'суббота') || (weekDay === 'воскресенье')) {
            el.style.display = 'none';
        } 
    }
}