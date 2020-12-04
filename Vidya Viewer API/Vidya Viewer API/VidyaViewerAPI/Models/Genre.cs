using System;
namespace VidyaViewerAPI.Models
{
    public interface IGenre
    {
        int Id { get; set; }

        string GenreName { get; set; }

        string DescriptionDetail { get; set; }
    }

    public class Genre : IGenre
    {
        public int Id { get; set; }

        public string GenreName { get; set; }

        public string DescriptionDetail { get; set; }
    }
}
