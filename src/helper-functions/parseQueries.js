export default function parseQueries(queries) {
  if(Boolean(queries.categories)) {
    if (queries.categories.split(",")[0] === "") {
      queries.categories = [];
    } else {
      queries.categories = queries.categories.split(",");
    }
  }
  if(Boolean(queries.brands)) {
    if (queries.brands.split(",")[0] === "") {
      queries.brands = [];
    } else {
      queries.brands = queries.brands.split(",");
    }
  }
  if(Boolean(queries.price)) {
    queries.price = queries.price.split(",");
    queries.price[0] = Number(queries.price[0]);
    queries.price[1] = Number(queries.price[1]);
  }
  return queries;
}
