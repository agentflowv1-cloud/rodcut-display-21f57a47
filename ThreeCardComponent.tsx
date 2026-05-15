import React from 'react';
import './ThreeCardComponent.css';

interface CardItem {
  title: string;
  description: string;
  icon: string;
}

interface ThreeCardComponentProps {
  cardItems: CardItem[];
}

const ThreeCardComponent: React.FC<ThreeCardComponentProps> = ({ cardItems }) => {
  return (
    <div className='flex flex-wrap justify-center lg:justify-start lg:flex-nowrap lg:space-x-8 md:space-y-8 lg:space-y-0'>
      {cardItems.map((cardItem, index) => (
        <div key={index} className='w-full lg:w-1/3 md:mb-8 lg:mb-0'>
          <div className='bg-white rounded shadow-md p-8 lg:p-12'>
            <div className='flex items-center mb-4'>
              <i className={`${cardItem.icon} text-3xl text-blue-500`}></i>
              <h2 className='text-lg font-bold ml-4'>{cardItem.title}</h2>
            </div>
            <p className='text-gray-600'>{cardItem.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ThreeCardComponent;