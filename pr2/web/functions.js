var video = document.getElementById('idsrc');
var player;
var url;

function initialize(){
    window.addEventListener('load', hashchange);
    window.addEventListener('hashchange', hashchange);
}

function creacioPunt(nombre,color,xcomp,ycomp,zcomp) {
    var sceneEl = document.querySelector('#punts');
    var boxEl = document.createElement('a-sphere');
    boxEl.setAttribute('id',nombre);
    boxEl.setAttribute('material', {color: color});
    boxEl.setAttribute('position', {x: xcomp, y:ycomp, z:zcomp});
    boxEl.setAttribute('clickable','');
    boxEl.className = 'clickable';
    sceneEl.appendChild(boxEl);
}

function creacioText(text,xcomp,ycomp,zcomp,xrot,yrot,zrot){
    var sceneEl = document.querySelector('#punts');
    var boxEl = document.createElement('a-text');
    boxEl.setAttribute('value',text );
    boxEl.setAttribute('text','' );
    boxEl.setAttribute('width','15' );
    boxEl.setAttribute('position', {x: xcomp, y:ycomp, z:zcomp});
    boxEl.setAttribute('rotation', {x: xrot, y:yrot, z:zrot});
    sceneEl.appendChild(boxEl);
}

function crearP10() {
    creacioPunt("p18",'#109bef',45,1.6,-1);
    creacioText("p18",25,0.6,-1,0,-90,0);
    creacioPunt("r12b",'#109bef',0,2,-20);
    creacioText("r12b",-0.5,1,-10,0,0,0);
    creacioPunt("r4b",'#109bef',-45,1.6,-1);
    creacioText("r4b",-15,0.6,0,0,90,0);
}
function crearP32() {
    creacioPunt("p5",'#109bef',-3,0,40);
    creacioText("p5",-1,0.000,15,0,180,0);
    creacioPunt("r21a",'#109bef',10,2,0);
    creacioText("r21a",10,0.5,-1,0,-90,0);
}
function hashchange() {
    var NodePunts = document.querySelector('#punts');
    while(NodePunts.hasChildNodes()){
        NodePunts.removeChild(NodePunts.lastChild);
    }

    console.log("Accions a partir del canvi de hash: "+ window.location.hash);
    switch(window.location.hash) {
        <!--Configuración des P10-->
        case "#p10":
            url = "https://ltim.uib.es/files/palma360/p10/dash.mpd";
            crearP10();
            break;
        case "#r12b":
            url = "https://ltim.uib.es/files/palma360/r12b/dash.mpd";
            bollesInfo();
            break;
        case "#p18":
            <!--Aquesta url sera de companys-->
            window.location.href = "https://alumnes-ltim.uib.es/gdie1905/p2/p18/index.html";
            break;
        case "#r4b":
            <!--Aquesta url sera de companys-->
            window.location.href = "https://alumnes-ltim.uib.es/gdie1903/#r4b";
            break;
        case "#p32":
            url ="https://ltim.uib.es/files/palma360/p32/dash.mpd";
            crearP32();
            break;
        case "#p5":
            <!--Aquesta url sera de companys-->
            url = "https://ltim.uib.es/files/palma360/p5/dash.mpd";
            break;
        case "#r21a":
            <!--Aquesta url sera de companys-->
            window.location.href = "https://alumnes-ltim.uib.es/gdie1912/P2b/#r21a";
            break;
        case "#r20b":
            url = "https://ltim.uib.es/files/palma360/r20b/dash.mpd";
            break;
        default:
            url = "https://ltim.uib.es/files/palma360/r12a/dash.mpd";
            console.log("default case del switch");
    }
    if (player) {
        // Si el player ha estat creat
        player.reset();
        player.attachView(video);
        player.attachSource(url);
    } else {
        // Si no, el cream ara
        player = dashjs.MediaPlayer().create();
        player.initialize(video, url, true);
    }
}

function redireccio_final(){
    switch (window.location.hash) {
        case "#r12b":
            window.location.href="https://alumnes-ltim.uib.es/gdie1911/360/#p20";
            break;
        case "#r12a":
            window.location.hash= "#p10";
            break;
        case "#r20a":
            window.location.href="https://alumnes-ltim.uib.es//gdie1912/P2b/#p32";
            break;
    }
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

