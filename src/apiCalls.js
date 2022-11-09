const fetchData = (dataFileName, dataKey) => {
  return fetch(`https://fitlit-9ss8e7vre-scottdgaines.vercel.app/api/v1/${dataFileName}`)
    .then(response => response.json())
    .then(data => data[dataKey])
  };
  
  const fetchPost = (url, initObject) => {
    return fetch(`https://fitlit-9ss8e7vre-scottdgaines.vercel.app${url}`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(initObject)
    })
      .then(response => handleErrors(response))
      .then(response => response.json())
      .catch(err => showErrorMessage())
  };

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  } else {
  return response;
  }
}

function showErrorMessage() {
 alert('There was an error!')
}

export { fetchData, fetchPost }
