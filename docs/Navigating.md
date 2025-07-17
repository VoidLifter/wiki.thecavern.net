---
sidebar_position: 2
slug: /navigating
title: Navigating The Server
---

import RTP_Parrot from './assets/img/Navigating/rtp_parrot.png';
import RTP_GUI from './assets/img/Navigating/rtp_gui.png';
import Warp_GUI from './assets/img/Navigating/warp_gui.png';
import Outpost_List from './assets/img/Navigating/outpost_list.png';
import GPS_Pylon from './assets/img/Navigating/gps_pylon.png';
import Elevator_Plate from './assets/img/Navigating/elevator_plate.png';
import Elevator_Plate_Alternate from './assets/img/Navigating/elevator_plate_alternate.png';
import WarpPad_Use from './assets/img/Navigating/warppad_use.gif';
import SquareMap from './assets/img/Navigating/squaremap.png';

## Server Warp
Server warp is a way to teleport to server designated places like spawn, leaderboard, and other places. To use this you can simply do `/warp`.

<div align="center">
<img src={Warp_GUI} alt="Warp GUI" height="360" style={{ padding: '0 1rem' }}/>
</div>

---

## Random Teleport
Just like what the name explained, random teleport allows you to teleport to a random place in certain worlds. You access this command with `/rtp` or `/wild`.

|Command|Description|
|-|-|
|`/rtp`|Randomly Teleport|

<div align="center">
<img src={RTP_Parrot} alt="RTP Parrot" height="420" style={{ padding: '0 1rem' }}/>
</div>

---

## PlayerWarp
Playerwarp is a feature that allows players to set their own custom warp points, which other players can then use to teleport directly to those locations, making it easy to travel to favorite spots or personal bases within the game. To open the playerwarp menu, you can use the command `/pw` or you can also visit a specific player warp using `/pw <warp>`. To create a playerwarp you can simply do `/pw set <name>` and it will set a playerwarp in your current location. Each player has a limited amount of player warp they can set, the exact amount u can set depends on what rank you are. You can see how many player warps you can set using the `/pw amount` command, and you can see the list of your player warp or others using `/pw list` or `/pw list <player>`.

To set your own player warp, you can use the command `/pw set <name>`. If you are not satisfied with the placement of your warp, you can use the command `/pw reset <name>` to change the location of a playerwarp, this is usually preferable instead of removing and recreating a player warp because this method does not reset the player warp visit count and their ratings. If you want to remove a player warp completely you can use the command `/pw remove <name>`.

Player warps are categorized by five categories: Building, Shop, Farm, Combat, and Others. You can change a category of ur player warp using `/pw category set <warp> <category>`. 

There are several things you can edit for your player warp. First a player warp can be renamed using `/pw rename <oldname> <newname>`. To change a description of a player warp as shown on the `/pw menu`, you can use the command `/pw desc set/remove <description>` . And also can be categorized using `/pw category set <warp>`. To prevent other people from teleporting to it you can use `/pw lock <name>`. Or if you still want some players to teleport to it but not all, consider setting a password for it using `/pw password set/remove <name> <password>`, that way players are prompted to enter the password before teleporting.

|Command|Description|
|-|-|
|`/pw help`|List of player warp commands|
|`/pw`|Open the player warp GUI|
|`/pw <name>`|Teleport to a player warp|
|`/pw set <name>`|Crates a player warp on the block you are standing on|
|`/pw remove <warp>`|Deletes a the named warp|
|`/pw reset <warp>`|Relocates the spawn point of the warp|
|`/pw ban set <warp name> <username>`|Bans a player from a player warp|
|`/pw list`|List of all player warps|
|`/pw lock <warp name>`|Lock's a warp making it inaccessible by players|
|`/pw rename <warp> <New name>`|Renames a warp|
|`/pw category set <warp> <category>`|Sets a category for a player warp|
|`/pw password set/remove`|Sets a pasword for a player warp|
|`/pw desc set/remove`|Makes a description of a warp|

---

## Town Spawn
:::warning
In this section, we only discuss Town spawn briefly. For more info visit the Towny Town section.
:::
If you are in a town, you can teleport to your town spawn using `/t spawn`. You can also teleport to another town if that town is a public town, you can check this in `/t <town name>`. 

Town spawn by default is in the same location when you created your town, but you can still change it in the future. There are two different ways to change town spawn, the method you choose depends on whether the new plot would be the same chunk from your current town spawn or not. If the new spawn is inside the old spawn plot, do `/t set spawn` to set a town spawn, if it's outside, do `/t set homeblock`. 

|Command|Description|
|-|-|
|`/t spawn`|Teleport to your town spawn|
|`/t spawn <town_name>`|Teleport to another town spawn|
|`/t set spawn`|Set your town spawn|
|`/t set homeblock`|Set homeblock|

:::info
Only town mayor and co-mayor can change the town spawn
:::

---

## Town Outpost
:::warning
In this section, we only discuss Town outpost briefly. For more info visit the Towny Town section.
:::
Some towns also have outposts, outpost is a place where residents can teleport to in ur town that are usually far away from the main town area. To check whether your town has an outpost or not, you can use the command `/t outpost list [page]`, and you can teleport to your own outpost using `/t outpost <name/number>`. You can only teleport to your own town outpost, and only the town residents can teleport to it. Town outpost uses plot name or group name by default as outpost name. If there is both a group and plot name, it will always choose the group name as the outpost name.

|Command|Description|
|-|-|
|`/t outpost list [page]`|List town outpost|
|`/t outpost <name/number>`|Teleport to your town outpost|

<div align="center">
<img src={Outpost_List} alt="Outpost List" height="300" style={{ padding: '0 1rem' }}/>
</div>

:::tip
In java, you can click the outpost name on the outpost lists in chat to teleport to that outpost.
:::

---

## Nation Spawn
:::warning
In this section, we only discuss Nation spawn briefly. For more info visit the Towny Nation section.
:::
When your town is a part of a nation, you can have access to the Nation Spawn. Similarly just like town spawn, nation spawn can be accessed with `/n spawn`. In this server, you can't travel to another nation spawn even with the nation's public status enabled.

By default the nation spawn will be right where the capital’s town spawn is. It can be changed using `/n set spawn`. You can change it anywhere as long as it's in the capital town plot.

|Command|Description|
|-|-|
|`/n spawn`|Teleport to your nation spawn|
|`/n set spawn`|Set  your nation spawn|

:::info
Only nation king can change the nation spawn
:::

---

## Home
Home is a way for players to set a personal warp point that they can teleport to any time. The amount of home you can have depends on the rank you have, to see how many home each rank can have visit the rank section.


|Command|Description|
|-|-|
|`/home`|Teleport to your home|
|`/homes`|List every home that you have set|
|`/sethome <homename>`|Set your home to your current location|
|`/delhome`|Remove a home|

:::info
If you can only set home(newcomer rank), you can just use `/sethome` and it will name the home `home`.
:::

---

## Slimefun GPS
:::warning
In this section, we only discuss Slimefun GPS briefly. For more info visit the Slimefun GPS section.
:::

Slimefun has a GPS suite that allows you to bookmark a location and teleport to it using the GPS Pylon. To set it up, place the GPS Teleporter Pylon, GPS Teleporter Matrix, and the  GPS Activation Device according to the image below. After that, bookmark a location using the GPS Marker Tool, and that location will be listed in the pylon. Slimefun GPS is player-bounded, the activation device will list all locations bookmarked by the person that placed it. If you want to remove a bookmarked location, use the GPS Control Panel and click the “Waypoint Overview”.

<div align="center">
<img src={GPS_Pylon} alt="GPS Pylon" height="360" style={{ padding: '0 1rem' }}/>
</div>

Items required:
- 1 GPS Teleporter Pylon
- 8 GPS Teleporter Matrix
- 1 GPS Activation Device (Shared/Personal)

---

## Slimefun Elevator Plates

:::warning
In this section, we only discuss Slimefun Elevator Plates briefly. For more info visit the Slimefun Elevator Plates section.
:::

If you have ever seen a stone or blackstone pressure plate in the corner of a room in playerwarps, chances are they are Slimefun Elevator Plates. Slimefun Elevator allows  you to travel to other elevator plates that are placed vertically aligned with it. The Difference between Alternate Elevator Plate and normal Elevator Plate is their user interface. Alternate Elevator Plate uses Chest GUI for their interface, while normal Elevator Plate uses Book GUI. To use the Elevator Plate, you just have to simply stand on it and click the floor you want to go to.

<div align="center">
<img src={Elevator_Plate} alt="Elevator Plate" height="360" style={{ padding: '0 1rem' }}/>
<img src={Elevator_Plate_Alternate} alt="Elevator Plate Alternate" height="360" style={{ padding: '0 1rem' }}/>
</div>

:::info
Alternate Elevator Plate bypass Towny Perms. This can be useful if you want to give access to visitors to other floors but restrict them from opening a chest. But might prove challenging when  you want to prevent people from using it.
:::

---

## Slimefun Warp Pads

:::warning
In this section, we only discuss Slimefun Warp Pads briefly. For more info visit the Slimefun Warp Pads section.
:::

One of the best ways to move locations is by using a warp pad. Warp pads have an appearance of a smoker block that has a hologram text either “X”, “Origin”, or “Destination” on top of it. Warp pads allow you to another warp pad that is configured as its destination instantly. The caveat for it is that it has a maximum range of 100 blocks.

To connect two of these together, you need an item called Warp Pad Configurator. Sneak right click the warp pad that you want to be your destination, this will store the destination pad to the wand. After its stored, normal right click another warp pad to be their origin. A destination warp pad can have multiple origins, but each origin can only have only 1 destination.

<div align="center">
<img src={WarpPad_Use} alt="WarpPad Use" height="420" style={{ padding: '0 1rem' }}/>
</div>

:::info
The shape of the warp pads range is a square(creating a 201x201 valid area). And also, warp pads disregard verticality, meaning it is possible to go above 100 blocks vertically.
:::

---

## Server-wide Map
If you decided to travel the main world without utilizing the warp features, you might want to use the server-wide map to know where you want to go. In this map you can see every player's location and towns. The map is hosted on TheCavern website and can be accessed from [https://thecavern.net/map/](https://thecavern.net/map/).


<div align="center">
<img src={SquareMap} alt="SquareMap" height="480" style={{ padding: '0 1rem' }}/>
</div>

---

## Other


