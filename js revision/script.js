function makerequest(location) {
  return new Promise((resolve, reject) => {
    if (location == "google") {
      resolve("google says hi");
    } else {
      reject("we only have google locatioon ");
    }
  });
}
async function getData() {
  try {
    res = await makerequest("jupiter");
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}
getData();
//fetch ('https://jsonplaceholder.typicode.com/posts').then().then().catch
async function getData2() {
  try {
    res = await fetch("https://jsonplaceholder.typicode.com/posts");
    console.log(res)
    //data = await res.json();
    //console.log(data);
    console.log ( await res.json())
  } catch (err) {
    console.log(err);
  }
}

getData2();
