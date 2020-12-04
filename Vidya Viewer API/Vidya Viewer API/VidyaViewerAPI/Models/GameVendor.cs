using System;
namespace VidyaViewerAPI.Models
{
    public interface IGameVendor
    {
        int Id { get; set; }

        int GameId { get; set; }

        int VendorId { get; set; }
    }

    public class GameVendor : IGameVendor
    {
        public int Id { get; set; }

        public int GameId { get; set; }

        public int VendorId { get; set; }
    }
}
