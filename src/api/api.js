// const SERVER = 'http://e2fa-190-144-168-125.ngrok.io/'
const SERVER = 'https://dev.api.live.cheil.com.co'

export async function GET(url) {

  try {
    const response = await fetch(encodeURI(SERVER + url), {
      method: 'GET',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    return response.json()
  } catch (e) {
    return { "status": "catch", "success": false, "message": `${e}` };
  }
}

export async function POST(url, body) {

  try {
    const response = await fetch(encodeURI(SERVER + url), {
      method: 'POST',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    return response.json()
  } catch (e) {
    return { "status": "catch", "success": false, "message": `${e}` };
  }
}

export async function PUT(url, body) {

  try {
    const response = await fetch(encodeURI(SERVER + url), {
      method: 'PUT',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    return response.json()
  } catch (e) {
    return { "status": "catch", "success": false, "message": `${e}` };
  }
}
