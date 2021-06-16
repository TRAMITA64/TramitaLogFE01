<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Login.aspx.cs" Inherits="Login_Login" %>

<!DOCTYPE html>

<html lang="esp" style="height: 100%;" xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Tramit@</title>
    <meta charset="utf-8" />
    <meta http-equiv="content-language" content="es" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,IE=EmulateIE11,IE=EmulateIE10,IE=EmulateIE9,IE=11,IE=10,IE=9,IE=8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css"/>
    <link rel="stylesheet" href="../Content/css/main.css"/>
    <link rel="stylesheet" href="../Content/css/skin.css"/>


    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="http://netdna.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js"></script>
    <script src="../../Content/script/index.js"></script>

     <!-- Script pantalla login-->
    <script src="JScript/jsLogin.js">
    </script>

    <!-- Para FIEL-->
    <script src="../ScriptsJQ/Frames/plugins.js"></script>

    <script type="text/javascript">
        document.oncontextmenu = function () { return false; }
    </script>

    <!-- Javascript -->
    <script src="../ScriptsJQ/Frames/respond.min.js"></script>
    <script src="../ScriptsJQ/Frames/ie8.js"></script>
    <script type="text/javascript" src="../ScriptsJQ/Frames/libs.min.js"></script>
    <script type="text/javascript" src="../ScriptsJQ/Frames/sjcl.js"></script>
    <script type="text/javascript" src="../ScriptsJQ/Frames/sha1.js"></script>
    <script type="text/javascript" src="../ScriptsJQ/Frames/jsbn.js"></script>
    <script type="text/javascript" src="../ScriptsJQ/Frames/jsbn2.js"></script>
    <script type="text/javascript" src="../ScriptsJQ/Frames/rsa.js"></script>
    <script type="text/javascript" src="../ScriptsJQ/Frames/rsa2.js"></script>
    <script type="text/javascript" src="../ScriptsJQ/Frames/base64.js"></script>
    <script type="text/javascript" src="../ScriptsJQ/Frames/crypto-1.1.min.js"></script>
    <script type="text/javascript" src="../ScriptsJQ/Frames/asn1hex-1.1.min.js"></script>
    <script type="text/javascript" src="../ScriptsJQ/Frames/rsasign-1.2.min.js"></script>
    <script type="text/javascript" src="../ScriptsJQ/Frames/x509-1.1.min.js"></script>
    <script type="text/javascript" src="../ScriptsJQ/Frames/pbkdf2.js"></script>
    <script type="text/javascript" src="../ScriptsJQ/Frames/tripledes.js"></script>
    <script type="text/javascript" src="../ScriptsJQ/Frames/aes.js"></script>
    <script type="text/javascript" src="../ScriptsJQ/Frames/rc2.js"></script>
    <script type="text/javascript" src="../ScriptsJQ/Frames/asn1.js"></script>
    <script type="text/javascript" src="../ScriptsJQ/Frames/base64.js(1).js"></script>
    <script type="text/javascript" src="../ScriptsJQ/Frames/hex.js"></script>
    <script type="text/javascript" src="../ScriptsJQ/Frames/jquery-1.6.4.min.js"></script>

    <%-- <script type="text/javascript" src="../ScriptsJQ/JQuery/Jquery-v3.5.1.js"></script>--%>

    <style>
        body {
            padding: 0px;
            /*overflow-x: hidden;*/
            margin: 0px;
        }
    </style>

</head>
    
<body id="wrapper">

    <section id="top-header">
        <div class="container">
            <div class="row">
                <div class="col-md-7 col-sm-7 col-xs-7 top-header-links">
                    <ul class="contact_links">
                        <li><i class="fa fa-phone"></i><a href="#">+52 461 160 7260</a></li>
                        <li><i class="fa fa-envelope"></i><a href="#">rvelascod@hotmail.com</a></li>
                    </ul>
                </div>
                <div class="col-md-5 col-sm-5 col-xs-5 social">
                    <ul class="social_links">
                        <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                        <li><a href="#"><i class="fa fa-pinterest"></i></a></li>
                        <li><a href="#"><i class="fa fa-skype"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <header>
        <nav class="navbar navbar-inverse">
            <div class="container">
                <div class="row">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
				            <span class="sr-only">Toggle navigation</span>
				            <span class="icon-bar"></span>
				            <span class="icon-bar"></span>
				               <span class="icon-bar"></span>
			            </button>
                        <a class="navbar-brand" href="#">
                        <h1>Tramit@</h1><span>Portal de trámites</span></a>
                    </div>
                </div>
            </div>
        </nav>
    </header>

    <form role="form" method="post">

        <p></p>
        <p></p>
      
         <div class="section-heading text-center">
                <div class="col-md-12 col-xs-12">
                    <span>INGRESAR CON SU FIRMA ELECTRÓNICA</span>
                </div>
         </div>

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

        <p></p>
        <p></p>

        <section id="footer">
        <div class="container">
            <div class="row">
                <div class="col-md-3 col-sm-3 col-xs-12 block">
                    <div class="footer-block">
                        <h4>Address</h4>
                        <hr/>
                        <p>Lorem ipsum dolor sit amet sit legimus copiosae instructior ei ut vix denique fierentis ea saperet inimicu ut qui dolor oratio mnesarchum.
                        </p>
                        <a href="#" class="learnmore">Learn More <i class="fa fa-caret-right"></i></a>
                    </div>
                </div>

                <div class="col-md-3 col-sm-3 col-xs-12 block">
                    <div class="footer-block">
                        <h4>Enlaces Útiles</h4>
                        <hr/>
                        <ul class="footer-links">
                            <li><a href="#">Acerca de Nosotros</a></li>
                            <li><a href="#">Desarrollos</a></li>
                            <li><a href="#">Portfolio</a></li>
                            <li><a href="#">Contacto</a></li>
                            <li><a href="#">Ingresar</a></li>
                            <li><a href="#">Salir</a></li>
                        </ul>
                    </div>
                </div>

                <div class="col-md-3 col-sm-3 col-xs-12 block">
                    <div class="footer-block">
                        <h4>Cumunidad</h4>
                        <hr/>
                        <ul class="footer-links">
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Forum</a></li>
                            <li><a href="#">Free Goods</a></li>
                        </ul>
                    </div>
                </div>

                <div class="col-md-3 col-sm-3 col-xs-12 <block></block>">
                    <div class="footer-block">
                        <h4>Recent Posts</h4>
                        <hr/>
                        <ul class="footer-links">
                            <li>
                                <a href="#" class="post">Lorem ipsum dolor sit amet</a>
                                <p class="post-date">May 25, 2017</p>
                            </li>
                            <li>
                                <a href="#" class="post">Lorem ipsum dolor sit amet</a>
                                <p class="post-date">May 25, 2017</p>
                            </li>
                            <li>
                                <a href="#" class="post">Lorem ipsum dolor sit amet</a>
                                <p class="post-date">May 25, 2017</p>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>


    </section>

    <section id="bottom-footer">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-sm-6 col-xs-12 btm-footer-links">
                    <a href="#">Política de Privacidad</a>
                    <a href="#">Términos de Uso</a>
                </div>
                <div class="col-md-6 col-sm-6 col-xs-12 copyright">
                    Developed by <a href="#">Celaya Software Solutions</a> designed by <a href="#">rob!PLAY</a>
                </div>
            </div>
        </div>
    </section>


</body>
</html>
