import { useState } from 'react';

function useCopyClipboard() {
  const [isCopied, setIsCopied] = useState(false);
  async function copyTextToClipboard(text) {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand('copy', true, text);
    }
  }
  //  handle click
  const handleCopyClick = (codeString) => {
    let timmer;
    copyTextToClipboard(codeString)
      .then(() => {
        setIsCopied(true);
        timmer = setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
    return () => {
      clearTimeout(timmer);
    };
  };
  return { handleCopyClick, isCopied };
}

export default useCopyClipboard;
