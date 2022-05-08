using BL.Base;
using DL.Base;
using DL.Implement;
using Library.Interfaces;
using Library.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Implement
{
    public class UserBL : BaseBL<User>
    {
        public UserBL(ITServiceCollection serviceCollection) : base(serviceCollection)
        {
        }

        /// <summary>
        /// Hàm lấy người dùng
        /// </summary>
        /// <returns></returns>
        public User GetUser(string userName, string passWord)
        {
            var dl = DLFactory.CreateAs<UserDL>(serviceCollection);

            var user = dl.GetUser(userName, passWord);
            
            return user;
        }
    }
}
