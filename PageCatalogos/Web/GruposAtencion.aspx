<%@ Page Language="C#" AutoEventWireup="true" CodeFile="GruposAtencion.aspx.cs" Inherits="PageCatalogos_Web_GruposAtencion" %>

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
   
    <!-- Script de Pagina-->
    <script src="../JScript/jsGruposAtencion.js" type="text/javascript"></script>
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
        <form class="needs-validation" id="formGposAtencion" novalidate>
        <div class="row">
                   <div  class="col-md-4">
                       <h4>Municipios que atienden</h4>
                       <span id="idMunicipiosQueAtienden"></span>
                   </div>
                   <div  class="col-md-4 well">
                       <h4>Alta grupos de atencion</h4>
                       <div class="input-group mb-3">
                           <div class="input-group has-validation">
                                <span class="input-group-text" id="inputDireccion">Nombre grupo Atencion</span>
                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="idInputNombreGrupo" style="text-transform:uppercase" required/>
                                 <div class="invalid-feedback" id="inputMessage">
                                    Por favor ingrese un nombre para el grupo de atencion.
                                  </div>
                               </div>
                        </div>
                        
                        <button class="btn btn-default btn-xs  btn-primary"  type="button" id="idbtnCrear" onclick="onCrearGrupo(event)" >Crear grupo</button>&nbsp;
                        <br />
                       <br />
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" id="idInputTodosMunicipios" onchange="onchangeIncluirMunicipios(this)" disabled >
                            <label class="form-check-label" for="idInputTodos">Incluir en todos los municipios</label>
                        </div>
                       <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" id="idInputTodasSedes" onchange="onchangeIncluirSedes(this)" disabled >
                            <label class="form-check-label" for="idInputTodos">Incluir todas las sedes</label>
                        </div>
                       <br />
                       <button class="btn btn-default btn-xs  btn-primary"  type="button" id="idEnviar" onclick="onEnviarGrupo(event)" >Enviar</button>&nbsp;
                       <button class="btn btn-default btn-xs  btn-primary"  type="button" id="idActualizar" onclick="onActualizar(event)" >Actualizar</button>&nbsp;
                       <button class="btn btn-default btn-xs  btn-primary" type="button" id="idBorrar" onclick="onBorrarSede(event)" >Borrar</button>&nbsp;
                       <button class="btn btn-default btn-xs btn-primary" type="button" id="idLimpiar" onclick="onLimpiar(this)" >Limpiar</button>
                       <br />&nbsp;<br />

                        
                       <div  class="list-group" >
                            <button type="button" id="title4" class="list-group-item list-group-item-action btn-button-title disabled" aria-current="true" disabled>
                                <span id="idNameGrupo" >Nuevo grupo de atención</span>
                            </button>
                        </div>
                        <button type="button" class="list-group-item list-group-item-action" ondrop="dropMunicipio(event)" ondragover="allowMunicipio(event)">Arrastra aqui</button>
                       <div class="acoordion " id="idAccordionMpioSedes"></div>
                       
                    </div>
                    
                   <div class="col-md-4  well">
                       <h4>Grupos de atencion</h4>
                        <div class="alert alert-primary" role="alert" id="idAlertGrupo" hidden>
                          ......
                        </div>
                       <div class="acoordion " id="idAccordionGrupos"></div>
                       <br />

                   </div>
            
            </div>
         </form>
    </div>
    
        <div id="includeModal"></div>
        <script src="../JScript/catUtility.js?v=1"></script>
</body>
</html>

