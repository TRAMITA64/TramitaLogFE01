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
    public string spqGetMpiosYsedes(string param1)
    {
        string strResultado = string.Empty;
        string strConsulta = "";
        clsConexion Cn = new clsConexion();
        DataSet dtsDatos = new DataSet();

        try
        {
            Cn.clsAbrirConexion(strConexion);

            strConsulta = "exec spq_catSedesXMunicipio @param1";
            Cn.clsAgregarParametro("@param1", clsConexion.typeSqlServer.V_VARCHAR2, clsConexion.directionParam.PARAM_IN, param1, null);
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
    public string insertaSede(string SedeName, string Direccion, string Name, string ApellidoP, string ApellidoM, string Correo, string Telefono, string municipio)
    {
        string strResultado = string.Empty;
        string strConsulta = "";
        clsConexion Cn = new clsConexion();
        DataSet dtsDatos = new DataSet();

        try
        {
            Cn.clsAbrirConexion(strConexion);

            strConsulta = "exec spi_catSedes @SedeName, @Direccion, @Name, @ApellidoP, @ApellidoM, @Correo, @Telefono,@municipio";
            Cn.clsAgregarParametro("@SedeName", clsConexion.typeSqlServer.V_VARCHAR2, clsConexion.directionParam.PARAM_IN, SedeName, null);
            Cn.clsAgregarParametro("@Direccion", clsConexion.typeSqlServer.V_VARCHAR2, clsConexion.directionParam.PARAM_IN, Direccion, null);
            Cn.clsAgregarParametro("@Name", clsConexion.typeSqlServer.V_VARCHAR2, clsConexion.directionParam.PARAM_IN, Name, null);
            Cn.clsAgregarParametro("@ApellidoP", clsConexion.typeSqlServer.V_VARCHAR2, clsConexion.directionParam.PARAM_IN, ApellidoP, null);
            Cn.clsAgregarParametro("@ApellidoM", clsConexion.typeSqlServer.V_VARCHAR2, clsConexion.directionParam.PARAM_IN, ApellidoM, null);
            Cn.clsAgregarParametro("@Correo", clsConexion.typeSqlServer.V_VARCHAR2, clsConexion.directionParam.PARAM_IN, Correo, null);
            Cn.clsAgregarParametro("@Telefono", clsConexion.typeSqlServer.V_VARCHAR2, clsConexion.directionParam.PARAM_IN, Telefono, null);
            Cn.clsAgregarParametro("@municipio", clsConexion.typeSqlServer.V_VARCHAR2, clsConexion.directionParam.PARAM_IN, municipio, null);

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

    public string updateSede(string SedeName, string Direccion, string Name, string ApellidoP, string ApellidoM, string Correo, string Telefono,string sede)
    {
        string strResultado = string.Empty;
        string strConsulta = "";
        clsConexion Cn = new clsConexion();
        DataSet dtsDatos = new DataSet();

        try
        {
            Cn.clsAbrirConexion(strConexion);

            strConsulta = "exec spu_catSedes @SedeName, @Direccion, @Name, @ApellidoP, @ApellidoM, @Correo, @Telefono,@sede";
            Cn.clsAgregarParametro("@SedeName", clsConexion.typeSqlServer.V_VARCHAR2, clsConexion.directionParam.PARAM_IN, SedeName, null);
            Cn.clsAgregarParametro("@Direccion", clsConexion.typeSqlServer.V_VARCHAR2, clsConexion.directionParam.PARAM_IN, Direccion, null);
            Cn.clsAgregarParametro("@Name", clsConexion.typeSqlServer.V_VARCHAR2, clsConexion.directionParam.PARAM_IN, Name, null);
            Cn.clsAgregarParametro("@ApellidoP", clsConexion.typeSqlServer.V_VARCHAR2, clsConexion.directionParam.PARAM_IN, ApellidoP, null);
            Cn.clsAgregarParametro("@ApellidoM", clsConexion.typeSqlServer.V_VARCHAR2, clsConexion.directionParam.PARAM_IN, ApellidoM, null);
            Cn.clsAgregarParametro("@Correo", clsConexion.typeSqlServer.V_VARCHAR2, clsConexion.directionParam.PARAM_IN, Correo, null);
            Cn.clsAgregarParametro("@Telefono", clsConexion.typeSqlServer.V_VARCHAR2, clsConexion.directionParam.PARAM_IN, Telefono, null);
            Cn.clsAgregarParametro("@sede", clsConexion.typeSqlServer.V_VARCHAR2, clsConexion.directionParam.PARAM_IN, sede, null);

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
    public string deleteSede(string sede,string usuario)
    {
        string strResultado = string.Empty;
        string strConsulta = "";
        clsConexion Cn = new clsConexion();
        DataSet dtsDatos = new DataSet();

        try
        {
            Cn.clsAbrirConexion(strConexion);

            strConsulta = "exec spd_catSedes @sede,@usuario";
            Cn.clsAgregarParametro("@sede", clsConexion.typeSqlServer.V_VARCHAR2, clsConexion.directionParam.PARAM_IN, sede, null);
            Cn.clsAgregarParametro("@usuario", clsConexion.typeSqlServer.V_VARCHAR2, clsConexion.directionParam.PARAM_IN, sede, null);

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
    public string insertaGrupoDeAtencion(string param1, string param2, string param3, string param4, string param5)
    {
        string strResultado = string.Empty;
        string strConsulta = "";
        clsConexion Cn = new clsConexion();
        DataSet dtsDatos = new DataSet();

        try
        {
            Cn.clsAbrirConexion(strConexion);

            strConsulta = "exec spi_grupoDeAtencion @nombre,@descripcion,@minicipios,@sedes,@usuario";
            Cn.clsAgregarParametro("@nombre", clsConexion.typeSqlServer.V_VARCHAR2, clsConexion.directionParam.PARAM_IN, param1, null);
            Cn.clsAgregarParametro("@descripcion", clsConexion.typeSqlServer.V_VARCHAR2, clsConexion.directionParam.PARAM_IN, param2, null);
            Cn.clsAgregarParametro("@minicipios", clsConexion.typeSqlServer.V_VARCHAR2, clsConexion.directionParam.PARAM_IN, param3, null);
            Cn.clsAgregarParametro("@sedes", clsConexion.typeSqlServer.V_VARCHAR2, clsConexion.directionParam.PARAM_IN, param4, null);
            Cn.clsAgregarParametro("@usuario", clsConexion.typeSqlServer.V_VARCHAR2, clsConexion.directionParam.PARAM_IN, param5, null);

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

    public string nombresGrupoDeAtencion(string param1)
    {
        string strResultado = string.Empty;
        string strConsulta = "";
        clsConexion Cn = new clsConexion();
        DataSet dtsDatos = new DataSet();

        try
        {
            Cn.clsAbrirConexion(strConexion);

            strConsulta = "exec spq_getNombresGruposDeAtencion @usuario";
            Cn.clsAgregarParametro("@usuario", clsConexion.typeSqlServer.V_VARCHAR2, clsConexion.directionParam.PARAM_IN, param1, null);

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

    public string GrupoDeAtencionAll(string param1)
    {
        string strResultado = string.Empty;
        string strConsulta = "";
        clsConexion Cn = new clsConexion();
        DataSet dtsDatos = new DataSet();

        try
        {
            Cn.clsAbrirConexion(strConexion);

            strConsulta = "exec spq_getGruposDeAtencionAll @usuario";
            Cn.clsAgregarParametro("@usuario", clsConexion.typeSqlServer.V_VARCHAR2, clsConexion.directionParam.PARAM_IN, param1, null);

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

    public string deleteGrupoDeAtencion(string param1, string user)
    {
        string strResultado = string.Empty;
        string strConsulta = "";
        clsConexion Cn = new clsConexion();
        DataSet dtsDatos = new DataSet();

        try
        {
            Cn.clsAbrirConexion(strConexion);

            strConsulta = "exec spd_gruposDeAtencion @param1,@usuario";
            Cn.clsAgregarParametro("@param1", clsConexion.typeSqlServer.V_VARCHAR2, clsConexion.directionParam.PARAM_IN, param1, null);
            Cn.clsAgregarParametro("@usuario", clsConexion.typeSqlServer.V_VARCHAR2, clsConexion.directionParam.PARAM_IN, user, null);

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

    public string updateGrupoDeAtencion(string param1,string param2,string param3,string  param4,string param5)
    {
        string strResultado = string.Empty;
        string strConsulta = "";
        clsConexion Cn = new clsConexion();
        DataSet dtsDatos = new DataSet();

        try
        {
            Cn.clsAbrirConexion(strConexion);

            strConsulta = "exec spu_grupoDeAtencion @nombre,@descripcion,@minicipios,@sedes,@usuario";
            Cn.clsAgregarParametro("@nombre", clsConexion.typeSqlServer.V_VARCHAR2, clsConexion.directionParam.PARAM_IN, param1, null);
            Cn.clsAgregarParametro("@descripcion", clsConexion.typeSqlServer.V_VARCHAR2, clsConexion.directionParam.PARAM_IN, param2, null);
            Cn.clsAgregarParametro("@minicipios", clsConexion.typeSqlServer.V_VARCHAR2, clsConexion.directionParam.PARAM_IN, param3, null);
            Cn.clsAgregarParametro("@sedes", clsConexion.typeSqlServer.V_VARCHAR2, clsConexion.directionParam.PARAM_IN, param4, null);
            Cn.clsAgregarParametro("@usuario", clsConexion.typeSqlServer.V_VARCHAR2, clsConexion.directionParam.PARAM_IN, param5, null);

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
    public string getEmpleados(string param1, string param2)
    {
        string strResultado = string.Empty;
        string strConsulta = "";
        clsConexion Cn = new clsConexion();
        DataSet dtsDatos = new DataSet();

        try
        {
            Cn.clsAbrirConexion(strConexion);

            strConsulta = "exec spq_empleados @param,@usuario";
            Cn.clsAgregarParametro("@param", clsConexion.typeSqlServer.V_VARCHAR2, clsConexion.directionParam.PARAM_IN, param1, null);
            Cn.clsAgregarParametro("@usuario", clsConexion.typeSqlServer.V_VARCHAR2, clsConexion.directionParam.PARAM_IN, param2, null);
            

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
    public string getStatusEmpleados(string param1, string param2)
    {
        string strResultado = string.Empty;
        string strConsulta = "";
        clsConexion Cn = new clsConexion();
        DataSet dtsDatos = new DataSet();

        try
        {
            Cn.clsAbrirConexion(strConexion);

            strConsulta = "exec spq_statusEmpleado @param,@usuario";
            Cn.clsAgregarParametro("@param", clsConexion.typeSqlServer.V_VARCHAR2, clsConexion.directionParam.PARAM_IN, param1, null);
            Cn.clsAgregarParametro("@usuario", clsConexion.typeSqlServer.V_VARCHAR2, clsConexion.directionParam.PARAM_IN, param2, null);


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

    public string insertEmpleado(string idEmp,string rfc, string n1, string ap, string am, string co, string fa, string idM, string idS, string st, string us)
    {
        string strResultado = string.Empty;
        string strConsulta = "";
        clsConexion Cn = new clsConexion();
        DataSet dtsDatos = new DataSet();
        try
        {
            Cn.clsAbrirConexion(strConexion);
            strConsulta = "exec spi_Empleado @idEmp,@rfc,@n1,@ap,@am,@co,@fa,@idM,@idS,@st,@us";
            Cn.clsAgregarParametro("@idEmp", clsConexion.typeSqlServer.V_VARCHAR2, clsConexion.directionParam.PARAM_IN, idEmp, null);
            Cn.clsAgregarParametro("@rfc",clsConexion.typeSqlServer.V_VARCHAR2, clsConexion.directionParam.PARAM_IN, rfc,null);
            Cn.clsAgregarParametro("@n1",clsConexion.typeSqlServer.V_VARCHAR2, clsConexion.directionParam.PARAM_IN, n1,null);
            Cn.clsAgregarParametro("@ap",clsConexion.typeSqlServer.V_VARCHAR2, clsConexion.directionParam.PARAM_IN, ap,null);
            Cn.clsAgregarParametro("@am",clsConexion.typeSqlServer.V_VARCHAR2, clsConexion.directionParam.PARAM_IN, am,null);
            Cn.clsAgregarParametro("@co",clsConexion.typeSqlServer.V_VARCHAR2, clsConexion.directionParam.PARAM_IN, co,null);
            Cn.clsAgregarParametro("@fa",clsConexion.typeSqlServer.V_VARCHAR2, clsConexion.directionParam.PARAM_IN, fa,null);
            Cn.clsAgregarParametro("@idM",clsConexion.typeSqlServer.V_VARCHAR2, clsConexion.directionParam.PARAM_IN, idM,null);
            Cn.clsAgregarParametro("@idS",clsConexion.typeSqlServer.V_VARCHAR2, clsConexion.directionParam.PARAM_IN, idS,null);
            Cn.clsAgregarParametro("@st",clsConexion.typeSqlServer.V_VARCHAR2, clsConexion.directionParam.PARAM_IN,st,null);
            Cn.clsAgregarParametro("@us",clsConexion.typeSqlServer.V_VARCHAR2, clsConexion.directionParam.PARAM_IN,us,null);
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
    public string updateEmpleado(string idEmp, string rfc, string n1, string ap, string am, string co, string fa, string idM, string idS, string st, string us)
    {
        string strResultado = string.Empty;
        string strConsulta = "";
        clsConexion Cn = new clsConexion();
        DataSet dtsDatos = new DataSet();
        try
        {
            Cn.clsAbrirConexion(strConexion);
            strConsulta = "exec spu_Empleado @idEmp,@rfc,@n1,@ap,@am,@co,@fa,@idM,@idS,@st,@us";
            Cn.clsAgregarParametro("@idEmp", clsConexion.typeSqlServer.V_VARCHAR2, clsConexion.directionParam.PARAM_IN, idEmp, null);
            Cn.clsAgregarParametro("@rfc", clsConexion.typeSqlServer.V_VARCHAR2, clsConexion.directionParam.PARAM_IN, rfc, null);
            Cn.clsAgregarParametro("@n1", clsConexion.typeSqlServer.V_VARCHAR2, clsConexion.directionParam.PARAM_IN, n1, null);
            Cn.clsAgregarParametro("@ap", clsConexion.typeSqlServer.V_VARCHAR2, clsConexion.directionParam.PARAM_IN, ap, null);
            Cn.clsAgregarParametro("@am", clsConexion.typeSqlServer.V_VARCHAR2, clsConexion.directionParam.PARAM_IN, am, null);
            Cn.clsAgregarParametro("@co", clsConexion.typeSqlServer.V_VARCHAR2, clsConexion.directionParam.PARAM_IN, co, null);
            Cn.clsAgregarParametro("@fa", clsConexion.typeSqlServer.V_VARCHAR2, clsConexion.directionParam.PARAM_IN, fa, null);
            Cn.clsAgregarParametro("@idM", clsConexion.typeSqlServer.V_VARCHAR2, clsConexion.directionParam.PARAM_IN, idM, null);
            Cn.clsAgregarParametro("@idS", clsConexion.typeSqlServer.V_VARCHAR2, clsConexion.directionParam.PARAM_IN, idS, null);
            Cn.clsAgregarParametro("@st", clsConexion.typeSqlServer.V_VARCHAR2, clsConexion.directionParam.PARAM_IN, st, null);
            Cn.clsAgregarParametro("@us", clsConexion.typeSqlServer.V_VARCHAR2, clsConexion.directionParam.PARAM_IN, us, null);
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
