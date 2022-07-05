using Dapper.Contrib.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Library.Models
{
    [Table("Comic")]
    public class Comic
    {
        [ExplicitKey]
        public int? ComicId { get; set; }
        public string ComicCode { get; set; }
        public string ComicName { get; set; }
        public int Like { get; set; }
        public int Subcribe { get; set; }
        public int Chapter { get; set; }
        /// <summary>
        /// 0 - Chưa hoàn thành, 1 - Hoàn thành
        /// </summary>
        public int Status { get; set; }
        public int? CategoryId { get; set; }
        public string Thumbnail { get; set; }
        public string Description { get; set; }
        public DateTime? CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }

    }
}
