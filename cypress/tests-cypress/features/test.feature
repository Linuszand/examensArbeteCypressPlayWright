Feature: Test

    Background: Visit site
        Given I have visited "http://127.0.0.1:5500/index.html"

    Scenario: Game over
        Given I've clicked the button "#left"
        When I click the button "#continue"
        Then I should see the text "GAME OVER"

    Scenario: Dead end
        Given I've clicked the button "#right"
        When I click the button "#right" again
        Then I should see the text "You've already been here, stahp it."

    Scenario: Castle of Stone
        Given I've clicked the button "#up"
        When I click the button "#walk-across"
        When I click the button "#the-body > :nth-child(4)"
        Then I should see the text "As you approach the stone castle, its imposing silhouette rises against the backdrop of the dusky sky, standing as a sentinel of ancient grandeur. The outer walls, weathered by time and bearing the scars of countless battles, loom high above you, adorned with moss and ivy that cling tenaciously to the rugged stone surface. You decide to:"
        