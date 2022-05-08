using BL.Base;
using Library.Constants;
using Library.Interfaces;
using Library.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BaseController<TEntity> : ControllerBase
    {
        #region Fields
        protected ServiceResult serviceResult;
        protected ITServiceCollection serviceCollection;
        #endregion

        #region Constructors
        public BaseController(ITServiceCollection serviceCollection)
        {
            serviceResult = new ServiceResult();
            this.serviceCollection = serviceCollection;
        }
        #endregion

        #region Methods
        /// <summary>
        /// Method get lấy toàn bộ dữ liệu
        /// </summary>
        /// <returns></returns>
        /// Created by: NMTuan (02/08/2021)
        /// Modified by: NMTuan (02/08/2021)
        [HttpGet]
        [Authorize(Roles = Role.Admin)]
        public virtual IActionResult Get()
        {
            try
            {
                var entities = BLFactory.CreateAs<BaseBL<TEntity>>(serviceCollection).GetEntities();
                return Ok(entities);
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
