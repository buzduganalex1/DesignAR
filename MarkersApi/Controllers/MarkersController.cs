using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Bson;
using MongoDB.Driver;
using System.Linq;
using MarkersApi.Services;

namespace MarkersApi.Controllers
{
    [ApiController]
    [Route("/")]
    public class MarkersController : ControllerBase
    {
        private readonly IMarkerService markerService;
        private readonly ILogger<MarkersController> _logger;

        public MarkersController(
            IMarkerService markerService,
            ILogger<MarkersController> logger)
        {
            this.markerService = markerService;
            _logger = logger;
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
    }
}
