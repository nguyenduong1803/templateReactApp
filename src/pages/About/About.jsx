import React from 'react';
import Tabs from '~/components/Tabs/Tabs';
const Curriculumn =()=>{
  return <p>Curriculum</p>
}
const Annucement =()=>{
  return <p>Annucement</p>
}
const listTab = [
  {
    name: "Mô tả",
    component: Curriculumn,
  },
  {
    name: "Chương trình học",
    component: Annucement,
  },

];

function About() {
  return <main>
    <Tabs listTab={listTab}/>
  </main>;
}

export default About;
