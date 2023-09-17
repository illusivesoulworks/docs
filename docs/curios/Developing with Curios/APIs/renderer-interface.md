---
sidebar_position: 1
---

# `ICurioRenderer`

## Methods

* [Reference](#reference)
  * [render()](#render)
  * [static translateIfSneaking()](#static-translateifsneaking)
  * [static rotateIfSneaking()](#static-rotateifsneaking)
  * [static followHeadRotations()](#static-followheadrotations)
  * [static followBodyRotations()](#static-followbodyrotations)

## Reference

### `render()`
---
Runs the rendering code when an associated item is equipped in a curio slot and the visibility of the rendering is
enabled. An equipped cosmetic item will override the rendering of its related functional item.

**Parameters:**

|Name|Type|Description|
|-----------|-----------|-----------|
|`stack`|`ItemStack`|`ItemStack` being rendered|
|`slotContext`|`SlotContext`|`SlotContext` for the slot with the `ItemStack` being rendered|
|`poseStack`|`PoseStack`|`PoseStack` passed from the parent `RenderLayer`|
|`renderLayerParent`|`RenderLayerParent`|`RenderLayerParent` passed from the parent `RenderLayer`|
|`light`|integer|Light value|
|`limbSwing`|float|Limb swing value|
|`limbSwingAmount`|float|Limb swing amount value|
|`partialTicks`|float|Partial ticks value|
|`ageInTicks`|float|Age in ticks value|
|`netHeadYaw`|float|Net head yaw value|
|`headPitch`|float|Head pitch value|

### `static translateIfSneaking()`
---
Applies a translation to the given `PoseStack` if the given `LivingEntity` is crouching. This is called to have the
render appropriately adjust its positioning up or down based on the crouching status of the entity.

**Parameters:**

|Name|Type|Description|
|-----------|-----------|-----------|
|`poseStack`|`PoseStack`|`PoseStack` passed from the parent `RenderLayer`|
|`livingEntity`|`LivingEntity`|`LivingEntity` to check `isCrouching()`|

### `static rotateIfSneaking()`
---
Applies a rotation to the given `PoseStack` if the given `LivingEntity` is crouching. This is called to have the
render appropriately adjust its rotations based on the crouching status of the entity. Specifically, these rotations
are based on the body/torso rotations of the entity.

**Parameters:**

|Name|Type|Description|
|-----------|-----------|-----------|
|`poseStack`|`PoseStack`|`PoseStack` passed from the parent `RenderLayer`|
|`livingEntity`|`LivingEntity`|`LivingEntity` to check `isCrouching()` and rotate around|

### `static followHeadRotations()`
---
Applies rotations to the given `ModelPart`s based on the given `LivingEntity` and its head rotations. This is called to
render the model parts in alignment with the entity's head. This does nothing if the entity's renderer does not
implement `LivingEntityRenderer` or if the model does not have a head inherited from the `HumanoidModel` class.

**Parameters:**

|Name|Type|Description|
|-----------|-----------|-----------|
|`livingEntity`|`LivingEntity`|`LivingEntity` to align the rotations around|
|`modelParts`|`ModelPart...`|List of model parts to align to the head movement|

### `static followBodyRotations()`
---
Applies rotations to the given `HumanoidModel`s based on the given `LivingEntity` and its rotations. This is called to
render the model parts in alignment with the entity's movements, such as their leg and arm movements when walking or
interacting with objects.

**Parameters:**

|Name|Type|Description|
|-----------|-----------|-----------|
|`livingEntity`|`LivingEntity`|`LivingEntity` to align the rotations around|
|`models`|`HumanoidModel...`|List of model parts to align to the body movement|