import React from 'react';
import CardEskul from './CardEskul';

const dataEskul = [
  {
    id: 'pramuka',
    img: 'https://smpn21kotabekasi.sch.id/assets/images/blogs/pramuka22.jpg',
    title: 'Pramuka',
    desc: 'Melatih kedisiplinan, tanggung jawab, dan kerja sama dalam tim.',
    wa: '6281234567890',
  },
  {
    id: 'paskibra',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTszpPdPpPv7Sh5Z7s2YkM30P-MuqAbqvq5OA&s',
    title: 'Paskibra',
    desc: 'Kekompakan dan keterampilan baris-berbaris.',
    wa: '6281234567890',
  },
  {
    id: 'pmr',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6GXtu3SqxknLyLBpi2jj7HBvpqbKB_M0-9g&s',
    title: 'PMR',
    desc: 'Belajar pertolongan pertama dan kegiatan sosial.',
    wa: '6281234567890',
  },
  {
    id: 'futsal',
    img: '/images/futsal.jpg',
    title: 'Futsal',
    desc: 'Mengembangkan skill olahraga dan strategi tim.',
    wa: '6281234567890',
  },
  {
    id: 'basket',
    img: '/images/basket.jpg',
    title: 'Basket',
    desc: 'Melatih kekuatan fisik dan strategi permainan.',
    wa: '6281234567890',
  },
  {
    id: 'it',
    img: '/images/it.jpg',
    title: 'IT Club',
    desc: 'Eksplorasi teknologi dan pemrograman.',
    wa: '6281234567890',
  },
  {
    id: 'teater',
    img: '/images/teater.jpg',
    title: 'Teater',
    desc: 'Menyalurkan bakat seni peran dan drama.',
    wa: '6281234567890',
  },
  {
    id: 'musik',
    img: '/images/musik.jpg',
    title: 'Musik',
    desc: 'Belajar alat musik dan tampil di event sekolah.',
    wa: '6281234567890',
  },
];

// Fungsi untuk membagi array jadi per 4 item
const chunkArray = (arr, size) => {
  const chunked = [];
  for (let i = 0; i < arr.length; i += size) {
    chunked.push(arr.slice(i, i + size));
  }
  return chunked;
};

const EskulSection = () => {
  const groupedEskul = chunkArray(dataEskul, 4); // 4 card per halaman (2x2)

  return (
    
    <div className="w-screen overflow-x-auto scroll-smooth snap-x snap-mandatory flex">
      {groupedEskul.map((group, i) => (
        <div
          key={i}
          className="min-w-full snap-start grid grid-cols-1 md:grid-cols-2 gap-6 p-6"
          style={{ height: '100vh' }}
        >
          {group.map((eskul) => (
            <CardEskul key={eskul.id} {...eskul} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default EskulSection;
