using System;
namespace VidyaViewerAPI.Models
{
    public interface IVendor
    {
        int Id { get; set; }

        string VendorName { get; set; }

        string Location { get; set; }

        string DetailDescription { get; set; }

        string ImagePath { get; set; }
    }

    public class Vendor : IVendor
    {
        public int Id { get; set; }

        public string VendorName { get; set; }

        public string Location { get; set; }

        public string DetailDescription { get; set; }

        public string ImagePath { get; set; }
    }
}
