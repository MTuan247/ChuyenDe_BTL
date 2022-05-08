using DL.Base;
using Library.Interfaces;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Base
{
    public class BaseBL<Entity>
    {
        protected ITServiceCollection serviceCollection;

        #region Constructor
        public BaseBL(ITServiceCollection serviceCollection)
        {
            this.serviceCollection = serviceCollection;
        }
        #endregion

        public List<Entity> GetEntities()
        {
            var baseDL = DLFactory.CreateAs<BaseDL<Entity>>(serviceCollection);
            return baseDL.GetEntities();
        }
    }
}
