let g_arrayInput = ["idEnviar", "idBorrar", "idCancelar", "idActualizar"];
let g_enviarOpcion = "";
//Funcion inicial de la pagina
$(document).ready(function () {
    catGen.catUtility.requestMunicipiosList(onQueryDataMunicipios);
    catGen.catUtility.disableInput(true, "");
});

$(function () {
    $("#includeModal").load("modal.html");
});


function allowDrop(ev) {
    
    ev.preventDefault();
}

function dragStart(ev) {
    
    ev.dataTransfer.setData("text", ev.target.id);
}

function dropAtendidos(ev) {
    ev.preventDefault();
    if (document.getElementById("idAtiende").children.length == 2) {
        document.getElementById("formMunicipiosQueAtienden").classList.add("was-validated");
        document.getElementById("idInputSedeNameMessage").innerHTML = "Campo requerido";
    } else {
        
        var data = ev.dataTransfer.getData("text");
        let municipio = data.split("-")[1];
        let itemBorrar = document.getElementById("idX-" + municipio);
        itemBorrar.hidden = false;
        document.getElementById("idAtendidos").appendChild(document.getElementById(data));
        
        document.getElementById("idNumSinAtMunicipios").innerHTML = document.getElementById("idMpiosSinAtt0").children.length;
    }

}

function dropAtiende(ev) {
    
    let strText = ev.dataTransfer.getData("text");
    let IdAtiende;
    
    if (document.getElementById("idAtiende").children.length >= 3) {
        document.getElementById("formMunicipiosQueAtienden").classList.add("was-validated");
        document.getElementById("idInputSedeNameMessage").innerHTML = "Limpie las cajas para arrastrar otro municipio";
        return;
    }
    
    if (strText.indexOf("itemAcoor") != -1) {//caso de todo un grupo
        catGen.catUtility.disableInput(false, "idBorrar,idCancelar,idActualizar");
        document.getElementById("formMunicipiosQueAtienden").classList.remove("was-validated");

        if (document.getElementById(strText).children.length && document.getElementById(strText).children[0].children.length) {
            let bttonCollase = document.getElementById(document.getElementById(strText).children[0].children[0].id);
            if (bttonCollase.className.indexOf("collapsed") == -1)
                catGen.catUtility.eventFire(bttonCollase, "click");
            bttonCollase.disabled = true;
        }
        IdAtiende = strText.split("-")[1];
        let listElement = document.getElementById("id0list-" + IdAtiende);
        let municipio;
        
        for (let iIndex = 0; listElement.children.length ; ) {
            municipio = listElement.children[iIndex].id.split("-")[1]
            let itemBorrar = document.getElementById("id0XAcoor-" + municipio);
            if (IdAtiende != municipio) {
                document.getElementById("idAtendidos").appendChild(listElement.children[iIndex]);
                itemBorrar.hidden = false;
            }
            else {
                document.getElementById("idAtiende").appendChild(listElement.children[iIndex]);
                itemBorrar.hidden = false;
            }
        }
        return;
    }
    
    if (document.getElementById("idAtiende").children.length < 3) {
        catGen.catUtility.disableInput(false, "idEnviar,idCancelar");
        document.getElementById("formMunicipiosQueAtienden").classList.remove("was-validated");
        let municipio = strText.split("-")[1];
        
        let itemBorrar = document.getElementById("idX-" + municipio);
        itemBorrar.hidden = false;

        document.getElementById("idAtiende").appendChild(document.getElementById(strText));
        document.getElementById("idNumSinAtMunicipios").innerHTML = document.getElementById("idMpiosSinAtt0").children.length;

    } else {
        alert("Solo se permite un municipio que atiende");//xxx
    }
}
function onCancelarMunicipioAtiende(event) {
    let arr = [];
    let arr2 = [];
    let itemBorrar;
    catGen.catUtility.disableInput(true, "");
    document.getElementById("formMunicipiosQueAtienden").classList.remove("was-validated");
    if (!document.getElementById("idAtiende").children.length>1)
        return;
    
    if (document.getElementById("idAtiende").children[2].id.indexOf("SinAt") != -1) {
        //lado izq
        let el = document.getElementById("idAtendidos");
        let arrayId = [];
        let municipio;
        let itemBorrar;
        if (el.children.length) {
            for (let iIndex = 0; el.children.length > iIndex; iIndex++) {
                if (el.children[iIndex].id.length) {
                    municipio = el.children[iIndex].id.split("-")[1];
                    itemBorrar = document.getElementById("idX-" + municipio);
                    itemBorrar.hidden = true;
                    arrayId.push(el.children[iIndex].id);
                }
            }
        }

        for (let jIndex = 0; arrayId.length > jIndex; jIndex++) {
            document.getElementById("idMpiosSinAtt0").appendChild(document.getElementById(arrayId[jIndex]));
        }
        municipio = document.getElementById("idAtiende").children[2].id.split("-")[1];
        itemBorrar = document.getElementById("idX-" + municipio);
        itemBorrar.hidden = true;
        document.getElementById("idMpiosSinAtt0").appendChild(document.getElementById(document.getElementById("idAtiende").children[2].id));
    
        return //caso de lista sin atencion
    }
    
    //habilto el acoordeon del municipio
    let el = document.getElementById("idAtiende");
    let buttonAcor = "id0Button-" + el.children[2].id.split("-")[1];
    document.getElementById(buttonAcor).disabled = false;

    for (let iIndex = 0; document.getElementById("idAtiende").children.length > iIndex; iIndex++) {
        if (document.getElementById("idAtiende").children[iIndex].id) {
            arr = document.getElementById("idAtiende").children[iIndex].id.split("-");
            itemBorrar = document.getElementById("id0XAcoor-" + arr[1] );
            itemBorrar.hidden = true;
            document.getElementById("id0list-"+arr[1]).appendChild(document.getElementById("idAtiende").children[iIndex]);
        }
        
    }

    for (let jIndex = 0; document.getElementById("idAtendidos").children.length; jIndex++) {
        if (document.getElementById("idAtendidos").children[jIndex].id) {
            arr2 = document.getElementById("idAtendidos").children[jIndex].id.split("-");
            itemBorrar = document.getElementById("id0XAcoor-" + arr2[1]);
            itemBorrar.hidden = true;
            document.getElementById("id0list-" + arr[1]).appendChild(document.getElementById("idAtendidos").children[jIndex]);
            jIndex = 0;
        }
    }
}


function clearParent(strID,title) {
    let parent = document["getElementById"](strID);
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
    var node = document["createElement"]("button"); 
    var textnode = document["createTextNode"](title);         
    node["appendChild"](textnode);                              
    node["className"] = "list-group-item list-group-item-action active";
    node["type"] ="buttom"
    document["getElementById"](strID)["appendChild"](node);

    node = document["createElement"]("button");
    textnode = document["createTextNode"]("Arrastra aqui");
    node["appendChild"](textnode);
    node["className"] = "list-group-item list-group-item-action";
    node["type"] = "buttom"
    document["getElementById"](strID)["appendChild"](node);
    
}
    

function borrarItem(Element) {
    
    let arrayId = [];
    let arrayIdmove = [];
    if (Element.parentNode.parentNode.id.indexOf("idLiAcoor") != -1) {
        //lado derecho
        let el = document.getElementById("idAtiende");
        arrayId = el.children[2].id.split("-");
        
        if (Element.parentNode.parentNode.id != el.children[2].id) {
            let itemBorrar = document.getElementById("id0XAcoor-" + Element.parentNode.parentNode.id.split("-")[1]);
            itemBorrar.hidden = true;
            document.getElementById("id0list-" + arrayId[1]).appendChild(Element.parentNode.parentNode);
        } else {
            //borro todos
            catGen.catUtility.disableInput(true, "");
            document.getElementById("formMunicipiosQueAtienden").classList.remove("was-validated");
            let buttonAcor = "id0Button-" + Element.parentNode.parentNode.id.split("-")[1];
            document.getElementById(buttonAcor).disabled = false;
            
            let el = document.getElementById("idAtendidos");
            if (el.children.length) {
                let municipio;
                let itemBorrar;
                for (let iIndex = 0; el.children.length > iIndex; iIndex++) {
                    if (el.children[iIndex].id.length) {
                        municipio = el.children[iIndex].id.split("-")[1];
                        itemBorrar = document.getElementById("id0XAcoor-" + municipio);
                        itemBorrar.hidden = true;
                        arrayIdmove.push(el.children[iIndex].id);
                    }

                }
            }
            for (let jIndex = 0; arrayIdmove.length > jIndex; jIndex++) {
                document.getElementById("id0list-" + arrayId[1]).appendChild(document.getElementById(arrayIdmove[jIndex]));
            }
            let itemBorrar = document.getElementById("id0XAcoor-" + arrayId[1]);
            itemBorrar.hidden = true;
            document.getElementById("id0list-" + arrayId[1]).appendChild(document.getElementById(Element.parentNode.parentNode.id));
        }
        return;
    }
    
    //lado Izq
    if (Element.parentNode.parentNode.parentNode.id == "idAtiende") {
        let el = document.getElementById("idAtendidos");
        catGen.catUtility.disableInput(true, "");
        document.getElementById("formMunicipiosQueAtienden").classList.remove("was-validated");
        arrayId.push(Element.parentNode.parentNode.id);
        let itemBorrar = document.getElementById("idX-" + Element.parentNode.parentNode.id.split("-")[1]);
        itemBorrar.hidden = true;
        if (el.children.length) {
            for (let iIndex = 0; el.children.length > iIndex; iIndex++) {
                if (el.children[iIndex].id.length) {
                    let municipio = el.children[iIndex].id.split("-")[1];
                    itemBorrar = document.getElementById("idX-" + municipio);
                    itemBorrar.hidden = true;
                    arrayId.push(el.children[iIndex].id);
                }

            }
        }
        for (let jIndex = 0; arrayId.length > jIndex; jIndex++) {
            document.getElementById("idMpiosSinAtt0").appendChild(document.getElementById(arrayId[jIndex]));
        }
    } else if (Element.parentNode.parentNode.parentNode.id == "idAtendidos") {
        
        let itemBorrar = document.getElementById("idX-" + Element.parentNode.parentNode.id.split("-")[1]);
        itemBorrar.hidden = true;
    }
    document.getElementById("idMpiosSinAtt0").appendChild(document.getElementById(Element.parentNode.parentNode.id));
}

function ondblclickAt(obj) {

    ondblclickSinAt(obj, "");
}

function ondblclickAtencion() {
    //no se usa pero dejamos la fn
    //alert("ondblclickAtencion");
}

function ondblclickSinAt(object,parent) {
    let municipio;
    municipio = object.id.split("-")[1];
    if (object.id.indexOf("SinAt") != -1) {
        if (object.parentNode.id == "idMpiosSinAtt0") {
            let childrenAt = document.getElementById("idAtiende").children;
            if (childrenAt.length == 2) {
                //primer caso se manda a atiende 
                catGen.catUtility.disableInput(false, "idEnviar,idCancelar");
                document.getElementById("formMunicipiosQueAtienden").classList.remove("was-validated");
                let itemBorrar = document.getElementById("idX-" + municipio);
                itemBorrar.hidden = false;
                document.getElementById("idAtiende").appendChild(document.getElementById(object.id));
                return;
            }
            let itemBorrar = document.getElementById("idX-" + municipio);
            itemBorrar.hidden = false;
            document.getElementById("idAtendidos").appendChild(document.getElementById(object.id));
        } else {
            let itemBorrar = document.getElementById("idX-" + municipio);
            itemBorrar.hidden = true;
            document.getElementById("idMpiosSinAtt0").appendChild(document.getElementById(object.id));
        }
    }
}

function onClickModal(valor) {
    
    if (valor == 1) {
        let nombreSede = "TMP";
        switch (g_enviarOpcion) {
            case "BORRAR":
                borrarMunicipioQueatiende();
                catGen.catUtility.fireAlert("idAlertGrupo", "Se Borro el grupo de atencion " + nombreSede + "!", 3000);
                break;
            case "INSERTAR":
                crearMunicipioQueAtiende();
                catGen.catUtility.fireAlert("idAlertGrupo", "Se creo el grupo de atencion " + nombreSede + "!", 3000);
                break;
            case "ACTUALIZAR":
                atualizarMunicipioQueAtiende();
                catGen.catUtility.fireAlert("idAlertGrupo", "Se actualizo el grupo de atencion " + nombreSede + "!", 3000);
                break;
        }
    }
}

function borrarMunicipioQueatiende() {
    let data01 = getRequestParamMunicipiosQueAtienden(1);
    catGen.catUtility.requestCreateMpioAtiende(data01, "updateMunicipioAtiende", onQueryDataEnviarMunicipioAtiende);
    clearParent("idAtiende", "Municipio que Atiende");
    clearParent("idAtendidos", "Municipios atendidos");
    catGen.catUtility.disableInput(true, "");
    document.getElementById("formMunicipiosQueAtienden").classList.remove("was-validated");
}

function crearMunicipioQueAtiende() {
    
    let data01 = getRequestParamMunicipiosQueAtienden(0);
    catGen.catUtility.requestCreateMpioAtiende(data01, "EnviarMunicipioAtiende", onQueryDataEnviarMunicipioAtiende);
    clearParent("idAtiende", "Municipio que Atiende");
    clearParent("idAtendidos", "Municipios atendidos");
    catGen.catUtility.disableInput(true, "");
    document.getElementById("formMunicipiosQueAtienden").classList.remove("was-validated");
    
}
function atualizarMunicipioQueAtiende() {
    let data01 = getRequestParamMunicipiosQueAtienden(0);
    catGen.catUtility.requestCreateMpioAtiende(data01, "updateMunicipioAtiende", onQueryDataEnviarMunicipioAtiende);
    clearParent("idAtiende", "Municipio que Atiende");
    clearParent("idAtendidos", "Municipios atendidos");
    catGen.catUtility.disableInput(true, "");
    document.getElementById("formMunicipiosQueAtienden").classList.remove("was-validated");
}

function getRequestParamMunicipiosQueAtienden(borrar){
    let param1 = "param1:'";
    let param2 = "param2:'";
    let arr = [];
    let isAcoor = -1;
    let element;
    let childrenAt = document.getElementById("idAtiende").children;

    if (childrenAt.length == 3) {
        for (let iIndex = 0; childrenAt.length > iIndex; iIndex++) {
            element = document.getElementById("idAtiende").children[iIndex];
            arr = element.id.split("-");
            if (arr.length == 2) {
                param1 += arr[1];
                isAcoor = element.id.indexOf("Acoor")
            }
        }

        param1 = param1 + "'";
        for (let jIndex = 0; document.getElementById("idAtendidos").children.length > jIndex; jIndex++) {
            arr = document.getElementById("idAtendidos").children[jIndex].id.split("-");
            if (arr.length == 2) {
                if (param2 == "param2:'")
                    param2 += arr[1];
                else
                    param2 += "," + arr[1];
            }
        }
        borrar != 1 ? param2 = param2 + "'" : param2 = "param2:''";
        return  "{" + param1 + "," + param2 + "}";
    }
}

/*------------------------------------------------------------Inputs-------------------------------------------*/
function onEnviarMunicipioAtiende(event) {

    let botones = 0;
    g_enviarOpcion = "INSERTAR";
    let nameMunicipio = "TMP";
    let text = "El municipio que atiende con el nombre '" + nameMunicipio + "' se borrara  ¿Desea continuar?";
    catGen.catUtility.alertDlg(botones, "Alerta tramita", text);


}
function onActualizar(ev) {
    let botones = 0;
    g_enviarOpcion = "ACTUALIZAR";
    let nameMunicipio = "TMP";
    let text = "El municipio que atiende con el nombre '" + nameMunicipio + "' se actualizara  ¿Desea continuar?";
    catGen.catUtility.alertDlg(botones, "Alerta tramita", text);
}

function onBorrarSede(ev) {
    let botones = 0;
    g_enviarOpcion = "BORRAR";
    let nameMunicipio = "TMP";
    let text = "El municipio que atiende con el nombre '" + nameMunicipio + "' sera borrado  ¿Desea continuar?";
    catGen.catUtility.alertDlg(botones, "Alerta tramita", text);
    
}



/*---------------------------------------------------------------Query-----------------------------------------------*/
function onQueryDataMunicipios() {
    paramValue = "{param:'nada'}";
    catGen.catUtility.requestMpiosQueAtienden(paramValue, onQueryDataMpiosQueAtienden);
    catGen.catUtility.requestMpiosConAtencion(paramValue, onQueryDataMpiosConAtencion);
    catGen.catUtility.requestMpiosSinAtencion(paramValue, onQueryDataMpiosSinAtienden);
    //document.getElementById('idNumMunicipios').innerHTML = nlength;
}
function onQueryDataMpiosQueAtienden(result) {
    catGen.catUtility.fnCreateSelectMunicipiosList(result);
}



function onQueryDataMpioAtiende(result) {
    
    let nlength = document.getElementById('idNumQueAtMunicipios').innerHTML = nlength;
    catGen.catUtility.fnCreateSelectMunicipiosList(result);
}
function onQueryDataMpiosConAtencion(result) {
    let nlength = 0;
    
    if (result.length != 0) 
        nlength = catGen.catUtility.fnCreateListAcordeon("accordionConAtencion", result, 0, catGen.catUtility.getNameMunicipio, ondblclickAtencion);
    else
        catGen.catUtility.fnclearListAcordeon("accordionConAtencion");
    document.getElementById('idNumConAtMunicipios').innerHTML = nlength;
}


function onQueryDataMpiosSinAtienden(result) {
    let nlength = catGen.catUtility.fnCreateListButtonDraggable("idMpiosSinAtt", result,"Municipios sin atencion");
    document.getElementById('idNumSinAtMunicipios').innerHTML = nlength;
}



function onQueryDataEnviarMunicipioAtiende(result) {
    
    let paramValue = "{param:'nada'}";
    catGen.catUtility.requestMpiosQueAtienden(paramValue, onQueryDataMpiosQueAtienden);
    catGen.catUtility.requestMpiosConAtencion(paramValue, onQueryDataMpiosConAtencion);
    catGen.catUtility.requestMpiosSinAtencion(paramValue, onQueryDataMpiosSinAtienden);
}
