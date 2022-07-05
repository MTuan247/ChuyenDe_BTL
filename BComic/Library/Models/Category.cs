using Dapper.Contrib.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Library.Models
{
    [Table("Category")]
    public class Category
    {
        [ExplicitKey]
        public int? CategoryId { get; set; }
        public string CategoryName { get; set; }
    }
}
