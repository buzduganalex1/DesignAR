using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using MarkersApi.Services;

namespace MarkersApi.Controllers
{
    [ApiController]
    [Route("/")]
    public class MarkersController : ControllerBase
    {
        private readonly IMarkerService markerService;
        private readonly ILogger<MarkersController> logger;

        public MarkersController(
            IMarkerService markerService,
            ILogger<MarkersController> logger)
        {
            this.markerService = markerService;
            this.logger = logger;
        }

        /// <summary>
        /// Get all existing markers
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public IEnumerable<Marker> Get()
        {
            return this.markerService.GetAllMarkers();
        }

        [HttpGet("category/{category}")]
        public IEnumerable<Marker> GetByCategory(int category)
        {
            return this.markerService.GetMarkersByCategory(category);
        }
    }
}
