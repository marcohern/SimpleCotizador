using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SimpleCotizador.DAL
{
    public class Cotizacion
    {
       [Key]
        public int? Id { get; set; }

        [MaxLength(350)]
        public string Cliente { get; set; }

        [MaxLength(50)]
        public string TipoSeguro { get; set; }

        [MaxLength(50)]
        public string FormaPago { get; set; }

        public DateTime FechaVencimiento { get; set; }

        public DateTime FechaCotizacion { get; set; }

        public bool Activa { get; set; }

        [MaxLength(50)]
        public string NumeroPoliza { get; set; }
    }
}
