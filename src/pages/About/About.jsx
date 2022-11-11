import React, { useEffect, useState } from 'react';
import Tabs from '~/components/Tabs/Tabs';
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

function About() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getProduct(setData);
  }, []);
  console.log(data);
  return (
    <main>
      <Tabs listTab={listTab} />
      {data.map((res) => {
        return <p key={res.id}>{res.name}</p>;
      })}
    </main>
  );
}

export default About;
