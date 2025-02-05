export async function sendRequest({uri } : { uri : string}) {
  try {
    const url = uri || 'https://dummyjson.com/recipes'; 
    console.log('uri', url);
    const request = await fetch(url);
    const response = await request.json();
    return response;
  } catch (error) {
    console.log('error==>', error);
  }
}
