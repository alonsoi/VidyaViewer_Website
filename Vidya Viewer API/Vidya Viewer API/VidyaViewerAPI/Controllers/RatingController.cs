using VidyaViewerAPI.Models;
using Microsoft.AspNetCore.Mvc;
using VidyaViewerAPI.Processors;

// Programmed by David Jones
// Purpose: To call for CRUD methods for Ratings

namespace VidyaViewerAPI.Controllers
{
    [ApiController]
    [Route("api/rating")]

    public class RatingController: Controller
    {
        private readonly IRatingProcessor _ratingProcessor;

        public RatingController(IRatingProcessor ratingProcessor)
        {
            _ratingProcessor = ratingProcessor;
        }

        [HttpPost]
        public IActionResult Insert([FromBody] Rating rating)
        {
            return Ok(new SinglePayload<IRating>()
            {
                Item = _ratingProcessor.Insert(rating),
                StatusCode = 200,
                Message = "SUCCESS"
            });
        }

        [HttpGet]
        [Route("list")]
        public IActionResult GetListItems()
        {
            return Ok(new MultiPayload<IRating>()
            {
                Items = _ratingProcessor.GetListItems(),
                StatusCode = 200,
                Message = "SUCCESS"
            });
        }

        [HttpGet]
        [Route("details/{id}")]
        public IActionResult GetById(int id)
        {
            return Ok(new SinglePayload<IRating>()
            {
                Item = _ratingProcessor.GetById(id),
                StatusCode = 200,
                Message = "SUCCESS"
            });
        }

        [HttpPut]
        public IActionResult Update(Rating rating)
        {
            return Ok(new SinglePayload<IRating>()
            {
                Item = _ratingProcessor.Update(rating),
                StatusCode = 200,
                Message = "SUCCESS"
            });
        }

        [HttpDelete]
        [Route("{id}")]
        public IActionResult Delete(int id)
        {
            return Ok(new SinglePayload<string>()
            {
                Item = _ratingProcessor.Delete(id),
                StatusCode = 200,
                Message = "SUCCESS"
            });
        }
    }
}
