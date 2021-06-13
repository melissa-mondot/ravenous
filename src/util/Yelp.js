// TODO: Gen new key with ENV secret settings
const apiKey =
  "HIelNp-krxu0mih6rcGr1WJsBjMa_-5UQso0RVE_IDRhXDZN8pkp51xtJuFvkz68qkVTac8ybGlyqDDY1hcxy_5aRR_lVPqo9YkNFj5OGlULs9xsev3YrkYr6SXBYHYx";

// CORS current workaround => visit https://cors-anywhere.herokuapp.com to refresh token
const Yelp = {
  search(term, location, sortBy) {
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      { headers: { Authorization: `Bearer ${apiKey}` } }
    )
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (jsonResponse.businesses) {
          console.log(jsonResponse);
          return jsonResponse.businesses.map((business) => {
            return (business = {
              id: business.id,
              imgSrc: business.image_url,
              name: business.name,
              address: business.location["address1"],
              city: business.location["city"],
              state: business.location["state"],
              zipCode: business.location["zip_code"],
              phone: business.phone,
              category: business.categories[0]["title"],
              rating: business.rating,
              reviewCount: business.review_count,
            });
          });
        }
      });
  },
};
export default Yelp;
