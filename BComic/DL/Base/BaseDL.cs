using System;
using System.Collections.Generic;
using Microsoft.Extensions.Configuration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;
using MySqlConnector;
using Dapper;
using Library.Interfaces;
using Dapper.Contrib.Extensions;

namespace DL.Base
{
    public class BaseDL<TEntity> where TEntity : class
    {
        ITServiceCollection serviceCollection;
        protected IDbConnection _dbConnection;
        string _connectionString;
        string className;

        #region Constructor
        public BaseDL(ITServiceCollection serviceCollection)
        {
            this.serviceCollection = serviceCollection;
            _connectionString = serviceCollection.Configuration.GetConnectionString("ConnectionString");
            _dbConnection = new MySqlConnection(_connectionString);
            className = typeof(TEntity).Name;
        }
        #endregion

        #region Methods

        /// <summary>
        /// Hàm lấy danh sách entities
        /// </summary>
        /// <returns></returns>
        /// CreatedBy: NMTuan (30/07/2021)
        /// ModifiedBy: NMTuan (30/07/2021)
        public List<TEntity> GetEntities()
        {

            var sql = $"Select * from {className};";

            var entities = _dbConnection.Query<TEntity>(sql, commandType: CommandType.Text);

            return entities.ToList();
        }

        /// <summary>
        /// Hàm lấy danh sách entities
        /// </summary>
        /// <returns></returns>
        /// CreatedBy: NMTuan (30/07/2021)
        /// ModifiedBy: NMTuan (30/07/2021)
        public List<Entity> GetEntities<Entity>(string table)
        {

            var sql = $"Select * from {table};";

            var entities = _dbConnection.Query<Entity>(sql, commandType: CommandType.Text);

            return entities.ToList();
        }

        /// <summary>
        /// Hàm lấy bản ghi theo id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public TEntity GetEntityById(int id)
        {
            var sql = $"Select * from {className} where {className}Id = @EntityId";

            DynamicParameters parameters = new DynamicParameters();

            parameters.Add("@EntityId", id);

            var entity = _dbConnection.QueryFirstOrDefault<TEntity>(sql, param: parameters, commandType: CommandType.Text);

            return entity;
        }

        /// <summary>
        /// Hàm insert bản ghi
        /// </summary>
        /// <returns></returns>
        public int Insert(TEntity entity, IDbTransaction transaction = null)
        {
            int rowAffect = (int)_dbConnection.Insert<TEntity>(entity, transaction);

            return rowAffect;
        }

        /// <summary>
        /// Hàm insert bản ghi
        /// </summary>
        /// <returns></returns>
        public int Insert<T>(T entity, IDbTransaction transaction = null) where T : class
        {
            int rowAffect = (int)_dbConnection.Insert<T>(entity, transaction);

            return rowAffect;
        }

        /// <summary>
        /// Hàm update bản ghi
        /// </summary>
        /// <returns></returns>
        public bool Update(TEntity entity, IDbTransaction transaction = null)
        {
            bool success = _dbConnection.Update<TEntity>(entity, transaction);

            return success;
        }

        /// <summary>
        /// Hàm update bản ghi
        /// </summary>
        /// <returns></returns>
        public bool Update<T>(T entity, IDbTransaction transaction = null) where T : class
        {
            bool success = _dbConnection.Update<T>(entity, transaction);

            return success;
        }

        /// <summary>
        /// Hàm xoá bản ghi
        /// </summary>
        /// <returns></returns>
        public bool Delete(TEntity entity, IDbTransaction transaction = null)
        {
            bool success = _dbConnection.Delete<TEntity>(entity, transaction);

            return success;
        }

        /// <summary>
        /// Hàm xoá bản ghi
        /// </summary>
        /// <returns></returns>
        public bool Delete<T>(T entity, IDbTransaction transaction = null) where T : class
        {
            bool success = _dbConnection.Delete<T>(entity, transaction);

            return success;
        }

        #endregion
    }
}
