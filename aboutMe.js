const fetchData = (displayData, displayData2, displayData3) => {

    console.log("Hi, My name is Madhuri");
    setTimeout(() => {
       const data = "I am 30 years old.";
       displayData(data);
    }, 2000)

    setTimeout(() => {
        const data2 = "I was born in India but live in Sweden now.";
        displayData2(data2);
     }, 4000)

     setTimeout(() => {
        const data3 = "My hobbies are cooking, gardening and crocheting";
        displayData2(data3);
     }, 6000)
};

const displayData = (data) => {
    console.log(data);
}

const displayData2 = (data2) => {
    console.log(data2);
}

const displayData3 = (data3) =>{
    console.log(data3)

}

fetchData(displayData, displayData2, displayData3);
