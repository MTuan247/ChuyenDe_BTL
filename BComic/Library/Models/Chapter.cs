using Dapper.Contrib.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Library.Models
{
    public class Chapter
    {
        [Key]
        public int ChapterId { get; set; }
        public string ChapterCode { get; set; }
        public string ChapterName { get; set; }
        public int Like { get; set; }
        public int ComicId { get; set; }
        public string Content { get; set; }
    }
}
