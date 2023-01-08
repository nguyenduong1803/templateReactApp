export const list = [
  {
    id: 1,
    title: 'Choose Category',
    child: [
      { name: 'Samsung', id: 'samsung' },
      { name: 'IPhone', id: 'iphone' },
      { name: 'IPad', id: 'ipad' },
      { name: 'Computer', id: 'computer' }
    ]
  },
  {
    id: 2,
    title: 'Choose Phone',
    child: [
      { name: 'Samsung', id: 'samsung2' },
      { name: 'IPhone', id: 'iphone2' },
      { name: 'IPad', id: 'ipad2' },
      { name: 'Computer', id: 'computer2' }
    ]
  },
  {
    id: 3,
    title: 'Accordion',
    child: [
      { name: 'Samsung', id: 'samsung3' },
      { name: 'IPhone', id: 'iphone3' },
      { name: 'IPad', id: 'ipad3' },
      { name: 'Computer', id: 'computer3' }
    ]
  },
  {
    id: 4,
    title: 'Accordion 2',
    child: [
      { name: 'Samsung', id: 'samsung4' },
      { name: 'IPhone', id: 'iphone4' },
      { name: 'IPad', id: 'ipad4' },
      { name: 'Computer', id: 'computer4' }
    ]
  }
];

export const renderString = [
  ` <Paper r={4} elevation={8} w='400px'>
      {list.map((item) => {
        return (
          <Accordion key={item.id} title={item.title}>
            {item.child.map((child) => (
              <li className='hover-default p-6' key={child.id}>
                {child.name}
              </li>
            ))}
          </Accordion>
        );
      })}
    </Paper>
    `,
  ` <Paper r={4} elevation={1} w='400px'>
    {list.map((item) => {
      return (
        <Accordion ripple rippleColor='#ccc' key={item.id} title={item.title} bg={item.bg}>
          {item.child.map((child) => (
            <li className='hover-default p-6' key={child.id}>
              {child.name}
            </li>
          ))}
        </Accordion>
      );
    })}
  </Paper>
    `,
  `
import { BookIcon } from '~/assets/svg';

const sidebars = [
    {
      id: 1,
      open: true,
      icon: BookIcon,
      title: 'Getting Started',
      element: [
        { id: '', element: 'Introduction', path: '' },
        { id: 'overview', element: 'Overview', path: '' },
        { id: 'b', element: 'Download', path: '' },
        { id: 'c', element: 'Contents', path: '' },
        { id: 'd', element: 'Browsers & devices', path: '' }
      ]
    },
]

<Paper elevation={2} w='400px'>
    {sidebars.map((sidebar, index) => {
        return (
            <Accordion
                Icon={sidebar.icon}
                hasOpen={sidebar.open}
                title={sidebar.title}
                key={sidebar.id}
                hover={{ backgroundColor: 'var(--hover-color)', color: 'red' }}
                ripple
            >
                {sidebar.element.map((item) => (
                <li className=' line-height-36 hover-default' key={item.id}>
                    <p>{item.element}</p>
                </li>
                ))}
            Accordion>
            );
    })}
</Paper>
`
];
export const mockData = `
export const list = [
  {
    id: 1,
    title: 'Choose Category',
    child: [
      { name: 'Samsung', id: 'samsung' },
      { name: 'IPhone', id: 'iphone' },
      { name: 'IPad', id: 'ipad' },
      { name: 'Computer', id: 'computer' }
    ]
  }
  ]
`;
