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
    public class ChapterBL : BaseBL<Chapter>
    {
        public ChapterBL(ITServiceCollection serviceCollection) : base(serviceCollection)
        {
        }

        /// <summary>
        /// Hàm insert bản ghi
        /// </summary>
        /// <returns></returns>
        public override int Insert(Chapter entity)
        {
            var baseDL = DLFactory.CreateAs<BaseDL<Chapter>>(serviceCollection);
            var comicDL = DLFactory.CreateAs<ComicDL>(serviceCollection);

            var comic = comicDL.GetEntityById(entity.ComicId);

            comic.Chapter++;

            comicDL.Update(comic);

            int rowAffect = baseDL.Insert<Chapter>(entity);

            return rowAffect;
        }
    }
}
