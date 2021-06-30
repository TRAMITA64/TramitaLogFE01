<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Login.aspx.cs" Inherits="Login_Login" %>

<!DOCTYPE html>

<html lang="esp" style="height: 100%;" xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>SAT - AGR</title>
    <meta charset="utf-8" />
    <meta http-equiv="content-language" content="es" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,IE=EmulateIE11,IE=EmulateIE10,IE=EmulateIE9,IE=11,IE=10,IE=9,IE=8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <%-- <link rel="stylesheet" href="../Content/css/bootstrap.css" />--%>
    <link rel="stylesheet" href="../../General/Estilos/StyleSAT.css" />
    <link rel="stylesheet" type="text/css" href="../../General/font-awesome/css/font-awesome.css" />
    <!--Style GOB-->
    <link rel="stylesheet" type="text/css" href="../../Content/gobmx/css/main.css" />
    <!-- Script pantalla login-->
    <script src="../JScript/jsLogin.js"></script>

    <!-- Para FIEL-->
    <script src="../../ScriptsJQ/Frames/plugins.js"></script>

    <script type="text/javascript">
        document.oncontextmenu = function () { return false; }
    </script>

    <!-- Javascript -->
    <script src="../../ScriptsJQ/Frames/respond.min.js"></script>
    <script src="../../ScriptsJQ/Frames/ie8.js"></script>
    <script type="text/javascript" src="../../ScriptsJQ/Frames/libs.min.js"></script>
    <script type="text/javascript" src="../../ScriptsJQ/Frames/sjcl.js"></script>
    <script type="text/javascript" src="../../ScriptsJQ/Frames/sha1.js"></script>
    <script type="text/javascript" src="../../ScriptsJQ/Frames/jsbn.js"></script>
    <script type="text/javascript" src="../../ScriptsJQ/Frames/jsbn2.js"></script>
    <script type="text/javascript" src="../../ScriptsJQ/Frames/rsa.js"></script>
    <script type="text/javascript" src="../../ScriptsJQ/Frames/rsa2.js"></script>
    <script type="text/javascript" src="../../ScriptsJQ/Frames/base64.js"></script>
    <script type="text/javascript" src="../../ScriptsJQ/Frames/crypto-1.1.min.js"></script>
    <script type="text/javascript" src="../../ScriptsJQ/Frames/asn1hex-1.1.min.js"></script>
    <script type="text/javascript" src="../../ScriptsJQ/Frames/rsasign-1.2.min.js"></script>
    <script type="text/javascript" src="../../ScriptsJQ/Frames/x509-1.1.min.js"></script>
    <script type="text/javascript" src="../../ScriptsJQ/Frames/pbkdf2.js"></script>
    <script type="text/javascript" src="../../ScriptsJQ/Frames/tripledes.js"></script>
    <script type="text/javascript" src="../../ScriptsJQ/Frames/aes.js"></script>
    <script type="text/javascript" src="../../ScriptsJQ/Frames/rc2.js"></script>
    <script type="text/javascript" src="../../ScriptsJQ/Frames/asn1.js"></script>
    <script type="text/javascript" src="../../ScriptsJQ/Frames/base64.js(1).js"></script>
    <script type="text/javascript" src="../../ScriptsJQ/Frames/hex.js"></script>
    <script type="text/javascript" src="../../ScriptsJQ/Frames/jquery-1.6.4.min.js"></script>

    <%-- <script type="text/javascript" src="../ScriptsJQ/JQuery/Jquery-v3.5.1.js"></script>--%>

    <style>
        body {
            padding: 0px;
            /*overflow-x: hidden;*/
            margin: 0px;
        }
    </style>

</head>
<body>
    <form role="form" method="post">
        <!-- Cabecera -->
        <nav class="navbar" style="margin-top: 60px;font-family: 'Fuente-Principal'">
            <div class="container-fluid" style="background: #12322b;">
                <div class="row">
                    <div class="col-sm-4" style="display: inline-block">
                        <div class="navbar-header ">
                            <a class="navbar-brand " href="#" style="padding-top: 8px; ">
                                <h4 class="text-left text textoLogo" style="margin-top: 6px';">SAT</h4>
                                <h5 class="text-left text textoLogo" style="font-size: 12px;">Servicio de Administración Tributaria</h5>
                            </a>
                        </div>
                    </div>
                    <div class="col-sm-4  text-center" style="display: inline-block; align-content: center;">
                        <h4 class="text-center text" style="color: #bc955c">Acceso al Portal de Aplicaciones AGR</h4>
                    </div>
                    <div class="col-sm-4 text-right">
                        <a href="javascript:fnSalir();">
                            <span class="fa fa-sign-out pull-right" style="color: white; font-size: 20px; padding-top: 15px"></span>
                        </a>
                    </div>
                </div>
            </div>
        </nav>

        <!-- FORMULARIO -->
        <div class="row formLogin" >
            <div class="col" style="margin-left: 8px;  padding: 30px; border: 1px solid #545454; border-radius: 10px; width:45%; margin:auto">

                <!-- Mensaje ERROR -->
                <div id="divError" class="alert alert-danger" style="display: none;"></div>

                <!-- FORMULARIO -->
                <div class="form-group">
                    <div class="input-group">
                        <label class="control-label" for="txtCertificate">Certificado (.cer):</label>
                        <input class="form-control" type="text" placeholder="Ubicación del certificado" name="txtCertificate" id="txtCertificate" size="25" readonly="readonly" style="width: 95%" onclick="limpiarMsgs();" />
                        <input type="file" style="display: none" accept=".cer" id="fileCertificate" onclick="limpiarMsgs();" />

                        <span class="input-group-btn" style="vertical-align: bottom">
                            <button type="button" onclick="limpiarMsgs();" class="btn btn-default" id="btnCertificate" name="btnCertificate">Buscar</button>
                                
                        </span>
                    </div>
                    <span id="msgErrorCert" style="display: none; color: #D0021B; font-size: 11px; font-weight: initial;">Este campo es obligatorio.</span>
                </div>

                <div class="form-group">
                    <div class="input-group">
                        <label class="control-label" for="txtPrivateKey">Clave privada (.key):</label>
                        <input class="form-control" id="txtPrivateKey" name="txtPrivateKey" size="25" type="text" placeholder="Ubicación de la llave privada" readonly="readonly" style="width: 95%" onclick="limpiarMsgs();" />
                        <input type="file" style="display: none" accept=".key" id="filePrivateKey" onclick="limpiarMsgs();" />

                        <span class="input-group-btn" style="vertical-align: bottom">
                            <button type="button" class="btn btn-default" name="btnPrivateKey" id="btnPrivateKey" onclick="limpiarMsgs();">Buscar</button>
                        </span>
                    </div>
                    <span id="msgErrorKey" style="display: none; color: #D0021B; font-size: 11px; font-weight: initial;">Este campo es obligatorio.</span>
                </div>

                <div class="form-group">
                    <label class="control-label" for="privateKeyPassword">
                        Contraseña de clave privada:
                    </label>
                    <input class="form-control" id="privateKeyPassword" type="password" name="privateKeyPassword" placeholder="Contraseña" onclick="limpiarMsgs();" />
                    <span id="msgErrorPass" style="display: none; color: #D0021B; font-size: 11px; font-weight: initial;">Este campo es obligatorio.</span>
                </div>

                <div class="form-group">

                    <input class="form-control" name="rfc" id="rfc" placeholder="RFC" type="text" disabled="" />
                    <span id="msgErrorRfc" style="display: none; color: #D0021B; font-size: 11px; font-weight: initial;">Este campo es obligatorio.</span>
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input class="btn btn-primary pull-right" type="button" value="Enviar" name="submit" onclick="firmar(event);" />
            </div>
        </div>


    </form>
    <form enctype="application/x-www-form-urlencoded" name="certform" id="certform" style="display: none;">
        <input type="text" id="tokenuuid" value="" />
        <input type="text" id="iudRFC" name="iudRFC" />
        <input type="text" id="key" name="key" value="null" />
        <input type="text" id="deslaFirma" name="deslaFirma" value="null" />
        <input type="text" id="token" name="token" value="null" />
        <input type="text" id="numSerie" name="numSerie" value="null" />
        <input type="text" id="laFirma" name="laFirma" value="null" />
        <input type="text" id="urlApplet" name="urlApplet" value="http://localhost" />

    </form>

    <script src="../../Content/js/bootstrap.bundle.js"></script>
    <script src="../../Content/gobmx/scripts/main.js"></script>
</body>
</html>
