import React from 'react';
import Image from '~/components/Atom/Image/Image';
import { Container, Box, Section, Stack } from '~/layouts/Comp/GridSystem';
import Paper from '~/layouts/Styled/Paper';

function Overview() {
  return (
    <Container p="0 12px">
      <h1>MY UI - Overview</h1>
      <p className="fz-16 line-height-36">
        MY UI is a library of React UI components that implements Nguyen Huu Duong Design
      </p>
      <Paper className="p-12 my-24 cursor-pointer">
        <Stack gap="2.4rem">
          <Image
            w="20rem"
            src="https://images.unsplash.com/photo-1661961110372-8a7682543120?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          />
          <Box>
            <p>Shutterstock Free Trial - Get images, video, music & easy to use design tools with one subscription. </p>
            <p className="fz-14">ads via Carbon</p>
          </Box>
        </Stack>
      </Paper>
      <Section className="pt-24">
        <h2 className="main-title">Introduction</h2>
        <p className="line-height-36 fz-16 line-height-36">
          MY UI is an open-source React component library that implements Nguyen Huu Duong Design. It includes a
          comprehensive collection of prebuilt components that are ready for use in production right out of the box.
          <br /> MY UI is beautiful by design and features a suite of customization options that make it easy to
          implement your own custom design system on top of our components.
        </p>
      </Section>
      <Section className="pt-24">
        <h2 className="main-title">Advantages of My UI</h2>
        <ul className="list">
          <li className="pl-12 fz-16 line-height-36">
            <span>
              <strong>Ship faster: </strong>
              Over 2,500 open-source contributors have poured countless hours into these components. Focus on your core
              business logic instead of reinventing the wheel—we've got your UI covered.
            </span>
          </li>
          <li className="pl-12 fz-16 line-height-36">
            <span>
              <strong>Beautiful by default: </strong>
              I'm meticulous about our implementation of My Design, ensuring that every My UI component meets the
              highest standards of form and function, but diverge from the official spec where necessary to provide
              multiple great options.
            </span>
          </li>
          <li className="pl-12 fz-16 line-height-36">
            <span>
              <strong>Customizability </strong>
              the library includes an extensive set of intuitive customizability features. The templates in our store
              demonstrate how far you can go with customization.
            </span>
          </li>
          <li className="pl-12 fz-16 line-height-36">
            <span>
              <strong>Cross-team collaboration: </strong>
              My UI's intuitive developer experience reduces the barrier to entry for back-end developers and less
              technical designers, empowering teams to collaborate more effectively. The design kits streamline your
              workflow and boost consistency between designers and developers.
            </span>
          </li>
          <li className="pl-12 fz-16 line-height-36">
            <span>
              <strong>Trusted by thousands of organizations: </strong>
              My UI has the largest UI community in the React ecosystem. It's almost as old as React itself—its history
              stretches back to 2014—and we're in this for the long haul. You can count on community's support for years
              to come (e.g. Stack Overflow).
            </span>
          </li>
        </ul>
      </Section>
      <Section className="pt-24">
        <h2 className="main-title">My UI vs. MUI Base</h2>
        <p className="pl-12 fz-16 line-height-36">
          My UI and MUI Base feature many of the same UI components, but MUI Base comes without any default styles or
          styling solutions.
        </p>
        <p className="pl-12 fz-16 line-height-36">
          My UI is comprehensive in that it comes packaged with default styles, and is optimized to work with Emotion
          (or styled-components).
        </p>
        <p className="pl-12 fz-16 line-height-36">
          MUI Base, by contrast, could be considered the "skeletal" or "headless" counterpart to My UI—in fact, My UI v6
          will use MUI Base components and hooks for its foundational structure.
        </p>
      </Section>
    </Container>
  );
}

export default Overview;
