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
            {
                t: 0,lat: 15.60, lon: 8.55
            },
            {
                t: 1,lat: 20.40, lon: 2.70
            },
            {
                t: 2,lat: 32.00, lon: -3.60
            },
            {
                t: 3,lat: 66.00, lon: -32.85
            },
            {
                t: 4,lat: 49.20, lon: -163.80
            },
            {
                t: 5,lat: 12.00, lon: -7.20
            },
            {
                t: 6,lat: 18.80, lon: -10.80
            },
            {
                t: 7,lat: 36.40, lon: -21.60
            },
            {
                t: 8,lat: 56.00, lon: -129.60
            },
            {
                t: 9,lat: 24.40, lon: -166.05
            },
            {
                t: 11,lat: 17.60, lon: -4.05
            },
            {
                t: 12,lat: 27.60, lon: -5.85
            },
            {
                t: 13,lat: 64.00, lon: -16.65
            },
            {
                t: 14,lat: 44.80, lon: -172.80
            },
            {
                t: 15,lat: 14.40, lon: -9.45
            },
            {
                t: 16,lat: 24.80, lon: -11.70
            },
            {
                t: 17,lat: 49.20, lon: -30.60
            },
            {
                t: 18,lat: 56.80, lon: -148.05
            },
            {
                t: 20,lat: 10.00, lon: -6.75
            },
            {
                t: 21,lat: 16.80, lon: -9.90
            },
            {
                t: 22,lat: 36.00, lon: -19.35
            },
            {
                t: 23,lat: 53.20, lon: -140.85
            },
            {
                t: 24,lat: 10.00, lon: -3.60
            },
            {
                t: 25,lat: 18.00, lon: -5.85
            },
            {
                t: 26,lat: 42.00, lon: -19.80
            },
            {
                t: 27,lat: 56.40, lon: -146.70
            },
            {
                t: 29,lat: 16.40, lon: 16.20
            },
            {
                t: 30,lat: 32.80, lon: 31.95
            },
            {
                t: 31,lat: 45.60, lon: 122.40
            },
            {
                t: 32,lat: 15.20, lon: -8.55
            },
            {
                t: 33,lat: 24.80, lon: -12.15
            },
            {
                t: 34,lat: 37.20, lon: -23.85
            },
            {
                t: 35,lat: 55.60, lon: -42.30
            },
            {
                t: 36,lat: 67.20, lon: -96.30
            },
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

