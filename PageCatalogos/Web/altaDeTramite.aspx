<%@ Page Language="C#" AutoEventWireup="true" CodeFile="altaDeTramite.aspx.cs" Inherits="PageCatalogos_Web_altaDeTramite" %>

<!DOCTYPE html  html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1">
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
    <script src="https://unpkg.com/react@16.7.0/umd/react.production.min.js"></script>
    <script src="https://unpkg.com/react-dom@16.7.0/umd/react-dom.production.min.js"></script>

    <!--<script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin ></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin ></script>-->
    <!-- Script de Pagina-->
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js" ></script>

    <script src="../JScript/jsAltaDeTramite.js" type="text/jsx"></script>
    <link rel="stylesheet"  href="../css/styleCatalogosform.css"/>

  
   

   
     <style>
        .box-title {
            font-size: 13px;
            background: #00f;
            color: #fff;
            font-weight: bold;
            font-family: 'Fuente-Principal' !important;
            height:3rem;
            text-align:center;
            padding-bottom:3px;
        }
        .box-title > h5 {
            padding-top:10px;
        }
    </style>
<script>
    

    

</script>
  

</head>

<body>
    <!-- Nav -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <img src="../../Content/Images/Escudo.png" class="rounded float-start" alt="...">
        </div>
        <div class="collapse navbar-collapse" id="navbarText">    
      <span class="navbar-text">
          Módulo de Empleado
      </span>
        </div>
    </nav>
    <!--------->

<!-- Menú -->
    <table style="width:100%">
        <tr>
            <td>
                <div class="btn-group">
                    <a href="#" class="btn btn-outline-primary bt-sm" aria-current="page">Inicio</a>
                    <a href="../../PageCatalogos/Web/Municipios.aspx" class="btn btn-outline-primary bt-sm active">Catálogos</a>
                    <a href="../../PagePlantillas/Web/Plantillas.aspx" class="btn btn-outline-primary bt-sm">Pantillas</a>
                    <a href="../../PageSeguimiento/Web/Recibidos.aspx" class="btn btn-outline-primary bt-sm">Buzón</a>
                    <a href="#" class="btn btn-outline-primary bt-sm">Salir</a>
                </div>
            </td>
            <td>
                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                    Seguimiento :: Catálogos :: Municipios
                </div>
            </td>
        </tr>

    </table>
    <!---------->
    <br />
    <br />
    <div class="container-fluid">
        
        <div class="row">
                   <div  class="col-md-4">
                    <strong class="d-block h6 my-2 pb-2 border-bottom">ALTA DE FAMILIAS Y TRAMITES</strong>
                    <div class="mb-3">
                        <div class="form-check form-check-inline">
                          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inRadioFamilia" value="opFamilia" checked>
                          <label class="form-check-label" for="inlineRadio1">Familia</label>
                        </div>
                        <div class="form-check form-check-inline">
                          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inRadioSubFamilia" value="opSubFamilia" disabled>
                          <label class="form-check-label" for="inlineRadio2">Sub-Familia</label>
                        </div>
                        <div class="form-check form-check-inline">
                          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inRadioTramite" value="opTramite" disabled>
                          <label class="form-check-label" for="inlineRadio3">Tramite</label>
                        </div>
                    </div>


                    <div class="form-floating mb-3" id="select_floating_familias"></div>

                    <div class="form-floating mb-3" id="select_floating_subfamilias"></div>



<h6>Titulo de opcion seleccionada</h6>        
<div class="input-group mb-3">
        <div class="input-group has-validation">
            <span class="input-group-text" id="inputCorreo">Nombre de Familia</span>
            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="idInputCorreo" style="text-transform:uppercase" required/>
            <div class="invalid-feedback" id="inputRequiredCorreo">
            Por favor ingrese un Correo valido.
            </div>
        </div>
    </div>
      
<button class="btn btn-default btn-xs  btn-primary"  type="button" id="idCrear" onclick="onCrear(event)" >Crear</button>&nbsp;
<button class="btn btn-default btn-xs  btn-primary"  type="button" id="idActualizar" onclick="onActualizar(event)" >Actualizar</button>&nbsp;    
<button class="btn btn-default btn-xs  btn-primary"  type="button" id="idBorrar" onclick="onActualizar(event)" >Borrar</button>&nbsp;    
                       
                   </div>
<!-- **************************************************CENTRO*****************************************************************-->
                   <div  class="col-md-4 well">
                       
                        <strong class="d-block h6 my-2 pb-2 border-bottom">FAMILIAS </strong>                   
                       <button class="btn btn-default btn-xs  btn-primary"  type="button" id="idDown" onclick="onCrear(event)" >Bajar</button>&nbsp;
                       <button class="btn btn-default btn-xs  btn-primary"  type="button" id="idUp" onclick="onCrear(event)" >Subir</button>&nbsp;
                       
                        <div id="familas_navigation_container"></div>
                    </div>
<!-- ********************************************izquierda************************************************-->
                   <div class="col-md-4  well">
                       
                       <strong class="d-block h6 my-2 pb-2 border-bottom" >TRAMITES</strong>
                       <button class="btn btn-default btn-xs  btn-primary"  type="button" id="idDown" onclick="onCrear(event)" >Bajar</button>&nbsp;
                       <button class="btn btn-default btn-xs  btn-primary"  type="button" id="idUp" onclick="onCrear(event)" >Subir</button>&nbsp;
                        <div id="familas_navigation_container2"></div>
                       
                       

                   </div>
    </div>
    <div id="includeModal"></div>
    <script src="../JScript/TraUtility.js?v=1"></script>
</body>
</html>

