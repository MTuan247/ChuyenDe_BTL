using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Library.Models
{
    public class Comment
    {
        public int ComicId { get; set; }
        public int UserId { get; set; }
        public string Content { get; set; }
    }
}
