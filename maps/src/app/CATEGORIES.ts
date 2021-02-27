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
        color: '#2a6e40'
    },
    {
        id: 2,
        icon: {
            url: '/assets/02-mobility.png',
            scaledSize: {height: 40, width: 40}
          },
        description: 'Mobility',
        color: '#26769e'
    },
    {
        id: 3,
        icon: {
            url: '/assets/03-publicSafety.png',
            scaledSize: {height: 40, width: 40}
          },
        description: 'Public safety',
        color: '#d1d124'
    },
    {
        id: 4,
        icon: {
            url: '/assets/04-culture.png',
            scaledSize: {height: 40, width: 40}
          },
        description: 'Culture',
        color: '#e64e4e'
    },
    {
        id: 5,
        icon: {
            url: '/assets/05-health.png',
            scaledSize: {height: 40, width: 40}
          },
        description: 'Health',
        color: '#ed0505'
    },
    {
        id: 6,
        icon: {
            url: '/assets/06-education.png',
            scaledSize: {height: 40, width: 40}
          },
        description: 'Education',
        color: '#119c97'
    }
]