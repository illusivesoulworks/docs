---
sidebar_position: 1
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Basic Inventory Management

Learn how to access and manage the Curios inventory attached to an entity.

## Overview
---
Each entity that has been assigned any number of slot types based on [entity registration](../slots/entity-register.mdx)
will automatically gain a Curios inventory, initialized with a sub-inventory for each slot type that has been assigned.
This inventory can be used for a variety of purposes, such as finding out which items are held in the inventory or
modifying the number of slots that are in each sub-inventory.

The interface for the Curios inventory can be found as `top.theillusivec4.curios.api.type.capability.ICuriosItemHandler`,
which holds all of the methods that developers can use to access and manage the inventory.

## Using the inventory
---
To begin using the inventory, developers will need to grab the instance associated with each entity. The
`top.theillusivec4.curios.api.CuriosApi` class has a `getCuriosInventory` method that can be used:
```java
Optional<ICuriosItemHandler> maybeCuriosInventory = CuriosApi.getCuriosInventory(livingEntity);
```
The query returns a `Optional` as the specified entity may not have a curios inventory. If the result is certain to
exist, then the optionality can be disregarded and simplified to:
```java
ICuriosItemHandler curiosInventory = CuriosApi.getCuriosInventory(livingEntity).get();
```

Since the method returns an `Optional` by default, developers will need to make sure to use `Optional#ifPresent` first
in order to check that the inventory actually exists:

```java
CuriosApi.getCuriosInventory(livingEntity).ifPresent(curiosInventory -> {
  // code here - with access to the inventory instance that now definitely exists
});
```

Once a developer has the `ICuriosItemHandler` instance, they can use the methods from that instance to interact with the
Curios inventory.

## Accessing the inventory
---

As mentioned previously, each slot type assigned to an entity is given a sub-inventory in the Curios inventory to
provide easy and categorical access. There are two main ways to interact with these slot inventories, depending on
whether the developer wants to access all of the slot inventories or just a particular one.

### Accessing the entire inventory

The entire Curios inventory exists as a `Map<String, ICurioStackHandler>`, with the slot type identifiers acting as each
key and the `ICurioStackHandler` acting as the inventory attached to the slot type. To access this, the `getCurios`
method can be used:

```java
Map<String, ICurioStackHandler> curios = curiosInventory.getCurios();
```
:::caution
This returns an **unmodifiable** map so attempts to change the structure of the map directly through this method, such
as adding or removing slot inventories, will not work. Any changes to the structure needs to be done through other
methods, this method is primarily for accessing the list of slot inventories on the entity.
:::

From here, developers can either iterate through the entire map:

```java
curios.forEach((identifier, slotInventory) -> {
  // code here - with the identifier and slot inventory access
})
```

Or developers can access a particular sub-inventory, such as a slot type with the `"ring"` identifier:

```java
ICurioStackHandler slotInventory = curios.get("ring");

// null check to ensure that the slot inventory exists
if (slotInventory != null) {
  // code here
}
```

However, if all a developer wants is to access a particular sub-inventory, there's a more straightforward method
outlined in the next section that can be used instead.

### Accessing an inventory for a slot type

In order to access a particular inventory for slot type, developers can either access the whole inventory as outlined
in the preceding section or skip straight to a sub-inventory for that slot type:

```java
Optional<ICurioStackHandler> slotInventory = curiosInventory.getStacksHandler("ring");
```

The above code will retrive an `Optional` for the slot inventory with the `"ring"` identifier passed into the
parameter. This is an `Optional` because the slot inventory being queried may not exist on the entity, which is a
possibility that developers must consider because higher-priority datapacks are capable of removing slot types from
entities. For that reason, be sure to use `ifPresent` before accessing the inventory:

```java
curiosInventory.getStacksHandler("ring").ifPresent(slotInventory -> {
  // code here - with access to the slot inventory with the "ring" identifier
});
```






