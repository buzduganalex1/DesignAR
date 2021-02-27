using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace MarkersApi
{
    public class Marker
    {
        [BsonId]
        public ObjectId Id { get; set; }

        [BsonElement("videoUrl")]
        public string VideoUrl { get; set; }

        [BsonElement("description")]
        public string Description { get; set; }

        [BsonElement("longitude")]
        public double Longitude { get; set; }

        [BsonElement("latitude")]
        public double Latitude { get; set; }
    }
}