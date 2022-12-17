import React from 'react';
import { Android, BugIcon, MacIcon, WindowIcon } from '~/assets/svg';
import { Col, Grid } from '~/layouts/Comp/GridSystem';
import Paper from '~/layouts/Styled/Paper';
import InsetColor from '~/layouts/Styled/Shapes/InsetColor';
const list = [
  {
    icon: Android,
    name: 'Weekly Sales',
    total: '786k',
    color: 'rgb(16, 57, 150)',
    bg: 'rgba(16, 57, 150, 0.24)',
    wrapColor: 'rgb(209, 233, 252)',
  },
  {
    icon: MacIcon,
    name: 'New users',
    total: '1.35M',
    color: 'rgb(12, 83, 183) ',
    bg: 'rgba(16, 57, 150, 0.24)',
    wrapColor: 'rgb(208, 242, 255)',
  },
  {
    icon: WindowIcon,
    name: 'Item orders',
    total: '1.22M',
    color: 'rgb(183, 129, 3)',
    bg: 'rgba(183, 129, 3, 0.24)',
    wrapColor: 'rgb(255, 247, 205);',
  },
  {
    icon: BugIcon,
    name: 'Bug report',
    total: '186k',
    color: 'rgb(183, 33, 54)',
    bg: 'rgba(183, 33, 54, 0.24)',
    wrapColor: 'rgb(255, 231, 217)',
  },
];
function Home2() {
  return (
    <div>
      <Grid className="mb-24">
        {list.map((item,index) => {
            const Icon = item.icon
          return (
            <Col key={index}>
              <Paper elevation={0} r={10} bg={item.wrapColor}>
                <div className="d-flex p-24 flex-direction-column a-center">
                  <InsetColor color={item.color} bg={item.bg}>
                    <Icon />
                  </InsetColor>
                  <h2>{item.total}</h2>
                  <p>{item.name}</p>
                </div>
              </Paper>
            </Col>
          );
        })}
      </Grid>
      <Paper r={10}elevation={8}>
        <div className="p-24">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit non quod repellendus, rem tempore expedita
            praesentium atque quas! Tempore velit accusamus ex delectus possimus tenetur qui expedita officiis quas
            temporibus!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit non quod repellendus, rem tempore expedita
            praesentium atque quas! Tempore velit accusamus ex delectus possimus tenetur qui expedita officiis quas
            temporibus!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit non quod repellendus, rem tempore expedita
            praesentium atque quas! Tempore velit accusamus ex delectus possimus tenetur qui expedita officiis quas
            temporibus!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit non quod repellendus, rem tempore expedita
            praesentium atque quas! Tempore velit accusamus ex delectus possimus tenetur qui expedita officiis quas
            temporibus!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit non quod repellendus, rem tempore expedita
            praesentium atque quas! Tempore velit accusamus ex delectus possimus tenetur qui expedita officiis quas
            temporibus!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit non quod repellendus, rem tempore expedita
            praesentium atque quas! Tempore velit accusamus ex delectus possimus tenetur qui expedita officiis quas
            temporibus!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit non quod repellendus, rem tempore expedita
            praesentium atque quas! Tempore velit accusamus ex delectus possimus tenetur qui expedita officiis quas
            temporibus!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit non quod repellendus, rem tempore expedita
            praesentium atque quas! Tempore velit accusamus ex delectus possimus tenetur qui expedita officiis quas
            temporibus!
          </p>
        </div>
      </Paper>
      <div  className="mt-24 mb-24">
        <Grid>
          <Col>
            <Paper r={10} elevation={8} className="p-24">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam et explicabo sint. Ab, reprehenderit
                nobis! Nihil sed ipsum, tenetur dolores voluptatem dicta numquam assumenda inventore quaerat rem soluta
                omnis iusto.
              </p>
            </Paper>
          </Col>
          <Col>
            <Paper r={10} elevation={8} className="p-24">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam et explicabo sint. Ab, reprehenderit
                nobis! Nihil sed ipsum, tenetur dolores voluptatem dicta numquam assumenda inventore quaerat rem soluta
                omnis iusto.
              </p>
            </Paper>
          </Col>
          <Col>
            <Paper r={10} elevation={8} className="p-24">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam et explicabo sint. Ab, reprehenderit
                nobis! Nihil sed ipsum, tenetur dolores voluptatem dicta numquam assumenda inventore quaerat rem soluta
                omnis iusto.
              </p>
            </Paper>
          </Col>
          <Col>
            <Paper r={10} elevation={8} className="p-24">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam et explicabo sint. Ab, reprehenderit
                nobis! Nihil sed ipsum, tenetur dolores voluptatem dicta numquam assumenda inventore quaerat rem soluta
                omnis iusto.
              </p>
            </Paper>
          </Col>
          <Col>
            <Paper r={10} elevation={8} className="p-24">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam et explicabo sint. Ab, reprehenderit
                nobis! Nihil sed ipsum, tenetur dolores voluptatem dicta numquam assumenda inventore quaerat rem soluta
                omnis iusto.
              </p>
            </Paper>
          </Col>
          <Col>
            <Paper r={10} elevation={8} className="p-24">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam et explicabo sint. Ab, reprehenderit
                nobis! Nihil sed ipsum, tenetur dolores voluptatem dicta numquam assumenda inventore quaerat rem soluta
                omnis iusto.
              </p>
            </Paper>
          </Col>
          <Col>
            <Paper r={10} elevation={8} className="p-24">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam et explicabo sint. Ab, reprehenderit
                nobis! Nihil sed ipsum, tenetur dolores voluptatem dicta numquam assumenda inventore quaerat rem soluta
                omnis iusto.
              </p>
            </Paper>
          </Col>
          <Col>
            <Paper r={10} elevation={8} className="p-24">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam et explicabo sint. Ab, reprehenderit
                nobis! Nihil sed ipsum, tenetur dolores voluptatem dicta numquam assumenda inventore quaerat rem soluta
                omnis iusto.
              </p>
            </Paper>
          </Col>
          <Col>
            <Paper r={10} elevation={8} className="p-24">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam et explicabo sint. Ab, reprehenderit
                nobis! Nihil sed ipsum, tenetur dolores voluptatem dicta numquam assumenda inventore quaerat rem soluta
                omnis iusto.
              </p>
            </Paper>
          </Col>
        </Grid>
      </div>
    </div>
  );
}

export default Home2;
