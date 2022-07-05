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
using Microsoft.AspNetCore.Authorization;
using Library.Constants;
using BL.Base;
using BL.Implement;

namespace Api.Controllers
{
    public class ChapterController : BaseController<Chapter>
    {
        #region Fields
        #endregion

        #region Constructors
        public ChapterController(ITServiceCollection serviceCollection) : base(serviceCollection)
        {
        }
        #endregion

        #region Methods

        /// <summary>
        /// Method insert dữ liệu
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        [Authorize(Roles = Role.Admin)]
        public override IActionResult Insert(Chapter entity)
        {
            try
            {
                var success = BLFactory.CreateAs<ChapterBL>(serviceCollection).Insert(entity);
                return Ok(success);
            }
            catch (Exception ex)
            {
                serviceResult.ExceptionHandle(ex);
                return StatusCode(500, serviceResult);
            }

        }

        #endregion
    }
}
