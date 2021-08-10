<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Sedes.aspx.cs" Inherits="PageCatalogos_Web_sedes" %>

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
    <script src="../JScript/JSsedes.js" type="text/javascript"></script>
    <link rel="stylesheet"  href="../css/styleCatalogosform.css"/>

     <style>
        
        .box-title > h5 {
            padding-top:10px;
        }
    </style>
<script>
    

    

</script>
  

</head>

<body id="wrapper">

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
    
    <form class="needs-validation" id="formSedes" novalidate>
    <div class="container-fluid">
        <div class="row">
            
                <div  class="col-md-4  well">
                    <h4>Municipios que atienden</h4>
                    <span id="idMunicipiosQueAtienden"></span>
                </div>
                <div  class="col-md-4  well">
                    
                        <h4>Alta de Sedes</h4>
                        
                        
    
                        <div class="input-group mb-3">
                               <span class="input-group-text" id="inputMunicipioName">Municipio</span>
                            <input type="text" class="form-control disabled" id="idMunicipioName" ondrop="dropSede(event)" ondragover="allowDrop(event)"  aria-current="true"  value="Arrastra aqui" disabled/>
                         </div> 
                         <div class="input-group mb-3">

                           <span class="input-group-text" id="inputSedeName">Nombre Sede</span>
                           <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="idInputSedeName" required/>
                            <div class="invalid-feedback" id="idInputSedeNameMessage">
                                    Este campo es requerido.
                            </div>
                           <input id="idSedeInserta" type="hidden" />
                       </div>
                    
                       <div class="input-group mb-3">
                          <span class="input-group-text" id="inputDireccion">Dirección</span>
                          <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="idInputDireccion"  required/>
                           <div class="invalid-feedback" id="idInputDireccionMessage">
                                    Este campo es requerido.
                            </div>
                       </div>


                        <div class="input-group mb-3">
                          <span class="input-group-text" id="inputResponsable">Responsable</span>
                            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="idInputName" required/>
                            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" id="idInputApellidoP" required/>
                            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" id="idInputApellidoM" required/>
                            <div class="invalid-feedback" id="idInputNameMessage">
                                    Este campo es requerido.
                            </div>
                        </div>
                        <div class="input-group mb-3">
                          <span class="input-group-text" id="inputCorreo">Correo electrónico</span>
                          <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="idInputCorreo" required/>
                            <div class="invalid-feedback" id="idInputCorreoMessage">
                                    Este campo es requerido.
                            </div>
                        </div>
                        <div class="input-group mb-3">  
                          <span class="input-group-text" id="inputTelefono">Teléfono</span>
                          <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="idInputTelefono" required/> 
                          <div class="invalid-feedback" id="idInputTelefonoMessage">
                                    Este campo es requerido.
                          </div>
                       </div>

                         <div>
                            <br />
                            <button class="btn btn-default btn-xs  btn-primary"  type="button" id="idEnviar" onclick="onEnviarSede(event)" >Enviar</button>&nbsp;
                             <button class="btn btn-default btn-xs  btn-primary" type="button" id="idActualizar" onclick="onActualizar(event)" >Actualizar</button>&nbsp;
                             <button class="btn btn-default btn-xs  btn-primary" type="button" id="idBorrar" onclick="onBorrarSede(event)" >Borrar</button>&nbsp;
                            <button class="btn btn-default btn-xs btn-primary"   type="button"id="idCancelar" onclick="onLimpiarSede(event)" >Limpiar</button>
                        </div>
                        <br />
                        <div class="acoordion " id="idAccordionMpioSedes"></div>
                    
                </div>
                <div  class="col-md-4  well">
                    <h4>Municipios atención</h4>
                    <div  class="list-group" >
                            <button type="button" id="title4" class="list-group-item list-group-item-action btn-button-title disabled" aria-current="true" disabled>
                                Sedes de atención&nbsp;<span id="idNumSedes"></span>
                            </button>
                    </div>
                    
                    
                    <div class="alert alert-primary" role="alert" id="idAlertGrupo" hidden>
                          ......
                     </div>
                    <div class="acoordion " id="idAccordionTodosMpioSedes"></div>
                    
                </div>
            
        </div>
    </div>
    </form>
    <div id="includeModal"></div>
    <script src="../JScript/catUtility.js?v=1"></script>         
</body>
</html>

