using System.Collections.Generic;
using System.Linq;
using MongoDB.Bson;
using MongoDB.Driver;

namespace MarkersApi.Services
{
    public class MarkerService : IMarkerService
    {
        private readonly IMongoCollection<Marker> markerCollection;

        public MarkerService()
        {
            var client =
                new MongoClient(
                    "mongodb+srv://abuzduga:EducatedReality@cluster0.htavf.mongodb.net/EducatedReality?retryWrites=true&w=majority");

            var database = client.GetDatabase("EducatedReality");
            this.markerCollection = database.GetCollection<Marker>("ParkDesigns");
        }

        public IEnumerable<Marker> GetAllMarkers()
        {
            return this.markerCollection
                .Find(new BsonDocument())
                .ToListAsync()
                .Result;
        }

        public IEnumerable<Marker> GetMarkersByCategory(int category)
        {
            return this.markerCollection
                .Find(x => x.Category == category)
                .ToListAsync()
                .Result;
        }
    }
}