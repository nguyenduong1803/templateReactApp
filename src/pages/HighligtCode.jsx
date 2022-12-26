import React from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styled from 'styled-components';
import useCopyClipboard from '~/helpers/hooks/useCopyClipboard ';

SyntaxHighlighter.registerLanguage('jsx', jsx);
function HighligtCode({ codeString }) {
  const { handleCopyClick, isCopied } = useCopyClipboard();
  return (
    <div className="position-relative">
      <SyntaxHighlighter className="radius-8" language="jsx" style={coldarkDark}>
        {codeString}
      </SyntaxHighlighter>
      <CopyButton
        className="position-absolute p-6 radius-6 t-12 r-12 cursor-pointer border-0"
        onClick={() => handleCopyClick(codeString)}
      >
        {isCopied ? 'Copied' : 'Copy'}
      </CopyButton>
    </div>
  );
}
const CopyButton = styled.button`
  color: #bbb;
  background: #575757;
  outline: none;
  &:hover {
    background: #686868;
  }
`;
export default HighligtCode;
