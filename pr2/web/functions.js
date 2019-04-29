$(function () {
    initialize();
});

function creacioPunt(nombre, color, xcomp, ycomp, zcomp) {
    var sceneEl = document.querySelector('#punts');
    var boxEl = document.createElement('a-sphere');
    boxEl.setAttribute('id', nombre);
    boxEl.setAttribute('material', {color: color});
    boxEl.setAttribute('position', {x: xcomp, y: ycomp, z: zcomp});
    boxEl.setAttribute('clickable', '');
    boxEl.className = 'clickable';
    sceneEl.appendChild(boxEl);
}

function creacioText(text, xcomp, ycomp, zcomp) {
    var sceneEl = document.querySelector('#punts');
    var boxEl = document.createElement('a-text');
    boxEl.setAttribute('value', text);
    boxEl.setAttribute('text', '');
    boxEl.setAttribute('width', '15');
    boxEl.setAttribute('position', {x: xcomp, y: ycomp, z: zcomp});
    boxEl.setAttribute('rotation', {x: 0.000, y: 180.000, z: 0.000});
    sceneEl.appendChild(boxEl);
}

function initialize() {
    $(window).on('hashchange', function (e) {
        var NodePunts = document.querySelector('#punts');
        while (NodePunts.hasChildNodes()) {
            NodePunts.removeChild(NodePunts.lastChild);
        }
        debugger;

        console.log("Accions a partir del canvi de hash: " + window.location.hash);
        switch (window.location.hash) {
            <!--Configuración des P10-->
            case "#p10":
                document.getElementById("idsrc").src = "https://ltim.uib.es/files/palma360/p10/720.mp4";
                creacioPunt("p18", '#EF2D5E', 45, 1.6, -1);
                creacioPunt("r12b", '#2eef4d', 0, 2, -20);
                creacioPunt("r4b", '#efdf4e', -45, 1.6, -1);
                break;
            case "#r12b":
                document.getElementById("idsrc").src = "https://ltim.uib.es/files/palma360/r12b/720.mp4";
                bollesInfo();
                break;
            case "#p18":
                <!--Aquesta url sera de companys-->
                window.location.href = "https://alumnes-ltim.uib.es/gdie1905/p2/p18/index.html";
                break;
            case "#r4b":
                <!--Aquesta url sera de companys-->
                document.getElementById("idsrc").src = "https://ltim.uib.es/files/palma360/r4b/720.mp4";
                break;
            case "#p32":
                <!--Aquesta url sera de companys-->
                document.getElementById("idsrc").src = "https://ltim.uib.es/files/palma360/p32/720.mp4";
                creacioPunt("p5", '#37c7ef', -3, 0, 40);
                creacioText("p5", -0.800, 0.000, 15);
                creacioPunt("r21a", '#ef2e2c', 10, 2, 0);

                creacioPunt("r20b", '#efdd38', 2, 0, 30);

                break;
            case "#p5":
                <!--Aquesta url sera de companys-->
                document.getElementById("idsrc").src = "https://ltim.uib.es/files/palma360/p5/720.mp4";
                break;
            case "#r21a":
                <!--Aquesta url sera de companys-->
                document.getElementById("idsrc").src = "https://ltim.uib.es/files/palma360/r21a/720.mp4";
                break;
            case "#r20b":

                document.getElementById("idsrc").src = "https://ltim.uib.es/files/palma360/r20b/720.mp4";
                break;

            default:
                console.log("default case del switch");
        }
    });
}

function bollesInfo() {
    AFRAME.registerSystem('hypervideo', {
        tracking: [
            //bolla1
            {
                t: 0,
                lat: 24.40,
                lon: -4.95
            },
            {
                t: 1,
                lat: 32.80,
                lon: -29.25
            },
            {
                t: 2,
                lat: 43.60,
                lon: -58.05
            },
            {
                t: 3,
                lat: 46.40,
                lon: -119.70
            },
            {
                t: 4,
                lat: 24.80,
                lon: -156.15
            },
            //bolla2
            {
                t: 0,
                lat: 0.40,
                lon: 28.35
            },
            {
                t: 1,
                lat: 0.40,
                lon: 22.05
            },
            {
                t: 2,
                lat: -4.00,
                lon: 22.50
            },
            {
                t: 3,
                lat: -6.00,
                lon: 28.80
            },
            {
                t: 4,
                lat: -9.60,
                lon: 69.30
            },
            {
                t: 5,
                lat: -9.20,
                lon: 129.15
            }
        ],
        init: function () {
            const entity = this.entity = document.createElement('a-sphere');
            entity.setAttribute('color', 'red');
            entity.setAttribute('radius', '5');
            entity.setAttribute('position', '0 0 -100');
            this.el.appendChild(entity);
            this.video = document.querySelector('video');
        },
        tick: function () {
            let t = this.video.currentTime;
            // Trobam els trackings t0 i t1, t0.t < t < t1.t.
            let t0, t1;
            for (let i = 0; i < this.tracking.length - 1 && t0 === undefined; i++) {
                // Han d'estar ordenats!
                if (this.tracking[i], t <= t && t < this.tracking[i + 1].t) {
                    t0 = this.tracking[i];
                    t1 = this.tracking[i + 1];
                }
            }
            // Si els hem trobat, hem de mostrar el punt a unes coordenades intermitges
            if (t0 !== undefined) {
                let f = (t - t0.t) / (t1.t - t0.t);
                let lat0 = t0.lat * Math.PI / 180;
                let lon0 = t0.lon * Math.PI / 180;
                let lat1 = t1.lat * Math.PI / 180;
                let lon1 = t1.lon * Math.PI / 180;

                const R = 100;

                let d = Math.acos(Math.cos(lat0) * Math.cos(lat1) * Math.cos(lon1 - lon0) + Math.sin(lat0) * Math.sin(lat1));
                let A = Math.sin((1 - f) * d) / Math.sin(d);
                let B = Math.sin(f * d) / Math.sin(d);
                let x = R * (A * Math.cos(lat0) * Math.sin(lon0) + B * Math.cos(lat1) * Math.sin(lon1));
                let y = R * (A * Math.sin(lat0) + B * Math.sin(lat1));
                let z = -R * (A * Math.cos(lat0) * Math.cos(lon0) + B * Math.cos(lat1) * Math.cos(lon1));
                this.entity.setAttribute('visible', 'true'); // Aixòs'ha de poder optimitzar!
                this.entity.setAttribute('position', {x, y, z});
            } else {
                this.entity.setAttribute('visible', 'false');
            }
        }
    });
}

