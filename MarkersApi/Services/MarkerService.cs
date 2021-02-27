using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Bson;
using MongoDB.Driver;

namespace MarkersApi.Services
{
    public class MarkerService : IMarkerService
    {
        public IEnumerable<Marker> GetAllMarkers()
        {
            var client =
                new MongoClient(
                    "mongodb+srv://abuzduga:EducatedReality@cluster0.htavf.mongodb.net/EducatedReality?retryWrites=true&w=majority");

            var database = client.GetDatabase("EducatedReality");
            var markerCollection = database.GetCollection<Marker>("ParkDesigns");

            var markers = markerCollection
                .Find(new BsonDocument())
                .ToListAsync()
                .Result;

            if (markers.Any())
            {
                return markers.Select(x => new Marker
                {
                    Id = x.Id,
                    Description = x.Description,
                    VideoUrl = x.VideoUrl,
                    Longitude = x.Longitude,
                    Latitude = x.Latitude
                });
            }

            return new List<Marker>();
        }

    }

    public interface IMarkerService
    {
        IEnumerable<Marker> GetAllMarkers();
    }
}