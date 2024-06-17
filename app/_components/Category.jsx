import React from 'react';

const categories = [
  { icon: '/assets/img/tas.png', text: 'Tas' },
  { icon: '/assets/img/dress.png', text: 'Pakaian Wanita' },
  { icon: '/assets/img/T-shirt.png', text: 'Pakaian Pria' },
  { icon: '/assets/img/woman-shoe.png', text: 'Sepatu Wanita' },
  { icon: '/assets/img/man-shoe.png', text: 'Sepatu Pria' },
  { icon: '/assets/img/guitar.png', text: 'Hobi' },
  { icon: '/assets/img/spoonfork.png', text: 'Makanan dan Minuman' },
  { icon: '/assets/img/cook.png', text: 'Perlengkapan Rumah' },
  { icon: '/assets/img/laptop.png', text: 'Komputer dan Aksesoris' },
  { icon: '/assets/img/baby.png', text: 'Ibu dan Anak' },
  { icon: '/assets/img/lipstick.png', text: 'Perawatan dan Kecantikan' },
  { icon: '/assets/img/medicine.png', text: 'Kesehatan' },
];

const Category = () => {
  return (
    <div className="container mx-auto md:px-24 sm:px-1 py-8">
        <h1 className="mb-6 text-3xl font-semibold">Kategori</h1>
        <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-6">
        {categories.map((category, index) => {
          // Determine if the category is in the first row or the second row
          const isInFirstRow = index < 6;
          const isInSecondRow = index >= 6 && index < 12;
          const isFirstCategory = index === 0;
          const isLastCategoryInFirstRow = index === 5;
          const isFirstCategoryInFirstRow = index === 6;
          const isLastCategoryInLastRow =  index === 11;
          const second = index === 2;
          const third = index === 3;
          const eight= index === 8;
          const ninth = index === 9;

          return (
            <div
              key={index}
              className={`flex flex-col items-center justify-center p-8 border border-[#AFB1B6] hover:border-primary hover:border-2 
                ${isInFirstRow ? 'border-t-0' : ''} 
                ${isInSecondRow ? 'border-b-0' : ''} 
                ${isFirstCategory ? 'border-l-0' : ''} 
                ${isLastCategoryInFirstRow ? 'border-r-0' : ''}
                ${isFirstCategoryInFirstRow ? 'border-l-0' : ''} 
                ${isLastCategoryInLastRow ? 'border-r-0' : ''}
                ${second? 'border-r-0 md:border-r' : ''}
                ${third? 'border-l-0 md:border-l' : ''}
                ${eight? 'border-r-0 md:border-r' : ''}
                ${ninth? 'border-l-0 md:border-l' : ''}
              `}
            >
                <img src={category.icon} alt="" />
              <div className="mt-2 text-center">{category.text}</div>
            </div>
          );
        })}
           
        </div>
    </div>
  );
};

export default Category;
