using BL.Auth;
using BL.Base;
using Library.Interfaces;
using Library.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Controllers.Auth
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : BaseController<User>
    {
        #region Constructors
        public AuthController(ITServiceCollection serviceCollection) : base(serviceCollection)
        {
        }
        #endregion

        [AllowAnonymous]
        [HttpPost("login")]
        public IActionResult Login([FromBody] UserDTO login)
        {
            IActionResult response = Unauthorized();
            var bl = BLFactory.CreateAs<AuthBL>(serviceCollection);

            var user = bl.AuthenticateUser(login);

            if (user != null)
            {
                var tokenString = bl.GenerateJSONWebToken(user);
                response = Ok(new { Token = tokenString, User = user });
            }

            return response;
        }

        
    }
}
