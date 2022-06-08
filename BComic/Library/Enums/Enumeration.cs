using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Library.Enums
{
    class Enumeration
    {

    }

    /// <summary>
    /// Xác định trường sort
    /// </summary>
    public enum SortOrder
    {
        None = 0,
        Code = 1,
        Name = 2,
        CreatedDate = 3,
        ModifiedDate = 4,
    }

    /// <summary>
    /// Xác định trang thái entity: Update, Add, Delete
    /// </summary>
    public enum EntityState
    {
        /// <summary>
        /// Thêm mới
        /// </summary>
        Add = 1,
        /// <summary>
        /// Cập nhật
        /// </summary>
        Update = 2,
        /// <summary>
        /// Xóa
        /// </summary>
        Delete = 3,
    }
}
