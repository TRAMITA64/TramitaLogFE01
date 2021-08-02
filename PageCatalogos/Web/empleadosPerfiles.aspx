<%@ Page Language="C#" AutoEventWireup="true" CodeFile="empleadosPerfiles.aspx.cs" Inherits="PageCatalogos_empleadosPerfiles" %>

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
    <script src="../JScript/jsPerfillesEmpleado.js" type="text/javascript"></script>


  
   

   
     <style>
         

        
        .containerCheck{
            
            display:grid;
            grid-template-columns:1fr 1fr 1fr 1fr 1fr;
            grid-template-rows:auto 1fr ;
            grid-template-areas:
                "header header header header header1"
                "Empty content content content content";
                
        }
        .itemCheckPrincipal{
            
            grid-area:header;
        }
        .DivCheckEmpty{
            
            grid-area:Empty;
            grid-column:1/5;
        }
        .itemChecSecundario{
            
            grid-area:content;
        }
        .itemCheckBtn{
            grid-area:header1;
        }
         .btn_check_perfiles {
             top: .65rem;
             right: .65rem;
             z-index: 10;
             font-size: .65em;
             color: #0d6efd;
             background-color: #fff;
             border: 1px solid;
             border-radius: .25rem;
         }
         .cajaPerfilDetalle{
             display:flex;
             flex-direction:column;
             border: solid 1px transparent;
             border-radius:6px;
             box-shadow:0 2px 5px rgb(0 0 0 / 14%);
             margin: 10px;
             min-height:10rem;
         }
         .cajaPerfilHeader{
             background:#0d6efd;
             text-align:center;
             padding-top:5px;
             color:#fff;
             border-radius:6px;
         }
         .cajaPerfilContent > p{
             padding-top:5px;
             padding-left:3rem;
         }
         .cajaPerfilContent > li{
             padding-top:5px;
             
         }
         .noVisible{
             display:none;
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

    <div class="container-fluid">
        <form class="needs-validation" id="formPerfilEmpleados" novalidate>
        <div class="row">
                   <div  class="col-md-4">
                               <h4>Selecciona empleado</h4>
                                <div class="input-group mb-3">
                                    <div class="input-group">
                                        <span class="input-group-text" id="inputFiltrarM01">Filtrar Municipio</span>
                                        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="idInputFiltrarMpio" style="text-transform:uppercase" />
                                    </div>
                                    <div class="input-group" id="msMunicipios">
                                        ................
                                    </div>
                                </div>
                                 <h4 id="idTitleMunicipio">-------</h4>
                                 <div class="acoordion" id="idAccordionSedeEmpleado">----</div> 
                                <br />
                                <div class="input-group mb-3">
                                    <div class="input-group has-validation">
                                        <span class="input-group-text" id="inputFiltrarEmp">Filtrar Empleado</span>
                                        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="idInputFiltrarEmp" style="text-transform:uppercase" />
                                    </div>
                                    <div class="input-group" id="msEmpleados">
                                        --------------------
                                    </div>
                                </div>
                       
                   </div>
                   <div  class="col-md-4 well">
                       <h4>Perfiles empleado  </h4>
                       <div class="alert alert-danger" role="alert" id="idAlertPerfiles" hidden>
                          ......
                        </div>
                        <div class="input-group mb-3">
                            <div class="input-group has-validation">
                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="idInputNameMid" disabled />
                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" id="idInputApellidoPMid" disabled />
                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" id="idInputApellidoMMid" disabled />
                            </div>
                        </div>
                       <h5>Tipo de empleado</h5>
                       <div id="perfilesConfig">
                        -------------------
                        </div>
                       <br />&nbsp;<br />
                       <button class="btn btn-default btn-xs  btn-primary"  type="button" id="idActualizar" onclick="onActualizar(event)" >Actualizar</button>&nbsp;
                       <button class="btn btn-default btn-xs btn-primary" type="button" id="idLimpiar" onclick="onLimpiar(this)" >Limpiar</button>
                    </div>
                    
                   <div class="col-md-4  well">
                       <h4>Detalle empleado</h4>
                       <div class="alert alert-primary" role="alert" id="idAlertDetalleEmpleado" hidden>
                          ......
                        </div>
                       <div class="input-group mb-3">
                            <div class="input-group has-validation">
                                <span class="input-group-text" id="inputRfc">RFC</span>
                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="idInputRfc" style="text-transform:uppercase"  disabled />

                            </div>
                        </div>
                        <div class="input-group mb-3">
                            <div class="input-group has-validation">
                                <span class="input-group-text" id="inputEmpleado">Empleado</span>
                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="idInputName" disabled />
                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" id="idInputApellidoP" disabled />
                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" id="idInputApellidoM" disabled />
                            </div>
                        </div>

                       <div class="input-group mb-3">
                            <div class="input-group has-validation">
                                <span class="input-group-text" id="inputMunicipio">Municipio</span>
                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="idInputMunicipio"   disabled />
                                <span class="input-group-text" id="inputSede">Sede</span>
                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="idInputSede"   disabled />
                            </div>
                        </div>
                       <div class="input-group mb-3">
                            <div class="input-group has-validation">
                                <span class="input-group-text" id="inputResponsable">Alta</span>
                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="idInputAlta" disabled />
                                <span class="input-group-text" id="inputStatus">Estado</span>
                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" id="idInputStatus" disabled />
                            </div>
                        </div>
                        <div id="TabPerfiles">
                            ------------------------
                        </div>
  
                </div>
         </form>
    </div>
    
    <div id="includeModal"></div>    
    <script src="../JScript/catUtility.js?v=1"></script>
</body>
</html>

