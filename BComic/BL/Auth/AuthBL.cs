using BL.Base;
using BL.Implement;
using Library.Constants;
using Library.Interfaces;
using Library.Models;
using Library.Utils;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace BL.Auth
{
    public class AuthBL : BaseBL<User>
    {
        #region Constructors
        public AuthBL(ITServiceCollection serviceCollection) : base(serviceCollection)
        {
        }
        #endregion

        #region Methods

        /// <summary>
        /// Hàm sinh ra token
        /// </summary>
        /// <param name="userInfo"></param>
        /// <returns></returns>
        public string GenerateJSONWebToken(UserDTO userInfo)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(serviceCollection.Configuration["Jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var claims = new List<Claim>() {
                new Claim(ClaimTypes.Name, userInfo.Username),
            };

            foreach (var role in userInfo.Roles)
            {
                claims.Add(new Claim(ClaimTypes.Role, role));
            }

            var token = new JwtSecurityToken(serviceCollection.Configuration["Jwt:Issuer"],
              serviceCollection.Configuration["Jwt:Issuer"],
              claims,
              expires: DateTime.Now.AddMinutes(120),
              signingCredentials: credentials);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        /// <summary>
        /// Xác minh người dùng
        /// </summary>
        /// <param name="login"></param>
        /// <returns></returns>
        public UserDTO AuthenticateUser(UserDTO login)
        {
            UserDTO user;

            var userBL = BLFactory.CreateAs<UserBL>(serviceCollection);

            user = (UserDTO) userBL.GetUser(login.Username, login.Password);

            if (user != null)
            {
                user.Password = null;
                user.Roles = SerializeUtil.DeserializeObject<List<string>>(user.Role);
            }

            return user;
        }

        /// <summary>
        /// Tìm người dùng theo username
        /// </summary>
        /// <param name="login"></param>
        /// <returns></returns>
        public UserDTO GetByUserName(UserDTO login)
        {
            UserDTO user;

            var userBL = BLFactory.CreateAs<UserBL>(serviceCollection);

            user = (UserDTO)userBL.GetUser(login.Username);

            if (user != null)
            {
                user.Password = null;
            }

            return user;
        }


        #endregion
    }
}
