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

            strConsulta = "select id_municipio,nombre from [dbo].[cat_municipios]";
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

            strConsulta = "SELECT [c1].[nombre] as m1,[c0].[nombre] as m2 FROM [cat_municipio_atencion] AS [c] "+
                            "INNER JOIN[cat_municipios] AS[c0] ON[c].[id_municipio] = [c0].[id_municipio] "+
                            "left join[cat_municipios] as [c1]  on [c].id_mpio_atencion = [c1].id_municipio "+
                            "where [c].[id_mpio_atencion] = "+ param;
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

            strConsulta = "select [id_mpio_atencion],[c1].[nombre] from [cat_municipio_atencion] as [c0]"+
                            "INNER JOIN[cat_municipios] as [c1] ON[c0].[id_mpio_atencion] =[c1].[id_municipio]"+
                                "group by c0.[id_mpio_atencion],[c1].[nombre]";
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

            strConsulta = "select [c1].[id_municipio],[c1].[nombre],[c0].[id_mpio_atencion] from "+
                "[cat_municipio_atencion] as [c0] "+
                "INNER JOIN[cat_municipios] as [c1] ON[c0].[id_municipio] =[c1].[id_municipio]";
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

            strConsulta = "select id_municipio, nombre from[dbo].[cat_municipios] "+
                "WHERE id_municipio NOT IN(select[c1].[id_municipio] "+
                "from[cat_municipio_atencion] as [c0] INNER JOIN " +
                "[cat_municipios] as [c1] ON[c0].[id_municipio] =[c1].[id_municipio])";
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
}