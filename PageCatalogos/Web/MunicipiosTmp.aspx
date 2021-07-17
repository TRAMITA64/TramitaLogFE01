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
            min-height : 9rem;
            background : white;
        }
         .list-group-atendidos {
             min-height : 20rem;
             background : white;
         }
    </style>

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

    <!-- Catálogos -->
    <div class="container-fluid">
        <div class="row">
            <div  class="col-md-3 well" style="width:auto; height:514px; overflow: scroll;">
                <h6>Municipios sin atencion<span id="idNumSinAtMunicipios"></span></h6>
                <span id="idMpiosSinAtt" class="list-group">
                    <button type="button" class="list-group-item list-group-item-action active" aria-current="true">Municipios sin atencion</button>
                </span> 
            </div>

                <div  class="col-md-3 well">
                    <h6>Alta municipios que atienden</h6>
                    <span id="idNumQueAtMunicipios"></span>
                    <div id="idAtiende" class="list-group list-group-atiende" ondrop="dropAtiende(event)" ondragover="allowDrop(event)">
                        <button type="button" class="list-group-item list-group-item-action active" aria-current="true" disabled>Municipio que Atiende</button>
                        <button type="button" class="list-group-item list-group-item-action">Arrastra aqui</button>
                    </div>
                    <br />
                    <div id="idAtendidos" class="list-group list-group-atendidos" ondrop="dropAtendidos(event)" ondragover="allowDrop(event)" style="width:auto; height:100px; overflow: scroll;">
                         <button type="button" class="list-group-item list-group-item-action active" aria-current="true" disabled> Municipios atendidos</button>
                        <button type="button" class="list-group-item list-group-item-action">Arrastra aqui</button>
                    </div>
                    <div>
                        <br />
                        <button class="btn btn-default  btn-primary" id="idEnviar" onclick="onEnviarMunicipioAtiende(event)" >Enviar</button>&nbsp;
                        <button class="btn btn-default  btn-primary" id="idCancelar" onclick="onCancelarMunicipioAtiende(event)" >Cancelar</button>
                    </div>
               </div>

               <div class="col-md-3  well">
                    <h6>Municipios con atencion <span id="idNumConAtMunicipios" ></span> </h6>
                    <div class="acoordion " id="accordionExample"></div>
               </div>
        </div>
    </div>
    <div class="container">
      <h2>Basic Modal Example</h2>
      <!-- Button trigger modal -->
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>

      <!-- Modal -->
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              ...
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
</body>
</html>

