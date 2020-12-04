
namespace VidyaViewerAPI.Models.Settings
{
    public interface IVidyaViewerAdoSettings
    {
        string ConnectionString { get; set; }
    }

    public class VidyaViewerAdoSettings : IVidyaViewerAdoSettings
    {
        public string ConnectionString { get; set; }
    }
}
