
namespace VidyaViewerAPI.Models.Settings
{
    public interface IAdoClientSettings
    {
        VidyaViewerAdoSettings VidyaViewerAdoSettings { get; set; }
    }

    public class AdoClientSettings : IAdoClientSettings
    {
        public VidyaViewerAdoSettings VidyaViewerAdoSettings { get; set; }
    }
}
