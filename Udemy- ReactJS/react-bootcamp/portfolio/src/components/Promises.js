import React, { Component } from "react";

class Promises extends Component {

    testAsynchronousFunction = () => { 
        // SetTimeout is asynchronous funtion and running in background and will execute after 2 seconds
        setTimeout(() => {
            console.log('Bears');
        }, 2000)
    
        // console.log statements will execute first in the order without any delay
        console.log('TestAsynchronousFunction => \nBeets');
        console.log('Battlestar Galactica');
    }

    testFetchPromises = () => { 
        // Fetch method use the promise under the hood and promise allows to use the results of fetch() once is available. 
        // The fetch is actually resolve() the values for then() handler

        new Promise(resolve => {
            // Wait until timeout funtion not prints the console.log statement
            setTimeout(() => {
                console.log('\nTestFetchPromises => \nBears');
                resolve();
            }, 2000)
        })
        .then( () => {
            console.log('Beets');
            console.log('Battlestar Galactica');
        });
    }

    testPromisesWith = () => { 
        // Wait until timeout funtion not resolves the message for then handler
        new Promise((resolve, reject) => {
            return reject(new Error('No Bears'));
            resolve('\nTestPromisesWith => \nBears, Beets, Battlestar Galactica');
        })
        .then((result) => {
            console.log(result);
        })
        .catch(error => console.log('error', error));
    }

    render() {
        this.testAsynchronousFunction();
        this.testFetchPromises();
        this.testPromisesWith();
        return (
            <div></div>
        )
    }
}
export default Promises;
