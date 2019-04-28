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
function creacioText(text,xcomp,ycomp,zcomp){
    var sceneEl = document.querySelector('#punts');
    var boxEl = document.createElement('a-text');
    boxEl.setAttribute('id',text);
    boxEl.setAttribute('width',15);
    boxEl.setAttribute('rotation',{x:0,y:90,z:-2});
    boxEl.setAttribute('value',text);
    boxEl.setAttribute('position', {x: xcomp, y:ycomp, z:zcomp});
    boxEl.setAttribute('text','');
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
                creacioPunt("p18",'#EF2D5E',45,1.6,-1);
                creacioPunt("r12b",'#2eef4d',0,2,-20);
                creacioPunt("r4b",'#efdf4e',-45,1.6,-1);
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
                <!--Aquesta url sera de companys-->
                document.getElementById("idsrc").src="https://ltim.uib.es/files/palma360/p32/720.mp4";

                creacioText("p5",-3,-1,40);
                creacioPunt("r21a",'#ef2e2c',10,2,0);
                creacioPunt("r20b",'#efdd38',2,0,30);

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

