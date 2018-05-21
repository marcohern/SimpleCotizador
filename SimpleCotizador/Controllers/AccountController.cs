using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using SimpleCotizador.Exceptions;
using SimpleCotizador.Models;

namespace SimpleCotizador.Controllers
{
    [Produces("application/json")]
    [Route("api/Account")]
    public class AccountController : Controller
    {

        [HttpPost]
        [Route("Login")]
        public object Login([FromBody] Login model)
        {
            if (model.Username == "admin" && model.Password == "admin")
            {
                return new { Success = true, Token = "efb34e23-fa07-4fe1-9c36-aa18a1cae64b", Name = "Administrador" };
            }
            throw new UnauthorizedException("Unauthorized");
        }

        [HttpPost]
        [Route("Logout")]
        public object Logout()
        {
            return new { Success = true };
        }
    }
}