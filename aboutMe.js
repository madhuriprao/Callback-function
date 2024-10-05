const fetchData = (displayAge, displayPlace, displayHobbies) => {
    console.log("Hi, My name is Madhuri");
    
    setTimeout(() => {
       const ageData = "I am 30 years old.";
       displayAge(ageData);
    }, 2000)

    setTimeout(() => {
        const placeData = "I was born in India but live in Sweden now.";
        displayPlace(placeData);
     }, 4000)

     setTimeout(() => {
        const  hobbiesData = "My hobbies are cooking, gardening and crocheting";
        displayHobbies(hobbiesData);
     }, 6000)
};

const displayAge = (ageData) => {
    console.log(ageData);
}

const displayPlace = (placeData) => {
    console.log(placeData);
}

const displayHobbies = (hobbiesData) =>{
    console.log(hobbiesData)

}

fetchData(displayAge, displayPlace, displayHobbies);
