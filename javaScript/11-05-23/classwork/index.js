const bridgeClassObject = {
    batchA: {
        male : {
            name1: "Remi",
            name2: "Ola-Oluwa",
            name3: "Haroun",
            name4: "Samuel",
            name5: "AbdulSobur"
        },
        female : {
            name1: "Aisha",
            name2: "Fadellah",
            name3: "Kafayat",
            name4: "Deborah",
            name5: "Ireoluwa"
        }
    },
    batchB: {
        male : {
            name1: "Lekan",
            name2: "Micheal",
            name3: "Akinremi",
            name4: "Ayanfe",
            name5: "Iregbogbo"
        },
        female: {
            name1: "Azeezat",
            name2: "Dorcas",
            name3: "Yetunde",
            name4: "Karimat",
            name5: "Dara"
        }
    }  
}

maleBatchB = bridgeClassObject.batchB.male.name3

console.log(bridgeClassObject.batchB.male);

document.getElementById("text").innerHTML = maleBatchB

const bridgeClassArray = {
    batchA: {
        male : [
            "Remi",
            "Ola-Oluwa",
            "Haroun",
            "Samuel",
            "AbdulSobur"
        ],
        female : [
            "Aisha",
            "Fadellah",
            "Kafayat",
            "Deborah",
            "Ireoluwa"
        ]
    },
    batchB: {
        male : [
            "Lekan",
            "Micheal",
            "Akinremi",
            "Ayanfe",
            "Iregbogbo"
        ],
        female: [
            "Azeezat",
            "Dorcas",
            "Yetunde",
            "Karimat",
            "Dara"
        ]
    }  
}

femaleBatchA = bridgeClassArray.batchA.female

console.log(bridgeClassArray.batchA.female);

document.getElementById("text").innerHTML = femaleBatchA