using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Library.Models
{
    public class User : BaseEntity
    {
        /// <summary>
        /// Tên tài khoản
        /// </summary>
        public string Username { get; set; }

        /// <summary>
        /// Mật khẩu
        /// </summary>
        public string Password { get; set; }
        /// <summary>
        /// Chức danh
        /// </summary>
        public List<string> Roles { get; set; }
        /// <summary>
        /// Chức danh
        /// </summary>
        public string Role { get; set; }
    }
}
