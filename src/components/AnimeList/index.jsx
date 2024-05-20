import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api }) => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4 md:mx-20">
      {api.data?.map((anime, index) => {
        return (
          <Link href={`/anime/${anime.mal_id}`} className="cursor-pointer text-color-primary hover:text-color-accent transition-all" key={index}>
            <Image src={anime.images.webp.image_url} alt="..." width={600} height={600} loading="eager" priority={true} className="w-full max-h-80" />
            <h3 className="font-bold md:text-xl text-md pt-2 pb-3">{anime.title}</h3>
          </Link>
        );
      })}
    </div>
  );
};

export default AnimeList;
