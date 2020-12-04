using System;
namespace VidyaViewerAPI.Models
{
    public interface IDeveloper
    {
        int Id { get; set; }

        string FullName { get; set; }

        string Location { get; set; }

        string DescriptionDetail { get; set; }

        string ImagePath { get; set; }
    }

    public class Developer : IDeveloper
    {
        public int Id { get; set; }

        public string FullName { get; set; }

        public string Location { get; set; }

        public string DescriptionDetail { get; set; }

        public string ImagePath { get; set; }
    }
}
