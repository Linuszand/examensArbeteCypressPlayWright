Feature: Test

    Background: Visit site
        Given I have visited "http://127.0.0.1:5500/index.html"

    Scenario: Dead end
        Given I've clicked the button "#right"
        When I click the button "#right" again
        Then I should see the text "You've already been here, stahp it."

    Scenario: Castle of stone
        Given I've clicked the button "#up"
        When I click the button "walk across"
        When I click the button "castle of stone"
        Then I should see the text "As you arrive before the ancient castle, its formidable presence looms large against the backdrop of the desolate landscape. The walls, dark as the night itself, stand tall and imposing, their surface gleaming dully in the subdued light of the overcast sky. You decide to:"


    Scenario: Enter castle of wood
        Given I've clicked the button "#up"
        When I click the button "walk across"
        When I click the button "castle of wood"
        When I click the button "enter"
        Then I should see the text "As you enter the wooden castle, your gaze is immediately drawn to the black knight standing on the second level above the staircase. Its presence ominous, its armor gleaming darkly in the dim light. There are multiple pathways possible from here, you decide to:"

    Scenario: Game over sleeping troll
        Given I've clicked the button "#left"
        When I click the button "continue"
        Then I should see the text "GAME OVER"

    Scenario: Game over bridge death
        Given I've clicked the button "#up"
        When I click the button "walk across"
        When I go back and forth until lives equals zero
        Then I should see the image "game-over.jpg"

    Scenario: Game over black knight
        Given I've clicked the button "#up"
        When I click the button "walk across"
        When I click the button "castle of wood"
        When I click the button "enter"
        When I click the button "go up"
        Then I should see the image "game-over.jpg"

