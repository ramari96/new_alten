/**
 * This file exports helper functions that aim to complete tasks
 * that are not related to page objects or assertions. 
 */

export const helper = { 

    /**
     * This function is used to split any number with ',' and parse it into an integer 
     * @param {string,number} number 
     * @returns an integer 
     */
    decimalToInt(number) {
        number = number.split(',');
        return parseInt(number.join(''));
    },

    /**
     * 
     * @param {string} text 
     * @param {int} position 
     * @returns the string at the desired position after the partition 
     */
    getWantedPosition(text,position){
        let parted = text.split(' ');
        return parted[position-1];
    }
}