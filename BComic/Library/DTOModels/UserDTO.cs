using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Library.Models
{
    public class UserDTO : User
    {
        /// <summary>
        /// Chức danh
        /// </summary>
        public List<string> Roles { get; set; }
    }
}
