import { expect as chaiExpect } from 'chai';

const UPPER_LIMIT = 100000;
const LOWER_LIMIT = 10000;

/**
 * All assertions go here so that they can be used by different tests accordingly
 */
export const assertions = {

    /**
     * Takes a number and verifies if satisfies a condition.
     * @param {number} actualNumber 
     */
    expectBetween : (actualNumber) => {
        chaiExpect(actualNumber).to.satisfy(function(actualNumber){
            return actualNumber > UPPER_LIMIT && !(actualNumber < LOWER_LIMIT)
        },`The number ${actualNumber} is not greater than ${UPPER_LIMIT} and is below ${LOWER_LIMIT}`)
    }
}