using BL.Auth;
using BL.Base;
using BL.Implement;
using Library.Interfaces;
using Library.Models;
using Library.Utils;
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


        [AllowAnonymous]
        [HttpPost("signUp")]
        public IActionResult SignUp([FromBody] UserDTO login)
        {
            IActionResult response = Ok("Tài khoản đã tồn tại!");
            var bl = BLFactory.CreateAs<AuthBL>(serviceCollection);
            var userBl = BLFactory.CreateAs<UserBL>(serviceCollection);

            var user = bl.GetByUserName(login);

            if (user == null)
            {
                var newUser = new User()
                {
                    Username = login.Username,
                    Password = login.Password,
                    Role = SerializeUtil.SerializeObject(new List<string>() { "User" })
                };
                var succcess = userBl.Insert(newUser);
                if (succcess > 0)
                {
                    response = Ok(newUser);
                }
                else
                {
                    serviceResult.ExceptionHandle();
                    response = StatusCode(500, serviceResult);
                }
            }

            return response;
        }

        [AllowAnonymous]
        [HttpPost("changePassword")]
        public IActionResult ChangePassword([FromBody] UserDTO user)
        {
            IActionResult response;
            var bl = BLFactory.CreateAs<AuthBL>(serviceCollection);

            var succcess = bl.Update(user);
            if (succcess)
            {
                response = Ok("Đổi mật khẩu thành công!");
            }
            else
            {
                serviceResult.ExceptionHandle();
                response = StatusCode(500, serviceResult);
            }

            return response;
        }

    }
}
