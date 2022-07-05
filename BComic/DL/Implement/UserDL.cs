using Dapper;
using DL.Base;
using Library.Interfaces;
using Library.Models;
using System;
using System.Collections.Generic;
using System.Data;
using Dapper.Contrib.Extensions;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DL.Implement
{
    public class UserDL : BaseDL<User>
    {
        public UserDL(ITServiceCollection serviceCollection) : base(serviceCollection)
        {
        }

        /// <summary>
        /// Hàm lấy người dùng
        /// </summary>
        /// <returns></returns>
        /// CreatedBy: NMTuan (30/07/2021)
        /// ModifiedBy: NMTuan (30/07/2021)
        public UserDTO GetUser(string userName, string passWord)
        {

            var sql = $"Select * from User u where u.UserName = @UserName and u.Password = @Password;";

            DynamicParameters parameters = new DynamicParameters();

            parameters.Add("@UserName", userName);
            parameters.Add("@Password", passWord);

            var user = _dbConnection.QueryFirstOrDefault<UserDTO>(sql, parameters, commandType: CommandType.Text);

            return user;
        }

        /// <summary>
        /// Hàm lấy người dùng theo username
        /// </summary>
        /// <returns></returns>
        /// CreatedBy: NMTuan (30/07/2021)
        /// ModifiedBy: NMTuan (30/07/2021)
        public UserDTO GetUser(string userName)
        {

            var sql = $"Select * from User u where u.UserName = @UserName;";

            DynamicParameters parameters = new DynamicParameters();

            parameters.Add("@UserName", userName);

            var user = _dbConnection.QueryFirstOrDefault<UserDTO>(sql, parameters, commandType: CommandType.Text);

            return user;
        }

    }
}
