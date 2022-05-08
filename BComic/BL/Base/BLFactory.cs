using Library.Interfaces;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Base
{
    public static class BLFactory
    {
        public static T CreateAs<T>(ITServiceCollection serviceCollection = null)
        {
            if (serviceCollection == null)
            {
                return Activator.CreateInstance<T>();
            }

            return (T)Activator.CreateInstance(typeof(T), serviceCollection);
        }
    }
}
