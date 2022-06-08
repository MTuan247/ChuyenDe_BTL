using Dapper.Contrib.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Library.Models
{
    [Table("User")]
    public class User : BaseEntity
    {
        /// <summary>
        /// Id người dùng
        /// </summary>
        [Key]
        public int UserId { get; set; }
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
        public string Role { get; set; }
    }
}
