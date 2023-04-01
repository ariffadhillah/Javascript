// contoh Asynhronous Callback

function getData(url, success, error) {
    let xhr = new XMLHttpRequest();
  
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          success(xhr.response);
        } else if (xhr.status === 404) {
          error();
        }
      }
    }
  
    xhr.open('get', url);
    xhr.send();
  }
  console.log('mulai');
  
  getData('https://api-g.weedmaps.com/discovery/v2/listings?latlng=38.95837783813477,-77.02819061279297&sort_by=position_distance&page_size=100&filter[any_retailer_services][]=storefront&filter[bounding_radius]=75mi&filter[bounding_latlng]=38.95837783813477,-77.02819061279297&include[]=facets.has_curbside_pickup&include[]=facets.retailer_services&include[]=listings.top_deals', ressults => {
    // const mapsdata = JSON.parse(ressults);
    // // console.log(mapsdata)
    
    // mapsdata.forEach(data => console.log(data));

    const mapsdata = JSON.parse(ressults);
    // console.log(mapsdata)

// Mengubah data menjadi array menggunakan Object.values()
    const dataArray = Object.values(mapsdata.data.listings);

    dataArray.forEach(data => console.log(data.name));
    // if (Array.isArray(mapsdata)) {
    //   mapsdata.forEach(m => console.log(m.name));
    // } else {
    //   console.log('Data is not an array');
    // }
  }, () => {
  
  });

  console.log('selesai');
  