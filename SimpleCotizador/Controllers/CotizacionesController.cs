using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using SimpleCotizador.DAL;
using SimpleCotizador.Exceptions;
using SimpleCotizador.Filters;
using SimpleCotizador.Models;

namespace SimpleCotizador.Controllers
{
    [Produces("application/json")]
    [Route("api/Cotizaciones")]
    public class CotizacionesController : Controller
    {

        public IConfiguration Configuration { get; }

        public CotizacionesController(IConfiguration configuration)
        {
            this.Configuration = configuration;
        }

        // GET: api/Cotizaciones
        [HttpGet]
        [Secure]
        public async Task<IEnumerable<Cotizacion>> Get(string q)
        {
            CotizacionesDataAccess da = new CotizacionesDataAccess(Configuration.GetConnectionString("DefaultConnection"));
            da.Connect();
            List<Cotizacion> cots = await da.ConsultarCotizaciones(q);
            return cots;
        }

        // GET: api/Cotizaciones/5
        [HttpGet("{id}", Name = "Get")]
        public Cotizacion Get(int id)
        {
            return new Cotizacion();
        }

        // POST: api/Cotizaciones
        [HttpPost]
        [Secure]
        public async Task<IdResult> Post([FromBody]Cotizacion value)
        {
            CotizacionesDataAccess da = new CotizacionesDataAccess(Configuration.GetConnectionString("DefaultConnection"));
            da.Connect();
            if (!string.IsNullOrEmpty(value.NumeroPoliza))
            {
                try
                {
                    var guid = Guid.Parse(value.NumeroPoliza);
                } catch(Exception ex) {
                    throw new BadRequestException("Numero de Poliza Invalido", ex);
                }
            } else {
                value.NumeroPoliza = Guid.NewGuid().ToString();
            }
            
            int id = await da.CrearCotizacion(value.Cliente, value.TipoSeguro,value.FormaPago, value.FechaVencimiento, value.FechaCotizacion, value.Activa, value.NumeroPoliza);
            return new IdResult
            {
                Success = true,
                Id = id
            };
        }

        [Secure]
        [HttpGet]
        [Route("NewGuid")]
        public object NewGuid()
        {
            return new
            {
                Success = true,
                Guid = Guid.NewGuid().ToString()
            };
        }
        
        // PUT: api/Cotizaciones/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }
        
        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
