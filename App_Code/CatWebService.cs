using System;
using System.Collections.Generic;
using System.Web.Caching;
using System.Web.Services;
using System.Data;
using System.Configuration;

/// <summary>
/// Descripción breve de CatWebService
/// </summary>
[WebService(Namespace = "http://tempuri.org/")]
[WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
// Para permitir que se llame a este servicio web desde un script, usando ASP.NET AJAX, quite la marca de comentario de la línea siguiente. 
[System.Web.Script.Services.ScriptService]
public class CatWebService : System.Web.Services.WebService
{

    public CatWebService()
    {

        //Elimine la marca de comentario de la línea siguiente si utiliza los componentes diseñados 
        //InitializeComponent(); 
    }

    

    [WebMethod(EnableSession = true)]
    public string GetMunicipiosList(string param)
    {
        
        string strResultado = string.Empty;
        DataSet dtsDatos = new DataSet();
        try
        {
            clsVariablesSesion objVariables = new clsVariablesSesion();
            objVariables.RFC = param;
            Session["RFC"] = param;

            ClsCatalogos objCatalogos = new ClsCatalogos();
            objCatalogos.Conexion = ConfigurationManager.ConnectionStrings["conStringTramita"].ConnectionString;
            //objCatalogos.RFC = Session["RFC"].ToString();
            objCatalogos.RFC = param;
            strResultado = objCatalogos.getMunicipios(param);

            return strResultado;

        }
        catch (Exception ex)
        {
            throw new Exception(ex.Message);
        }
    }

    [WebMethod(EnableSession = true)]
    public string GetMpioAtiendeList(string param)
    {
        string strResultado = string.Empty;
        DataSet dtsDatos = new DataSet();
        try
        {
            clsVariablesSesion objVariables = new clsVariablesSesion();
            objVariables.RFC = param;
            Session["RFC"] = param;

            ClsCatalogos objCatalogos = new ClsCatalogos();
            objCatalogos.Conexion = ConfigurationManager.ConnectionStrings["conStringTramita"].ConnectionString;
            //objCatalogos.RFC = Session["RFC"].ToString();
            objCatalogos.RFC = param;
            strResultado = objCatalogos.getMpioAtiende(param);

            return strResultado;

        }
        catch (Exception ex)
        {
            throw new Exception(ex.Message);
        }
    }

    [WebMethod(EnableSession = true)]
    public string getMpiosQueAtienden(string param)
    {
        string strResultado = string.Empty;
        DataSet dtsDatos = new DataSet();
        try
        {
            clsVariablesSesion objVariables = new clsVariablesSesion();
            objVariables.RFC = param;
            Session["RFC"] = param;

            ClsCatalogos objCatalogos = new ClsCatalogos();
            objCatalogos.Conexion = ConfigurationManager.ConnectionStrings["conStringTramita"].ConnectionString;
            //objCatalogos.RFC = Session["RFC"].ToString();
            objCatalogos.RFC = param;
            strResultado = objCatalogos.getMpiosQueAtienden(param);

            return strResultado;

        }
        catch (Exception ex)
        {
            throw new Exception(ex.Message);
        }
    }
    [WebMethod(EnableSession = true)]
    public string getMpiosConAtencion(string param)
    {
        string strResultado = string.Empty;
        DataSet dtsDatos = new DataSet();
        try
        {
            clsVariablesSesion objVariables = new clsVariablesSesion();
            objVariables.RFC = param;
            Session["RFC"] = param;

            ClsCatalogos objCatalogos = new ClsCatalogos();
            objCatalogos.Conexion = ConfigurationManager.ConnectionStrings["conStringTramita"].ConnectionString;
            //objCatalogos.RFC = Session["RFC"].ToString();
            objCatalogos.RFC = param;
            strResultado = objCatalogos.getMpiosConAtencion(param);

            return strResultado;

        }
        catch (Exception ex)
        {
            throw new Exception(ex.Message);
        }
    }

    [WebMethod(EnableSession = true)]
    public string getMpiosSinAtencion(string param)
    {
        string strResultado = string.Empty;
        DataSet dtsDatos = new DataSet();
        try
        {
            clsVariablesSesion objVariables = new clsVariablesSesion();
            objVariables.RFC = param;
            Session["RFC"] = param;

            ClsCatalogos objCatalogos = new ClsCatalogos();
            objCatalogos.Conexion = ConfigurationManager.ConnectionStrings["conStringTramita"].ConnectionString;
            //objCatalogos.RFC = Session["RFC"].ToString();
            objCatalogos.RFC = param;
            strResultado = objCatalogos.getMpiosSinAtencion(param);

            return strResultado;

        }
        catch (Exception ex)
        {
            throw new Exception(ex.Message);
        }
    }
    [WebMethod(EnableSession = true)]
    public string EnviarMunicipioAtiende(string param1, string param2)//municipio que atiende, municipios que son atendidos 
    {
        string strResultado = "Webservice";
        DataSet dtsDatos = new DataSet();
        try
        {
            clsVariablesSesion objVariables = new clsVariablesSesion();
           // objVariables.RFC = param;
            //Session["RFC"] = param;

            ClsCatalogos objCatalogos = new ClsCatalogos();
            objCatalogos.Conexion = ConfigurationManager.ConnectionStrings["conStringTramita"].ConnectionString;
            //objCatalogos.RFC = Session["RFC"].ToString();
           // objCatalogos.RFC = param;
            strResultado = objCatalogos.insertMpioAtencion(param1,param2);
            
            return strResultado;

        }
        catch (Exception ex)
        {
            throw new Exception(ex.Message);
        }
    }
}
