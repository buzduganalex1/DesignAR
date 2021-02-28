import { Category } from "./category";

export interface Marker{
    //id: string;
    latitude: Number;
    longitude: Number;
    description: string;
    videoUrl: string;
    timestamp: string;
    category: Number;
    thumbnail: string;
    markerIcon: Category;
    title: string;
}