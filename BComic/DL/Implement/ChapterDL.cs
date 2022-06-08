using Dapper;
using DL.Base;
using Library.Interfaces;
using Library.Models;
using System;
using System.Collections.Generic;
using System.Data;
using Dapper.Contrib.Extensions;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DL.Implement
{
    public class ChapterDL : BaseDL<Chapter>
    {
        public ChapterDL(ITServiceCollection serviceCollection) : base(serviceCollection)
        {
        }


    }
}
