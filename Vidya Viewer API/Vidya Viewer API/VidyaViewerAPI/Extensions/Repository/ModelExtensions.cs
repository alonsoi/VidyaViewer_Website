using System;
using System.Data;
using System.Data.SqlClient;
using VidyaViewerAPI.Models;

namespace VidyaViewerAPI.Extensions.Repository
{
    public static class ModelExtensions
    {
        // Programming by David Jones (All of the populate methods, the rest is generated)
        // Purpose is to populate the created objects.
        public static Developer PopulateDeveloper(this Developer item, IDataReader dataReader)
        {
            item.Id = GetInteger(dataReader, "Id");
            item.FullName = GetString(dataReader, "FullName");
            item.Location = GetString(dataReader, "Location");
            item.DescriptionDetail = GetString(dataReader, "DescriptionDetail");
            item.ImagePath = GetString(dataReader, "ImagePath");

            return item;
        }

        public static Game PopulateGame(this Game item, IDataReader dataReader)
        {
            item.Id = GetInteger(dataReader, "Id");
            item.Title = GetString(dataReader, "Title");
            item.RatingId = GetInteger(dataReader, "RatingId");
            item.DescriptionDetail = GetString(dataReader, "DescriptionDetail");
            item.ReleaseDate = GetDateTime(dataReader, "ReleaseDate");
            item.ImagePath = GetNullableString(dataReader, "ImagePath");

            return item;
        }

        public static Genre PopulateGenre(this Genre item, IDataReader dataReader)
        {
            item.Id = GetInteger(dataReader, "Id");
            item.GenreName = GetString(dataReader, "GenreName");
            item.DescriptionDetail = GetString(dataReader, "DescriptionDetail");

            return item;
        }

        public static Rating PopulateRating(this Rating item, IDataReader dataReader)
        {
            item.Id = GetInteger(dataReader, "Id");
            item.Esrb = GetString(dataReader, "Esrb");
            item.ImagePath = GetString(dataReader, "ImagePath");

            return item;
        }

        public static Vendor PopulateVendor(this Vendor item, IDataReader dataReader)
        {
            item.Id = GetInteger(dataReader, "Id");
            item.VendorName = GetString(dataReader, "VendorName");
            item.Location = GetString(dataReader, "Location");
            item.DetailDescription = GetString(dataReader, "DetailDescription");
            item.ImagePath = GetString(dataReader, "ImagePath");

            return item;
        }

        #region HelperMethods

        private static void CheckValidReaderAndColumn(IDataReader reader, string column)
        {
            if (reader == null)
                throw new ArgumentNullException(nameof(reader));

            if (!reader.HasColumn(column))
                throw new ArgumentException($"Invalid Column {column}");
        }

        private static string ToString(object value)
        {
            return (value ?? DBNull.Value) == DBNull.Value ? null : value?.ToString();
        }

        private static bool HasColumn(this IDataReader dr, string columnName)
        {
            for (var i = 0; i < dr.FieldCount; i++)
            {
                if (dr.GetName(i).Equals(columnName, StringComparison.InvariantCultureIgnoreCase))
                    return true;
            }
            return false;
        }

        private static bool GetBool(IDataReader reader, string column)
        {
            CheckValidReaderAndColumn(reader, column);

            int index = reader.GetOrdinal(column);

            return reader.GetBoolean(index);
        }

        private static int GetInteger(IDataReader reader, string column)
        {
            CheckValidReaderAndColumn(reader, column);

            int index = reader.GetOrdinal(column);

            return reader.GetInt32(index);
        }

        private static decimal GetDecimal(IDataReader reader, string column)
        {
            CheckValidReaderAndColumn(reader, column);

            int index = reader.GetOrdinal(column);

            return reader.GetDecimal(index);
        }

        private static string GetString(IDataReader reader, string column)
        {
            CheckValidReaderAndColumn(reader, column);

            int index = reader.GetOrdinal(column);

            return reader.GetString(index);
        }

        private static DateTime GetDateTime(IDataReader reader, string column)
        {
            CheckValidReaderAndColumn(reader, column);

            int index = reader.GetOrdinal(column);

            return reader.GetDateTime(index);
        }

        private static bool? GetNullableBool(IDataReader reader, string column)
        {
            CheckValidReaderAndColumn(reader, column);

            int index = reader.GetOrdinal(column);

            return reader.IsDBNull(index) ? null : (bool?)reader.GetBoolean(index);
        }

        private static int? GetNullableInteger(IDataReader reader, string column)
        {
            CheckValidReaderAndColumn(reader, column);

            int index = reader.GetOrdinal(column);

            return reader.IsDBNull(index) ? null : (int?)reader.GetInt32(index);
        }

        private static decimal? GetNullableDecimal(IDataReader reader, string column)
        {
            CheckValidReaderAndColumn(reader, column);

            int index = reader.GetOrdinal(column);

            return reader.IsDBNull(index) ? null : (decimal?)reader.GetDecimal(index);
        }

        private static string GetNullableString(IDataReader reader, string column)
        {
            CheckValidReaderAndColumn(reader, column);

            int index = reader.GetOrdinal(column);

            if (reader[column] == DBNull.Value) return null;

            return reader.GetString(index);
        }

        private static DateTime? GetNullableDateTime(IDataReader reader, string column)
        {
            CheckValidReaderAndColumn(reader, column);

            int index = reader.GetOrdinal(column);

            if (reader[column] == DBNull.Value) return null;

            return reader.GetDateTime(index);
        }

        #endregion
    }
}
