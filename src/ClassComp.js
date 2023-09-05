import React, { Component } from 'react';

class ClassComp extends Component {

    getFactors(num) {
        let factors = [];
        for (let i = 1; i <= num; i++) {
            if (num % i === 0) {
                factors.push(i);
            }
        }
        return factors;
    }

    render() {
        const num = this.props.num;
        const factors = this.getFactors(num);

        return (
            <div>
                <h3>Factors of {num}:</h3>
                {factors.join(', ')}
            </div>
        );
    }
}

export default ClassComp;