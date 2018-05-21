using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SimpleCotizador.Exceptions
{
    public class SimpleCotizadorException : ApplicationException
    {
        public SimpleCotizadorException():base() { }
        public SimpleCotizadorException(string message) : base(message) { }
        public SimpleCotizadorException(string message, Exception inner) : base(message, inner) { }
    }
}
