using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;

/// <summary>
/// Descripción breve de ClsCatalogos
/// </summary>
public class ClsCatalogos
{
    private string strConexion;
    private string strRFC;

    public string Conexion { get { return strConexion; } set { strConexion = value; } }
    public string RFC { get { return strRFC; } set { strRFC = value; } }

    public ClsCatalogos()
    {
        //
        // TODO: Agregar aquí la lógica del constructor
        //
    }
    public string getMunicipios(string param)
    {
        string strResultado = string.Empty;
        string strConsulta = "";
        clsConexion Cn = new clsConexion();
        DataSet dtsDatos = new DataSet();

        try
        {
            Cn.clsAbrirConexion(strConexion);

            strConsulta = "exec spq_Municipios";
            Cn.clsLlenaTabla(strConsulta, "Datos", clsConexion.typeQuery.Query, ref dtsDatos);
            strResultado = Cn.clsCadenaTabla(dtsDatos);

            return strResultado;
        }
        catch (Exception ex)
        {
            throw new Exception(ex.Message);
        }
        finally
        {
            Cn.clsCerrarConexion();
        }
        
    }
    public string getMpioAtiende(string param)
    {
        
        string strResultado = string.Empty;
        string strConsulta = "";
        clsConexion Cn = new clsConexion();
        DataSet dtsDatos = new DataSet();

        try
        {
            Cn.clsAbrirConexion(strConexion);

            
            strConsulta = "exec spq_MpioAtiende @param1";
            Cn.clsAgregarParametro("@param1", clsConexion.typeSqlServer.V_VARCHAR2, clsConexion.directionParam.PARAM_IN, param, null);
            
            Cn.clsLlenaTabla(strConsulta, "Datos", clsConexion.typeQuery.Query, ref dtsDatos);
            strResultado = Cn.clsCadenaTabla(dtsDatos);

            return strResultado;
        }
        catch (Exception ex)
        {
            throw new Exception(ex.Message);
        }
        finally
        {
            Cn.clsCerrarConexion();
        }
    }
    public string getMpiosQueAtienden(string param)
    {
        string strResultado = string.Empty;
        string strConsulta = "";
        clsConexion Cn = new clsConexion();
        DataSet dtsDatos = new DataSet();

        try
        {
            Cn.clsAbrirConexion(strConexion);

            strConsulta = "exec spq_MpiosQueAtienden";
            Cn.clsLlenaTabla(strConsulta, "Datos", clsConexion.typeQuery.Query, ref dtsDatos);
            strResultado = Cn.clsCadenaTabla(dtsDatos);

            return strResultado;
        }
        catch (Exception ex)
        {
            throw new Exception(ex.Message);
        }
        finally
        {
            Cn.clsCerrarConexion();
        }
    }
    public string getMpiosConAtencion(string param)
    {
        string strResultado = string.Empty;
        string strConsulta = "";
        clsConexion Cn = new clsConexion();
        DataSet dtsDatos = new DataSet();

        try
        {
            Cn.clsAbrirConexion(strConexion);

            strConsulta = "exec spq_MpiosConAtencion";
            Cn.clsLlenaTabla(strConsulta, "Datos", clsConexion.typeQuery.Query, ref dtsDatos);
            strResultado = Cn.clsCadenaTabla(dtsDatos);

            return strResultado;
        }
        catch (Exception ex)
        {
            throw new Exception(ex.Message);
        }
        finally
        {
            Cn.clsCerrarConexion();
        }
    }
    public string getMpiosSinAtencion(string param)
    {
        string strResultado = string.Empty;
        string strConsulta = "";
        clsConexion Cn = new clsConexion();
        DataSet dtsDatos = new DataSet();

        try
        {
            Cn.clsAbrirConexion(strConexion);

            strConsulta = "exec spq_MpiosSinAtencion";
            Cn.clsLlenaTabla(strConsulta, "Datos", clsConexion.typeQuery.Query, ref dtsDatos);
            strResultado = Cn.clsCadenaTabla(dtsDatos);

            return strResultado;
        }
        catch (Exception ex)
        {
            throw new Exception(ex.Message);
        }
        finally
        {
            Cn.clsCerrarConexion();
        }
    }
    public string insertMpioAtencion(string param1,string param2)
    {
        string strResultado = string.Empty;
        string strConsulta = "";
        clsConexion Cn = new clsConexion();
        DataSet dtsDatos = new DataSet();

        try
        {
            Cn.clsAbrirConexion(strConexion);

            strConsulta = "exec spi_MpioAtencion @param1,@param2";
            Cn.clsAgregarParametro("@param1", clsConexion.typeSqlServer.V_VARCHAR2, clsConexion.directionParam.PARAM_IN, param1, null);
            Cn.clsAgregarParametro("@param2", clsConexion.typeSqlServer.V_VARCHAR2, clsConexion.directionParam.PARAM_IN, param2, null);
            Cn.clsLlenaTabla(strConsulta, "Datos", clsConexion.typeQuery.Query, ref dtsDatos);
            strResultado = Cn.clsCadenaTabla(dtsDatos);

            return strResultado;
        }
        catch (Exception ex)
        {
            throw new Exception(ex.Message);
        }
        finally
        {
            Cn.clsCerrarConexion();
        }
    }
    public string updateMpioAtencion(string param1, string param2)
    {
        string strResultado = string.Empty;
        string strConsulta = "";
        clsConexion Cn = new clsConexion();
        DataSet dtsDatos = new DataSet();

        try
        {
            Cn.clsAbrirConexion(strConexion);

            strConsulta = "exec spu_MpioAtencion @param1,@param2";
            Cn.clsAgregarParametro("@param1", clsConexion.typeSqlServer.V_VARCHAR2, clsConexion.directionParam.PARAM_IN, param1, null);
            Cn.clsAgregarParametro("@param2", clsConexion.typeSqlServer.V_VARCHAR2, clsConexion.directionParam.PARAM_IN, param2, null);
            Cn.clsLlenaTabla(strConsulta, "Datos", clsConexion.typeQuery.Query, ref dtsDatos);
            strResultado = Cn.clsCadenaTabla(dtsDatos);

            return strResultado;
        }
        catch (Exception ex)
        {
            throw new Exception(ex.Message);
        }
        finally
        {
            Cn.clsCerrarConexion();
        }
    }
}