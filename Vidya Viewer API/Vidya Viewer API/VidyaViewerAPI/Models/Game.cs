using System;

namespace VidyaViewerAPI.Models
{
    public interface IGame
    {
        int Id { get; set; }

        string Title { get; set; }

        int RatingId { get; set; }

        DateTime ReleaseDate { get; set; }

        string DescriptionDetail { get; set; }

        string ImagePath { get; set; }
    }

    public class Game : IGame
    {
        public int Id { get; set; }
        
        public string Title { get; set; }
        
        public int RatingId { get; set; }

        public DateTime ReleaseDate { get; set; }

        public string DescriptionDetail { get; set; }

        public string ImagePath { get; set; }
    }
}
