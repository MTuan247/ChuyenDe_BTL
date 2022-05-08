using Library.Interfaces;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Library.Collection
{
    public class TServiceCollection : ITServiceCollection
    {
        public IConfiguration Configuration { get; private set; }

        public TServiceCollection(IConfiguration configuration)
        {
            Configuration = configuration;
        }
    }
}
