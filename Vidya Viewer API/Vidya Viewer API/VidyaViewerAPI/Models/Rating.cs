using System;
namespace VidyaViewerAPI.Models
{
    public interface IRating
    {
        int Id { get; set; }

        string Esrb { get; set; }

        string ImagePath { get; set; }
    }

    public class Rating : IRating
    {
        public int Id { get; set; }

        public string Esrb { get; set; }

        public string ImagePath { get; set; }
    }
}
