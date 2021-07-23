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
    <script src="../JScript/jsEmpleadosperFiles.js" type="text/javascript"></script>


  
   

   
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
                     
                            
                               <h4>Empleados sin perfiles</h4>


    <div class="input-group has-validation">
        <span class="input-group-text" id="inputBuscar">Empleado</span>
        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="idInputBuscar" style="text-transform:uppercase" />
        <button class="btn btn-default btn-xs  btn-primary"  type="button" id="idBuscar" onclick="onBuscar(event)" >Buscar</button>&nbsp;
    </div>

<select class="form-select" multiple aria-label="multiple select example">
  <option >Alberto Sahagun Arias</option>
  <option value="1">Ricardo Castro Perez</option>
  <option value="2">Verenice Longoria Perez</option>
  <option value="3">Claudia Lopez Gonzales</option>
    <option value="4">Jimena Gonzales Perez</option>
    <option value="5">Catalina Hinojosa Gonzales</option>
</select>
<br />&nbsp;<br />
<h4>Municipio Celaya</h4>
<div class="accordion-item" draggable="true" ondragstart="dragStart(event)" id="id3itemAcoor-2000">
    <h2 class="accordion-header" id="id3h2-2000">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#id3Collapse-2000" aria-expanded="false" aria-controls="Collapse-Celaya">Plaza dorada&nbsp;&nbsp;<span class="badge bg-primary  rounded-pill" style="color:white" id="id3badge-2000">3</span></button>
    </h2>
    <div id="id3Collapse-2000" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#idAccordionGrupos" style="">
        <div class="accordion-body"><span id="id3list-2000">
            <button type="button" class="list-group-item list-group-item-action" ondblclick="ondblclickSede(this)" id="id3idLiAcoor-undefined">Alberto Sahagun Arias<div class="pull-right" hidden="" id="id3XAcoor-6"><i class="fa fa-remove fa-1x" onclick="borrarItem(this)"></i></div></button>
            <button type="button" class="list-group-item list-group-item-action" ondblclick="ondblclickSede(this)" id="id3idLiAcoor-undefined">Ricardo Castro Perez<div class="pull-right" hidden="" id="id3XAcoor-13"><i class="fa fa-remove fa-1x" onclick="borrarItem(this)"></i></div>
            </button><button type="button" class="list-group-item list-group-item-action" ondblclick="ondblclickSede(this)" id="id3idLiAcoor-undefined">Verenice Longoria Perez<div class="pull-right" hidden="" id="id3XAcoor-15"><i class="fa fa-remove fa-1x" onclick="borrarItem(this)"></i></div></button></span>
        </div>
    </div>
</div>
                       
                   </div>
                   <div  class="col-md-4 well">
                       <h4>Alta perfiles empleados</h4>
                        <div class="input-group mb-3">
                            <div class="input-group has-validation">
                                <span class="input-group-text" id="inputRfc">RFC</span>
                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="idInputRfc" style="text-transform:uppercase"  disabled value="SAAA7408161v3"/>
                                <div class="invalid-feedback" id="inputRequiredRfc">
                                Por favor ingrese un RFC valido.
                                </div>
                            </div>
                        </div>



                        <div class="input-group mb-3">
                            <div class="input-group has-validation">
                                <span class="input-group-text" id="inputResponsable">Empleado</span>
                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="idInputName" disabled value="Alberto"/>
                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" id="idInputApellidoP" disabled value="Sahagun"/>
                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" id="idInputApellidoM" disabled value="Arias"/>
                                <div class="invalid-feedback" id="inputRequiredName">
                                    Por favor ingrese un Nombre valido.
                                </div>
                            </div>
                        </div>

                       <div class="input-group mb-3">
                            <div class="input-group has-validation">
                                <span class="input-group-text" id="inputSede">Sede</span>
                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="idInputSede"   disabled value="Plaza dorada"/>
                                
                            </div>
                        </div>

<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
  <label class="form-check-label" for="flexSwitchCheckDefault">Coordinador</label>
</div>
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked>
  <label class="form-check-label" for="flexSwitchCheckChecked">Empleado de atención</label>
</div>
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" id="flexSwitchCheckDisabled" >
  <label class="form-check-label" for="flexSwitchCheckDisabled">Firmante</label>
</div>
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" id="id01" >
  <label class="form-check-label" for="id01">Editor Plantillas</label>
</div>
 <div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" id="id02" >
  <label class="form-check-label" for="id02">Editor Catálogos Plantillas</label>
</div>
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" id="id03" >
  <label class="form-check-label" for="id03">Editor Catálogos Plantillas</label>
</div>
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" id="id04" >
  <label class="form-check-label" for="id04">Pubilcador</label>
</div>
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" id="id05" >
  <label class="form-check-label" for="id05">Revisor</label>
</div>

                      
                       <br />&nbsp;<br />

                        <button class="btn btn-default btn-xs  btn-primary"  type="button" id="idEnviar" onclick="onEnviarGrupo(event)" >Enviar</button>&nbsp;
                       <button class="btn btn-default btn-xs  btn-primary"  type="button" id="idActualizar" onclick="onActualizar(event)" >Actualizar</button>&nbsp;
                       <button class="btn btn-default btn-xs  btn-primary" type="button" id="idBorrar" onclick="onBorrarSede(event)" >Borrar</button>&nbsp;
                       <button class="btn btn-default btn-xs btn-primary" type="button" id="idLimpiar" onclick="onLimpiar(this)" >Limpiar</button>
                       
                        
                       
                    </div>
                    
                   <div class="col-md-4  well">
                       <h4>Empleados con perfiles </h4>

<div class="input-group has-validation">
    <span class="input-group-text" id="inputBuscar">Empleado</span>
    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="idInputBuscar" style="text-transform:uppercase" />
    <button class="btn btn-default btn-xs  btn-primary"  type="button" id="idBuscar" onclick="onBuscar(event)" >Buscar</button>&nbsp;
</div>
<select class="form-select" multiple aria-label="multiple select example">
  <option >Carlos Gutierrez Lopez</option>
  <option value="1">Roberto Mendez Perez</option>
  <option value="2">Carolina Hernandez Rodriguez</option>
  <option value="3">Claudia Ortiz Garcia</option>
    <option value="4">Jimena Zamarripa Gonzales</option>
    <option value="5">Victoria Cruz Oropeza</option>
</select>
                   </div>
            
            </div>
         </form>
    </div>
    <div class="container">
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#alertModal" hidden id="idAlerDialog">
        Launch demo modal
      </button>

      <!-- Modal -->
      <div class="modal fade" id="alertModal" tabindex="-1" aria-labelledby="alertModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="alertModalLabel">Modal title</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body" id="idMessageAlertDlg">
              ...
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onclick="onClickModal(1)">Continuar</button>
              <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onclick="onClickModal(2)" id="idBtnCancelar">Cancelar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <script src="../JScript/catUtility.js?v=1"></script>
</body>
</html>

