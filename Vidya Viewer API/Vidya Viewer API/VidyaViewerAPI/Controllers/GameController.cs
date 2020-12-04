using VidyaViewerAPI.Models;
using Microsoft.AspNetCore.Mvc;
using VidyaViewerAPI.Processors;

// Programmed by David Jones
// Purpose: To call for CRUD methods for Games

namespace VidyaViewerAPI.Controllers
{
    [ApiController]
    [Route("api/game")]

    public class GameController : Controller
    {
        private readonly IGameProcessor _gameProcessor;

        public GameController(IGameProcessor gameProcessor)
        {
            _gameProcessor = gameProcessor;
        }

        [HttpPost]
        public IActionResult Insert([FromBody] Game game)
        {
            return Ok(new SinglePayload<IGame>()
            {
                Item = _gameProcessor.Insert(game),
                StatusCode = 200,
                Message = "SUCCESS"
            });
        }

        [HttpGet]
        [Route("list")]
        public IActionResult GetListItems()
        {
            return Ok(new MultiPayload<IGame>()
            {
                Items = _gameProcessor.GetListItems(),
                StatusCode = 200,
                Message = "SUCCESS"
            });
        }

        [HttpGet]
        [Route("details/{id}")]
        public IActionResult GetGameDetails(int id)
        {
            return Ok(new SinglePayload<IGamePackage>()
            {
                Item = _gameProcessor.GetGameDetails(id),
                StatusCode = 200,
                Message = "SUCCESS"
            });
        }

        [HttpPut]
        public IActionResult Update(Game game)
        {
            return Ok(new SinglePayload<IGame>()
            {
                Item = _gameProcessor.Update(game),
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
                Item = _gameProcessor.Delete(id),
                StatusCode = 200,
                Message = "SUCCESS"
            });
        }
    }
}
