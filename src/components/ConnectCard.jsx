import React from "react";

export default function ConnectCard({
  image,
  alt,
  title,
  defaultTitle,
  hoverTitle,
  description,
  onClick,
  buttonText = "Tham gia cùng E.C.O",
  defaultTitleClass = "text-xl lg:text-xl 2xl:text-3xl",
  hoverTitleClass = "text-xl lg:text-xl 2xl:text-3xl",
}) {
  const renderedDefaultTitle = title ?? defaultTitle;
  const renderedHoverTitle = title ?? hoverTitle ?? defaultTitle;
  return (
    <div className="relative rounded-[30px] overflow-hidden group cursor-pointer w-[330px] h-[330px] lg:w-[22vw] lg:h-[22vw] 2xl:w-[23.5vw] 2xl:h-[23.5vw]">
      <img
        src={image}
        alt={alt}
        className="w-[330px] h-[330px] lg:w-[22vw] lg:h-[22vw] 2xl:w-[23.5vw] 2xl:h-[23.5vw] object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-300">
        <h3 className={`${defaultTitleClass} font-krub text-center font-semibold text-white drop-shadow-lg`}>
          {renderedDefaultTitle}
        </h3>
      </div>
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="text-center text-white">
          <h3 className={`${hoverTitleClass} font-krub text-center font-semibold mb-2`}>
            {renderedHoverTitle}
          </h3>
          {description && (
            <p className="text-xs lg:text-xs xl:text-xs 2xl:text-md mb-4 text-gray-200">
              {description}
            </p>
          )}
          <button
            onClick={onClick}
            className="border-1 border-white rounded-[15px] px-7 py-2 text-white hover:bg-white/10 transition-colors cursor-pointer text-sm lg:text-sm 2xl:text-md"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}


