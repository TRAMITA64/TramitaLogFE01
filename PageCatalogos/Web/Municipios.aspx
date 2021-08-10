<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Municipios.aspx.cs" Inherits="PageMunicipios" %>

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
    <script src="../JScript/Municipios.js" type="text/javascript"></script>
    <link rel="stylesheet"  href="../css/styleCatalogosform.css"/>

     <style>
#div1 {
  width: 180px;
  height: 70px;
  padding: 10px;
  border: 1px solid #aaaaaa;
}
#div2 {
  width: 180px;
  height: 70px;
  padding: 10px;
  border: 1px solid #aaaaaa;
}
        .list-group-atiende{
            background : white;
        }
         .list-group-atendidos {
             min-height : 20rem;
             background : white;
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
    

    <form class="needs-validation" id="formMunicipiosQueAtienden" novalidate>
        <div class="container-fluid">
            <div class="row">
                <div  class="col-md-4  well">
                    <h4>Municipios sin atencion <span id="idNumSinAtMunicipios"></span></h4>
                    <span id="idSelectMunicipio" hidden></span>
                    <span id="idMpiosSinAtt" class="list-group">
                        <button type="button" class="list-group-item list-group-item-action active" aria-current="true">.....</button>
                    </span> 
                </div>
                <div  class="col-md-4 well">
                    <h4>Alta municipios que atienden</h4><span id="idNumQueAtMunicipios"></span>
                    
                    <div id="idAtiende" class="list-group list-group-atiende" ondrop="dropAtiende(event)" ondragover="allowDrop(event)">
                        <button type="button" id="title0" class="list-group-item list-group-item-action btn-button-title  disabled" aria-current="true" disabled>Municipio que Atiende</button>
                        <button type="button" id="title1"class="list-group-item list-group-item-action">Arrastra aqui</button>
                    </div>
                    <div class="input-group mb-3">
                        <input type="text" hidden class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="idHidde" required/>
                        <div class="invalid-feedback" id="idInputSedeNameMessage">
                                        Este campo es requerido.
                        </div>
                    </div>
                    <div class="input-group mb-3">
                        <button class="btn btn-default btn-xs  btn-primary"  type="button" id="idEnviar" onclick="onEnviarMunicipioAtiende(event)" >Enviar</button>&nbsp;
                        <button class="btn btn-default btn-xs  btn-primary" type="button" id="idActualizar" onclick="onActualizar(event)" >Actualizar</button>&nbsp;
                        <button class="btn btn-default btn-xs  btn-primary" type="button" id="idBorrar" onclick="onBorrarSede(event)" >Borrar</button>&nbsp;
                        <button class="btn btn-default btn-xs btn-primary"   type="button"id="idCancelar" onclick="onCancelarMunicipioAtiende(event)" >Limpiar</button>
                    </div>
                    
                    <div id="idAtendidos" class="list-group list-group-atendidos" ondrop="dropAtendidos(event)" ondragover="allowDrop(event)">
                            <button type="button" id="title2" class="list-group-item list-group-item-action btn-button-title disabled" aria-current="true" disabled>
                        Municipios atendidos
                        </button>
                        <button type="button" id="title3" class="list-group-item list-group-item-action">Arrastra aqui</button>
                    </div>
                </div>
                <div class="col-md-4  well">
                    <h4>Municipios con atencion <span id="idNumConAtMunicipios" ></span> </h4>
                    <div class="alert alert-primary" role="alert" id="idAlertGrupo" hidden>
                            ......
                    </div>
                    <div  class="list-group" >
                            <button type="button" id="title4" class="list-group-item list-group-item-action btn-button-title disabled" aria-current="true" disabled>
                                Municipios que atienden
                        </button>
                    </div>
                    <div class="acoordion " id="accordionConAtencion"></div>
                </div>
            </div>
        </div>
    </form>
    <div id="includeModal"></div>
    <script src="../JScript/catUtility.js?v=1"></script>
</body>
</html>

