using Microsoft.AspNetCore.Mvc.Filters;
using SimpleCotizador.Exceptions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;

namespace SimpleCotizador.Filters
{
    public class SecureAttribute : ActionFilterAttribute
    {
        public override void OnActionExecuting(ActionExecutingContext context)
        {
            string auth = context.HttpContext.Request.Headers["Authorization"];
            if (string.IsNullOrEmpty(auth)) throw new ForbiddenException("No token supplied");
            var parts = auth.Split(" ");
            string token = parts[1];
            if (token != "efb34e23-fa07-4fe1-9c36-aa18a1cae64b")
            {
                throw new ForbiddenException("Token Invalid");
            }
            base.OnActionExecuting(context);
        }
    }
}
