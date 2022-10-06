import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { SearchSvg, CloseSvg } from "~/assets/svg"

const Wrap = styled.section`
  margin: 0 auto;
  position: relative;
  width: 400px;
  height: auto;
`;
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`;
const Border = styled.div`
  width: 100%;
  border-radius: 4px;
  border: 1px solid #dbdbdb;
  background-color: rgba(230, 249, 255, 0.2);
`;
const WrapInput = styled.div`
  align-items: center;
  flex-wrap: wrap;
  position: relative;
`;
const Search = styled.div`
  padding: 8px;
  background-color: rgba(230, 249, 255, 0.2);
`;
const SearchIcon = styled(SearchSvg)`
  width: 18px;
  height: 18px;
  fill: #444444;
  z-index: 10;
`;
const Selected = styled.div`
  display: block;

  gap: 8px;
  z-index: 12;
`;
const InputSearch = styled.input`
position: relative;
  top: -1px;
  min-width: 200px;
  flex: 1;
  height: 49px;
  padding: 8px 10px 8px 10px;
  border: none;
  border-top: 1px solid #dbdbdb;
  border-collapse: separate;
  background-color: rgba(230, 249, 255, 0.2);
  overflow-y: auto;
  z-index: 10;
&:focus {
  outline: none !important;
  border-radius: 4px;
}

::placeholder {
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #bfbfbf;
}
`
// const SearchOuput = styled.div`
//   position: absolute;
//   top: 100%;
//   width: 400px;
//   max-height: 128px;
//   background-color: #f1f5f8;
//   box-shadow: 0px 1px 8px rgb(102 102 102 / 25%);
//   border-radius: 4px;
//   z-index: 2;
//   overflow: hidden;
//   overflow-y: auto;
//   -ms-overflow-style: none; /* IE and Edge */
//   scrollbar-width: none; /* Firefox */
//   margin: 0;
//   transition: 0.2s;
// `
const WrapResult = styled.div`
  position: absolute;
  top: 100%;
  width: 400px;
  max-height: 128px;
  background-color: #f1f5f8;
  box-shadow: 0px 5px 9px rgb(102 102 102 / 19%);
  border-radius: 4px;
  z-index: 2;
  overflow: hidden;
  overflow-y: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  margin: 0;
  transition: 0.2s;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const SearchOutputItem = styled.li`
  text-align: left;
  padding-left: 10px;
  height: 40px;
  display: block;
  line-height: 40px;
  margin: 0;
  color: #486581;
  :hover {
    background-color: #617d98;
    color: #fff;
    cursor: pointer;
  }
`;
const WrapSelected = styled.section`
  margin: 6px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 4px 8px;
  gap: 8px;
  min-width: 83px;
  height: 32px;
  background: #f0f4f8;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  color: #486581;
`;
const CloseIcon = styled(CloseSvg)`
cursor: pointer;
fill:#777777;
`
function SelectMulti({name,fakeData}) {
   
    const [keySearch, setKeySearch] = useState("")
    const [result, setResult] = useState([])
    const [inputing, setInputing] = useState(false)
    const [selected, setSelected] = useState([])
    const handleSearch = (e) => {
        setKeySearch(e.target.value)
        const resultSe = fakeData.filter(ele => ele.name
            .toString()
            .toLowerCase()
            .includes(keySearch.toString().toLowerCase())
        )
        if ((e.target.value && e.target.value.trim() === "")||e.target.value === "") setResult([])
        else setResult(resultSe)
    }
    return (<Wrap>
        {inputing && <Overlay onClick={() => setInputing(false)} />}
        <Border>
            <WrapInput className="d-flex">
                <Search>
                    <SearchIcon />
                </Search>
                <Selected >
                    <SelectedItem selected={selected} setSelected={setSelected} />
                </Selected>
                <InputSearch
                    onChange={e => handleSearch(e)}
                    value={keySearch}
                    type="text"
                    placeholder={name}
                    onFocus={() => setInputing(true)}
                />
                {inputing && (result.length > 0 ?
                    <ResultSearch selected={selected} setSelected={setSelected} result={result} />
                    : ""
                    // <SearchOuput className="search__notfound">
                    //     <p className="notify">Không tìm thấy</p>
                    // </SearchOuput>)
                )}
            </WrapInput>
        </Border>
    </Wrap>
    );
}

const ResultSearch = ({ selected, setSelected, result }) => {
    const handleSelect = (value) => {
        if (selected.some(item => item.name === value.name)) return
        setSelected(prev => [...prev, value])
    }
    return (
        <WrapResult>
            <ul className="p-0">
                {result.map(item => <SearchOutputItem onClick={() => handleSelect(item)} key={item.name}>{item.name}</SearchOutputItem>)}
            </ul>
        </WrapResult>
    );
};

const SelectedItem = ({ selected, setSelected }) => {
    console.log(selected)
    const handleClose = (value) => {
        console.log(selected);
        setSelected(prev => {
            prev.forEach((element, i) => {
                if (element.name === value.name) prev.splice(i, 1)
            });
            return [...prev]
        })
    }
    return selected.map((item, index) =>
        <WrapSelected key={index}>
            <p>{item.name}</p>
            <CloseIcon onClick={() => handleClose(item)} />
        </WrapSelected>)
};
SelectMulti.prototype={
    fakeData: PropTypes.object.isRequired,
    name: PropTypes.string
}
export default SelectMulti;
