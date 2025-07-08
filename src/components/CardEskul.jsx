import React from 'react';

const CardEskul = ({ id, img, title, desc, wa }) => {
  return (

<div data-aos="fade-up" data-aos-delay="700"
  id={id}
  className="bg-white rounded-xl shadow-md flex flex-col md:flex-row overflow-hidden
   w-full h-[220px] max-w-[670px] border border-gray-100
   transform transition duration-300 hover:scale-105"
>

      <img
        src={img}
        alt={title}
        className="w-full h-full md:w-1/3  object-cover"
      />
      <div className="p-6 flex flex-col justify-between md:w-2/3">
        <div>
          <h3 className="text-2xl font-bold text-blue-800 mb-2">{title}</h3>
          <p className="text-gray-700">{desc}</p>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <a
            href={`https://wa.me/${wa}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded text-sm"
          >
            Hubungi Pembina
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardEskul;
