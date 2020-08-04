// Imagine a function, createAudioFileAsync(), which asynchronously generates a sound file given a configuration record and two callback functions, one called if the audio file is successfully created, and the other called if an error occurs.



function successCallback(result) {
    console.log('Audio file ready at URL :' + result);
}

function failurCallback(error) {
    console.log('Error generating audio file' + error);
}

//old way(without promise)
CreateAudioFileAsync(audioSettings, successCallback, failurCallback);

//with promise 
createAudioFileAsync(audioSettings).then(successCallback, failureCallback);