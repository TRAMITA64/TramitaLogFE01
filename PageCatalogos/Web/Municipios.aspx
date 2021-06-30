<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Municipios.aspx.cs" Inherits="PageMunicipios" %>

<!DOCTYPE html  html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1">
    <title>Tramit@</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" charset="utf-8" />


    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css"/>
    <link rel="stylesheet" href="../../Content/css/main.css"/>
    <link rel="stylesheet" href="../../Content/css/skin.css"/>



    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="http://netdna.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js"></script>
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
</style>
<script>
    

    

</script>
  

</head>

<body id="wrapper">

<section id="top-header">
        <div class="container">
            <div class="row">
                <div class="col-md-7 col-sm-7 col-xs-7 top-header-links">
                    <ul class="contact_links">
                        <li><i class="fa fa-phone"></i><a href="#">+52 461 160 7260</a></li>
                        <li><i class="fa fa-envelope"></i><a href="#">rvelascod@hotmail.com</a></li>
                    </ul>
                </div>
                <div class="col-md-5 col-sm-5 col-xs-5 social">
                    <ul class="social_links">
                        <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                        <li><a href="#"><i class="fa fa-pinterest"></i></a></li>
                        <li><a href="#"><i class="fa fa-skype"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>

    </section>
    
    
    <header>
        <nav class="navbar navbar-inverse">
            <div class="container">
                <div class="row">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
				<span class="sr-only">Toggle navigation</span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			  </button>
                        <a class="navbar-brand" href="#">
                            <h1>Tramit@</h1><span>Software Solutions</span></a>
                    </div>
                   
                </div>
            </div>
        </nav>
    </header>




<ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Inicio</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Municipios</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Plantillas</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Seguimiento</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Ayuda</a>
  </li>
  

  <li class="nav-item">
    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Salir</a>
  </li>
  
    
</ul>
    <div class="container-fluid">
        <div class="row">
               <div  class="col-xs-2 well"><p>Municipios</p> <span id="idNumMunicipios"></span><span id="idListMunicipios"></span>  </div>
               <div  class="col-xs-2  well"><p>Municipios sin atencion</p><span id="idNumSinAtMunicipios"></span> <span id="idMpiosSinAtt"></span> </div>
               <div  class="col-xs-2 well">
                   <p>Municipios que atienden</p><span id="idNumQueAtMunicipios"></span>
                   <span id="idMpiosQueAtt"></span> 
<p>Municipio de atencion</p>                   
<div id="div1" ondrop="dropAtiende(event)" ondragover="allowDrop(event)">
    <ul  id="idAtiende">
        <li>Arrastra aqui</li>
    </ul>
</div>
<p>Municipios que atiende</p>
<div id="div2" ondrop="dropAtendidos(event)" ondragover="allowDrop(event)">
    <ul  id="idAtendidos">
        <li>Arrastra aqui</li>
    </ul>
 </div>
<div><button class="btn btn-default btn-block btn-primary" id="idEnviar" onclick="onEnviarMunicipioAtiende(event)" >Enviar</button></div>
               </div>
               <div class="col-xs-2  well"><p>Municipios con atencion</p><span id="idNumConAtMunicipios"></span> <span id="idMpiosConAtt"></span> </div>
               <div  class="col-xs-2  well"><p>Municipios que atienden</p><div id="idS1"></div>  </div>
               <div  class="col-xs-2  well"><p>Municipios con atiende</p><div id="idMpio"></div>  </div>

               <!--
                <div  class="col-xs-6 well"><p>Municipios</p> <span id="idNumMunicipios"></span><span id="idListMunicipios"></span>  </div>                               
                <div  class="col-xs-6 well"><p>Municipios</p> <span id="idNumMpiosRadio"></span><span id="idRadioMpios"></span>  </div>                               
                <div  class="col-xs-2  well"></div>
                   -->
        </div>
    </div>

</body>
</html>

