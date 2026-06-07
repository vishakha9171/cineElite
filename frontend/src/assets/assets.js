import logo from './logo.svg'
import marvelLogo from './marvelLogo.svg'
import googlePlay from './googlePlay.svg'
import appStore from './appStore.svg'
import screenImage from './screenImage.svg'
import profile from './profile.png'

export const assets= {
    logo,
    marvelLogo,
    googlePlay,
    appStore,
    screenImage,
    profile
}

export const dummyTrailers = [
    {
        image: "https://img.youtube.com/vi/kOtI6vV3j-8/maxresdefault.jpg",
        videoUrl: "https://www.youtube.com/watch?v=kOtI6vV3j-8"
    },
    {
        image: "https://img.youtube.com/vi/FEa9pPqGhPY/maxresdefault.jpg",
        videoUrl: "https://www.youtube.com/watch?v=FEa9pPqGhPY"
    },
    {
        image: "https://img.youtube.com/vi/_xcmymTBOR8/maxresdefault.jpg",
        videoUrl: "https://www.youtube.com/watch?v=_xcmymTBOR8"
    },
    {
        image: "https://img.youtube.com/vi/voBxLJ6t2mk/maxresdefault.jpg",
        videoUrl: "https://www.youtube.com/watch?v=voBxLJ6t2mk"
    }
];

const dummyCastsData = [
    { "name": "Anthony Mackie", "profile_path": "https://image.tmdb.org/t/p/original/eOT6EPlYvH1Wshw9p060B6wIPhM.jpg" },
    { "name": "Harrison Ford", "profile_path": "https://image.tmdb.org/t/p/original/5gSAdUv6pI28g98wY78wIPhvPHC.jpg" },
    { "name": "Florence Pugh", "profile_path": "https://image.tmdb.org/t/p/original/7gSAdUv6pI28g98wY78wIPhvPHN.jpg" },
    { "name": "Sebastian Stan", "profile_path": "https://image.tmdb.org/t/p/original/n2u9PPHGvWp0W6wY78WIP0Mv9B.jpg" },
    { "name": "David Harbour", "profile_path": "https://image.tmdb.org/t/p/original/80u9kPHGvWp0W6wY78WIP0Mv9A.jpg" },
    { "name": "Tom Cruise", "profile_path": "https://image.tmdb.org/t/p/original/gsci60Wp3CqR66Ph66Dq9m0I3A.jpg" },
    { "name": "Simon Pegg", "profile_path": "https://image.tmdb.org/t/p/original/6Yv6f67O8wA3Jk99XhMPhvPHD.jpg" },
    { "name": "Maia Kealoha", "profile_path": "https://image.tmdb.org/t/p/original/9gSAdUv6pI28g98wY78wIPhvPHD.jpg" },
    { "name": "Pedro Pascal", "profile_path": "https://image.tmdb.org/t/p/original/dY98vCHmPh4aa49gaYeg86w6I3t.jpg" }
]

export const dummyShowsData = [
    {
        "_id": "822119",
        "id": 822119,
        "title": "Captain America: Brave New World",
        "overview": "Sam Wilson, who officially assumed the mantle of Captain America, finds himself in the middle of an international incident after meeting with newly elected U.S. President Thaddeus Ross.",
        "poster_path": "https://image.tmdb.org/t/p/original/7s9p8u7zBwFecX8lhAsxmDgy3M3.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original/icFWIk1KfkWLZnugZAJEDauNZ94.jpg",
        "genres": [
            { "id": 28, "name": "Action" },
            { "id": 878, "name": "Science Fiction" },
            { "id": 12, "name": "Adventure" }
        ],
        "casts": dummyCastsData,
        "release_date": "2025-02-14",
        "original_language": "en",
        "tagline": "A brave new world begins.",
        "vote_average": 7.2,
        "vote_count": 14200,
        "runtime": 118,
    },
    {
        "_id": "986056",
        "id": 986056,
        "title": "Thunderbolts*",
        "overview": "An irreverent team-up featuring the assassin Yelena Belova alongside a group of the Marvel Cinematic Universe's least anticipated anti-heroes.",
        "poster_path": "https://image.tmdb.org/t/p/original/m9EtP1Yrzv6v7dMaC9mRaGhd1um.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original/rthMuZfFv4fqEU4JVbgSW9wQ8rs.jpg",
        "genres": [
            { "id": 28, "name": "Action" },
            { "id": 12, "name": "Adventure" },
            { "id": 878, "name": "Science Fiction" }
        ],
        "casts": dummyCastsData,
        "release_date": "2025-05-02",
        "original_language": "en",
        "tagline": "Careful who you assemble.",
        "vote_average": 7.5,
        "vote_count": 9850,
        "runtime": 134,
    },
    {
        "_id": "618763",
        "id": 618763,
        "title": "Mission: Impossible - The Final Reckoning",
        "overview": "Our lives are the sum of our choices. Ethan Hunt and his IMF team embark on their most dangerous mission yet to track down a terrifying weapon threatening humanity.",
        "poster_path": "https://image.tmdb.org/t/p/original/z53D72EAOxGRqdr7KXXWp9dJiDe.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original/1p5aI299YBnqrEEvVGJERk2MXXb.jpg",
        "genres": [
            { "id": 28, "name": "Action" },
            { "id": 12, "name": "Adventure" },
            { "id": 53, "name": "Thriller" }
        ],
        "casts": dummyCastsData,
        "release_date": "2025-05-23",
        "original_language": "en",
        "tagline": "The final countdown begins.",
        "vote_average": 7.8,
        "vote_count": 8420,
        "runtime": 142,
    },
    {
        "_id": "552524",
        "id": 552524,
        "title": "Lilo & Stitch",
        "overview": "A live-action adaptation of Disney's classic animated film following a lonely Hawaiian girl and the galaxy's most wanted extraterrestrial fugitive.",
        "poster_path": "https://image.tmdb.org/t/p/original/mKKqV23MQ0uakJS8OCE2TfV5jNS.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original/7Zx3wDG5bBtcfk8lcnCWDOLM4Y4.jpg",
        "genres": [
            { "id": 10751, "name": "Family" },
            { "id": 35, "name": "Comedy" },
            { "id": 14, "name": "Fantasy" }
        ],
        "casts": dummyCastsData,
        "release_date": "2025-05-23",
        "original_language": "en",
        "tagline": "Family means nobody gets left behind.",
        "vote_average": 6.9,
        "vote_count": 4500,
        "runtime": 112,
    }
]

export const dummyDateTimeData = {
    "2026-06-01": [
        { "time": "2026-06-01T10:00:00.000Z", "showId": "68395b407f6329be2bb45bd1" },
        { "time": "2026-06-01T13:30:00.000Z", "showId": "68395b407f6329be2bb45bd2" },
        { "time": "2026-06-01T18:00:00.000Z", "showId": "68395b407f6329be2bb45bd3" }
    ],
    "2026-06-02": [
        { "time": "2026-06-02T11:00:00.000Z", "showId": "68395b407f6329be2bb45bd4" },
        { "time": "2026-06-02T14:45:00.000Z", "showId": "68395b407f6329be2bb45bd5" },
        { "time": "2026-06-02T20:30:00.000Z", "showId": "68395b407f6329be2bb45bd6" }
    ],
    "2026-06-03": [
        { "time": "2026-06-03T10:00:00.000Z", "showId": "68395b407f6329be2bb45bd7" },
        { "time": "2026-06-03T15:00:00.000Z", "showId": "68395b407f6329be2bb45bd8" },
        { "time": "2026-06-03T19:15:00.000Z", "showId": "68395b407f6329be2bb45bd9" }
    ]
}

export const dummyDashboardData = {
    "totalBookings": 42,
    "totalRevenue": 4580,
    "totalUser": 18,
    "activeShows": [
        {
            "_id": "68352363e96d99513e4221a4",
            "movie": dummyShowsData[0],
            "showDateTime": "2026-06-01T13:30:00.000Z",
            "showPrice": 120,
            "occupiedSeats": {
                "A1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "B1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "C1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok"
            },
        },
        {
            "_id": "6835238fe96d99513e4221a8",
            "movie": dummyShowsData[1],
            "showDateTime": "2026-06-01T18:00:00.000Z",
            "showPrice": 150,
            "occupiedSeats": {},
        },
        {
            "_id": "6835238fe96d99513e4221a9",
            "movie": dummyShowsData[2],
            "showDateTime": "2026-06-02T14:45:00.000Z",
            "showPrice": 180,
            "occupiedSeats": {},
        },
        {
            "_id": "6835238fe96d99513e4221aa",
            "movie": dummyShowsData[3],
            "showDateTime": "2026-06-02T20:30:00.000Z",
            "showPrice": 140,
            "occupiedSeats": {
                "A1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A2": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A3": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A4": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok"
            },
        }
    ]
}

export const dummyBookingData = [
    {
        "_id": "68396334fb83252d82e17295",
        "user": { "name": "GreatStack" },
        "show": {
            _id: "68352363e96d99513e4221a4",
            movie: dummyShowsData[0],
            showDateTime: "2026-06-01T13:30:00.000Z",
            showPrice: 120,
        },
        "amount": 240,
        "bookedSeats": ["D1", "D2"],
        "isPaid": false,
    },
    {
        "_id": "68396334fb83252d82e17296",
        "user": { "name": "GreatStack" },
        "show": {
            _id: "68352363e96d99513e4221a4",
            movie: dummyShowsData[0],
            showDateTime: "2026-06-01T13:30:00.000Z",
            showPrice: 120,
        },
        "amount": 120,
        "bookedSeats": ["A1"],
        "isPaid": true,
    },
    {
        "_id": "68396334fb83252d82e17297",
        "user": { "name": "GreatStack" },
        "show": {
            _id: "68352363e96d99513e4221a4",
            movie: dummyShowsData[2],
            showDateTime: "2026-06-02T14:45:00.000Z",
            showPrice: 180,
        },
        "amount": 540,
        "bookedSeats": ["A1", "A2", "A3"],
        "isPaid": true,
    }
]