---
sidebar_position: 13
---

# Configuration

Curios has various configuration files that can be used to change settings related to the user interface, curios
behavior, and more.

## Slot Configuration

Although the datapack method described in the [slot types](./slots/slot-register.md) page is the recommended method for
all consumers, users who are not familiar with datapacks or do not need the features of the format are able to create
and modify slots through the Curios configuration file.

This configuration is located in the `curios-common.toml` configuration file found in the `config` folder of the user's
root Minecraft instance.

```toml
#List of slots to create or modify.
slots = []
```

The slots list will be empty at first. Users can define a slot entry by inputting a string entry into the array. All
slots that are defined in this setting will automatically be assigned to players if they are not already assigned.

:::note
This setting is loaded server-side only and synced to clients. Servers can change this setting without updating clients
and clients will receive the proper slots upon joining.
:::

### Syntax

Each entry must include an `id` field that represents the identifier of the slot type, and fields in the entry must be
separated by semicolons. The following fields are available for use through the configuration file:

#### **id** (string, *required*)
The identifier for the slot type to create or modify.

#### **size** (integer)
The number of slots of this slot type to give by default.

#### **operation** (`"SET"`\|`"ADD"`\|`"REMOVE"`)
Whether to use `size` to set, add, or remove from the total number of slots.

#### **order** (integer)
The order the slots will appear in the native Curios GUI, lower numbers appear first.

#### **icon** (string)
The location of the icon to use for the slot type.

#### **add_cosmetic** (boolean)
Whether to add a corresponding cosmetic (renderable but non-functional) slot for each slot in this slot type.

#### **use_native_gui** (boolean)
When `false`, does not add the slot type to the native Curios GUI.

#### **render_toggle** (boolean)
When `false`, does not allow the slot type to toggle its rendering.

#### **drop_rule** (`"DEFAULT"`\|`"ALWAYS_DROP"`\|`"ALWAYS_KEEP"`\|`"DESTROY"`)
Whether to drop, keep, destroy, or follow the `keepCurios` configuration setting.

### Example

```toml
slots = ["id=ring;size=10", "id=charm;size=3;add_cosmetic=true"]
```

This setting will create or modify two slot types, `"ring"` and `"charm"`, and assign both of them to all players. The
ring slot type will be created at size 10, and the charm slot type will be created at size 3 while also adding cosmetic
slots for them. These settings will override any settings from the datapack configurations as described in the main
[slot types page](./slots/slot-register.md).
