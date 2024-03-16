const starStyles = {};

starStyles.gridView = `
#user-starred-repos .mt-5 {
  position: relative;
  max-width: 100% !important;
}
#user-starred-repos .mt-5 .col-lg-12 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-top: 90px;
}
#user-starred-repos .mt-5 .col-lg-12 .py-4 {
  min-width: 0;
  padding: 16px !important;
  background-color: var(--color-canvas-default);
  border-color: var(--color-border-default);
  border-radius: var(--primer-borderRadius-medium, 6px);
  border-style: solid;
  border-width: var(--primer-borderWidth-thin, 1px);
}
#user-starred-repos .mt-5 .col-lg-12 > .position-relative {
  top: 0;
  position: absolute !important;
  width: calc(100% - 32px) !important;
}
#user-starred-repos .mt-5 .col-lg-12 form > button > span {
  display: none !important;
}
#user-starred-repos .mt-5 .col-lg-12 .mr-2 {
  margin-right: 0 !important;
}
#user-starred-repos .mt-5 .col-lg-12 .BtnGroup-parent:first-child .BtnGroup-item {
  border-right-width: 1px;
}
#user-starred-repos .mt-5 .col-lg-12 h3 {
  font-size: 14px !important;
}
#user-starred-repos .paginate-container {
  position: absolute;
  bottom: -64px;
  width: calc(100% - 48px)
}
#user-starred-repos .mt-5 .col-lg-12:not(:has(.blankslate)) > .TableObject {
  top: 70px;
  position: absolute !important;
  width: calc(100% - 32px) !important;
}
#user-starred-repos .mt-5 .col-lg-12:not(:has(.blankslate)):has(> .TableObject) {
  margin-top: 137px;
}
`;

starStyles.showRepoIcon = `
#user-starred-repos .mt-5 .col-lg-12 h3::before {
    display: inline-block !important;
    position: relative;
    top: 3px;
    margin-right: 4px;
    width: 16px;
    height: 16px;
    content: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAN1JREFUOE/tk8ENwjAMRb9BcKUbABN0BDICo7RHSiuCWsIx2QBGYARWYIOyARwBqUYJFFWiFC5IHMglUmw/O9824X7iVIuCaAVgUL413LmKg6G1U+kUZToHyAPxGgUODcECRCMVBy62AjAM5rlKQtlUQZRqCaLZH/C7GsD13/tgkFDfRuAIZvMG8K1BSvUWRH0741FmuFqFLXeS6jG1Wj4zCwLE0xek1N6pDbFMwk0dIMqM1ad3A/NexaFbuscuVDNaAIF3zhXkl9nqtKkHLLTpXuCW6tyBVNMweCXsFd/SnxH+P3j+AAAAAElFTkSuQmCC");
}
`;

starStyles.truncateDesc = `
#user-starred-repos .mt-5 .col-lg-12 p[itemprop="description"] {
  font-size: 12px !important;
  margin: 0;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
`;

starStyles.showNoDesc = `
#user-starred-repos .mt-5 .col-lg-12 .py-4 > div:nth-child(3):not(:has(p[itemprop="description"]))::before {
  content: "No description provided";
  color: var(--fgColor-muted, var(--color-fg-muted)) !important;
  font-size: 14px;
  font-style: italic;
}
`;

starStyles.hideAuthor = `
#user-starred-repos .mt-5 .col-lg-12 h3 > a span.text-normal {
  display: none !important;
}
`;

starStyles.hideSponsors = `
#user-starred-repos .mt-5 .col-lg-12 a[href^="/sponsors/"] {
  display: none !important;
}
`;

export default starStyles;
