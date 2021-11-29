export default function setParams(searchInput, categories, brands, priceRange) {
  const params = new URLSearchParams();
  if (searchInput !== "") {
    params.append("name", searchInput.toLowerCase());
  } else {
    params.delete("name");
  }
  if (categories.length >= 1) {
    params.append("categories", categories);
  } else {
    params.delete("categories");
  }
  if (brands.length >= 1) {
    params.append("brands", brands);
  } else {
    params.delete("brands");
  }
  params.append("price", priceRange);
  return params;
}
