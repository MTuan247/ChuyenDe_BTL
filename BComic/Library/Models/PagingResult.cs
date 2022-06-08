using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Library.Models
{
    public class PagingResult
    {
        /// <summary>
        /// Số trang
        /// </summary>
        public int TotalPage { get; set; }
        /// <summary>
        /// Số bản ghi
        /// </summary>
        public int TotalRecord { get; set; }
        /// <summary>
        /// Dữ liệu trả về
        /// </summary>
        public object Data { get; set; }
    }
}
