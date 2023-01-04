import styled from 'styled-components';

export default function Skeleton() {
  return (
    <Card className='card'>
      <Header className='header'>
        <Img className='img loadSkeleton'></Img>
        <Details className='details'>
          <span className='name'></span>
          <span className='about'></span>
        </Details>
      </Header>
      <div className='content'>
        <Line className='line loadSkeleton'></Line>
        <Line className='line loadSkeleton'></Line>
        <Line className='line line-3 loadSkeleton'></Line>
      </div>
      <div className='d-flex'>
        <Btn className='btn btn-1 loadSkeleton'></Btn>
        <Btn className='btn btn-2 loadSkeleton'></Btn>
      </div>
    </Card>
  );
}

const Card = styled.section`
  max-width: 350px;
  width: 100%;
  padding: 30px;
  border: 1px solid #e9e9e9;
  border-radius: 10px;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
`;
const Img = styled.div`
  position: relative;
  width: 70px;
  height: 70px;
  background: #d9d9d9;
  border-radius: 50%;
  overflow: hidden;
`;
const Details = styled.div`
  margin-left: 20px;
  &span {
    position: relative;
    display: block;
    background: #d9d9d9;
    border-radius: 10px;
    overflow: hidden;
  }
  &.name {
    width: 100px;
    height: 15px;
  }
  &.about {
    width: 150px;
    height: 15px;
    margin-top: 10px;
  }
`;
const Line = styled.div`
  position: relative;
  height: 13px;
  margin: 10px 0;
  border-radius: 10px;
  background: #d9d9d9;
  overflow: hidden;
  &.line-3 {
    width: calc(100% - 40%);
  }
`;
const Btn = styled.div`
  position: relative;
  width: 100%;
  height: 40px;
  background: #d9d9d9;
  border-radius: 25px;
  overflow: hidden;
  &.btn1 {
    margin-right: 8px;
  }
  &.btn2 {
    margin-left: 8px;
  }
  @keyframes shimmer {
    0% {
      background-position: -450px 0px;
    }
    100% {
      background-position: 450px 0px;
    }
  }
`;
