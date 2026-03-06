import Image from 'next/image';

interface ShoeCardProps {
  name: string;
  price: string;
  mainImage: string;
  hoverImage: string;
}

const Card = ({ name, price, mainImage, hoverImage }: ShoeCardProps) => {
  return (
    <div className="group h-[100%] relative w-full md:max-w-sm bg-white rounded-3xl p-3 md:p-4 transition-all duration-300 hover:shadow-2xl">
      <div className="relative h-[300px] md:h-80 w-full overflow-hidden rounded-2xl bg-gray-100">
        <Image
          src={mainImage}
          alt={name}
          fill
          className="object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        <Image
          src={hoverImage}
          alt={name}
          fill
          className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
      </div>

      <div className="mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0 px-1">
        <div className="flex flex-col">
          <h3 className="text-lg md:text-xl font-bold text-black uppercase tracking-tight leading-tight">
            {name}
          </h3>
          <p className="text-gray-500 font-medium text-sm md:text-base">
            {price}
          </p>
        </div>
        <button className="w-full sm:w-auto bg-black text-white px-5 py-2.5 rounded-full text-xs md:text-sm font-bold hover:bg-gray-800 transition-colors">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Card;
