export let particlesParameters = {
    "particles": {
        "number": {
            "value": 360,
            "density": {
                "enable": false
            }
        },
        "size": {
            "value": 5,
            "random": true
        },
        "move": {
            "direction": "right",
            "out_mode": "out"
        },
        "line_linked": {
            "enable": true
        }
    },
    "interactivity": {
        "events": {
            "onclick": {
                "enable": true,
                "mode": "add"
            }
        },
        "modes": {
            "remove": {
                "particles_nb": 100
            }
        }
    }
}
