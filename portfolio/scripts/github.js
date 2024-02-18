getGitHub = async (url) => {
    let response;

    try {
        response = await fetch(url);
        if (!response.ok) {
            throw new Error("Unable to fetch a response (network not ok)");
        }

        return response.json();
    } catch (error) {
        console.error("There was a problem while pulling the GitHub information", error);
        throw error;
    }
};

getRepoList = async (repoUrl) => {
    let repoObject = await getGitHub(repoUrl);

    repoObject.forEach((repo, index) => {
        let dt = document.createElement("dt");
        let dd = document.createElement("dd");
        let div = document.createElement("div");

        dt.innerHTML = `<a href="${repo.html_url}" target="_blank">${repo.name}</a>`;
        dd.textContent = repo.description;
        div.setAttribute("class", "dl-pair")
        div.setAttribute("id", `pair${index}`)

        document.getElementById("repo-list").appendChild(div)
        document.getElementById(`pair${index}`).appendChild(dt);
        document.getElementById(`pair${index}`).appendChild(dd);
    })
}

async function main() {
    const login = 'YeeClaw';
    const apiUrl = `https://api.github.com/users/${login}`;

    try {
        const githubAccountData = await getGitHub(apiUrl);

        let avatar = document.getElementById("avatar");
        let name = document.getElementById("name");
        let bio = document.getElementById("bio");

        avatar.setAttribute("src", githubAccountData.avatar_url);
        name.innerHTML = githubAccountData.name;
        bio.innerHTML = githubAccountData.bio;
    } catch (error) {
        console.error("Error fetching GitHub data:", error);
    }

    try {
        await getRepoList(`https://api.github.com/users/${login}/repos`);
    } catch (error) {
        console.error("There was an issue finding the repositories")
    }
}

main();