/// <reference path="../WebServices/CatWebService.asmx" />

var catGen = catGen || {};

catGen.catUtility = (function (catUtility, $, undefined) {
    g_arrMunicipios = [];
    g_arrMunicipioAtienden = [];
    g_arrCatPerfiles = [];//{ cv: , n1: , des: }
    g_objMunicipioAtienden = ""; 
    let g_arrEmpPerfies = [];//{ idEmp: , perfiles: arreglo[...] }
    let g_arrMunicipiosSedes = []; //{ id: , n1: , d1: , r1: , idS: , c1: , t1:  }
    let g_arrEmpleados = []; //{ idEmp: , rfc: , n1: , ap: , am: , idM: , idS: , fa: , st:, co: }

    let g_nameGruposDeAtencion = [];//no es arreglo es un objeto con clave:nombre ejemplo 2010:COBRANZA

    getNameMunicipio: function getNameMunicipio(value) {
        return g_arrMunicipios[value];
    }
    getArrNameMunicipio: function getArrNameMunicipio() {
        return g_arrMunicipios;
    }
    getNameGruposDeAtencion: function getNameGruposDeAtencion(value) {
        return g_nameGruposDeAtencion[value];
    }
    getArrNameGruposDeAtencion: function getArrNameGruposDeAtencion() {
        return g_nameGruposDeAtencion;
    }

    getNameMunicipio: function getObjMunicipiosSedes(value) {
        return g_arrMunicipiosSedes[value];
    }
    getArrNameMunicipio: function getArrMunicipiosSedes() {
        return g_arrMunicipiosSedes;
    }
    getNameMunicipioAtiende: function getNameMunicipioAtiende(value) {
        return g_objMunicipioAtienden[value];
    }
    getArrNameMunicipioAtiende: function getArrNameMunicipioAtiende() {
        return g_objMunicipioAtienden;
    }

    getNameEmpleado: function getNameEmpleado(value) {
        return g_arrEmpleados[value];
    }
    getArrEmpleados: function getArrEmpleados() {
        return g_arrEmpleados;
    }
    getElementEmpPerfies: function getElementEmpPerfies(value) {
        return g_arrEmpPerfies.filter(val => val.idEmp == value);
    }
    
    getPerfilName: function getPerfilName(value) {
        return g_arrCatPerfiles.filter(val => val.cv == value);
    }

    getArrCatPerfile: function getArrCatPerfile() {
        return g_arrCatPerfiles;
    }
    
    
    /*-----------------------------------------------------------------------------------------------------------------------------------*/
    eventFire:function eventFire(el, etype) {
        if (el.fireEvent) {
            el.fireEvent("on" + etype);
        } else {
            var evObj = document.createEvent("Events");
            evObj.initEvent(etype, true, false);
            el.dispatchEvent(evObj);
        }
    }


    hiddenAlert: function hiddenAlert(idAlert) {
        document.getElementById(idAlert).innerText = "";
        document.getElementById(idAlert).hidden = true;
    }

    showAlert: function showAlert(idAlert,strText) {
        document.getElementById(idAlert).innerText = strText;
        document.getElementById(idAlert).hidden = false;
    }

    fireAlert:function fireAlert(idAlert,strText,time) {
        setTimeout(function () { showAlert(idAlert,strText); }, 500);
        setTimeout(function () { hiddenAlert(idAlert); }, time);
    }

    fnclearListAcordeon:function fnclearListAcordeon(idclear) {
        if (document.getElementById(idclear).children.length) {
            for (let iIndex = 0; document.getElementById(idclear).children.length > 0;) {
                document.getElementById(idclear).removeChild(document.getElementById(idclear).children[iIndex]);
            }
        }
    }

    validaInputs: function validaInputs(strFormName, arrayInput) {
        let valueInput;
        for (iIndex = 0; arrayInput.length > iIndex; iIndex++) {
            valueInput = document.getElementById(arrayInput[iIndex]).value;
            if (valueInput == "" || valueInput == undefined) {
                console.log("validaInputs::-w- "+arrayInput[iIndex]);
                document.getElementById(strFormName).classList.add("was-validated");
                return false
            }
        }
        document.getElementById(strFormName).classList.remove("was-validated");
        return true;
    }

    disableInput: function disableInput(valor, listInput) {
        for (let iIndex = 0; g_arrayInput.length > iIndex; iIndex++) {
            if (listInput == "") {
                document.getElementById(g_arrayInput[iIndex]).disabled = valor;
            }
            else {
                if (listInput.indexOf(g_arrayInput[iIndex]) != -1)
                    document.getElementById(g_arrayInput[iIndex]).disabled = valor;
            }
        }
    }

    alertDlg:function alertDlg(botones, titulo, mensaje) {
        if (botones == 1) {
            document.getElementById("idBtnCancelar").hidden = true;
        } else {
            document.getElementById("idBtnCancelar").hidden = false;
        }
        document.getElementById("alertModalLabel").innerHTML = titulo;
        document.getElementById("idMessageAlertDlg").innerHTML = mensaje;
        this.eventFire(document.getElementById("idAlerDialog"), "click");
    }

    fnCreateSelectList:function fnCreateSelectList(idSelect,title,result) {
        let strMunicipios = result;
        let arrMunicipios;
        let strListselect = "";
        try {
            strListselect = "<select class='form-select' aria-label='" + title+"' id='" + idSelect +"'>";
            arrMunicipios = strMunicipios.split("$");
            let parMubicipio = [];
            for (let iIndex = 0; arrMunicipios.length > iIndex; iIndex++) {
                parMubicipio = arrMunicipios[iIndex].split("|");
                strListselect += "<option value='" + parMubicipio[0] + "'>" + parMubicipio[1] + "</option>";
            }
            strListselect += "</select>";
        } catch (err) {
            alert(err);
        }
        return strListselect;
    }

    fnCreateListButtonDraggable: function fnCreateListButtonDraggable(idElement, result, boxTitle) {
        let arrMunicipios = result.split("$");
        let arrayNameId;
        let iLength;
        let sClass = "class= 'list-group-item list-group-item-action'";
        let title = "<button type='button' class='list-group-item list-group-item-action active' aria-current='true' disabled>" + boxTitle + "</button>";
        iLength = arrMunicipios.length;
        try {
            let strList = "<div id='" + idElement + "0' class='list-group' >";
            strList += title;
            for (let iIndex = 0; arrMunicipios.length > iIndex; iIndex++) {

                arrayNameId = arrMunicipios[iIndex].split("|");

                strList += "<button type='button' draggable='true' ondragstart='dragStart(event)' id='" + idElement + "-" + arrayNameId[0] + "' " + sClass + " ondblclick='ondblclickAt(this,this.parent)'>" + arrayNameId[1] +
                    "<div class='pull-right' hidden id='idX-" + arrayNameId[0] + "'>" +
                    "<i class='fa fa-remove fa-1x' onclick=borrarItem(this)></i ></div ></button>";
            }
            strList += "</div>"
            document.getElementById(idElement).innerHTML = strList;
        }
        catch (err) {
            alert("-E- fnCreayteList " + idElement);
        }
        return iLength;
    }
    fnCreateListAcordeonCehckBox:function fnCreateListAcordeonCehckBox(idElement, result, numero_c, strAppend, arrNames) {

        let arrMunicipios = result.split("$");
        let strID = "id" + numero_c;

        let arrayNameId;
        let iLength;
        let strAcoordeon = "<div class='accordion-item' draggable='true' ondragstart='dragStart(event)' id=" + strID + "'itemAcoor-";
        let strAcoordeon1 = "'><h2 class='accordion-header' id='" + strID + "h2-";
        let strAcoordeon2 = "'><button class='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#" + strID + "Collapse-";
        let strAcoordeon3 = "' aria-expanded='false' aria-controls='Collapse-";
        let strAcoordeon4 = "'>";
        let strAcoordeon5 = "&nbsp;&nbsp;<span class='badge bg-primary  rounded-pill' style='color:white' id='" + strID + "badge-";
        let strAcoordeon51 = "'>14</span></button></h2><div id='" + strID + "Collapse-";
        let strAcoordeon6 = "' class='accordion-collapse collapse' aria-labelledby='headingOne' data-bs-parent='#" + idElement + "'><div class='accordion-body'>";
        let strAcoordeon7 = "</div></div></div>";
        let strAcoordeonFin = '';
        iLength = arrMunicipios.length;
        let strList = "";
        let strAnt = "";
        var objList = { key: "", List: "" };
        let arrList = [];
        let numero = 0;
        try {

            strList = "";
            for (let iIndex = 0; arrMunicipios.length > iIndex; iIndex++) {

                numero++;
                arrayNameId = arrMunicipios[iIndex].split("|");

                strList += "<div class='form-check'><input class='form-check-input' type='checkbox' value='' id='" + strID + "idLiAcoor-" + arrayNameId[5] + "'>" +
                    "<label class='form-check-label' for='" + strID + "idLiAcoor-" + arrayNameId[5] + "'>" +
                    arrayNameId[1] + "</label></div>";
                if (strAnt != arrayNameId[2]) {

                    strAcoordeon = "<div class='accordion-item' draggable='true' ondragstart='dragStart(event)' id='" + strID + "itemAcoor-";
                    strAcoordeon += arrayNameId[2] + strAcoordeon1 + arrayNameId[2] + strAcoordeon2 + arrayNameId[2] + strAcoordeon3 +
                        arrayNameId[1] + strAcoordeon4 + arrNames[arrayNameId[2]] + strAcoordeon5 + arrayNameId[2] + strAcoordeon51 +
                        arrayNameId[2] + strAcoordeon6 + "<span id='" + strID + "list-" + arrayNameId[2] + "'></span>" + strAcoordeon7;
                    strAcoordeonFin += strAcoordeon;
                    objList["key"] = strID + "list-" + arrayNameId[2];

                }

                strAnt = arrayNameId[2]
                if (arrMunicipios.length > (iIndex + 1) && strAnt != arrMunicipios[iIndex + 1].split("|")[2]) {
                    objList["list"] = strList;
                    arrList.push({ key: objList["key"], list: objList["list"], size: numero });
                    numero = 0;
                    strList = "";
                }

            }
            objList["list"] = strList;
            arrList.push({ key: objList["key"], list: objList["list"], size: numero });
            if (strAppend == "")
                document.getElementById(idElement).innerHTML = strAcoordeonFin;
            else {
                let strinnerHTML = document.getElementById(idElement).innerHTML;
                document.getElementById(idElement).innerHTML = strinnerHTML + strAcoordeonFin;
            }
            for (let jIndex = 0; arrList.length > jIndex; jIndex++) {
                document.getElementById(arrList[jIndex].key).innerHTML = arrList[jIndex].list;
                document.getElementById(strID + "badge-" + arrList[jIndex].key.split("-")[1]).innerHTML = arrList[jIndex].size;
            }
        }
        catch (err) {
            alert("-E- fnCreateListAcordeonCehckBox " + idElement);
        }
        return iLength;
    }

    fnCreateListAcordeon: function fnCreateListAcordeon(idElement, result, numero_c, fnNameTitulo, fndblclickItem) {

        let arrMunicipios = result.split("$");
        let strID = "id" + numero_c;

        let arrayNameId;
        let iLength;
        let strAcoordeon = "<div class='accordion-item' draggable='true' ondragstart='dragStart(event)' id=" + strID + "'itemAcoor-";
        let strAcoordeon1 = "'><h2 class='accordion-header' id='" + strID + "h2-";
        let strAcoordeon2 = "'><button class='accordion-button collapsed' id='" + strID + "Button-";
        let strAcoordeon21 = "' type='button' data-bs-toggle='collapse' data-bs-target='#" + strID + "Collapse-";
        let strAcoordeon3 = "' aria-expanded='false' aria-controls='Collapse-";
        let strAcoordeon4 = "'>";
        let strAcoordeon5 = "&nbsp;&nbsp;<span class='badge bg-primary  rounded-pill' style='color:white' id='" + strID + "badge-";
        let strAcoordeon51 = "'>14</span></button></h2><div id='" + strID + "Collapse-";
        let strAcoordeon6 = "' class='accordion-collapse collapse' aria-labelledby='headingOne' data-bs-parent='#" + idElement + "'><div class='accordion-body'>";
        let strAcoordeon7 = "</div></div></div>";
        let strAcoordeonFin = "";
        iLength = arrMunicipios.length;
        let strList;
        let strAnt = "";
        var objList = { key: "", List: "" };
        let arrList = [];
        let numero = 0;
        try {

            strList = "";
            for (let iIndex = 0; arrMunicipios.length > iIndex; iIndex++) {

                numero++;
                arrayNameId = arrMunicipios[iIndex].split("|");
                arrayNameId.length < 5 ? strIdTemp = arrayNameId[0] : strIdTemp = arrayNameId[5];


                strList += "<button type='button' class='list-group-item list-group-item-action'  id='" +
                    strID + "idLiAcoor-" + strIdTemp + "'>" +
                    arrayNameId[1] + "<div class='pull-right' hidden id='" + strID + "XAcoor-" +
                    arrayNameId[0] + "'><i class='fa fa-remove fa-1x' onclick='borrarItem(this)'></i></div></button>";
                if (strAnt != arrayNameId[2]) {

                    strAcoordeon = "<div class='accordion-item' draggable='true' ondragstart='dragStart(event)' id='" + strID + "itemAcoor-";
                    strAcoordeon += arrayNameId[2] + strAcoordeon1 + arrayNameId[2] + strAcoordeon2 + arrayNameId[2] +
                        strAcoordeon21 + arrayNameId[2] + strAcoordeon3 +
                        arrayNameId[1] + strAcoordeon4 + fnNameTitulo(arrayNameId[2]) + strAcoordeon5 + arrayNameId[2] + strAcoordeon51 +
                        arrayNameId[2] + strAcoordeon6 + "<span id='" + strID + "list-" + arrayNameId[2] + "'></span>" + strAcoordeon7;
                    strAcoordeonFin += strAcoordeon;
                    objList["key"] = strID + "list-" + arrayNameId[2];

                }

                strAnt = arrayNameId[2]
                if (arrMunicipios.length > (iIndex + 1) && strAnt != arrMunicipios[iIndex + 1].split("|")[2]) {
                    objList["list"] = strList;
                    arrList.push({ key: objList["key"], list: objList["list"], size: numero });
                    numero = 0;
                    strList = "";
                }

            }


            objList["list"] = strList;
            arrList.push({ key: objList["key"], list: objList["list"], size: numero });
            document.getElementById(idElement).innerHTML = strAcoordeonFin;

            for (let jIndex = 0; arrList.length > jIndex; jIndex++) {

                document.getElementById(arrList[jIndex].key).innerHTML = arrList[jIndex].list;
                if (arrList[jIndex].size == 1 && arrList[jIndex].list.indexOf("LiAcoor-0") != -1) {
                    document.getElementById(strID + "badge-" + arrList[jIndex].key.split("-")[1]).innerHTML = "0";
                } else {
                    document.getElementById(strID + "badge-" + arrList[jIndex].key.split("-")[1]).innerHTML = arrList[jIndex].size;
                }
            }
            var childButtons = document.getElementById(idElement).getElementsByTagName('button')
            for (let jIndex = 0; childButtons.length > jIndex; jIndex++) {
                childButtons[jIndex].addEventListener("dblclick", fndblclickItem);
            }
            
        }
        catch (err) {
            alert("-E- fnCreateListAcordeon " + idElement);
        }
        return iLength;
    }

    fnCreatefloatingSelect: function fnCreatefloatingSelect(idElemento, result, strTitle,selectItem) {
        
        let arrIdName = result.split("$");
        if (arrIdName.length>0) {
            let strText = "";
            let selOption= "selected";
            let strfloatingSelect = "<select class='form-select' id='id" + idElemento + "' aria-label='" + strTitle+"'>";
            let strfloatingSelect1 = "<option value='";
            let strfloatingSelect2 = "' ";
            let strfloatingSelect21 =  ">";
            let strfloatingSelect3 = "</option>";
            let arrMpio=[];
            for (let iIndex = 0; arrIdName.length > iIndex; iIndex++) {
                arrMpio = arrIdName[iIndex].split("|");
                if ((selectItem == 0 && strText.length == 0) || (selectItem == arrMpio[0])) 
                    strText += strfloatingSelect1 + arrMpio[0] + strfloatingSelect2 + selOption + strfloatingSelect21 + arrMpio[1] + strfloatingSelect3;
                else
                    strText += strfloatingSelect1 + arrMpio[0] + strfloatingSelect2 + strfloatingSelect21 + arrMpio[1] + strfloatingSelect3;
            }
            document.getElementById(idElemento).innerHTML = strfloatingSelect + strText + "</select><label for='id" + idElemento+"'>" + strTitle + "</label>";
        }
    }
    //me regresa el value del option
    getSelectOptionID: function getSelectOptionID(strIdSelect) {
        let returnValue = 0;
        let fsLement = document.getElementById(strIdSelect);
        for (let iItem = 0; fsLement.children.length > iItem; iItem++) {
            if (fsLement.children[iItem].selected == true) {
                returnValue=fsLement.children[iItem].value;
                break;
            }
        }
        return returnValue;
    }
    //me regresa el obj de html al que se le dio  click
    changeElementSelected: function changeElementSelected(idCtrl, value) {
        let msList = document.getElementById(idCtrl);
        for (let iItem = 0; msList.children.length > iItem; iItem++) {
            if (msList.children[iItem].selected == true) {
                 msList.children[iItem].selected=false;
                break;
            }
        }
        for (let iItem = 0; msList.children.length > iItem; iItem++) {
            if (msList.children[iItem].value == value) {
                msList.children[iItem].selected = true;
                return msList.children[iItem];
            }
        }
    }

    fnCreateMultipleSelect: function fnCreateMultipleSelect(idElemento, result, pos, strTitle, selectItem) {
        let arrSelect = result.split("$");
        let strMultselect1 = "<select class='form-select' id='id" + pos + idElemento + "' multiple aria-label='" + strTitle + "'>";
        let strText = "";
        let strMultselect2 = "<option value='";
        let strMultselect3 = "' ";
        let strMultselect31 = ">";
        let strMultselect4 = "</option > ";
        let strMultselect5 = "</select>";
        let arrElement = [];
        
        for (let iIndex = 0; arrSelect.length > iIndex; iIndex++) {
            arrElement = arrSelect[iIndex].split("|");
            
            strSelected = (selectItem == iIndex)?"selected":"";
            strText += strMultselect2 + arrElement[0] + strMultselect3 + strSelected + strMultselect31 + arrElement[1] + strMultselect4
        }
        return strMultselect1 + strText + strMultselect5;
    }
    fnCreateAcoorSedesEmpleados: function fnCreateAcoorSedesEmpleados(idAccordion, idMSelect, fndblclickItem) {
        let arrSedes = g_arrMunicipiosSedes.filter(val => val.id == idMSelect);
        let result3 = "";
        let arrSedesName = [];
        function getNameSedes(value) {
            return arrSedesName[value]
        }
        let arrEmp;
        let empleado;
        let arrSede;
        for (let iIndex = 0; arrSedes.length > iIndex; iIndex++) {

            arrEmp = g_arrEmpleados.filter(value => value.idS == arrSedes[iIndex].idS);
            if (arrEmp.length) {//si tengo empleados en la sede
                for (let jIndex = 0; arrEmp.length > jIndex; jIndex++) {

                    empleado = arrEmp[jIndex];
                    arrSede = g_arrMunicipiosSedes.filter(value => value.idS == arrSedes[iIndex].idS);
                    arrSedesName[empleado.idS] = arrSede[0].n1;
                    result3 += (result3 == "" ? "" : "$") + empleado.idEmp + "|" + empleado.n1 + " " + empleado.ap + " " + empleado.am + "|" + empleado.idS;
                }

            } else {
                //si no tengo que hago??
                let arrSede = g_arrMunicipiosSedes.filter(value => value.idS == arrSedes[iIndex].idS);
                arrSedesName[arrSedes[iIndex].idS] = arrSede[0].n1;
                result3 += (result3 == "" ? "" : "$") + "0|No tenemos empleados en esta sede|" + arrSedes[iIndex].idS;

            }
        }
        nlength = fnCreateListAcordeon(idAccordion, result3, 0, getNameSedes, fndblclickItem);//izq abajo
    }

    fnFiltrarEmpleados: function fnFiltrarEmpleados(msElement, title, strFiltro, fnSelectItem, fnSelectItemClick){
        let arrEmpleadosFiltro = g_arrEmpleados.filter(val => (val.n1 + val.ap + val.am + val.rfc).indexOf(strFiltro) != -1);
        let result = createCadenaFilter(arrEmpleadosFiltro, 1);
        fnCreateFilterMSelect(result, msElement, title, fnSelectItem, fnSelectItemClick);
    }

    fnFiltrarMunicipios: function fnFiltrarMunicipios(msElement, title, strFiltro, fnSelectItem, fnSelectItemClick) {
        let arrMunFiltro = g_arrMunicipioAtienden.filter(val => val.n1.toUpperCase().indexOf(strFiltro) != -1);
        let result = createCadenaFilter(arrMunFiltro,  2);
        fnCreateFilterMSelect(result, msElement, title, fnSelectItem, fnSelectItemClick);
    }

    createCadenaFilter:function createCadenaFilter(arrFiltro, type ) {
        let strTextResult = "";
        let item;
        for (iIndex = 0; arrFiltro.length > iIndex; iIndex++) {
            item = arrFiltro[iIndex];
            if (type == 1)//empleados
                strTextResult += (strTextResult == "" ? "" : "$") + item.idEmp + "|" + item.n1 + " " + item.ap + " " + item.am;
            else//municipios
                strTextResult += (strTextResult == "" ? "" : "$") + item.idM + "|" + item.n1
        }
        return strTextResult;
    }

    fnCreateFilterMSelect: function fnCreateFilterMSelect(strTextResult, msElement, title, fnChangeItem, fnSelectItemClick) {
        if (strTextResult.length > 0) {
            let strText = fnCreateMultipleSelect(msElement, strTextResult, "0", title, 0);
            document.getElementById(msElement).innerHTML = strText;
            document.getElementById("id0" + msElement).addEventListener("change", fnChangeItem);
        } else {
            let strText = fnCreateMultipleSelect(msElement, "0|No  hay coincidencias", "0", title, 0);
            document.getElementById(msElement).innerHTML = strText;
        }
        let elementSM = document.getElementById("id0" + msElement);
        for (let iIndex = 0; elementSM.children.length > iIndex; iIndex++) {
            elementSM[iIndex].addEventListener("click", fnSelectItemClick);
        }
    }

    fnCreateAcoorSedesEmp: function fnCreateAcoorSedesEmp(result, idAcoor, fndblclickItem) {
        let arrSedes = [...result.arrSede];
        function fnGetNameSedes(value) {
            return arrSedes[value]
        }
        fnCreateListAcordeon(idAcoor, result.txtSedeEmp, 0, fnGetNameSedes, fndblclickItem);//izq abajo
    }
    
    fnCreateMsEmpleados: function fnCreateMsEmpleados(result, idMSelect, title, pos, fnChangeItem, fnSelectItemClick) {
        let strText = fnCreateMultipleSelect(idMSelect, result.txtEmpleados, pos, title, 0);
        document.getElementById(idMSelect).innerHTML = strText;
        document.getElementById("id0" + idMSelect).addEventListener("change", fnChangeItem);
        let elementSM = document.getElementById("id0" + idMSelect);
        for (let iIndex = 0; elementSM.children.length > iIndex; iIndex++) {
            elementSM[iIndex].addEventListener("click", fnSelectItemClick);
        }
    }
    /*-----------------------------------------------------------------------------------------------------------------------------------------------------------*/
    requestMunicipiosList:function requestMunicipiosList(onQueryDataMunicipios) {
        $.ajax({
            type: "POST",
            url: "../WebServices/CatWebService.asmx/GetMunicipiosList",
            data: "{param:'nada'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                var result = response.d;
                let tmp = result;
                tmp = tmp.replace(/[$]/gi, "\",\"");
                tmp = tmp.replace(/[|]/gi, "\":\"");
                tmp = "{\"" + tmp + "\"}"
                g_arrMunicipios = JSON.parse(tmp);
                onQueryDataMunicipios(result);
            },
            failure: function (response) {
                alert(response.d);
            }
        });
    }

    
    requestMpiosQueAtienden:function requestMpiosQueAtienden(paramValue, onQueryDataMpiosQueAtienden) {
        $.ajax({
            type: "POST",
            url: "../WebServices/CatWebService.asmx/getMpiosQueAtienden",
            data: paramValue,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                var result = response.d;
                let tmp = result;
                g_objMunicipioAtienden = "";
                tmp = tmp.replace(/[$]/gi, "\",\"");
                tmp = tmp.replace(/[|]/gi, "\":\"");
                tmp = "{\"" + tmp + "\"}"
                g_objMunicipioAtienden = JSON.parse(tmp);
                Object.keys(g_objMunicipioAtienden).forEach(function (key) {
                    g_arrMunicipioAtienden.push({ idM: key, n1: g_objMunicipioAtienden[key]})
                });
                onQueryDataMpiosQueAtienden(result);
            },
            failure: function (response) {
                alert(response.d + "#2");
            }
        });
    }
    requestMpiosConAtencion:function requestMpiosConAtencion(paramValue, onQueryDataMpiosConAtencion) {

        $.ajax({
            type: "POST",
            url: "../WebServices/CatWebService.asmx/getMpiosConAtencion",
            data: paramValue,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                var result = response.d;
                onQueryDataMpiosConAtencion(result);
            },
            failure: function (response) {
                alert(response.d + " idNumMpiosConAtt");
            }
        });

    }

    requestMpiosSinAtencion:function requestMpiosSinAtencion(paramValue, onQueryDataMpiosSinAtienden) {
        $.ajax({
            type: "POST",
            url: "../WebServices/CatWebService.asmx/getMpiosSinAtencion",
            data: paramValue,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                var result = response.d;

                onQueryDataMpiosSinAtienden(result);
                
            },
            failure: function (response) {
                alert(response.d + "#2");
            }
        });
    }

    requestCreateMpioAtiende:function requestCreateMpioAtiende(dataParam, endPoint, onQueryDataEnviarMunicipioAtiende) {
        $.ajax({
            type: "POST",
            url: "../WebServices/CatWebService.asmx/" + endPoint,
            data: dataParam,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                var result = response.d;
                onQueryDataEnviarMunicipioAtiende(result);
            },
            failure: function (response) {
                alert(response.d);
            }
        });

    }
    requestGrupoTodosMpiosYsedes:function requestGrupoTodosMpiosYsedes(paramValue, onQueryDataGrupoTodosMpiosYsedes) {

        $.ajax({
            type: "POST",
            url: "../WebServices/CatWebService.asmx/getMpiosYsedes",
            data: paramValue,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                var result = response.d;
                let tmp = result;

                g_arrMunicipiosSedes = [];//limpiamos el arreglo
                let arrTmp = tmp.split("$");
                let arrTmp2 = [];
                for (let iIndex = 0; arrTmp.length > iIndex; iIndex++) {
                    arrTmp2 = arrTmp[iIndex].split("|");
                    g_arrMunicipiosSedes.push({ id: arrTmp2[0], n1: arrTmp2[1], d1: arrTmp2[3], r1: arrTmp2[4], idS: arrTmp2[5], c1: arrTmp2[6], t1: arrTmp2[7] });
                }
                onQueryDataGrupoTodosMpiosYsedes(result);
            },
            failure: function (response) {
                alert(response.d + " idNumMpiosConAtt");
            }
        });

    }

    requestNombresGruposAtencion:function requestNombresGruposAtencion(dataParam, onQueryDataNombresGruposAtencion) {
        
        $.ajax({
            type: "POST",
            url: "../WebServices/CatWebService.asmx/NombresGruposDeAtencion",
            data: dataParam,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                var result = response.d;
                let tmp = result;
                tmp = tmp.replace(/[$]/gi, "\",\"");
                tmp = tmp.replace(/[|]/gi, "\":\"");
                tmp = "{\"" + tmp + "\"}"
                g_nameGruposDeAtencion = JSON.parse(tmp);

                onQueryDataNombresGruposAtencion(result);
                
            },
            failure: function (response) {
                alert(response.d + "#2");
            }
        });
    }

    requestGruposAtencionALL:function requestGruposAtencionALL(dataParam, onQueryGruposAtencionALL) {
        
        $.ajax({
            type: "POST",
            url: "../WebServices/CatWebService.asmx/GruposAtencionAll",
            data: dataParam,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                var result = response.d;
                g_GruposDeAtencionAll = [];
                onQueryGruposAtencionALL(result);
                

            },
            failure: function (response) {
                alert(response.d + "#2");
            }
        });
    }

    requestMpioYsedes:function requestMpioYsedes(municipio, onQueryDataMpioYsedes) {

        $.ajax({
            type: "POST",
            url: "../WebServices/CatWebService.asmx/getMpiosYsedes",
            data: "{param1:'" + municipio + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                var result = response.d;
                onQueryDataMpioYsedes(result);
                
            },
            failure: function (response) {
                alert(response.d + " idNumMpiosConAtt");
            }
        });

    }

    requestUpdateGrupoDeAtencion:function requestUpdateGrupoDeAtencion(dataParam, onQueryDataUpdateGrupoDeAtencion) {

        $.ajax({
            type: "POST",
            url: "../WebServices/CatWebService.asmx/updateGrupoDeAtencion",
            data: dataParam,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                var result = response.d;
                onQueryDataUpdateGrupoDeAtencion(result);
                
            },
            failure: function (response) {
                alert(response.d + "#2");
            }
        });

    }

    requestCreateGrupoDeAtencion:function requestCreateGrupoDeAtencion(dataParam, onQueryDataCreateGrupoDeAtencion) {

        $.ajax({
            type: "POST",
            url: "../WebServices/CatWebService.asmx/EnviaGrupoDeAtencion",
            data: dataParam,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                var result = response.d;
                onQueryDataCreateGrupoDeAtencion(result);
                

            },
            failure: function (response) {
                alert(response.d + "#2");
            }
        });

    }
    requestBorraGrupoDeAtencion:function requestBorraGrupoDeAtencion(dataParam, onQueryDataGrupoDeAtencion) {
        $.ajax({
            type: "POST",
            url: "../WebServices/CatWebService.asmx/borrarGrupoDeAtencion",
            data: dataParam,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                var result = response.d;
                onQueryDataGrupoDeAtencion(result);
            },
            failure: function (response) {
                alert(response.d + "#2");
            }
        });

    }

    requestBorraSede:function requestBorraSede(dataParam, onQueryDataBorraSede) {
        $.ajax({
            type: "POST",
            url: "../WebServices/CatWebService.asmx/deleteSede",
            data: dataParam,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                var result = response.d;
                onQueryDataBorraSede(result);
            },
            failure: function (response) {
                alert(response.d);
            }
        });

    }
    requestSedesInsertUpdate:function requestSedesInsertUpdate(dataParam, endPoint, onQueruDataSedesInsertUpdate)
    {
        $.ajax({
            type: "POST",
            url: "../WebServices/CatWebService.asmx/" + endPoint,
            data: dataParam,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                var result = response.d;
                onQueruDataSedesInsertUpdate(result);
            },
            failure: function (response) {
                alert(response.d);
            }
        });
    }

    requestEmpleados: function requestEmpleados(dataParam, onQueryDataEmpleados, idMunicipioSelect) {
        $.ajax({
            type: "POST",
            url: "../WebServices/CatWebService.asmx/Empleados",
            data: dataParam,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                var result = response.d;
                let arrEmpleados = result.split("$");
                let arrCampos = [];
                let strTextResult = "";
                let result3 = "";
                let empleado = {};
                let arrSedes = [];

                
                g_arrEmpleados = [];
                let arrSede;
                for (let iIndex = 0; arrEmpleados.length > iIndex; iIndex++) {
                    arrCampos = arrEmpleados[iIndex].split("|");
                    empleado = { idEmp: arrCampos[0], rfc: arrCampos[1], n1: arrCampos[2], ap: arrCampos[3], am: arrCampos[4], idM: arrCampos[5], idS: arrCampos[6], fa: arrCampos[9], st: arrCampos[11], co: arrCampos[12] };
                    g_arrEmpleados.push(empleado);
                    strTextResult += (strTextResult == "" ? "" : "$") + empleado.idEmp + "|" + empleado.n1 + " " + empleado.ap + " " + empleado.am;
                    if (idMunicipioSelect == empleado.idM) {
                        arrSede = g_arrMunicipiosSedes.filter(value => value.idS == empleado.idS);
                        arrSedes[empleado.idS] = arrSede[0].n1;
                        result3 += (result3 == "" ? "" : "$") + empleado.idEmp + "|" + empleado.n1 + " " + empleado.ap + " " + empleado.am + "|" + empleado.idS;
                    }
                }
                let resultado = { arrSede: [...arrSedes], txtSedeEmp: result3, txtEmpleados: strTextResult };
                onQueryDataEmpleados(resultado);
            },
            failure: function (response) {
                alert(response.d);
            }
        });
    }

    requestStatusEmpleados: function requestStatusEmpleados(dataParam, onQueryDataStatusEmpleados) {
        
        $.ajax({
            type: "POST",
            url: "../WebServices/CatWebService.asmx/StatusEmpleados",
            data: dataParam,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                var result = response.d;
                onQueryDataStatusEmpleados(result);
            },
            failure: function (response) {
                alert(response.d);
            }
        });
    }

    requestInsertEmpleado: function requestInsertEmpleado(dataParam, onQueryDataInsertEmpleado)
    {
        $.ajax({
            type: "POST",
            url: "../WebServices/CatWebService.asmx/insertaEmpleado",
            data: JSON.stringify(dataParam),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                var result = response.d;
                onQueryDataInsertEmpleado(result);
            },
            failure: function (response) {
                alert(response.d);
            }
        });
    }
    requestUpdateEmpleado: function requestUpdateEmpleado(dataParam, onQueryDataUpdateEmpleado) {
        $.ajax({
            type: "POST",
            url: "../WebServices/CatWebService.asmx/updateEmpleado",
            data: JSON.stringify(dataParam),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                var result = response.d;
                onQueryDataUpdateEmpleado(result);
            },
            failure: function (response) {
                alert(response.d);
            }
        });
    }
    requestCatPerfiles: function requestCatPerfiles(dataParam, onQueryDataCatPerfiles) {
        $.ajax({
            type: "POST",
            url: "../WebServices/CatWebService.asmx/CatPerfiles",
            data: JSON.stringify(dataParam),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                var result = response.d;
                let arrTemp = result.split("$");
                let arrElements;
                let textResult="";
                let text1 = "<div class='containerCheck'><div class='itemCheckPrincipal'><div class='form-check form-switch'>";
                let text2 = "<input class='form-check-input' type='checkbox' id='";//			idCheck-clave1
                let text3 = "'><label class='form-check-label' for='";//						idCheck-clave1
                let text4 = "'>"; //Atención
                let text41 = "</label><hr/></div></div><div class='itemCheckBtn";
                let text5 = "'><button class='btn_check_perfiles' type='button' data-bs-toggle='collapse' data-bs-target='#";//	collapse-clave1
                let text6 = "' aria-expanded='false' aria-controls='";//						collapseExample
                let text7 = "'>Ver más</button></div><div class='DivCheckEmpty'></div>";

                let text8 = "<div class='collapse itemChecSecundario' id='"; //collapse-clave1
                let text9 = "'><div class='itemChecSecundario' >";

                let check21 = " <div class='form-check form-switch'><input class='form-check-input' type='checkbox' id='";//		idCheck-clave2
                let check3 = "' ><label class='form-check-label' for='";//idCheck-clave2
                let check31 = "'>";//		Firmante
                let check4 = "</label></div>";
                let check5 ="</div></div></div>";
                let claveAnt = "";
                let idClave1 = "";
                let idClave2 = "";
                let title = "Perfil";
                let primer = "";
                for (let iIndex = 0; arrTemp.length > iIndex; iIndex++) {
                    arrElements = arrTemp[iIndex].split("|");
                    objPerfil = { cv: arrElements[0], n1: arrElements[1], des: arrElements[2] };
                    //alert(claveAnt+ "--" +objPerfil.cv)
                    g_arrCatPerfiles.push(objPerfil);
                    
                    if (claveAnt == "" || (claveAnt.charAt(0) != objPerfil.cv.charAt(0))) {
                        if (claveAnt != "")
                            textResult += check5;
                        idClave1 = "idCheck-" + objPerfil.cv;
                        idClave2 = "collapse-" + objPerfil.cv;
                        textResult += text1 + text2 + idClave1 + text3 + text4 + objPerfil.n1 + text41 + text5 + idClave2 + text6 + title + text7 + text8 + idClave2 + text9;
                        //alert(textResult);
                        primer = "";

                    } else {
                        idClave1 = "idCheck-" + objPerfil.cv;
                        //alert(check21 + idClave1 + check3 + idClave1 + check31 + objPerfil.n1 + check4);
                        textResult += check21 + idClave1 + check3 + idClave1 + check31 + objPerfil.n1 + check4;
                        
                    }
                    claveAnt = objPerfil.cv;
                }
                textResult += check5;

               

                onQueryDataCatPerfiles(textResult);
            },
            failure: function (response) {
                alert(response.d);
            }
        });
    }
    requestEmpleadoPerfiles: function requestEmpleadoPerfiles(dataParam, onQueryEmpleadoPerfiles) {
        $.ajax({
            type: "POST",
            url: "../WebServices/CatWebService.asmx/empleadoPerfiles",
            data: JSON.stringify(dataParam),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                var result = response.d;
                let arrEmpleados = result.split("$")
                g_arrEmpPerfies = [];
                let objEmpPerfiles;
                for (let iIndex=0; arrEmpleados.length > iIndex; iIndex++) {
                    arrEmpPerfies = arrEmpleados[iIndex].split("|");
                    objEmpPerfiles = { idEmp: arrEmpPerfies[0], perfiles: [...arrEmpPerfies[1].split(",")] };
                    g_arrEmpPerfies.push(objEmpPerfiles);
                }
                onQueryEmpleadoPerfiles(result);
            },
            failure: function (response) {
                alert(response.d);
            }
        });
    }
    requestUpdatePerfilesEmpleado: function requestUpdatePerfilesEmpleado(dataParam, requestQueryDataUpdatePerfilesEmpleado) {
        $.ajax({
            type: "POST",
            url: "../WebServices/CatWebService.asmx/updateEmpleadoPerfiles",
            data: JSON.stringify(dataParam),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                var result = response.d;
                
                requestQueryDataUpdatePerfilesEmpleado(result);
            },
            failure: function (response) {
                alert(response.d);
            }
        });
    }

    return {
        eventFire: eventFire,
        fireAlert: fireAlert,
        fnclearListAcordeon: fnclearListAcordeon,
        disableInput: disableInput,
        validaInputs: validaInputs,
        alertDlg: alertDlg,
        fnCreateListButtonDraggable: fnCreateListButtonDraggable,
        fnCreateListAcordeonCehckBox: fnCreateListAcordeonCehckBox,
        fnCreateListAcordeon: fnCreateListAcordeon,
        fnCreateSelectList: fnCreateSelectList,
        fnCreatefloatingSelect: fnCreatefloatingSelect,
        fnCreateAcoorSedesEmpleados: fnCreateAcoorSedesEmpleados,
        fnFiltrarEmpleados: fnFiltrarEmpleados,
        fnFiltrarMunicipios: fnFiltrarMunicipios,
        fnCreateMsEmpleados: fnCreateMsEmpleados,
        fnCreateAcoorSedesEmp: fnCreateAcoorSedesEmp,
        fnCreateFilterMSelect: fnCreateFilterMSelect,

        getNameMunicipio: getNameMunicipio,
        getArrNameMunicipio: getArrNameMunicipio,
        getNameGruposDeAtencion: getNameGruposDeAtencion,
        getArrNameGruposDeAtencion: getArrNameGruposDeAtencion,
        getNameMunicipioAtiende: getNameMunicipioAtiende,
        getArrNameMunicipioAtiende: getArrNameMunicipioAtiende,
        getSelectOptionID: getSelectOptionID,
        getObjMunicipiosSedes: getObjMunicipiosSedes,
        getArrMunicipiosSedes: getArrMunicipiosSedes,
        getNameEmpleado: getNameEmpleado,
        getArrEmpleados: getArrEmpleados,
        getElementEmpPerfies: getElementEmpPerfies,
        getPerfilName: getPerfilName,
        getArrCatPerfile: getArrCatPerfile,
        changeElementSelected: changeElementSelected,
        

        requestMunicipiosList: requestMunicipiosList,
        requestMpiosQueAtienden: requestMpiosQueAtienden,
        requestMpiosConAtencion: requestMpiosConAtencion,
        requestMpiosSinAtencion: requestMpiosSinAtencion,
        requestCreateMpioAtiende: requestCreateMpioAtiende,
        requestGrupoTodosMpiosYsedes: requestGrupoTodosMpiosYsedes,
        requestNombresGruposAtencion: requestNombresGruposAtencion,
        requestEmpleados: requestEmpleados,
        requestStatusEmpleados: requestStatusEmpleados,
        requestGruposAtencionALL: requestGruposAtencionALL,
        requestMpioYsedes: requestMpioYsedes,
        requestCatPerfiles: requestCatPerfiles,
        requestEmpleadoPerfiles: requestEmpleadoPerfiles,

        requestUpdateGrupoDeAtencion: requestUpdateGrupoDeAtencion,
        requestCreateGrupoDeAtencion: requestCreateGrupoDeAtencion,
        requestBorraGrupoDeAtencion: requestBorraGrupoDeAtencion,
        requestBorraSede: requestBorraSede,
        requestSedesInsertUpdate: requestSedesInsertUpdate,
        requestInsertEmpleado: requestInsertEmpleado,
        requestUpdateEmpleado: requestUpdateEmpleado,
        requestUpdatePerfilesEmpleado: requestUpdatePerfilesEmpleado

    }

}(catGen.catUtility = catGen.catUtility || {}, jQuery));