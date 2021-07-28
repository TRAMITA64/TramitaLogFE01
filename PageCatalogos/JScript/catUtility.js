/// <reference path="../WebServices/CatWebService.asmx" />

var catGen = catGen || {};

catGen.catUtility = (function (catUtility, $, undefined) {
    g_arrMunicipios = [];
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

    fnCreateListAcordeon:function fnCreateListAcordeon(idElement, result, numero_c, fnNameTitulo) {

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


                strList += "<button type='button' class='list-group-item list-group-item-action' ondblclick='ondblclickSede(this)' id='" +
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
    fnCreateMultipleSelect: function fnCreateMultipleSelect(idElemento, result, pos, strTitle, selectItem) {
        let arrSelect = result.split("$");
        let strMultselect1 = "<select class='form-select' id='id" + pos + idElemento + "' multiple aria-label='" + strTitle + "'>";
        let strText = "";
        let strMultselect2 = "<option value='";
        let strMultselect3 = "'>";
        let strMultselect4 = "</option > ";
        let strMultselect5 = "</select>";
        let arrElement = [];
        for (let iIndex = 0; arrSelect.length > iIndex; iIndex++) {
            arrElement = arrSelect[iIndex].split("|");
            strText += strMultselect2 + arrElement[0] + strMultselect3 + arrElement[1] + strMultselect4
        }
        return strMultselect1 + strText + strMultselect5;
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

    requestMpioAtiendeList:function requestMpioAtiendeList(paramValue, onQueryDataMpioAtiendeList) {
        $.ajax({
            type: "POST",
            url: "../WebServices/CatWebService.asmx/requestMpioAtiendeList",
            data: paramValue,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                var result = response.d;
                onQueryDataMpioAtiendeList(result)
                
            },
            failure: function (response) {
                alert(response.d + "#2");
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

    requestEmpleados: function requestEmpleados(dataParam, onQueryDataEmpleados) {
        $.ajax({
            type: "POST",
            url: "../WebServices/CatWebService.asmx/Empleados",
            data: dataParam,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                var result = response.d;
                onQueryDataEmpleados(result);
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
        fnCreateMultipleSelect, fnCreateMultipleSelect,

        getNameMunicipio: getNameMunicipio,
        getArrNameMunicipio: getArrNameMunicipio,
        getNameGruposDeAtencion: getNameGruposDeAtencion,
        getArrNameGruposDeAtencion: getArrNameGruposDeAtencion,
        getSelectOptionID: getSelectOptionID,

        requestMunicipiosList: requestMunicipiosList,
        requestMpioAtiendeList: requestMpioAtiendeList,
        requestMpiosQueAtienden: requestMpiosQueAtienden,
        requestMpiosConAtencion: requestMpiosConAtencion,
        requestMpiosSinAtencion: requestMpiosSinAtencion,
        requestCreateMpioAtiende: requestCreateMpioAtiende,
        requestGrupoTodosMpiosYsedes: requestGrupoTodosMpiosYsedes,
        requestNombresGruposAtencion: requestNombresGruposAtencion,
        requestGruposAtencionALL: requestGruposAtencionALL,
        requestMpioYsedes: requestMpioYsedes,
        requestUpdateGrupoDeAtencion: requestUpdateGrupoDeAtencion,
        requestCreateGrupoDeAtencion: requestCreateGrupoDeAtencion,
        requestBorraGrupoDeAtencion: requestBorraGrupoDeAtencion,
        requestBorraSede: requestBorraSede,
        requestSedesInsertUpdate: requestSedesInsertUpdate,
        requestEmpleados: requestEmpleados,
        requestStatusEmpleados: requestStatusEmpleados,
        requestInsertEmpleado: requestInsertEmpleado,
        requestUpdateEmpleado: requestUpdateEmpleado

    }

}(catGen.catUtility = catGen.catUtility || {}, jQuery));