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
        
        /// <summary>
        /// Danh sách truyện
        /// </summary>
        /// <param name="comicSearch"></param>
        /// <param name="categoryId"></param>
        /// <param name="pageSize"></param>
        /// <param name="pageNumber"></param>
        /// <param name="sortOrder"></param>
        /// <returns></returns>
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

        /// <summary>
        /// Danh sách chương
        /// </summary>
        /// <param name="pageSize"></param>
        /// <param name="pageNumber"></param>
        /// <param name="comicId"></param>
        /// <returns></returns>
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

        /// <summary>
        /// Lấy thông tin truyện theo id
        /// </summary>
        /// <param name="comicId"></param>
        /// <returns></returns>
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

        /// <summary>
        /// Like truyện
        /// </summary>
        /// <param name="comicId"></param>
        /// <param name="userId"></param>
        /// <returns></returns>
        [HttpPost("Like")]
        public IActionResult Like(int comicId, int userId, bool isLike)
        {
            var bl = BLFactory.CreateAs<ComicBL>(serviceCollection);
            return Ok(bl.Like(comicId, userId, isLike));        
        }

        /// <summary>
        /// Subcribe truyện
        /// </summary>
        /// <param name="comicId"></param>
        /// <param name="userId"></param>
        /// <returns></returns>
        [HttpPost("Subcribe")]
        public IActionResult Subcribe(int comicId, int userId, bool isSubcribe)
        {
            var bl = BLFactory.CreateAs<ComicBL>(serviceCollection);
            return Ok(bl.Subcribe(comicId, userId, isSubcribe));
        }

        /// <summary>
        /// Lấy trạng thái truyện đã lưu theo userId
        /// </summary>
        /// <param name="comicId"></param>
        /// <param name="userId"></param>
        /// <returns></returns>
        [HttpGet("Status")]
        public IActionResult Status(int comicId, int userId)
        {
            var bl = BLFactory.CreateAs<ComicBL>(serviceCollection);
            return Ok(bl.Status(comicId, userId));
        }


        #endregion
    }
}
