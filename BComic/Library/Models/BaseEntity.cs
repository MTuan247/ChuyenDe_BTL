using Library.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Library.Models
{
    #region Attributes
    /// <summary>
    /// Attribute trường bắt buộc
    /// </summary>
    [AttributeUsage(AttributeTargets.Property)]
    public class MISARequired : Attribute
    {

    }

    /// <summary>
    /// Attribute khóa chính
    /// </summary>
    [AttributeUsage(AttributeTargets.Property)]
    public class PrimaryKey : Attribute
    {

    }

    /// <summary>
    /// Attribute Tên hiển thị
    /// </summary>
    [AttributeUsage(AttributeTargets.Property)]
    public class MISAPropertyName : Attribute
    {
        public string Name = string.Empty;
        public MISAPropertyName(string propertyName)
        {
            Name = propertyName;
        }
    }

    /// <summary>
    /// Attribute Giới hạn độ dài
    /// </summary>
    [AttributeUsage(AttributeTargets.Property)]
    public class MISAMaxLength : Attribute
    {
        public int Max = int.MaxValue;
        public MISAMaxLength(int maxLength)
        {
            Max = maxLength;
        }
    }

    /// <summary>
    /// Attribute Không được trùng
    /// </summary>
    [AttributeUsage(AttributeTargets.Property)]
    public class MISAUnique : Attribute
    {

    }

    /// <summary>
    /// Attribute Email
    /// </summary>
    [AttributeUsage(AttributeTargets.Property)]
    public class MISAEmail : Attribute
    {

    }

    /// <summary>
    /// Attribute Số điện thoại
    /// </summary>
    [AttributeUsage(AttributeTargets.Property)]
    public class MISAPhoneNumber : Attribute
    {

    }

    /// <summary>
    /// Attribute không map giá trị trong thêm vào dynamic parameters
    /// </summary>
    [AttributeUsage(AttributeTargets.Property)]
    public class MISAOverMapping : Attribute
    {

    }
    #endregion

    public class BaseEntity
    {
        #region Properties

        /// <summary>
        /// Hàm clone
        /// </summary>
        /// <returns></returns>
        public object Clone()
        {
            return this.MemberwiseClone();
        }
        #endregion

    }
}
