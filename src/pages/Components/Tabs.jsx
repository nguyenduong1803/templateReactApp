import React from 'react';
import Tabs from '~/components/Molecule/Tabs/Tabs';
import { Col, Grid } from '~/layouts/Comp/GridSystem';

const Curriculumn = () => {
  return <p>Curriculum</p>;
};
const Annucement = () => {
  return (
    <p>
      Officiis similique qui consequuntur, perferendis recusandae ratione vitae porro laborum illum cum ab, sed officia,
      nisi expedita dolorum ad. Qui, rerum quasi!
    </p>
  );
};
const FAQ = () => {
  return (
    <p>
      Iusto, inventore, impedit aspernatur neque optio fuga illum culpa repellendus voluptatibus blanditiis delectus
      doloremque vero corporis in eaque qui quis, eos laborum!
    </p>
  );
};
const About = () => {
  return (
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam mollitia dolorum ipsam, veniam voluptatum
      quibusdam minus perferendis quis perspiciatis eum laudantium blanditiis repellendus et labore delectus est aliquid
      magni soluta.
    </p>
  );
};
const listTab = [
  {
    name: 'Mô tả',
    component: Curriculumn
  },
  {
    name: 'Chương trình học',
    component: Annucement
  },
  {
    name: 'Câu hỏi thường gặp',
    component: FAQ
  },
  {
    name: 'About',
    component: About
  }
];
function TabsPage() {
  return (
    <div>
      <Grid container='container-fluid'>
        <Col lg={12} sm={12} md={12}>
          <Tabs listTab={listTab} />
        </Col>
      </Grid>
    </div>
  );
}

export default TabsPage;
