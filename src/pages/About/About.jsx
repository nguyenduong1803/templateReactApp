import React, { useEffect, useState } from 'react';
import Button from '~/components/Atom/Button/Button';
import OptimizeImage from '~/components/Atom/Image/OptimizeImage';
import Tabs from '~/components/Atom/Tabs/Tabs';
import Box from '~/layouts/Comp/GridSystem/Box';
import { getProduct } from '~/services/productService/produtService';

const Curriculumn = () => {
  return <p>Curriculum</p>;
};
const Annucement = () => {
  return <p>Annucement</p>;
};
const listTab = [
  {
    name: 'Mô tả',
    component: Curriculumn,
  },
  {
    name: 'Chương trình học',
    component: Annucement,
  },
];
const listImage = [
  { path: 'https://freepik.cdnpk.net/img/coupon/adobe/EN_3.jpg', width: 300 },
  {
    path: 'https://img.freepik.com/free-photo/close-up-seafoo…s-shrimp-mussels_140725-4993.jpg?size=338&ext=jpg',
    width: 740,
  },
  {
    path: 'https://img.freepik.com/free-photo/top-view-french-fries-with-ketchup_23-2149160033.jpg?w=826&t=st=1668589808~exp=1668590408~hmac=bce9393755b60bc5b7ad1129f4744f2ff1399a513e75354705459120bd8f1606',
    width: 1040,
  },
];
function About() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getProduct(setData);
  }, []);
  return (
    <main>
      <Tabs listTab={listTab} />
      {data.map((res) => {
        return <p key={res.id}>{res.name}</p>;
      })}
      <OptimizeImage listImage={listImage} />
      <Box>Box box</Box>
      <Button>Button click</Button>

    </main>
  );
}

export default About;
