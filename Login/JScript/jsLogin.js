/// <reference path="../../Menu/Web/PantallaPrincipal.aspx" />

$(document).ready(function () {
    $.support.cors = true;
})


$(function (e) {
    var error = '';
    if (error != "" || error.length != 0) {
        if (new String(error).valueOf() == new String("Certificado Revocado").valueOf()) {
            error = "No se puede acceder al aplicativo porque su E.FIRMA está revocada.";
        }

        if (new String(error).valueOf() == new String("Certificado Caduco").valueOf()) {
            error = "No se puede acceder al aplicativo porque su E.FIRMA no está vigente.";
        }

        showMsgError(error);
    }
});

function despliega(error) {
    showMsgError(error);
}

changedata

function firmar(event) {
    if (validate()) {
        var numSerie = obtieneNumSerie();
        var co = document.getElementById("tokenuuid").value + "|" + document.getElementById("rfc").value + "|" + numSerie;
        
        var laFirma = generaFirma(document.getElementById("privateKeyPassword").value, co);
       
        if (laFirma != 'SIN_FIRMA') {
            var token = Base64.encode(Base64.encode(co) + "#" + laFirma);
            document.getElementById("token").value = token;
            document.getElementById("iudRFC").value = document.getElementById("rfc").value;
            document.getElementById("numSerie").value = numSerie;
            document.getElementById("laFirma").value = laFirma;
            document.getElementById("deslaFirma").value = co;
            var rfc = document.getElementById("rfc").value;
            var f = "";
            //document.getElementById("certform").submit();
            if (token == null || token == undefined) {
                showMsgError('<strong>¡Error!</strong> al generar su sesión.');
            }
            else {
                //showMsgError('<strong>¡La fiel es valida!</strong>');
                //var strRFC = $("#rfc").val();
                var strRFC = document.getElementById("rfc").value;
                //alert(strRFC);
                $.ajax({
                    type: "POST",
                    url: "../../Menu/WebServices/wsMenu.asmx/EncriptaTexto",
                    data: "{strTexto:'" + strRFC + "'}",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (response) {
                        var result = response.d;
                        //alert(result);
                        window.location.href = "../../Menu/Web/PantallaPrincipal.aspx?Param=" + result;
                    },
                    failure: function (response) {              
                        $('#divError').html((response.d));                
                    }
                });
            }
        }
    }
    else {
        event.preventDefault();
        showMsgError('<strong>¡Error!</strong> no ha llenado varios campos requeridos. Por favor verifique.');
    }
}

/**
 * Funcion para mostrar mensaje de error.
 * */
function showMsgError(mensaje) {
    $('#divError').html(mensaje);
    $('#divError').show();
    document.getElementById("submit").disabled = true;
}

function limpiarMsgs() {
    $('#divError').html("");
    $('#divError').hide();
    document.getElementById("submit").disabled = false;
}

$('#contrasena').click(function () {
    $(location).attr('href', jsurlciec)
});


function fnSalir() {
    window.close();
}