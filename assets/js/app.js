const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
//corregi lo que tiene entre parentesis
const $n = document.querySelector('[name = "name"]');
const $b = document.querySelector('[name ="blog"]');
const $l = document.querySelector('[name ="location"]');

async function displayUser(username) { //agregue async
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  const data = await response.json();//agregue esta linea
  console.log(data);
  //modifique comillas
  $n.textContent = `${data.name}`;
  $b.textContent = `${data.blog}`;
  $l.textContent = `${data.location}`;
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`;//agregue el signop de pesos
}


displayUser('stolinski').catch(handleError);