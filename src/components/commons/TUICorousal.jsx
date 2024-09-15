import React, { useEffect, useRef } from "react";

export default function TUICarousel({ items }) {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    // Clone the items to create a seamless loop
    const clonedItems = carousel.innerHTML;
    carousel.innerHTML += clonedItems;

    // Set the animation duration based on the number of items
    const animationDuration = items.length * 5; // 5 seconds per item
    carousel.style.animationDuration = `${animationDuration}s`;
  }, [items]);

  return (
    <div className="w-full overflow-hidden bg-base-200 p-4">
      <div
        ref={carouselRef}
        className="flex animate-carousel"
        style={{
          width: `${items.length * 200}px`, // Adjust based on your card width
        }}
      >
        {items?.map((item, index) => (
          <div key={index} className="w-48 flex-shrink-0 mx-2">
            <div className="card bg-base-100 shadow-xl">
              <figure className="px-4 pt-4">
                <img
                  src={item?.image}
                  alt={item?.title}
                  className="rounded-xl object-contain h-24 w-auto"
                />
              </figure>
              <div className="card-body items-center text-center p-4">
                <h2 className="card-title text-sm">{item?.title}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
