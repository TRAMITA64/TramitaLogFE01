using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Script.Serialization;
using System.Data.SqlClient;
using System.Data;

using System.Text;


/// <summary>
/// Descripción breve de Conexion
/// </summary>
public class clsConexion
{

    public SqlConnection Cn = new SqlConnection();
    public SqlTransaction objtransaction;
    private SqlCommand objComando = new SqlCommand();

    private string strPassword;
    public string Password { get { return strPassword; } set { strPassword = value; } }

    private object[] objParametros;
    public clsConexion()
    {
        //
        // TODO: Agregar aquí la lógica del constructor
        //
    }
    public void clsAbrirConexion(string strCadena)
    {
        try
        {
            this.Cn.ConnectionString = strCadena;
            this.Cn.Open();
        }
        catch (Exception e)
        {
            throw e;
        }
    }
    public void clsCerrarConexion()
    {
        try
        {
            if (this.Cn.State == System.Data.ConnectionState.Open)
            {
                this.Cn.Close();
            };
        }
        catch (Exception e)
        {
            throw e;
        }
    }  
    public DataSet clsLlenaTabla(string strConsulta, string strTabla, typeQuery TipoQuery,   ref DataSet dtsDatos)
    {
        int intIndice;
        SqlDataAdapter objAdaptador;
        objComando = new SqlCommand(strConsulta, Cn);

        try
        {
            objComando.CommandType = TipoQuery == typeQuery.storeProcedure ? CommandType.StoredProcedure : CommandType.Text;
            if (objParametros != null)
            {
                intIndice = 0;
                for (int j = 0; j < objParametros.Length; j = j + 5)
                {
                    objComando.Parameters.AddWithValue((string)objParametros[j], (string)objParametros[j + 3]);
                    intIndice = intIndice + 1;
                }
            }

            objAdaptador = new SqlDataAdapter(objComando);
            objAdaptador.Fill(dtsDatos, strTabla);
            return dtsDatos;
        }
        catch (Exception e)
        {
            throw e;
        }
    }
    public int clsEjecutaEscalarQuery(string strConsulta, typeQuery TipoQuery)
    {
        int intIndice;
        objComando = new SqlCommand(strConsulta, Cn);

        try
        {
            objComando.CommandType = TipoQuery == typeQuery.storeProcedure ? CommandType.StoredProcedure : CommandType.Text;
            if (objParametros != null)
            {
                intIndice = 0;
                for (int j = 0; j < objParametros.Length; j = j + 5)
                {
                    if (typeSqlServer.V_BYTE == (typeSqlServer)objParametros[j + 1] || typeSqlServer.V_IMAGEN == (typeSqlServer)objParametros[j + 1])
                        objComando.Parameters.AddWithValue((string)objParametros[j], objParametros[j + 3]);
                    else
                        objComando.Parameters.AddWithValue((string)objParametros[j], (string)objParametros[j + 3]);
                    intIndice = intIndice + 1;
                }
            }
            return objComando.ExecuteNonQuery();
        }
        catch (Exception e)
        {
            throw e;
        }
    }
    public enum typeSqlServer
    {
        V_VARCHAR2 = SqlDbType.VarChar,
        V_INT8 = SqlDbType.TinyInt,
        V_INT16 = SqlDbType.SmallInt,
        v_INT32 = SqlDbType.Int,
        V_INT64 = SqlDbType.BigInt,
        V_DECIMAL = SqlDbType.Decimal,
        V_DOUBLE = SqlDbType.Float,
        V_LONG = SqlDbType.Real,
        V_DATE = SqlDbType.DateTime,
        V_NCHAR = SqlDbType.NChar,
        V_NVARCHAR2 = SqlDbType.NVarChar,
        V_TIMESTAMP = SqlDbType.Timestamp,
        V_CHAR = SqlDbType.Char,
        V_BYTE = SqlDbType.Bit,
        /// V_CURSOR 
        V_IMAGEN    =  SqlDbType.Image,
        
    }
    public enum directionParam
    {
        PARAM_IN = 0,
        PARAM_OUT = 1,
    }
    public enum typeQuery {
        storeProcedure = 0,
        Query = 1,
    }
    public void clsAgregarParametro(string strNombre, typeSqlServer tyoTipo, directionParam drpDireccion, object objValor, object objTamanio)
    {
        object[] objTemporal;
        int intIndice;

        try
        {
            if (objParametros != null)
            {
                objTemporal = new object[objParametros.Length];
                objTemporal = objParametros;
                objParametros = new object[objParametros.Length + 5];
                for (int j = 0; j < objTemporal.Length; j++)
                {
                    objParametros[j] = objTemporal[j];
                }
            }
            else
            {
                objParametros = new object[5];
            }

            intIndice = objParametros.Length - 5;

            objParametros[intIndice] = strNombre;
            intIndice++;
            objParametros[intIndice] = tyoTipo;
            intIndice++;
            objParametros[intIndice] = drpDireccion;
            intIndice++;
            objParametros[intIndice] = objValor;
            intIndice++;
            objParametros[intIndice] = objTamanio;
        }
        catch (Exception e)
        {
            throw e;
        }
    }
    private void clsAgregaParametro(string strNombre, SqlDbType tyoTipo, directionParam drpDireccion, object objValor, object objTamanio)
    {
        object[] objTemporal;
        int intIndice;

        try
        {
            if (objParametros != null)
            {
                objTemporal = new object[objParametros.Length];
                objTemporal = objParametros;
                objParametros = new object[objParametros.Length + 5];
                for (int j = 0; j < objTemporal.Length; j++)
                {
                    objParametros[j] = objTemporal[j];
                }
            }
            else
            {
                objParametros = new object[5];
            }
            intIndice = objParametros.Length - 5;
            objParametros[intIndice] = strNombre;
            intIndice++;
            objParametros[intIndice] = tyoTipo;
            intIndice++;
            objParametros[intIndice] = drpDireccion;
            intIndice++;
            objParametros[intIndice] = objValor;
            intIndice++;
            objParametros[intIndice] = objTamanio;
        }
        catch (Exception e)
        {
            throw e;
        }
    }
    public void clsLimpiaParametros()
    {
        objParametros = null;
    }
    public string clsCadenaTabla(DataSet dtsDatos)
    {
        string strCadena = "";

        try
        {
            for (int i = 0; i < dtsDatos.Tables[0].Rows.Count; i++)
            {
                for (int j = 0; j < dtsDatos.Tables[0].Columns.Count; j++)
                {
                    if (j == 0 && i == 0)
                    {
                        strCadena += dtsDatos.Tables[0].Rows[i].ItemArray[j].ToString();
                    }
                    else
                    {
                        if (j == dtsDatos.Tables[0].Columns.Count - 1)
                        {
                            if (i == dtsDatos.Tables[0].Rows.Count - 1)
                            {
                                strCadena += "|" + dtsDatos.Tables[0].Rows[i].ItemArray[j].ToString();
                            }
                            else
                            {
                                strCadena += "|" + dtsDatos.Tables[0].Rows[i].ItemArray[j].ToString() + "$";
                            }
                        }
                        else
                        {
                            if (j == 0 && i > 0)
                            {
                                strCadena += dtsDatos.Tables[0].Rows[i].ItemArray[j].ToString();
                            }
                            else
                            {
                                strCadena += "|" + dtsDatos.Tables[0].Rows[i].ItemArray[j].ToString();
                            }
                        }
                    }
                }
            }
            return strCadena;
        }
        catch (Exception e)
        {
            throw e;
        }
    }
    public string clsCadenaCombo(DataSet dtsDatos)
    {
        string strRegreso;

        try
        {
            strRegreso = "";

            for (int i = 0; i < dtsDatos.Tables[0].Rows.Count; i++)
            {
                if (i == 0)
                {
                    strRegreso = dtsDatos.Tables[0].Rows[i].ItemArray[0].ToString() + "|" + dtsDatos.Tables[0].Rows[i].ItemArray[1].ToString();
                }
                else
                {
                    strRegreso += "$" + dtsDatos.Tables[0].Rows[i].ItemArray[0].ToString() + "|" + dtsDatos.Tables[0].Rows[i].ItemArray[1].ToString();
                }
            }

            return "0|SELECCIONE OPCION$" + strRegreso;
        }
        catch (Exception e)
        {
            throw e;
        }
    }
    public void clsIniciaTransaccion()
    {
        try
        {
            objtransaction = Cn.BeginTransaction();
        }
        catch (Exception e)
        {
            throw e;
        }
    }
    public void clsTransaccionCorrecta()
    {
        try
        {
            objtransaction.Commit();
        }
        catch (Exception e)
        {
            throw e;
        }
    }
    public void clsTransaccionIncorrecta()
    {
        try
        {
            objtransaction.Rollback();
        }
        catch (Exception e)
        {
            throw e;
        }
    }

    public string clsPasswordEncript() {
        try
        {
            byte[] encodedBytes = Encoding.UTF8.GetBytes(strPassword);
            string strEncriptPass = Convert.ToBase64String(encodedBytes);
            return strEncriptPass;
        }
        catch (Exception ex) { return strPassword; }
    }
}

public class clsCombo
{
    public string Valor { get; set; }
    public string Texto { get; set; }
    public string Error { get; set; }
}

public class clsRespuestaCadena
{
    public string Resultado { get; set; }
    public string Error { get; set; }
    JavaScriptSerializer serializador;

    public clsRespuestaCadena()
    {
        Resultado = string.Empty;
        Error = string.Empty;
    }

    public string Serializar()
    {
        serializador = new JavaScriptSerializer();
        return serializador.Serialize(this);
    }

}
