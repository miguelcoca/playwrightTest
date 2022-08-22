@P1
Feature: Playwright wabsite
  As a user I want to be able to toggle between themes

  Background: browse to home page
    Given I browse to the playwright website

  @regression
  Scenario Outline: Changing theme to <theme> mode
    When I change the theme to "<theme>" mode
    Then I see the background color "<color>"
    And Snapshot "theme <theme>"

    Examples:
      | theme | color              |
      | light | rgb(255, 255, 255) |
      | dark  | rgb(36, 37, 38)    |

  @regression
  Scenario: browse to docs section
    When I select docs link
    Then I see the "Installation" title
    And url contains "docs/intro"