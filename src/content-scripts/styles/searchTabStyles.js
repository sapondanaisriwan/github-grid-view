const searchStyles = {};

searchStyles.gridView = `
.gytyqX:has([data-testid="search-sub-header"]) [data-testid="results-list"] {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}
.gytyqX:has([data-testid="search-sub-header"]) [data-testid="results-list"] .Qaxme {
  position: relative;
}
.gytyqX:has([data-testid="search-sub-header"]) [data-testid="results-list"] .loHgVu {
  position: absolute;
  top: 15.2px;
}
.gytyqX:has([data-testid="search-sub-header"]) [data-testid="results-list"] .loHgVu span[data-component="text"] {
  display: none;
}
.gytyqX:has([data-testid="search-sub-header"]) [data-testid="results-list"] .loHgVu span[data-component="leadingVisual"] {
  margin-right: 0 !important;
}
.gytyqX:has([data-testid="search-sub-header"]) [data-testid="results-list"] .LjnbQ {
  font-size: 14px;
}
`;

searchStyles.truncateDesc = `
.gytyqX:has([data-testid="search-sub-header"]) [data-testid="results-list"] .LjnbQ {
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
`;

searchStyles.hideSponsors = `
.gytyqX:has([data-testid="search-sub-header"]) [data-testid="results-list"] .OkbDy {
  display: none !important;
}
`;
searchStyles.hideTopics = `
.gytyqX:has([data-testid="search-sub-header"]) [data-testid="results-list"] .frRVAS {
  display: none !important;
}
`;

export default searchStyles;
