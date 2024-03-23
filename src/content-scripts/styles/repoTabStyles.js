const repoStyles = {};

repoStyles.gridView = `
#user-repositories-list > ul {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-top: 16px;
}
#user-repositories-list > ul > li.py-4 > .d-inline-block div.d-inline-block.mb-1 > h3 {
  font-size: 14px;
}
#user-repositories-list > ul > li.py-4 {
  padding: 16px !important;
  background-color: var(--color-canvas-default);
  border-color: var(--color-border-default);
  border-radius: var(--primer-borderRadius-medium, 6px);
  border-style: solid;
  border-width: var(--primer-borderWidth-thin, 1px);
  min-width: 0;
  padding: 16px !important;
  position: relative;
}

#user-repositories-list > ul > li.py-4 > .col-2 {
  display: contents !important;
}
#user-repositories-list > ul > li.py-4 > .col-2 .starring-container .unstarred,
#user-repositories-list > ul > li.py-4 > .col-2 .starring-container.on .starred {
  margin-left: 0;
}
#user-repositories-list > ul > li.py-4 > .col-2 .starring-container {
  position: absolute;
  right: 16px;
}
#user-repositories-list > ul > li.py-4 > .col-2 .starring-container form > button > span {
  display: none !important;
}
#user-repositories-list > ul > li.py-4 > .col-2 .starring-container .btn-sm .octicon,
#user-repositories-list > ul > li.py-4 > .col-2 .starring-container .starred .starred-button-icon {
  margin-right: 0 !important;
}
#user-repositories-list > ul > li.py-4 .col-lg-9 {
  width: 100%;
}
#user-repositories-list > ul > li.py-4 .col-9,
#user-repositories-list > ul > li.py-4 .f6 {
  font-size: 12px !important;
}
#user-repositories-list > ul > li.py-4 div.text-right.hide-lg.hide-md.hide-sm.hide-xs.flex-self-end,
#user-repositories-list > ul > li.py-4 div.text-right.hide-lg.hide-md.hide-sm.hide-xs.flex-self-end.mt-2 {
  display: none !important;
}
`;

repoStyles.showRepoIcon = `
#user-repositories-list > ul > li.py-4 > .d-inline-block div.d-inline-block.mb-1 > h3::before {
  display: inline-block !important;
  position: relative;
  top: 3px;
  margin-right: 4px;
  width: 16px;
  height: 16px;
  content: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAN1JREFUOE/tk8ENwjAMRb9BcKUbABN0BDICo7RHSiuCWsIx2QBGYARWYIOyARwBqUYJFFWiFC5IHMglUmw/O9824X7iVIuCaAVgUL413LmKg6G1U+kUZToHyAPxGgUODcECRCMVBy62AjAM5rlKQtlUQZRqCaLZH/C7GsD13/tgkFDfRuAIZvMG8K1BSvUWRH0741FmuFqFLXeS6jG1Wj4zCwLE0xek1N6pDbFMwk0dIMqM1ad3A/NexaFbuscuVDNaAIF3zhXkl9nqtKkHLLTpXuCW6tyBVNMweCXsFd/SnxH+P3j+AAAAAElFTkSuQmCC");
}
`;

repoStyles.truncateDesc = `
#user-repositories-list > ul > li.py-4 > .d-inline-block p.col-9 {
  margin-bottom: 0 !important;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
`;

repoStyles.showNoDesc = `
#user-repositories-list > ul > li.py-4 > .d-inline-block > div:nth-child(2):not(:has(p[itemprop="description"]))::before {
  content: "No description provided";
  color: var(--fgColor-muted, var(--color-fg-muted)) !important;
  font-style: italic;
}
`;
repoStyles.hideForked = `
#user-repositories-list > ul > li.py-4 > .d-inline-block div.d-inline-block.mb-1 > span {
  display: none;
}
`;
repoStyles.hideTopics = `
#user-repositories-list > ul > li.py-4 > .d-inline-block > .topics-row-container {
  display: none !important;
}
`;
repoStyles.hideHelpWanted = `
#user-repositories-list > ul > li.py-4 > .d-inline-block div.f6.color-fg-muted.mt-2 a[href*="issue"] {
  display: none;
}
`;
repoStyles.hideLicense = `
#user-repositories-list > ul > li.py-4 > .d-inline-block div.f6.color-fg-muted.mt-2 > span:not(.ml-0) {
  display: none !important;
}
`;

export default repoStyles;
