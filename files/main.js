new Vue({
    el: "#app",
    data() {
        return {
            notifi: [],
        }
    },
    mounted() {
        window.addN = this.createNotifi
        try {
            mp.events.add("addNotifi", this.createNotifi);
        } catch (e) {
        }

    },
    methods: {
        createNotifi(type, time, message, title = "Уведомление") {
            let n = this.notifi.find(_el => _el.message === message);
            if (n) return n.gsap.restart();
            let notifi = this.notifi[this.notifi.push({type, title, message, loading: 100}) - 1];
            notifi.gsap = gsap.to(notifi, {
                duration: (time / 1000) + 0.5,
                loading: 0,
                onComplete: () => {
                    let ind = this.notifi.indexOf(notifi);
                    if (ind !== -1) this.notifi.splice(ind, 1);
                }
            })
        }
    },
    computed: {},
    watch: {}
});