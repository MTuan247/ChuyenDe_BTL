using BL.Base;
using DL.Base;
using DL.Implement;
using Library.Interfaces;
using Library.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Implement
{
    public class ChapterBL : BaseBL<Chapter>
    {
        public ChapterBL(ITServiceCollection serviceCollection) : base(serviceCollection)
        {
        }
    }
}
