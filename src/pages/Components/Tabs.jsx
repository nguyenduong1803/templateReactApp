import React from 'react'
import Tabs from '~/components/Atom/Tabs/Tabs';
import { Col, Grid } from '~/layouts/Comp/GridSystem';

const Curriculumn = () => {
    return <p>Curriculum</p>;
};
const Annucement = () => {
    return <p>Annucement</p>;
};
const FAQ = () => {
    return <p>FAQ</p>;
};
const About = () => {
    return <p>About</p>;
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
    {
        name: 'Câu hỏi thường gặp',
        component: FAQ,
    },
    {
        name: 'About',
        component: About,
    },
];
function TabsPage() {
    return (
        <div>
            <Grid>
                <Col lg={12} sm={12} md={12}>
                    <Tabs listTab={listTab} />
                </Col>
            </Grid>
        </div>
    )
}

export default TabsPage