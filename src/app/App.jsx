import '@/app/style/global.scss';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import { Attributes, Gallery, PictureCard, Quantity } from '../components';
// import 'react-toastify/scss/main.scss';
// import 'react-toastify/dist/ReactToastify.css';
import { Card, Counter, FlexJustify, HorizontalFlex, Img, Variant } from '../shared';
import { ListBox } from '../shared/ui/ListBox/ListBox';
import { Text, TextSize } from '../shared/ui/Text/Text';

import { Router } from './providers';

const departments = [
  { id: 1, title: 'Marketing', contact: 'Durward Reynolds' },
  { id: 2, title: 'HR', contact: 'Kenton Towne' },
  { id: 3, title: 'Sales', contact: 'Therese Wunsch' },
  { id: 4, title: 'Finance', contact: 'Benedict Kessler' },
  { id: 5, title: 'Customer service', contact: 'Katelyn Rohan' },
];

const attr = [
  {
    id: '1',
    title: 'Color',
    type: 'COLOR',
    labels: [
      {
        id: '1',
        title: 'Black',
        data: 'black',
      },
      {
        id: '2',
        title: 'Red',
        data: 'red',
      },
      {
        id: '4',
        title: 'Pink',
        data: '#ff69b4',
      },
      {
        id: '5',
        title: 'Gray',
        data: 'gray',
      },
    ],
  },
  {
    id: '2',
    title: 'Waist Size',
    type: 'TEXT',
    labels: [
      {
        id: '6',
        title: '30',
        data: '30',
      },
      {
        id: '8',
        title: '34',
        data: '34',
      },
      {
        id: '10',
        title: '38',
        data: '38',
      },
      {
        id: '11',
        title: '40',
        data: '40',
      },
      {
        id: '12',
        title: '42',
        data: '42',
      },
    ],
  },
  {
    id: '3',
    title: 'Leg Size',
    type: 'TEXT',
    labels: [
      {
        id: '13',
        title: '32',
        data: '32',
      },
      {
        id: '14',
        title: '34',
        data: '34',
      },
      {
        id: '16',
        title: '38',
        data: '38',
      },
      {
        id: '17',
        title: '40',
        data: '40',
      },
      {
        id: '18',
        title: '42',
        data: '42',
      },
    ],
  },
  {
    id: '4',
    title: 'Fabric Type',
    type: 'TEXT',
    labels: [
      {
        id: '19',
        title: 'Silk',
        data: 'silk',
      },
      {
        id: '20',
        title: '100% Cotton',
        data: 'cotton',
      },
      {
        id: '21',
        title: 'Linen',
        data: 'linen',
      },
    ],
  },
];

const imagesR = [
  {
    title: 'black.jpg',
    url: 'products/images/j8LSlwASms.jpg',
  },
  {
    title: 'gray.jpg',
    url: 'products/images/gFj4jwArJt.jpg',
  },
  {
    title: 'pink.jpg',
    url: 'products/images/ZUCqZ8gOxU.jpg',
  },
  {
    title: 'red.jpg',
    url: 'products/images/agcv0NsJqe.jpg',
  },
  {
    title: 'other.jpg',
    url: 'products/images/CWuwaeskWC.jpg',
  },
];

const variants = [
  {
    id: '1',
    title: 'Black Jeans 30W & 34L Cotton',
    english_title: 'Black Jeans 30W & 34L Cotton',
    image: {
      title: 'black.jpg',
      url: 'products/images/j8LSlwASms.jpg',
    },
    sku: '1',
    price: '120.00',
    discount_price: null,
    tab_content: [],
    pre_order_expected_date: null,
    max_purchase_limit: null,
    labels: [
      {
        attribute_id: '1',
        label_id: '1',
      },
      {
        attribute_id: '2',
        label_id: '6',
      },
      {
        attribute_id: '3',
        label_id: '14',
      },
      {
        attribute_id: '4',
        label_id: '20',
      },
    ],
    metadata: {
      title: null,
      keywords: null,
      description: null,
      link: null,
    },
    recommended_variants: [],
  },
  {
    id: '2',
    title: 'Black Jeans 34W & 38L Cotton',
    english_title: 'Black Jeans 30W & 38L Cotton',
    image: {
      title: 'black.jpg',
      url: 'products/images/j8LSlwASms.jpg',
    },
    sku: '12',
    price: '130.00',
    discount_price: null,
    tab_content: [],
    pre_order_expected_date: null,
    max_purchase_limit: null,
    labels: [
      {
        attribute_id: '1',
        label_id: '1',
      },
      {
        attribute_id: '2',
        label_id: '8',
      },
      {
        attribute_id: '3',
        label_id: '16',
      },
      {
        attribute_id: '4',
        label_id: '20',
      },
    ],
    metadata: {
      title: null,
      keywords: null,
      description: null,
      link: null,
    },
    recommended_variants: [],
  },
  {
    id: '3',
    title: 'Black Jeans 40W & 40L Silk',
    english_title: 'Black Jeans 40W & 40L Silk',
    image: {
      title: 'black.jpg',
      url: 'products/images/j8LSlwASms.jpg',
    },
    sku: '1',
    price: '160.00',
    discount_price: null,
    tab_content: [],
    pre_order_expected_date: null,
    max_purchase_limit: null,
    labels: [
      {
        attribute_id: '1',
        label_id: '1',
      },
      {
        attribute_id: '2',
        label_id: '11',
      },
      {
        attribute_id: '3',
        label_id: '17',
      },
      {
        attribute_id: '4',
        label_id: '19',
      },
    ],
    metadata: {
      title: null,
      keywords: null,
      description: null,
      link: null,
    },
    recommended_variants: [],
  },
  {
    id: '4',
    title: 'Gray Jeans 40W & 40L Linen',
    english_title: 'Black Jeans 40W & 40L Linen',
    image: {
      title: 'gray.jpg',
      url: 'products/images/gFj4jwArJt.jpg',
    },
    sku: '1',
    price: '140.00',
    discount_price: null,
    tab_content: [],
    pre_order_expected_date: null,
    max_purchase_limit: null,
    labels: [
      {
        attribute_id: '1',
        label_id: '5',
      },
      {
        attribute_id: '2',
        label_id: '11',
      },
      {
        attribute_id: '3',
        label_id: '17',
      },
      {
        attribute_id: '4',
        label_id: '21',
      },
    ],
    metadata: {
      title: null,
      keywords: null,
      description: null,
      link: null,
    },
    recommended_variants: [],
  },
  {
    id: '5',
    title: 'Gray Jeans 34W & 32L Silk',
    english_title: 'Gray Jeans 34W & 32L Silk',
    image: {
      title: 'gray.jpg',
      url: 'products/images/gFj4jwArJt.jpg',
    },
    sku: '1',
    price: '145.00',
    discount_price: null,
    tab_content: [],
    pre_order_expected_date: null,
    max_purchase_limit: null,
    labels: [
      {
        attribute_id: '1',
        label_id: '5',
      },
      {
        attribute_id: '2',
        label_id: '8',
      },
      {
        attribute_id: '3',
        label_id: '13',
      },
      {
        attribute_id: '4',
        label_id: '19',
      },
    ],
    metadata: {
      title: null,
      keywords: null,
      description: null,
      link: null,
    },
    recommended_variants: [],
  },
  {
    id: '6',
    title: 'Gray Jeans 42W & 42L Cotton',
    english_title: 'Gray Jeans 42W & 42L Cotton',
    image: {
      title: 'gray.jpg',
      url: 'products/images/gFj4jwArJt.jpg',
    },
    sku: '12',
    price: '155.00',
    discount_price: null,
    tab_content: [],
    pre_order_expected_date: null,
    max_purchase_limit: null,
    labels: [
      {
        attribute_id: '1',
        label_id: '5',
      },
      {
        attribute_id: '2',
        label_id: '12',
      },
      {
        attribute_id: '3',
        label_id: '18',
      },
      {
        attribute_id: '4',
        label_id: '20',
      },
    ],
    metadata: {
      title: null,
      keywords: null,
      description: null,
      link: null,
    },
    recommended_variants: [],
  },
  {
    id: '7',
    title: 'Gray Jeans 38W & 40L Silk',
    english_title: 'Gray Jeans 38W & 40L Silk',
    image: {
      title: 'gray.jpg',
      url: 'products/images/gFj4jwArJt.jpg',
    },
    sku: '1',
    price: '160.00',
    discount_price: null,
    tab_content: [],
    pre_order_expected_date: null,
    max_purchase_limit: null,
    labels: [
      {
        attribute_id: '1',
        label_id: '1',
      },
      {
        attribute_id: '2',
        label_id: '10',
      },
      {
        attribute_id: '3',
        label_id: '17',
      },
      {
        attribute_id: '4',
        label_id: '19',
      },
    ],
    metadata: {
      title: null,
      keywords: null,
      description: null,
      link: null,
    },
    recommended_variants: [],
  },
  {
    id: '8',
    title: 'Pink Jeans 38W & 40L Silk',
    english_title: 'Pink Jeans 38W & 40L Silk',
    image: {
      title: 'pink.jpg',
      url: 'products/images/ZUCqZ8gOxU.jpg',
    },
    sku: '1',
    price: '160.00',
    discount_price: null,
    tab_content: [],
    pre_order_expected_date: null,
    max_purchase_limit: null,
    labels: [
      {
        attribute_id: '1',
        label_id: '4',
      },
      {
        attribute_id: '2',
        label_id: '10',
      },
      {
        attribute_id: '3',
        label_id: '17',
      },
      {
        attribute_id: '4',
        label_id: '19',
      },
    ],
    metadata: {
      title: null,
      keywords: null,
      description: null,
      link: null,
    },
    recommended_variants: [],
  },
  {
    id: '9',
    title: 'Pink Jeans 40W & 40L Linen',
    english_title: 'Pink Jeans 40W & 40L Linen',
    image: {
      title: 'pink.jpg',
      url: 'products/images/ZUCqZ8gOxU.jpg',
    },
    sku: '1',
    price: '140.00',
    discount_price: null,
    tab_content: [],
    pre_order_expected_date: null,
    max_purchase_limit: null,
    labels: [
      {
        attribute_id: '1',
        label_id: '4',
      },
      {
        attribute_id: '2',
        label_id: '11',
      },
      {
        attribute_id: '3',
        label_id: '17',
      },
      {
        attribute_id: '4',
        label_id: '21',
      },
    ],
    metadata: {
      title: null,
      keywords: null,
      description: null,
      link: null,
    },
    recommended_variants: [],
  },
  {
    id: '10',
    title: 'Red Jeans 40W & 40L Cotton',
    english_title: 'Red Jeans 40W & 40L Cotton',
    image: {
      title: 'red.jpg',
      url: 'products/images/agcv0NsJqe.jpg',
    },
    sku: '1',
    price: '220.00',
    discount_price: null,
    tab_content: [],
    pre_order_expected_date: null,
    max_purchase_limit: null,
    labels: [
      {
        attribute_id: '1',
        label_id: '2',
      },
      {
        attribute_id: '2',
        label_id: '11',
      },
      {
        attribute_id: '3',
        label_id: '17',
      },
      {
        attribute_id: '4',
        label_id: '20',
      },
    ],
    metadata: {
      title: null,
      keywords: null,
      description: null,
      link: null,
    },
    recommended_variants: [],
  },
];
export const App = () => {
  const [state, setState] = useState(0);
  const [images, setImages] = useState(imagesR);
  const [selectedPerson, setSelectedPerson] = useState({ departments: { id: null } });

  const handle = (val) => {
    console.log('🚀 => 👍 ==>> App ==>> Line #10 ==>> ', val);
    setState(val);
  };

  const assets = '';
  console.log('🚀 => 👍 ==>> App ==>> Line #16 ==>> ', assets);

  const handleChange = (e) => {
    setSelectedPerson((prev) => {
      prev.departments.id = e.id;
      console.log('🚀 => 👍 ==>> App ==>> Line #32 ==>> ', prev);
      return { ...prev };
    });
    console.log('🚀 => 👍 ==>> App ==>> Line #18 ==>> ', 'handleChange', e);
  };

  const handleChangeImage = (e) => {
    setImages((prev) => {
      const newImages = prev.filter((image) => image.url !== e.url);
      newImages.unshift(e);

      return newImages;
    });
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     toast.success('🦄 Wow so easy!');
  //   }, 5000);
  // }, []);

  return (
    <>
      <Router />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* 
      <Attributes values={attr} variants={variants} />

      <Gallery images={images} onChange={handleChangeImage} />

      <PictureCard src="products/images/j8LSlwASms.jpg" name="Black Spahire" price="29.00" />
      <PictureCard
        src="products/images/j8LSlwASms.jpg"
        name="Black Spahire"
        price="29.00"
        relevantPrice={40.0}
        isSpecialOffer
      />

      {/* <ListBox onChange={handleChange} items={departments} value={selectedPerson} label="Department" /> */}
      {/* <Quantity value={state} onChange={handle} /> */}
      {/* <div style={{ width: 100, border: '1px solid red' }}> */}
      {/* </div> */}
    </>
    // <HorizontalFlex>
    //   <Text textSize={TextSize.LIGHT} value="djkhfjdhf" />
    //   <span>ooo</span>
    // </HorizontalFlex>
  );
};
