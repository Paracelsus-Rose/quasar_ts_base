---
to: <%= directories.models %>/<%= modelPascal %>/<%= modelPascal %>Schema.json
---
{
  "entity": "<%= modelSnakePlural %>",
  "pascalName": "<%= modelPascal %>",
  "color": "grey",
  "fields": {
    "something": {
      "dataType": "String",
      "label": "Something"
    },
    "some_number": {
      "dataType": "Number",
      "label": "Some Number"
    }
  }
}
