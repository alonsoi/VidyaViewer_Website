
namespace VidyaViewerAPI.Models
{
    public class SinglePayload<T>
    {
        public T Item { get; set; }

        public int StatusCode { get; set; }

        public string Message { get; set; }
    }
}
