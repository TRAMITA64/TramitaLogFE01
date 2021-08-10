<%@ Page Language="C#" AutoEventWireup="true" CodeFile="AltaEmpleados.aspx.cs" Inherits="PageCatalogos_Web_AltaEmpleados" %>

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
    <script src="../JScript/jsAltaEmpleados.js" type="text/javascript"></script>
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
                       <h4>Municipios que atienden</h4>
                       <span id="idMpiosQueAtienden"></span>
                   </div>
                   <div  class="col-md-4 well">
                       <div class="alert alert-danger" role="alert" id="idAlertEmp" hidden>
                          ......
                        </div>
                       <form class="needs-validation" id="formEmpleados" novalidate>
                           <h4>Alta Empleados</h4>
                            <div class="input-group mb-3">
                                <div class="input-group has-validation">
                                    <span class="input-group-text" id="inputRfc">RFC</span>
                                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="idInputRfc" style="text-transform:uppercase" required/>
                                    <div class="invalid-feedback" id="inputRequiredRfc">
                                    Por favor ingrese un RFC valido.
                                    </div>
                                </div>
                            </div>

                            <div class="input-group mb-3">
                                <div class="input-group has-validation">
                                    <span class="input-group-text" id="inputNombre">Nombre</span>
                                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="idInputName" required />
                                    <div class="invalid-feedback" id="inputRequiredNombre">
                                        Por favor ingrese un Nombre valido.
                                    </div>
                                </div>
                            </div>

                            <div class="input-group mb-3">
                                <div class="input-group has-validation">
                                    <span class="input-group-text" id="inputResponsable">Apellidos</span>
                                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" id="idInputApellidoP" required />
                                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" id="idInputApellidoM" required />
                                    <div class="invalid-feedback" id="inputRequiredName">
                                        Por favor ingrese un Nombre valido.
                                    </div>
                                </div>
                            </div>

                            <div class="input-group mb-3">
                                <div class="input-group has-validation">
                                    <span class="input-group-text" id="inputCorreo">Correo</span>
                                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="idInputCorreo" style="text-transform:uppercase" required/>
                                    <div class="invalid-feedback" id="inputRequiredCorreo">
                                    Por favor ingrese un Correo valido.
                                    </div>
                                </div>
                            </div>
                            <div class="input-group mb-3">
                                <div class="input-group has-validation">
                                    <span class="input-group-text" id="inputAlta">Fecha Alta</span>
                                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="idInputAlta" style="text-transform:uppercase" disabled/>
                                    <span class="input-group-text" id="inputEstado">Estado</span>

                                    <div   id="sttatusEmp">
                                      ------------------
                                    </div>

                                </div>
                            </div>

                            <div class="row g-2">
                                  <div class="col-md">
                                        <div class="form-floating" id="fsMpiosQueAtienden"><!--floating Select municipios-->
                                          ...........
                                        </div>
                                  </div>
                                  <div class="col-md">
                                        <div class="form-floating" id="fsSedesMunicipio"><!--floating Select sedes-->
                                            ..........
                                        </div>
                                  </div>
                            </div>
                           <br />&nbsp;<br />

                            <button class="btn btn-default btn-xs  btn-primary"  type="button" id="idEnviar" onclick="onEnviar(event)" >Enviar</button>&nbsp;
                           <button class="btn btn-default btn-xs  btn-primary"  type="button" id="idActualizar" onclick="onActualizar(event)" >Actualizar</button>&nbsp;
                           <button class="btn btn-default btn-xs btn-primary" type="button" id="idLimpiar" onclick="onLimpiar(this)" >Limpiar</button>
                           </form>   
                        </div>
                    
                   <div class="col-md-4  well">
                       <h4>Empleados</h4>
                       <div class="alert alert-primary" role="alert" id="idAlertGrupo" hidden>
                          ......
                        </div>

                    <div class="input-group">
                        <span class="input-group-text" id="inputFiltrar">Filtrar</span>
                        <input type="text" class="form-control" aria-label="Sizing example input"  aria-describedby="inputGroup-sizing-default" id="idInputFiltrar" style="text-transform:uppercase" />
                    </div>
                    <div id="msEmpleados">
                        --------------------
                    </div>
                     <br />&nbsp;<br />
                       <h4 id="idTitleMunicipio">-------</h4>
                        <div class="acoordion " id="idAccordionSedeEmpleado">----</div>    
                   </div>
             </div>
    </div>
    <div id="includeModal"></div>
    <script src="../JScript/catUtility.js?v=1"></script>
</body>
</html>

