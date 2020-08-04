//instantiate Github class
const github = new Github;

//instantiate UI class
const ui = new UI;

//search input
const searchUser = document.getElementById('searchUser');

//search input Eventlistener
searchUser.addEventListener('keyup', e => {
    const userText = e.target.value;

    //make sure its not blank
    if (userText !== '') {
        // make http call
        github.getUser(userText)
            .then(data => {
                if (data.profile.message === 'Not found') {
                    //show alert
                } else {
                    ui.showProfile(data.profile);
                }
            })
    } else {
        // clear profile
    }
});