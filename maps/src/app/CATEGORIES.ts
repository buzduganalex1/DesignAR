import { Category } from "./category";

export const CATEGORIES: Category[] = [
    {
        id: 0,
        icon: {
            url: '/assets/00.png',
            scaledSize: {height: 40, width: 40}
        },
        description: 'Not defined',
        color: '#3a403c'
    },
    {
        id: 1,
        icon: {
            url: '/assets/01-publicSpaces.png',
            scaledSize: {height: 40, width: 40}
          },
        description: 'Public space',
        color: '#30A415'
    },
    {
        id: 2,
        icon: {
            url: '/assets/02-mobility.png',
            scaledSize: {height: 40, width: 40}
          },
        description: 'Mobility',
        color: '#3674B0'
    },
    {
        id: 3,
        icon: {
            url: '/assets/03-publicSafety.png',
            scaledSize: {height: 40, width: 40}
          },
        description: 'Public safety',
        color: '#D1BC1D'
    },
    {
        id: 4,
        icon: {
            url: '/assets/04-culture.png',
            scaledSize: {height: 40, width: 40}
          },
        description: 'Culture',
        color: '#E64E4E'
    },
    {
        id: 5,
        icon: {
            url: '/assets/05-health.png',
            scaledSize: {height: 40, width: 40}
          },
        description: 'Health',
        color: '#AD0909'
    },
    {
        id: 6,
        icon: {
            url: '/assets/06-education.png',
            scaledSize: {height: 40, width: 40}
          },
        description: 'Education',
        color: '#14C8C1'
    }
]