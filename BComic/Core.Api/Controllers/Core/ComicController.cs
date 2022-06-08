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
using BL.Base;
using BL.Implement;

namespace Api.Controllers
{
    public class ComicController : BaseController<Comic>
    {
        #region Fields
        #endregion

        #region Constructors
        public ComicController(ITServiceCollection serviceCollection) : base(serviceCollection)
        {
        }
        #endregion

        #region Methods
        
        [HttpGet("Comics")]
        public IActionResult GetComics(string comicSearch, int? categoryId, int pageSize, int pageNumber, int? sortOrder)
        {
            try
            {
                var bl = BLFactory.CreateAs<ComicBL>(serviceCollection);
                var data = bl.GetComicsFilter(comicSearch, categoryId, pageSize, pageNumber, sortOrder);
                return Ok(data);
            }
            catch (Exception)
            {

                throw;
            }
        }

        [HttpGet("Chapters")]
        public IActionResult GetChapters(int pageSize, int pageNumber, int comicId)
        {
            try
            {
                var bl = BLFactory.CreateAs<ComicBL>(serviceCollection);
                var data = bl.GetChapterFilter(pageSize, pageNumber, comicId);
                return Ok(data);
            }
            catch (Exception)
            {

                throw;
            }
        }

        [HttpGet("{comicId}")]
        public override IActionResult GetById(int comicId)
        {
            try
            {
                var bl = BLFactory.CreateAs<ComicBL>(serviceCollection);
                var data = bl.GetComic(comicId);
                return Ok(data);
            }
            catch (Exception)
            {

                throw;
            }
        }



        #endregion
    }
}
