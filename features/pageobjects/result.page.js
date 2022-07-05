import Page from './page';
import {assertions} from '../../utils/assertions';
import { helper } from '../../utils/helpers';

const {
    expectBetween
} = assertions;

const {
    decimalToInt,
    getWantedPosition
} = helper;

/**
 * Page object class for Google's Result Page 
 */
class ResultPage extends Page {

    /* Selectors  */

    get result() { return $('#result-stats')}
    
    /**
     * Gets the search result text and converts it into a number with 
     * the help of some helper functions (to better understand these functions refer to the
     * helpers file)
     */

    async getResult() {
        let originalResult = await this.result.getText();
        originalResult = getWantedPosition(originalResult,2);
        return decimalToInt(originalResult);
    }

    /**
     * Using Chai expect it verifies whether the number falls in the 
     * desired range.
     */
    async evaluateResult() {
        expectBetween(await this.getResult());
    }

}

export default new ResultPage();