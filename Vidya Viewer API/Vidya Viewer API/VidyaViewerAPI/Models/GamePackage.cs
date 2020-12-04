using System;
using System.Collections.Generic;

namespace VidyaViewerAPI.Models
{
    public interface IGamePackage
    {
        IGame Game { get; set; }

        IEnumerable<IVendor> Vendors { get; set; }

        IEnumerable<IDeveloper> Developers { get; set; }

        IEnumerable<IGenre> Genres { get; set; }

        IRating Rating { get; set; }
    }

    public class GamePackage : IGamePackage
    {
        public IGame Game { get; set; }

        public IEnumerable<IVendor> Vendors { get; set; }

        public IEnumerable<IDeveloper> Developers { get; set; }

        public IEnumerable<IGenre> Genres { get; set; }

        public IRating Rating { get; set; }
    }
}
