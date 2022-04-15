// this contain FN help trans text have special character to string html and make it to value that dangerouslySetInnerHTML method of component in React can take

export const textToHtml = (str) => {
  if(str === null) {
    return;
  }
  const HTMLstring = str.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#039;/g, "'");
  return {
    __html: HTMLstring
  }
}