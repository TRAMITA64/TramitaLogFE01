using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;

/// <summary>
/// Descripción breve de clsUsuarios
/// </summary>
public class clsUsuarios
{
    private string strConexion;
    private string strRFC;

    public string Conexion { get { return strConexion; } set { strConexion = value; } }
    public string RFC {  get { return strRFC; } set { strRFC = value; } }

    public clsUsuarios()
    {
        //
        // TODO: Agregar aquí la lógica del constructor
        //
    }

    public string clsObtenerUsuario()
    {
        string strResultado = string.Empty;
        string strConsulta = "";
        clsConexion Cn = new clsConexion();
        DataSet dtsDatos = new DataSet();
        
        try
        {
            Cn.clsAbrirConexion(strConexion);

            strConsulta = "select emp_rfccor, concat(emp_nomemp,' ',emp_apepat,' ',emp_apemat) as Nombre, tblcatalc.alc_nomalc as Admin " +
                " from dbo.tblcatemp " +
                " left join tblcatalc on emp_cvealc = alc_cvealc " +
                "where emp_rfcemp = @strRFC ";
            Cn.clsAgregarParametro("@strRFC", clsConexion.typeSqlServer.V_VARCHAR2, clsConexion.directionParam.PARAM_IN, strRFC, null);
            Cn.clsLlenaTabla(strConsulta, "Datos", clsConexion.typeQuery.Query, ref dtsDatos);
            strResultado = Cn.clsCadenaTabla(dtsDatos);

            return strResultado;          
        }
        catch (Exception ex){
            throw new Exception(ex.Message);
        }
        finally {
            Cn.clsCerrarConexion();
        }
    }
      
}