---
sidebar_position: 3
---

# Categorizing Food to Groups

Food classification into groups is done through item tags.

Please see the general overview of the tag system at [the Minecraft wiki](https://minecraft.gamepedia.com/Tag).

The tags follow the format `diet:[group name]`.

## Special Tags

### `diet:ingredients`

Adding items to this tag prevents the item from contributing its food groups as a crafting component of other items. This is useful for adding foods that may have food groups themselves but should not contribute to any other item's food groups, such as condiments or seasoning that conceptually do not add enough to a food item to also add its food groups.

Note that this tag is only useful if Diet's default value generator is turned on in the configuration options. Otherwise, food groups rely solely on the item's tagging information rather than its crafting components.

### `diet:special_food`

Adding items to this tag forcibly adds food groups to the item regardless of whether it is considered edible or not. This is useful for items like cakes that are essentially blocks that proxy food items only when placed and interacted with. The cake itself is not edible but it should still provide information about its food groups, so it should be placed in this tag in addition to its food group tags in order to provide that information. The tooltip for such foods will only display its food groups and not the value provided (since such information cannot be obtained directly from the item itself).

## Guided Walkthrough

### Creating a data pack

In order to begin, we'll need to create a data pack first of all. Navigate to the world save in your Minecraft root folder, probably at `.minecraft/saves/(world-name)` and then navigate to the datapacks folder (or create one if it's not already there). If you're not using any data packs, this folder will be empty. Create a new folder for your data pack, call it anything you want. Then go into that folder, so you should be in `.minecraft/saves/(world-name)/datapacks/(datapack-name)`.

Once you're inside, create a `pack.mcmeta` file, named exactly like that. Open the file and fill it with this:
```
{
  "pack": {
    "pack_format": 6,
    "description": "put a description here, or not"
  }
}
```
Once you're done, save it. You should be back at the data pack's root folder at `.minecraft/saves/(world-name)/datapacks/(datapack-name)`. Now we're going to build out a few nested folders. Create a new folder in here named `data`, then another folder in `data` called `diet`, then another folder in `diet` called `tags`, then another in `tags` called `items`.

By this point, you should be in the `.minecraft/saves/(world-name)/datapacks/(datapack-name)/data/diet/tags/items` folder. That's it for the folder structure.

### Creating a tag file

Now create a new file here called `(insert group name here).json`. If you're adding to a group called `fruits`, we would name it `fruits.json`. It's very important that the name matches the name of the group.

In this file, type this:
```
{
  "replace": false,
  "values": []
}
```
This is the basic structure for a tag file. `replace` dictates whether you're just adding tags or completely overriding tags. I recommend leaving this at `false` unless you know what you're doing. `values` is the property you're most interested in. This is where you list alllll of the items that you want to add to the group. For example, if you'd like to add an item called `"examplemod:bacon"`:
```
{
  "replace": "false",
  "values": ["examplemod:bacon"]
}
```
You can put as many values as you want here, but they must all be comma separated inside the brackets. Like so:
```
{
  "replace": "false",
  "values": ["examplemod:bacon", "examplemod:cheese"]
}
```
If you do not know the registry name of the item you want to add, you can see it in-game by using F3+H to activate advanced tooltips and hovering over the item.

If you want to **remove** items from a tag, Forge provides an additional `remove` array for the json file:
```
{
  "replace": "false",
  "values": ["examplemod:bacon", "examplemod:cheese"],
  "remove": ["examplemod:fish"]
}
```

You can verify that you've added the item in properly by looking at the item's tooltip because the item will list the food groups they belong in.

And that's it! If you have any questions or need help troubleshooting, please feel free to contact the developer directly.
