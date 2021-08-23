<%@ Page Language="C#" AutoEventWireup="true" CodeFile="PlantillaTramite.aspx.cs" Inherits="PageCatalogos_Web_PlantillaTramite" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
     <title>Tramit@</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" charset="utf-8" />


    <!-- Referencia al bootstrap -->
    <link rel="stylesheet" href="../../Content/css/bootstrap.min.css"/>
    <script src="../../Content/js/bootstrap.bundle.min.js"></script>


    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css"/>

   
    <script src="../../Content/script/index.js"></script>


    <!--JQuery-->
    <script type="text/javascript" src="../../ScriptsJQ/JQuery/Jquery-v3.5.1.js"></script>
   
    <!-- Cargar React. -->
    <!-- Nota: cuando se despliegue, reemplazar "development.js" con "production.min.js". -->
    <script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin ></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin ></script>
    <!-- Script de Pagina-->
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js" ></script>

    <script src="../JScript/jsAltaDeTramite.js" type="text/jsx"></script>
    <link rel="stylesheet"  href="../css/styleCatalogosform.css"/>

</head>
<body>
    
    
    <aside class="bd-sidebar">
        <nav class="collapse bd-links" id="bd-docs-nav" aria-label="Docs navigation">
            <ul class="list-unstyled mb-0 py-3 pt-md-1">
                <li class="mb-1">
                        <button class="btn d-inline-flex align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#f002-collapse" aria-expanded="false">
                            VERIFICACIONES
                        </button>
                        <div class="collapse" id="f002-collapse">
                            <button class="tree-mg-lf-01 btn d-inline-flex align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#s002-collapse" aria-expanded="false">
                                DEL RFC
                            </button>
                            <div>
                            <div class="collapse" id="s002-collapse">
                                <ul class="list-unstyled fw-normal pb-1 small">
                                    <li><a href="#" id="t007" class="d-inline-flex align-items-center rounded tree-mg-lf-02">DE DOMICILIO</a></li>
                                    <li><a href="#" id="t008" class="d-inline-flex align-items-center rounded tree-mg-lf-02">DE ESTABLECIMIENTO</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="collapse" id="f002-collapse">
                            <button class="tree-mg-lf-01 btn d-inline-flex align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#s003-collapse" aria-expanded="false">
                                DEL IEPS
                            </button>
                            <div class="collapse" id="s003-collapse">
                                <ul class="list-unstyled fw-normal pb-1 small">
                                    <li><a href="#" id="t012" class="d-inline-flex align-items-center rounded tree-mg-lf-02">DE EQUIPOS DE GASOLINERA</a></li>
                                </ul>
                            </div>
                        </div>
                </li>
                <li "mb-1">
                    <button class="btn d-inline-flex align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#f001-collapse" aria-expanded="false">
                        GARANTÍAS
                    </button>
                        <div class="collapse" id="f001-collapse">
                            <button class="tree-mg-lf-01 btn d-inline-flex align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#s001-collapse" aria-expanded="false">
                                OFRECIMIENTO DE GARANTÍAS
                            </button>
                            <div class="collapse" id="s001-collapse">
                                <ul class="list-unstyled fw-normal pb-1 small">
                                    <li><a href="#" id="t001" class="d-inline-flex align-items-center rounded tree-mg-lf-02">POLIZA DE FIANZA</a></li>
                                    <li><a href="#" id="t002" class="d-inline-flex align-items-center rounded tree-mg-lf-02">BILLETE DE DEPOSITO</a></li>
                                    <li><a href="#" id="t003" class="d-inline-flex align-items-center rounded tree-mg-lf-02">EMBARGO DE BIENES MUEBLES</a></li>
                                    <li><a href="#" id="t004" class="d-inline-flex align-items-center rounded tree-mg-lf-02">EMBARGO DE BIENES INMUEBLES</a></li>
                                    <li><a href="#" id="t005" class="d-inline-flex align-items-center rounded tree-mg-lf-02">EMBARGO DE NEGOCIACIÓN</a></li>
                                    <li><a href="#" id="t006" class="d-inline-flex align-items-center rounded tree-mg-lf-02">TERCERO SOLIDARIO</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="collapse" id="f001-collapse">
                            <button class="tree-mg-lf-01 btn d-inline-flex align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#s004-collapse" aria-expanded="false">
                                OTROS TRAMITES DE GARANTÍA
                            </button>
                            <div class="collapse" id="s004-collapse">
                                <ul class="list-unstyled fw-normal pb-1 small">
                                    <li><a href="#" id="t009" class="d-inline-flex align-items-center rounded tree-mg-lf-02">SUSTITUCIÓN DE GARANTÍA</a></li>
                                    <li><a href="#" id="t010" class="d-inline-flex align-items-center rounded tree-mg-lf-02">CANCELACIÓN DE GARANTÍA</a></li>
                                    <li><a href="#" id="t011" class="d-inline-flex align-items-center rounded tree-mg-lf-02">DEVOLUCIÓN DE GARANTÍA</a></li>
                                </ul>
                            </div>
                        </div>
                </li>
            </ul>
        </nav>
    </aside>

</body>
</html>
