using System;
using System.Collections.Generic;

namespace VidyaViewerAPI.Models
{
    public interface IGenrePackage
    {
        IGenre Genre { get; set; }

        IEnumerable<Game> Games { get; set; }
    }

    public class GenrePackage : IGenrePackage
    {
        public IGenre Genre { get; set; }

        public IEnumerable<Game> Games { get; set; }
    }
}
