Feature: Ingresar a ebay

  Scenario Outline: Como usuario quiero buscar pilas

    Given I am in ebay page
    When I search for <product>
    Then I should see items results

    Examples:
      | product |
      | pilas |
