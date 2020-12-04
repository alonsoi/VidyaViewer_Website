using VidyaViewerAPI.Models;
using Microsoft.AspNetCore.Mvc;
using VidyaViewerAPI.Processors;

// Programmed by David Jones
// Purpose: To call for CRUD methods for Genres

namespace VidyaViewerAPI.Controllers
{
    [ApiController]
    [Route("api/genre")]

    public class GenreController : Controller
    {
        private readonly IGenreProcessor _genreProcessor;

        public GenreController(IGenreProcessor genreProcessor)
        {
            _genreProcessor = genreProcessor;
        }

        [HttpPost]
        public IActionResult Insert([FromBody] Genre genre)
        {
            return Ok(new SinglePayload<IGenre>()
            {
                Item = _genreProcessor.Insert(genre),
                StatusCode = 200,
                Message = "SUCCESS"
            });
        }

        [HttpGet]
        [Route("list")]
        public IActionResult GetListItems()
        {
            return Ok(new MultiPayload<IGenre>()
            {
                Items = _genreProcessor.GetListItems(),
                StatusCode = 200,
                Message = "SUCCESS"
            });
        }

        [HttpGet]
        [Route("details/{id}")]
        public IActionResult GetGenreDetails(int id)
        {
            return Ok(new SinglePayload<IGenre>()
            {
                Item = _genreProcessor.GetById(id),
                StatusCode = 200,
                Message = "SUCCESS"
            });
        }

        [HttpPut]
        public IActionResult Update(Genre genre)
        {
            return Ok(new SinglePayload<IGenre>()
            {
                Item = _genreProcessor.Update(genre),
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
                Item = _genreProcessor.Delete(id),
                StatusCode = 200,
                Message = "SUCCESS"
            });
        }
    }
}
