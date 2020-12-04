using System.Collections.Generic;

namespace VidyaViewerAPI.Models
{
    public class MultiPayload<T>
    {
        public IEnumerable<T> Items { get; set; }

        public int StatusCode { get; set; }

        public string Message { get; set; }
    }
}
