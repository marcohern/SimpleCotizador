using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Text;
using System.Threading.Tasks;

namespace SimpleCotizador.DAL
{
    public class CotizacionesDataAccess
    {
        private SqlConnection connection;

        public CotizacionesDataAccess(string connString)
        {
            this.connection = new SqlConnection(connString);
        }

        public void Connect()
        {
            this.connection.Open();
        }

        public void Close() {
            this.connection.Close();
            this.connection = null;
        }

        public async Task<int> CrearCotizacion(string cliente, string tipoSeguro, string formaPago, DateTime fechaVencimiento, DateTime fechaCotizacion, bool activa, string numeroPoliza)
        {
            SqlCommand cmd = new SqlCommand("CotizacionCrear", this.connection);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add("@Cliente", SqlDbType.NVarChar);
            cmd.Parameters.Add("@TipoSeguro", SqlDbType.NVarChar);
            cmd.Parameters.Add("@FormaPago", SqlDbType.NVarChar);
            cmd.Parameters.Add("@FechaVencimiento", SqlDbType.DateTime);
            cmd.Parameters.Add("@FechaCotizacion", SqlDbType.DateTime);
            cmd.Parameters.Add("@Activa", SqlDbType.Bit);
            cmd.Parameters.Add("@NumeroPoliza", SqlDbType.NVarChar);

            cmd.Parameters["@Cliente"].Value = cliente;
            cmd.Parameters["@TipoSeguro"].Value = tipoSeguro;
            cmd.Parameters["@FormaPago"].Value = formaPago;
            cmd.Parameters["@FechaVencimiento"].Value = fechaVencimiento;
            cmd.Parameters["@FechaCotizacion"].Value = fechaCotizacion;
            cmd.Parameters["@Activa"].Value = activa;
            cmd.Parameters["@NumeroPoliza"].Value = numeroPoliza;

            var task = cmd.ExecuteScalarAsync();

            int id = Convert.ToInt32(await task);
            return id;
        }

        public async Task<List<Cotizacion>> ConsultarCotizaciones(string q=null)
        {
            SqlCommand cmd = new SqlCommand("CotizacionesConsultar", this.connection);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add("@Q", SqlDbType.NVarChar);

            cmd.Parameters["@Q"].Value = q;

            var task = cmd.ExecuteReaderAsync();

            SqlDataReader reader = await task;
            List<Cotizacion> cots = new List<Cotizacion>();

            var rtask = reader.ReadAsync();
            while (await rtask)
            {
                Cotizacion cot = new Cotizacion {
                    Id = (int)reader["Id"],
                    Cliente = reader["Cliente"].ToString(),
                    TipoSeguro = reader["TipoSeguro"].ToString(),
                    FechaCotizacion = (DateTime)reader["FechaCotizacion"],
                    FechaVencimiento = (DateTime)reader["FechaVencimiento"],
                    Activa = (bool)reader["Activa"],
                    FormaPago = reader["FormaPago"].ToString(),
                    NumeroPoliza = reader["NumeroPoliza"].ToString()
                };

                cots.Add(cot);
                rtask = reader.ReadAsync();
            }
            return cots;
        }

        public int Sum(int a, int b)
        {
            return a + b;
        } 
    }
}
