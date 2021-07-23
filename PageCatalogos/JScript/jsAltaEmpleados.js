let g_arrMunicipios = [];
let g_arrayInput = ["idEnviar", "idBorrar", "idLimpiar", "idActualizar"];
let g_arrMunicipiosSedes = [];

$(document).ready(function () {
    
    catGen.catUtility.requestMunicipiosList(onQueryDataMunicipios);
    CatalogUtility.catUtility.disableInput(true, "");
});


function onQueryDataMunicipios(result) {
    

    paramValue = "{param:'nada'}";
    catGen.catUtility.requestMpiosQueAtienden(paramValue, onQueryDataMpiosQueAtienden);
}

function onQueryDataMpiosQueAtienden(result) {
    
    catGen.catUtility.fnCreateListButtonDraggable("idMunicipiosQueAtienden", result, "Municipios que atienden");
    paramValue = "{param1:''}";
    catGen.catUtility.requestGrupoTodosMpiosYsedes(paramValue, onQueryDataGrupoTodosMpiosYsedes);
}

function onQueryDataGrupoTodosMpiosYsedes(result) {
    let tmp = result;

    g_arrMunicipiosSedes = [];//limpiamos el arreglo
    let arrTmp = tmp.split("$");
    let arrTmp2 = [];
    for (let iIndex = 0; arrTmp.length > iIndex; iIndex++) {
        arrTmp2 = arrTmp[iIndex].split("|");
        g_arrMunicipiosSedes.push({ id: arrTmp2[0], n1: arrTmp2[1], d1: arrTmp2[3], r1: arrTmp2[4], idS: arrTmp2[5], c1: arrTmp2[6], t1: arrTmp2[7] });
    }
 }
