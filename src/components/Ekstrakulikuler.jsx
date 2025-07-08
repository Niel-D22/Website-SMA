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
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfuZCHxwNWfZAtQ5MNHrl4T4fOxNO3IPYmvw&s',
    title: 'Futsal',
    desc: 'Mengembangkan skill olahraga dan strategi tim.',
    wa: '6281234567890',
  },
  {
    id: 'basket',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZBGV_j7gO-T4sPkBuAzd6RMZfqVLOmUEeYQ&s',
    title: 'Basket',
    desc: 'Melatih kekuatan fisik dan strategi permainan.',
    wa: '6281234567890',
  },
  {
    id: 'it',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFdh01LgPuo5heyaXDxMNXZQ467P5Z8_I3uw&s',
    title: 'IT Club',
    desc: 'Eksplorasi teknologi dan pemrograman.',
    wa: '6281234567890',
  },
  {
    id: 'teater',
    img: 'https://rencanamu.id/assets/file_uploaded/blog/1544678225-theatre-8e.jpg',
    title: 'Teater',
    desc: 'Menyalurkan bakat seni peran dan drama.',
    wa: '6281234567890',
  },
  {
    id: 'musik',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWSAjbL-aE_kMq1DB4lDUeEm8g5I5V5GhQMQ&s',
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
    <div className='  bg-gray-100 '> <div data-aos="fade" data-aos-delay="500" className='space-y-1 pt-10 px-20'><h1 className='text-center uppercase font-bold text-4xl text-blue-900'>Ekstrakulikuler</h1>
    <p className='text-center'> Ekstrakurikuler adalah wadah untuk mengembangkan minat, bakat, dan kepribadian siswa di luar kelas.
Dari Pramuka hingga IT Club, setiap kegiatan dirancang untuk membentuk siswa yang aktif, kreatif, dan berprestasi.
Pilih ekskul favoritmu dan kembangkan potensimu!</p>
</div>
    <div className="w-screen  overflow-x-auto scroll-smooth snap-x snap-mandatory flex   ">
      
      {groupedEskul.map((group, i) => (
        <div
          key={i}
          className="min-w-full snap-start grid grid-cols-1 md:grid-cols-2  justify-items-center items-center px-10 py-11 "
          style={{ height: '80vh' }}
        >
            
          {group.map((eskul) => (
            <CardEskul key={eskul.id} {...eskul} />
          ))}
        </div>
      ))}
    </div>
    </div>
  );
};

export default EskulSection;
