using VidyaViewerAPI.Models;
using Microsoft.AspNetCore.Mvc;
using VidyaViewerAPI.Processors;

// Programmed by David Jones
// Purpose: To call for CRUD methods for Developers

namespace VidyaViewerAPI.Controllers
{
    [ApiController]
    [Route("api/developer")]

    public class DeveloperController : Controller
    {
        private readonly IDeveloperProcessor _developerProcessor;

        public DeveloperController(IDeveloperProcessor developerProcessor)
        {
            _developerProcessor = developerProcessor;
        }

        [HttpPost]
        public IActionResult Insert([FromBody] Developer developer)
        {
            return Ok(new SinglePayload<IDeveloper>()
            {
                Item = _developerProcessor.Insert(developer),
                StatusCode = 200,
                Message = "SUCCESS"
            });
        }

        [HttpGet]
        [Route("list")]
        public IActionResult GetListItems()
        {
            return Ok(new MultiPayload<IDeveloper>()
            {
                Items = _developerProcessor.GetListItems(),
                StatusCode = 200,
                Message = "SUCCESS"
            });
        }

        [HttpGet]
        [Route("details/{id}")]
        public IActionResult GetDeveloperDetails(int id)
        {
            return Ok(new SinglePayload<IDeveloper>()
            {
                Item = _developerProcessor.GetById(id),
                StatusCode = 200,
                Message = "SUCCESS"
            });
        }

        [HttpPut]
        public IActionResult Update(Developer developer)
        {
            return Ok(new SinglePayload<IDeveloper>()
            {
                Item = _developerProcessor.Update(developer),
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
                Item = _developerProcessor.Delete(id),
                StatusCode = 200,
                Message = "SUCCESS"
            });
        }
    }
}