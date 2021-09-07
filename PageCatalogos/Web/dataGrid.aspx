<%@ Page Language="C#" AutoEventWireup="true" CodeFile="dataGrid.aspx.cs" Inherits="PageCatalogos_Web_dataGrid" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>

    <title></title>
    <meta name="viewport" content="width=device-width, initial-scale=1" charset="utf-8" />


    <!-- Referencia al bootstrap -->
    <link rel="stylesheet" href="../../Content/css/bootstrap.min.css"/>
    <script src="../../Content/js/bootstrap.bundle.min.js"></script>


    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css"/>

    <!--JQuery-->
    <script type="text/javascript" src="../../ScriptsJQ/JQuery/Jquery-v3.5.1.js"></script>
   
    <!-- Cargar React. -->
    <!-- Nota: cuando se despliegue, reemplazar "development.js" con "production.min.js". -->
    <script src="https://unpkg.com/react@16.7.0/umd/react.production.min.js"></script>
    <script src="https://unpkg.com/react-dom@16.7.0/umd/react-dom.production.min.js"></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js" ></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react-data-grid/6.1.0/react-data-grid.min.js"></script>
    <script src="../JScript/datagrid.jsx" type="text/jsx"></script> 

</head>
<body>
    <form id="form1" runat="server">
        <div id="root">

        </div>
    </form>
</body>
</html>
