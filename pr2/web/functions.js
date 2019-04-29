$(function () {
    initialize();
});

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

function initialize(){
    $(window).on('hashchange', function (e) {
        var NodePunts = document.querySelector('#punts');
        while(NodePunts.hasChildNodes()){
            NodePunts.removeChild(NodePunts.lastChild);
        }
        debugger;

        console.log("Accions a partir del canvi de hash: "+ window.location.hash);
        switch(window.location.hash) {
            <!--Configuración des P10-->
            case "#p10":
                document.getElementById("idsrc").src="https://ltim.uib.es/files/palma360/p10/720.mp4";
                creacioPunt("p18",'#109bef',45,1.6,-1);
                creacioText("p18",25,0.6,-1,0,-90,0);
                creacioPunt("r12b",'#109bef',0,2,-20);
                creacioText("r12b",-0.5,1,-10,0,0,0);
                creacioPunt("r4b",'#109bef',-45,1.6,-1);
                creacioText("r4b",-15,0.6,0,0,90,0);
                break;
            case "#r12b":
                document.getElementById("idsrc").src="https://ltim.uib.es/files/palma360/r12b/720.mp4";
                break;
            case "#p18":
                <!--Aquesta url sera de companys-->
                window.location.href="https://alumnes-ltim.uib.es/gdie1905/p2/p18/index.html";
                break;
            case "#r4b":
                <!--Aquesta url sera de companys-->
                document.getElementById("idsrc").src="https://ltim.uib.es/files/palma360/r4b/720.mp4";
                break;
            case "#p32":
                document.getElementById("idsrc").src="https://ltim.uib.es/files/palma360/p32/720.mp4";
                creacioPunt("p5",'#109bef',-3,0,40);
                creacioText("p5",-0.800,0.000,15,0,180,0);
                creacioPunt("r21a",'#109bef',10,2,0);
                creacioText("r21a",10,0.5,-1,0,-90,0);
                break;
            case "#p5":
                <!--Aquesta url sera de companys-->
                document.getElementById("idsrc").src="https://ltim.uib.es/files/palma360/p5/720.mp4";
                break;
            case "#r21a":
                <!--Aquesta url sera de companys-->
                document.getElementById("idsrc").src="https://ltim.uib.es/files/palma360/r21a/720.mp4";
                break;
            case "#r20b":

                document.getElementById("idsrc").src="https://ltim.uib.es/files/palma360/r20b/720.mp4";
                break;

            default:
                console.log("default case del switch");
        }
    });
}

