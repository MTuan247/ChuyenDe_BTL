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
    public class ComicBL : BaseBL<Comic>
    {
        public ComicBL(ITServiceCollection serviceCollection) : base(serviceCollection)
        {
        }

        public PagingResult GetComicsFilter(string comicSearch, int? categoryId, int pageSize, int pageNumber, int? sortOrder)
        {
            var dl = DLFactory.CreateAs<ComicDL>(serviceCollection);
            return dl.Comics(comicSearch, categoryId, pageSize, pageNumber, sortOrder);
        }

        public PagingResult GetChapterFilter(int pageSize, int pageNumber, int comicId)
        {
            var dl = DLFactory.CreateAs<ComicDL>(serviceCollection);
            return dl.Chapters(pageSize, pageNumber, comicId);
        }

        public ComicDTO GetComic(int comicId)
        {
            var dl = DLFactory.CreateAs<ComicDL>(serviceCollection);
            return dl.Comic(comicId);
        }

        /// <summary>
        /// Like truyện
        /// </summary>
        /// <param name="userId"></param>
        /// <param name="comicId"></param>
        /// <returns></returns>
        public bool Like (int comicId, int userId, bool IsLike)
        {
            var dl = DLFactory.CreateAs<ComicDL>(serviceCollection);

            if (IsLike)
            {
                return dl.Like(comicId, userId);
            }
            else
            {
                return dl.UnLike(comicId, userId);
            }


        }

        /// <summary>
        /// Like truyện
        /// </summary>
        /// <param name="userId"></param>
        /// <param name="comicId"></param>
        /// <returns></returns>
        public bool Subcribe(int comicId, int userId, bool IsLike)
        {
            var dl = DLFactory.CreateAs<ComicDL>(serviceCollection);

            if (IsLike)
            {
                return dl.Subcribe(comicId, userId);
            }
            else
            {
                return dl.UnSubcribe(comicId, userId);
            }


        }

        /// <summary>
        /// Like truyện
        /// </summary>
        /// <param name="userId"></param>
        /// <param name="comicId"></param>
        /// <returns></returns>
        public object Status(int comicId, int userId)
        {
            var dl = DLFactory.CreateAs<ComicDL>(serviceCollection);

            return dl.Status(comicId, userId);

        }

    }
}
