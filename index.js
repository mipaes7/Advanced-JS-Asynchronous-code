//RESUELVE TUS EJERCICIOS AQUI

const getAllBreeds = async () => {

    try {
        const resp = await fetch('https://dog.ceo/api/breeds/list/all', { method: "GET" });

        if (resp.ok) {
            const data = await resp.json();
            const arr = [];
            for (let key in data.message) {
                arr.push(key);
            }
            return arr;
        } else {
            throw resp;
        }
    } catch (error) {
        console.log(error.status);
    }
}


const getRandomDog = async () => {

    try {
        const resp = await fetch('https://dog.ceo/api/breeds/image/random', { method: "GET" });

        if (resp.ok) {
            const data = await resp.json();
            return data.message;
        } else {
            throw resp;
        }
    } catch (error) {
        console.log(error.status)
    }
}

const getAllImagesByBreed = async () => {

    try {
        const resp = await fetch('https://dog.ceo/api/breed/komondor/images', { method: "GET" });

        if (resp.ok) {
            const data = await resp.json();
            const arr = [];
            for (let key in data.message) {
                arr.push(data.message[key]);
            }
            return arr;
        } else {
            throw resp;
        }
    } catch (error) {
        console.log(error.status)
    }
}

const getAllImagesByBreed2 = async (breed) => {

    try {
        const resp = await fetch(`https://dog.ceo/api/breed/${breed}/images`, { method: "GET" });

        if (resp.ok) {
            const data = await resp.json();
            const arr = [];
            for (let key in data.message) {
                arr.push(data.message[key]);
            }
            return arr;
        } else {
            throw resp;
        }
    } catch (error) {
        console.log(error.status);
    }

}

const getGitHubUserProfile = async (username) => {

    try {
        const resp = await fetch(`https://api.github.com/users/${username}`, { method: "GET" });
        if (resp.ok) {
            const data = await resp.json();
            return data;
        } else {
            throw resp;
        }
    } catch (error) {
        console.log(error.status);
    }

}


const printGithubUserProfile = async (username) => {

    try {
        const resp = await fetch(`https://api.github.com/users/${username}`, { method: "GET" });

        if (resp.ok) {
            const data = await resp.json();
            // const pintarContainer = document.querySelector('body');
            // pintarContainer.innerHTML = pintarContainer.innerHTML + `<img src="${data.avatar_url}">` + `<p>${data.name}</p>`;
            return data;
        } else {
            throw resp;
        }
    } catch (error) {
        console.log(error.status);
    }
}

const getAndPrintGitHubUserProfile = async (username) => {
    try {
        const resp = await fetch(`https://api.github.com/users/${username}`, { method: "GET" });

        if (resp.ok) {
            const data = await resp.json();
            console.log(data);
            return `<section><img src="${data.avatar_url}" alt="${data.name}"><h1>${data.name}</h1><p>Public repos: ${data.public_repos}</p></section>`;
        } else {
            throw resp;
        }
    } catch (error) {
        console.log(error.status);
    }
}

const userNames1 = ['octocat', 'alenriquez96', 'alejandroereyesb'];
const realNames = ['The Octocat', 'Alberto Enríquez', 'Alejandro Reyes'];

const fetchGithubUsers = async (userNames) => {

    let arr = userNames.map(async (username) => {
        try {
            const resp = await fetch(`https://api.github.com/users/${username}`, { method: "GET" });

            if (resp.ok) {
                const data = await resp.json();
                return data;
            } else {
                throw resp;
            }
        } catch (error) {
            console.log(error.status);
        }
    })

    let result = await Promise.all(arr);
    return result;
}
