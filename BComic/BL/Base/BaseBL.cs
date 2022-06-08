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
    public class BaseBL<TEntity> where TEntity : class
    {
        protected ITServiceCollection serviceCollection;

        #region Constructor
        public BaseBL(ITServiceCollection serviceCollection)
        {
            this.serviceCollection = serviceCollection;
        }
        #endregion

        /// <summary>
        /// Hàm lấy danh sách bản ghi
        /// </summary>
        /// <returns></returns>
        public List<TEntity> GetEntities()
        {
            var baseDL = DLFactory.CreateAs<BaseDL<TEntity>>(serviceCollection);
            return baseDL.GetEntities();
        }

        /// <summary>
        /// Hàm lấy bản ghi theo id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public TEntity GetEntityById(int id)
        {
            var baseDL = DLFactory.CreateAs<BaseDL<TEntity>>(serviceCollection);
            return baseDL.GetEntityById(id);
        }

        /// <summary>
        /// Hàm insert bản ghi
        /// </summary>
        /// <returns></returns>
        public int Insert(TEntity entity)

        {
            var baseDL = DLFactory.CreateAs<BaseDL<TEntity>>(serviceCollection);

            int rowAffect = baseDL.Insert<TEntity>(entity);

            return rowAffect;
        }

        /// <summary>
        /// Hàm update bản ghi
        /// </summary>
        /// <returns></returns>
        public bool Update(TEntity entity)
        {
            var baseDL = DLFactory.CreateAs<BaseDL<TEntity>>(serviceCollection);

            bool success = baseDL.Update<TEntity>(entity);

            return success;
        }

        /// <summary>
        /// Hàm xoá bản ghi
        /// </summary>
        /// <returns></returns>
        public bool Delete(TEntity entity)
        {
            var baseDL = DLFactory.CreateAs<BaseDL<TEntity>>(serviceCollection);

            bool success = baseDL.Delete<TEntity>(entity);

            return success;
        }
    }
}
