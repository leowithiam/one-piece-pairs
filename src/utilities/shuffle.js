export default function shuffle() {
  const wantedPosters = [
    { image: "/images/wanted-posters/luffy-wanted-poster.jpg" },
    { image: "/images/wanted-posters/zoro-wanted-poster.jpg" },
    { image: "/images/wanted-posters/nami-wanted-poster.jpg" },
    { image: "/images/wanted-posters/usopp-wanted-poster.jpg" },
    { image: "/images/wanted-posters/sanji-wanted-poster.jpg" },
    { image: "/images/wanted-posters/chopper-wanted-poster.jpg" },
    { image: "/images/wanted-posters/robin-wanted-poster.jpg" },
    { image: "/images/wanted-posters/jinbe-wanted-poster.jpg" },
    { image: "/images/wanted-posters/kuma-wanted-poster.jpg" },
    { image: "/images/wanted-posters/brook-wanted-poster.jpg" },
    { image: "/images/wanted-posters/crocodile-wanted-poster.jpg" },
    { image: "/images/wanted-posters/moria-wanted-poster.jpg" },
    { image: "/images/wanted-posters/hancock-wanted-poster.jpg" },
    { image: "/images/wanted-posters/franky-wanted-poster.jpg" },
    { image: "/images/wanted-posters/doflamingo-wanted-poster.jpg" },
    { image: "/images/wanted-posters/mihawk-wanted-poster.jpg" },
    { image: "/images/wanted-posters/ace-wanted-poster.jpg" },
    { image: "/images/wanted-posters/gaban-wanted-poster.jpg" },
    { image: "/images/wanted-posters/gol-d-roger-wanted-poster.jpg" },
    { image: "/images/wanted-posters/marco-wanted-poster.jpg" },
    { image: "/images/wanted-posters/law-wanted-poster.jpg" },
    { image: "/images/wanted-posters/jozu-wanted-poster.jpg" },
    { image: "/images/wanted-posters/rayleigh-wanted-poster.jpg" },
    { image: "/images/wanted-posters/weevil-wanted-poster.jpg" },
    { image: "/images/wanted-posters/whitebeard-wanted-poster.jpg" },
  ];

  const filteredWantedPosters = wantedPosters
    .sort(() => Math.random() - 0.5)
    .slice(0, 8);

  return [...filteredWantedPosters, ...filteredWantedPosters]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random() }));
}
