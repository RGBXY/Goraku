import { getAnimeResponse } from "@/app/libs/api-libs";
import Image from "next/image";

const Page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);

  return (
    <div className="md:mx-24 mx-14 flex pt-20 text-color-primary flex-wrap md:justify-between justify-center">
      <div className="min-w-60 bg-color-accent">
        <Image src={anime.data.images.webp.image_url} width={300} height={300} alt="..." className="w-full h-min-60" />
      </div>
      <div className="md:w-[75%]">
        <h3 className="text-3xl">{anime.data.title}</h3>

        <p>{anime.data.synopsis}</p>
      </div>
    </div>
  );
};

export default Page;
