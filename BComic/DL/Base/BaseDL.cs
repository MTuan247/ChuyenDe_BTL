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

namespace DL.Base
{
    public class BaseDL<TEntity>
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

        #endregion
    }
}
