---
sidebar_position: 4
---

# Assigning Slots

A tutorial on how to assign items to slot types so that they can be equipped.

## Overview
---
By default, items are assigned to slot types based on their item tags. For example, a `ring` slot type would accept any
item that is part of the `curios:ring` item tag. To find out more about item tags and their uses, please see the
[Minecraft wiki page](https://minecraft.wiki/w/Tag#Items).

More broadly speaking, item assignments are based on the `validators` field from each slot type, more information can be
found on the overview for [slot types](../slots/slot-register.md). Each of these validators is a predicate, a function
that takes a `SlotContext` and `ItemStack` and returns either true or false, and each predicate is registered through
the Curios API with a specific `ResourceLocation`. The reason that the default is to accept relevant item tags is
because, unless otherwise defined, each slot type uses an in-built validator called `curios:tag` that tells it to accept
any item that has its relevant tag.

## Item Tags
---
Without defining validators, the default behavior is for slot types to accept any item that has its relevant item tag,
which is always of the format `curios:identifier` with the identifier of the slot type in the place of `identifier`.

The sole exception is the special `curio` slot type, which is designed to accept any item that fits into any of the
other slot types. Conversely, any item that is tagged with `curios:curio` can be inserted into any slot type.

Item tags are defined through datapacks. If a user or developer is unfamiliar with datapacks, it is recommended to read
through the [Minecraft wiki page](https://minecraft.wiki/w/Data_pack) in order to understand the concept and structure
before proceeding to the rest of this page.

### Example

Inside the datapack, there should be a path of folders that looks like `data/curios/tags/items`. At the end of this,
inside the `items` folder, is where the item tag data file should go. The name of the file should be the same as the
name of the identifier of the slot type that the item(s) should go in and the format should be `.json`. For this
example, the `ring` slot type will be used.

The path should now look like `data/curios/tags/items/ring.json`. The inside of the `ring.json` file should look like:
```json
{
  "replace": false,
  "values": []
}
```

The `replace` field should usually be set to false. It can be set to true instead if the items listed in this file are
the **only** items that should fit into the slot type, as it causes this file to overwrite any previous entries from
lower-priority datapacks.

The `values` field contains the list of items that should go into the slot. For this example, diamonds and emeralds
will be tagged:

```json
{
  "replace": false,
  "values": ["minecraft:diamond", "minecraft:emerald"]
}
```

Now all diamonds and all emeralds should have a tooltip that reads `Slot: Ring`, which indicates that they can now go
into the `ring` slot type if available.

### Removing Values

Items can also be removed from item tags instead of added. This is useful for situations where it is necessary to move
an item from one slot type to another and the original slot type should no longer accept the item. In this case,
there is a `remove` field that can be used to list an array of items that should be removed from the slot type.

```json
{
  "replace": false,
  "values": [],
  "remove": ["minecraft:diamond"]
}
```

In the example above, diamonds will be removed from the slot type associated with the item tag and no longer be
considered valid for equipping into that slot type (provided that the slot type itself is using the default behavior of
validating based on item tags).

## Validators
---
For more precise slot type assignments, validators can be used instead. Validators exist as a field on each slot type
and consist of an array of `ResourceLocation` entries that refer to predicates registered through
`CuriosApi#registerPredicate(ResourceLocation, Predicate<SlotResult>)`. The field can be changed through slot data files
in a datapack, as described in the [slot types page](../slots/slot-register.md).

There are three native validators registered by Curios for use:

1. `curios:all` - Returns true for all items (note: ***all*** items)
2. `curios:none` - Returns false for all items
3. `curios:tag` - Returns true for all items in the `curios:identifier` item tag, with `identifier` being the identifier
of the slot type

All [preset slot types](../slots/preset-slots.md) use `curios:tag` as one of the validators by default, and any slot
type that doesn't have any validators defined will automatically initialize with `curios:tag`.

In order to register a predicate and use a custom validator, developers will need to call
`CuriosApi#registerPredicate(ResourceLocation, Predicate<SlotResult>)`:

```java
CuriosApi.registerPredicate(new ResourceLocation("examplemod", "my_predicate"), (slotResult) -> {
  // contents of the predicate here - return true or false    
});
```

This can be registered anywhere, but should be done before server loading as that's when the data is needed.

:::tip
The `SlotResult` object used in the predicate is a record consisting of a `SlotContext` and an `ItemStack`. Therefore,
predicates can return true or false based on either/both the slot context and the item stack involved. However, the
slot context does not always contain all the information. For example, validating potential slot types while looking
at an item's tooltip will only pass in the slot identifier and the entity because all other information is not yet
available in that case.
:::

Once a predicate is defined, it can then be referenced in the slot data files:

```json
{
  "validators": ["examplemod:my_predicate"]
}
```
