export default async function getFilteredItems(url) {
  return fetch("http://localhost:3001/products/search/" + url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((data) => data.json());
}
