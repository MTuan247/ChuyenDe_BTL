using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using MySqlConnector;
using System.Data;

using Library.Models;
using Microsoft.Extensions.Configuration;
using Library.Enums;
using Library.Interfaces;

namespace Api.Controllers
{
    public class UserController : BaseController<User>
    {
        #region Fields
        #endregion

        #region Constructors
        public UserController(ITServiceCollection serviceCollection) : base(serviceCollection)
        {
        }
        #endregion

        #region Methods
        
        #endregion
    }
}
