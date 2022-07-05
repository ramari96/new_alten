# This is the feature file for ALTEN test

Feature: As a user, if I can search for Orange Bank in Google and report the results.

    @this
    Scenario Outline: I search for Orange Bank in Google and evaluate results
        Given I am on Google home page
        When I search for a <searchCriteria>
        Then I can check if the result is larger than 100k and not below 10k

        Examples:
            | searchCriteria |
            | Orange Bank    |

