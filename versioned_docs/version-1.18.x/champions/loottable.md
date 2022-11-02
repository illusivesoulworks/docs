---
sidebar_position: 5
---

# Loot

All champions get their drops from the Champions loot table, which is enabled when the `lootSource` configuration value in the
`champions-server.toml` configuration file is set to either `"LOOT_TABLE"` or `"CONFIG_AND_LOOT_TABLE"`.

:::info
This page does not go over how to set up loot tables in general, it's assumed that the reader has basic knowledge about how to
create and configure loot tables. If this is not the case, please refer to [this page](https://minecraft.fandom.com/wiki/Loot_table)
first for an introduction.
:::

## Default Loot Table
---
By default, Champions provides the following loot table:
```json title="champion_loot.json"
{
  "pools": [
    {
      "name": "tier#1",
      "rolls": 1,
      "entries": [
        {
          "type": "item",
          "name": "minecraft:book",
          "weight": 1,
          "conditions": [
            {
              "condition": "champions:champion_properties",
              "entity": "this"
            },
            {
              "condition": "killed_by_player"
            }
          ],
          "functions": [
            {
              "function": "enchant_randomly"
            }
          ]
        }
      ]
    },
    {
      "name": "tier#2",
      "rolls": 1,
      "entries": [
        {
          "type": "item",
          "name": "minecraft:book",
          "weight": 1,
          "conditions": [
            {
              "condition": "champions:champion_properties",
              "entity": "this",
              "tier": {
                "min": 2
              }
            },
            {
              "condition": "killed_by_player"
            }
          ],
          "functions": [
            {
              "function": "enchant_randomly"
            }
          ]
        }
      ]
    },
    {
      "name": "tier#3",
      "rolls": 1,
      "entries": [
        {
          "type": "item",
          "name": "minecraft:book",
          "weight": 1,
          "conditions": [
            {
              "condition": "champions:champion_properties",
              "entity": "this",
              "tier": {
                "min": 3
              }
            },
            {
              "condition": "killed_by_player"
            }
          ],
          "functions": [
            {
              "function": "enchant_randomly"
            }
          ]
        }
      ]
    },
    {
      "name": "tier#4",
      "rolls": 1,
      "entries": [
        {
          "type": "item",
          "name": "minecraft:book",
          "weight": 1,
          "conditions": [
            {
              "condition": "champions:champion_properties",
              "entity": "this",
              "tier": {
                "min": 4
              }
            },
            {
              "condition": "killed_by_player"
            }
          ],
          "functions": [
            {
              "function": "enchant_randomly"
            }
          ]
        }
      ]
    }
  ]
}
```

The result is that killing a champion drops a book with a random enchantment, dropping an additional book for each higher rank.

## Loot Condition
---
In order to specify loot drops for champions, Champions provides a new loot condition: `"champions:champion_properties"`.

With this, loot tables can provide conditions for loot drops and specify various properties from Champions such as champion
rank or affixes that need to be present.

The condition can be added as part of a loot entry's `"conditions"` array:
```json
"conditions": [
  {
    "condition": "champions:champion_properties",
	"entity": "this"
  }
]
```

The condition, without any other parameters, will pass for any champion entity.

### Fields

With additional fields, conditions can be further narrowed down depending on the specific rank or affixes on the champion entity.

* **tier**: The tier of the rank of the champion entity. Can be an integer or an object with the following structure:
	* **min**: The minimum tier of the rank of the champion entity. Must be equal to or lower than **max**. If absent, there is no minimum.
	* **max**: The maximum tier of the rank of the champion entity. Must be equal to or higher than **min**. If absent, there is no maximum.
* **affixes**: The affixes on the champion entity. Can be a list of affix identifiers as strings or an object with the following structure:
	* **values**: A list of affix identifiers for affixes on the champion entity.
	* **matches**: The number of affixes from the **values** list that need to be present. If absent, only one of the affixes from the list need to be present to pass. Can be an integer or an object with the following structure:
	    * **min**: The minimum number of affixes that need to match. If absent, there is no minimum.
		* **max**: The maximum number of affixes that need to match. If absent, there is no maximum.
	* **count**: The number of affixes on the champion entity. If absent, any number of affixes will pass. Can be an integer or an object with the following structure:
		* **min**: The minimum number of affixes that need to be present. If absent, there is no minimum.
		* **max**: The maximum number of affixes that need to be present. If absent, there is no maximum.

:::tip
The **entity** field is the same as the one used for vanilla loot contexts. For further information, please refer to the `"entity"` section
of [this page](https://minecraft.fandom.com/wiki/Loot_table#Loot_context_types).
:::

## Examples
---
A condition that will pass if the champion entity is tier 3 or above:
```json
"conditions": [
  {
    "condition": "champions:champion_properties",
	"entity": "this",
	"tier": {
	  "min": 3
	}
  }
]
```

A condition that will pass if the champion entity is tier 2 and has either the Enkindling affix or the Hasty affix:
```json
"conditions": [
  {
    "condition": "champions:champion_properties",
	"entity": "this",
	"tier": 2,
	"affixes": ["enkindling", "hasty"]
  }
]
```

A condition that will pass if the champion entity is between tier 1 and 3, and has the Arctic affix, and has at least 3 total affixes:
```json
"conditions": [
  {
    "condition": "champions:champion_properties",
	"entity": "this",
	"tier": {
	  "min": 1,
	  "max": 3
	},
	"affixes": {
	  "values": ["arctic"],
	  "count": {
	    "min": 3
	  }
	}
  }
]
```
