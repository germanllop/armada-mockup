var app = new Vue({
    el: '#app',
    order: 1,

    data() {
        return {
            message: 'Hello Vue!',
            lobby: [{
                    name: "Liga",
                    id: 1,
                    rol: '/ Lobby Leader',
                    profile: 'img/profile.jpg'
                },
                {
                    name: "PeruCo",
                    id: 2,
                    rol: '',
                    profile: 'img/profiles/profile2.jpg'
                },
                {
                    name: "Blas el Fenix",
                    id: 3,
                    rol: '',
                    profile: 'img/profiles/profile3.jpg'
                },
                {
                    name: "Chicom Reborn The Fenix",
                    id: 4,
                    rol: '',
                    profile: 'img/profiles/profile4.jpg'
                },
                {
                    name: "Fenix El Apoyo Moral",
                    id: 5,
                    rol: '',
                    profile: 'img/profiles/profile5.jpg'
                },
                {
                    name: "Reborn",
                    id: 6,
                    rol: '',
                    profile: 'img/profiles/profile6.jpg'
                },
                {
                    name: "Eduv1ce¨",
                    id: 7,
                    rol: '',
                    profile: 'img/profiles/profile7.jpg'
                },
                {
                    name: "BenJito Bebe",
                    id: 8,
                    rol: '',
                    profile: 'img/profiles/profile8.jpg'
                },
                {
                    name: "Gamble * CORSAIR",
                    id: 9,
                    rol: '',
                    profile: 'img/profiles/profile9.jpg'
                },
                {
                    name: "SOLO",
                    id: 10,
                    rol: '',
                    profile: 'img/profiles/profile10.jpg'
                },
                {
                    name: "Comi Reborn",
                    id: 11,
                    rol: '',
                    profile: 'img/profiles/profile11.jpg'
                },
                {
                    name: "Tuck",
                    id: 12,
                    rol: '',
                    profile: 'img/profiles/profile12.jpg'
                },
            ],
            ct: [                
            ],
            terro: [
                
            ]
        }
    },
    methods: {
        checkMove: function(evt){
            //window.console.log(evt);
            console.log(evt);
            if(evt.to.id!='lobby' && evt.to.id!=evt.from.id){
                return (evt.to.childElementCount<6);
            }
            
        },
        log: function (evt) {
            //window.console.log(evt);
        }
    }
})