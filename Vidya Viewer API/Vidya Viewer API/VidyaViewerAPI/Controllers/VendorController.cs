using VidyaViewerAPI.Models;
using Microsoft.AspNetCore.Mvc;
using VidyaViewerAPI.Processors;

// Programmed by David Jones
// Purpose: To call for CRUD methods for Vendors

namespace VidyaViewerAPI.Controllers 
{
    [ApiController]
    [Route("api/vendor")]

    public class VendorController : Controller
    {
        private readonly IVendorProcessor _vendorProcessor;

        public VendorController(IVendorProcessor vendorProcessor)
        {
            _vendorProcessor = vendorProcessor;
        }

        [HttpPost]
        public IActionResult Insert([FromBody] Vendor vendor)
        {
            return Ok(new SinglePayload<IVendor>()
            {
                Item = _vendorProcessor.Insert(vendor),
                StatusCode = 200,
                Message = "SUCCESS"
            });
        }

        [HttpGet]
        [Route("list")]
        public IActionResult GetListItems()
        {
            return Ok(new MultiPayload<IVendor>()
            {
                Items = _vendorProcessor.GetListItems(),
                StatusCode = 200,
                Message = "SUCCESS"
            });
        }

        //[HttpGet]
        //[Route("ById/{id}")]
        //public IActionResult GetById(int id)
        //{
        //    return Ok(new SinglePayload<IVendor>()
        //    {
        //        Item = _vendorProcessor.GetById(id),
        //        StatusCode = 200,
        //        Message = "SUCCESS"
        //    });
        //}

        [HttpPut]
        public IActionResult Update(Vendor vendor)
        {
            return Ok(new SinglePayload<IVendor>()
            {
                Item = _vendorProcessor.Update(vendor),
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
                Item = _vendorProcessor.Delete(id),
                StatusCode = 200,
                Message = "SUCCESS"
            });
        }
    }
}
