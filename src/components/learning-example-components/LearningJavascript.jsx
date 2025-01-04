const person = {
    name: "Hemanth",
    address: {
        line1: "Attur Layout Yelahanka",
        city: 'Banglore',
        country: 'India',

    },
    profiles : ['twitter','instagram','linkedin'],
    printProfile: () => {
        person.profiles.map( profile => { console.log(profile)} )
    }

}

export default function LearningJavascript(){
    return (
        <>
        <div>{person.name}</div>
        <div>{person.address.line1}</div>
        <div>{person.profiles[0]}</div>
        <div>{person.printProfile()}</div>
        </>
    );
}