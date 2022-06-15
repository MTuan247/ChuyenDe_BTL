using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Library.Models
{
    public class Like
    {
        public int UserId { get; set; }
        public int ComicId { get; set; }
        public bool? IsLike { get; set; }
    }
}
