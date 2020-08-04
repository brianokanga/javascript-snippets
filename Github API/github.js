class Github {
    constructor() {
        this.client_id = 'f3f30f9f9a3044aba33a';
        this.client_secret = 'a715610aabe41a75c5d9685a8310fa9eebb69e42';
    }
    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}