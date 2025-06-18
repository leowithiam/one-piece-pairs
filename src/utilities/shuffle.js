export default function shuffle() {
    const wantedPosters = [
        { image: '/images/wanted-posters/luffy-wanted-poster.jpg' },
        { image: '/images/wanted-posters/zoro-wanted-poster.jpg' },
        { image: '/images/wanted-posters/nami-wanted-poster.jpg' },
        { image: '/images/wanted-posters/usopp-wanted-poster.jpg' },
        { image: '/images/wanted-posters/sanji-wanted-poster.jpg' },
        { image: '/images/wanted-posters/chopper-wanted-poster.jpg' },
        { image: '/images/wanted-posters/robin-wanted-poster.jpg' },
        { image: '/images/wanted-posters/jinbe-wanted-poster.jpg' },
    ];

    return [...wantedPosters, ...wantedPosters]
        .sort(() => Math.random() - 0.5)
        .map(card => ({ ...card, id: Math.random() }));
}