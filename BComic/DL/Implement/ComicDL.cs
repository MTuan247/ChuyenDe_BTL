using Dapper;
using DL.Base;
using Library.Interfaces;
using Library.Models;
using System;
using System.Collections.Generic;
using System.Data;
using Dapper.Contrib.Extensions;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Library.Enums;

namespace DL.Implement
{
    public class ComicDL : BaseDL<Comic>
    {
        public ComicDL(ITServiceCollection serviceCollection) : base(serviceCollection)
        {
        }

        /// <summary>
        /// Hàm danh sách truyện
        /// </summary>
        /// <returns></returns>
        /// CreatedBy: NMTuan (30/07/2021)
        /// ModifiedBy: NMTuan (30/07/2021)
        public PagingResult Comics(string comicSearch, int? categoryId, int pageSize, int pageNumber, int? sortOrder = 0)
        {

            var proc = $"Proc_GetComicsFilterPaging";

            DynamicParameters parameters = new DynamicParameters();

            parameters.Add("@TotalPage", dbType: DbType.Int32, direction: ParameterDirection.Output);
            parameters.Add("@TotalRecord", dbType: DbType.Int32, direction: ParameterDirection.Output);
            parameters.Add("@PageSize", pageSize);
            parameters.Add("@PageNumber", pageNumber);
            parameters.Add("@CategoryId", categoryId);
            parameters.Add("@ComicSearch", comicSearch);
            parameters.Add("@SortOrder", sortOrder);

            var comics = _dbConnection.Query<ComicDTO>(proc, parameters, commandType: CommandType.StoredProcedure);

            //switch (sortOrder)
            //{
            //    case null:
            //    case (int)SortOrder.Code:
            //        comics = comics.OrderBy(x => x.ComicCode).ThenBy(x => x.ComicName);
            //        break;
            //    case (int)SortOrder.Name:
            //        comics = comics.OrderBy(x => x.ComicName).ThenBy(x => x.ModifiedDate);
            //        break;
            //    case (int)SortOrder.CreatedDate:
            //        comics = comics.OrderBy(x => x.CreatedDate).ThenBy(x => x.ComicName);
            //        break;
            //    case (int)SortOrder.ModifiedDate:
            //        comics = comics.OrderBy(x => x.ModifiedDate).ThenBy(x => x.ComicName);
            //        break;
            //}

            var totalPage = parameters.Get<int>("@TotalPage");
            var totalRecord = parameters.Get<int>("@TotalRecord");

            var result = new PagingResult()
            {
                TotalPage = totalPage,
                TotalRecord = totalRecord,
                Data = comics,
            };

            return result;
        }

        /// <summary>
        /// Hàm danh sách chương
        /// </summary>
        /// <returns></returns>
        /// CreatedBy: NMTuan (30/07/2021)
        /// ModifiedBy: NMTuan (30/07/2021)
        public PagingResult Chapters(int pageSize, int pageNumber, int comicId)
        {

            var sql = $"SELECT * FROM Chapter c WHERE c.ComicId = @ComicId";

            DynamicParameters parameters = new DynamicParameters();

            parameters.Add("@ComicId", comicId);

            var chapters = _dbConnection.Query<ChapterDTO>(sql, parameters, commandType: CommandType.Text) as List<ChapterDTO>;

            var totalRecord = chapters.Count;

            int totalPage;

            if (pageNumber == 0 || pageSize == 0)
            {
                totalPage = 1;
            }
            else
            {
                totalPage = (int)Math.Ceiling(totalRecord * 1.0 / pageSize);
            }

            var result = new PagingResult()
            {
                TotalPage = totalPage,
                TotalRecord = totalRecord,
                Data = chapters,
            };

            return result;
        }


        /// <summary>
        /// Hàm danh sách chương
        /// </summary>
        /// <returns></returns>
        /// CreatedBy: NMTuan (30/07/2021)
        /// ModifiedBy: NMTuan (30/07/2021)
        public ComicDTO Comic(int comicId)
        {

            var sql = $"SELECT * FROM Comic c WHERE c.ComicId = @ComicId;" +
                $"SELECT ch.ChapterId, ch.ChapterName FROM Chapter ch WHERE ch.ComicId = @ComicId;";

            DynamicParameters parameters = new DynamicParameters();

            parameters.Add("@ComicId", comicId);

            var query = _dbConnection.QueryMultiple(sql, parameters, commandType: CommandType.Text);

            var comic = query.ReadFirstOrDefault<ComicDTO>();
            var chapters = query.Read<Chapter>();

            comic.Chapters = chapters.ToList();

            return comic;
        }

        /// <summary>
        /// Like truyện
        /// </summary>
        /// <param name="comicId"></param>
        /// <param name="userId"></param>
        /// <returns></returns>
        public bool Like(int comicId, int userId)
        {
            var sql = $"SELECT * FROM `Like` l WHERE l.UserId = @UserId AND l.ComicId = @ComicId;";

            DynamicParameters parameters = new DynamicParameters();

            parameters.Add("@ComicId", comicId);
            parameters.Add("@UserId", userId);

            var query = _dbConnection.Query<Like>(sql, parameters, commandType: CommandType.Text).ToList();

            var rowAffect = 0;

            if (query.Count > 0)
            {
                sql = $"UPDATE `like` l SET l.IsLike = 1 WHERE l.UserId = @Userid AND ComicId = @ComicId;" +
                    $"UPDATE `comic` c SET c.Like = c.Like + 1;";

                rowAffect = _dbConnection.Execute(sql, parameters, commandType: CommandType.Text);
            }
            else 
            {
                sql = $"INSERT `like` (UserId, ComicId, `IsLike`) VALUES(@UserId, @ComicId, 1);" +
                    $"UPDATE `comic` c SET c.Like = c.Like + 1;";

                rowAffect = _dbConnection.Execute(sql, parameters, commandType: CommandType.Text);
            }


            return rowAffect > 0;
            

        }

        /// <summary>
        /// UnLike truyện
        /// </summary>
        /// <param name="comicId"></param>
        /// <param name="userId"></param>
        /// <returns></returns>
        public bool UnLike(int comicId, int userId)
        {
            string sql;

            DynamicParameters parameters = new DynamicParameters();

            parameters.Add("@ComicId", comicId);
            parameters.Add("@UserId", userId);

            sql = $"UPDATE `like` l SET l.IsLike = 0 WHERE l.UserId = @Userid AND ComicId = @ComicId;" +
                $"UPDATE `comic` c SET c.Like = c.Like - 1;";

            var rowAffect = _dbConnection.Execute(sql, parameters, commandType: CommandType.Text);

            return rowAffect > 0;
        }

        /// <summary>
        /// Like truyện
        /// </summary>
        /// <param name="comicId"></param>
        /// <param name="userId"></param>
        /// <returns></returns>
        public bool Subcribe(int comicId, int userId)
        {
            var sql = $"INSERT `subcribe` (UserId, ComicId) VALUES(@UserId, @ComicId);" +
                $"UPDATE `comic` c SET c.Subcribe = c.Subcribe + 1;";

            DynamicParameters parameters = new DynamicParameters();

            parameters.Add("@ComicId", comicId);
            parameters.Add("@UserId", userId);

            var rowAffect = 0;

            rowAffect = _dbConnection.Execute(sql, parameters, commandType: CommandType.Text);

            return rowAffect > 0;

        }

        /// <summary>
        /// UnLike truyện
        /// </summary>
        /// <param name="comicId"></param>
        /// <param name="userId"></param>
        /// <returns></returns>
        public bool UnSubcribe(int comicId, int userId)
        {

            DynamicParameters parameters = new DynamicParameters();

            parameters.Add("@ComicId", comicId);
            parameters.Add("@UserId", userId);

            var sql = $"DELETE FROM subcribe WHERE UserId = @UserId AND ComicId = @ComicId;" +
                    $"UPDATE `comic` c SET c.Subcribe = c.Subcribe - 1;";

            var rowAffect = _dbConnection.Execute(sql, parameters, commandType: CommandType.Text);

            return rowAffect > 0;
        }

        /// <summary>
        /// Status truyện
        /// </summary>
        /// <param name="comicId"></param>
        /// <param name="userId"></param>
        /// <returns></returns>
        public object Status(int comicId, int userId)
        {

            DynamicParameters parameters = new DynamicParameters();

            parameters.Add("@ComicId", comicId);
            parameters.Add("@UserId", userId);

            var sql = $"SELECT * FROM `Like` l WHERE l.UserId = @UserId AND l.ComicId = @ComicId;";

            var queryLike = _dbConnection.Query<Like>(sql, parameters, commandType: CommandType.Text);

            sql = $"SELECT * FROM Subcribe l WHERE l.UserId = @UserId AND l.ComicId = @ComicId;";

            var querySubcribe = _dbConnection.Query<Like>(sql, parameters, commandType: CommandType.Text);

            var result = new
            {
                IsLike = queryLike.Count() > 0 && queryLike.FirstOrDefault().IsLike.GetValueOrDefault(),
                IsSubcribe = querySubcribe.Count() > 0,
            };

            return result;
        }
    }
}
