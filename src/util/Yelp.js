const apiKey =
  "HIelNp-krxu0mih6rcGr1WJsBjMa_-5UQso0RVE_IDRhXDZN8pkp51xtJuFvkz68qkVTac8ybGlyqDDY1hcxy_5aRR_lVPqo9YkNFj5OGlULs9xsev3YrkYr6SXBYHYx";

export const Yelp = {
  search(term, location, sortBy) {
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      { headers: { Authorization: `Bearer ${apiKey}` } }
    )
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (jsonResponse.businesses) {
          jsonResponse.businesses.map((business) => {
            return (business = {
              id: business.id,
              imgSrc: business.imgSrc,
              name: business.name,
              address: business.address,
              city: business.city,
              state: business.state,
              zipCode: business.zipCode,
              category: business.category,
              rating: business.rating,
              reviewCount: business.reviewCount,
            });
          });
        }
      });
  },
};
