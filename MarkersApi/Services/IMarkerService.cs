﻿using System.Collections.Generic;

namespace MarkersApi.Services
{
    public interface IMarkerService
    {
        IEnumerable<Marker> GetAllMarkers();
        IEnumerable<Marker> GetMarkersByCategory(int category);
    }
}