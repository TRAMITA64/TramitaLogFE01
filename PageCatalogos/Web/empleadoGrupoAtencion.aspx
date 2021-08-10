<%@ Page Language="C#" AutoEventWireup="true" CodeFile="empleadoGrupoAtencion.aspx.cs" Inherits="PageCatalogos_Web_empleadoGrupoAtencion" %>

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
    <script src="../JScript/jsEmpleadosGruposDeAtencion.js" type="text/javascript"></script>
    <link rel="stylesheet"  href="../css/styleCatalogosform.css"/>


  
   

   
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
                        <h3>Empleados</h3>
                        
                        <div id="idMpiosQueAtienden" class="mb-2">...</div>
    
                        <h6 id="idMunicipioListEmp">Empleados municipio</h6>
                        <div class="input-group mb-3">
                            <div class="input-group has-validation">
                                <span class="input-group-text" id="inputFiltrarEmpSinGpo">Filtrar</span>
                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="idInputFiltrarEmpSinGpo" style="text-transform:uppercase">
                                
                                <button id="idBtnAgregar" type="button" class="btn btn-primary" value="Agregar">>></button>
                            </div>
                            
                            <div class="input-group"  id="msEmpSinGrupo">
                                  --------------------
                            </div>   
                        </div>
                    
                </div>
                <div  class="col-md-4 well">
                        <h3>Atualizar grupo de atención</h3>
                        
                                <div class="alert alert-danger" role="alert" id="idAlertGruposAtencion" hidden>
                                  ......
                                </div>
                                <div  class="list-group">
                                    <button type="button" id="title0" class="list-group-item list-group-item-action btn-button-title  disabled" aria-current="true" disabled>Grupos atención</button>
                                </div>
                                <div class="form-floating mb-3" id="fsGruposDeAtencion"><!--floating Select municipios-->
                                    ...........
                                </div>
                                  
                               
                                 <div class="input-group has-validation">
                                    <button id="idBtnQuitar" type="button" class="btn btn-primary" value="Agregar"><<</button>
                                    <input type="text" id="title1" class="form-control disabled" aria-current="true" value="Empleados en grupo de atención" disabled/>
                                </div>
                                <div class="input-group mb-4" id="msEmpUpdates">
                                    <select class="form-select" id="idmsEmpUpdates" multiple="" aria-label="Empleados con atención"> 
                                    </select>
                                </div>

                                  <div  class="input-group mb-2">
                                    <button class="btn btn-default btn-xs  btn-primary"  type="button" id="idActualizar" onclick="onActualizar(event)" >Actualizar</button>&nbsp;
                                    <button class="btn btn-default btn-xs btn-primary" type="button" id="idLimpiar" onclick="onLimpiar(this)" >Limpiar</button>            
                                </div>
            

                      
                      

                 </div>   
                <div class="col-md-4  well">
                        <h3>Grupos de atención</h3>
                        <div class="alert alert-primary" role="alert" id="idAlertGrupo" hidden>
                          ......
                        </div>
                        <div class="input-group mb-3">
                            <div class="input-group has-validation">
                                <span class="input-group-text" id="InputFiltrarEmpConGrupo">Filtrar</span>
                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="idInputFiltrarEmpConGrupo" style="text-transform:uppercase">
                            </div>
                            <div class="input-group" id="msEmpConGrupo">
                             --------------------
                            </div>
                        </div>
                    <div class="acoordion " id="idAccordionGrupAttEmp">
                    ------
                    </div>
                </div>
            </div>
         </form>
    </div>
    
    <div id="includeModal"></div>    
    <script src="../JScript/catUtility.js?v=1"></script>
</body>
</html>

