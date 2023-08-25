"use strict"
//Rimspace of ShimmerIsland by EltanceX, Annwind 2022
const version = "0.1.0.2";
const vuid = "53b8505e-0e5c-42bf-b5e7-6e7a1c2976df";
const vtime = new Date("2022-11-20 16:30:00").getTime();




var __version = 1; //Normal:0 / Professional:1
// const serverInfo = { address: "0.0.0.0", port: 45663 };
// const serverLine = ["0.0.0.0"];
const startTick = Date.now();

var verified = true;//false;
var visitor = false;
const crypto = require("crypto");
const util = require("util");
const process = require("process");
const child_process = require("child_process");
const Buffer = require("buffer").Buffer;
const fs = require("fs");
const zlib = require("zlib");
const colors = require("colors");
const ws = require("ws");
const http = require("http");
const https = require("https");
const express = require("express");
const os = require("os");
const cpustat = require("cpu-stat");
const readline = require("readline");
const bezier = require('bezier-curve');
const md5 = require("md5");
// const cookieParser = require('cookie-parser');
const uec = require("urlencode");
// const wsClient = require("ws");
const getPixels = require("get-pixels");
// process.title = "Rimspace v" + version + " - Login";
process.title = "Rimspace v" + version + " - Official Open Source Verison";


var runtimeids;
var RGB_Y;
(() => {
    RGB_Y = [["log2", 0, [156, 89, 54]], ["log2", 4, [103, 97, 87]], ["planks", 4, [168, 90, 50]], ["stone", 5, [136, 136, 137]], ["barrel", 0, [122, 90, 51]], ["barrel", 1, [136, 101, 59]], ["barrel", 2, [107, 81, 50]], ["bedrock", 0, [86, 86, 86]], ["log", 2, [194, 179, 132]], ["log", 6, [219, 218, 213]], ["planks", 2, [192, 175, 121]], ["concrete", 15, [8, 10, 15]], ["concretepowder", 15, [25, 27, 32]], ["black_glazed_terracotta", 0, [69, 30, 32]], ["stained_hardened_clay", 15, [37, 23, 16]], ["wool", 15, [21, 21, 26]], ["blast_furnace", 0, [79, 78, 79]], ["concrete", 11, [45, 47, 143]], ["concretepowder", 11, [70, 73, 167]], ["blue_glazed_terracotta", 0, [49, 68, 145]], ["blue_ice", 0, [117, 168, 253]], ["stained_hardened_clay", 11, [74, 60, 91]], ["wool", 11, [53, 57, 157]], ["bone_block", 0, [208, 204, 177]], ["bone_block", 4, [230, 227, 209]], ["brick_block", 0, [151, 97, 83]], ["concrete", 12, [96, 60, 32]], ["concretepowder", 12, [126, 85, 54]], ["brown_glazed_terracotta", 0, [126, 106, 83]], ["brown_mushroom_block", 0, [149, 112, 81]], ["stained_hardened_clay", 12, [77, 51, 36]], ["wool", 12, [114, 72, 41]], ["quartz_block", 1, [232, 227, 218]], ["stonebrick", 3, [120, 119, 120]], ["clay", 0, [161, 167, 179]], ["coal_block", 0, [16, 16, 16]], ["coal_ore", 0, [114, 114, 114]], ["dirt", 1, [119, 85, 59]], ["cobblestone", 0, [128, 127, 127]], ["stonebrick", 2, [118, 118, 118]], ["crafting_table", 0, [124, 75, 44]], ["concrete", 9, [21, 119, 136]], ["concretepowder", 9, [37, 148, 157]], ["cyan_glazed_terracotta", 0, [51, 116, 122]], ["stained_hardened_clay", 9, [87, 91, 91]], ["wool", 9, [21, 138, 145]], ["log2", 1, [66, 43, 21]], ["log2", 5, [60, 47, 26]], ["planks", 5, [67, 43, 20]], ["prismarine", 1, [52, 92, 76]], ["diamond_block", 0, [101, 239, 229]], ["diamond_ore", 0, [125, 145, 144]], ["stone", 3, [189, 189, 190]], ["dirt", 0, [134, 96, 67]], ["dried_kelp_block", 0, [52, 60, 41]], ["emerald_block", 0, [43, 206, 90]], ["emerald_ore", 0, [116, 138, 124]], ["end_stone", 0, [220, 223, 158]], ["end_bricks", 0, [219, 224, 162]], ["farmland", 0, [142, 102, 70]], ["fletching_table", 0, [198, 182, 135]], ["furnace", 0, [114, 114, 114]], ["glowstone", 0, [173, 132, 85]], ["gold_block", 0, [248, 211, 62]], ["gold_ore", 0, [147, 143, 125]], ["stone", 1, [149, 103, 86]], ["grass_path", 0, [148, 122, 65]], ["gravel", 0, [132, 128, 127]], ["concrete", 7, [55, 58, 62]], ["concretepowder", 7, [77, 81, 85]], ["gray_glazed_terracotta", 0, [83, 91, 94]], ["stained_hardened_clay", 7, [58, 42, 36]], ["wool", 7, [63, 68, 72]], ["concrete", 13, [73, 91, 36]], ["concretepowder", 13, [97, 119, 45]], ["green_glazed_terracotta", 0, [113, 139, 62]], ["stained_hardened_clay", 13, [76, 83, 42]], ["wool", 13, [85, 110, 27]], ["hay_block", 0, [167, 140, 12]], ["ice", 0, [145, 184, 254]], ["iron_block", 0, [222, 222, 222]], ["iron_ore", 0, [138, 132, 127]], ["jukebox", 0, [96, 65, 48]], ["log", 3, [154, 112, 74]], ["log", 7, [85, 68, 25]], ["planks", 3, [161, 115, 81]], ["lapis_block", 0, [31, 67, 140]], ["lapis_ore", 0, [96, 109, 134]], ["concrete", 3, [36, 137, 199]], ["concretepowder", 3, [74, 181, 214]], ["light_blue_glazed_terracotta", 0, [97, 166, 209]], ["stained_hardened_clay", 3, [114, 109, 138]], ["wool", 3, [58, 175, 217]], ["concrete", 8, [125, 125, 115]], ["concretepowder", 8, [155, 155, 148]], ["silver_glazed_terracotta", 0, [145, 167, 169]], ["stained_hardened_clay", 8, [135, 107, 98]], ["wool", 8, [142, 142, 135]], ["concrete", 5, [94, 169, 25]], ["concretepowder", 5, [126, 189, 42]], ["lime_glazed_terracotta", 0, [163, 197, 54]], ["stained_hardened_clay", 5, [103, 118, 53]], ["wool", 5, [112, 185, 26]], ["loom", 0, [141, 119, 93]], ["concrete", 2, [169, 48, 159]], ["concretepowder", 2, [193, 84, 185]], ["magenta_glazed_terracotta", 0, [207, 99, 190]], ["stained_hardened_clay", 2, [150, 88, 109]], ["wool", 2, [189, 69, 180]], ["magma", 0, [142, 63, 32]], ["melon_block", 0, [109, 143, 31]], ["mossy_cobblestone", 0, [109, 118, 93]], ["stonebrick", 1, [116, 121, 106]], ["red_mushroom_block", 15, [203, 196, 185]], ["mycelium", 0, [111, 99, 101]], ["netherrack", 0, [98, 38, 38]], ["nether_brick", 0, [44, 22, 26]], ["quartz_ore", 0, [122, 71, 67]], ["nether_wart_block", 0, [115, 3, 2]], ["noteblock", 0, [92, 60, 41]], ["log", 0, [156, 125, 75]], ["log", 4, [109, 85, 51]], ["planks", 0, [162, 131, 79]], ["observer", 0, [72, 69, 69]], ["observer", 1, [108, 108, 108]], ["observer", 2, [104, 104, 104]], ["obsidian", 0, [15, 11, 25]], ["concrete", 1, [224, 97, 1]], ["concretepowder", 1, [227, 132, 32]], ["orange_glazed_terracotta", 0, [163, 146, 87]], ["stained_hardened_clay", 1, [162, 84, 38]], ["wool", 1, [241, 118, 20]], ["packed_ice", 0, [141, 180, 250]], ["concrete", 6, [214, 101, 143]], ["concretepowder", 6, [229, 154, 181]], ["pink_glazed_terracotta", 0, [237, 156, 183]], ["stained_hardened_clay", 6, [162, 78, 79]], ["wool", 6, [238, 141, 173]], ["podzol", 0, [92, 63, 24]], ["stone", 6, [132, 135, 134]], ["stone", 4, [195, 195, 197]], ["stone", 2, [155, 107, 89]], ["prismarine", 0, [99, 156, 150]], ["prismarine", 2, [100, 172, 159]], ["pumpkin", 0, [196, 118, 24]], ["concrete", 10, [100, 32, 156]], ["concretepowder", 10, [132, 56, 178]], ["purple_glazed_terracotta", 0, [109, 49, 151]], ["stained_hardened_clay", 10, [118, 70, 86]], ["wool", 10, [122, 42, 173]], ["purpur_block", 0, [170, 126, 170]], ["purpur_block", 2, [170, 127, 170]], ["purpur_block", 6, [172, 129, 172]], ["quartz_block", 0, [236, 230, 223]], ["quartz_block", 6, [236, 231, 224]], ["redstone_block", 0, [168, 23, 4]], ["redstone_lamp", 0, [100, 58, 31]], ["redstone_ore", 0, [134, 105, 105]], ["concrete", 14, [142, 33, 33]], ["concretepowder", 14, [168, 54, 51]], ["red_glazed_terracotta", 0, [182, 59, 52]], ["red_mushroom_block", 0, [201, 48, 46]], ["red_nether_brick", 0, [70, 7, 9]], ["sand", 1, [190, 103, 33]], ["red_sandstone", 0, [181, 98, 32]], ["stained_hardened_clay", 14, [143, 61, 47]], ["wool", 14, [161, 39, 35]], ["sand", 0, [219, 207, 163]], ["sandstone", 0, [224, 214, 170]], ["sealantern", 0, [178, 204, 194]], ["slime", 0, [111, 191, 91]], ["smithing_table", 0, [56, 57, 68]], ["smooth_stone", 0, [161, 161, 161]], ["snow", 0, [249, 254, 254]], ["soul_sand", 0, [82, 62, 51]], ["sponge", 0, [196, 193, 75]], ["log", 1, [111, 82, 48]], ["log", 5, [59, 38, 17]], ["planks", 1, [115, 85, 49]], ["stone", 0, [126, 126, 126]], ["stonebrick", 0, [122, 122, 122]], ["stripped_acacia_log", 0, [167, 91, 51]], ["stripped_acacia_log", 1, [176, 93, 60]], ["stripped_birch_log", 0, [192, 173, 118]], ["stripped_birch_log", 1, [198, 177, 120]], ["stripped_dark_oak_log", 0, [67, 44, 22]], ["stripped_dark_oak_log", 1, [98, 77, 50]], ["stripped_jungle_log", 0, [166, 122, 82]], ["stripped_jungle_log", 1, [172, 133, 85]], ["stripped_oak_log", 0, [162, 131, 78]], ["stripped_oak_log", 1, [179, 146, 87]], ["stripped_spruce_log", 0, [108, 82, 48]], ["stripped_spruce_log", 1, [117, 90, 53]], ["hardened_clay", 0, [152, 94, 68]], ["tnt", 0, [134, 61, 54]], ["sponge", 1, [170, 180, 70]], ["concrete", 0, [207, 213, 214]], ["concretepowder", 0, [226, 228, 228]], ["white_glazed_terracotta", 0, [185, 211, 206]], ["stained_hardened_clay", 0, [210, 178, 161]], ["wool", 0, [234, 236, 237]], ["concrete", 4, [241, 175, 21]], ["concretepowder", 4, [233, 199, 55]], ["yellow_glazed_terracotta", 0, [236, 195, 92]], ["stained_hardened_clay", 4, [186, 133, 35]], ["wool", 4, [249, 198, 40]]]
})();
var RGB_X;
(() => {
    RGB_X = [["log2", 4, [156, 89, 54]], ["log2", 0, [103, 97, 87]], ["planks", 4, [168, 90, 50]], ["stone", 5, [136, 136, 137]], ["barrel", 5, [122, 90, 51]], ["barrel", 4, [136, 101, 59]], ["barrel", 0, [107, 81, 50]], ["bedrock", 0, [86, 86, 86]], ["log", 6, [194, 179, 132]], ["log", 2, [219, 218, 213]], ["planks", 2, [192, 175, 121]], ["concrete", 15, [8, 10, 15]], ["concretepowder", 15, [25, 27, 32]], ["black_glazed_terracotta", 0, [69, 30, 32]], ["stained_hardened_clay", 15, [37, 23, 16]], ["wool", 15, [21, 21, 26]], ["blast_furnace", 0, [107, 107, 107]], ["blast_furnace", 5, [108, 108, 108]], ["concrete", 11, [45, 47, 143]], ["concretepowder", 11, [70, 73, 167]], ["blue_glazed_terracotta", 0, [49, 68, 145]], ["blue_ice", 0, [117, 168, 253]], ["stained_hardened_clay", 11, [74, 60, 91]], ["wool", 11, [53, 57, 157]], ["bone_block", 4, [208, 204, 177]], ["bone_block", 0, [230, 227, 209]], ["brick_block", 0, [151, 97, 83]], ["bookshelf", 0, [115, 93, 58]], ["concrete", 12, [96, 60, 32]], ["concretepowder", 12, [126, 85, 54]], ["brown_glazed_terracotta", 0, [126, 106, 83]], ["brown_mushroom_block", 0, [149, 112, 81]], ["stained_hardened_clay", 12, [77, 51, 36]], ["wool", 12, [114, 72, 41]], ["quartz_block", 1, [232, 227, 218]], ["red_sandstone", 1, [183, 96, 27]], ["sandstone", 1, [216, 203, 155]], ["stonebrick", 3, [120, 119, 120]], ["clay", 0, [161, 167, 179]], ["coal_block", 0, [16, 16, 16]], ["coal_ore", 0, [114, 114, 114]], ["dirt", 1, [119, 85, 59]], ["cobblestone", 0, [128, 127, 127]], ["stonebrick", 2, [118, 118, 118]], ["crafting_table", 0, [131, 105, 65]], ["red_sandstone", 2, [190, 102, 32]], ["sandstone", 2, [218, 207, 160]], ["concrete", 9, [21, 119, 136]], ["concretepowder", 9, [37, 148, 157]], ["cyan_glazed_terracotta", 0, [51, 116, 122]], ["stained_hardened_clay", 9, [87, 91, 91]], ["wool", 9, [21, 138, 145]], ["log2", 5, [66, 43, 21]], ["log2", 1, [60, 47, 26]], ["planks", 5, [67, 43, 20]], ["prismarine", 1, [52, 92, 76]], ["diamond_block", 0, [101, 239, 229]], ["diamond_ore", 0, [125, 145, 144]], ["stone", 3, [189, 189, 190]], ["dirt", 0, [134, 96, 67]], ["dried_kelp_block", 0, [52, 60, 41]], ["emerald_block", 0, [43, 206, 90]], ["emerald_ore", 0, [116, 138, 124]], ["end_stone", 0, [220, 223, 158]], ["end_bricks", 0, [219, 224, 162]], ["fletching_table", 0, [170, 152, 110]], ["furnace", 0, [126, 125, 125]], ["glowstone", 0, [173, 132, 85]], ["gold_block", 0, [248, 211, 62]], ["gold_ore", 0, [147, 143, 125]], ["stone", 1, [149, 103, 86]], ["grass_path", 0, [135, 100, 66]], ["gravel", 0, [132, 128, 127]], ["concrete", 7, [55, 58, 62]], ["concretepowder", 7, [77, 81, 85]], ["gray_glazed_terracotta", 0, [83, 91, 94]], ["stained_hardened_clay", 7, [58, 42, 36]], ["wool", 7, [63, 68, 72]], ["concrete", 13, [73, 91, 36]], ["concretepowder", 13, [97, 119, 45]], ["green_glazed_terracotta", 0, [113, 139, 62]], ["stained_hardened_clay", 13, [76, 83, 42]], ["wool", 13, [85, 110, 27]], ["hay_block", 0, [167, 137, 38]], ["hay_block", 4, [167, 140, 12]], ["ice", 0, [145, 184, 254]], ["iron_block", 0, [222, 222, 222]], ["iron_ore", 0, [138, 132, 127]], ["jukebox", 0, [92, 60, 41]], ["log", 7, [154, 112, 74]], ["log", 3, [85, 68, 25]], ["planks", 3, [161, 115, 81]], ["lapis_block", 0, [31, 67, 140]], ["lapis_ore", 0, [96, 109, 134]], ["concrete", 3, [36, 137, 199]], ["concretepowder", 3, [74, 181, 214]], ["light_blue_glazed_terracotta", 0, [97, 166, 209]], ["stained_hardened_clay", 3, [114, 109, 138]], ["wool", 3, [58, 175, 217]], ["concrete", 8, [125, 125, 115]], ["concretepowder", 8, [155, 155, 148]], ["silver_glazed_terracotta", 0, [145, 167, 169]], ["stained_hardened_clay", 8, [135, 107, 98]], ["wool", 8, [142, 142, 135]], ["concrete", 5, [94, 169, 25]], ["concretepowder", 5, [126, 189, 42]], ["lime_glazed_terracotta", 0, [163, 197, 54]], ["stained_hardened_clay", 5, [103, 118, 53]], ["wool", 5, [112, 185, 26]], ["loom", 0, [144, 99, 72]], ["concrete", 2, [169, 48, 159]], ["concretepowder", 2, [193, 84, 185]], ["magenta_glazed_terracotta", 0, [207, 99, 190]], ["stained_hardened_clay", 2, [150, 88, 109]], ["wool", 2, [189, 69, 180]], ["magma", 0, [142, 63, 32]], ["melon_block", 0, [115, 146, 30]], ["mossy_cobblestone", 0, [109, 118, 93]], ["stonebrick", 1, [116, 121, 106]], ["red_mushroom_block", 15, [203, 196, 185]], ["mycelium", 0, [112, 86, 70]], ["netherrack", 0, [98, 38, 38]], ["nether_brick", 0, [44, 22, 26]], ["quartz_ore", 0, [122, 71, 67]], ["nether_wart_block", 0, [115, 3, 2]], ["noteblock", 0, [92, 60, 41]], ["log", 4, [156, 125, 75]], ["log", 0, [109, 85, 51]], ["planks", 0, [162, 131, 79]], ["observer", 4, [72, 69, 69]], ["observer", 5, [108, 108, 108]], ["observer", 0, [70, 68, 68]], ["obsidian", 0, [15, 11, 25]], ["concrete", 1, [224, 97, 1]], ["concretepowder", 1, [227, 132, 32]], ["orange_glazed_terracotta", 0, [163, 146, 87]], ["stained_hardened_clay", 1, [162, 84, 38]], ["wool", 1, [241, 118, 20]], ["packed_ice", 0, [141, 180, 250]], ["concrete", 6, [214, 101, 143]], ["concretepowder", 6, [229, 154, 181]], ["pink_glazed_terracotta", 0, [237, 156, 183]], ["stained_hardened_clay", 6, [162, 78, 79]], ["wool", 6, [238, 141, 173]], ["podzol", 0, [124, 88, 58]], ["stone", 6, [132, 135, 134]], ["stone", 4, [195, 195, 197]], ["stone", 2, [155, 107, 89]], ["prismarine", 0, [99, 156, 150]], ["prismarine", 2, [100, 172, 159]], ["pumpkin", 0, [198, 117, 25]], ["concrete", 10, [100, 32, 156]], ["concretepowder", 10, [132, 56, 178]], ["purple_glazed_terracotta", 0, [109, 49, 151]], ["stained_hardened_clay", 10, [118, 70, 86]], ["wool", 10, [122, 42, 173]], ["purpur_block", 0, [170, 126, 170]], ["purpur_block", 6, [170, 127, 170]], ["purpur_block", 2, [172, 129, 172]], ["quartz_block", 0, [236, 230, 223]], ["quartz_block", 2, [236, 231, 224]], ["redstone_block", 0, [168, 23, 4]], ["redstone_lamp", 0, [100, 58, 31]], ["redstone_ore", 0, [134, 105, 105]], ["concrete", 14, [142, 33, 33]], ["concretepowder", 14, [168, 54, 51]], ["red_glazed_terracotta", 0, [182, 59, 52]], ["red_mushroom_block", 0, [201, 48, 46]], ["red_nether_brick", 0, [70, 7, 9]], ["sand", 1, [190, 103, 33]], ["red_sandstone", 0, [187, 99, 29]], ["stained_hardened_clay", 14, [143, 61, 47]], ["wool", 14, [161, 39, 35]], ["sand", 0, [219, 207, 163]], ["sandstone", 0, [216, 203, 156]], ["sealantern", 0, [178, 204, 194]], ["slime", 0, [111, 191, 91]], ["smithing_table", 0, [58, 36, 35]], ["smooth_stone", 0, [161, 161, 161]], ["snow", 0, [249, 254, 254]], ["soul_sand", 0, [82, 62, 51]], ["sponge", 0, [196, 193, 75]], ["log", 5, [111, 82, 48]], ["log", 1, [59, 38, 17]], ["planks", 1, [115, 85, 49]], ["stone", 0, [126, 126, 126]], ["stonebrick", 0, [122, 122, 122]], ["stripped_acacia_log", 1, [167, 91, 51]], ["stripped_acacia_log", 0, [176, 93, 60]], ["stripped_birch_log", 1, [192, 173, 118]], ["stripped_birch_log", 0, [198, 177, 120]], ["stripped_dark_oak_log", 1, [67, 44, 22]], ["stripped_dark_oak_log", 0, [98, 77, 50]], ["stripped_jungle_log", 1, [166, 122, 82]], ["stripped_jungle_log", 0, [172, 133, 85]], ["stripped_oak_log", 1, [162, 131, 78]], ["stripped_oak_log", 0, [179, 146, 87]], ["stripped_spruce_log", 1, [108, 82, 48]], ["stripped_spruce_log", 0, [117, 90, 53]], ["hardened_clay", 0, [152, 94, 68]], ["tnt", 0, [179, 94, 92]], ["sponge", 1, [170, 180, 70]], ["concrete", 0, [207, 213, 214]], ["concretepowder", 0, [226, 228, 228]], ["white_glazed_terracotta", 0, [185, 211, 206]], ["stained_hardened_clay", 0, [210, 178, 161]], ["wool", 0, [234, 236, 237]], ["concrete", 4, [241, 175, 21]], ["concretepowder", 4, [233, 199, 55]], ["yellow_glazed_terracotta", 0, [236, 195, 92]], ["stained_hardened_clay", 4, [186, 133, 35]], ["wool", 4, [249, 198, 40]]]
})();
var RGB_Z;
(() => {
    RGB_Z = [["log2", 8, [156, 89, 54]], ["log2", 0, [103, 97, 87]], ["planks", 4, [168, 90, 50]], ["stone", 5, [136, 136, 137]], ["barrel", 3, [122, 90, 51]], ["barrel", 2, [136, 101, 59]], ["barrel", 0, [107, 81, 50]], ["bedrock", 0, [86, 86, 86]], ["log", 10, [194, 179, 132]], ["log", 2, [219, 218, 213]], ["planks", 2, [192, 175, 121]], ["concrete", 15, [8, 10, 15]], ["concretepowder", 15, [25, 27, 32]], ["black_glazed_terracotta", 0, [69, 30, 32]], ["stained_hardened_clay", 15, [37, 23, 16]], ["wool", 15, [21, 21, 26]], ["blast_furnace", 1, [107, 107, 107]], ["blast_furnace", 0, [108, 108, 108]], ["concrete", 11, [45, 47, 143]], ["concretepowder", 11, [70, 73, 167]], ["blue_glazed_terracotta", 0, [49, 68, 145]], ["blue_ice", 0, [117, 168, 253]], ["stained_hardened_clay", 11, [74, 60, 91]], ["wool", 11, [53, 57, 157]], ["bone_block", 8, [208, 204, 177]], ["bone_block", 0, [230, 227, 209]], ["brick_block", 0, [151, 97, 83]], ["bookshelf", 0, [115, 93, 58]], ["concrete", 12, [96, 60, 32]], ["concretepowder", 12, [126, 85, 54]], ["brown_glazed_terracotta", 0, [126, 106, 83]], ["brown_mushroom_block", 0, [149, 112, 81]], ["stained_hardened_clay", 12, [77, 51, 36]], ["wool", 12, [114, 72, 41]], ["quartz_block", 1, [232, 227, 218]], ["red_sandstone", 1, [183, 96, 27]], ["sandstone", 1, [216, 203, 155]], ["stonebrick", 3, [120, 119, 120]], ["clay", 0, [161, 167, 179]], ["coal_block", 0, [16, 16, 16]], ["coal_ore", 0, [114, 114, 114]], ["dirt", 1, [119, 85, 59]], ["cobblestone", 0, [128, 127, 127]], ["stonebrick", 2, [118, 118, 118]], ["crafting_table", 0, [132, 108, 73]], ["red_sandstone", 2, [190, 102, 32]], ["sandstone", 2, [218, 207, 160]], ["concrete", 9, [21, 119, 136]], ["concretepowder", 9, [37, 148, 157]], ["cyan_glazed_terracotta", 0, [51, 116, 122]], ["stained_hardened_clay", 9, [87, 91, 91]], ["wool", 9, [21, 138, 145]], ["log2", 9, [66, 43, 21]], ["log2", 1, [60, 47, 26]], ["planks", 5, [67, 43, 20]], ["prismarine", 1, [52, 92, 76]], ["diamond_block", 0, [101, 239, 229]], ["diamond_ore", 0, [125, 145, 144]], ["stone", 3, [189, 189, 190]], ["dirt", 0, [134, 96, 67]], ["dried_kelp_block", 0, [52, 60, 41]], ["emerald_block", 0, [43, 206, 90]], ["emerald_ore", 0, [116, 138, 124]], ["end_stone", 0, [220, 223, 158]], ["end_bricks", 0, [219, 224, 162]], ["furnace", 1, [126, 125, 125]], ["glowstone", 0, [173, 132, 85]], ["gold_block", 0, [248, 211, 62]], ["gold_ore", 0, [147, 143, 125]], ["stone", 1, [149, 103, 86]], ["grass_path", 0, [135, 100, 66]], ["gravel", 0, [132, 128, 127]], ["concrete", 7, [55, 58, 62]], ["concretepowder", 7, [77, 81, 85]], ["gray_glazed_terracotta", 0, [83, 91, 94]], ["stained_hardened_clay", 7, [58, 42, 36]], ["wool", 7, [63, 68, 72]], ["concrete", 13, [73, 91, 36]], ["concretepowder", 13, [97, 119, 45]], ["green_glazed_terracotta", 0, [113, 139, 62]], ["stained_hardened_clay", 13, [76, 83, 42]], ["wool", 13, [85, 110, 27]], ["hay_block", 0, [167, 137, 38]], ["hay_block", 8, [167, 140, 12]], ["ice", 0, [145, 184, 254]], ["iron_block", 0, [222, 222, 222]], ["iron_ore", 0, [138, 132, 127]], ["jukebox", 0, [92, 60, 41]], ["log", 11, [154, 112, 74]], ["log", 3, [85, 68, 25]], ["planks", 3, [161, 115, 81]], ["lapis_block", 0, [31, 67, 140]], ["lapis_ore", 0, [96, 109, 134]], ["concrete", 3, [36, 137, 199]], ["concretepowder", 3, [74, 181, 214]], ["light_blue_glazed_terracotta", 0, [97, 166, 209]], ["stained_hardened_clay", 3, [114, 109, 138]], ["wool", 3, [58, 175, 217]], ["concrete", 8, [125, 125, 115]], ["concretepowder", 8, [155, 155, 148]], ["silver_glazed_terracotta", 0, [145, 167, 169]], ["stained_hardened_clay", 8, [135, 107, 98]], ["wool", 8, [142, 142, 135]], ["concrete", 5, [94, 169, 25]], ["concretepowder", 5, [126, 189, 42]], ["lime_glazed_terracotta", 0, [163, 197, 54]], ["stained_hardened_clay", 5, [103, 118, 53]], ["wool", 5, [112, 185, 26]], ["loom", 0, [146, 117, 82]], ["concrete", 2, [169, 48, 159]], ["concretepowder", 2, [193, 84, 185]], ["magenta_glazed_terracotta", 0, [207, 99, 190]], ["stained_hardened_clay", 2, [150, 88, 109]], ["wool", 2, [189, 69, 180]], ["magma", 0, [142, 63, 32]], ["melon_block", 0, [115, 146, 30]], ["mossy_cobblestone", 0, [109, 118, 93]], ["stonebrick", 1, [116, 121, 106]], ["red_mushroom_block", 15, [203, 196, 185]], ["mycelium", 0, [112, 86, 70]], ["netherrack", 0, [98, 38, 38]], ["nether_brick", 0, [44, 22, 26]], ["quartz_ore", 0, [122, 71, 67]], ["nether_wart_block", 0, [115, 3, 2]], ["noteblock", 0, [92, 60, 41]], ["log", 8, [156, 125, 75]], ["log", 0, [109, 85, 51]], ["planks", 0, [162, 131, 79]], ["observer", 0, [104, 104, 104]], ["observer", 2, [72, 69, 69]], ["observer", 3, [108, 108, 108]], ["observer", 4, [70, 68, 68]], ["obsidian", 0, [15, 11, 25]], ["concrete", 1, [224, 97, 1]], ["concretepowder", 1, [227, 132, 32]], ["orange_glazed_terracotta", 0, [163, 146, 87]], ["stained_hardened_clay", 1, [162, 84, 38]], ["wool", 1, [241, 118, 20]], ["packed_ice", 0, [141, 180, 250]], ["concrete", 6, [214, 101, 143]], ["concretepowder", 6, [229, 154, 181]], ["pink_glazed_terracotta", 0, [237, 156, 183]], ["stained_hardened_clay", 6, [162, 78, 79]], ["wool", 6, [238, 141, 173]], ["podzol", 0, [124, 88, 58]], ["stone", 6, [132, 135, 134]], ["stone", 4, [195, 195, 197]], ["stone", 2, [155, 107, 89]], ["prismarine", 0, [99, 156, 150]], ["prismarine", 2, [100, 172, 159]], ["pumpkin", 0, [198, 117, 25]], ["concrete", 10, [100, 32, 156]], ["concretepowder", 10, [132, 56, 178]], ["purple_glazed_terracotta", 0, [109, 49, 151]], ["stained_hardened_clay", 10, [118, 70, 86]], ["wool", 10, [122, 42, 173]], ["purpur_block", 0, [170, 126, 170]], ["purpur_block", 10, [170, 127, 170]], ["purpur_block", 2, [172, 129, 172]], ["quartz_block", 0, [236, 230, 223]], ["quartz_block", 2, [236, 231, 224]], ["redstone_block", 0, [168, 23, 4]], ["redstone_lamp", 0, [100, 58, 31]], ["redstone_ore", 0, [134, 105, 105]], ["concrete", 14, [142, 33, 33]], ["concretepowder", 14, [168, 54, 51]], ["red_glazed_terracotta", 0, [182, 59, 52]], ["red_mushroom_block", 0, [201, 48, 46]], ["red_nether_brick", 0, [70, 7, 9]], ["sand", 1, [190, 103, 33]], ["red_sandstone", 0, [187, 99, 29]], ["stained_hardened_clay", 14, [143, 61, 47]], ["wool", 14, [161, 39, 35]], ["sand", 0, [219, 207, 163]], ["sandstone", 0, [216, 203, 156]], ["sealantern", 0, [178, 204, 194]], ["slime", 0, [111, 191, 91]], ["smithing_table", 0, [59, 38, 38]], ["smooth_stone", 0, [161, 161, 161]], ["snow", 0, [249, 254, 254]], ["soul_sand", 0, [82, 62, 51]], ["sponge", 0, [196, 193, 75]], ["log", 9, [111, 82, 48]], ["log", 1, [59, 38, 17]], ["planks", 1, [115, 85, 49]], ["stone", 0, [126, 126, 126]], ["stonebrick", 0, [122, 122, 122]], ["stripped_acacia_log", 2, [167, 91, 51]], ["stripped_acacia_log", 0, [176, 93, 60]], ["stripped_birch_log", 2, [192, 173, 118]], ["stripped_birch_log", 0, [198, 177, 120]], ["stripped_dark_oak_log", 2, [67, 44, 22]], ["stripped_dark_oak_log", 0, [98, 77, 50]], ["stripped_jungle_log", 2, [166, 122, 82]], ["stripped_jungle_log", 0, [172, 133, 85]], ["stripped_oak_log", 1, [162, 131, 78]], ["stripped_oak_log", 0, [179, 146, 87]], ["stripped_spruce_log", 2, [108, 82, 48]], ["stripped_spruce_log", 0, [117, 90, 53]], ["hardened_clay", 0, [152, 94, 68]], ["tnt", 0, [179, 94, 92]], ["sponge", 1, [170, 180, 70]], ["concrete", 0, [207, 213, 214]], ["concretepowder", 0, [226, 228, 228]], ["white_glazed_terracotta", 0, [185, 211, 206]], ["stained_hardened_clay", 0, [210, 178, 161]], ["wool", 0, [234, 236, 237]], ["concrete", 4, [241, 175, 21]], ["concretepowder", 4, [233, 199, 55]], ["yellow_glazed_terracotta", 0, [236, 195, 92]], ["stained_hardened_clay", 4, [186, 133, 35]], ["wool", 4, [249, 198, 40]]]
})();
// const stream = require("stream");
// ]}['"`,
const uuidv4 = crypto.randomUUID;
const app = express();
const server = http.createServer(app);
const wss = new ws.WebSocketServer({ noServer: true });
// var autoLoginTimes = 0;

BigInt.prototype.toJSON = function () { return this.toString() };
Function.__proto__.toString = function () {
    if (this.name) return `function ${this.name}() { [native code] }`;
    return "function() { [native code] }";
}
new function initBuffer() {
    Buffer.prototype.I = 0;
    Buffer.prototype.slice = Buffer.prototype.subarray;
    Buffer.prototype.read = function (len) {
        return this.slice(this.I, this.I += len);
    };
    Buffer.prototype.read2 = function (len) {
        return this.slice(this.I, this.I + len);
    };
    Buffer.prototype.search = function (value) {
        return this.indexOf(value, this.I) - this.I;
    }
}
fs.ReadStream.prototype.read2 = fs.ReadStream.prototype.read;
fs.ReadStream.prototype.I = 0;
fs.ReadStream.prototype.read = function (i) {
    this.I += i;
    return this.read2(i);
}
class createReadStream {
    fd = null;
    I = 0;
    size = 0;
    closed = false;
    constructor(path) {
        this.path = path;
        this.size = fs.statSync(path).size;
        this.fd = fs.openSync(path, "r");
    }
    read(i) {
        if (this.closed) return null;
        var buf = Buffer.alloc(i);
        fs.readSync(this.fd, buf, 0, buf.byteLength, this.I);
        this.I += i;
        return buf;
    }
    end() {
        this.closed = true;
        fs.closeSync(this.fd);
    }
    close = this.end;
    destroy = this.end;
}
class createWriteStream {
    fd = null;
    I = 0;
    closed = false;
    constructor(path) {
        this.path = path;
        this.fd = fs.openSync(path, "w");
    }
    write(buf) {
        if (this.closed) return;
        fs.writeSync(this.fd, buf, 0, buf.byteLength, this.I);
        this.I += buf.byteLength;
        return buf;
    }
    end() {
        this.closed = true;
        fs.closeSync(this.fd);
    }
    close = this.end;
    destroy = this.end;
}
function dateFormat(date) {
    date = date === undefined ? new Date() : new Date(date);
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}.${date.getHours().toString().padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}:${date.getSeconds().toString().padStart(2, "0")}`;
}
var logger = {
    get logFilename() {
        return `${__dirname}/logs/${new Date().toLocaleDateString().replace(/\//g, "-")}.log`;
    },
    get date() {
        var date = new Date();
        return `${date.getMonth() + 1}-${date.getDate()} ${date.getHours().toString().padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}:${date.getSeconds().toString().padStart(2, "0")}.${date.getMilliseconds().toString().padStart(3, "0")}`;
    },
    logOnDisk: false,
    logDate: true,
    // getCont(args) {
    //     var cont = "";
    //     for (var i = 0; i < args.length; i++) {
    //         cont += String(args[i] instanceof Error ? args[i].stack + "\n" : args[i]) + " ";
    //     }
    //     return cont;
    // },
    getCont(args) {
        var cont = "";
        for (var i = 0; i < args.length; i++) {
            if (typeof args[i] === "string") cont += args[i] + " ";
            else if (args[i] instanceof Object) cont += util.inspect(args[i]) + " ";
            else cont += String(args[i]);
        }
        return cont;
    },
    logDisk(info) {
        fs.appendFileSync(this.logFilename, `${info}\n`, "utf8");
    },
    info() {
        var info = `[Info]${this.logDate ? "[" + this.date + "]" : ""} ${this.getCont(arguments)}`;
        broadcastWeb(info);
        console.log(info);
        if (this.logOnDisk) this.logDisk(info);
    },
    cinfo(info, color) {//color info
        broadcastWeb(info);
        info = `[Info]${this.logDate ? "[" + this.date + "]" : ""} ${color instanceof Array ? getValueByPath(info, color) : info[color || "gray"]}`;
        console.log(info);
        if (this.logOnDisk) this.logDisk(info);
    },
    nolog() {
        var info = `[Info]${this.logDate ? "[" + this.date + "]" : ""} ${this.getCont(arguments)}`;
        console.log(info);
    },
    debug() {
        var info = `[Debug]${this.logDate ? "[" + this.date + "]" : ""} ${this.getCont(arguments)}`;
        console.log(info.gray);
        if (this.logOnDisk) this.logDisk(info);
    },
    warn() {
        var info = `${this.logDate ? "[" + this.date + "]" : ""} ${this.getCont(arguments)}`;
        broadcastWeb("[Warn]" + info);
        console.log("[WARN]".yellow + info);
        if (this.logOnDisk) this.logDisk("[WARN]" + info);
    },
    error() {
        var info = `${this.logDate ? "[" + this.date + "]" : ""} ${this.getCont(arguments)}`;
        console.log("[ERROR]".red.bold + info.white.bold);
        if (this.logOnDisk) this.logDisk("[ERROR]" + info);
        stat.errors++;
    },
    fatal() {
        console.log(`${"[FATAL]".red}${this.logDate ? ("[" + this.date + "]").yellow : ""} ${this.getCont(arguments).red.bold}`);
        if (this.logOnDisk) this.logDisk(`[FATAL]${this.logDate ? "[" + this.date + "]" : ""} ${this.getCont(arguments)}`);
        process.exit(0);
    }
}
class RSON {
    static parse(text) {
        function setValueByPath(json, path, content, i) {
            if (i === path.length - 1) {
                json[path[path.length - 1]] = content;
            } else {
                setValueByPath(json[path[i]], path, content, ++i);
            }
        }
        function removeSpaces(str) {
            var size = str.length;
            var start = 0;
            for (var i = str.length - 1; i >= 0; i--) {
                if (str[i] !== " ") {
                    break;
                }
                size = i;
            }
            for (var i = 0; i < str.length; i++) {
                if (str[i] !== " ") {
                    break;
                }
                start = i + 1;
            }
            return str.slice(start, size);
        }
        function getHierarchy(text, target, deepth, offsetLine) {
            var len = 0;
            var split = text.split("\n");
            var strhead = -1;
            for (var i = 0; i < offsetLine; i++) {
                len += split[i].length + 1;
            }
            for (var i = offsetLine; i < split.length; i++) {
                var deepnow = 0;
                if (split[i].split(" ").length !== 0) {
                    deepnow = split[i].split(" ")[0].split(">").length - 1;
                }
                if (deepnow === deepth) {
                    var index = split[i].indexOf(target[1]);
                    strhead += split[i].split(target[0]).length - 1;
                    if (index !== -1) {
                        if (strhead > 0) { break; }
                        len += index;
                        return len;
                    }
                }
                len += split[i].length + 1;
            }

            throw new Error(`File Parse Error:
        missing "${target[1]}" at Line ${offsetLine + 1}
            --> '${split[offsetLine]}'
        (end at String Length ${len})\n`);
        }
        function getValue(content) {
            // console.log(content);
            // process.exit()
            if (content.indexOf("*num") !== -1) {
                return parseFloat(content);
            } else if (content.indexOf("*undef") !== -1) {
                return undefined;
            } else if (content.indexOf("*null") !== -1) {
                return null;
            } else if (content.indexOf("*json") !== -1) {
                return JSON.parse(content.split("*json")[0])
            } else if (content.indexOf("*bool") !== -1) {
                // console.log(content);
                var bool = content.split("*bool")[0];
                return bool.indexOf("true") !== -1 || bool.indexOf("t") !== -1;
            } else if (content.indexOf("*func") !== -1) {
                return Function(content.split("*func")[0]);
            } else {
                return content;
            }
        }
        function removeLinePrefix(text) {
            var lines = text.split("\n");
            var res = "";

            for (var i = 0; i < lines.length; i++) {
                // for (var r = 0; r < lines[i].length; r++) {
                var r = 0;
                if (lines[i][0] === " ") { res += lines[i]; continue; }
                for (var j = 0; j < lines[i].length; j++) {
                    if (lines[i][j] === ">") {
                        r++;
                    } else {
                        break;
                    }
                }
                for (var j = r; j < lines.length; j++) {
                    if (lines[i][j] === " ") {
                        r++;
                    } else {
                        break;
                    }
                }
                res += lines[i].slice(r, Infinity);
                res += i === lines.length - 1 ? "" : "\n";
            }
            return res;
        }
        function getLine(text, i) {
            return text.slice(0, i).split("\n").length - 1;
        }
        var split = text.split("\n");
        text = "";
        for (var i = 0; i < split.length; i++) {
            text += split[i].split("*//")[0] + (i === split.length - 1 ? "" : "\n");
        }
        var line = 0;
        var res = {};
        var path = [];
        var deepth = 0;
        for (var i = 0; i < text.length; i++) {
            var linenow = getLine(text, i);
            if (linenow !== line) {
                line = linenow;
                if (split[line].split(" ").length !== 0) {
                    var deepth_ = split[line].split(" ")[0].split(">").length - 1;
                    if (deepth_ - deepth < 0) {
                        path = path.slice(0, path.length - (deepth - deepth_));
                    }
                    deepth = deepth_;
                }
            }
            if (text[i] === "[") {
                var elementEndpos = text.indexOf("]", i);
                if (elementEndpos === -1) elementEndpos = Infinity;
                path.push(text.slice(i + 1, elementEndpos));
                i = elementEndpos;
                setValueByPath(res, path, {}, 0);
            } else if (text[i] === "*" && text[i + 1] === ":") {
                i++;
            } else if (text[i] === "\n") {
            } else if (text[i] !== " ") {
                if (text[i] === "*" && text[i + 1] === "(") {
                    var endIndex = getHierarchy(text, ["*(", "*)"], deepth, line);
                    if (typeof endIndex === "object") { return endIndex }
                    var content = removeLinePrefix(text.slice(i + 2, endIndex));
                    setValueByPath(res, path, content, 0);
                    path.pop();
                    i = endIndex + 2;
                } else if (text[i] === ">") {
                    // console.log("continue");
                    continue;
                } else if (text[i] === "*" && text[i + 1] === "{") {
                    var endIndex = getHierarchy(text, ["*{", "*}"], deepth, line);
                    if (typeof endIndex === "object") { return endIndex }
                    var content = removeLinePrefix(text.slice(i + 2, endIndex)).replace(/\n/g, "").split("*,");
                    for (var r = 0; r < content.length; r++) {
                        content[r] = getValue(content[r]);
                    }
                    setValueByPath(res, path, content, 0);
                    path.pop();
                    i = endIndex + 2;
                } else {
                    var index = text.indexOf("\n", i) === -1 ? text.length : text.indexOf("\n", i);
                    var content = getValue(removeSpaces(text.slice(i, index)));
                    setValueByPath(res, path, content, 0);
                    path.pop();
                    i = index;
                }
            }
        }
        return res;
    }
    static stringify(obj, deepth) {
        function addHierarchy(str, deepth) {
            if (deepth !== 0) {
                var split = str.split("\n");
                var str = split.shift();
                for (var i = 0; i < split.length; i++) {
                    str += `\n>${split[i]}`;
                }
            }
            return str;
        }
        function getValue(value) {
            var suffix = ["", String(value)];
            if (typeof value === "boolean") { suffix[0] = "*bool" }
            else if (typeof value === "function") { suffix[0] = "*func"; suffix[1] = suffix[1].replace(/\n/g, ";"); }
            else if (typeof value === "number") { suffix[0] = "*num" }
            else if (value === undefined) {
                suffix[0] = "*undef";
                suffix[1] = "";
            }
            else if (value === null) {
                suffix[0] = "*null";
                suffix[1] = "";
            }
            else if (value instanceof Array) {
                var arrstr = "";
                for (var i = 0; i < value.length; i++) {
                    if (typeof value[i] === "boolean") { arrstr += value[i] + "*bool" }
                    else if (value[i] === undefined) {
                        arrstr += "*undef";
                    }
                    else if (value[i] === null) {
                        arrstr += "*null";
                    }
                    else if (typeof value[i] === "function") { arrstr += value[i] + "*func" }
                    else if (typeof value[i] === "number") { arrstr += value[i] + "*num" }
                    else if (value[i] instanceof Object) {
                        arrstr += JSON.stringify(value[i]) + "*json";
                    }
                    i !== value.length - 1 ? arrstr += " *, " : undefined;
                }
                suffix[1] = `*{ ${arrstr} *}`;
            }
            else if (value instanceof Object) {
                suffix[0] = false;
            }
            else if (String(value) && String(value).split("\n").length > 1) {
                // console.log(1)
                suffix[1] = `*(${value}*)`;
                // console.log(suffix[1])
            }

            return suffix;
        }
        deepth = deepth ? deepth : 0;
        // console.log(deepth, "deepth");
        var retstr = "";
        for (i in obj) {
            // console.log(i);
            var value = getValue(obj[i]);
            if (value[0] === false) {
                // retstr += `\n[${i}] *: ${RSON.stringify(obj[i], deepth + 1)}`;
                retstr += `\n[${i}] ${RSON.stringify(obj[i], deepth + 1)}`;
            } else {
                // retstr += `\n[${i}] *: ${value[1] + value[0]}`;
                retstr += `\n[${i}] ${value[1] + value[0]}`;
            }

        }
        retstr = addHierarchy(retstr, deepth);
        if (deepth === 0) {
            var spl = retstr.split("\n");
            var endstr = "";
            for (var i = 0; i < spl.length; i++) {
                var startIndex = 0;
                for (var r = 0; r < spl[i].length; r++) {
                    if (spl[i][r] === ">") {
                        startIndex++;
                    } else {
                        break;
                    }
                }
                endstr += spl[i].slice(0, startIndex) + "".padStart(startIndex * 4 - startIndex) + spl[i].slice(startIndex, Infinity) + "\n";
            }
            return endstr;
        }
        return retstr;
    }
}

function getValueByPath(json, path, i) {
    if (i === undefined) i = 0;
    return i === path.length - 1 ? json[path[i]] : getValueByPath(json[path[i]], path, ++i);
}
function setValueByPath(json, path, content, i) {
    if (i === undefined) i = 0;
    if (i === path.length - 1) {
        json[path[path.length - 1]] = content;
    } else {
        setValueByPath(json[path[i]], path, content, ++i);
    }
}
function quickSort(arr, path) {
    if (arr.length <= 1) {
        return arr;
    }
    var arrCopy = [].concat(arr);
    var left = [];
    var right = [];
    var middle = arrCopy.splice(Math.floor(arrCopy.length / 2), 1);
    for (var i = 0; i < arrCopy.length; i++) {
        if (parseFloat(getValueByPath(arrCopy[i], path)) > parseFloat(getValueByPath(middle[0], path))) {
            left.push(arrCopy[i]);
        } else {
            right.push(arrCopy[i]);
        }
    }
    return quickSort(left, path).concat(middle).concat(quickSort(right, path));

}
function quickSortBR(arr, path) {
    if (arr.length <= 1) {
        return arr;
    }
    var arrCopy = [].concat(arr);
    var left = [];
    var right = [];
    var middle = arrCopy.splice(Math.floor(arrCopy.length / 2), 1);
    for (var i = 0; i < arrCopy.length; i++) {
        if (parseFloat(getValueByPath(arrCopy[i], path)) > parseFloat(getValueByPath(middle[0], path))) {
            right.push(arrCopy[i]);
        } else {
            left.push(arrCopy[i]);
        }
    }
    return quickSortBR(left, path).concat(middle).concat(quickSortBR(right, path));

}







// ]}['"`,
var verify = {
    pass() {
        verified = true;
        loadPlugin();
    },
    deny() {
        verified = false;
    }
}
// var clientHeader = function () {
//     var uuid1 = uuidv4();
//     var uuid2 = uuidv4();
//     return {
//         "Rimspace": "v" + version,
//         "Author": "EltanceX (annularwind@outlook.com)",
//         "Contributor": "Voyage27 (476445136@qq.com)",
//     }
// };
// wsClient.WebSocket.prototype.login = function (uuid, name, pwd, callback) {
//     var num = random(1000, 5000);
//     var json = {
//         num: num,
//         name: name,
//         uuid: uuid,
//         pwd: pwd
//     };
//     var crypted = RSC.crypto(JSON.stringify(json));
//     this.send2(Buffer.concat([Buffer.from([0xe2]), crypted]), function (data) {
//         if (!data) {
//             callback?.(new Error("Receive timeout"));
//             return;
//         }
//         var id = data.read(1)[0];
//         if (id === 0x01) {
//             callback?.(new Error(data.read(Infinity).toString()));
//         } else {
//             try {
//                 var _num = data.read(4).readInt32BE();
//                 var json = JSON.parse(RSC.decode(data.read(Infinity)).toString());
//                 if (_num = num + 1234) {
//                     callback?.(json);
//                 } else {
//                     callback?.(new Error("Data corruption or error"));
//                 }
//             } catch (err) {
//                 callback?.(new Error("Error when parsing data returned"));
//             }
//         }
//     });
// }
// wsClient.WebSocket.prototype.register = function (token, name, pwd, callback) {
//     var data = ["", token, name, pwd].join(uuidv4());
//     var crypted = RSC.crypto(data);
//     this.send2(Buffer.concat([Buffer.from([0xe1]), crypted]), function (data) {
//         if (!data) {
//             callback?.(new Error("Receive timeout"));
//             return;
//         }
//         var id = data.read(1)[0];
//         if (id === 0x01) {
//             callback?.(new Error(data.read(Infinity).toString()));
//         } else {
//             callback?.(data.read(data.read(1).readUInt8()).toString());
//         }
//     });
// }
// wsClient.WebSocket.prototype.event = {
//     f: {},
//     fi: -1,
//     u: {},
//     ui: -1
// };
// wsClient.WebSocket.prototype.removeEvent = function (event) {
//     for (var i in this.event.f) {
//         if (this.event.f[i] === event) {
//             delete this.event.f[i];
//         }
//     }
// }
// wsClient.WebSocket.prototype.sequence = {};
// wsClient.WebSocket.prototype.sid = -1;
// wsClient.WebSocket.prototype.send2 = function (buffer, callback, sid) {
//     sid = sid ?? ++this.sid;
//     var _sid = Buffer.alloc(4);
//     _sid.writeUInt32BE(sid);
//     if (callback instanceof Function) {
//         this.sequence[sid] = {
//             date: Date.now(),
//             func: callback
//         };
//     }
//     this.send(Buffer.concat([Buffer.from([0x01]), _sid, buffer]));
// };
// wsClient.WebSocket.prototype.ret = function (buffer, sid) {
//     var _sid = Buffer.alloc(4);
//     _sid.writeUInt32BE(sid);
//     this.send(Buffer.concat([Buffer.from([0x02]), _sid, buffer]));
// }
// var userJSON = JSON.parse(fs.readFileSync("./user.json"));
// if (userJSON.serverline !== undefined)
//     serverInfo.address = serverLine[userJSON.serverline] ?? serverLine[0];
// var client = new wsClient.WebSocket("ws://" + serverInfo.address + ":" + serverInfo.port, {
//     headers: clientHeader()
// });
function saveUserJSON() {
    try {
        var json = JSON.stringify(userJSON, null, "\t");
        if (json) {
            fs.writeFileSync("./user.json", json);
        }
    } catch (err) {
        logger.error(err);
    }
}


// initClient();
function initClient() {
    client.on("message", function (data, isbin) {
        // console.log("data", data);
        try {
            var id = data.read(1)[0];
        } catch (err) {
            console.log("Error when reveiving messages");
            return;
        }
        switch (id) {
            case 0x01://send
                try {
                    var sid = data.read(4).readUInt32BE();
                    // console.log(data.read(Infinity).toString());
                    var statId = data.read(1)[0];
                } catch (err) {
                    console.log("Error when parseing data from server");
                    return;
                }
                switch (statId) {
                    case 0x00://UPLOAD
                        try {
                            var fId = data.read(1)[0];
                            var funcId = data.read(4).readUInt32BE();
                        } catch (err) {
                            console.log("Error when parsing ID");
                            return;
                        }
                        if (fId === 0) {
                            client.event.f[funcId]?.func.call(client.event.f[funcId], "TRANSMIT", data.read(Infinity));
                        } else if (fId === 1) {
                            client.event.f[funcId]?.func.call(client.event.f[funcId], "END", data.read(Infinity));
                        }
                        client.ret(Buffer.alloc(0), sid);
                        break;
                    case 0x01://DOWNLOAD
                        try {
                            var id = data.read(1)[0];
                        } catch (err) {
                            console.log("Error when parsing ID");
                            return;
                        }
                        if (id === 0x00) {
                            try {
                                var fd = data.read(2).readUInt16BE();
                                var readPos = data.read(4).readUInt32BE();
                                var length = data.read(4).readUInt32BE();
                                var buf = Buffer.alloc(length);
                                fs.readSync(fd, buf, 0, length, readPos);
                            } catch (err) {
                                console.log("Error when processing information before uploading");
                                return;
                            }
                            client.ret(buf, sid);
                        } else if (id === 0x01) {
                            try {
                                var fd = data.read(2).readUInt16BE();
                                var scoin = data.read(4).readUInt32BE();
                                var price = parseFloat(data.read(4).readFloatBE().toFixed(2));
                                var ind = data.read(4).readUInt32BE();
                                var error = data.read(Infinity).toString();
                                fs.closeSync(fd);
                                console.log("Coin data", scoin, price);
                            } catch (err) {
                                client.event.u[ind].func?.(new Error("Error at the end of the upload"));
                                delete client.event.u[ind];
                                // console.log("Error at the end of the upload");
                                return;
                            }
                            if (error) {
                                client.event.u[ind].func?.(new Error("Server returns an error:\n", error));
                                delete client.event.u[ind];
                                // console.log("Server returns an error:\n", error);
                            } else {
                                client.event.u[ind].func?.(true, scoin, price);
                                delete client.event.u[ind];
                            }
                            // console.log("Upload END");
                        }
                        break;
                    case 0x03://WORLDCHAT
                        try {
                            var player = data.read(data.read(1).readUInt8()).toString();
                            var chat = data.read(data.read(2).readUInt16BE()).toString();
                            chat = chat.slice(1);
                            chat = chat.replace(/"/g, "\\\"");
                            logger.cinfo(`WorldChat <${player}> ${chat}`, "brightWhite");
                            for (var i = 0; i < mcConnections.length; i++) {
                                mcConnections[i].tellraw(`§7WorldChat §f<${player}> ${chat}`);
                            }
                        } catch (err) {
                            return;
                        }
                        break;
                    default:
                        break;
                }

                break;
            case 0x02://Leave him alone. It's an automatic event
                try {
                    var sid = data.read(4).readUInt32BE();
                } catch (err) {
                    console.log(err);
                    return;
                }
                if (this.sequence[sid]) {
                    this.sequence[sid].func.call(this.sequence[sid], data.read(Infinity));
                    delete this.sequence[sid];
                }
                break;
            default://Nothing
                break;
        }
    });
    client.on("open", function () {
        autoLoginTimes = 0;
        verify.deny();
        if (userJSON.uuid && userJSON.password) {
            client.login(userJSON.uuid, "", userJSON.password, function (json) {
                if (json instanceof Error) {
                    logger.warn(lang("login", "fail"));
                } else {
                    verify.pass();
                    __version = json.version;
                    process.title = `Rimspace v${version}`;
                    logger.info(lang("login", "success"));
                    logger.cinfo(`${lang("login", "welcome")}, ${json.name} !`, "brightWhite");
                }
            });
        } else {
            logger.warn(lang("login", "error", "emptyfile"));
        }
    });
    client.on("error", function (err) {
        if (err.stack.indexOf("ECONNREFUSED") !== -1) {
            logger.warn(lang("login", "error", "ECONNREFUSED"));
            loadHttps("annularwind.github.io", "uuid/line", function (err, data) {
                // console.log(data);
                if (err) {
                    logger.debug("Fail to get Server Information. Please check your Internet connection !");
                    return;
                }
                try {
                    var json = JSON.parse(data)[vuid];
                    if (!json) return;
                    if (serverLine[json.index] !== serverInfo.address || json.port !== serverInfo.port) {
                        logger.info("Attempting to switch authentication server lines...");
                        serverInfo.address = serverLine[json.index || 0];
                        serverInfo.port = json.port || 45663;
                    }
                } catch (err) { }
            });
        }
    });
    client.on("close", function (code, reason) {
        verify.deny();
        logger.error(lang("login", "error", "lost"));
        logger.debug(`Rimspace will try to reconnect in 10 seconds. ( ${autoLoginTimes} / 20 )`);
        //retry...
        setTimeout(() => {
            logger.info("Connecting to the authentication server...");
            if (++autoLoginTimes < 20) {
                client = new wsClient.WebSocket("ws://" + serverInfo.address + ":" + serverInfo.port, {
                    headers: clientHeader()
                });
                initClient();
            } else {
                logger.error("The number of reconnection attempts has reached the upper limit, and rimspace will automatically exit.");
                exit();
            }
        }, 10000);
    });
}
function changepwd(pwd, callback) {
    if (client.readyState === 1) {
        var pwd
        var _pwd = Buffer.from(pwd);
        var pwdlen = Buffer.alloc(1);
        pwdlen.writeUInt8(_pwd.byteLength);
        if (_pwd.length < 4 || _pwd.length > 20) {
            callback?.(new Error(lang("login", "error", "pwd length")));
            return;
        }
        client.send2(Buffer.concat([Buffer.from([0x09]), pwdlen, _pwd]), function (data) {
            if (data) {
                var id = data.read(1)[0];
                if (id === 0x01) {
                    callback?.(new Error(data.read(Infinity).toString()));
                } else if (id === 0x00) {
                    callback?.(true);
                }
            } else {
                callback?.(new Error("Server error"));
            }
        });
    } else {
        callback?.(new Error("Not connected to server"));
    }
};
function rename(name, callback) {
    if (client.readyState === 1) {
        var _name = Buffer.from(name);
        var namelen = Buffer.alloc(1);
        namelen.writeUInt8(_name.byteLength);
        if (_name.length < 4 || _name.length > 20) {
            callback?.(new Error(lang("login", "error", "name length")));
            return;
        }
        client.send2(Buffer.concat([Buffer.from([0x08]), namelen, _name]), function (data) {
            if (data) {
                var id = data.read(1)[0];
                if (id === 0x01) {
                    callback?.(new Error(data.read(Infinity).toString()));
                } else if (id === 0x00) {
                    callback?.(parseFloat(Buffer.read(4).readFloatBE().toFixed(2)));
                }
            } else {
                callback?.(new Error("Server error"));
            }
        });
    } else {
        callback?.(new Error("Not connected to server"));
    }
}
function getFileListByType(type, callback) {
    if (client.readyState === 1) {
        var _type = Buffer.from(type);
        var typelen = Buffer.alloc(1);
        typelen.writeUInt8(_type.byteLength);
        client.send2(Buffer.concat([Buffer.from([0x07]), typelen, _type]), function (data) {
            // console.log(data,888999);
            if (data) {
                var id = data.read(1)[0];
                if (id === 0x01) {
                    callback?.(new Error(data.read(Infinity).toString()));
                } else if (id === 0x00) {
                    var files = [];
                    while (data.I < data.byteLength) {
                        files.push({
                            name: data.read(data.read(1).readUInt8()).toString(),
                            des: data.read(data.read(1).readUInt8()).toString(),
                            author: data.read(data.read(1).readUInt8()).toString(),
                            date: parseInt(data.read(8).readBigUInt64BE()),
                            size: data.read(4).readUInt32BE(),
                            price: parseFloat(data.read(4).readFloatBE().toFixed(2)),
                            download: data.read(2).readUInt16BE()
                        });
                    }
                    callback?.(files);
                }
            } else {
                callback?.(new Error("Server error"));
            }
        });
    } else {
        callback?.(new Error("Not connected to server"));
    }
}
function getTypes(callback) {
    if (client.readyState === 1) {
        client.send2(Buffer.from([0x06]), function (data) {
            if (data) {
                var types = [];
                while (data.I < data.byteLength) {
                    types.push(data.read(data.read(1).readUInt8()).toString());
                }
                callback?.(types);
            } else {
                callback?.(new Error("Server error"));
            }
        });
    } else {
        callback?.(new Error("Server not connected"));
    }
}
function deleteFile(type, name, callback) {
    if (client.readyState === 1) {
        var _type = Buffer.from(type);
        var typelen = Buffer.alloc(1);
        typelen.writeUInt8(_type.byteLength);
        var _name = Buffer.from(name);
        var namelen = Buffer.alloc(1);
        namelen.writeUInt8(_name.byteLength);
        client.send2(Buffer.concat([Buffer.from([0x05]), typelen, _type, namelen, _name]), function (data) {
            if (data) {
                var id = data.read(1)[0];
                if (id === 0x00) {
                    var deduction = parseFloat(data.read(4).readFloatBE().toFixed(2));
                    callback?.(deduction);
                } else if (id === 0x01) {
                    callback?.(new Error(data.read(Infinity).toString()));
                }
            } else {
                callback?.(new Error("Server error"));
            }
        });
    } else {
        callback?.(new Error("Server not connected"));
    }
}
function modifyPrice(type, name, price, callback) {
    if (client.readyState === 1) {
        var _type = Buffer.from(type);
        var typelen = Buffer.alloc(1);
        typelen.writeUInt8(_type.byteLength);
        var _name = Buffer.from(name);
        var namelen = Buffer.alloc(1);
        namelen.writeUInt8(_name.byteLength);
        var _price = Buffer.alloc(2);
        _price.writeUInt16BE(price);
        client.send2(Buffer.concat([Buffer.from([0x04]), typelen, _type, namelen, _name, _price]), function (data) {
            if (data) {
                var id = data.read(1)[0];
                if (id === 0x00) {
                    callback?.(true);
                } else if (id === 0x01) {
                    callback?.(new Error("Error: " + data.read(Infinity).toString()));
                }
            } else {
                callback?.(new Error("Server error"));
            }
        });
    } else {
        callback?.(new Error("Server not connected"));
    }
}
function unlock(type, name, callback) {
    if (client.readyState === 1) {
        var _type = Buffer.from(type);
        var typelen = Buffer.alloc(1);
        typelen.writeUInt8(_type.byteLength);
        var _name = Buffer.from(name);
        var namelen = Buffer.alloc(1);
        namelen.writeUInt8(_name.byteLength);
        client.send2(Buffer.concat([Buffer.from([0x03]), typelen, _type, namelen, _name]), function (data) {
            if (data) {
                var id = data.read(1)[0];
                if (id === 0x00) {
                    var cost = data.read(4).readFloatBE().toFixed(2);
                    callback?.(cost);//Success
                } else if (id === 0x01) {
                    callback?.(new Error("Error: " + data.read(Infinity).toString()));
                }
            } else {
                callback?.(new Error("Server error"));
            }
        });
    } else {
        callback?.(new Error("Server not connected"));
    }
}
function upload(path, uname, type, description, callback) {
    if (client.readyState === 1) {
        try {
            var size = fs.statSync(path).size;
            var _size = Buffer.alloc(4);
            _size.writeUInt32BE(size);
            var _uname = Buffer.from(uname);
            var len = Buffer.alloc(1);
            len.writeUInt8(_uname.byteLength);
            var fd = fs.openSync(path, "r");
            var _fd = Buffer.alloc(2);
            _fd.writeUInt16BE(fd);
            var _type = Buffer.from(type);
            var typelen = Buffer.alloc(1);
            typelen.writeUInt8(_type.byteLength);
            var _description = Buffer.from(description);
            var descriptionLen = Buffer.alloc(1);
            descriptionLen.writeUInt8(_description.byteLength);

        } catch (err) {
            callback?.(new Error("Error when processing information before uploading"));
            return;
        }
        var reader = fs.createReadStream(path);
        var hash = crypto.createHash("md5");
        reader.on("data", function (d) {
            hash.update(d);
        });
        reader.on("error", function (err) {
            callback?.(new Error("Error when reading file"));
        });
        reader.on("end", function () {
            var md5 = hash.digest("hex");
            hash.end();
            var _md5 = Buffer.from(md5);
            var md5len = Buffer.alloc(2);
            md5len.writeUInt16BE(_md5.byteLength);
            var ind = ++client.event.ui;
            var _ind = Buffer.alloc(4);
            _ind.writeUInt32BE(ind);
            if (callback instanceof Function)
                client.event.u[ind] = {
                    func: callback,
                    date: Date.now()
                }
            client.send2(Buffer.concat([Buffer.from([0x02]), _size, typelen, _type, len, _uname, _fd, md5len, _md5, descriptionLen, _description, _ind]), function (data) {
                if (data) {
                    try {
                        var id = data.read(1)[0];
                        if (id === 0x01) {
                            var str = data.read(Infinity).toString();
                            fs.closeSync(fd);
                            callback?.(new Error("Upload Error: " + str));
                        } else if (id === 0x00) {
                            // console.log("Upload Start");
                        }
                    } catch (err) {
                        callback?.(err);
                        return;
                    }
                }
            });
        })

    } else {
        console.log("Server not connected");
    }
}
function download(type, file, save, callback) {
    if (client.readyState === 1) {
        try {
            var i = ++client.event.fi;
            var ibuff = Buffer.alloc(4);
            ibuff.writeUInt32BE(i);
            var _type = Buffer.from(type);
            var typeLen = Buffer.alloc(1);
            typeLen.writeUInt8(_type.byteLength);
            var _file = Buffer.from(file);
            var fileLen = Buffer.alloc(1);
            fileLen.writeUInt8(_file.byteLength);
            var tosend = Buffer.concat([Buffer.from([0x01]), ibuff, typeLen, _type, fileLen, _file]);
        } catch (err) {
            callback?.(new Error("Error at the beginning of the download"));
            return;
        }
        client.send2(tosend, function (data) {
            if (!data) return;
            try {
                var id = data.read(1)[0];
            } catch (err) {
                callback?.(err);
                return;
            }
            switch (id) {
                case 0x00://Prepare and start transmit
                    fs.writeFileSync(save, Buffer.alloc(0));
                    client.event.f[i] = {
                        func: function (type, buffer) {
                            if (type === "TRANSMIT") {
                                fs.appendFileSync(this.save, buffer);
                            } else if (type === "END") {
                                var md5 = buffer.read(buffer.read(2).readUInt16BE()).toString();
                                var reader = fs.createReadStream(this.save);
                                var save = this.save;
                                var hash = crypto.createHash("md5");
                                reader.on("data", function (d) {
                                    hash.update(d);
                                });
                                reader.on("error", function (err) {
                                    callback?.(new Error("Error when checking file"));
                                });
                                reader.on("end", function () {
                                    var md5_ = hash.digest("hex");
                                    hash.end();
                                    // console.log(md5, md5_);
                                    if (md5 !== md5_) {
                                        fs.unlinkSync(save);
                                        callback?.(new Error("File corrupted"));
                                        return;
                                    };
                                    callback?.(true);
                                });
                                client.removeEvent(this);
                            }
                        },
                        callback: callback,
                        save: save
                    }
                    break;
                case 0x01:
                    var reason = data.read(Infinity).toString();
                    // console.log(new Error(reason));
                    callback?.(new Error(reason));
                    break;
                default:
                    break;
            }
        });
    } else {
        callback?.(new Error("Error: Not connected to server"));
    }
}
function getUserInfo(callback) {
    if (verified && client.readyState === 1) {
        client.send2(Buffer.from([0x0a]), function (data) {
            if (data instanceof Error) {
                callback?.(data);
            } else if (!data) {
                callback?.(new Error("The server returned an invalid value"));
            } else {
                var json = {
                    name: data.read(data.read(1).readUInt8()).toString(),
                    lastLogin: parseInt(data.read(8).readBigUInt64BE()),
                    regTime: parseInt(data.read(8).readBigUInt64BE()),
                    effective: parseInt(data.read(8).readBigUInt64BE()),
                    silver_coin: parseFloat(data.read(4).readFloatBE().toFixed(2)),
                    uuid: data.read(data.read(1).readUInt8()).toString(),
                    version: data.read(1).readInt8()
                }
                callback?.(json);
            }
        });
    } else {
        callback?.(new Error("Server not connected"));
    }
}
function signin(callback) {
    if (client.readyState === 1) {
        client.send2(Buffer.from([0x0b]), function (data) {
            if (data) {
                try {
                    var id = data.read(1)[0];
                    if (id === 0x00) {
                        var coin = parseFloat(data.read(4).readFloatBE().toFixed(2));
                        var exp = parseFloat(data.read(4).readFloatBE().toFixed(2));
                        callback?.(coin, exp);
                    } else {
                        callback?.(new Error(data.read(Infinity).toString()));
                    }
                } catch (err) {
                    callback?.(err);
                }
            } else {
                callback?.(new Error("Server error"));
            }
        });
    } else {
        callback?.(new Error("Server not connected"));
    }
}
function worldchat(player, chat) {
    try {
        player = Buffer.from(player);
        chat = Buffer.from(chat);
        var playerlen = Buffer.alloc(1);
        playerlen.writeUInt8(player.byteLength);
        var chatlen = Buffer.alloc(2);
        chatlen.writeUInt16BE(chat.byteLength);
        client.send2(Buffer.concat([Buffer.from([0x0c]), playerlen, player, chatlen, chat]));
    } catch (err) {
        return;
    }
}
function protocol(callback) {
    if (client.readyState === 1) {
        client.send2(Buffer.from([0x0d]), function (data) {
            if (data) {
                try {
                    var id = data.read(1)[0];
                    if (id === 0x00) {
                        var protocol = zlib.brotliDecompressSync(data.read(Infinity)).toString();
                        callback?.(protocol);
                    } else {
                        callback?.(new Error(data.read(Infinity).toString()));
                    }
                } catch (err) {
                    callback?.(err);
                }
            } else {
                callback?.(new Error("Server error"));
            }
        });
    } else {
        callback?.(new Error("Server not connected"));
    }
}










var config;
var target = null;
var onkeypress = false;
var tickSequence = [];
var mcConnections = [];
var webConnections = [];
var lastConnected = null;
var web = {};
// var webStatic = {};
var ftcache = {};
var __lang = [];
var __langLoaded = [];
var tips = [];
var pageLoadFailed = 0;

// ]}['"`,
var stat = {
    startTime: new Date().getTime(),
    cpuUsage: 0,
    uptimeTick: -1,
    errors: 0,
    nodemem: 0,
    cpu: {
        module: os.cpus()[0]?.model,
        cores: os.cpus().length,
        speed: os.cpus()[0]?.speed / 1000
    }, //module cores speed
    platform: os.platform(), //linux
    arch: os.arch(), //arm
    userInfo: os.userInfo(), //username homedir shell
    sysVersion: os.version(), //ver
    net: os.networkInterfaces(),
    env: process.env,
    connectionTimes: 0
}
var gameTaskSys = {
    idCounter: -1,
    task: [],
    removeTaskById(id) {
        for (var i = 0; i < this.task.length; i++) {
            if (this.task[i].id == id) {
                return this.removeTask(this.task[i]);
            }
        }
        return false;
    },
    getTaskById(id) {
        for (var i = 0; i < this.task.length; i++) {
            if (this.task[i].id == id) {
                return this.task[i];
            }
        }
        return false;
    },
    removeTask(obj) {
        for (var i = 0; i < this.task.length; i++) {
            if (this.task[i] === obj) {
                this.task[i].alive = false;
                this.task[i].pause = true;
                this.task[i].onclose?.();
                this.task.splice(i, 1);
                return true;
            }
        }
        return false;
    },
    removeTaskBySocket(socket) {
        for (var i = 0; i < this.task.length; i++) {
            if (this.task[i].socket === socket) {
                this.removeTask(this.task[i]);
                return true;
            }
        }
        return false;
    }
}
class eventListen {
    createTime = new Date().getTime();
    createTick = stat.uptimeTick;
    socket = null;
    /**
     * Remove this
     */
    remove() {
        for (var i = 0; i < this.socket.evs.length; i++) {
            if (this.socket.evs[i] === this) {
                this.socket.evs.splice(i, 1);
            }
        }
    }
    /**
     * 
     * @param {*} socket Minecraft socket
     * @param {*} evname Event Name
     * @param {*} func Callback(json); this: eventListen <class>
     */
    constructor(socket, evname, func) {
        this.socket = socket;
        this.evname = evname;
        this.func = func;
    }
}

class task {
    circleInterval = [4, 0];
    forceDraw = null;
    resume = null;
    alive = true;
    pause = false;
    onclose = null;
    creationTime = new Date().getTime();
    id = ++gameTaskSys.idCounter;
    display = {
        content: [],
        enable: true
    };
    defFirstDisplay() {
        return `§r§f<Task: ${this.id}> ${this.name}§r§f`;
    }
    /**
     * 
     * @param {ws} socket 
     * @param {String} name 
     * @param {Function} func Callback. arguments=null, this=task
     */
    constructor(socket, name, func) {
        this.socket = socket;
        this.func = func;
        this.name = name || '';
        if (this.name)
            this.display.content.push(this.defFirstDisplay());
        gameTaskSys.task.push(this);
    }
}
class tickTask {
    createTime = new Date().getTime();
    createTick = stat.uptimeTick;
    constructor(func, wait, socket) {
        this.func = func;
        this.waitTick = wait;
        this.execTick = stat.uptimeTick + wait;
        this.socket = socket;
        if (wait > 20 * 60 * 5) {
            logger.warn("Tick Task: Long time warn.");
        }
        tickSequence.push(this);
    }
}
/**
 * @returns Create a random number within [arg0, arg1] range.
 */
function random() {
    return Math.ceil(Math.random() * (arguments[1] - arguments[0] + 1)) + arguments[0] - 1;
}
/**
 * 
 * @param {*} len Placeholder length
 * @param {*} percentage Percentage [0, 1]
 * @returns §x[§x||§x||||||||§x]
 */
function drawProgress(len, percentage, color) {
    if (percentage > 1) percentage = 1;
    return "§f[" + (`§${color || "a"}`.padEnd(Math.round(len * percentage) + 2, "|") + "§7").padEnd(len + 4, "|") + "§f]";
}
function getAvailIps() {
    var net = os.networkInterfaces();
    var str = lang("console", "ip", "title") + ":";
    for (var nInterface in net) {
        str += `\n<${nInterface}> `;
        for (var i = 0; i < net[nInterface].length; i++) {
            str += `\n  ${net[nInterface][i].address} (${net[nInterface][i].family})`;
        }
    }
    return str;
}
function parseCmd(str) {
    var parsed = {
        original: str,
        header: undefined,
        body: [],
        opt: {}
    }
    var lastOptVar = undefined;

    var headerLength = str.indexOf(" ");
    if (headerLength !== -1) { parsed.header = str.slice(0, headerLength) }
    else { parsed.header = str }
    if (headerLength !== -1) {
        for (var i = headerLength + 1; i < str.length; undefined) {
            if (str[i] === "-") {
                var optlen = str.indexOf(" ", i + 1);
                var itemlen = str.indexOf("=", i + 1);
                if (optlen === -1) { optlen = str.length }
                if (itemlen === -1) { itemlen = str.length }

                if (itemlen < optlen) {
                    lastOptVar = str.slice(i + 1, itemlen);
                    parsed.opt[lastOptVar] = null;
                    i = 1 + itemlen;
                } else {
                    parsed.opt[str.slice(i + 1, optlen)] = true;
                    i = 1 + optlen;
                }
            } else if (str[i] === " ") { i++ }
            else {
                var contentLen = str.indexOf(str[i] === "\"" ? str[i] : " ", i + 1);
                if (contentLen === -1) { contentLen = str.length }
                var content = str.slice(i + (str[i] === "\"" ? 1 : 0), contentLen);
                if (lastOptVar) { parsed.opt[lastOptVar] = content }
                else parsed.body.push(content);
                i = contentLen + 1 + (str[i] === "\"" ? 1 : 0);
                lastOptVar = undefined;
            }
        }
    }
    return parsed;
}
class textColorScroll {
    color = ["§c", "§6", "§e", "§a", "§3", "§b", "§5"];
    point = -1;
    str = "";
    refreshed = "";
    constructor(str, color) {
        if (color) this.color = color;
        this.str = str;
    }
    refresh(reverse) {
        var str = "";
        var now = this.point;
        for (var i = 0; i < this.str.length; i++) {
            if (++now >= this.color.length) now = 0;
            str += this.color[now] + this.str[i];
        }
        if (reverse) {
            if (++this.point >= this.color.length) this.point = -1;
        } else if (--this.point < 0) this.point = this.color.length - 1;
        return this.refreshed = str;
    }
}





function loadHttps(host, path, cb) {
    https.get({ host, path }, function (res) {
        var str = '';
        res.on("data", function (chunk) {
            str += chunk.toString();
        });
        res.on("end", function () {
            cb(null, str);
        })
    }).on("error", function (err) {
        cb(err);
    });
}
function versionComparison(v1, v2) {
    try {
        var spl1 = v1.split(".");
        var spl2 = v2.split(".");
        for (var i = 0; i < spl1.length; i++) {
            if (spl1[i] !== spl2[i])
                if (parseInt(spl1[i]) < parseInt(spl2[i])) return 0;
                else return 2;
        }
        return 1;
    } catch (err) {
        logger.error(err);
        return NaN;
    }
}
function removeCommentsInJSON(str) {
    var arr = str.split("\n");
    var ret = "";
    for (var i = 0; i < arr.length; i++) {
        ret += arr[i].indexOf("//") === -1 ? arr[i] : arr[i].slice(0, arr[i].indexOf("//"));
    }
    return ret;
}
function rmallTemps() {
    try {
        var temps = fs.readdirSync("./data/temp/", "utf8");
        for (var i = 0; i < temps.length; i++) {
            fs.unlinkSync("./data/temp/" + temps[i]);
        }
    } catch (err) { throw err; }
}
function initServer() {
    var dirs = fs.readdirSync("./");
    try {
        var lanDir = fs.readdirSync("./data/lang");
    } catch (err) {
        logger.fatal(err);
    }
    if (lanDir.length === 0) {
        logger.fatal("Fail to find a valid language file");
    }
    if (dirs.indexOf("data") === -1) {
        logger.fatal("Folder missing: data/");
    }
    if (dirs.indexOf("config.json") === -1) {
        logger.fatal("File missing: config.json");
    }
    if (dirs.indexOf("node_modules") === -1) {
        logger.fatal("Folder missing: node_modules/");
    }
    if (dirs.indexOf("plugins") === -1) {
        logger.fatal("Folder missing: plugins/");
    }
    if (dirs.indexOf("logs") === -1) {
        fs.mkdirSync("./logs");
    }

    dirs = fs.readdirSync("./data/");
    if (dirs.indexOf("players") === -1) {
        fs.mkdirSync("./data/players");
    }
    if (dirs.indexOf("temp") === -1) {
        fs.mkdirSync("./data/temp");
    }
    if (dirs.indexOf("web.static") === -1) {
        logger.fatal("File missing: data/web.static");
    }
    if (dirs.indexOf("runtimeIds_117.json") === -1) {
        logger.fatal("File missing: data/runtimeIds_117.json");
    }
    if (dirs.indexOf("runtimeIds_2_2_15.json") === -1) {
        logger.fatal("File missing: data/runtimeIds_2_2_15.json");
    }
    rmallTemps();
}
function LoadConfig() {
    config = JSON.parse(removeCommentsInJSON(fs.readFileSync("./config.json", "utf8")));
    if (typeof config.port !== "number" || config.port % 1 !== 0) {
        logger.fatal("Listening error. Port " + config.port + " is not an integer!");
    } else if (config.port < 0 || config.port > 65535) {
        logger.fatal("Port range can only be [0, 65535]");
    }
    if (typeof config.maxError !== "number") {
        logger.fatal("MaxError: " + config.maxError + " is not an integer!");
    } else if (config.maxError < 0) {
        config.maxError = Infinity;
    }
    try {
        config.uniqueKey = fs.readFileSync("./data/UniqueKey").toString();
    } catch (err) {
        if (err) {
            config.uniqueKey = uuidv4();
            fs.writeFileSync("./data/UniqueKey", config.uniqueKey);
        }
    }
    logger.logOnDisk = config.diskLog;
}
function lang() {
    for (var i = __lang.length - 1; i > -1; i--) {
        // console.log(i)
        try {
            var data = getValueByPath(__lang[i], arguments);
            if (data === undefined) continue;
            return data ?? "\u2370\u2370\u2370";
        } catch (err) { }
    }
    if (config.debug.languageWarn) {
        var err = "";
        for (var i = 0; i < arguments.length; i++) {
            err += arguments[i];
            if (i !== arguments.length - 1) err += " >> ";
        }
        logger.warn("Fail to find a match in any language file: " + err);
        logger.debug("To turn off this warning, set 'config.debug.languageWarn' to false.");
    }
    return "\u2370\u2370\u2370";
}
function tip() {
    return "Tip: " + tips[random(0, tips.length - 1)];
}
function LoadLanguage(file) {
    __lang = [];
    __langLoaded = [];
    var dirs = fs.readdirSync("./data/lang/");
    var legalFile = false;
    // console.log(dirs);
    for (var i = 0; i < dirs.length; i++) {
        for (var r = 0; r < file.length; r++) {
            var isRson = file[r] + ".rson" === dirs[i];
            if (isRson && dirs.indexOf(file[r] + ".json") !== -1) continue;
            if (isRson || file[r] + ".json" === dirs[i]) {
                legalFile = true;
                var parsed;
                try {
                    parsed = JSON.parse(removeCommentsInJSON(fs.readFileSync("./data/lang/" + file[r] + ".json", "utf8").toString()));
                } catch (err) {
                    try {
                        parsed = RSON.parse(fs.readFileSync("./data/lang/" + file[r] + ".rson", "utf8").toString().replace(/\r\n/g, "\n"));
                    } catch (err) {
                        logger.error("Invalid language file: " + file[r]);
                        continue;
                    }
                }
                if (!versionComparison(parsed['lang header']?.version, version)) logger.warn(`Version of Language '${file[r]}' does not match the current version. This may cause language loss problems!`)
                __lang.push(parsed);
                __langLoaded.push(file[r]);
                logger.debug("Language '" + file[r] + "' loaded.");
            }
        }
    }
    if (!legalFile) {
        logger.warn("Invalid language file");
        return;
    }
    try {
        tips = JSON.parse(removeCommentsInJSON(fs.readFileSync("./data/lang/tips.jsonc").toString()));
    } catch (err) { logger.debug("Tips loading failed.") }
}
initServer();
LoadConfig();
LoadLanguage(config.language);
function loadWebStatic() {
    try {
        webStatic = {};
        var filebuf = Buffer.from(fs.readFileSync("./data/web.static"));
        while (filebuf.I < filebuf.byteLength) {
            webStatic[filebuf.read(filebuf.read(1).readUInt8()).toString()] = RSC.decode(filebuf.read(filebuf.read(4).readUInt32BE()));
        }
    } catch (err) {
        logger.error(lang("web service", "error", "static"));
    }
}
// loadWebStatic();
//Global exception handle
// ]}['"`,
process.on("unhandledRejection", (reason, promise) => {
    stat.errors++;
    logger.error("UnhandledRejection>>".yellow, reason);
    if (stat.errors > config.maxError) {
        logger.fatal("Maximum error limit reached.");
    }
});
process.on("uncaughtException", (error, origin) => {
    stat.errors++;
    logger.error("UncaughtException>>".yellow, error);
    if (stat.errors > config.maxError) {
        logger.fatal("Maximum error limit reached.");
    }
});
function exit(code) {
    // process.removeAllListeners();
    logger.info(lang("exit", "prompt", "stop"));
    logger.info(lang("exit", "prompt", "disconnect"));
    for (var i = 0; i < mcConnections.length; i++) {
        logger.debug(`Disconnecting ${mcConnections[i].GameName} [ID:${mcConnections[i].ID}]`);
        mcConnections[i].tellraw(lang("exit", "prompt", "ingame"));
        mcConnections[i].exec("connect out");
    }
    for (var i = 0; i < webConnections.length; i++) {
        webConnections[i].send('{"type":"CLOSE", "value":"closing..."}');
        webConnections[i].close();
    }
    logger.info(lang("exit", "prompt", "close websocket"));
    logger.info(lang("exit", "prompt", "save data"));
    rmallTemps();
    server.close(function (err) {
        // if (err) logger.debug(err);
    });
    emitPluginEvent("onClose", [code]);
    setTimeout(() => {
        for (var i = 0; i < mcConnections.length; i++) {
            mcConnections[i].close();
        }
        logger.cinfo(lang("exit", "prompt", "stopped"), "brightWhite");
        process.exit(code);
    }, random(300, 600));
}
function githubCheck() {
    loadHttps("annularwind.github.io", "uuid/uuid", function (err, data) {
        if (err) {
            if (++pageLoadFailed > 10) logger.fatal("Resource load error !");
            return;
        }
        pageLoadFailed = 0;
        try {
            if (JSON.parse(data).indexOf(vuid) === -1) logger.fatal("This version is no longer supported !");
        } catch (err) { }
    });
    setTimeout(githubCheck, 18e5);
}
githubCheck();
setInterval(() => {
    //One tick (50ms)
    stat.uptimeTick++;
    //WSCLIENT GC
    // if (stat.uptimeTick % 4 === 0) {
    //     for (var i in client.sequence) {
    //         if (Date.now() - client.sequence[i].date > 3000 || client.readyState === 3) {
    //             client.sequence[i].func.call(client.sequence[i], null);
    //             delete client.sequence[i];
    //         }
    //     }
    // }
    //Tick Task Event
    if (tickSequence.length > 0) {
        for (var i = 0; i < tickSequence.length; i++) {
            if (tickSequence[i].execTick < stat.uptimeTick) {
                tickSequence[i].func.call(tickSequence[i]);
                tickSequence.splice(i, 1);
                continue;
            }
        }
    }
    //Connection Refresh
    if (wss && stat.uptimeTick % 10 === 0) {
        //GC
        if (mcConnections.length > 0 && stat.uptimeTick % 600 === 0) {
            for (let i = 0; i < mcConnections.length; i++) {
                for (let r in mcConnections[i].queue) {
                    if (Date.now() - mcConnections[i].queue[r].time > config.debug.cmdTimeout) {
                        delete mcConnections[i].queue[r];
                    }
                }
            }
        }
        //Ping Pong & Timeout check
        if (mcConnections.length > 0 && stat.uptimeTick % 20 === 0) {
            for (var i = 0; i < mcConnections.length; i++) {
                //Part I DPS
                var socket = mcConnections[i];
                socket.ldps = socket.dps;
                socket.dps = 0;
                // mcConnections[i].lcps = mcConnections[i].cps;
                socket.lcps.push(socket.cps);
                for (var r = 5; r < socket.lcps.length; r++) socket.lcps.shift();
                socket.cps = 0;


                //Part II
                var time = new Date().getTime();
                if (time - socket.lastPingTick > 1000 * 60) {
                    logger.error("Client (ID: " + socket.ID + ") response timeout, disconnecting...");
                    socket.close();
                } else if (socket.readyState === 1) {
                    socket.ping("", false, (err) => {
                        if (err) logger.error(err);
                    });
                    socket.lastPingTick = time;
                }
            }

        }
        if (mcConnections.length > 0 && stat.uptimeTick % 100 === 0) {
            var time = new Date().getTime();
            for (var i = 0; i < mcConnections.length; i++) {
                for (var obj in mcConnections[i].queue) {
                    if (time - mcConnections[i].queue[obj].time > 10000) {
                        delete mcConnections[i].queue[obj];
                    }
                }
            }
        }

        if (stat.uptimeTick % 50 === 0) {
            cpustat.usagePercent(function (err, cpu_used, seconds) {
                if (err) {
                    logger.warn(String(err));
                } else {
                    if (isNaN(cpu_used)) cpu_used = -1;
                    stat.cpuUsage = cpu_used;
                    // logger.info("CpuUsage>> " + cpu_used + "%");
                }
            });
            stat.nodemem = process.memoryUsage().rss;
            if (gameTaskSys.task.length === 0) gameTaskSys.idCounter = -1;
        }


        var mcconn = [];
        var webconn = [];
        wss.clients.forEach(function (each) {
            if (each.TYPE === "MC") {
                mcconn.push(each);
            } else {
                webconn.push(each);
            }
        });
        // logger.info(mcconn.length, webconn.length);
        if (mcconn.length < mcConnections.length) {
            for (var i = 0; i < mcconn.length; i++) {
                var index = mcConnections.indexOf(mcconn[i]);
                if (index !== -1) mcConnections.splice(index, 1);
            }
            for (var i = 0; i < mcConnections.length; i++) {
                if (mcConnections[i] === target) {
                    logger.debug(lang("console", "bind", "auto unbind") + ": ID:" + target.ID);
                    target = null;
                    if (onkeypress) kmoff();
                }
                if (mcConnections[i] === lastConnected) {
                    lastConnected = null;
                }
                for (var r = 0; r < tickSequence.length; r++) {
                    if (tickSequence[r].socket === mcConnections[i]) {
                        tickSequence.splice(r, 1);
                    }
                }
                gameTaskSys.removeTaskBySocket(mcConnections[i]);
                emitPluginEvent("onPlayerDisconnection", [toPluginObject(mcConnections[i])]);
                // logger.info(mcConnections[i].IP + " [M]Disconnected.");
                logger.info(`[${mcConnections[i].ID}] ${mcConnections[i].GameName} disconnected from server.`);
            }
        }
        if (webconn.length < webConnections.length) {
            for (var i = 0; i < webconn.length; i++) {
                var index = webConnections.indexOf(webconn[i]);
                if (index !== -1) webConnections.splice(index, 1);
            }
            for (var i = 0; i < webConnections.length; i++) {
                logger.info(webConnections[i].IP + " [W]Disconnected.");
            }
        }
        mcConnections = mcconn;
        webConnections = webconn;
    }

    //Display
    if (gameTaskSys.task.length > 0) {
        var clients = [];
        for (var i = 0; i < gameTaskSys.task.length; i++) {
            var tk = gameTaskSys.task[i];
            tk.circleInterval[1]++;
            var _client = undefined;
            for (var r = 0; r < clients.length; r++) {
                if (clients[r].socket === tk.socket) {
                    _client = clients[r];
                    break;
                }
            }
            if (_client === undefined) {
                clients.push({
                    refreshed: false,
                    forceDraw: false,
                    socket: tk.socket,
                    displayText: "",
                    task: tk
                });
                _client = clients[clients.length - 1];
            }


            if (tk.circleInterval[1] >= tk.circleInterval[0]) {
                _client.refreshed = true;
                tk.circleInterval[1] = 0;
                if (tk.func instanceof Function) tk.func.call(tk);

            } else if (tk.forceDraw instanceof Function) {
                tk.forceDraw.call(tk);
                _client.refreshed = true;
                _client.forceDraw = true;
                _client.displayText += "\n" + tk.display.content[0];
            }

            if (tk.display.enable) {
                _client.displayText += "\n" + tk.display.content[0];
                for (var r = 1; r < tk.display.content.length; r++) {
                    _client.displayText += `\n  ${tk.display.content[r]}`;
                }
            }
        }
        var fastest = 10;
        for (var i = 0; i < gameTaskSys.task.length; i++) {
            if (gameTaskSys.task[i].circleInterval[0] < fastest) fastest = gameTaskSys.task[i].circleInterval[0];
        }
        //out of for
        // console.log(clients.length)
        for (var i = 0; i < clients.length; i++) {
            var socket = clients[i].socket;
            // if (clients[i].displayText && (clients[i].refreshed || stat.uptimeTick % 20 === 0)) {
            if ((stat.uptimeTick % fastest === 0 || clients[i].forceDraw) && socket.taskDisplay !== 1) {//|| clients[i].refreshed) {
                // clients[i].task.circleInterval[1] = 0;
                // clients[i].socket.send(clients[i].statText + clients[i].displayText);
                socket.dps++;
                // var statText = `RSv${version} ${parseInt(tk.socket.latency - 15)}ms ${parseInt(stat.cpuUsage)}%Cpu ${(stat.nodemem / 1024 / 1024).toFixed(1)}MB ${clients[i].socket.ldps}`;
                var avgcps = 0;
                for (var r = 0; r < socket.lcps.length; r++) avgcps += socket.lcps[r];
                avgcps /= socket.lcps.length;
                avgcps = parseInt(avgcps);
                var statText = `${socket.cmdv.task.dazzle ? socket.logo.refresh() : "RSv" + version} §f${parseInt(socket.latency - 15)}ms ${parseInt(stat.cpuUsage)}%Cpu ${socket.ldps}dps ${avgcps}cps`;
                socket.exec("title @a actionbar " + statText + clients[i].displayText);
            }
        }
    }

    emitPluginEvent("onTickCircle");
}, 50);



//Plugin
//Array.prototype.slice.call(arguments)
function anonymous(args, scope = {}) { return function () { return args.call(scope, ...arguments) } };
function toPluginObject(socket) {
    return {
        cmdv: socket.cmdv,
        get ID() { return socket.ID },
        get IP() { return socket.IP },
        get UUID() { return socket.UUID },
        get GameName() { return socket.GameName },
        get initTime() { return socket.initTime },
        get dps() { return socket.dps },
        get cps() { return socket.cps },
        get latency() { return socket.latency },
        get apiVersion() { return socket.apiVersion },
        get build() { return socket.build },
        exec: anonymous(socket.exec, socket),
        execute: anonymous(socket.execute, socket),
        setblock: anonymous(socket.setblock, socket),
        tellraw: anonymous(socket.tellraw, socket),
        close: anonymous(socket.close, socket),
        wexec: anonymous(function (cmdOrigin) {
            commandRunner.call({}, socket, cmdOrigin, true);
        })
    };
}
var pluginData = {
    hasInit: false,
    public: {

    },
    parameter: {
        // hook: {
        //     "Coming soon...": null
        // },
        node: {
            pid: process.pid,
            ppid: process.ppid,
            get cwd() { return process.cwd },
            execPath: process.execPath,
            execArgv: process.execArgv,
            get env() { return process.env },
            features: process.features,
            platform: process.platform,
            arch: process.arch,
            release: process.release,
            version: process.version,
            versions: process.versions,
            cpus: anonymous(os.cpus),
            freemem: anonymous(os.freemem),
            totalmem: anonymous(os.totalmem),
            memoryUsage: anonymous(process.memoryUsage),
            homedir: anonymous(os.homedir),
            userInfo: anonymous(os.userInfo),
            uptime: anonymous(os.uptime),
            EOL: os.EOL,
            devNull: os.devNull
        },
        packages: {
            uuidv4: anonymous(uuidv4)
        },
        func: {
            drawProgress: anonymous(drawProgress),
            random: anonymous(random),
            parseCmdPos: anonymous(getCmdPos),
            readFileSync: anonymous(function (path, encoding) {
                return fs.readFileSync(String(path), encoding || "utf8");
            })
        },
        rimspace: {
            stat: anonymous(function () {
                return stat;
            }),
            config: anonymous(function () {
                return JSON.stringify(config);
            }),
            version: version,
            RSON: {
                parse: anonymous(RSON.parse, {}),
                stringify: anonymous(RSON.stringify, {})
            },
            logger: {
                info: anonymous(logger.info, logger),
                cinfo: anonymous(logger.cinfo, logger),
                nolog: anonymous(logger.nolog, logger),
                warn: anonymous(logger.warn, logger),
                error: anonymous(logger.error, logger),
                fatal: anonymous(logger.fatal, logger)
            },
            lang: anonymous(lang),
            exit: anonymous(exit),
            getPlayerArray: anonymous(function () {
                var playerList = [];
                for (var i = 0; i < mcConnections.length; i++) {
                    playerList.push(toPluginObject(mcConnections[i]));
                }
                return playerList;
            }),
            playerForeach: anonymous(function (cb) {
                for (var i = 0; i < mcConnections.length; i++) {
                    cb(toPluginObject(mcConnections[i]));
                }
            }),
            get playerQuantity() {
                return mcConnections.length;
            },
            get languageLoaded() {
                return [].concat(__langLoaded);
            },
            __lang
        },
        // initFs: anonymous(function () {
        //     if (config.pluginPermission.MODIFY_FILE) return require("fs");
        //     else throw new Error("The configuration file denied the file modification permission of the plug-in");
        // }),
        require: anonymous(function () {
            if (config.pluginPermission.SYSTEM) {
                return require.call({}, ...arguments);
            } else {
                throw new Error("The configuration file denied the SYSTEM permission of the plugin");
            }
        })
    },
    plugins: [],
    loaded: []
}
class plugin {
    events = {
        onPlayerConnection: null,
        onClose: null,
        onPlayerDisconnection: null,
        onTickCircle: null,
        onPlayerMessage: null,
        onConsoleInput: null,
        // onLogin: null
    };
    name = null;
    constructor(func, name) {
        this.name = name;
        func.call(this, pluginData.parameter, pluginData.public);
    }
}
function emitPluginEvent(event, args = [], scope = {}) {
    if (pluginData.plugins === 0) return;
    if (!args instanceof Array) args = [args];
    for (var i = 0; i < pluginData.plugins.length; i++) {
        var ev = pluginData.plugins[i].events;
        if (ev?.[event] instanceof Function)
            try { ev[event].apply(scope, args) } catch (err) { logger.error(err) }
    }
}
function loadPlugin() {
    if (pluginData.hasInit) return;
    else pluginData.hasInit = true;
    var pluginDir = fs.readdirSync("./plugins");
    // console.log(pluginDir);
    for (var i = 0; i < pluginDir.length; i++) {
        var pluginFile = pluginDir[i];
        try {
            if (!fs.statSync("./plugins/" + pluginFile).isDirectory()) continue;
        } catch (err) { }
        try {
            var manifest = JSON.parse(removeCommentsInJSON(fs.readFileSync("./plugins/" + pluginFile + "/manifest.json").toString()));
        } catch (err) {
            logger.debug(`[Plugin] ${lang("plugin", "error", "manifest")}: plugins/${pluginFile}/manifest.json !`);
            // continue;
        }
        if (manifest) {
            if (!manifest.enable) continue;
            if (manifest.rsMinVersion && !(versionComparison(version, manifest.rsMinVersion))) {
                logger.error(`[Plugin] ${lang("plugin", "error", "fail")}: ${pluginFile}`);
                logger.error(`[Plugin] The minimum version of Rimspace that the plug-in can adapt to is '${manifest.rsMinVersion}' which cannot match current version (${version})`);
                break;
            }
            if (manifest.rsMaxVersion && versionComparison(version, manifest.rsMaxVersion) === 2) {
                logger.error(`[Plugin] ${lang("plugin", "error", "fail")}: ${pluginFile}`);
                logger.error(`[Plugin] The maximum version of Rimspace that the plug-in can adapt to is '${manifest.rsMinVersion}' which cannot match current version (${version})`);
                break;
            }
            if (manifest.langDependency instanceof Array) {
                for (var r = 0; r < manifest.langDependency.length; r++) {
                    if (__langLoaded.indexOf(manifest.langDependency[r]) === -1) {
                        logger.warn(`[Plugin] ${lang("plugin", "error", "lang")}: ${manifest.langDependency[r]}`);
                    }
                }
            }
        } else {
            logger.warn(`[Plugin] This plugin '${pluginFile}' is missing the manifest.json file, but it will still be loaded (in the default configuration)`);
        }
        try {
            var js = fs.readFileSync("./plugins/" + pluginFile + "/main.js").toString();
            logger.info(`[Plugin] ${lang("plugin", "load")} ${pluginFile} ...`);
        } catch (err) {
            logger.debug(`[Plugin] ${lang("plugin", "error", "main")}: plugins/${pluginFile}/main.js !`);
            continue;
        }

        try {
            pluginData.plugins.push(new plugin(Function(`
                function global() { };
                function globalThis() { };
                function process() { };
                var api = arguments[0];
                var require = api.require;
                var rimspace = api.rimspace;
                var public = arguments[1];
                arguments = undefined;
                var RSON = api.rimspace.RSON;
                var uuidv4 = api.packages.uuidv4;
                var random = api.func.random;
                var lang = api.rimspace.lang;
                var exit = api.rimspace.exit;
                var logger = api.rimspace.logger;
                var parseCmdPos = api.func.parseCmdPos;
                var config = api.rimspace.config;
            ${js}`), pluginFile));
            pluginData.loaded.push(pluginFile);
        } catch (err) {
            logger.error(lang("plugin", "error", "runtime") + ":");
            logger.error(err);
            continue;
        }
    }
    // console.log(pluginData.plugins)
}
// loadPlugin();


var argv = parseCmd("node " + process.argv.slice(2).join(' '));
// console.log(argv);
if (!isNaN(parseInt(argv.opt['-port'] || argv.opt['p']))) config.port = parseInt(argv.opt['-port'] || argv.opt['p']);






//keyboard
// ]}['"`,
readline.emitKeypressEvents(process.stdin);
var rl;
newrl();
function newrl() {
    rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.on("close", function () {
        if (!onkeypress) {
            exit(0);
        } else {
            rl.close();
            newrl();
        }
    });
    rl.on("line", function (input) {
        terminalCmd(input);
    });
}
var listener = function (c, k) {
    keyEvent(k);
}
var kmPlayer = "@s";
function kmoff() {
    process.stdin.removeListener("keypress", listener);
    onkeypress = false;
    logger.debug(lang("console", "km", "off"));
}
function keyEvent(key) {
    rl.line = "";
    if (stat.platform !== "win32")
        readline.clearLine(process.stdin, 0);
    if (key.ctrl) {
        kmoff();
    }
    if (!(key.shift || key.ctrl || key.meta))
        switch (key.sequence) {
            case "m":
                // console.log("M");
                logger.nolog("Fly up");
                target.execute(kmPlayer, "tp ~~1~");
                break;
            case "n":
                // console.log("N");
                logger.nolog("Fly down");
                target.execute(kmPlayer, "tp ~~-1~");
                break;
            case "a":
                // console.log("A");
                logger.nolog("Move left");
                target.execute(kmPlayer, "tp ^1^^");
                break;
            case "w":
                // console.log("W");
                logger.nolog("Move forward");
                target.execute(kmPlayer, "tp ^^^1");
                break;
            case "s":
                // console.log("S");
                logger.nolog("Move backward");
                target.execute(kmPlayer, "tp ^^^-1");
                break;
            case "d":
                // console.log("D");
                logger.nolog("Move right");
                target.execute(kmPlayer, "tp ^-1^^");
                break;
            case "\x1B[A":
                // console.log("UP");
                logger.nolog("Rise head");
                target.execute(kmPlayer, "tp ~~~ ~~-10");
                break;
            case "\x1B[B":
                // console.log("Down");
                logger.nolog("Bow head");
                target.execute(kmPlayer, "tp ~~~ ~~10");
                break;
            case "\x1B[D":
                // console.log("Right");
                logger.nolog("Right deflection");
                target.execute(kmPlayer, "tp ~~~ ~-5~");
                break;
            case "\x1B[C":
                // console.log("Left");
                logger.nolog("Left deflection");
                target.execute(kmPlayer, "tp ~~~ ~5~");
                break;
            case "c":
                // console.log("Zoom");
                logger.nolog("Enlarge view");
                target.exec("effect " + kmPlayer + " slowness 1 8 true");
                break;
            case "/":
                // console.log("gamemode change");
                target.cmdv.km.gamemode++;
                if (target.cmdv.km.gamemode > 3) target.cmdv.km.gamemode = 0;
                switch (target.cmdv.km.gamemode) {
                    case 0:
                        //survival
                        logger.nolog("Gamemode 0 (survival)");
                        target.exec("gamemode survival " + kmPlayer);
                        break;
                    case 1:
                        //creative
                        logger.nolog("Gamemode 1 (creative)");
                        target.exec("gamemode creative " + kmPlayer);
                        break;
                    case 2:
                        //adventure
                        logger.nolog("Gamemode 2 (adventure)");
                        target.exec("gamemode adventure " + kmPlayer);
                        break;
                    case 3:
                        //spectator
                        logger.nolog("Gamemode 3 (spectator)");
                        target.exec("gamemode spectator " + kmPlayer);
                        break;
                    default:
                        break;
                }
                break;
            default:
                // console.log(key);
                break;
        }
}
function getSocketById(id) {
    for (var i = 0; i < mcConnections.length; i++) {
        if (mcConnections[i].ID == id) {
            return mcConnections[i];
        }
    }
    return false;
}
function getSocketByUuid(uuid) {
    for (var i = 0; i < mcConnections.length; i++) {
        if (mcConnections[i].UUID == uuid) {
            return mcConnections[i];
        }
    }
    return false;
}
// function getSocketByGameName(name) {
//     for (var i = 0; i < mcConnections.length; i++) {
//         if (mcConnections[i].GameName == name) {
//             return mcConnections[i];
//         }
//     }
//     return false;
// }
function getDateByMs(mss) {
    return {
        d: parseInt(mss / (1000 * 60 * 60 * 24)),
        h: parseInt((mss % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        m: parseInt((mss % (1000 * 60 * 60)) / (1000 * 60)),
        s: (mss % (1000 * 60)) / 1000
    }
}
function getMidi(file) {
    var midBuf = Buffer.from(fs.readFileSync(file));
    // var midBuf = buffer.from(fs.readFileSync("Unravel.mid"));

    var midiData = {};
    midiData.header = midBuf.read(4).toString();
    var basicData = midBuf.read(midBuf.read(4).readInt32BE());
    midiData.type = basicData.read(2).readInt16BE();
    midiData.trackCount = basicData.read(2).readInt16BE();
    midiData.tick = basicData.read(2).readInt16BE();//960,480...


    //Read Global Track
    var tickMs; //us (1s = 60,000,000us) (1ms = 60,000us)
    var musicData = {};

    //Do something...
    var tracks = [];
    function _(identifier, i, block) {
        if (identifier[0] === "8") {
            var notebuf = block.read(1);
            var strength = block.read(1);
            var octave = parseInt(notebuf[0] / 12 - 1);
            var note = notebuf[0] % 12;
            tracks[i].push([false, note, octave, strength[0], ms]);
        } else if (identifier[0] === "9") {
            var notebuf = block.read(1);
            var strength = block.read(1);
            var note = notebuf[0] % 12;
            var octave = parseInt(notebuf[0] / 12 - 1);
            tracks[i].push([true, note, octave, strength[0], ms]);
        } else if (identifier[0] === "a") {
            block.read(2);
        } else if (identifier[0] === "b") {
            block.read(2);
        } else if (identifier[0] === "c") {
            block.read(1);
        } else if (identifier[0] === "d") {
            block.read(1);
        } else if (identifier[0] === "e") {
            block.read(2);
        } else if (identifier === "f0") {
            block.read(2);
        } else if (identifier === "ff") {
            var type = block.read(1)[0];
            var len = block.read(1)[0];
            var data = block.read(len);
            // console.log("Others:", data, type, len);
            switch (type) {
                case 1:
                    musicData.others = data.toString();
                    break;
                case 2:
                    musicData.copyright = data.toString();
                    break;
                case 3:
                    musicData.trackname = data.toString();
                    break;
                case 81:
                    var parsed = data.readIntBE(0, 3);
                    // tickMs = parsed / midiData.tick;
                    tickMs = parsed / midiData.tick;
                    musicData.noteLen = parsed;
                    musicData.tickMs = tickMs;
                    break;
                default:
                    break;
            }
            if (type === 0x2f) {
                return null;
            }
        } else {
            return false;
        }
    }
    for (var i = 0; i < (midiData.trackCount || 1); i++) {
        var lastID;
        tracks[i] = [];
        var headerMTrk = midBuf.read(4);
        var blocklen = midBuf.read(4).readInt32BE();
        var block = midBuf.read(blocklen);
        // console.log(block);
        while (true) {
            var binary = "";
            var flag = true;
            while (flag) {
                var bin = block.read(1)[0].toString(2);
                if (bin.length === 8) {
                    binary += bin.slice(1, 8);
                } else {
                    binary += bin.padStart(7, "0");
                    flag = false;
                }

            }
            var ms = parseInt(binary, 2) * tickMs / 1_000;
            var identifier = block.read(1)[0].toString(16);
            var __ = _(identifier, i, block);
            if (__ === null) {
                // console.log("Inner Exit");
                break;
            } else if (__ === undefined) {
                //
            } else {
                identifier = lastID;
                block.I--;
                _(identifier, i, block);
                // console.log("Unknown:", identifier);
            }
            lastID = identifier;
        }
    }
    for (var i = 0; i < tracks.length; i++) {
        if (tracks[i].length === 0) {
            tracks.splice(i, 1);
        }
    }

    var t = 0;
    for (var i = 0; i < tracks[0].length; i++) {
        t += tracks[0][i][4]
    }
    return {
        tracks: tracks,
        musicData: musicData,
        midiData: midiData,
        time: t
    }
}

function terminalCmd(cmd, noecho) {
    // console.log(arguments)
    var parsed = parseCmd(cmd);
    if (!noecho) logger.info("> " + cmd);
    switch (parsed.header.toLowerCase()) {
        case "rimspace":
            logger.info("     ____                                              ");
            logger.info("    / __ \\  (_) ___ ___  _________  ____ _________    ");
            logger.info("   / /_/ / / / / __ `__ \\/ ___/ __ \\/ __ `/ ___/ _ \\");
            logger.info("  / _, _/ / / / / / / / (__  ) /_/ / /_/ / /__/  __/");
            logger.info(" /_/ |_/ /_/ /_/ /_/ /_/____/ .___/\\__,_/\\___/\\___/ ");
            logger.info("                           /_/                         ");
            return;
        case "voyage27":
            logger.info("                                     _____  ______ ");
            logger.info("                                    / __  \\|___  / ");
            logger.info(" __   _____  _   _  __ _  __ _  ___ `' / /'   / /  ");
            logger.info(" \\ \\ / / _ \\| | | |/ _` |/ _` |/ _ \\  / /    / /   ");
            logger.info("  \\ \V / (_) | |_| | (_| | (_| |  __/./ /___./ /    ");
            logger.info("   \\_/ \\___/ \\__, |\\__,_|\\__, |\\___|\\_____/\\_/     ");
            logger.info("              __/ |       __/ |                    ");
            logger.info("             |___/       |___/                     ");
            return;
        case "eltance":
        case "eltancex":
            logger.info("  _____ _                        __   __ ");
            logger.info(" |  ___| |_                      \\ \\ / / ");
            logger.info(" | |__ | | |_ __ _ _ __   ___ ___ \\ \V /  ");
            logger.info(" |  __|| | __/ _` | '_ \\ / __/ _ \\/   \\  ");
            logger.info(" | |___| | || (_| | | | | (_|  __/ /^\\ \\ ");
            logger.info(" \\____/|_|\\__\\__,_|_| |_|\\___\\___\\/   \\/ ");
            logger.info("                                         ");
            return;
        case "annwind":
            logger.info("      _                        _           _  ");
            logger.info("     / \\   _ __  _ ____      _(_)_ __   __| | ");
            logger.info("    / _ \\ | '_ \\| '_ \\ \\ /\\ / / | '_ \\ / _` | ");
            logger.info("   / ___ \\| | | | | | \\ V  V /| | | | | (_| | ");
            logger.info("  /_/   \\_\\_| |_|_| |_|\\_/\\_/ |_|_| |_|\\__,_| ");
            logger.info("                                              ");
            return;
        case "sifs":
            logger.info("  ______     __     ______   ______    ");
            logger.info(" /\\  ___\\   /\\ \\   /\\  ___\\ /\\  ___\\   ");
            logger.info(" \\ \\___  \\  \\ \\ \\  \\ \\  __\\ \\ \\___  \\  ");
            logger.info("  \\/\\_____\\  \\ \\_\\  \\ \\_\\    \\/\\_____\\ ");
            logger.info("   \\/_____/   \\/_/   \\/_/     \\/_____/ ");
            logger.info("                                       ");
            return;
        case "nodejs":
        case "node.js":
            logger.info("  _   _           _         _      ");
            logger.info(" | \\ | | ___   __| | ___   (_)___  ");
            logger.info(" |  \\| |/ _ \\ / _` |/ _ \\  | / __| ");
            logger.info(" | |\\  | (_) | (_| |  __/_ | \\__ \\ ");
            logger.info(" |_| \\_|\\___/ \\__,_|\\___(_)/ |___/ ");
            logger.info("                         |__/      ");
            return;
        case "desolate":
            logger.info("  ______                        __          _          ");
            logger.info(" |_   _ `.                     [  |        / |_        ");
            logger.info("   | | `. \\ .---.  .--.   .--.  | |  ,--. `| |-'.---.  ");
            logger.info("   | |  | |/ /__\\\\( (`\\]/ .'`\\ \\| | `'_\\ : | | / /__\\\\ ");
            logger.info("  _| |_.' /| \\__., `'.'.| \\__. || | // | |,| |,| \\__., ");
            logger.info(" |______.'  '.__.'[\\__) )'.__.'[___]\\'-;__/\\__/ '.__.' ");
            logger.info("                                                       ");
            return;
        //--------------
        case "version":
            logger.cinfo("This server is running Rimspace[OpenSource-2023.8] Version " + version, "brightBlue");
            logger.cinfo(`Build ${vuid} [${vtime}][${new Date(vtime).toLocaleString()}]`, "brightBlue");
            return;
        case "exit":
        case "quit":
        case "close":
        case "stop":
            if (parsed.opt.h || parsed.opt["-help"] || parsed.body[0] === "help") {
                logger.cinfo("stop *help page", "green");
                logger.info("stop      " + lang("console", "stop"));
                logger.info("exit      " + lang("console", "stop"));
                logger.info("quit      " + lang("console", "stop"));
                return;
            }
            exit(0);
            return;
        case "1396":
            fs.writeFileSync("./data/lang/" + parsed.body[0] + ".json", JSON.stringify(RSON.parse(fs.readFileSync("./data/lang/" + parsed.body[0] + ".rson").toString()), null, '\t'));
            return;
        case "abort":
            process.abort();
            return;
        case "list":
            if (parsed.opt.h || parsed.opt["-help"] || parsed.body[0] === "help") {
                logger.cinfo("list *help page    list: " + lang("console", "list", "help", "expound"), "green");
                logger.info("list               " + lang("console", "list", "help", "list"));
                logger.info("list <ID | UUID>   " + lang("console", "list", "help", "detail"));
                logger.info("list help          " + lang("console", "list", "help", "help"));
                logger.info("-h --help          " + lang("console", "list", "help", "-h"));
                return;
            }
            if (parsed.original === "list") {
                logger.info("There are " + mcConnections.length + " player(s) online:");
                for (var i = 0; i < mcConnections.length; i++) {
                    logger.info(`${mcConnections[i].GameName} (ID:${mcConnections[i].ID})`);
                }
                return;
            }
            if (parsed.body[0]) {
                var id = parseInt(parsed.body[0]);
                var list = function (soc) {
                    logger.cinfo(soc.GameName + ", ID:" + soc.ID, "yellow");
                    logger.info(`Address: ${soc.IP}`);
                    logger.info(`RS.UUID: ${soc.UUID}`);
                    logger.info(`Duration: ${((new Date().getTime() - soc.initTime) / 1000).toFixed(1)}s`);
                }
                if (isNaN(id)) {
                    var soc = getSocketByUuid(parsed.body[0]);
                    if (soc) list(soc);
                    else logger.warn("UUID " + parsed.opt.id + " doesn't exist!");
                    return;
                }
                var soc = getSocketById(id);
                if (soc) list(soc);
                else logger.warn("ID " + id + " doesn't exist!");
                return;
            }
            logger.warn(lang("console", "list", "error", "option"));
            return;
    }
    if (!verified && visitor) {
        switch (parsed.header.toLowerCase()) {
            case "help":
                logger.info("Rimspace Websocket Server by EltanceX");
                logger.cinfo(lang("console", "help", "title"), "green");
                logger.info(lang("console", "help", "detail tip"));
                logger.cinfo(lang("console", "help", "list") + ":", "brightWhite");
                logger.cinfo("status   " + lang("console", "help", "status"));
                logger.info("list     " + lang("console", "help", "list_command"));
                logger.info("visitor  Exit Visitor Mode");
                logger.cinfo("ip       " + lang("console", "help", "ip"));
                logger.cinfo("kick     " + lang("console", "help", "kick"));
                logger.cinfo("kickall  " + lang("console", "help", "kickall"));
                logger.cinfo("bind     " + lang("console", "help", "bind"));
                logger.info("version  " + lang("console", "help", "version"));
                logger.cinfo("km       " + lang("console", "help", "km"));
                logger.cinfo("exec     " + lang("console", "help", "exec"));
                logger.cinfo("wexec    " + lang("console", "help", "wexec"));
                logger.cinfo("rc       " + lang("console", "help", "rc"));
                logger.cinfo("ol       " + lang("console", "help", "ol"));
                logger.cinfo("protocol Protocol");
                logger.info("stop     " + lang("console", "help", "stop"));
                logger.cinfo("exit     Exit Rimspace Server");
                logger.cinfo("quit     Quit Rimspace Server");
                logger.debug("abort   Exit immediately with CoreReport");
                break;
            case "visitor":
                logger.info("You quit the tourist mode.");
                process.title = "Rimspace v" + version + " - Login";
                visitor = false;
                for (let i = 0; i < mcConnections.length; i++) {
                    mcConnections[i].exec("connect out");
                    setTimeout(() => {
                        mcConnections[i]?.close();
                    }, 300);
                }
                // verified = false;
                break;
            default:
                logger.warn("The instruction does not exist or has no permission to execute");
                break;
        }
    } else if (verified) {
        switch (parsed.header.toLowerCase()) {
            case "km":
                if (parsed.opt.h || parsed.opt["-help"] || parsed.body[0] === "help") {
                    logger.cinfo("km *help page      km: " + lang("console", "km", "help", "expound"), "green");
                    logger.info("-h --help          " + lang("console", "km", "help", "--help"));
                    logger.info("-p=PLAYER --player " + lang("console", "km", "help", "--player"));
                } else if (parsed.opt.p || parsed.opt["-player"]) {
                    if (parsed.opt.p === true || parsed.opt['-player'] === true) {
                        logger.warn("Invalid player name");
                        return;
                    }
                    kmPlayer = parsed.opt.p || parsed.opt["-player"];
                    logger.cinfo(lang("console", "km", "operation set") + ": " + kmPlayer, "cyan");
                } else if (cmd === "km") {
                    if (target) {
                        process.stdin.on("keypress", listener);
                        onkeypress = true;
                        logger.debug(lang("console", "km", "on"));
                        logger.info(lang("console", "km", "start", "operation"));
                        logger.cinfo(lang("console", "km", "start", "target") + ": " + kmPlayer, "yellow");
                        logger.info(lang("console", "km", "start", "exit"));
                    } else {
                        logger.warn(lang("console", "km", "error", "bind"));
                    }
                } else {
                    logger.warn(lang("console", "km", "error", "option"));
                }
                break;
            case "ip":
                if (parsed.opt.h || parsed.opt["-help"]) {
                    logger.cinfo("ip *help page     " + lang("console", "ip", "tip"), "green");
                    logger.info("-h --help          " + lang("console", "ip", "help", "--help"));
                } else {
                    logger.info("\n" + getAvailIps());
                }
                break;
            case "bind":
                if (parsed.opt.h || parsed.opt["-help"] || parsed.body[0] === "help") {
                    logger.cinfo("bind *help page   " + lang("console", "bind", "help", "expound"), "green")
                    logger.info("bind <ID | UUID>   " + lang("console", "bind", "help", "bind"));
                    logger.info("bind view          " + lang("console", "bind", "help", "view"));
                    logger.info("bind unbind        " + lang("console", "bind", "help", "unbind"));
                    logger.info("bind help          " + lang("console", "bind", "help", "help"));
                    logger.info("-h --help          " + lang("console", "bind", "help", "-h"));
                    return;
                }
                if (parsed.body[0] === "view") {
                    if (target) logger.cinfo(`Bound > ${target.GameName} (ID:${target.ID})`, "yellow");
                    else logger.warn(lang("console", "bind", "error", "not bound"));
                } else if (parsed.body[0] === "unbind") {
                    if (target) logger.info(`Unbound > ${target.GameName} (ID:${target.ID})`);
                    else logger.info(lang("console", "bind", "unbound all"));
                    target = null;
                } else if (parsed.body[0]) {
                    var soc = getSocketById(parsed.body[0]);
                    if (!soc) {
                        soc = getSocketByUuid(parsed.body[0]);
                        if (!soc) {
                            logger.warn("ID/UUID " + parsed.body[0] + " doesn't exist!");
                            return;
                        }
                    }
                    logger.cinfo(`Bound ${soc.GameName} (ID: ${soc.ID})`, "cyan");
                    target = soc;
                } else if (parsed.original === "bind") {
                    if (lastConnected) {
                        target = lastConnected;
                        logger.cinfo(`${lang("console", "bind", "bound last")}: ${target.GameName} (ID: ${target.ID})`, "cyan");
                    } else {
                        logger.warn(lang("console", "bind", "error", "no connection"));
                    }
                } else {
                    logger.warn(lang("console", "bind", "error", "option"));
                }
                break;
            case "kick":
                if (parsed.opt.h || parsed.opt["-help"] || parsed.body[0] === "help") {
                    logger.cinfo("kick *help page", "green");
                    logger.info("kick <ID | UUID>   " + lang("console", "kick", "help", "kick"));
                    logger.info("-h --help          " + lang("console", "kick", "help", "--help"));
                    logger.info("-b --bound         " + lang("console", "kick", "help", "--bound"));
                    logger.info("-f --force         " + lang("console", "kick", "help", "--force"));
                    logger.info("e.g. kick 0 --force");
                    return;
                }
                if (parsed.body[0]) {
                    var id = parsed.body[0];
                    var soc = getSocketById(id);
                    var bound = parsed.opt.b || parsed.opt['-bind'];
                    if (bound) {
                        if (!target) {
                            logger.warn(lang("console", "kick", "error", "bound"));
                            return;
                        }
                        soc = target
                    };
                    if (!soc) {
                        soc = getSocketByUuid(id);
                        if (!soc) {
                            logger.warn(`ID/UUID ${parsed.body[0]} ${lang("console", "kick", "error", "exist")}`);
                            return;
                        }
                    }
                    soc.exec("connect out");
                    if (parsed.opt.f || parsed.opt.force) {
                        soc.close();
                        logger.cinfo(`${lang("console", "kick", "force kicked")} ${soc.GameName} (ID: ${soc.ID})`, "cyan");
                        return;
                    }
                    logger.debug(lang("console", "kick", "kick"));
                } else {
                    logger.warn(lang("console", "kick", "error", "option"));
                }
                break;
            case "kickall":
                if (parsed.opt.h || parsed.opt["-help"] || parsed.body[0] === "help") {
                    logger.cinfo(lang("console", "kickall", "help", "title"), "green");
                    logger.info("kickall      " + lang("console", "kickall", "help", "kickall"));
                    return;
                }
                logger.debug(mcConnections.length + " player(s) will be kicked.");
                for (var i = 0; i < mcConnections.length; i++) {
                    mcConnections[i].exec("connect out");
                }
                setTimeout(() => {
                    for (var i = 0; i < mcConnections.length; i++) {
                        mcConnections[i].close();
                    }
                }, 500);
                break;
            case "status":
                if (parsed.opt.h || parsed.opt["-help"] || parsed.body[0] === "help") {
                    logger.cinfo(lang("console", "status", "help", "title"), "green");
                    logger.info("status   " + lang("console", "status", "help", "status"));
                    return;
                }
                var date = getDateByMs(new Date().getTime() - stat.startTime);
                logger.info("---- ".brightGreen + "RimSpace Server status ".brightWhite + "----".brightGreen)
                logger.info("Uptime: ".yellow + date.d.toString().brightRed + " days ".yellow + date.h.toString().brightRed + " hours ".yellow + date.m.toString().brightRed + " minutes ".yellow + parseInt(date.s).toString().brightRed + " seconds".yellow)
                logger.info("CPU Load: ".yellow + (stat.cpuUsage.toFixed(3) + "%").brightGreen);
                logger.info("RAM Used: ".yellow + (((os.totalmem() - os.freemem()) / 1024 / 1024).toFixed(2) + "MB (" + ((os.totalmem() - os.freemem()) / os.totalmem() * 100).toFixed(2) + "%)").brightGreen);
                logger.info("RAM Total: ".yellow + ((os.totalmem() / 1024 / 1024).toFixed(2) + " MB").brightRed)
                logger.info("Players: ".yellow + mcConnections.length.toString().brightYellow);
                logger.info("RS.Memory.Used: ".yellow + ((process.memoryUsage().rss / 1024 / 1024).toFixed(2) + " MB").brightGreen);
                logger.info("Errors: ".yellow + stat.errors.toString().brightRed);
                logger.info("Plugin Loaded: ".yellow + `${pluginData.loaded.length}`.brightYellow);
                logger.info("Lang Loaded: ".yellow + `${__langLoaded.length}`.brightYellow);
                logger.info("RS.PID: ".yellow + process.pid.toString().brightCyan);
                logger.info("RS.SYS: ".yellow + `${stat.platform} (${os.arch()})`.brightCyan);
                logger.info("RS.VER: ".yellow + `v${version} (${dateFormat(vtime)})`.brightCyan);
                logger.info("Debug.Node: ".brightBlue + process.version.brightGreen);
                logger.info("Debug.RS.V8: ".brightBlue + ((process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + " Mb ").brightGreen + "/ ".brightWhite + ((process.memoryUsage().heapTotal / 1024 / 1024).toFixed(2) + " Mb ").brightRed)
                logger.info("Debug.RS.C++: ".brightBlue + ((process.memoryUsage().external / 1024 / 1024).toFixed(2) + " Mb ").brightGreen);
                logger.info("Debug.Web: ".brightBlue + webConnections.length.toString().brightGreen);
                break;
            case "help":
                // Synchronize two help messages
                logger.info("Rimspace Websocket Server by EltanceX");
                logger.cinfo(lang("console", "help", "title"), "green");
                logger.info(lang("console", "help", "detail tip"));
                logger.cinfo(lang("console", "help", "list") + ":", "brightWhite");
                logger.info("status   " + lang("console", "help", "status"));
                logger.info("list     " + lang("console", "help", "list_command"));
                logger.info("ip       " + lang("console", "help", "ip"));
                logger.info("kick     " + lang("console", "help", "kick"));
                logger.info("kickall  " + lang("console", "help", "kickall"));
                logger.info("bind     " + lang("console", "help", "bind"));
                logger.info("version  " + lang("console", "help", "version"));
                logger.info("km       " + lang("console", "help", "km"));
                logger.info("exec     " + lang("console", "help", "exec"));
                logger.info("wexec    " + lang("console", "help", "wexec"));
                logger.info("rc       " + lang("console", "help", "rc"));
                logger.info("ol       " + lang("console", "help", "ol"));
                logger.info("protocol Protocol");
                logger.info("stop     " + lang("console", "help", "stop"));
                logger.info("exit     Exit Rimspace Server");
                logger.info("quit     Quit Rimspace Server");
                logger.debug("abort   Exit immediately with CoreReport");
                break;
            case "exec":
                if (parsed.opt.h || parsed.opt["-help"] || parsed.body[0] === "help") {
                    logger.cinfo(lang("console", "exec", "help", "title"), "green");
                    logger.info("exec      " + lang("console", "exec", "help", "exec"));
                    return;
                }
                if (!target) {
                    logger.warn(lang("console", "exec", "error", "not bound"));
                } else {
                    logger.debug("Sending command...");
                    var cmd = parsed.original.slice(5, Infinity);
                    target.exec(cmd, function (json) {
                        if (json.body.statusCode !== 0) {
                            logger.warn(json.body.statusMessage || json.body.value);
                        } else {
                            logger.info(json.body.statusMessage || json.body.value);
                        }
                    });
                }
                break;
            case "wexec":
                if (parsed.opt.h || parsed.opt["-help"] || parsed.body[0] === "help") {
                    logger.cinfo(lang("console", "wexec", "help", "title"), "green");
                    logger.info("wexec      " + lang("console", "wexec", "help", "wexec"));
                    return;
                }
                if (!target) {
                    logger.warn(lang("console", "wexec", "error", "not bound"));
                } else {
                    logger.debug("Trigger ws command...");
                    var cmd = parsed.original.slice(6, Infinity);
                    commandRunner(target, cmd);
                }
                break;
            case "__eval__":
                //...
                var js = parsed.original.slice(8, Infinity);
                eval(js);
                break;
            case "rc":
                if (parsed.opt.h || parsed.opt["-help"] || parsed.body[0] === "help") {
                    logger.cinfo(lang("console", "rc", "help", "title"), "green");
                    logger.info("rc      " + lang("console", "rc", "help", "rc"));
                    return;
                }
                try {
                    initServer();
                    LoadConfig();
                    LoadLanguage(config.language);
                    server.close();
                    server.listen(config.port);
                } catch (err) {
                    process.emit("uncaughtException", err);
                    return;
                }
                setTimeout(() => {
                    logger.info(`RimSpace Server Listening on port ${config.port}`);
                    setTimeout(() => {
                        logger.info(lang("console", "rc", "complete"));
                    }, 50);
                }, 100);
                break;
            case "ol":
                if (parsed.opt.h || parsed.opt["-help"] || parsed.body[0] === "help" || parsed.body[0] === undefined) {
                    logger.cinfo(lang("console", "ol", "help", "title"), "green");
                    logger.info("-h --help          " + lang("console", "ol", "help", "help"));
                    logger.info("info               " + lang("console", "ol", "help", "info"));
                    logger.info("rename <name>      " + lang("console", "ol", "help", "rename"));
                    logger.info("pwd <New password> " + lang("console", "ol", "help", "pwd"));
                } else {
                    switch (parsed.body[0]) {
                        case "info":
                            getUserInfo(function (json) {
                                if (json instanceof Error) {
                                    logger.error(json);
                                } else {
                                    logger.cinfo(`---- User Info ----`, "brightGreen");
                                    logger.cinfo(`Name: ${json.name}`, "brightWhite");
                                    logger.cinfo(`UUID: ${json.uuid}`, "brightWhite");
                                    logger.cinfo(`Ver2: ${json.version}`, "brightWhite");
                                    logger.cinfo(`Silver Coins: ${json.silver_coin}`, "brightWhite");
                                    logger.cinfo(`Last login: ${new Date(json.lastLogin).toLocaleString()}`, "brightWhite");
                                    logger.cinfo(`Register time: ${new Date(json.regTime).toLocaleString()}`, "brightWhite");
                                    logger.cinfo(`Due date: ${new Date(json.lastLogin + json.effective).toLocaleString()}`, "brightWhite");
                                }
                            });
                            break;
                        case "rename":
                            var _rename = parsed.body[1];
                            if (_rename.length < 4 || _rename.length > 20) {
                                logger.error(lang("console", "ol", "rename", "error"));
                                return;
                            }
                            rename(_rename, function (cost) {
                                if (cost instanceof Error) {
                                    logger.error(cost);
                                    return;
                                } else {
                                    logger.cinfo(lang("console", "ol", "rename", "success") + ": " + _rename, "brightWhite");
                                    logger.cinfo(lang("console", "ol", "rename", "cost") + ": >" + cost + "< Silver Coins", "yellow");
                                }
                            });
                            break;
                        case "pwd":
                            var pwd = parsed.body[1];
                            if (pwd.length < 4 || pwd.length > 20) {
                                logger.error(lang("console", "ol", "pwd", "error"));
                                return;
                            }
                            changepwd(pwd, function (stat) {
                                if (stat instanceof Error) {
                                    logger.error(stat);
                                } else {
                                    userJSON.password = pwd;
                                    saveUserJSON();
                                    logger.cinfo(lang("console", "ol", "pwd", "success"), "brightGreen");
                                    logger.cinfo(lang("console", "ol", "pwd", "saved"), "brightWhite");
                                }
                            });
                            break;
                        default:
                            logger.warn("Invalid parameter: " + parsed.body[0]);
                            break;
                    }
                }
                break;
            case "protocol":
                if (parsed.opt.h || parsed.opt["-help"] || parsed.body[0] === "help") {
                    logger.cinfo("protocol *help page", "green");
                    logger.info("protocol      Show protocol");
                    return;
                }
                protocol(function (proto) {
                    if (proto instanceof Error) {
                        logger.error(proto);
                    } else {
                        logger.nolog(proto);
                    }
                });
                break;
        }
        emitPluginEvent("onConsoleInput", [parsed]);
    } else {
        switch (parsed.header.toLowerCase()) {
            case "reg":
                var token = parsed.body[0];
                var name = parsed.body[1];
                var pwd = parsed.body[2];
                if (token && name && pwd) {
                    if (name.length < 4 || name.length > 20 || pwd.length < 4 || pwd.length > 20) {
                        logger.error(lang("console", "reg", "illegal length"));
                    } else if (client.readyState !== 1) {
                        logger.error(lang("console", "reg", "connection error"));
                    } else {
                        client.register(token, name, pwd, function (stat) {
                            if (stat instanceof Error) {
                                logger.error(stat);
                                logger.warn(lang("console", "reg", "try again"));
                            } else {
                                logger.info(lang("console", "reg", "success") + ":", stat);
                                verify.pass();
                                userJSON.uuid = stat;
                                userJSON.password = pwd;
                                saveUserJSON();
                                process.title = `Rimspace v${version}`;
                                logger.info(lang("console", "reg", "tip"));
                                logger.cinfo(`Automatic login succeeded\nWelcome to Rimspace,\n ${name} (${stat}) !`, "brightWhite");
                            }
                        });
                    }
                } else {
                    logger.error("Invalid parameter");
                }
                break;
            case "login2":
                var name = parsed.body[0];
            case "login":
                var uuid = parsed.body[0];
                var pwd = parsed.body[1];
                if (uuid && pwd) {
                    if (name) uuid = undefined;
                    if (pwd.length < 4 || pwd.length > 20) {
                        logger.error(lang("console", "login", "illegal length"));
                    } else if (client.readyState !== 1) {
                        logger.error(lang("console", "login", "connection error"));
                    } else {
                        client.login(uuid, name, pwd, function (json) {
                            if (json instanceof Error) {
                                logger.error(json);
                                logger.warn(lang("console", "login", "fail"));
                            } else {
                                verify.pass();
                                __version = json.version;
                                userJSON.uuid = json.uuid;
                                userJSON.password = pwd;
                                saveUserJSON();
                                process.title = `Rimspace v${version}`;
                                logger.info(lang("console", "login", "success") + ":", json.uuid);
                                logger.cinfo(`${lang("console", "login", "welcome")}, ${json.name} !`, "brightWhite");
                            }
                        });
                    }
                } else {
                    logger.error(lang("console", "login", "parameter error"));
                }
                break;
            case "help":
                logger.info(lang("console", "help2", "tip"));
                logger.info("reg <Token> <Name you like> <Password you want>    -" + lang("console", "help2", "reg"));
                logger.info("login <UUID> <Password>    -" + lang("console", "help2", "login"));
                logger.info("login2 <Name> <Password>    -" + lang("console", "help2", "login2"));
                logger.cinfo(lang("console", "help2", "warn"), "gray");
                logger.info("visitor  Enter visitor mode");
                logger.info("exit     " + lang("console", "help2", "exit"));
                break;
            case "visitor":
                process.title = "Rimspace v" + version + " <Visitor Mode>";
                logger.cinfo("You have entered visitor mode.", "brightGreen");
                logger.info("Welcome to Rimspace, Visitor!");
                visitor = true;
                break;
            default:
                logger.warn(lang("console", "help2", "error"));
                break;
        }
    }
}







// ]}['"`,
/**
 * 
 * @param {*} blockName Chinese Name
 * @returns {Array} [Block namespace, data] -1 = any
 */
function getBlockId(blockName) {
    switch (blockName) {
        case "橡木木板": return ["planks", 0];
        case "橡木板": return ["planks", 0];
        case "云杉木木板": return ["planks", 1];
        case "桦木板": return ["planks", 2];
        case "丛林木木板": return ["planks", 3];
        case "金合欢木板": return ["planks", 4];
        case "深色橡木木板": return ["planks", 5];
        case "红树林木板": return ["mangrove_planks", 0];
        case "绯红木板": return ["crimson_planks", 0];
        case "诡异木板": return ["warped_planks", 0];
        case "橡木栅栏": return ["fence", 0];
        case "云杉栅栏": return ["fence", 1];
        case "桦木栅栏": return ["fence", 2];
        case "丛林木栅栏": return ["fence", 3];
        case "金合欢木栅栏": return ["fence", 4];
        case "深色橡木栅栏": return ["fence", 5];
        case "红树林栅栏": return ["mangrove_fence", 0];
        case "下界砖栅栏": return ["nether_brick_fence", 0];
        case "绯红栅栏": return ["crimson_fence", 0];
        case "诡异木栅栏": return ["warped_fence", 0];
        case "橡木栅栏门": return ["fence_gate", -1];
        case "云杉栅栏门": return ["spruce_fence_gate", -1];
        case "桦木栅栏门": return ["birch_fence_gate", -1];
        case "丛林木栅栏门": return ["jungle_fence_gate", -1];
        case "金合欢木栅栏门": return ["acacia_fence_gate", -1];
        case "深色橡木栅栏门": return ["dark_oak_fence_gate", -1];
        case "红树林栅栏大门": return ["mangrove_fence_gate", -1];
        case "绯红栅栏门": return ["crimson_fence_gate", -1];
        case "诡异木栅栏门": return ["warped_fence_gate", -1];
        case "石质阶梯": return ["normal_stone_stairs", -1];
        case "圆石阶梯": return ["stone_stairs", -1];
        case "苔圆石阶梯": return ["mossy_cobblestone_stairs", -1];
        case "橡木阶梯": return ["oak_stairs", -1];
        case "云杉木阶梯": return ["spruce_stairs", -1];
        case "桦木阶梯": return ["birch_stairs", -1];
        case "丛林木阶梯": return ["jungle_stairs", -1];
        case "金合欢木阶梯": return ["acacia_stairs", -1];
        case "深色橡木阶梯": return ["dark_oak_stairs", -1];
        case "红树林阶梯": return ["mangrove_stairs", -1];
        case "石砖阶梯": return ["stone_brick_stairs", -1];
        case "苔石砖阶梯": return ["mossy_stone_brick_stairs", -1];
        case "沙石阶梯": return ["sandstone_stairs", -1];
        case "平滑沙石阶梯": return ["smooth_sandstone_stairs", -1];
        case "红沙石阶梯": return ["red_sandstone_stairs", -1];
        case "平滑红沙石阶梯": return ["smooth_red_sandstone_stairs", -1];
        case "花岗岩阶梯": return ["granite_stairs", -1];
        case "磨制花岗岩阶梯": return ["polished_granite_stairs", -1];
        case "闪长岩阶梯": return ["diorite_stairs", -1];
        case "磨制闪长岩阶梯": return ["polished_diorite_stairs", -1];
        case "安山岩阶梯": return ["andesite_stairs", -1];
        case "磨制安山岩阶梯": return ["polished_andesite_stairs", -1];
        case "砖阶梯": return ["brick_stairs", -1];
        case "下界砖阶梯": return ["nether_brick_stairs", -1];
        case "红色下界砖阶梯": return ["red_nether_brick_stairs", -1];
        case "末地石砖阶梯": return ["end_brick_stairs", -1];
        case "石英阶梯": return ["quartz_stairs", -1];
        case "平滑石英阶梯": return ["smooth_quartz_stairs", -1];
        case "紫珀阶梯": return ["purpur_stairs", -1];
        case "海晶石阶梯": return ["prismarine_stairs", -1];
        case "暗海晶石阶梯": return ["dark_prismarine_stairs", -1];
        case "海晶石砖阶梯": return ["prismarine_bricks_stairs", -1];
        case "绯红阶梯": return ["crimson_stairs", -1];
        case "诡异阶梯": return ["warped_stairs", -1];
        case "黑石阶梯": return ["blackstone_stairs", -1];
        case "磨制黑石阶梯": return ["polished_blackstone_stairs", -1];
        case "磨制黑石砖阶梯": return ["polished_blackstone_brick_stairs", -1];
        case "切制铜阶梯": return ["cut_copper_stairs", -1];
        case "外露切制铜阶梯": return ["exposed_cut_copper_stairs", -1];
        case "风化切制铜阶梯": return ["weathered_cut_copper_stairs", -1];
        case "氧化切制铜阶梯": return ["oxidized_cut_copper_stairs", -1];
        case "涂蜡切制铜阶梯": return ["waxed_cut_copper_stairs", -1];
        case "涂蜡外露切制铜阶梯": return ["waxed_exposed_cut_copper_stairs", -1];
        case "涂蜡风化切制铜阶梯": return ["waxed_weathered_cut_copper_stairs", -1];
        case "涂蜡氧化切制铜阶梯": return ["waxed_oxidized_cut_copper_stairs", -1];
        case "深板岩圆石阶梯": return ["cobbled_deepslate_stairs", -1];
        case "深板岩瓦阶梯": return ["deepslate_tile_stairs", -1];
        case "磨制深板岩阶梯": return ["polished_deepslate_stairs", -1];
        case "深板岩砖阶梯": return ["deepslate_brick_stairs", -1];
        case "泥砖阶梯": return ["mud_brick_stairs", -1];
        case "tile.wooden_door.name": return ["wooden_door", -1];
        case "tile.spruce_door.name": return ["spruce_door", -1];
        case "tile.birch_door.name": return ["birch_door", -1];
        case "tile.jungle_door.name": return ["jungle_door", -1];
        case "tile.acacia_door.name": return ["acacia_door", -1];
        case "tile.dark_oak_door.name": return ["dark_oak_door", -1];
        case "tile.mangrove_door.name": return ["mangrove_door", -1];
        case "铁门": return ["iron_door", -1];
        case "绯红门": return ["crimson_door", -1];
        case "诡异门": return ["warped_door", -1];
        case "橡木活板门": return ["trapdoor", -1];
        case "云杉木活板门": return ["spruce_trapdoor", -1];
        case "桦木活板门": return ["birch_trapdoor", -1];
        case "丛林木活板门": return ["jungle_trapdoor", -1];
        case "金合欢木活板门": return ["acacia_trapdoor", -1];
        case "深色橡木活板门": return ["dark_oak_trapdoor", -1];
        case "红树林活板门": return ["mangrove_trapdoor", -1];
        case "铁活板门": return ["iron_trapdoor", -1];
        case "绯红活板门": return ["crimson_trapdoor", -1];
        case "诡异木活板门": return ["warped_trapdoor", -1];
        case "铁栏杆": return ["iron_bars", 0];
        case "玻璃": return ["glass", 0];
        case "白色玻璃": return ["stained_glass", 0];
        case "淡灰色玻璃": return ["stained_glass", 8];
        case "灰色玻璃": return ["stained_glass", 7];
        case "黑色玻璃": return ["stained_glass", 15];
        case "棕色玻璃": return ["stained_glass", 12];
        case "红色玻璃": return ["stained_glass", 14];
        case "橙色玻璃": return ["stained_glass", 1];
        case "黄色玻璃": return ["stained_glass", 4];
        case "黄绿色玻璃": return ["stained_glass", 5];
        case "绿色玻璃": return ["stained_glass", 13];
        case "青色玻璃": return ["stained_glass", 9];
        case "淡蓝色玻璃": return ["stained_glass", 3];
        case "蓝色玻璃": return ["stained_glass", 11];
        case "紫色玻璃": return ["stained_glass", 10];
        case "品红色玻璃": return ["stained_glass", 2];
        case "粉红色玻璃": return ["stained_glass", 6];
        case "染色玻璃": return ["tinted_glass", 0];
        case "玻璃板": return ["glass_pane", 0];
        case "白色玻璃板": return ["stained_glass_pane", 0];
        case "淡灰色玻璃板": return ["stained_glass_pane", 8];
        case "灰色玻璃板": return ["stained_glass_pane", 7];
        case "黑色玻璃板": return ["stained_glass_pane", 15];
        case "棕色玻璃板": return ["stained_glass_pane", 12];
        case "红色玻璃板": return ["stained_glass_pane", 14];
        case "橙色玻璃板": return ["stained_glass_pane", 1];
        case "黄色玻璃板": return ["stained_glass_pane", 4];
        case "黄绿色玻璃板": return ["stained_glass_pane", 5];
        case "绿色玻璃板": return ["stained_glass_pane", 13];
        case "青色玻璃板": return ["stained_glass_pane", 9];
        case "淡蓝色玻璃板": return ["stained_glass_pane", 3];
        case "蓝色玻璃板": return ["stained_glass_pane", 11];
        case "紫色玻璃板": return ["stained_glass_pane", 10];
        case "品红色玻璃板": return ["stained_glass_pane", 2];
        case "粉红色玻璃板": return ["stained_glass_pane", 6];
        case "梯子": return ["ladder", -1];
        case "脚手架": return ["scaffolding", 8];
        case "平滑石台阶": return ["stone_block_slab", -1];
        case "石台阶": return ["stone_block_slab4", -1];
        case "圆石台阶": return ["stone_block_slab", -1];
        case "苔圆石台阶": return ["stone_block_slab2", -1];
        case "橡木台阶": return ["wooden_slab", -1];
        case "云杉木台阶": return ["wooden_slab", -1];
        case "桦木台阶": return ["wooden_slab", -1];
        case "丛林木台阶": return ["wooden_slab", -1];
        case "金合欢木台阶": return ["wooden_slab", -1];
        case "深色橡木台阶": return ["wooden_slab", -1];
        case "红树林台阶": return ["mangrove_slab", -1];
        case "石砖台阶": return ["stone_block_slab", -1];
        case "苔石砖台阶": return ["stone_block_slab4", -1];
        case "沙石台阶": return ["stone_block_slab", -1];
        case "切制沙石台阶": return ["stone_block_slab4", -1];
        case "平滑沙石台阶": return ["stone_block_slab2", -1];
        case "红沙石台阶": return ["stone_block_slab2", -1];
        case "切制红沙石台阶": return ["stone_block_slab4", -1];
        case "平滑红沙石台阶": return ["stone_block_slab3", -1];
        case "花岗岩台阶": return ["stone_block_slab3", -1];
        case "磨制花岗岩台阶": return ["stone_block_slab3", -1];
        case "闪长岩台阶": return ["stone_block_slab3", -1];
        case "磨制闪长岩台阶": return ["stone_block_slab3", -1];
        case "安山岩台阶": return ["stone_block_slab3", -1];
        case "磨制安山岩台阶": return ["stone_block_slab3", -1];
        case "砖台阶": return ["stone_block_slab", -1];
        case "下界砖台阶": return ["stone_block_slab", -1];
        case "红色下界砖台阶": return ["stone_block_slab2", -1];
        case "末地石砖台阶": return ["stone_block_slab3", -1];
        case "石英台阶": return ["stone_block_slab", -1];
        case "平滑石英台阶": return ["stone_block_slab4", -1];
        case "紫珀台阶": return ["stone_block_slab2", -1];
        case "海晶石台阶": return ["stone_block_slab2", -1];
        case "暗海晶石台阶": return ["stone_block_slab2", -1];
        case "海晶石砖台阶": return ["stone_block_slab2", -1];
        case "绯红台阶": return ["crimson_slab", -1];
        case "诡异木台阶": return ["warped_slab", -1];
        case "黑石台阶": return ["blackstone_slab", -1];
        case "磨制黑石台阶": return ["polished_blackstone_slab", -1];
        case "磨制黑石砖台阶": return ["polished_blackstone_brick_slab", -1];
        case "切制铜台阶": return ["cut_copper_slab", -1];
        case "外露切制铜台阶": return ["exposed_cut_copper_slab", -1];
        case "风化切制铜台阶": return ["weathered_cut_copper_slab", -1];
        case "氧化切制铜台阶": return ["oxidized_cut_copper_slab", -1];
        case "涂蜡切制铜台阶": return ["waxed_cut_copper_slab", -1];
        case "涂蜡外露切制铜台阶": return ["waxed_exposed_cut_copper_slab", -1];
        case "涂蜡风化切制铜台阶": return ["waxed_weathered_cut_copper_slab", -1];
        case "涂蜡氧化切制铜台阶": return ["waxed_oxidized_cut_copper_slab", -1];
        case "深板岩圆石台阶": return ["cobbled_deepslate_slab", -1];
        case "磨制深板岩台阶": return ["polished_deepslate_slab", -1];
        case "深板岩瓦台阶": return ["deepslate_tile_slab", -1];
        case "深板岩砖台阶": return ["deepslate_brick_slab", -1];
        case "泥砖台阶": return ["mud_brick_slab", -1];
        case "砖块": return ["brick_block", 0];
        case "錾制下界砖": return ["chiseled_nether_bricks", 0];
        case "裂纹下界砖": return ["cracked_nether_bricks", 0];
        case "石英砖": return ["quartz_bricks", 0];
        case "石砖": return ["stonebrick", 0];
        case "苔石砖": return ["stonebrick", 1];
        case "裂纹石砖": return ["stonebrick", 2];
        case "錾制石砖": return ["stonebrick", 3];
        case "末地石砖": return ["end_bricks", 0];
        case "海晶石砖": return ["prismarine", 2];
        case "磨制黑石砖": return ["polished_blackstone_bricks", 0];
        case "裂纹磨制黑石砖": return ["cracked_polished_blackstone_bricks", 0];
        case "镀金黑石": return ["gilded_blackstone", 0];
        case "錾制磨制黑石": return ["chiseled_polished_blackstone", 0];
        case "深板岩瓦": return ["deepslate_tiles", 0];
        case "裂纹深板岩瓦": return ["cracked_deepslate_tiles", 0];
        case "深板岩砖": return ["deepslate_bricks", 0];
        case "裂纹深板岩砖": return ["cracked_deepslate_bricks", 0];
        case "錾制深板岩": return ["chiseled_deepslate", 0];
        case "圆石": return ["cobblestone", 0];
        case "苔圆石": return ["mossy_cobblestone", 0];
        case "深板岩圆石": return ["cobbled_deepslate", 0];
        case "平滑石": return ["smooth_stone", 0];
        case "沙石": return ["sandstone", 0];
        case "錾制沙石": return ["sandstone", 1];
        case "切制沙石": return ["sandstone", 2];
        case "平滑沙石": return ["sandstone", 3];
        case "红沙石": return ["red_sandstone", 0];
        case "錾制红沙石": return ["red_sandstone", 1];
        case "切制红沙石": return ["red_sandstone", 2];
        case "平滑红沙石": return ["red_sandstone", 3];
        case "煤炭块": return ["coal_block", 0];
        case "干海带方块": return ["dried_kelp_block", 0];
        case "金块": return ["gold_block", 0];
        case "铁块": return ["iron_block", 0];
        case "铜方块": return ["copper_block", 0];
        case "外露铜": return ["exposed_copper", 0];
        case "风化铜": return ["weathered_copper", 0];
        case "氧化铜": return ["oxidized_copper", 0];
        case "涂蜡铜方块": return ["waxed_copper", 0];
        case "涂蜡外露铜": return ["waxed_exposed_copper", 0];
        case "涂蜡风化铜": return ["waxed_weathered_copper", 0];
        case "涂蜡氧化铜": return ["waxed_oxidized_copper", 0];
        case "切制铜": return ["cut_copper", 0];
        case "外露切制铜": return ["exposed_cut_copper", 0];
        case "风化切制铜": return ["weathered_cut_copper", 0];
        case "氧化切制铜": return ["oxidized_cut_copper", 0];
        case "涂蜡切制铜": return ["waxed_cut_copper", 0];
        case "涂蜡外露切制铜": return ["waxed_exposed_cut_copper", 0];
        case "涂蜡风化切制铜": return ["waxed_weathered_cut_copper", 0];
        case "涂蜡氧化切制铜": return ["waxed_oxidized_cut_copper", 0];
        case "绿宝石块": return ["emerald_block", 0];
        case "钻石块": return ["diamond_block", 0];
        case "青金石块": return ["lapis_block", 0];
        case "粗铁块": return ["raw_iron_block", 0];
        case "粗铜块": return ["raw_copper_block", 0];
        case "粗金块": return ["raw_gold_block", 0];
        case "石英块": return ["quartz_block", 0];
        case "竖纹石英块": return ["quartz_block", 2];
        case "錾制石英块": return ["quartz_block", 1];
        case "平滑石英块": return ["quartz_block", 3];
        case "海晶石": return ["prismarine", 0];
        case "暗海晶石": return ["prismarine", 1];
        case "粘液块": return ["slime", 0];
        case "蜂蜜方块": return ["honey_block", 0];
        case "蜜脾块": return ["honeycomb_block", 0];
        case "干草捆": return ["hay_block", -1];
        case "骨头方块": return ["bone_block", -1];
        case "下界砖块": return ["nether_brick", 0];
        case "红色下界砖": return ["red_nether_brick", 0];
        case "下界合金块": return ["netherite_block", 0];
        case "磁石": return ["lodestone", 0];
        case "白色羊毛": return ["wool", 0];
        case "淡灰色羊毛": return ["wool", 8];
        case "灰色羊毛": return ["wool", 7];
        case "黑色羊毛": return ["wool", 15];
        case "棕色羊毛": return ["wool", 12];
        case "红色羊毛": return ["wool", 14];
        case "橙色羊毛": return ["wool", 1];
        case "黄色羊毛": return ["wool", 4];
        case "黄绿色羊毛": return ["wool", 5];
        case "绿色羊毛": return ["wool", 13];
        case "青色羊毛": return ["wool", 9];
        case "淡蓝色羊毛": return ["wool", 3];
        case "蓝色羊毛": return ["wool", 11];
        case "紫色羊毛": return ["wool", 10];
        case "品红色羊毛": return ["wool", 2];
        case "粉红色羊毛": return ["wool", 6];
        case "地毯": return ["carpet", -1];
        case "白色混凝土粉末": return ["concrete_powder", 0];
        case "淡灰色混凝土粉末": return ["concrete_powder", 8];
        case "灰色混凝土粉末": return ["concrete_powder", 7];
        case "黑色混凝土粉末": return ["concrete_powder", 15];
        case "棕色混凝土粉末": return ["concrete_powder", 12];
        case "红色混凝土粉末": return ["concrete_powder", 14];
        case "橙色混凝土粉末": return ["concrete_powder", 1];
        case "黄色混凝土粉末": return ["concrete_powder", 4];
        case "黄绿色混凝土粉末": return ["concrete_powder", 5];
        case "绿色混凝土粉末": return ["concrete_powder", 13];
        case "青色混凝土粉末": return ["concrete_powder", 9];
        case "淡蓝色混凝土粉末": return ["concrete_powder", 3];
        case "蓝色混凝土粉末": return ["concrete_powder", 11];
        case "紫色混凝土粉末": return ["concrete_powder", 10];
        case "品红色混凝土粉末": return ["concrete_powder", 2];
        case "粉红色混凝土粉末": return ["concrete_powder", 6];
        case "白色混凝土": return ["concrete", 0];
        case "淡灰色混凝土": return ["concrete", 8];
        case "灰色混凝土": return ["concrete", 7];
        case "黑色混凝土": return ["concrete", 15];
        case "棕色混凝土": return ["concrete", 12];
        case "红色混凝土": return ["concrete", 14];
        case "橙色混凝土": return ["concrete", 1];
        case "黄色混凝土": return ["concrete", 4];
        case "黄绿色混凝土": return ["concrete", 5];
        case "绿色混凝土": return ["concrete", 13];
        case "青色混凝土": return ["concrete", 9];
        case "淡蓝色混凝土": return ["concrete", 3];
        case "蓝色混凝土": return ["concrete", 11];
        case "紫色混凝土": return ["concrete", 10];
        case "品红色混凝土": return ["concrete", 2];
        case "粉红色混凝土": return ["concrete", 6];
        case "粘土块": return ["clay", 0];
        case "陶瓦": return ["hardened_clay", 0];
        case "白色陶瓦": return ["stained_hardened_clay", 0];
        case "淡灰色陶瓦": return ["stained_hardened_clay", 8];
        case "灰色陶瓦": return ["stained_hardened_clay", 7];
        case "黑色陶瓦": return ["stained_hardened_clay", 15];
        case "棕色陶瓦": return ["stained_hardened_clay", 12];
        case "红色陶瓦": return ["stained_hardened_clay", 14];
        case "橙色陶瓦": return ["stained_hardened_clay", 1];
        case "黄色陶瓦": return ["stained_hardened_clay", 4];
        case "黄绿色陶瓦": return ["stained_hardened_clay", 5];
        case "绿色陶瓦": return ["stained_hardened_clay", 13];
        case "青色陶瓦": return ["stained_hardened_clay", 9];
        case "淡蓝色陶瓦": return ["stained_hardened_clay", 3];
        case "蓝色陶瓦": return ["stained_hardened_clay", 11];
        case "紫色陶瓦": return ["stained_hardened_clay", 10];
        case "品红色陶瓦": return ["stained_hardened_clay", 2];
        case "粉红色陶瓦": return ["stained_hardened_clay", 6];
        case "白色带釉陶瓦": return ["white_glazed_terracotta", 4];
        case "淡灰色带釉陶瓦": return ["silver_glazed_terracotta", 4];
        case "灰色带釉陶瓦": return ["gray_glazed_terracotta", 4];
        case "黑色带釉陶瓦": return ["black_glazed_terracotta", 4];
        case "棕色带釉陶瓦": return ["brown_glazed_terracotta", 4];
        case "红色带釉陶瓦": return ["red_glazed_terracotta", 4];
        case "橙色带釉陶瓦": return ["orange_glazed_terracotta", 4];
        case "黄色带釉陶瓦": return ["yellow_glazed_terracotta", 4];
        case "黄绿色带釉陶瓦": return ["lime_glazed_terracotta", 4];
        case "绿色带釉陶瓦": return ["green_glazed_terracotta", 4];
        case "青色带釉陶瓦": return ["cyan_glazed_terracotta", 4];
        case "淡蓝色带釉陶瓦": return ["light_blue_glazed_terracotta", 4];
        case "蓝色带釉陶瓦": return ["blue_glazed_terracotta", 4];
        case "紫色带釉陶瓦": return ["purple_glazed_terracotta", 4];
        case "品红色带釉陶瓦": return ["magenta_glazed_terracotta", 4];
        case "粉红色带釉陶瓦": return ["pink_glazed_terracotta", 4];
        case "紫珀方块": return ["purpur_block", 0];
        case "紫珀柱子": return ["purpur_block", 2];
        case "填充泥浆": return ["packed_mud", 0];
        case "泥砖": return ["mud_bricks", 0];
        case "下界疣方块": return ["nether_wart_block", 0];
        case "诡异疣方块": return ["warped_wart_block", 0];
        case "菌光体": return ["shroomlight", 0];
        case "绯红菌岩": return ["crimson_nylium", 0];
        case "诡异菌岩": return ["warped_nylium", 0];
        case "玄武岩": return ["basalt", 0];
        case "磨制玄武岩": return ["polished_basalt", 0];
        case "平滑玄武岩": return ["smooth_basalt", 0];
        case "灵魂土": return ["soul_soil", 0];
        case "泥土": return ["dirt", 0];
        case "砂土": return ["dirt", 1];
        case "农地": return ["farmland", -1];
        case "草方块": return ["grass", 0];
        case "泥土小径": return ["grass_path", 0];
        case "灰化土": return ["podzol", 0];
        case "菌丝": return ["mycelium", 0];
        case "泥": return ["mud", 0];
        case "石头": return ["stone", 0];
        case "铁矿石": return ["iron_ore", 0];
        case "金矿石": return ["gold_ore", 0];
        case "钻石矿石": return ["diamond_ore", 0];
        case "青金石矿石": return ["lapis_ore", 0];
        case "红石矿石": return ["redstone_ore", 0];
        case "煤矿石": return ["coal_ore", 0];
        case "铜矿石": return ["copper_ore", 0];
        case "绿宝石矿石": return ["emerald_ore", 0];
        case "下界石英矿石": return ["quartz_ore", 0];
        case "下界金矿石": return ["nether_gold_ore", 0];
        case "远古残骸": return ["ancient_debris", 0];
        case "深层铁矿石": return ["deepslate_iron_ore", 0];
        case "深层金矿石": return ["deepslate_gold_ore", 0];
        case "深层钻石矿石": return ["deepslate_diamond_ore", 0];
        case "深板岩青金石矿石": return ["deepslate_lapis_ore", 0];
        case "深层红石矿石": return ["deepslate_redstone_ore", 0];
        case "深层绿宝石矿石": return ["deepslate_emerald_ore", 0];
        case "深层煤矿石": return ["deepslate_coal_ore", 0];
        case "深层铜矿石": return ["deepslate_copper_ore", 0];
        case "砂砾": return ["gravel", 0];
        case "花岗岩": return ["stone", 1];
        case "闪长岩": return ["stone", 3];
        case "安山岩": return ["stone", 5];
        case "黑石": return ["blackstone", 0];
        case "深板岩": return ["deepslate", 0];
        case "磨制花岗岩": return ["stone", 2];
        case "磨制闪长岩": return ["stone", 4];
        case "磨制安山岩": return ["stone", 6];
        case "磨制黑石": return ["polished_blackstone", 0];
        case "磨制深板岩": return ["polished_deepslate", 0];
        case "沙子": return ["sand", 0];
        case "红沙": return ["sand", 1];
        case "仙人掌": return ["cactus", 0];
        case "橡树原木": return ["log", -1];
        case "去皮橡树原木": return ["stripped_oak_log", -1];
        case "云杉原木": return ["log", -1];
        case "去皮云杉原木": return ["stripped_spruce_log", -1];
        case "桦树原木": return ["log", -1];
        case "去皮桦树原木": return ["stripped_birch_log", -1];
        case "丛林原木": return ["log", -1];
        case "去皮丛林原木": return ["stripped_jungle_log", -1];
        case "金合欢原木": return ["log2", -1];
        case "去皮金合欢原木": return ["stripped_acacia_log", -1];
        case "深色橡树原木": return ["log2", -1];
        case "去皮深色橡树原木": return ["stripped_dark_oak_log", -1];
        case "红树林原木": return ["mangrove_log", -1];
        case "去皮红树林原木": return ["stripped_mangrove_log", -1];
        case "绯红菌柄": return ["crimson_stem", -1];
        case "去皮绯红菌柄": return ["stripped_crimson_stem", -1];
        case "诡异菌柄": return ["warped_stem", -1];
        case "去皮诡异菌柄": return ["stripped_warped_stem", -1];

        case "橡木": return ["wood", -1];
        case "去皮橡木": return ["wood", -1];
        case "云杉木": return ["wood", -1];
        case "去皮云杉木": return ["wood", -1];
        case "桦木": return ["wood", -1];
        case "去皮桦木": return ["wood", -1];
        case "丛林木": return ["wood", -1];
        case "去皮丛林木": return ["wood", -1];
        case "金合欢木": return ["wood", -1];
        case "去皮金合欢木": return ["wood", -1];
        case "深色橡木": return ["wood", -1];
        case "去皮深色橡木": return ["wood", -1];
        case "红树林木头": return ["mangrove_wood", -1];
        case "去皮红树林木头": return ["stripped_mangrove_wood", -1];
        case "绯红菌丝": return ["crimson_hyphae", -1];
        case "去皮绯红菌丝": return ["stripped_crimson_hyphae", -1];
        case "诡异菌丝": return ["warped_hyphae", -1];
        case "去皮诡异菌丝": return ["stripped_warped_hyphae", -1];
        case "橡树叶": return ["leaves", 8];
        case "云杉叶": return ["leaves", 9];
        case "桦树叶": return ["leaves", 10];
        case "丛林树叶": return ["leaves", 11];
        case "金合欢树叶": return ["leaves2", 8];
        case "深色橡树叶": return ["leaves2", 9];
        case "红树林树叶": return ["mangrove_leaves", 0];
        case "杜鹃花叶": return ["azalea_leaves", 0];
        case "盛开的杜鹃树叶": return ["azalea_leaves_flowered", 0];
        case "橡树苗": return ["sapling", 0];
        case "云杉树苗": return ["sapling", 1];
        case "桦树苗": return ["sapling", 2];
        case "丛林树苗": return ["sapling", 3];
        case "金合欢树苗": return ["sapling", 4];
        case "深色橡树苗": return ["sapling", 5];
        case "红树林繁殖体": return ["mangrove_propagule", 0];
        case "蜂巢": return ["bee_nest", 0];
        case "农作物": return ["wheat", -1];
        case "南瓜茎": return ["pumpkin_stem", -1];
        case "tile.melon_stem.name": return ["melon_stem", -1];
        case "甜菜根": return ["beetroot", -1];
        case "马铃薯": return ["potatoes", -1];
        case "tile.carrots.name": return ["carrots", -1];
        case "西瓜": return ["melon_block", 0];
        case "甜浆果灌木丛": return ["sweet_berry_bush", -1];
        case "南瓜": return ["pumpkin", 0];
        case "雕刻南瓜": return ["carved_pumpkin", -1];
        case "南瓜灯": return ["lit_pumpkin", -1];
        case "蕨": return ["tallgrass", 2];
        case "大型蕨": return ["double_plant", 3];
        case "草": return ["tallgrass", 1];
        case "高草丛": return ["double_plant", 2];
        case "下界芽": return ["nether_sprouts", 0];
        case "火珊瑚": return ["coral", -1];
        case "脑纹珊瑚": return ["coral", -1];
        case "气泡珊瑚": return ["coral", -1];
        case "管珊瑚": return ["coral", -1];
        case "鹿角珊瑚": return ["coral", -1];
        case "死亡火珊瑚": return ["coral", -1];
        case "死亡脑纹珊瑚": return ["coral", -1];
        case "死亡气泡珊瑚": return ["coral", -1];
        case "死亡管珊瑚": return ["coral", -1];
        case "死亡鹿角珊瑚": return ["coral", -1];
        case "死亡火珊瑚扇": return ["coral_fan_dead", -1];
        case "死亡脑纹珊瑚扇": return ["coral_fan_dead", -1];
        case "死亡气泡珊瑚扇": return ["coral_fan_dead", -1];
        case "死亡管珊瑚扇": return ["coral_fan_dead", -1];
        case "死亡鹿角珊瑚扇": return ["coral_fan_dead", -1];
        case "火珊瑚扇": return ["coral_fan", -1];
        case "鹿角珊瑚扇": return ["coral_fan", -1];
        case "管珊瑚扇": return ["coral_fan", -1];
        case "气泡珊瑚扇": return ["coral_fan", -1];
        case "脑纹珊瑚扇": return ["coral_fan", -1];
        case "tile.kelp.name": return ["kelp", 0];
        case "海草": return ["seagrass", -1];
        case "绯红菌根": return ["crimson_roots", 0];
        case "诡异菌根": return ["warped_roots", 0];
        case "蒲公英": return ["yellow_flower", 0];
        case "玫瑰": return ["red_flower", 0];
        case "兰花": return ["red_flower", 1];
        case "绒球葱": return ["red_flower", 2];
        case "茜草花": return ["red_flower", 3];
        case "红色郁金香": return ["red_flower", 4];
        case "橙色郁金香": return ["red_flower", 5];
        case "白色郁金香": return ["red_flower", 6];
        case "粉红色郁金香": return ["red_flower", 7];
        case "滨菊": return ["red_flower", 8];
        case "矢车菊": return ["red_flower", 9];
        case "铃兰": return ["red_flower", 10];
        case "向日葵": return ["double_plant", 0];
        case "丁香": return ["double_plant", 1];
        case "玫瑰丛": return ["double_plant", 4];
        case "牡丹": return ["double_plant", 5];
        case "凋零玫瑰": return ["wither_rose", 0];
        case "缠怨藤": return ["twisting_vines", 4];
        case "tile.bamboo_sapling.oak.name": return ["bamboo_sapling", -1];
        case "藤蔓": return ["vine", -1];
        case "垂泪藤": return ["weeping_vines", 0];
        case "枯萎的灌木": return ["deadbush", 0];
        case "雪": return ["snow", 0];
        case "冰": return ["ice", 0];
        case "浮冰": return ["packed_ice", 0];
        case "蓝冰": return ["blue_ice", 0];
        case "滴水石锥": return ["pointed_dripstone", 0];
        case "滴水石方块": return ["dripstone_block", 0];
        case "苔藓地毯": return ["moss_carpet", 0];
        case "苔藓块": return ["moss_block", 0];
        case "带根泥土": return ["dirt_with_roots", 0];
        case "垂根": return ["hanging_roots", 0];
        case "红树根": return ["mangrove_roots", 0];
        case "泥泞的红树根": return ["muddy_mangrove_roots", 0];
        case "大型垂滴叶": return ["big_dripleaf", 0];
        case "小型垂滴叶": return ["small_dripleaf_block", 0];
        case "孢子花": return ["spore_blossom", 0];
        case "杜鹃花": return ["azalea", 0];
        case "盛开的杜鹃花": return ["flowering_azalea", 0];
        case "发光地衣": return ["glow_lichen", -1];
        case "紫水晶方块": return ["amethyst_block", 0];
        case "发芽紫水晶": return ["budding_amethyst", 0];
        case "紫水晶簇": return ["amethyst_cluster", -1];
        case "大型紫水晶芽": return ["large_amethyst_bud", -1];
        case "中型紫水晶芽": return ["medium_amethyst_bud", -1];
        case "小型紫水晶芽": return ["small_amethyst_bud", -1];
        case "凝灰岩": return ["tuff", 0];
        case "方解石": return ["calcite", 0];
        case "棕色蘑菇": return ["brown_mushroom", 0];
        case "绯红真菌": return ["crimson_fungus", 0];
        case "红蘑菇": return ["red_mushroom", 0];
        case "诡异真菌": return ["warped_fungus", 0];
        case "棕色蘑菇方块": return ["brown_mushroom_block", -1];
        case "红蘑菇方块": return ["red_mushroom_block", -1];
        case "蘑菇柄": return ["brown_mushroom_block", -1];
        case "蘑菇": return ["brown_mushroom_block", -1];
        case "甘蔗": return ["reeds", 0];
        case "蜘蛛网": return ["web", 0];
        case "刷怪箱": return ["mob_spawner", 0];
        case "被虫蚀的石头": return ["monster_egg", 0];
        case "被虫蚀的圆石": return ["monster_egg", 1];
        case "被虫蚀的石砖": return ["monster_egg", 2];
        case "被虫蚀的苔石砖": return ["monster_egg", 3];
        case "被虫蚀的裂纹石砖": return ["monster_egg", 4];
        case "被虫蚀的錾制石砖": return ["monster_egg", 5];
        case "被虫蚀的深板岩": return ["infested_deepslate", 0];
        case "龙蛋": return ["dragon_egg", 0];
        case "海龟蛋": return ["turtle_egg", -1];
        case "珠光青蛙灯": return ["pearlescent_froglight", -1];
        case "碧绿青蛙灯": return ["verdant_froglight", -1];
        case "赭色青蛙灯": return ["ochre_froglight", -1];
        case "黑曜石": return ["obsidian", 0];
        case "哭泣的黑曜石": return ["crying_obsidian", 0];
        case "基岩": return ["bedrock", 0];
        case "灵魂沙": return ["soul_sand", 0];
        case "下界岩": return ["netherrack", 0];
        case "岩浆方块": return ["magma", 0];
        case "下界疣": return ["nether_wart", 0];
        case "末地石": return ["end_stone", 0];
        case "紫颂花": return ["chorus_flower", 0];
        case "紫颂植物": return ["chorus_plant", 0];
        case "海绵": return ["sponge", 0];
        case "湿海绵": return ["sponge", 1];
        case "管珊瑚块": return ["coral_block", 0];
        case "脑纹珊瑚块": return ["coral_block", 1];
        case "气泡珊瑚块": return ["coral_block", 2];
        case "火珊瑚块": return ["coral_block", 3];
        case "鹿角珊瑚块": return ["coral_block", 12];
        case "死亡管珊瑚块": return ["coral_block", 8];
        case "死亡脑纹珊瑚块": return ["coral_block", 9];
        case "死亡气泡珊瑚块": return ["coral_block", 10];
        case "死亡火珊瑚块": return ["coral_block", 11];
        case "死亡鹿角珊瑚块": return ["coral_block", 12];
        case "潜声": return ["sculk", 0];
        case "潜声血管": return ["sculk_vein", -1];
        case "潜声催化剂": return ["sculk_catalyst", 0];
        case "潜声尖啸": return ["sculk_shrieker", 0];
        case "潜声传感器": return ["sculk_sensor", 0];
        case "强化的深板岩": return ["reinforced_deepslate", 0];
        case "蛋糕": return ["cake", -1];
        case "床": return ["bed", -1];
        case "火把": return ["torch", -1];
        case "灵魂火把": return ["soul_torch", -1];
        case "灯": return ["lantern", -1];
        case "灵魂灯": return ["soul_lantern", -1];
        case "工作台": return ["crafting_table", 0];
        case "制图台": return ["cartography_table", 0];
        case "制箭台": return ["fletching_table", 0];
        case "锻造台": return ["smithing_table", 0];
        case "蜂箱": return ["beehive", -1];
        case "营火": return ["campfire", 0];
        case "灵魂营火": return ["soul_campfire", 0];
        case "熔炉": return ["furnace", -1];
        case "高炉": return ["blast_furnace", -1];
        case "火炉": return ["smoker", -1];
        case "重生锚": return ["respawn_anchor", 0];
        case "酿造台": return ["brewing_stand", 0];
        case "铁砧": return ["anvil", 3];
        case "轻微损坏的铁砧": return ["anvil", 7];
        case "严重损坏的铁砧": return ["anvil", 11];
        case "磨石": return ["grindstone", -1];
        case "附魔台": return ["enchanting_table", 0];
        case "书架": return ["bookshelf", 0];
        case "讲台": return ["lectern", -1];
        case "炼药锅": return ["cauldron", -1];
        case "堆肥箱": return ["composter", -1];
        case "箱子": return ["chest", -1];
        case "陷阱箱": return ["trapped_chest", -1];
        case "末影箱": return ["ender_chest", -1];
        case "木桶": return ["barrel", -1];
        case "tile.undyed_shulker_box.name": return ["undyed_shulker_box", -1];
        case "tile.shulker_box.name": return ["shulker_box", -1];
        case "音符盒": return ["noteblock", 0];
        case "唱片机": return ["jukebox", 0];
        case "荧石": return ["glowstone", 0];
        case "红石灯": return ["redstone_lamp", 0];
        case "海晶灯": return ["sea_lantern", 0];
        case "告示牌": return ["standing_sign", -1];
        case "云杉木告示牌": return ["spruce_standing_sign", -1];
        case "桦木告示牌": return ["birch_standing_sign", -1];
        case "丛林木告示牌": return ["jungle_standing_sign", -1];
        case "金合欢木告示牌": return ["acacia_standing_sign", -1];
        case "深色橡木告示牌": return ["darkoak_standing_sign", -1];
        case "tile.mangrove_standing_sign.name": return ["mangrove_standing_sign", -1];
        case "绯红告示牌": return ["crimson_standing_sign", -1];
        case "诡异木告示牌": return ["warped_standing_sign", -1];
        case "tile.frame.name": return ["frame", -1];
        case "tile.glow_frame.name": return ["glow_frame", 0];
        case "tile.flower_pot.name": return ["flower_pot", 0];
        case "信标": return ["beacon", 0];
        case "钟": return ["bell", -1];
        case "潮涌核心": return ["conduit", 0];
        case "切石机": return ["stonecutter_block", 4];
        case "末地传送门": return ["end_portal_frame", -1];
        case "红石块": return ["redstone_block", 0];
        case "红石粉": return ["redstone_wire", 0];
        case "铁轨": return ["rail", -1];
        case "动力铁轨": return ["golden_rail", -1];
        case "探测铁轨": return ["detector_rail", -1];
        case "激活铁轨": return ["activator_rail", -1];
        case "红石火把": return ["redstone_torch", -1];
        case "拉杆": return ["lever", -1];
        case "橡木按钮": return ["wooden_button", -1];
        case "云杉按钮": return ["spruce_button", -1];
        case "桦木按钮": return ["birch_button", -1];
        case "丛林木按钮": return ["jungle_button", -1];
        case "金合欢木按钮": return ["acacia_button", -1];
        case "深色橡木按钮": return ["dark_oak_button", -1];
        case "红树林按钮": return ["mangrove_button", -1];
        case "石头按钮": return ["stone_button", -1];
        case "绯红按钮": return ["crimson_button", -1];
        case "诡异木按钮": return ["warped_button", -1];
        case "磨制黑石按钮": return ["polished_blackstone_button", -1];
        case "绊线钩": return ["tripwire_hook", -1];
        case "橡木压力板": return ["wooden_pressure_plate", 0];
        case "云杉压力板": return ["spruce_pressure_plate", 0];
        case "桦木压力板": return ["birch_pressure_plate", 0];
        case "丛林木压力板": return ["jungle_pressure_plate", 0];
        case "金合欢木压力板": return ["acacia_pressure_plate", 0];
        case "深色橡木压力板": return ["dark_oak_pressure_plate", 0];
        case "红树林压力板": return ["mangrove_pressure_plate", 0];
        case "绯红压力板": return ["crimson_pressure_plate", 0];
        case "诡异木压力板": return ["warped_pressure_plate", 0];
        case "石质压力板": return ["stone_pressure_plate", 0];
        case "测重压力板（轻型）": return ["light_weighted_pressure_plate", 0];
        case "测重压力板（重型）": return ["heavy_weighted_pressure_plate", 0];
        case "磨制黑石压力板": return ["polished_blackstone_pressure_plate", 0];
        case "侦测器": return ["observer", -1];
        case "阳光传感器": return ["daylight_detector", -1];
        case "tile.unpowered_repeater.name": return ["unpowered_repeater", -1];
        case "tile.unpowered_comparator.name": return ["unpowered_comparator", -1];
        case "漏斗": return ["hopper", -1];
        case "投掷器": return ["dropper", -1];
        case "发射器": return ["dispenser", -1];
        case "活塞": return ["piston", -1];
        case "粘性活塞": return ["sticky_piston", -1];
        case "TNT": return ["tnt", 0];
        case "织布机": return ["loom", -1];
        case "旗帜": return ["standing_banner", -1];
        case "锁链": return ["chain", -1];
        case "标靶": return ["target", 0];
        case "圆石墙": return ["cobblestone_wall", 0];
        case "苔圆石墙": return ["cobblestone_wall", 0];
        case "蜡烛": return ["candle", -1];
        case "白色蜡烛": return ["white_candle", -1];
        case "橙色蜡烛": return ["orange_candle", -1];
        case "品红色蜡烛": return ["magenta_candle", -1];
        case "淡蓝色蜡烛": return ["light_blue_candle", -1];
        case "黄色蜡烛": return ["yellow_candle", -1];
        case "黄绿色蜡烛": return ["lime_candle", -1];
        case "粉红色蜡烛": return ["end_stone", -1];
        case "灰色蜡烛": return ["gray_candle", -1];
        case "淡灰色蜡烛": return ["light_gray_candle", -1];
        case "青色蜡烛": return ["cyan_candle", -1];
        case "紫色蜡烛": return ["purple_candle", -1];
        case "蓝色蜡烛": return ["blue_candle", -1];
        case "棕色蜡烛": return ["brown_candle", -1];
        case "绿色蜡烛": return ["green_candle", -1];
        case "红色蜡烛": return ["red_candle", -1];
        case "黑色蜡烛": return ["black_candle", -1];
        case "tile.skull.name": return ["skull", -1];
        case "顶层雪": return ["snow_layer", -1];
        case "海泡菜": return ["sea_pickle", -1];
        case "滴水石锥": return ["pointed_dripstone", 0];
        case "岩浆": return ["lava", -1];
        case "水": return ["water", -1];
        case "睡莲": return ["waterlily", -1];
        case "黑石墙": return ["blackstone_wall", 0];
        case "圆石墙": return ["cobblestone_wall", 0];
        case "苔圆石墙": return ["cobblestone_wall", 1];
        case "花岗岩墙": return ["cobblestone_wall", 2];
        case "闪长岩墙": return ["cobblestone_wall", 3];
        case "安山岩墙": return ["cobblestone_wall", 4];
        case "沙石墙": return ["cobblestone_wall", 5];
        case "砖墙": return ["cobblestone_wall", 6];
        case "石砖墙": return ["cobblestone_wall", 7];
        case "苔石砖墙": return ["cobblestone_wall", 8];
        case "地狱砖墙": return ["cobblestone_wall", 9];
        case "下界砖墙": return ["cobblestone_wall", 10];
        case "末地石砖墙": return ["cobblestone_wall", 11];
        case "海晶石墙": return ["cobblestone_wall", 12];
        case "红沙石墙": return ["cobblestone_wall", 13];
        case "红色地狱砖墙": return ["cobblestone_wall", 14];
        case "红色下界砖墙": return ["cobblestone_wall", 15];
        case "磨制黑石墙": return ["polished_blackstone_brick_wall", 0];
        case "%tile.wall_sign.name":
        case "tile.wall_sign.name": return ["wall_sign", -1];
        case "%tile.spruce_wall_sign.name":
        case "tile.spruce_wall_sign.name": return ["spruce_wall_sign", -1];
        case "%tile.birch_wall_sign.name":
        case "tile.birch_wall_sign.name": return ["birch_wall_sign", -1];
        case "%tile.jungle_wall_sign.name":
        case "tile.jungle_wall_sign.name": return ["jungle_wall_sign", -1];
        case "%tile.acacia_wall_sign.name":
        case "tile.acacia_wall_sign.name": return ["acacia_wall_sign", -1];
        case "%tile.darkoak_wall_sign.name":
        case "tile.darkoak_wall_sign.name": return ["darkoak_wall_sign", -1];
        case "%tile.mangrove_wall_sign.name":
        case "tile.mangrove_wall_sign.name": return ["mangrove_wall_sign", -1];
        case "绯红告示牌": return ["crimson_wall_sign", -1];
        case "诡异木告示牌": return ["warped_wall_sign", -1];
        case "tile.double_stone_slab.smoothStone.name":
        case "%tile.double_stone_slab.smoothStone.name": return ["double_stone_slab", 0];
        case "tile.double_stone_slab2.purpur.name":
        case "%tile.double_stone_slab2.purpur.name": return ["double_stone_slab2", 1];
        case "tile.double_stone_slab2.prismarine.rough.name":
        case "%tile.double_stone_slab2.prismarine.rough.name": return ["double_stone_slab2", 2];
        case "tile.double_stone_slab2.prismarine.dark.name":
        case "%tile.double_stone_slab2.prismarine.dark.name": return ["double_stone_slab2", 3];
        case "tile.double_stone_slab2.prismarine.bricks.name":
        case "%tile.double_stone_slab2.prismarine.bricks.name": return ["double_stone_slab2", 4];
        case "tile.double_stone_slab2.mossy_cobblestone.name":
        case "%tile.double_stone_slab2.mossy_cobblestone.name": return ["double_stone_slab2", 5];
        case "tile.double_stone_slab2.sandstone.smooth.name":
        case "%tile.double_stone_slab2.sandstone.smooth.name": return ["double_stone_slab2", 6];
        case "tile.double_stone_slab2.red_nether_brick.name":
        case "%tile.double_stone_slab2.red_nether_brick.name": return ["double_stone_slab2", 7];
        case "tile.double_stone_slab3.end_brick.name":
        case "%tile.double_stone_slab3.end_brick.name": return ["double_stone_slab3", 0];
        case "tile.double_stone_slab3.red_sandstone.smooth.name":
        case "%tile.double_stone_slab3.red_sandstone.smooth.name": return ["double_stone_slab3", 1];
        case "tile.double_stone_slab3.andesite.smooth.name":
        case "%tile.double_stone_slab3.andesite.smooth.name": return ["double_stone_slab3", 2];
        case "tile.double_stone_slab3.andesite.name":
        case "%tile.double_stone_slab3.andesite.name": return ["double_stone_slab3", 3];
        case "tile.double_stone_slab3.diorite.name":
        case "%tile.double_stone_slab3.diorite.name": return ["double_stone_slab3", 4];
        case "tile.double_stone_slab3.diorite.smooth.name":
        case "%tile.double_stone_slab3.diorite.smooth.name": return ["double_stone_slab3", 5];
        case "tile.double_stone_slab3.granite.name":
        case "%tile.double_stone_slab3.granite.name": return ["double_stone_slab3", 6];
        case "tile.double_stone_slab3.granite.smooth.name":
        case "%tile.double_stone_slab3.granite.smooth.name": return ["double_stone_slab3", 7];
        case "tile.double_stone_slab4.mossy_stone_brick.name":
        case "%tile.double_stone_slab4.mossy_stone_brick.name": return ["double_stone_slab4", 0];
        case "tile.double_stone_slab4.smooth_quartz.name":
        case "%tile.double_stone_slab4.smooth_quartz.name": return ["double_stone_slab4", 1];
        case "tile.double_stone_slab4.stone.name":
        case "%tile.double_stone_slab4.stone.name": return ["double_stone_slab4", 2];
        case "tile.double_stone_slab4.cut_sandstone.name":
        case "%tile.double_stone_slab4.cut_sandstone.name": return ["double_stone_slab4", 3];
        case "tile.double_stone_slab4.cut_red_sandstone.name":
        case "%tile.double_stone_slab4.cut_red_sandstone.name": return ["double_stone_slab4", 4];
        case "tile.double_wooden_slab.oak.name":
        case "%tile.double_wooden_slab.oak.name": return ["planks", 0];
        case "tile.double_wooden_slab.spruce.name":
        case "%tile.double_wooden_slab.spruce.name": return ["planks", 1];
        case "tile.double_wooden_slab.birch.name":
        case "%tile.double_wooden_slab.birch.name": return ["planks", 2];
        case "tile.double_wooden_slab.jungle.name":
        case "%tile.double_wooden_slab.jungle.name": return ["planks", 3];
        case "tile.double_wooden_slab.acacia.name":
        case "%tile.double_wooden_slab.acacia.name": return ["planks", 4];
        case "tile.double_wooden_slab.big_oak.name":
        case "%tile.double_wooden_slab.big_oak.name": return ["planks", 5];
        case "tile.frame.name":
        case "%tile.frame.name": return ["frame", -1];
        case "tile.unpoweded_comparator.name":
        case "%tile.unpoweded_comparator.name": return ["unpowered_comparator", -1];
        case "tile.poweded_comparator.name":
        case "%tile.poweded_comparator.name": return ["powered_comparator", -1];
        case "tile.unpoweded_repeater.name":
        case "%tile.unpoweded_repeater.name": return ["unpowered_repeater", -1];
        case "tile.poweded_repeater.name":
        case "%tile.poweded_repeater.name": return ["powered_repeater", -1];
        case "tile.undyed_shulker_bok.name":
        case "%tile.undyed_shulker_bok.name": return ["undyed_shulker_bok", -1];
        case "tile.shulker_bok.name":
        case "%tile.shulker_bok.name": return ["shulker_bok", -1];
        case "tile.flower_pot.name":
        case "%tile.flower_pot.name": return ["flower_pot", -1];
        case "tile.lit_redstone_lamp.name":
        case "%tile.lit_redstone_lamp.name": return ["redstone_lamp", 0];
        case "tile.daylight_detector_inverted.name":
        case "%tile.daylight_detector_inverted.name": return ["daylight_detector_inverted", 0];
        case "tile.skull.name":
        case "%tile.skull.name": return ["skull", -1];
        case "tile.lit_blast_furnace.name":
        case "%tile.lit_blast_furnace.name": return ["lit_blast_furnace", 0];
        case "tile.lit_smoker.name":
        case "%tile.lit_smoker.name": return ["lit_smoker", 0];
        case "tile.end_portal.name":
        case "%tile.end_portal.name": return ["end_portal", 0];
        case "tile.melon_stem.name":
        case "%tile.melon_stem.name": return ["melon_stem", -1];
        case "tile.lava.name":
        case "%tile.lava.name": return ["lava", -1];
        case "tile.water.name":
        case "%tile.water.name": return ["water", -1];
        case "tile.double_cut_copper_slab.name":
        case "%tile.double_cut_copper_slab.name": return ["double_cut_copper_slab", 0];
        case "tile.exposed_double_cut_copper_slab.name":
        case "%tile.exposed_double_cut_copper_slab.name": return ["exposed_double_cut_copper_slab", 0];
        case "tile.weathered_double_cut_copper_slab.name":
        case "%tile.weathered_double_cut_copper_slab.name": return ["weathered_double_cut_copper_slab", 0];
        case "tile.oxidized_double_cut_copper_slab.name":
        case "%tile.oxidized_double_cut_copper_slab.name": return ["oxidized_double_cut_copper_slab", 0];
        case "tile.waxed_double_cut_copper_slab.name":
        case "%tile.waxed_double_cut_copper_slab.name": return ["waxed_double_cut_copper_slab", 0];
        case "tile.waxed_exposed_double_cut_copper_slab.name":
        case "%tile.waxed_exposed_double_cut_copper_slab.name": return ["waxed_exposed_double_cut_copper_slab", 0];
        case "tile.waxed_weathered_double_cut_copper_slab.name":
        case "%tile.waxed_weathered_double_cut_copper_slab.name": return ["waxed_weathered_double_cut_copper_slab", 0];
        case "tile.waxed_oxidized_double_cut_copper_slab.name":
        case "%tile.waxed_oxidized_double_cut_copper_slab.name": return ["waxed_oxidized_double_cut_copper_slab", 0];
        case "带蜡烛的蛋糕": return ["candle_cake", 0];
        case "带白色蜡烛的蛋糕": return ["white_candle_cake", 0];
        case "带黑色蜡烛的蛋糕": return ["black_candle_cake", 0];
        case "带蓝色蜡烛的蛋糕": return ["blue_candle_cake", 0];
        case "带棕色蜡烛的蛋糕": return ["brown_candle_cake", 0];
        case "带青色蜡烛的蛋糕": return ["cyan_candle_cake", 0];
        case "带灰色蜡烛的蛋糕": return ["gray_candle_cake", 0];
        case "带绿色蜡烛的蛋糕": return ["green_candle_cake", 0];
        case "带淡蓝色蜡烛的蛋糕": return ["light_blue_candle_cake", 0];
        case "带淡灰色蜡烛的蛋糕": return ["light_gray_candel_cake", 0];
        case "带黄绿色蜡烛的蛋糕": return ["lime_candle_cake", 0];
        case "带品红色蜡烛的蛋糕": return ["magenta_candle_cake", 0];
        case "带橙色蜡烛的蛋糕": return ["orange_candle_cake", 0];
        case "带粉色蜡烛的蛋糕": return ["pink_candle_cake", 0];
        case "带紫色蜡烛的蛋糕": return ["purple_candle_cake", 0];
        case "带红色蜡烛的蛋糕": return ["red_candle_cake", 0];
        case "带黄色蜡烛的蛋糕": return ["yellow_candle_cake", 0];
        case "光源方块": return ["light_block", -1];
        case "命令方块": return ["command_block", -1];
        case "链命令方块": return ["chain_command_block", -1];
        case "重复命令方块": return ["repeating_command_block", -1];
        default: return ["air", 0];
    }
}
// /**
//  * 
//  * @param {Number} id 
//  * @return {String} namespace
//  */
// function id2nameBE(id) {
//     switch (id) {
//         case 0: return "air";
//         case 1: return "stone";
//         case 2: return "grass";
//         case 3: return "dirt";
//         case 4: return "cobblestone";
//         case 5: return "planks";
//         case 6: return "sapling";
//         case 7: return "bedrock";
//         case 8: return "flowing_water";
//         case 10: return "flowing_lava";
//         case 11: return "lava";
//         case 12: return "sand";
//         case 13: return "gravel";
//         case 9: return "water";
//         case 14: return "gold_ore";
//         case 16: return "coal_ore";
//         case 17: return "log";
//         case 18: return "leaves";
//         case 20: return "glass";
//         case 15: return "iron_ore";
//         case 22: return "lapis_block";
//         case 21: return "lapis_ore";
//         case 23: return "dispenser";
//         case 26: return "bed";
//         case 19: return "sponge";
//         case 24: return "sandstone";
//         case 25: return "noteblock";
//         case 27: return "golden_rail";
//         case 28: return "detector_rail";
//         case 30: return "web";
//         case 29: return "sticky_piston";
//         case 31: return "tallgrass";
//         case 32: return "deadbush";
//         case 34: return "pistonarmcollision";
//         case 35: return "wool";
//         case 36: return "element_0";
//         case 37: return "yellow_flower";
//         case 38: return "red_flower";
//         case 33: return "piston";
//         case 39: return "brown_mushroom";
//         case 41: return "gold_block";
//         case 40: return "red_mushroom";
//         case 42: return "iron_block";
//         case 43: return "double_stone_slab";
//         case 45: return "brick_block";
//         case 46: return "tnt";
//         case 47: return "bookshelf";
//         case 49: return "obsidian";
//         case 50: return "torch";
//         case 48: return "mossy_cobblestone";
//         case 51: return "fire";
//         case 52: return "mob_spawner";
//         case 54: return "chest";
//         case 53: return "oak_stairs";
//         case 56: return "diamond_ore";
//         case 57: return "diamond_block";
//         case 58: return "crafting_table";
//         case 59: return "wheat";
//         case 60: return "farmland";
//         case 61: return "furnace";
//         case 63: return "standing_sign";
//         case 62: return "lit_furnace";
//         case 64: return "wooden_door";
//         case 65: return "ladder";
//         case 66: return "rail";
//         case 67: return "stone_stairs";
//         case 68: return "wall_sign";
//         case 69: return "lever";
//         case 70: return "stone_pressure_plate";
//         case 72: return "wooden_pressure_plate";
//         case 71: return "iron_door";
//         case 55: return "redstone_wire";
//         case 73: return "redstone_ore";
//         case 74: return "lit_redstone_ore";
//         case 77: return "stone_button";
//         case 78: return "snow_layer";
//         case 79: return "ice";
//         case 80: return "snow";
//         case 81: return "cactus";
//         case 82: return "clay";
//         case 83: return "reeds";
//         case 84: return "jukebox";
//         case 85: return "fence";
//         case 86: return "pumpkin";
//         case 87: return "netherrack";
//         case 76: return "redstone_torch";
//         case 89: return "glowstone";
//         case 90: return "portal";
//         case 88: return "soul_sand";
//         case 92: return "cake";
//         case 91: return "lit_pumpkin";
//         case 75: return "unlit_redstone_torch";
//         case 93: return "unpowered_repeater";
//         case 94: return "powered_repeater";
//         case 44: return "stone_slab";
//         case 95: return "invisibleBedrock";
//         case 96: return "trapdoor";
//         case 97: return "monster_egg";
//         case 100: return "red_mushroom_block";
//         case 99: return "brown_mushroom_block";
//         case 101: return "iron_bars";
//         case 102: return "glass_pane";
//         case 98: return "stonebrick";
//         case 104: return "pumpkin_stem";
//         case 109: return "stone_brick_stairs";
//         case 103: return "melon_block";
//         case 105: return "melon_stem";
//         case 106: return "vine";
//         case 110: return "mycelium";
//         case 111: return "waterlily";
//         case 107: return "fence_gate";
//         case 112: return "nether_brick";
//         case 108: return "brick_stairs";
//         case 113: return "nether_brick_fence";
//         case 115: return "nether_wart";
//         case 117: return "brewing_stand";
//         case 116: return "enchanting_table";
//         case 119: return "end_portal";
//         case 114: return "nether_brick_stairs";
//         case 121: return "end_stone";
//         case 118: return "cauldron";
//         case 123: return "redstone_lamp";
//         case 125: return "dropper";
//         case 124: return "lit_redstone_lamp";
//         case 120: return "end_portal_frame";
//         case 126: return "activator_rail";
//         case 122: return "dragon_egg";
//         case 129: return "emerald_ore";
//         case 131: return "tripwire_hook";
//         case 128: return "sandstone_stairs";
//         case 130: return "ender_chest";
//         case 132: return "tripwire";
//         case 135: return "birch_stairs";
//         case 127: return "cocoa";
//         case 133: return "emerald_block";
//         case 136: return "jungle_stairs";
//         case 139: return "cobblestone_wall";
//         case 134: return "spruce_stairs";
//         case 141: return "carrots";
//         case 138: return "beacon";
//         case 137: return "command_block";
//         case 144: return "skull";
//         case 143: return "wooden_button";
//         case 140: return "flower_pot";
//         case 145: return "anvil";
//         case 146: return "trapped_chest";
//         case 148: return "heavy_weighted_pressure_plate";
//         case 147: return "light_weighted_pressure_plate";
//         case 149: return "unpowered_comparator";
//         case 150: return "powered_comparator";
//         case 151: return "daylight_detector";
//         case 142: return "potatoes";
//         case 153: return "quartz_ore";
//         case 152: return "redstone_block";
//         case 154: return "hopper";
//         case 155: return "quartz_block";
//         case 156: return "quartz_stairs";
//         case 157: return "double_wooden_slab";
//         case 158: return "wooden_slab";
//         case 159: return "stained_hardened_clay";
//         case 161: return "leaves2";
//         case 160: return "stained_glass_pane";
//         case 163: return "acacia_stairs";
//         case 165: return "slime";
//         case 164: return "dark_oak_stairs";
//         case 166: return "glow_stick";
//         case 162: return "log2";
//         case 168: return "prismarine";
//         case 167: return "iron_trapdoor";
//         case 169: return "seaLantern";
//         case 170: return "hay_block";
//         case 171: return "carpet";
//         case 172: return "hardened_clay";
//         case 173: return "coal_block";
//         case 174: return "packed_ice";
//         case 175: return "double_plant";
//         case 177: return "wall_banner";
//         case 176: return "standing_banner";
//         case 178: return "daylight_detector_inverted";
//         case 179: return "red_sandstone";
//         case 181: return "double_stone_slab2";
//         case 180: return "red_sandstone_stairs";
//         case 182: return "stone_slab2";
//         case 185: return "jungle_fence_gate";
//         case 183: return "spruce_fence_gate";
//         case 186: return "dark_oak_fence_gate";
//         case 184: return "birch_fence_gate";
//         case 187: return "acacia_fence_gate";
//         case 188: return "repeating_command_block";
//         case 189: return "chain_command_block";
//         case 191: return "hard_stained_glass_pane";
//         case 190: return "hard_glass_pane";
//         case 192: return "chemical_heat";
//         case 193: return "spruce_door";
//         case 194: return "birch_door";
//         case 195: return "jungle_door";
//         case 196: return "acacia_door";
//         case 197: return "dark_oak_door";
//         case 198: return "grass_path";
//         case 199: return "frame";
//         case 200: return "chorus_flower";
//         case 201: return "purpur_block";
//         case 202: return "colored_torch_rg";
//         case 203: return "purpur_stairs";
//         case 204: return "colored_torch_bp";
//         case 205: return "undyed_shulker_box";
//         case 206: return "end_bricks";
//         case 207: return "frosted_ice";
//         case 208: return "end_rod";
//         case 209: return "end_gateway";
//         case 210: return "allow";
//         case 211: return "deny";
//         case 213: return "magma";
//         case 212: return "border_block";
//         case 214: return "nether_wart_block";
//         case 215: return "red_nether_brick";
//         case 216: return "bone_block";
//         case 217: return "structure_void";
//         case 218: return "shulker_box";
//         case 219: return "purple_glazed_terracotta";
//         case 220: return "white_glazed_terracotta";
//         case 221: return "orange_glazed_terracotta";
//         case 222: return "magenta_glazed_terracotta";
//         case 223: return "light_blue_glazed_terracotta";
//         case 224: return "yellow_glazed_terracotta";
//         case 225: return "lime_glazed_terracotta";
//         case 226: return "pink_glazed_terracotta";
//         case 227: return "gray_glazed_terracotta";
//         case 228: return "silver_glazed_terracotta";
//         case 229: return "cyan_glazed_terracotta";
//         case 231: return "blue_glazed_terracotta";
//         case 230: return "chalkboard";
//         case 232: return "brown_glazed_terracotta";
//         case 234: return "red_glazed_terracotta";
//         case 235: return "black_glazed_terracotta";
//         case 236: return "concrete";
//         case 239: return "underwater_torch";
//         case 237: return "concrete_powder";
//         case 238: return "chemistry_table";
//         case 240: return "chorus_plant";
//         case 241: return "stained_glass";
//         case 243: return "podzol";
//         case 233: return "green_glazed_terracotta";
//         case 242: return "camera";
//         case 245: return "stonecutter";
//         case 244: return "beetroot";
//         case 246: return "glowingobsidian";
//         case 247: return "netherreactor";
//         case 248: return "info_update";
//         case 251: return "observer";
//         case 249: return "info_update2";
//         case 252: return "structure_block";
//         case 250: return "movingBlock";
//         case 253: return "hard_glass";
//         case 254: return "hard_stained_glass";
//         case 255: return "reserved6";
//         case 256: return "air";
//         case 257: return "prismarine_stairs";
//         case 258: return "dark_prismarine_stairs";
//         case 259: return "prismarine_bricks_stairs";
//         case 260: return "stripped_spruce_log";
//         case 261: return "stripped_birch_log";
//         case 263: return "stripped_acacia_log";
//         case 262: return "stripped_jungle_log";
//         case 264: return "stripped_dark_oak_log";
//         case 265: return "stripped_oak_log";
//         case 266: return "blue_ice";
//         case 268: return "element_2";
//         case 269: return "element_3";
//         case 270: return "element_4";
//         case 271: return "element_5";
//         case 273: return "element_7";
//         case 272: return "element_6";
//         case 267: return "element_1";
//         case 275: return "element_9";
//         case 276: return "element_10";
//         case 277: return "element_11";
//         case 274: return "element_8";
//         case 278: return "element_12";
//         case 279: return "element_13";
//         case 280: return "element_14";
//         case 281: return "element_15";
//         case 282: return "element_16";
//         case 283: return "element_17";
//         case 284: return "element_18";
//         case 285: return "element_19";
//         case 287: return "element_21";
//         case 286: return "element_20";
//         case 288: return "element_22";
//         case 289: return "element_23";
//         case 290: return "element_24";
//         case 291: return "element_25";
//         case 292: return "element_26";
//         case 293: return "element_27";
//         case 294: return "element_28";
//         case 295: return "element_29";
//         case 297: return "element_31";
//         case 298: return "element_32";
//         case 301: return "element_35";
//         case 300: return "element_34";
//         case 296: return "element_30";
//         case 299: return "element_33";
//         case 302: return "element_36";
//         case 304: return "element_38";
//         case 306: return "element_40";
//         case 303: return "element_37";
//         case 305: return "element_39";
//         case 307: return "element_41";
//         case 308: return "element_42";
//         case 309: return "element_43";
//         case 310: return "element_44";
//         case 312: return "element_46";
//         case 314: return "element_48";
//         case 313: return "element_47";
//         case 315: return "element_49";
//         case 311: return "element_45";
//         case 317: return "element_51";
//         case 316: return "element_50";
//         case 319: return "element_53";
//         case 321: return "element_55";
//         case 320: return "element_54";
//         case 323: return "element_57";
//         case 318: return "element_52";
//         case 325: return "element_59";
//         case 322: return "element_56";
//         case 324: return "element_58";
//         case 326: return "element_60";
//         case 327: return "element_61";
//         case 328: return "element_62";
//         case 329: return "element_63";
//         case 331: return "element_65";
//         case 332: return "element_66";
//         case 330: return "element_64";
//         case 333: return "element_67";
//         case 336: return "element_70";
//         case 334: return "element_68";
//         case 335: return "element_69";
//         case 337: return "element_71";
//         case 338: return "element_72";
//         case 340: return "element_74";
//         case 341: return "element_75";
//         case 339: return "element_73";
//         case 342: return "element_76";
//         case 344: return "element_78";
//         case 345: return "element_79";
//         case 343: return "element_77";
//         case 347: return "element_81";
//         case 346: return "element_80";
//         case 348: return "element_82";
//         case 350: return "element_84";
//         case 351: return "element_85";
//         case 353: return "element_87";
//         case 352: return "element_86";
//         case 354: return "element_88";
//         case 355: return "element_89";
//         case 357: return "element_91";
//         case 356: return "element_90";
//         case 349: return "element_83";
//         case 358: return "element_92";
//         case 359: return "element_93";
//         case 360: return "element_94";
//         case 361: return "element_95";
//         case 362: return "element_96";
//         case 363: return "element_97";
//         case 365: return "element_99";
//         case 364: return "element_98";
//         case 366: return "element_100";
//         case 368: return "element_102";
//         case 369: return "element_103";
//         case 370: return "element_104";
//         case 371: return "element_105";
//         case 373: return "element_107";
//         case 372: return "element_106";
//         case 367: return "element_101";
//         case 374: return "element_108";
//         case 376: return "element_110";
//         case 377: return "element_111";
//         case 375: return "element_109";
//         case 378: return "element_112";
//         case 379: return "element_113";
//         case 381: return "element_115";
//         case 380: return "element_114";
//         case 383: return "element_117";
//         case 382: return "element_116";
//         case 384: return "element_118";
//         case 385: return "seagrass";
//         case 386: return "coral";
//         case 387: return "coral_block";
//         case 389: return "coral_fan_dead";
//         case 388: return "coral_fan";
//         case 390: return "coral_fan_hang";
//         case 391: return "coral_fan_hang2";
//         case 393: return "kelp";
//         case 394: return "dried_kelp_block";
//         case 395: return "acacia_button";
//         case 396: return "birch_button";
//         case 397: return "dark_oak_button";
//         case 398: return "jungle_button";
//         case 400: return "acacia_trapdoor";
//         case 399: return "spruce_button";
//         case 392: return "coral_fan_hang3";
//         case 403: return "jungle_trapdoor";
//         case 402: return "dark_oak_trapdoor";
//         case 401: return "birch_trapdoor";
//         case 404: return "spruce_trapdoor";
//         case 405: return "acacia_pressure_plate";
//         case 406: return "birch_pressure_plate";
//         case 407: return "dark_oak_pressure_plate";
//         case 408: return "jungle_pressure_plate";
//         case 409: return "spruce_pressure_plate";
//         case 411: return "sea_pickle";
//         case 410: return "carved_pumpkin";
//         case 412: return "conduit";
//         case 415: return "bubble_column";
//         case 413: return "air";
//         case 414: return "turtle_egg";
//         case 416: return "barrier";
//         case 417: return "stone_slab3";
//         case 418: return "bamboo";
//         case 419: return "bamboo_sapling";
//         case 420: return "scaffolding";
//         case 421: return "stone_slab4";
//         case 422: return "double_stone_slab3";
//         case 424: return "granite_stairs";
//         case 423: return "double_stone_slab4";
//         case 425: return "diorite_stairs";
//         case 427: return "polished_granite_stairs";
//         case 426: return "andesite_stairs";
//         case 429: return "polished_andesite_stairs";
//         case 430: return "mossy_stone_brick_stairs";
//         case 428: return "polished_diorite_stairs";
//         case 431: return "smooth_red_sandstone_stairs";
//         case 432: return "smooth_sandstone_stairs";
//         case 433: return "end_brick_stairs";
//         case 436: return "spruce_standing_sign";
//         case 435: return "normal_stone_stairs";
//         case 437: return "spruce_wall_sign";
//         case 438: return "smooth_stone";
//         case 434: return "mossy_cobblestone_stairs";
//         case 439: return "red_nether_brick_stairs";
//         case 440: return "smooth_quartz_stairs";
//         case 441: return "birch_standing_sign";
//         case 443: return "jungle_standing_sign";
//         case 442: return "birch_wall_sign";
//         case 444: return "jungle_wall_sign";
//         case 445: return "acacia_standing_sign";
//         case 447: return "darkoak_standing_sign";
//         case 446: return "acacia_wall_sign";
//         case 448: return "darkoak_wall_sign";
//         case 449: return "lectern";
//         case 452: return "stonecutter_block";
//         case 451: return "blast_furnace";
//         case 453: return "smoker";
//         case 450: return "grindstone";
//         case 454: return "lit_smoker";
//         case 455: return "cartography_table";
//         case 456: return "fletching_table";
//         case 457: return "smithing_table";
//         case 458: return "barrel";
//         case 460: return "air";
//         case 462: return "sweet_berry_bush";
//         case 461: return "bell";
//         case 463: return "lantern";
//         case 459: return "loom";
//         case 464: return "campfire";
//         case 466: return "jigsaw";
//         case 467: return "wood";
//         case 468: return "composter";
//         case 469: return "lit_blast_furnace";
//         case 470: return "light_block";
//         case 472: return "stickypistonarmcollision";
//         case 473: return "bee_nest";
//         case 465: return "lava_cauldron";
//         case 471: return "wither_rose";
//         case 474: return "beehive";
//         case 475: return "honey_block";
//         case 476: return "honeycomb_block";
//         case 477: return "lodestone";
//         case 478: return "crimson_roots";
//         case 482: return "warped_wart_block";
//         case 480: return "crimson_stem";
//         case 479: return "warped_roots";
//         case 481: return "warped_stem";
//         case 483: return "crimson_fungus";
//         case 484: return "warped_fungus";
//         case 486: return "weeping_vines";
//         case 485: return "shroomlight";
//         case 487: return "crimson_nylium";
//         case 488: return "warped_nylium";
//         case 490: return "polished_basalt";
//         case 489: return "basalt";
//         case 491: return "soul_soil";
//         case 493: return "nether_sprouts";
//         case 492: return "soul_fire";
//         case 495: return "stripped_crimson_stem";
//         case 498: return "warped_planks";
//         case 494: return "target";
//         case 497: return "crimson_planks";
//         case 501: return "crimson_trapdoor";
//         case 496: return "stripped_warped_stem";
//         case 500: return "warped_door";
//         case 502: return "warped_trapdoor";
//         case 503: return "air";
//         case 499: return "crimson_door";
//         case 506: return "warped_sign";
//         case 504: return "air";
//         case 505: return "crimson_sign";
//         case 508: return "warped_wall_sign";
//         case 509: return "crimson_stairs";
//         case 510: return "warped_stairs";
//         case 507: return "crimson_wall_sign";
//         case 511: return "crimson_fence";
//         case 513: return "crimson_fence_gate";
//         case 512: return "warped_fence";
//         case 514: return "warped_fence_gate";
//         case 517: return "crimson_pressure_plate";
//         case 516: return "warped_button";
//         case 518: return "warped_pressure_plate";
//         case 519: return "crimson_slab";
//         case 515: return "crimson_button";
//         case 521: return "crimson_double_slab";
//         case 520: return "warped_slab";
//         case 522: return "warped_double_slab";
//         case 523: return "soul_torch";
//         case 524: return "soul_lantern";
//         case 525: return "netherite_block";
//         case 528: return "blackstone";
//         case 527: return "respawn_anchor";
//         case 529: return "polished_blackstone_bricks";
//         case 526: return "ancient_debris";
//         case 531: return "blackstone_stairs";
//         case 530: return "polished_blackstone_brick_stairs";
//         case 532: return "blackstone_wall";
//         case 534: return "chiseled_polished_blackstone";
//         case 536: return "gilded_blackstone";
//         case 537: return "blackstone_slab";
//         case 533: return "polished_blackstone_brick_wall";
//         case 535: return "cracked_polished_blackstone_bricks";
//         case 539: return "polished_blackstone_brick_slab";
//         case 540: return "polished_blackstone_brick_double_slab";
//         case 541: return "chain";
//         case 542: return "twisting_vines";
//         case 538: return "blackstone_double_slab";
//         case 543: return "nether_gold_ore";
//         case 544: return "crying_obsidian";
//         case 546: return "polished_blackstone";
//         case 545: return "soul_campfire";
//         case 547: return "polished_blackstone_stairs";
//         case 548: return "polished_blackstone_slab";
//         case 549: return "polished_blackstone_double_slab";
//         case 550: return "polished_blackstone_pressure_plate";
//         case 551: return "polished_blackstone_button";
//         case 552: return "polished_blackstone_wall";
//         case 553: return "warped_hyphae";
//         case 554: return "crimson_hyphae";
//         case 555: return "stripped_crimson_hyphae";
//         case 556: return "stripped_warped_hyphae";
//         case 557: return "chiseled_nether_bricks";
//         case 558: return "cracked_nether_bricks";
//         case 559: return "quartz_bricks";
//     }
// }
/**
 * 
 * @param {Number} id 
 * @return {String} namespace
 */
function id2nameJE(id) {
    switch (id) {
        case 0: return "minecraft:air";
        case 1: return "minecraft:stone";
        case 2: return "minecraft:grass";
        case 3: return "minecraft:dirt";
        case 4: return "minecraft:cobblestone";
        case 5: return "minecraft:planks";
        case 6: return "minecraft:sapling";
        case 7: return "minecraft:bedrock";
        case 8: return "minecraft:flowing_water";
        case 9: return "minecraft:water";
        case 10: return "minecraft:flowing_lava";
        case 11: return "minecraft:lava";
        case 12: return "minecraft:sand";
        case 13: return "minecraft:gravel";
        case 14: return "minecraft:gold_ore";
        case 15: return "minecraft:iron_ore";
        case 16: return "minecraft:coal_ore";
        case 17: return "minecraft:log";
        case 18: return "minecraft:leaves";
        case 19: return "minecraft:sponge";
        case 20: return "minecraft:glass";
        case 21: return "minecraft:lapis_ore";
        case 22: return "minecraft:lapis_block";
        case 23: return "minecraft:dispenser";
        case 24: return "minecraft:sandstone";
        case 25: return "minecraft:noteblock";
        case 26: return "minecraft:bed";
        case 27: return "minecraft:golden_rail";
        case 28: return "minecraft:detector_rail";
        case 29: return "minecraft:sticky_piston";
        case 30: return "minecraft:web";
        case 31: return "minecraft:tallgrass";
        case 32: return "minecraft:deadbush";
        case 33: return "minecraft:piston";
        case 34: return "minecraft:piston_head";
        case 35: return "minecraft:wool";
        case 36: return "minecraft:piston_extension";
        case 37: return "minecraft:yellow_flower";
        case 38: return "minecraft:red_flower";
        case 39: return "minecraft:brown_mushroom";
        case 40: return "minecraft:red_mushroom";
        case 41: return "minecraft:gold_block";
        case 42: return "minecraft:iron_block";
        case 43: return "minecraft:double_stone_slab";
        case 44: return "minecraft:stone_slab";
        case 45: return "minecraft:brick_block";
        case 46: return "minecraft:tnt";
        case 47: return "minecraft:bookshelf";
        case 48: return "minecraft:mossy_cobblestone";
        case 49: return "minecraft:obsidian";
        case 50: return "minecraft:torch";
        case 51: return "minecraft:fire";
        case 52: return "minecraft:mob_spawner";
        case 53: return "minecraft:oak_stairs";
        case 54: return "minecraft:chest";
        case 55: return "minecraft:redstone_wire";
        case 56: return "minecraft:diamond_ore";
        case 57: return "minecraft:diamond_block";
        case 58: return "minecraft:crafting_table";
        case 59: return "minecraft:wheat";
        case 60: return "minecraft:farmland";
        case 61: return "minecraft:furnace";
        case 62: return "minecraft:lit_furnace";
        case 63: return "minecraft:standing_sign";
        case 64: return "minecraft:wooden_door";
        case 65: return "minecraft:ladder";
        case 66: return "minecraft:rail";
        case 67: return "minecraft:stone_stairs";
        case 68: return "minecraft:wall_sign";
        case 69: return "minecraft:lever";
        case 70: return "minecraft:stone_pressure_plate";
        case 71: return "minecraft:iron_door";
        case 72: return "minecraft:wooden_pressure_plate";
        case 73: return "minecraft:redstone_ore";
        case 74: return "minecraft:lit_redstone_ore";
        case 75: return "minecraft:unlit_redstone_torch";
        case 76: return "minecraft:redstone_torch";
        case 77: return "minecraft:stone_button";
        case 78: return "minecraft:snow_layer";
        case 79: return "minecraft:ice";
        case 80: return "minecraft:snow";
        case 81: return "minecraft:cactus";
        case 82: return "minecraft:clay";
        case 83: return "minecraft:reeds";
        case 84: return "minecraft:jukebox";
        case 85: return "minecraft:fence";
        case 86: return "minecraft:pumpkin";
        case 87: return "minecraft:netherrack";
        case 88: return "minecraft:soul_sand";
        case 89: return "minecraft:glowstone";
        case 90: return "minecraft:portal";
        case 91: return "minecraft:lit_pumpkin";
        case 92: return "minecraft:cake";
        case 93: return "minecraft:unpowered_repeater";
        case 94: return "minecraft:powered_repeater";
        case 95: return "minecraft:stained_glass";
        case 96: return "minecraft:trapdoor";
        case 97: return "minecraft:monster_egg";
        case 98: return "minecraft:stonebrick";
        case 99: return "minecraft:brown_mushroom_block";
        case 100: return "minecraft:red_mushroom_block";
        case 101: return "minecraft:iron_bars";
        case 102: return "minecraft:glass_pane";
        case 103: return "minecraft:melon_block";
        case 104: return "minecraft:pumpkin_stem";
        case 105: return "minecraft:melon_stem";
        case 106: return "minecraft:vine";
        case 107: return "minecraft:fence_gate";
        case 108: return "minecraft:brick_stairs";
        case 109: return "minecraft:stone_brick_stairs";
        case 110: return "minecraft:mycelium";
        case 111: return "minecraft:waterlily";
        case 112: return "minecraft:nether_bricks";
        case 113: return "minecraft:nether_brick_fence";
        case 114: return "minecraft:nether_brick_stairs";
        case 115: return "minecraft:nether_wart";
        case 116: return "minecraft:enchanting_table";
        case 117: return "minecraft:brewing_stand";
        case 118: return "minecraft:cauldron";
        case 119: return "minecraft:end_portal";
        case 120: return "minecraft:end_portal_frame";
        case 121: return "minecraft:end_stone";
        case 122: return "minecraft:dragon_egg";
        case 123: return "minecraft:redstone_lamp";
        case 124: return "minecraft:lit_redstone_lamp";
        case 125: return "minecraft:double_wooden_slab";
        case 126: return "minecraft:wooden_slab";
        case 127: return "minecraft:cocoa";
        case 128: return "minecraft:sandstone_stairs";
        case 129: return "minecraft:emerald_ore";
        case 130: return "minecraft:ender_chest";
        case 131: return "minecraft:tripwire_hook";
        case 132: return "minecraft:tripwire";
        case 133: return "minecraft:emerald_block";
        case 134: return "minecraft:spruce_stairs";
        case 135: return "minecraft:birch_stairs";
        case 136: return "minecraft:jungle_stairs";
        case 137: return "minecraft:command_block";
        case 138: return "minecraft:beacon";
        case 139: return "minecraft:cobblestone_wall";
        case 140: return "minecraft:flower_pot";
        case 141: return "minecraft:carrots";
        case 142: return "minecraft:potatoes";
        case 143: return "minecraft:wooden_button";
        case 144: return "minecraft:skull";
        case 145: return "minecraft:anvil";
        case 146: return "minecraft:trapped_chest";
        case 147: return "minecraft:light_weighted_pressure_plate";
        case 148: return "minecraft:heavy_weighted_pressure_plate";
        case 149: return "minecraft:unpowered_comparator";
        case 150: return "minecraft:powered_comparator";
        case 151: return "minecraft:daylight_detector";
        case 152: return "minecraft:redstone_block";
        case 153: return "minecraft:quartz_ore";
        case 154: return "minecraft:hopper";
        case 155: return "minecraft:quartz_block";
        case 156: return "minecraft:quartz_stairs";
        case 157: return "minecraft:activator_rail";
        case 158: return "minecraft:dropper";
        case 159: return "minecraft:stained_hardened_clay";
        case 160: return "minecraft:stained_glass_pane";
        case 161: return "minecraft:leaves2";
        case 162: return "minecraft:log2";
        case 163: return "minecraft:acacia_stairs";
        case 164: return "minecraft:dark_oak_stairs";
        case 165: return "minecraft:slime";
        case 166: return "minecraft:barrier";
        case 167: return "minecraft:iron_trapdoor";
        case 168: return "minecraft:prismarine";
        case 169: return "minecraft:sea_lantern";
        case 170: return "minecraft:hay_block";
        case 171: return "minecraft:carpet";
        case 172: return "minecraft:hardened_clay";
        case 173: return "minecraft:coal_block";
        case 174: return "minecraft:packed_ice";
        case 175: return "minecraft:double_plant";
        case 176: return "minecraft:standing_banner";
        case 177: return "minecraft:wall_banner";
        case 178: return "minecraft:daylight_detector_inverted";
        case 179: return "minecraft:red_sandstone";
        case 180: return "minecraft:red_sandstone_stairs";
        case 181: return "minecraft:double_stone_slab2";
        case 182: return "minecraft:stone_slab2";
        case 183: return "minecraft:spruce_fence_gate";
        case 184: return "minecraft:birch_fence_gate";
        case 185: return "minecraft:jungle_fence_gate";
        case 186: return "minecraft:dark_oak_fence_gate";
        case 187: return "minecraft:acacia_fence_gate";
        case 188: return "minecraft:spruce_fence";
        case 189: return "minecraft:birch_fence";
        case 190: return "minecraft:jungle_fence";
        case 191: return "minecraft:dark_oak_fence";
        case 192: return "minecraft:acacia_fence";
        case 193: return "minecraft:spruce_door";
        case 194: return "minecraft:birch_door";
        case 195: return "minecraft:jungle_door";
        case 196: return "minecraft:acacia_door";
        case 197: return "minecraft:dark_oak_door";
        case 198: return "minecraft:end_rod";
        case 199: return "minecraft:chorus_plant";
        case 200: return "minecraft:chorus_flower";
        case 201: return "minecraft:purpur_block";
        case 202: return "minecraft:purpur_pillar";
        case 203: return "minecraft:purpur_stairs";
        case 204: return "minecraft:purpur_double_slab";
        case 205: return "minecraft:purpur_slab";
        case 206: return "minecraft:end_bricks";
        case 207: return "minecraft:beetroots";
        case 208: return "minecraft:grass_path";
        case 209: return "minecraft:end_gateway";
        case 210: return "minecraft:repeating_command_block";
        case 211: return "minecraft:chain_command_block";
        case 212: return "minecraft:frosted_ice";
        case 213: return "minecraft:magma";
        case 214: return "minecraft:nether_wart_block";
        case 215: return "minecraft:red_nether_bricks";
        case 216: return "minecraft:bone_block";
        case 217: return "minecraft:structure_void";
        case 218: return "minecraft:observer";
        case 219: return "minecraft:white_shulker_box";
        case 220: return "minecraft:orange_shulker_box";
        case 221: return "minecraft:magenta_shulker_box";
        case 222: return "minecraft:light_blue_shulker_box";
        case 223: return "minecraft:yellow_shulker_box";
        case 224: return "minecraft:lime_shulker_box";
        case 225: return "minecraft:pink_shulker_box";
        case 226: return "minecraft:gray_shulker_box";
        case 227: return "minecraft:silver_shulker_box";
        case 228: return "minecraft:cyan_shulker_box";
        case 229: return "minecraft:purple_shulker_box";
        case 230: return "minecraft:blue_shulker_box";
        case 231: return "minecraft:brown_shulker_box";
        case 232: return "minecraft:green_shulker_box";
        case 233: return "minecraft:red_shulker_box";
        case 234: return "minecraft:black_shulker_box";
        case 235: return "minecraft:white_glazed_terracotta";
        case 236: return "minecraft:orange_glazed_terracotta";
        case 237: return "minecraft:magenta_glazed_terracotta";
        case 238: return "minecraft:light_blue_glazed_terracotta";
        case 239: return "minecraft:yellow_glazed_terracotta";
        case 240: return "minecraft:lime_glazed_terracotta";
        case 241: return "minecraft:pink_glazed_terracotta";
        case 242: return "minecraft:gray_glazed_terracotta";
        case 243: return "minecraft:silver_glazed_terracotta";
        case 244: return "minecraft:cyan_glazed_terracotta";
        case 245: return "minecraft:purple_glazed_terracotta";
        case 246: return "minecraft:blue_glazed_terracotta";
        case 247: return "minecraft:brown_glazed_terracotta";
        case 248: return "minecraft:green_glazed_terracotta";
        case 249: return "minecraft:red_glazed_terracotta";
        case 250: return "minecraft:black_glazed_terracotta";
        case 251: return "minecraft:concrete";
        case 252: return "minecraft:concrete_powder";
        case 253: return "minecraft:air";
        case 254: return "minecraft:air";
        case 255: return "minecraft:structure_block";
        default: return "minecraft:air";
    }
}



// ]}['"`,
function echoOff(socket, callback) {
    socket.exec("gamerule sendcommandfeedback", function (json) {
        var isenable = json.body.statusMessage.indexOf("false") === -1;
        if (!isenable) callback(isenable);
        else socket.exec("gamerule sendcommandfeedback false", function (json) {
            callback(isenable);
        });
    });
}
function parsePos(fPoint, sPoint) {
    var relative = [sPoint[0] - fPoint[0], sPoint[1] - fPoint[1], sPoint[2] - fPoint[2]];
    var planeTan = Math.atan2(relative[2], relative[0]);
    var planeDegree = planeTan / Math.PI * 180;
    var verticalTan = Math.atan2(relative[1], Math.sqrt(relative[0] ** 2 + relative[2] ** 2));
    var verticalDegree = verticalTan / Math.PI * 180;
    var minecraft_planeDegree = planeDegree - 90;
    var minecraft_verticalDegree = -verticalDegree;
    if (minecraft_planeDegree < 0) {
        minecraft_planeDegree += 360;
    }
    return {
        planeTan: planeTan,
        planeDegree: planeDegree,
        verticalTan: verticalTan,
        verticalDegree: verticalDegree,
        minecraft_planeDegree: minecraft_planeDegree,
        minecraft_verticalDegree: minecraft_verticalDegree
    }
}
function getPos(socket, callback) {
    echoOff(socket, function (isenable) {
        socket.exec("tp ~~~", function (json) {
            try {
                json = json.body.destination;
                var pos1 = {
                    x: parseFloat(json.x),
                    y: parseFloat(json.y),
                    z: parseFloat(json.z)
                }
            } catch (err) {
                return;
            }
            socket.exec("tp ^^^1", function (json) {
                if (json.body.destination) {
                    var pos2 = json.body.destination;
                    var parsed = parsePos([pos1.x, pos1.y, pos1.z], [pos2.x, pos2.y, pos2.z]);
                    parsed.x = pos1.x;
                    parsed.y = pos1.y;
                    parsed.z = pos1.z;
                    callback(parsed);
                    socket.exec(`tp ${pos1.x} ${pos1.y} ${pos1.z}`, function () {
                        if (isenable) {
                            socket.exec("gamerule sendcommandfeedback true");
                        }
                    });
                } else {
                    socket.tellraw("[Error] Unknown Error (at /tp)");
                }
            });
        });
    });


}
function drawReplay(fPoint, sPoint, speed, degreePlane, degreeVertical) {
    var plane = {
        width: sPoint[0] - fPoint[0],
        height: sPoint[2] - fPoint[2]
    }
    plane.length = Math.sqrt(plane.width ** 2 + plane.height ** 2);
    plane.tan = plane.height / plane.width;
    var vertical = {
        width: plane.width,
        height: sPoint[1] - fPoint[1]
    }
    vertical.tan = vertical.height / vertical.width;


    var interval = plane.width / plane.length / speed;
    var degreeP_for = degreePlane[0];
    var degreeP_for_i = (degreePlane[1] - degreePlane[0]) / (plane.width / interval);
    var degreeV_for = degreeVertical[0];
    var degreeV_for_i = (degreeVertical[1] - degreeVertical[0]) / (plane.width / interval);
    var pointSet = [];
    for (var i = 0; Math.abs(i) < Math.abs(plane.width); i += interval) {
        pointSet.push([fPoint[0] + i, fPoint[1] + i * vertical.tan, fPoint[2] + i * plane.tan, degreeP_for, degreeV_for]);
        degreeP_for += degreeP_for_i;
        degreeV_for += degreeV_for_i;
    }
    return pointSet;
}
function multiPointReplay(points, speed) {
    //points: socket.cmdv.pos.position[i]
    speed ||= 10;
    var last;
    var pointSet = [];
    for (var i = 0; i < points.length; i++) {
        var pos = {
            x: points[i].x,
            y: points[i].y,
            z: points[i].z,
            mpd: points[i].minecraft_planeDegree,
            mvd: points[i].minecraft_verticalDegree
        }
        if (i === 0) {
            last = pos;
            continue;
        }
        if (pos.mpd - last.mpd > 180) {
            last.mpd += 360;
        }
        if (pos.mpd - last.mpd < -180) {
            last.mpd -= 360;
        }
        pointSet = pointSet.concat(drawReplay([last.x, last.y, last.z], [pos.x, pos.y, pos.z], speed, [last.mpd, pos.mpd], [last.mvd, pos.mvd]));
        last = pos;
    }
    return pointSet;
}
function linearLine(positions) {
    var points = [];
    for (var i = 0; i < positions.length - 1; i++) {
        var p1 = [positions[i].x, positions[i].y, positions[i].z];
        var p2 = [positions[i + 1].x, positions[i + 1].y, positions[i + 1].z];
        var relative = [p2[0] - p1[0], p2[1] - p1[1], p2[2] - p1[2]];
        var len = Math.sqrt(relative[0] ** 2 + relative[2] ** 2);
        len += Math.sqrt(len ** 2 + relative[1] ** 2);
        len += Math.abs(relative[1]);
        var fp = [
            [0, 0],
            [0, 0],
            [relative[0], relative[2]],
            [relative[0], relative[2]]
        ];
        var fv = [
            [0, 0],
            [0, 0],
            [relative[1], relative[1]],
            [relative[1], relative[1]]
        ];
        for (var r = 0; r < len; r++) {
            var posp = bezier(r / len, fp);
            var posv = bezier(r / len, fv);
            points.push([p1[0] + posp[0], p1[1] + posv[0], p1[2] + posp[1]]);
        }
    }
    return points;
}
function drawBezier(points, yAxis, accuracy, degreeP, degreeV) {
    var origin = points;
    points = [];
    points[0] = [0, 0];
    points[1] = [origin[1][0] - origin[0][0], origin[1][1] - origin[0][1]];
    points[2] = [origin[2][0] - origin[0][0], origin[2][1] - origin[0][1]];
    points[3] = [origin[3][0] - origin[0][0], origin[3][1] - origin[0][1]];
    accuracy = accuracy || 10;
    var len = Math.sqrt((points[0][0] - points[1][0]) ** 2 + (points[0][1] - points[1][1]) ** 2) +
        Math.sqrt((points[1][0] - points[2][0]) ** 2 + (points[1][1] - points[2][1]) ** 2) +
        Math.sqrt((points[2][0] - points[3][0]) ** 2 + (points[2][1] - points[3][1]) ** 2);
    var for_i = accuracy * len;
    var posSet = [];
    var degreeSet = [];
    if (degreeP && degreeV) {
        var degreeP_i = (degreeP[1] - degreeP[0]) / for_i;
        var degreeV_i = (degreeV[1] - degreeV[0]) / for_i;
        if (degreeP[1] - degreeP[0] > 180) {
            degreeP[0] += 360;
        }
        if (degreeP[1] - degreeP[0] < -180) {
            degreeP[0] -= 360;
        }
    }
    var bezeirYPoint = [
        [yAxis[0], yAxis[0]],
        [yAxis[0], yAxis[0]],
        [yAxis[1], yAxis[1]],
        [yAxis[1], yAxis[1]],
    ]
    for (var i = 0; i < for_i; i++) {
        var percentage = i / for_i;
        var point = bezier(percentage, points);
        posSet.push([point[0] + origin[0][0], bezier(percentage, bezeirYPoint)[0], point[1] + origin[0][1]]);
        if (degreeP && degreeV) {
            degreeSet.push([degreeP[0], degreeV[0]]);
            degreeP[0] += degreeP_i;
            degreeV[0] += degreeV_i;
        }
    }
    return degreeSet.length === 0 ? posSet : [posSet, degreeSet];
}
function toIntPos(arr) {
    var array = [].concat(arr);
    for (var i = 0; i < array.length; i++) {
        array[i][0] = Math.round(array[i][0]);
        array[i][1] = Math.round(array[i][1]);
        array[i][2] = Math.round(array[i][2]);
    }
    return array;
}
function rmDuplicatePos(arr) {
    var array = [].concat(arr);
    for (var i = 0; i < array.length; i++) {
        if (i !== array.length - 1)
            for (var r = i + 1; r < array.length; r++) {
                if (array[i][0] === array[r][0] && array[i][1] === array[r][1] && array[i][2] === array[r][2]) {
                    array.splice(r, 1);
                    r--;
                }
            }
    }
    return array;
}
// function parseSpeed(speed) {
//     if (speed) {
//         var intSpeed = parseInt(speed);
//         if (isNaN(intSpeed)) {
//             return null;
//         }
//         if (intSpeed < 0 || intSpeed > 1000) {
//             return null;
//         }
//         return intSpeed;
//     } else {
//         return null;
//     }
// }
function getFilePath(parsed) {
    var path = parsed.opt.p || parsed.opt["-path"] || "./public/";
    if (path[path.length - 1] !== "/" && path[path.length - 1] !== "\\") path += "/";
    var file = parsed.body[0];
    return [file, path];
}
function getSuffix(filename) {
    return filename.slice(filename.lastIndexOf("."));
}
function gaussBlur(imgData) {
    var pixes = imgData.data;
    var width = imgData.width;
    var height = imgData.height;
    var gaussMatrix = [],
        gaussSum = 0,
        x, y,
        r, g, b, a,
        i, j, k, len;

    var radius = imgData.radius;
    var sigma = imgData.sigma;

    a = 1 / (Math.sqrt(2 * Math.PI) * sigma);
    b = -1 / (2 * sigma * sigma);
    for (i = 0, x = -radius; x <= radius; x++, i++) {
        g = a * Math.exp(b * x * x);
        gaussMatrix[i] = g;
        gaussSum += g;

    }
    for (i = 0, len = gaussMatrix.length; i < len; i++) {
        gaussMatrix[i] /= gaussSum;
    }
    for (y = 0; y < height; y++) {
        for (x = 0; x < width; x++) {
            r = g = b = a = 0;
            gaussSum = 0;
            for (j = -radius; j <= radius; j++) {
                k = x + j;
                if (k >= 0 && k < width) {
                    i = (y * width + k) * 4;
                    r += pixes[i] * gaussMatrix[j + radius];
                    g += pixes[i + 1] * gaussMatrix[j + radius];
                    b += pixes[i + 2] * gaussMatrix[j + radius];
                    // a += pixes[i + 3] * gaussMatrix[j];
                    gaussSum += gaussMatrix[j + radius];
                }
            }
            i = (y * width + x) * 4;
            // console.log(gaussSum)
            pixes[i] = r / gaussSum;
            pixes[i + 1] = g / gaussSum;
            pixes[i + 2] = b / gaussSum;
            // pixes[i + 3] = a ;
        }
    }
    for (x = 0; x < width; x++) {
        for (y = 0; y < height; y++) {
            r = g = b = a = 0;
            gaussSum = 0;
            for (j = -radius; j <= radius; j++) {
                k = y + j;
                if (k >= 0 && k < height) {
                    i = (k * width + x) * 4;
                    r += pixes[i] * gaussMatrix[j + radius];
                    g += pixes[i + 1] * gaussMatrix[j + radius];
                    b += pixes[i + 2] * gaussMatrix[j + radius];
                    // a += pixes[i + 3] * gaussMatrix[j];
                    gaussSum += gaussMatrix[j + radius];
                }
            }
            i = (y * width + x) * 4;
            pixes[i] = r / gaussSum;
            pixes[i + 1] = g / gaussSum;
            pixes[i + 2] = b / gaussSum;
        }
    }
    //end
    return imgData;
}
function getCmdPos(str) {
    var pos = [];
    var data = "";
    str = str.slice(str.indexOf(" ") + 1);
    for (var i = 0; i < str.length; i++) {
        if (str[i] === " ") continue;
        if (str[i] === "~") {
            if (i++ === str.length) {
                pos.push(0);
                break;
            }
            if (str[i] !== "-" && isNaN(parseFloat(str[i]))) {
                i--;
                pos.push(0);
                continue;
            }
            var num = "";
            while (i < str.length) {
                if (i + 1 === str.length) break;
                if (str[i] === "." || str[i] === "-") {
                    num += str[i];
                } else {
                    var _num = parseInt(str[i]);
                    if (isNaN(_num)) {
                        i--;
                        break;
                    }
                    num += _num;
                }
                i++;
            }
            pos.push(parseFloat(num) || 0);
        } else {
            var nextSpace = str.indexOf(" ", i + 1);
            if (nextSpace === -1) {
                data = str.slice(i);
                break;
            }
            var num = str.slice(i, nextSpace);
            if (!isNaN(parseFloat(num))) {
                pos.push(num);
            } else {
                data = str.slice(i);
                break;
            }
            i = nextSpace;
        }
    }
    return { pos, data }
}
class math {
    static twoPointSpacing(p1, p2) {
        return Math.sqrt((p2[0] - p1[0]) ** 2 + (p2[1] - p1[1]) ** 2 + (p2[2] - p1[2]) ** 2);
    }
    static vectorML(vec) {
        return Math.sqrt(vec[0] ** 2 + vec[1] ** 2 + vec[2] ** 2);
    }
    static ellipse(a, b, deg) {
        var rad = this.toRad(deg);
        return [
            a * Math.cos(rad),
            b * Math.sin(rad)
        ];
    }
    static ellipsePerimeter(a, b) {
        return 2 * Math.PI * b + 4 * (a - b);
    }
    static toRad(deg) {
        return deg / 180 * Math.PI;
    }
}
function commandRunner(socket, origin, isPluginEmit) {
    var parsed = origin instanceof Object ? origin : parseCmd(origin);
    var cmdv = socket.cmdv;
    if (visitor) {
        //Visitor Mode
        // return;
        socket.tellraw("§7Sorry, but the guest mode does not support this function");
        if (parsed.header !== "help") return;
    } else if (!verified) {
        return;
    }
    switch (parsed.header.toLowerCase()) {
        case "task":
            //pause func
            var debug = parsed.opt['-debug'] || parsed.opt.debug || parsed.opt.d;
            if (debug) {
                if (debug === "timer") {
                    socket.tellraw("New task: §2Counter");
                    var tk = new task(socket, "Counter", function () {
                        if (!this.pause) {
                            this.cumulative++;
                            if (this.cumulative > this.ctime * 4) {
                                gameTaskSys.removeTask(this);
                                socket.tellraw("§7Task 'Counter' complete.");
                            }
                            this.display.content[0] = this.defFirstDisplay() + " " + this.cumulative / 4 + "s / " + this.ctime + "s";
                            this.display.content[1] = drawProgress(this.len, this.cumulative / 4 / this.ctime);
                        } else {
                            this.display.content[1] = drawProgress(this.len, this.cumulative / 4 / this.ctime, "6");
                        }
                    });
                    tk.circleInterval[0] = 4;
                    tk.ctime = parseInt(parsed.opt.time || parsed.opt['-time'] || parsed.opt.t) || 30;
                    tk.len = parseInt(parsed.opt.len || parsed.opt['-len'] || parsed.opt.l) || 50;
                    tk.cumulative = 0;
                } else if (debug === "display") {
                    socket.tellraw("New task: §aDisplay");
                    var tk = new task(socket, "Display");
                    tk.display.content[1] = parsed.opt.content;
                }
                return;
            } else if (parsed.opt.h || parsed.opt["-help"] || parsed.body[0] === "help") {
                socket.tellraw("§a" + lang("game", "task", "help", "title"));
                socket.tellraw("task break [TaskID] §7" + lang("game", "task", "help", "break"));
                socket.tellraw("task bkall          §7" + lang("game", "task", "help", "bkall"));
                socket.tellraw("task pause [TaskID] §7" + lang("game", "task", "help", "pause"));
                socket.tellraw("task display        §7" + lang("game", "task", "help", "display"));
                socket.tellraw("task dazzle         §7???");
                socket.tellraw("§d--| " + lang("game", "task", "help", "option") + " |--");
                socket.tellraw("§e -debug=timer/display §7" + lang("game", "task", "help", "-debug"));
                socket.tellraw("§7e.g. task break 1");
                socket.tellraw("§7e.g. task pause 1");
                socket.tellraw("§7e.g. task --debug=timer --time=20 --len=60");
                socket.tellraw("§7§l" + lang("game", "task", "help", "tip"));
                return;
            }
            switch (parsed.body[0]) {
                case "display":
                    if (socket.taskDisplay === 1) {
                        var tk = new task(socket);
                        tk.keep = true;
                        tk.circleInterval[0] = 10;
                        socket.taskAlways = tk;
                        socket.taskAlways.display.enable = false;
                    } else if (socket.taskDisplay === 2) {
                        gameTaskSys.removeTask(socket.taskAlways);
                    }
                    if (++socket.taskDisplay > 2) socket.taskDisplay = 0;
                    socket.tellraw(`[§bSuccess§f] ${lang("game", "task", "display", "show")}: ${"§a" + lang("game", "task", "display", "mode", String(socket.taskDisplay))}`);
                    break;
                case "break":
                    var success = gameTaskSys.removeTaskById(parsed.body[1]);
                    if (success) {
                        socket.tellraw("[§bSuccess§f] " + lang("game", "task", "break", "success") + ": " + parsed.body[1]);
                    } else {
                        socket.tellraw("[§6Error§f] " + lang("game", "task", "break", "fail") + ": " + parsed.body[1]);
                    }
                    break;
                case "bkall":
                    var ids = [];
                    var tks = gameTaskSys.task;
                    var keep = false;
                    while (tks.length > 0) {
                        var tk = tks[tks.length - 1];
                        if (tk.keep) keep = true;
                        ids.push(tk.id);
                        gameTaskSys.removeTask(tk);
                    }
                    if (keep) {
                        var tk = new task(socket);
                        tk.keep = true;
                        socket.taskAlways = tk;
                        socket.taskAlways.display.enable = false;
                    }
                    socket.tellraw("[§bSuccess§f] " + lang("game", "task", "bkall", "success") + ": " + ids.join(", "));
                    break;
                case "pause":
                    var success = gameTaskSys.getTaskById(parsed.body[1]);
                    if (success) {
                        success.pause = !success.pause;
                        if (!success.pause && success.resume instanceof Function) success.resume.call(success);
                        socket.tellraw("[§bSuccess§f] Task " + parsed.body[1] + " state switch: " + (success.pause ? lang("game", "task", "pause", "state", "0") : lang("game", "task", "pause", "state", "1")));
                    } else {
                        socket.tellraw("[§6Error§f] " + lang("game", "task", "pause", "fail") + ": " + parsed.body[1]);
                    }
                    break;
                case "dazzle":
                    cmdv.task.dazzle = !cmdv.task.dazzle;
                    if (cmdv.task.dazzle) {
                        socket.logo = new textColorScroll(socket.logo);
                        socket.tellraw("[§bTask§f] " + lang("game", "task", "dazzle", "on"));
                    } else {
                        socket.logo = `RSv${version}`;
                        socket.tellraw("[§bTask§f] " + lang("game", "task", "dazzle", "off"));
                    }
                    break;
                default:
                    socket.tellraw("§6" + lang("game", "task", "invalid option"));
                    break;
            }
            break;
        case "exec":
            if (parsed.opt.h || parsed.opt["-help"] || parsed.body[0] === "help") {
                socket.tellraw("§a" + lang("game", "exec", "help", "title"));
                socket.tellraw("exec  [Command]    §7" + lang("game", "exec", "help", "exec"));
                socket.tellraw("§d--| " + lang("game", "exec", "help", "option") + " |--");
                socket.tellraw("§e  -n    " + lang("game", "exec", "help", "-n"));
                socket.tellraw("§7e.g. exec give @s apple");
                return;
            }
            var cmd = parsed.body.join(" ");
            socket.exec(cmd, parsed.opt.n ? undefined : function (json) {
                socket.exec("say " + json.body.statusMessage || json.body.value);
            });
            break;
        case "__eval__":
            var js = parsed.original.slice(8, Infinity);
            eval(js);
            break;
        case "time":
            socket.tellraw("[§eTime§f] " + new Date().toLocaleString());
            break;
        case "pos":
            if (parsed.body[0] === "help" || parsed.opt.h || parsed.opt["-help"]) {
                socket.tellraw("§a" + lang("game", "pos", "help", "title"));
                socket.tellraw("pos help     §7" + lang("game", "pos", "help", "help"));
                socket.tellraw("pos follow   §7" + lang("game", "pos", "help", "follow"));
                socket.tellraw("pos add      §7" + lang("game", "pos", "help", "add"));
                socket.tellraw("pos set [ID] [x] [y] [z]  §7" + lang("game", "pos", "help", "set"));
                socket.tellraw("pos tp [ID]  §7" + lang("game", "pos", "help", "tp"));
                socket.tellraw("pos rm [ID]  §7" + lang("game", "pos", "help", "rm"));
                socket.tellraw("pos rmall    §7" + lang("game", "pos", "help", "rmall"));
                socket.tellraw("pos list     §7" + lang("game", "pos", "help", "list"));
                socket.tellraw("pos preview point     §7" + lang("game", "pos", "help", "point"));
                socket.tellraw("pos preview line      §7" + lang("game", "pos", "help", "line"));
                socket.tellraw("pos save [PosName]  §7" + lang("game", "pos", "help", "save"));
                socket.tellraw("pos load [PosName]  §7" + lang("game", "pos", "help", "load"));
                socket.tellraw("pos delall   §7" + lang("game", "pos", "help", "delall"));
                socket.tellraw("§d--| " + lang("game", "pos", "help", "option") + " |--");
                socket.tellraw("§e  -h --help                 §7" + lang("game", "pos", "help", "-h"));
                socket.tellraw("§e  -p=Particle --particle    §7" + lang("game", "pos", "help", "-p"));
                socket.tellraw("§7e.g. pos follow");
                socket.tellraw("§7e.g. pos set 0 100 100 100");
                socket.tellraw("§7e.g. pos preview line -p=minecraft:villager_happy");
                return;
            }
            switch (parsed.body[0]) {
                case "save":
                    if (cmdv.pos.position.length > 0) {
                        try {
                            var coordinates = JSON.parse(fs.readFileSync(socket.getStsticPath() + "/coordinates.json", "utf8"));
                        } catch (err) {
                            if (err) {
                                var coordinates = {};
                            }
                        }
                        var name = parsed.body[1] || new Date().toLocaleDateString().replace(/\//g, "-") + "_" + random(10000, 99999);
                        coordinates[name] = cmdv.pos.position;
                        console.log(socket.getStsticPath());
                        fs.writeFileSync(socket.getStsticPath() + "/coordinates.json", JSON.stringify(coordinates));
                        socket.tellraw("[§bSuccess§f] File " + name + " saved.");
                    } else {
                        socket.tellraw("[§6Error§f]" + lang("game", "pos", "save", "fail"));
                    }
                    break;
                case "load":
                    var name = parsed.body[1];
                    if (name) {
                        try {
                            var coordinates = JSON.parse(fs.readFileSync(socket.getStsticPath() + "/coordinates.json", "utf8"));
                        } catch (err) {
                            if (err) {
                                var coordinates = {};
                            }
                        }
                        if (coordinates[name]) {
                            cmdv.pos.position = coordinates[name];
                            socket.tellraw("[§bSuccess§f] " + coordinates[name].length + " " + lang("game", "pos", "load", "loaded"));
                        } else {
                            socket.tellraw("[§6Error§f] " + lang("game", "pos", "load", "fail") + ": " + name);
                        }
                    } else {
                        socket.tellraw("[§6Error§f] " + lang("game", "pos", "load", "parameter error"));
                    }
                    break;
                case "delall":
                    try {
                        fs.rmSync(socket.getStsticPath() + "/coordinates.json");
                    } catch (err) {
                        //
                    }
                    socket.tellraw("[§bSuccess§f] " + lang("game", "pos", "delall"));
                    break;
                case "follow":
                    if (socket.apiVersion === "2") {
                        socket.tellraw("[§6Error§f] " + lang("game", "pos", "follow", "not support"));
                        return;
                    }
                    cmdv.pos.follow = !cmdv.pos.follow;
                    socket.tellraw(lang("game", "pos", "follow", "stateT") + ": " + (cmdv.pos.follow ? "§2" + lang("game", "pos", "follow", "state", "on") : "§6off" + lang("game", "pos", "follow", "state", "off")));
                    if (cmdv.pos.follow) {
                        socket.subscribe("ItemUsed");
                        socket.tellraw("§7" + lang("game", "pos", "follow", "tip"));
                        cmdv.pos.listen = new eventListen(socket, "ItemUsed", function (json) {
                            if (json.body.item.id === "arrow") {
                                setTimeout(() => {
                                    socket.exec("kill @e[c=1,r=30,type=arrow]");
                                }, 200);
                                // console.log("Event emitted.");
                                //...
                                if (cmdv.pos.position.length < config.maxPosEach) {
                                    getPos(socket, function (json) {
                                        socket.tellraw(`[§bSuccess§f] Pos: ${json.x.toFixed(2)}, ${json.y.toFixed(2)}, ${json.z.toFixed(2)} \nPosition.${cmdv.pos.position.length} saved`);
                                        cmdv.pos.position.push(json);
                                    });
                                } else {
                                    socket.tellraw("[§6Error§f] " + lang("game", "pos", "follow", "upper limit") + " " + config.maxPosEach);
                                }
                            }
                        });
                        socket.evs.push(cmdv.pos.listen);
                    } else {
                        cmdv.pos.listen.remove();
                        cmdv.pos.listen = null;
                        socket.unsubscribe("ItemUsed");
                    }
                    break;
                case "add":
                    if (socket.cmdv.pos.position.length < config.maxPosEach) {
                        getPos(socket, function (json) {
                            socket.tellraw(`[§bSuccess§f] Pos: ${Math.floor(json.x)}, ${Math.floor(json.y)}, ${Math.floor(json.z)} \nPosition.${socket.cmdv.pos.position.length} added`);
                            socket.cmdv.pos.position.push(json);
                        });
                    } else {
                        socket.tellraw("[§6Error§f] " + lang("game", "pos", "add") + " " + config.maxPosEach);
                    }
                    break;
                case "set":
                    var index = parseInt(parsed.body[1]);
                    var x = parseFloat(parsed.body[2]);
                    var y = parseFloat(parsed.body[3]);
                    var z = parseFloat(parsed.body[4]);
                    if (isNaN(index)) {
                        getPos(socket, function (json) {
                            socket.tellraw("[§aPos§f] Pos.0 " + lang("game", "pos", "set", "overwrite"));
                            socket.tellraw("[§aPos§f] Pos.0 ==> §b" + Math.floor(json.x) + ", " + Math.floor(json.y) + ", " + Math.floor(json.z));
                            cmdv.pos.position[0] = json;
                        });
                        return;
                    } else if (isNaN(x) && isNaN(y) && isNaN(z) && !isNaN(index)) {
                        getPos(socket, function (json) {
                            socket.tellraw("[§aPos§f] Pos." + index + " " + lang("game", "pos", "set", "overwrite"));
                            socket.tellraw("[§aPos§f] Pos." + index + " ==> §b" + Math.floor(json.x) + ", " + Math.floor(json.y) + ", " + Math.floor(json.z));
                            if (cmdv.pos.position[index]) cmdv.pos.position[index] = json;
                        });
                        return;
                    }

                    if (socket.cmdv.pos.position[index]) {
                        if (!isNaN(x) && !isNaN(y) && !isNaN(z)) {
                            cmdv.pos.position[index].x = x;
                            cmdv.pos.position[index].y = y;
                            cmdv.pos.position[index].z = z;
                            socket.tellraw("[§bPos§f] " + lang("game", "pos", "set", "changed"));
                            socket.tellraw("[§bPos§f] Pos." + index + " ==> §b" + x + ", " + y + ", " + z);
                        } else {
                            socket.tellraw("[§6Error§f] " + lang("game", "pos", "set", "invalid"));
                        }
                    } else {
                        socket.tellraw("[§6Error§f] " + lang("game", "pos", "set", "not found") + ":" + parsed.body[1] + " (pos)");
                    }
                    break;
                case "rm":
                    var index = parseInt(parsed.body[1]);
                    if ((!isNaN(index)) && index < cmdv.pos.position.length) {
                        cmdv.pos.position.splice(index, 1);
                        socket.tellraw("[§bSuccess§f] " + lang("game", "pos", "rm", "deleted") + ": " + index);
                    } else {
                        socket.cmdv.pos.position.pop();
                        socket.tellraw("[§bSuccess§f] " + lang("game", "pos", "rm", "deleted last"));
                    }
                    break;
                case "rmall":
                    socket.cmdv.pos.position = [];
                    socket.tellraw("[§bSuccess§f] " + lang("game", "pos", "rmall"));
                    break;
                case "list":
                    socket.tellraw("§e" + lang("game", "pos", "list") + ":");
                    socket.tellraw(`§7PosID   PosInfo`);
                    for (var i = 0; i < socket.cmdv.pos.position.length; i++) {
                        socket.tellraw(`Pos.${i} >> §6${socket.cmdv.pos.position[i].x.toFixed(2)}, ${socket.cmdv.pos.position[i].y.toFixed(2)}, ${socket.cmdv.pos.position[i].z.toFixed(2)} §3(FX: ${socket.cmdv.pos.position[i].minecraft_planeDegree.toFixed(2)}°)`);
                    }
                    break;
                case "preview":
                    var particle = parsed.opt.p || parsed.opt['-particle'] || "minecraft:villager_happy";
                    var poslist = cmdv.pos;
                    if (cmdv.pos.position.length === 0) {
                        socket.tellraw("[§6Error§f] " + lang("game", "pos", "incorrect quantity"));
                        return;
                    }
                    socket.tellraw("[§aPos§f] " + lang("game", "pos", "particle") + ": §g" + particle);
                    if (parsed.body[1] === "point") {
                        var tk = new task(socket, "Pos Preview: §ePoint");
                        tk.circleInterval[0] = 4;
                        tk.resume = __for__;
                        __for__();
                        function __for__() {
                            for (var i = 0; i < poslist.position.length; i++) {
                                var pos = poslist.position[i];
                                socket.exec(`particle ${particle} ${pos.x} ${pos.y} ${pos.z}`);
                            }
                            if (!tk.pause && tk.alive) setTimeout(__for__, 1500);
                        }
                    } else if (parsed.body[1] === "line") {
                        if (poslist.position.length === 1) {
                            socket.tellraw("[§6Error§f] " + lang("game", "pos", "coor error"));
                            gameTaskSys.removeTask(tk);
                            return;
                        }
                        var tk = new task(socket, "Pos Preview: §bline");
                        tk.circleInterval[0] = 4;
                        tk.resume = __for__2;
                        __for__2();
                        function __for__2() {
                            for (var r = 1; r < poslist.position.length; r++) {
                                var last = poslist.position[r - 1];
                                var pos = poslist.position[r];
                                var vector = [pos.x - last.x, pos.y - last.y, pos.z - last.z];
                                var len = math.vectorML(vector);
                                var unitVector = [vector[0] / len, vector[1] / len, vector[2] / len];
                                let spacing;
                                // tk.display.content[1] = `Target: §e${parseInt(pos.x)}, ${parseInt(pos.y)}, ${parseInt(pos.z)}§f Distance: §a${len.toFixed(2)}§2m§f`;
                                for (var i = 0; i < 30; i += .5) {
                                    let x = last.x + unitVector[0] * i,
                                        y = last.y + unitVector[1] * i,
                                        z = last.z + unitVector[2] * i;
                                    var _spacing = math.twoPointSpacing([x, y, z], [pos.x, pos.y, pos.z]);
                                    if (spacing && _spacing > spacing) {
                                        break;
                                    }
                                    spacing = _spacing;
                                    setTimeout(() => {
                                        socket.exec(`particle ${particle} ${x} ${y} ${z}`);
                                    }, r * i * 10);
                                }
                            }
                            if (tk.alive && !tk.pause) setTimeout(__for__2, 3000);
                        }

                    } else {
                        socket.tellraw("[§6Error§f] " + lang("game", "pos", "invalid option"));
                    }
                    break;
                case "tp":
                    var index = parseInt(parsed.body[1]) || 0;
                    socket.tellraw(`[§aPos§f] §7${lang("game", "pos", "tp", "to")}: Pos.${index}`);
                    var pos = cmdv.pos.position[index];
                    if (!pos) {
                        socket.tellraw(`[§6Error§f] Pos.${index} ${lang("game", "pos", "tp", "error", "exist")}`);
                        return;
                    }
                    socket.exec(`tp ${pos.x} ${pos.y} ${pos.z} ${pos.minecraft_planeDegree} ${pos.minecraft_verticalDegree}`);
                    socket.tellraw(`[§aPos§f] ${lang("game", "pos", "tp", "teleported")} §ePos.${index}`);
                    break;
                default:
                    socket.tellraw("§6" + lang("game", "pos", "invalid option"));
                    break;
            }
            break;
        case "replay":
            if (parsed.body[0] === "help" || parsed.opt.h || parsed.opt["-help"]) {
                socket.tellraw("§a" + lang("game", "replay", "help", "title"));
                socket.tellraw("replay help    §7" + lang("game", "replay", "help", "help"));
                socket.tellraw("replay         §7" + lang("game", "replay", "help", "replay"));
                socket.tellraw("§d--| " + lang("game", "replay", "help", "option") + " |--");
                socket.tellraw("  -h --help               §7" + lang("game", "replay", "help", "-h"));
                socket.tellraw("  -s=SPEED    --speed     §7" + lang("game", "replay", "help", "-s"));
                socket.tellraw("  -a=ACCURACY --accuracy  §7" + lang("game", "replay", "help", "-a"));
                socket.tellraw("  -n          --notask    §7" + lang("game", "replay", "help", "-n"));
                socket.tellraw("  -c          --curve     §7" + lang("game", "replay", "help", "-c"));
                socket.tellraw("§7e.g. replay -s=20 -a=10");
            } else {
                if (cmdv.pos.position.length > 1) {
                    var speed = parseInt(parsed.opt["-speed"]) || parseInt(parsed.opt.s) || 20;//to ms: 1000/this
                    var accuracy = parseInt(parsed.opt["-accuracy"]) || parseInt(parsed.opt.a) || 10;
                    if (speed > 500) speed = 500;
                    if (accuracy > 200) accuracy = 200;
                    var curve = parsed.opt.c || parsed.opt["-curve"] || false;
                    var posarr = cmdv.pos.position;
                    socket.tellraw(`[Replay] Speed: ${parseInt(parsed.opt["-speed"]) || parseInt(parsed.opt.s) ? speed + "cmd/s" : "20cmd/s(default)"}`);
                    socket.tellraw(`[Replay] accuracy: ${parseInt(parsed.opt["-accuracy"]) || parseInt(parsed.opt.a) ? accuracy + "cmd/b" : "10cmd/b(default)"}`);
                    socket.tellraw("[Replay] §gLoading paths...");
                    echoOff(socket, function (enable) {
                        if (curve) {
                            if (posarr.length < 4) {
                                socket.tellraw("[§6Error§f] " + lang("game", "replay", "coor error"));
                                return;
                            }
                            var points = [
                                [posarr[0].x, posarr[0].z],
                                [posarr[1].x, posarr[1].z],
                                [posarr[2].x, posarr[2].z],
                                [posarr[3].x, posarr[3].z]
                            ]
                            var pointSet = drawBezier(points, [posarr[0].y, posarr[3].y], accuracy, [posarr[0].minecraft_planeDegree, posarr[3].minecraft_planeDegree], [posarr[0].minecraft_verticalDegree, posarr[3].minecraft_verticalDegree]);
                            var degreeSet = pointSet[1];
                            pointSet = pointSet[0];
                            //...
                        } else {
                            var pointSet = multiPointReplay(cmdv.pos.position, accuracy);
                        }
                        var originLen = pointSet.length;
                        var taskEnable = !(parsed.opt.n || parsed.opt["-notask"]);
                        if (taskEnable) {
                            var tk = new task(socket, "Replay", function () {
                                this.display.content[1] = drawProgress(50, pointSet.length / originLen, this.pause ? "6" : undefined);
                            });
                            tk.circleInterval[0] = 5;
                            tk.resume = __for__;
                        }
                        function __for__() {
                            if (pointSet.length === 0) {
                                if (taskEnable) {
                                    gameTaskSys.removeTask(tk);
                                    socket.tellraw("[§bFinished§f] " + lang("game", "replay", "complete"));
                                }
                                if (enable) socket.exec("gamerule sendcommandfeedback true");
                            } else if (!taskEnable || (tk.alive && !tk.pause)) {
                                var pos = pointSet.shift();
                                if (curve) var degree = degreeSet.shift();
                                socket.exec(`tp ${pos[0]} ${pos[1]} ${pos[2]} ${curve ? degree[0] : pos[3]} ${curve ? degree[1] : pos[4]}`);
                                setTimeout(() => {
                                    __for__();
                                }, 1000 / speed);
                            }
                        }
                        __for__();
                    });

                }
                else {
                    socket.tellraw("[§6Error§f] " + lang("game", "replay", "coor error 2"));
                }
            }

            break;
        case "lineto":
            if (parsed.body[0] === "help" || parsed.opt.h || parsed.opt["-help"]) {
                socket.tellraw("§a" + lang("game", "lineto", "help", "title"));
                socket.tellraw("lineto help    §7" + lang("game", "lineto", "help", "help"));
                socket.tellraw("lineto         §7" + lang("game", "lineto", "help", "lineto"));
                socket.tellraw("§d--| " + lang("game", "lineto", "help", "option") + " |--");
                socket.tellraw("  -b=BLOCK   --block   §7" + lang("game", "lineto", "help", "-b"));
                socket.tellraw("  -d=DATA    --data    §7" + lang("game", "lineto", "help", "-d"));
                socket.tellraw("  -c         --curve   §7" + lang("game", "lineto", "help", "-c"));
                socket.tellraw("  -r         --rugged  §7" + lang("game", "lineto", "help", "-r"));
                socket.tellraw("§7e.g. lineto -b=grass -d=0 -c");
            } else {
                var block = parsed.opt.b || parsed.opt["-block"] || "stone";
                var data = parsed.opt.d || parsed.opt["-data"] || 0;
                socket.tellraw(`[§bLineto§f] Block: ${block}${parsed.opt.b || parsed.opt["-block"] ? "" : "(default)"}`);
                socket.tellraw(`[§bLineto§f] Data: ${data}`);
                var curve = parsed.opt.c || parsed.opt["-curve"] || false;
                var rugged = parsed.opt.r || parsed.opt["-rugged"] || false;
                var posarr = cmdv.pos.position;
                if (curve) {
                    if (posarr.length < 4) {
                        socket.tellraw("[§6Error§f] " + lang("game", "lineto", "curve coor error"));
                    } else {
                        var points = [
                            [posarr[0].x, posarr[0].z],
                            [posarr[1].x, posarr[1].z],
                            [posarr[2].x, posarr[2].z],
                            [posarr[3].x, posarr[3].z]
                        ]
                        var pointSet = drawBezier(points, [posarr[0].y, posarr[3].y], 1);
                        generate(pointSet)
                    }
                } else if (rugged) {
                    if (posarr.length < 2) {
                        socket.tellraw("[§6Error§f] " + lang("game", "lineto", "rugged coor error"));
                    } else {
                        var pointSet = linearLine(posarr);
                        generate(pointSet);
                    }
                } else {
                    if (posarr.length < 2) {
                        socket.tellraw("[§6Error§f] " + lang("game", "lineto", "lineto coor error"));
                    } else {
                        var pointSet = multiPointReplay(posarr, 1);
                        generate(pointSet);
                    }
                }
                function generate(pointSet) {
                    pointSet = rmDuplicatePos(toIntPos(pointSet));
                    var i = 0;
                    var tk = new task(socket, "Lineto", function () {
                        this.display.content[1] = drawProgress(60, i / pointSet.length, this.pause ? "6" : undefined);
                    });
                    tk.circleInterval[0] = 4;
                    tk.resume = __for__;
                    __for__();
                    function __for__() {
                        socket.exec(`setblock ${pointSet[i][0]} ${pointSet[i][1]} ${pointSet[i][2]} ${block} ${data}`);
                        i++;
                        if (!tk.pause && i + 1 < pointSet.length) {
                            setTimeout(() => {
                                __for__();
                            }, 50);
                        } else {
                            socket.tellraw("[§bLineto§f] " + lang("game", "lineto", "complete"));
                            gameTaskSys.removeTask(tk);
                        }
                    }
                }
            }
            break;
        case "mid":
            if (parsed.body[0] === "help" || parsed.opt.h || parsed.opt["-help"]) {
                socket.tellraw("§a" + lang("game", "mid", "help", "title"));
                socket.tellraw("mid help          §7" + lang("game", "mid", "help", "help"));
                socket.tellraw("mid [File Name]   §7" + lang("game", "mid", "help", "midi"));
                socket.tellraw("mid path [FileID] §7" + lang("game", "mid", "help", "path"));
                socket.tellraw("§d--| " + lang("game", "mid", "help", "option") + " |--");
                socket.tellraw("§e  -p=PATH    --path   §7" + lang("game", "mid", "help", "-p"));
                socket.tellraw("§e  -t=TRACK   --track  §7" + lang("game", "mid", "help", "-t"));
                socket.tellraw("§7e.g. mid music.mid");
                socket.tellraw("§7e.g. mid path 0");
                socket.tellraw("§7e.g. mid music.mid -p=/home/ubuntu/");
                socket.tellraw("§b" + lang("game", "mid", "help", "note"));
            } else {
                if (parsed.body[0] === "path") {
                    var pobj = cmdv.path;
                    if (!pobj.dir || !pobj.files) {
                        socket.tellraw(`[§6Error§f] ${lang("game", "path", "error", "init")}`);
                        return;
                    }
                    var pathid = parseInt(parsed.body[1]);
                    if (isNaN(pathid)) {
                        socket.tellraw(`[§6Error§f] Path ID '${parsed.body[1] || ""}' ${lang("game", "path", "error", "id")}`);
                        return;
                    }
                    socket.tellraw(`[§dPath§f] ${lang("game", "path", "loading")}: ${pathid}`);
                    var pathdir = cmdv.path.dir;
                    var pathfile = cmdv.path.files[pathid];
                    if (!pathdir || !pathfile) {
                        socket.tellraw("[§6Error§f] " + lang("game", "path", "error", "file"));
                        return;
                    }
                    socket.tellraw(`[§dPath§f] directory: §b${pathdir}§f, file: §b${pathfile}`);
                    parsed.opt.p = pathdir;
                    parsed.body[0] = pathfile;
                }
                var filepath = getFilePath(parsed);
                var file = filepath[0];
                var path = filepath[1];
                filepath = path + file;
                var track = parsed.opt.t || parsed.opt["-track"] || -1;
                track = parseInt(track);
                if (!file) {
                    socket.tellraw("[§6Error§f] " + lang("game", "mid", "no file"));
                    return;
                }
                try {
                    fs.readFileSync(filepath);
                } catch (err) {
                    if (err) {
                        socket.tellraw("[Error] " + lang("game", "mid", "not found"));
                        // process.emit("uncaughtException", err);
                        return;
                    }
                }
                try {
                    var data = getMidi(filepath);
                } catch (err) {
                    socket.tellraw("[Error] " + lang("game", "mid", "bad"));
                    // process.emit("uncaughtException", err);
                    return;
                }
                var tracks = data.tracks;
                socket.tellraw("[§bSuccess§f] " + lang("game", "mid", "loaded"));
                socket.tellraw(`[§eMidi§f] ${lang("game", "mid", "filename")}: ${file}`);
                socket.tellraw(`[§eMidi§f] ${lang("game", "mid", "copyright")}: ${data.musicData.copyright || "Unknown"}`);
                socket.tellraw(`[§eMidi§f] ${lang("game", "mid", "name")}: ${data.musicData.trackname || "Unknown"}`);
                socket.tellraw(`[§eMidi§f] ${lang("game", "mid", "track")}: ${data.midiData.trackCount || "Unknown"}`);
                socket.tellraw(`[§eMidi§f] ${lang("game", "mid", "time")}: ${parseInt(data.time / 1000 / 60)}m ${(data.time / 1000 % 60).toFixed(1)}s`);
                function getNoteOff(deviation, data, track) {
                    for (var i = deviation; i < tracks[track].length; i++) {
                        var dn = tracks[track][i];
                        if (!dn[0] && dn[1] === data[1] && dn[2] === data[2]) {
                            return dn;
                        }
                    }
                    return false;
                }
                track = track > tracks.length ? tracks.length : track;
                var tasks = [];
                //...
                for (let r = 0; r < (track === -1 ? tracks.length : track); r++) {
                    let tk = new task(socket, `Midi ${file} (T${r})`);
                    tasks.push(tk);
                    let i = 0;
                    tk.circleInterval[0] = 5;
                    tk.resume = playsound.bind(tk, r);
                    function playsound(track) {
                        var arr = tracks[track][i];
                        // console.log(arr);
                        tk.display.content[1] = `${(i / tracks[r].length * 100).toFixed(2)}% ${drawProgress(60, i / tracks[r].length)}`;
                        if (tk.pause) {
                            tk.display.content[1] = `${(i / tracks[r].length * 100).toFixed(2)}% ${drawProgress(60, i / tracks[r].length, "6")}`;
                            return;
                        }
                        if (i === tracks[r].length - 1) {
                            socket.tellraw("[§bMidi§f] " + lang("game", "mid", "complete"));
                            gameTaskSys.removeTask(tk);
                        }
                        if (!arr[0]) {
                            if (i + 1 < tracks[track].length) {
                                i++;
                                playsound(track, i + 1);
                            }
                        } else {
                            var opposite = getNoteOff(i + 1, arr, track);
                            // console.log(opposite)
                            var sleep = opposite ? opposite[4] : 0;
                            // if (opposite) {
                            // sleep = opposite[4];
                            switch (arr[2]) {
                                case 0:
                                case 1:
                                    var note = "bass";
                                    var pitch = 2 ** ((arr[1] - 6) / 12) * (arr[2] - (-1));
                                    break;
                                case 2:
                                    var note = "iron_xylophone";
                                    var pitch = 2 ** ((arr[1] - 6) / 12);
                                    break;
                                case 3:
                                    var note = "harp";
                                    var pitch = 2 ** ((arr[1] - 6) / 12);
                                    break;
                                case 4:
                                    var note = "pling";
                                    var pitch = 2 ** ((arr[1] - 6) / 12);
                                    break;
                                case 5:
                                    var note = "harp";
                                    var pitch = 2 ** ((arr[1] - 6) / 12) * 2;
                                    break;
                                case 6:
                                    var note = "pling";
                                    var pitch = 2 ** ((arr[1] - 6) / 12) * 2;
                                    break;
                                case 7:
                                    var note = "bell";
                                    var pitch = 2 ** ((arr[1] - 6) / 12);
                                    break;
                                case 8:
                                    var note = "bell";
                                    var pitch = 2 ** ((arr[1] - 6) / 12) * 2;
                                    break;
                                case 9:
                                    var note = "chime";
                                    var pitch = 2 ** ((arr[1] - 0) / 12) * 2;
                                    break;
                                default:
                                    var note = "harp";
                                    var pitch = 0;
                                    break;
                            }
                            // console.log(arr, i);
                            // console.log(`playsound note.${note} @a ~~~ ${arr[3] / 128} ${pitch}`);
                            if (arr[0] && arr[4]) {
                                setTimeout(() => {
                                    socket.execute('@a', `playsound note.${note} @s ~~~ ${arr[3] / 128} ${pitch}`);

                                }, arr[4]);
                            } else
                                socket.execute('@a', `playsound note.${note} @s ~~~ ${arr[3] / 128} ${pitch}`);
                            // }
                            if (i + 1 < tracks[track].length) {
                                i++;
                                setTimeout(() => {
                                    playsound(track);
                                }, sleep + arr[4]);
                            }
                        }
                    }
                    playsound(r);
                }
            }

            break;
        case "export":
            if (parsed.opt.h || parsed.opt["-help"] || parsed.body[0] === "help") {
                socket.tellraw("§a" + lang("game", "export", "help", "title"));
                socket.tellraw("export <filename>                 §7" + lang("game", "export", "help", "export"));
                socket.tellraw("export speed [Speed]              §7" + lang("game", "export", "help", "speed"));
                socket.tellraw("export [filename] [Pos.A] [Pos.B] §7" + lang("game", "export", "help", "export"));
                socket.tellraw("§d--| " + lang("game", "export", "help", "option") + " |--");
                // socket.tellraw("§e-s=SPEED --speed           §7" + lang("game", "export", "help", "-s"));
                socket.tellraw("§e-t=Type --type             §7" + lang("game", "export", "help", "-t"));
                socket.tellraw("§7§l§o" + lang("game", "export", "help", "tip"));
                socket.tellraw("§7e.g. export MyStructure");
                socket.tellraw("§7e.g. export MyStructure -t=rmst");
                socket.tellraw("§7e.g. export MyStructure 0 1");
                socket.tellraw("§7e.g. export speed 100");
                return;
            } else if (parsed.body[0] === undefined) {
                socket.tellraw("[§6Error§f] " + lang("game", "export", "parameter"));
                return;
            }
            if (parsed.body[0] === "speed") {
                var speed = parseInt(parsed.body[1]);
                if (isNaN(speed)) {
                    socket.tellraw("[§6Error§f] " + lang("game", "export", "speed", "invalid number"));
                } else if (speed < 0 || speed > 1000) {
                    socket.tellraw("[§6Error§f] " + lang("game", "export", "speed", "invalid range"));
                } else {
                    cmdv.export.speed = speed;
                    socket.tellraw("[§bSuccess§f] " + lang("game", "export", "speed", "success") + " §e" + speed + "§f block/s")
                }
                return;
            }
            socket.exec("list", function (check) {
                if (check.body.statusMessage.indexOf("在线") === -1) {
                    socket.tellraw("[§9Export§f] §6导出功能目前仅支持简体中文模式，请将菜单语言更换为简体中文");
                    socket.tellraw("[§9Export§f] §eThe export function currently only supports simplified Chinese mode. Please change the menu language to simplified Chinese");
                    return;
                } else {
                    var filename = parsed.body[0] || random(1000, 9999);
                    var isFileExist = true;
                    var type = parsed.opt.t || parsed.opt['-type'] || "rmst";
                    if (type !== "rmst" && type !== "bdx" && type !== "mcfunction") {
                        socket.tellraw("[§cError§f] " + lang("game", "export", "type error"));
                        return;
                    }
                    var path = "./public/" + filename + (filename.indexOf("." + type) === -1 ? "." + type : "");
                    try {
                        fs.statSync(path);
                    } catch (err) {
                        isFileExist = false;
                    }
                    if (isFileExist) {
                        socket.tellraw("[§cError§f] §6" + lang("game", "export", "name error"));
                        return;
                    }
                    socket.tellraw("[§9Export§f] File name: " + filename);
                    var p1_index = parseInt(parsed.body[1] ?? 0);
                    var p2_index = parseInt(parsed.body[2] ?? 1);
                    if (isNaN(p1_index) || isNaN(p2_index) || !cmdv.pos.position[p1_index] || !cmdv.pos.position[p2_index]) {
                        socket.tellraw("[§6Warn§f] " + lang("game", "export", "pos error"));
                        return;
                    }
                    var p1 = cmdv.pos.position[p1_index];
                    var p2 = cmdv.pos.position[p2_index];
                    p1 = [Math.floor(p1.x), Math.floor(p1.y), Math.floor(p1.z)];
                    p2 = [Math.floor(p2.x), Math.floor(p2.y), Math.floor(p2.z)];
                    // console.log(p1, p2);
                    socket.tellraw(`[§9Export§f] Pos.A ${p1.join(" ")}`);
                    socket.tellraw(`[§9Export§f] Pos.B ${p2.join(" ")}`);

                    var size = (Math.abs(p2[0] - p1[0]) + 1) * (Math.abs(p2[1] - p1[1]) + 1) * (Math.abs(p2[2] - p1[2]) + 1);
                    socket.tellraw("[§9Export§f] Estimated size: §e" + size + "§f blocks");
                    var export_process = 0;
                    // console.log("Size:", size);
                    var x_next = p2[0] < p1[0] ? -1 : 1;
                    var y_next = p2[1] < p1[1] ? -1 : 1;
                    var z_next = p2[2] < p1[2] ? -1 : 1;
                    // console.log("NEXTS", x_next, y_next, z_next);


                    var temp = uuidv4();
                    var tempPath = "./data/temp/" + temp;
                    var writer = fs.createWriteStream(tempPath);
                    var fileAuthor = parsed.opt.author || socket.GameName;
                    // var zlibs = zlib.createBrotliCompress();
                    // zlibs.pipe(writer);
                    switch (type) {
                        case "rmst":
                            var headerBuffer = Buffer.from("\x01\x00\x05RMST1");
                            var info = JSON.stringify({
                                "author": fileAuthor,
                                "date": Date.now()
                            });
                            var lengthbuf = Buffer.alloc(4);
                            lengthbuf.writeUInt32BE(info.length);
                            var infoBuffer = Buffer.concat([Buffer.from([0x02]), lengthbuf, Buffer.from(info)]);
                            writer.write(infoBuffer);
                            infoBuffer = null;
                            info = null;
                            break;
                        case "bdx":
                            var headerBuffer = Buffer.from("BD@");
                            writer.write(Buffer.from("BDX\x00" + fileAuthor + "\x00"));
                            break;
                        case "mcfunction":
                            writer.write("say Author: " + fileAuthor + "\n");
                            break;
                    }


                    var namespacePool = [];
                    var point = [0, 0, 0];
                    var tk = new task(socket, "Export");
                    tk.display.content[0] = tk.defFirstDisplay() + " " + path;
                    tk.display.content[1] = "Position: x, y, z";
                    tk.display.content[2] = "0% " + drawProgress(60, 0);
                    tk.circleInterval[0] = 10;
                    tk.onclose = function () {
                        try {
                            writer.close();
                            fs.unlinkSync(tempPath);
                        } catch (err) { }
                    }
                    // tk.resume = exportStructure;
                    exportStructure(...p1);
                    function exportStructure(x, y, z) {
                        tk.display.content[2] = (export_process / size * 100).toFixed(2) + "% " + drawProgress(60, export_process / size);
                        tk.display.content[1] = `Position: §3${x}, ${y}, ${z}§f  Speed: §a${cmdv.export.speed} §fb/s`;
                        var relative = [x - p1[0], y - p1[1], z - p1[2]];
                        export_process++;
                        // console.log("new turn", x, y, z);
                        socket.exec(`testforblock ${x} ${y} ${z} air 0`, function (json) {
                            // console.log(json.body.statusMessage)
                            if (json.body.statusMessage.indexOf("无法") !== -1) {
                                socket.tellraw("[§6Error§f] §7" + lang("game", "export", "block error") + " " + `${x}, ${y}, ${z} !`);
                                // socket.tellraw("[§6Error§f] §7Warn: the exported file will be incomplete !");
                            } else if (json.body.statusMessage[0] === "成") {
                                //air
                            } else if (json.body.statusMessage[0] === "位" && export_process !== size) {
                                var chsName = json.body.statusMessage.split(" ")[3];
                                var blockId = getBlockId(chsName);
                                function saveBlockData() {
                                    switch (type) {
                                        case "rmst":
                                            //x
                                            var x_after = relative[0] - point[0];
                                            if (x_after !== 0) {
                                                if (x_after === 1) {
                                                    writer.write(Buffer.from([0x05]));
                                                } else if (x_after === -1) {
                                                    writer.write(Buffer.from([0x06]));
                                                } else if (x_after >= -128 && x_after <= 127) {
                                                    var int8 = Buffer.alloc(1);
                                                    int8.writeInt8(x_after);
                                                    writer.write(Buffer.concat([Buffer.from([0x15]), int8]));
                                                } else if (x_after >= -32768 && x_after <= 32767) {
                                                    var int16 = Buffer.alloc(2);
                                                    int16.writeInt16BE(x_after);
                                                    writer.write(Buffer.concat([Buffer.from([0x0b]), int16]));
                                                } else {
                                                    var int32 = Buffer.alloc(4);
                                                    int32.writeInt32BE(x_after);
                                                    writer.write(Buffer.concat([Buffer.from([0x0e]), int32]));
                                                }
                                                point[0] = relative[0];
                                            }
                                            //y
                                            var y_after = relative[1] - point[1];
                                            if (y_after !== 0) {
                                                if (y_after === 1) {
                                                    writer.write(Buffer.from([0x07]));
                                                } else if (y_after === -1) {
                                                    writer.write(Buffer.from([0x08]));
                                                } else if (y_after >= -128 && y_after <= 127) {
                                                    var int8 = Buffer.alloc(1);
                                                    int8.writeInt8(y_after);
                                                    writer.write(Buffer.concat([Buffer.from([0x16]), int8]));
                                                } else if (y_after >= -32768 && y_after <= 32767) {
                                                    var int16 = Buffer.alloc(2);
                                                    int16.writeInt16BE(y_after);
                                                    writer.write(Buffer.concat([Buffer.from([0x0c]), int16]));
                                                } else {
                                                    var int32 = Buffer.alloc(4);
                                                    int32.writeInt32BE(y_after);
                                                    writer.write(Buffer.concat([Buffer.from([0x0f]), int32]));
                                                }
                                                point[1] = relative[1];
                                            }
                                            //z
                                            var z_after = relative[2] - point[2];
                                            if (z_after !== 0) {
                                                if (z_after === 1) {
                                                    writer.write(Buffer.from([0x09]));
                                                } else if (z_after === -1) {
                                                    writer.write(Buffer.from([0x0a]));
                                                } else if (z_after >= -128 && z_after <= 127) {
                                                    var int8 = Buffer.alloc(1);
                                                    int8.writeInt8(z_after);
                                                    writer.write(Buffer.concat([Buffer.from([0x17]), int8]));
                                                } else if (z_after >= -32768 && z_after <= 32767) {
                                                    var int16 = Buffer.alloc(2);
                                                    int16.writeInt16BE(z_after);
                                                    writer.write(Buffer.concat([Buffer.from([0x0d]), int16]));
                                                } else {
                                                    var int32 = Buffer.alloc(4);
                                                    int32.writeInt32BE(z_after);
                                                    writer.write(Buffer.concat([Buffer.from([0x10]), int32]));
                                                }
                                                point[2] = relative[2];
                                            }
                                            break;
                                        case "bdx":
                                            //x
                                            var x_after = relative[0] - point[0];
                                            if (x_after !== 0) {
                                                if (x_after === 1) {
                                                    writer.write(Buffer.from([0x0e]));
                                                } else if (x_after === -1) {
                                                    writer.write(Buffer.from([0x0f]));
                                                } else if (x_after >= -128 && x_after <= 127) {
                                                    var int8 = Buffer.alloc(1);
                                                    int8.writeInt8(x_after);
                                                    writer.write(Buffer.concat([Buffer.from([0x1c]), int8]));
                                                } else if (x_after >= -32768 && x_after <= 32767) {
                                                    var int16 = Buffer.alloc(2);
                                                    int16.writeInt16BE(x_after);
                                                    writer.write(Buffer.concat([Buffer.from([0x14]), int16]));
                                                } else {
                                                    var int32 = Buffer.alloc(4);
                                                    int32.writeInt32BE(x_after);
                                                    writer.write(Buffer.concat([Buffer.from([0x15]), int32]));
                                                }
                                                point[0] = relative[0];
                                            }
                                            //y
                                            var y_after = relative[1] - point[1];
                                            if (y_after !== 0) {
                                                if (y_after === 1) {
                                                    writer.write(Buffer.from([0x10]));
                                                } else if (y_after === -1) {
                                                    writer.write(Buffer.from([0x11]));
                                                } else if (y_after >= -128 && y_after <= 127) {
                                                    var int8 = Buffer.alloc(1);
                                                    int8.writeInt8(y_after);
                                                    writer.write(Buffer.concat([Buffer.from([0x1d]), int8]));
                                                } else if (y_after >= -32768 && y_after <= 32767) {
                                                    var int16 = Buffer.alloc(2);
                                                    int16.writeInt16BE(y_after);
                                                    writer.write(Buffer.concat([Buffer.from([0x16]), int16]));
                                                } else {
                                                    var int32 = Buffer.alloc(4);
                                                    int32.writeInt32BE(y_after);
                                                    writer.write(Buffer.concat([Buffer.from([0x17]), int32]));
                                                }
                                                point[1] = relative[1];
                                            }
                                            //z
                                            var z_after = relative[2] - point[2];
                                            if (z_after !== 0) {
                                                if (z_after === 1) {
                                                    writer.write(Buffer.from([0x12]));
                                                } else if (z_after === -1) {
                                                    writer.write(Buffer.from([0x13]));
                                                } else if (z_after >= -128 && z_after <= 127) {
                                                    var int8 = Buffer.alloc(1);
                                                    int8.writeInt8(z_after);
                                                    writer.write(Buffer.concat([Buffer.from([0x1e]), int8]));
                                                } else if (z_after >= -32768 && z_after <= 32767) {
                                                    var int16 = Buffer.alloc(2);
                                                    int16.writeInt16BE(z_after);
                                                    writer.write(Buffer.concat([Buffer.from([0x18]), int16]));
                                                } else {
                                                    var int32 = Buffer.alloc(4);
                                                    int32.writeInt32BE(z_after);
                                                    writer.write(Buffer.concat([Buffer.from([0x19]), int32]));
                                                }
                                                point[2] = relative[2];
                                            }
                                            break;
                                        case "mcfunction":
                                            var x_after = relative[0] - point[0];
                                            var y_after = relative[1] - point[1];
                                            var z_after = relative[2] - point[2];
                                            writer.write(`setblock ~${x_after} ~${y_after} ~${z_after} ${blockId[0]} ${blockId[1]}\n`);
                                            break;
                                    }

                                    var pool_index = namespacePool.indexOf(blockId[0]);
                                    if (pool_index === -1) {
                                        pool_index = namespacePool.length;
                                        namespacePool.push(blockId[0]);
                                        switch (type) {
                                            case "rmst":
                                                var blockIdLen = Buffer.alloc(1);
                                                blockIdLen.writeUInt8(blockId[0].length);
                                                writer.write(Buffer.concat([Buffer.from([0x03]), blockIdLen, Buffer.from(blockId[0])]));
                                                break;
                                            case "bdx":
                                                writer.write(Buffer.concat([Buffer.from([0x01]), Buffer.from(namespacePool[pool_index] + "\x00")]));
                                                break;
                                            case "mcfunction":
                                                break;
                                        }

                                    }

                                    switch (type) {
                                        case "rmst":
                                            if (blockId[1] !== 0) {
                                                if (pool_index <= 255) {
                                                    var index = Buffer.alloc(1);
                                                    index.writeUInt8(pool_index);
                                                    var data = Buffer.alloc(1);
                                                    data.writeUint8(blockId[1]);
                                                    writer.write(Buffer.concat([Buffer.from([0x12]), index, data]));
                                                } else if (pool_index <= 65535) {
                                                    var index = Buffer.alloc(2);
                                                    index.writeUInt16BE(pool_index);
                                                    var data = Buffer.alloc(1);
                                                    data.writeUint8(blockId[1]);
                                                    writer.write(Buffer.concat([Buffer.from([0x11]), index, data]));
                                                }
                                            } else {
                                                if (pool_index <= 255) {
                                                    var index = Buffer.alloc(1);
                                                    index.writeUInt8(pool_index);
                                                    writer.write(Buffer.concat([Buffer.from([0x14]), index]));
                                                } else if (pool_index <= 65535) {
                                                    var index = Buffer.alloc(2);
                                                    index.writeUInt16BE(pool_index);
                                                    writer.write(Buffer.concat([Buffer.from([0x13]), index]));
                                                }
                                            }
                                            break;
                                        case "bdx":
                                            var _blockId = Buffer.alloc(2);
                                            _blockId.writeUInt16BE(pool_index);
                                            var _blockData = Buffer.alloc(2);
                                            _blockData.writeUInt16BE(data);
                                            writer.write(Buffer.concat([Buffer.from([0x07]), _blockId, _blockData]));
                                            break;
                                        case "mcfunction":
                                            break;
                                    }

                                }
                                if (blockId[0] !== "air") {
                                    if (blockId[1] === -1) {
                                        determineData(0);
                                        function determineData(i, fc) {
                                            socket.exec(`testforblock ${x} ${y} ${z} ${blockId[0]} ${i}`, function (json) {
                                                if (json.body.statusMessage[0] === "成" || fc) {
                                                    blockId[1] = i;
                                                    // console.log("F Success -", blockId[0], i, "xyz", x, y, z, fc);
                                                    saveBlockData();
                                                } else if (i <= 16) {
                                                    determineData(i + 1);
                                                } else {
                                                    determineData(0, true);
                                                }
                                            });
                                        }
                                    } else {
                                        // console.log("D Success -", blockId);
                                        saveBlockData();
                                    }
                                } else {
                                    // console.log(404);
                                }
                            }
                        });




                        var _x = x;
                        var _y = y;
                        var _z = z;
                        _z += z_next;
                        if (Math.abs(_z - p1[2]) > Math.abs(p1[2] - p2[2])) {
                            _z = p1[2];
                            _x += x_next;
                            if (Math.abs(_x - p1[0]) > Math.abs(p1[0] - p2[0])) {
                                _x = p1[0];
                                _y += y_next;
                                if (Math.abs(_y - p1[1]) > Math.abs(p1[1] - p2[1])) {
                                    setTimeout(() => {
                                        // console.log("write");
                                        switch (type) {
                                            case "rmst":
                                                writer.write(Buffer.from([0xff]));
                                                break;
                                            case "bdx":
                                                writer.write(Buffer.from([0x58, 0x45]));
                                                break;
                                            case "mcfunction":
                                                break;
                                        }
                                        writer.close();


                                        switch (type) {
                                            case "rmst":
                                            case "bdx":
                                                writer = fs.createWriteStream(path);
                                                writer.write(headerBuffer);
                                                var reader = fs.createReadStream(tempPath);
                                                var zlibs = zlib.createBrotliCompress({ params: 6 });
                                                reader.pipe(zlibs).pipe(writer);
                                                zlibs.on("end", function () {
                                                    writer.close();
                                                    fs.unlinkSync(tempPath);
                                                    tk.display.content[2] = `100.00% ${drawProgress(60, 1.0)}`;
                                                    gameTaskSys.removeTask(tk);
                                                    socket.tellraw("[§9Export§f] " + lang("game", "export", "file saved") + " §g" + path);
                                                    socket.tellraw("[§bSuccess§f] §e" + lang("game", "export", "completed"));
                                                });
                                                reader.on("error", function (err) {
                                                    logger.error(err);
                                                    zlibs.emit("end");
                                                });
                                                break;
                                            case "mcfunction":
                                                fs.renameSync(tempPath, path);
                                                tk.display.content[2] = `100.00% ${drawProgress(60, 1.0)}`;
                                                gameTaskSys.removeTask(tk);
                                                socket.tellraw("[§9Export§f] " + lang("game", "export", "file saved") + " §g" + path);
                                                socket.tellraw("[§bSuccess§f] §e" + lang("game", "export", "completed"));
                                                break;
                                        }


                                    }, 500);
                                    return;
                                }
                            }
                        }
                        //Next turn
                        if (!tk.pause) {
                            setTimeout(() => {
                                exportStructure(_x, _y, _z);
                            }, 1000 / cmdv.export.speed);
                        } else {
                            tk.display.content[2] = (export_process / size * 100).toFixed(2) + "% " + drawProgress(60, export_process / size, "6");
                            tk.resume = exportStructure.bind(socket, _x, _y, _z);
                        }
                    }
                }
            });
            break;
        case "import":
            if (parsed.opt.h || parsed.opt["-help"] || parsed.body[0] === "help") {
                socket.tellraw("§a" + lang("game", "import", "help", "title"));
                socket.tellraw("import <filename>             §7" + lang("game", "import", "help", "import"));
                socket.tellraw("import speed [Speed]          §7" + lang("game", "import", "help", "speed"));
                socket.tellraw("import <filename> [Pos.A]     §7" + lang("game", "import", "help", "import"));
                socket.tellraw("import path [File ID]         §7" + lang("game", "import", "help", "path"));
                socket.tellraw("import follow on [Height]     §7" + lang("game", "import", "help", "follow on"));
                socket.tellraw("import follow off             §7" + lang("game", "import", "help", "follow off"));
                socket.tellraw("§7§l" + lang("game", "import", "help", "tip"));
                socket.tellraw("§d--| " + lang("game", "import", "help", "option") + " |--");
                socket.tellraw("§e-p=PATH --path         §7" + lang("game", "import", "help", "-p"));
                socket.tellraw("§e-s=SkipPercent  --skip §7" + lang("game", "import", "help", "-s"));
                // socket.tellraw("§e-f  --follow           §7" + lang("game", "import", "help", "-f"));
                socket.tellraw("§7e.g. import MyStructure");
                socket.tellraw("§7e.g. import path 0");
                socket.tellraw("§7e.g. import path 0 --skip=50");
                socket.tellraw("§7e.g. import MyStructure 0 -p=./public/");
                socket.tellraw("§7e.g. import speed 100");
                return;
            } else if (parsed.body[0] === "speed") {
                var speed = parseInt(parsed.body[1]);
                if (isNaN(speed)) {
                    socket.tellraw("[§6Error§f] " + lang("game", "import", "speed", "invalid number"));
                } else if (speed < 0 || speed > 2000) {
                    socket.tellraw("[§6Error§f] " + lang("game", "import", "speed", "invalid range"));
                } else {
                    cmdv.import.speed = speed;
                    socket.tellraw("[§bSuccess§f] " + lang("game", "import", "speed", "success") + " §e" + speed + "§f block/s");
                    if (speed > 1000) {
                        socket.tellraw("[§gImport§f] SUPER Speed (§a1000+§f) currently supports §b.rmst§f file !");
                    }
                }
                return;
            } else if (parsed.body[0] === "follow") {
                switch (parsed.body[1]) {
                    case "on":
                        var height = parsed.body[2];
                        var ph = parseFloat(height);
                        if (height === undefined) {
                            ph = cmdv.import.followHeight || 20;
                        } else if (isNaN(ph)) {
                            socket.tellraw("[§6Error§f] " + lang("game", "import", "error", "number"));
                            return;
                        } else {
                            ph ||= 1;
                            cmdv.import.followHeight = ph;
                        }
                        cmdv.import.follow = true;
                        socket.tellraw(`[§gImport§f] Follow: §aon §f(Height: ${ph})`);
                        break;
                    case "off":
                        cmdv.import.follow = false;
                        socket.tellraw(`[§gImport§f] Follow: §aoff`);
                        break;
                    default:
                        socket.tellraw("[§6Error§f] " + lang("game", "import", "error", "parameter"));
                        break;
                }
                return;
            } else if (parsed.body[0] === undefined) {
                socket.tellraw("[§6Error§f] " + lang("game", "import", "error", "parameter"));
                return;
            }
            if (parsed.body[0] === "path") {
                var pobj = cmdv.path;
                if (!pobj.dir || !pobj.files) {
                    socket.tellraw(`[§6Error§f] ${lang("game", "path", "error", "init")}`);
                    return;
                }
                var pathid = parseInt(parsed.body[1]);
                if (isNaN(pathid)) {
                    socket.tellraw(`[§6Error§f] Path ID '${parsed.body[1] || ""}' ${lang("game", "path", "error", "id")}`);
                    return;
                }
                socket.tellraw(`[§dPath§f] ${lang("game", "path", "loading")}: ${pathid}`);
                var pathdir = cmdv.path.dir;
                var pathfile = cmdv.path.files[pathid];
                if (!pathdir || !pathfile) {
                    socket.tellraw("[§6Error§f] " + lang("game", "path", "error", "file"));
                    return;
                }
                socket.tellraw(`[§dPath§f] directory: §b${pathdir}§f, file: §b${pathfile}`);
                parsed.opt.p = pathdir;
                parsed.body[0] = pathfile;
                parsed.body[1] = undefined;
                if (parsed.body[2]) parsed.body.splice(1, 1);
            }
            var filepath = getFilePath(parsed);
            var path = filepath[1];
            var filename = filepath[0];
            if (!filename) {
                socket.tellraw("[§6Error§f] " + lang("game", "import", "not found"));
                return;
            }
            path += path[path.length - 1] === "/" ? "" : "/";
            path += filename;
            var pos = cmdv.pos.position[parsed.body[1] || 0];
            if (!pos) {
                socket.tellraw("[§6Error§f] " + lang("game", "import", "pos error"));
                return;
            }
            pos = [pos.x, pos.y, pos.z];
            socket.tellraw("[§gImport§f] Path: §b" + path);
            var skip = parseInt(parsed.opt.s || parsed.opt['-skip']);
            var skiptask;
            if (isNaN(skip)) {
                skip = 0;
            } else {
                if (skip < 0 || skip > 100) {
                    socket.tellraw("[§6Error§f] " + lang("game", "import", "skip", "error", "percentage"));
                    return;
                }
                skiptask = new task(socket);
                skiptask.title = "SkipTo[" + skip + "%] ";
                skiptask.display.content[0] = skiptask.title + drawProgress(60, 0, "b");
                socket.tellraw(`[§gImport§f] ${lang("game", "import", "skip", "from")} §b${skip}%`);
            }
            skip /= 100;
            var suffix = getSuffix(filename);
            var temp = uuidv4();
            var tempPath = "./data/temp/" + temp;
            var tk = new task(socket, "§gImport§f");
            tk.circleInterval[0] = 5;
            tk.display.content[0] = tk.defFirstDisplay() + "  " + filename;
            tk.display.content[1] = "Pos: x, y, z Speed: -1 b/s";
            tk.display.content[2] = "0% " + drawProgress(60, 0);
            tk.onclose = function () {
                try {
                    reader.close();
                    fs.unlinkSync(tempPath);
                } catch (err) { }
            }
            var onerror = function (error) {
                if (error instanceof Error) error = null;
                socket.tellraw("[§cError§f]" + (error || `${lang("game", "import", "bad")}, at: ${path}`));
                gameTaskSys.removeTask(tk);
            }
            var parseError = function (err) {
                socket.tellraw("[§cError§f] " + lang("game", "import", "error", "parse"));
                gameTaskSys.removeTask(tk);
                logger.error(err);
            }
            if (suffix === ".rmst") {
                socket.tellraw("[§gImport§f] Type: §9RMST§f File");
                var reader = fs.createReadStream(path);
                reader.on("error", onerror);
                reader.on("readable", function () {
                    reader.removeAllListeners();
                    var headerId = reader.read(1)[0];
                    if (headerId === 0x01) {
                        var header = reader.read((reader.read(2)).readUInt16BE()).toString();
                        if (header === "RMST1") {
                            var zlibs = zlib.createBrotliDecompress();
                            var writerTemp = fs.createWriteStream(tempPath);
                            writerTemp.on("error", parseError);
                            reader.pipe(zlibs).pipe(writerTemp);
                            zlibs.on("end", function () {
                                writerTemp.close();
                                reader.close();
                                reader = new createReadStream(tempPath);
                                var size = reader.size;
                                skip *= size;
                                var blockpool = [];
                                var point = [0, 0, 0];
                                var info = null;
                                var placed = 0;
                                var isFileEnd = false;
                                tk.resume = readBuffer.bind({}, false);
                                var speedx = new textColorScroll("SpeedX");
                                tk.func = speedx.refresh.bind(speedx);
                                readBuffer(false);
                                function readBuffer(readable) {
                                    // console.log("Function Called");
                                    if (readable !== false) {
                                        var blockEvent;
                                        var id = reader.read(1)?.[0];
                                        if (id === undefined) return;
                                        // console.log("ID", id);
                                        switch (id) {
                                            case 0x02:
                                                info = JSON.parse(reader.read(reader.read(4).readUInt32BE()).toString());
                                                socket.tellraw("[§gImport§f] Author: §d" + info.author);
                                                socket.tellraw("[§gImport§f] Creation time: §6" + (isNaN(parseInt(info.date)) ? "Unknown" : new Date(parseInt(info.date)).toLocaleString()));
                                                break;
                                            case 0x03:
                                                blockpool.push(reader.read(reader.read(1).readUInt8()).toString());
                                                break;
                                            case 0x04:
                                                point[0] = reader.read(4).readInt32BE();
                                                point[1] = reader.read(4).readInt32BE();
                                                point[2] = reader.read(4).readInt32BE();
                                                break;
                                            case 0x05:
                                                point[0]++;
                                                break;
                                            case 0x06:
                                                point[0]--;
                                                break;
                                            case 0x07:
                                                point[1]++;
                                                break;
                                            case 0x08:
                                                point[1]--;
                                                break;
                                            case 0x09:
                                                point[2]++;
                                                break;
                                            case 0x0a:
                                                point[2]--;
                                                break;
                                            case 0x0b:
                                                point[0] += reader.read(2).readInt16BE();
                                                break;
                                            case 0x0c:
                                                point[1] += reader.read(2).readInt16BE();
                                                break;
                                            case 0x0d:
                                                point[2] += reader.read(2).readInt16BE();
                                                break;
                                            case 0x0e:
                                                point[0] += reader.read(4).readInt32BE();
                                                break;
                                            case 0x0f:
                                                point[1] += reader.read(4).readInt32BE();
                                                break;
                                            case 0x10:
                                                point[2] += reader.read(4).readInt32BE();
                                                break;
                                            case 0x11:
                                            case 0x12:
                                                if (id === 0x11) var block = blockpool[reader.read(2).readUInt16BE()];
                                                else var block = blockpool[reader.read(1).readUInt8()];
                                                var data = reader.read(1).readUInt8();
                                                blockEvent = [point[0] + pos[0], point[1] + pos[1], point[2] + pos[2], block, data];
                                                break;
                                            case 0x13:
                                            case 0x14:
                                                if (id === 0x13) var block = blockpool[reader.read(2).readUInt16BE()];
                                                else var block = blockpool[reader.read(1).readUInt8()];
                                                blockEvent = [point[0] + pos[0], point[1] + pos[1], point[2] + pos[2], block, 0];
                                                break;
                                            case 0x15:
                                                point[0] += reader.read(1).readInt8();
                                                break;
                                            case 0x16:
                                                point[1] += reader.read(1).readInt8();
                                                break;
                                            case 0x17:
                                                point[2] += reader.read(1).readInt8();
                                                break;
                                            case 0xff:
                                                isFileEnd = true;
                                                reader.close();
                                                fs.unlinkSync(tempPath);
                                                tk.display.content[2] = `100.00% ${drawProgress(60, 1.0)}`;
                                                gameTaskSys.removeTask(tk);
                                                socket.tellraw("[§bSuccess§f] " + lang("game", "import", "complete"));
                                                // console.log(blockpool);
                                                return;
                                                break;
                                        }

                                        if (reader.I < skip) {
                                            skiptask.display.content[0] = skiptask.title + drawProgress(60, reader.I / skip, "b");
                                            // process.nextTick(readBuffer);
                                            if (!skiptask.alive) {
                                                gameTaskSys.removeTask(tk);
                                                return;
                                            }
                                            setTimeout(readBuffer, 0);
                                            return;
                                        } else if (skiptask) {
                                            gameTaskSys.removeTask(skiptask);
                                            skiptask = null;
                                        } else if (blockEvent) {
                                            socket.setblock(...blockEvent);
                                            if (cmdv.import.follow && ++placed % config.importFollowInterval === 0) socket.exec(`tp ${pos[0] + point[0]} ${pos[1] + point[1] + cmdv.import.followHeight} ${pos[2] + point[2]}`);
                                        }
                                    }

                                    //Continue
                                    if (!tk.pause) {
                                        if (!isFileEnd && reader.I <= size) {
                                            if (readable === false) {
                                                var perms = cmdv.import.speed / 1000;
                                                var decimal = perms - parseInt(perms);
                                                for (var r = 0.99999; r < perms; r++) {
                                                    process.nextTick(readBuffer);
                                                }
                                                if (Math.random() < decimal) {
                                                    process.nextTick(readBuffer);
                                                }
                                                setTimeout(() => { readBuffer(false) }, 1);
                                                // process.nextTick(readBuffer);
                                            } else {
                                                if (!blockEvent) {
                                                    //Recurse until a block event occurs
                                                    process.nextTick(readBuffer);
                                                } else {
                                                    // console.log("Block Event");
                                                    tk.display.content[1] = `Pos: §g${Math.floor(point[0] + pos[0])} ${Math.floor(point[1] + pos[1])} ${Math.floor(point[2] + pos[2])}§f  ${speedx.refreshed}§f: §a${cmdv.import.speed}§f b/s`;
                                                    tk.display.content[2] = `${(reader.I / size * 100).toFixed(2)}% ${drawProgress(60, reader.I / size)}`;
                                                }
                                            }

                                            // if (blockEvent) {
                                            //     tk.display.content[1] = `Pos: §g${Math.floor(point[0] + pos[0])} ${Math.floor(point[1] + pos[1])} ${Math.floor(point[2] + pos[2])}§f  Speed: §a${cmdv.import.speed}§f b/s`;
                                            //     tk.display.content[2] = `${(reader.I / size * 100).toFixed(2)}% ${drawProgress(60, reader.I / size)}`;
                                            //     setTimeout(() => {
                                            //         readBuffer();
                                            //     }, 1000 / cmdv.import.speed);
                                            // }
                                            // else readBuffer();
                                        } else {
                                            gameTaskSys.removeTask(tk);
                                        }
                                    } else {
                                        tk.display.content[2] = `${(reader.I / size * 100).toFixed(2)}% ${drawProgress(60, reader.I / size, "6")}`;
                                    }
                                }
                            });
                            zlibs.on("error", function (err) {
                                onerror("File parsing error, at: " + path);
                                reader.close();
                            });


                        } else {
                            socket.tellraw("[§6Warn§f] " + lang("game", "import", "format error"));
                        }
                    } else {
                        socket.tellraw("[§6Warn§f] " + lang("game", "import", "format error"));
                    }
                });

            } else if (suffix === ".bdx") {
                socket.tellraw("[§gImport§f] Type: §9BDX§f File");
                var reader = fs.createReadStream(path);
                reader.on("error", onerror);
                reader.on("readable", function () {
                    reader.removeAllListeners();
                    var header = reader.read(3).toString();
                    if (header !== "BD@") {
                        socket.tellraw("[§6Warn§f] " + lang("game", "import", "format error"));
                        return;
                    }
                    var zlibs = zlib.createBrotliDecompress();
                    var writerTemp = fs.createWriteStream(tempPath);
                    writerTemp.on("error", parseError);
                    reader.pipe(zlibs).pipe(writerTemp);
                    zlibs.on("end", function () {
                        writerTemp.close();
                        reader.close();
                        reader = new createReadStream(tempPath);
                        var size = reader.size;
                        skip *= size;
                        var placed = 0;
                        var blockpool = [];
                        var point = [0, 0, 0];
                        var hd = reader.read(4).toString();
                        if (hd === "BDX\x00") {
                            // console.log(hd);
                        } else {
                            reader.close();
                            fs.unlinkSync(tempPath);
                            socket.tellraw("[§6Warn§f] Wrong or corrupt file format !");
                            return;
                        }
                        var author = "";
                        while (reader.I < size) {
                            var str = reader.read(1).toString();
                            if (str !== "\x00") author += str;
                            else break;
                        }
                        // console.log("Author: " + author);
                        socket.tellraw("[§gImport§f] Author: " + author);
                        tk.resume = __for__;
                        __for__();
                        function __for__() {
                            try {
                                var id = reader.read(1)[0];
                                var blockEvent = false;
                                var args;
                                switch (id) {
                                    case 0x01:
                                        var blockname = "";
                                        while (reader.I < size) {
                                            var str = reader.read(1).toString();
                                            if (str !== "\x00") blockname += str;
                                            else {
                                                blockpool.push(blockname);
                                                // console.log(blockname);
                                                break;
                                            }
                                        }
                                        break;
                                    case 0x02:
                                        point[0] += reader.read(2).readUInt16BE();
                                        point[1] = 0;
                                        point[2] = 0;
                                        break;
                                    case 0x03:
                                        point[0]++;
                                        point[1] = 0;
                                        point[2] = 0;
                                        break;
                                    case 0x04:
                                        point[1] += reader.read(2).readUInt16BE();
                                        point[2] = 0;
                                        break;
                                    case 0x05:
                                        point[1]++;
                                        point[2] = 0;
                                        break;
                                    case 0x06:
                                        point[2] += reader.read(2).readUInt16BE();
                                        break;
                                    case 0x07:
                                        var blockid = reader.read(2).readUInt16BE();
                                        var blockdata = reader.read(2).readUInt16BE();
                                        args = [pos[0] + point[0], pos[1] + point[1], pos[2] + point[2], blockpool[blockid], blockdata];
                                        blockEvent = true;
                                        break;
                                    case 0x08:
                                        point[2]++;
                                        break;
                                    case 0x09:
                                        break;
                                    case 0x0a:
                                        point[0] += reader.read(4).readUInt32BE();
                                        point[1] = 0;
                                        point[2] = 0;
                                        break;
                                    case 0x0b:
                                        point[1] += reader.read(4).readUInt32BE();
                                        point[2] = 0;
                                        break;
                                    case 0x0c:
                                        point[2] += reader.read(4).readUInt32BE();
                                        break;
                                    case 0x0d:
                                        //reserved
                                        break;
                                    case 0x0e:
                                        point[0]++;
                                        break;
                                    case 0x0f:
                                        point[0]--;
                                        break;
                                    case 0x10:
                                        point[1]++;
                                        break;
                                    case 0x11:
                                        point[1]--;
                                        break;
                                    case 0x12:
                                        point[2]++;
                                        break;
                                    case 0x13:
                                        point[2]--;
                                        break;
                                    case 0x14:
                                        point[0] += reader.read(2).readInt16BE();
                                        break;
                                    case 0x15:
                                        point[0] += reader.read(4).readInt32BE();
                                        break;
                                    case 0x16:
                                        point[1] += reader.read(2).readInt16BE();
                                        break;
                                    case 0x17:
                                        point[1] += reader.read(4).readInt32BE();
                                        break;
                                    case 0x18:
                                        point[2] += reader.read(2).readInt16BE();
                                        break;
                                    case 0x19:
                                        point[2] += reader.read(4).readInt32BE();
                                        break;
                                    case 0x1b:
                                        var blockid = reader.read(2).readUInt16BE();
                                        var blockdata = reader.read(2).readUInt16BE();
                                    case 0x24:
                                        var blockdata = reader.read(2).readUInt16BE();
                                    case 0x1a:
                                        var mode = reader.read(4).readUInt32BE();
                                        var command = "";
                                        while (reader.I < size) {
                                            var str = reader.read(1).toString();
                                            if (str !== "\x00") command += str;
                                            else break;
                                        }
                                        var customName = "";
                                        while (reader.I < size) {
                                            var str = reader.read(1).toString();
                                            if (str !== "\x00") customName += str;
                                            else break;
                                        }
                                        var lastOutput = "";
                                        while (reader.I < size) {
                                            var str = reader.read(1).toString();
                                            if (str !== "\x00") lastOutput += str;
                                            else break;
                                        }
                                        var tickdelay = reader.read(4).readUInt32BE();
                                        var executeOnFirstTick = reader.read(1)[0] === 1;
                                        var trackOutput = reader.read(1)[0] === 1;
                                        var conditional = reader.read(1)[0] === 1;
                                        var needRedstone = reader.read(1)[0] === 1;
                                        if (id === 0x1b) args = [pos[0] + point[0], pos[1] + point[1], pos[2] + point[2], blockpool[blockid], blockdata];
                                        else if (id === 0x24) args = [pos[0] + point[0], pos[1] + point[1], pos[2] + point[2], command_block, blockdata];
                                        blockEvent = true;
                                        break;
                                    case 0x1c:
                                        point[0] += reader.read(1).readInt8();
                                        break;
                                    case 0x1d:
                                        point[1] += reader.read(1).readInt8();
                                        break;
                                    case 0x1e:
                                        point[2] += reader.read(1).readInt8();
                                        break;
                                    case 0x1f:
                                        var versionid = reader.read(1).readUInt8();
                                        logger.warn("VersionID " + versionid);
                                        try {
                                            if (versionid === 117) {
                                                runtimeids = JSON.parse(fs.readFileSync("./data/runtimeIds_117.json"));
                                            } else {
                                                runtimeids = JSON.parse(fs.readFileSync("./data/runtimeIds_2_2_15.json"));
                                            }
                                        } catch (err) {
                                            socket.tellraw("[§6Error§f] Error when reading runtimeIds.json");
                                            return;
                                        }
                                        break;
                                    case 0x20:
                                        var rid = reader.read(2).readUInt16BE();
                                        args = [pos[0] + point[0], pos[1] + point[1], pos[2] + point[2], runtimeids[rid][0], runtimeids[rid][1]];
                                        blockEvent = true;
                                        break;
                                    case 0x21:
                                        var rid = reader.read(4).readUInt32BE();
                                        args = [pos[0] + point[0], pos[1] + point[1], pos[2] + point[2], runtimeids[rid][0], runtimeids[rid][1]];
                                        blockEvent = true;
                                        break;
                                    case 0x23:
                                        var rid = reader.read(4).readUInt32BE();
                                    case 0x22:
                                        if (id === 0x22) var rid = reader.read(2).readUInt16BE();
                                        socket.setblock(pos[0] + point[0], pos[1] + point[1], pos[2] + point[2], runtimeids[rid][0], runtimeids[rid][1]);
                                        var mode = reader.read(4).readUInt32BE();
                                        var command = "";
                                        while (reader.I < size) {
                                            var str = reader.read(1).toString();
                                            if (str !== "\x00") command += str;
                                            else break;
                                        }
                                        var customName = "";
                                        while (reader.I < size) {
                                            var str = reader.read(1).toString();
                                            if (str !== "\x00") customName += str;
                                            else break;
                                        }
                                        var lastOutput = "";
                                        while (reader.I < size) {
                                            var str = reader.read(1).toString();
                                            if (str !== "\x00") lastOutput += str;
                                            else break;
                                        }
                                        var tickdelay = reader.read(4).readUInt32BE();
                                        var executeOnFirstTick = reader.read(1)[0] === 1;
                                        var trackOutput = reader.read(1)[0] === 1;
                                        var conditional = reader.read(1)[0] === 1;
                                        var needRedstone = reader.read(1)[0] === 1;
                                        break;
                                    case 0x26:
                                        var rid = reader.read(4).readUInt32BE();
                                    case 0x25:
                                        if (id === 0x25) var rid = reader.read(2).readUInt16BE();
                                        var slotCount = reader.read(1).readUInt8();
                                        var items = [];
                                        for (var l = 0; l < slotCount; l++) {
                                            var itemName = "";
                                            while (reader.I < size) {
                                                var str = reader.read(1).toString();
                                                if (str !== "\x00") itemName += str;
                                                else break;
                                            }
                                            var count = reader.read(1).readUInt8();
                                            var data = reader.read(2).readUInt16BE();
                                            var slotId = reader.read(1).readUInt8();
                                            items.push([itemName, count, data, slotId]);
                                        }
                                        // console.log(items);
                                        if (reader.I >= skip)
                                            socket.exec(`setblock ${pos[0] + point[0]} ${pos[1] + point[1]} ${pos[2] + point[2]} ${runtimeids[rid][0]} ${runtimeids[rid][1]}`, function (json, obj) {
                                                // console.log("OBJ:", obj);
                                                for (var j = 0; j < obj[3].length; j++) {
                                                    socket.exec(`replaceitem block ${obj[0]} ${obj[1]} ${obj[2]} slot.container ${obj[3][j][3]} ${obj[3][j][0]} ${obj[3][j][1]} ${obj[3][j][2]}`);
                                                }
                                            }, [Math.floor(pos[0] + point[0]), Math.floor(pos[1] + point[1]), Math.floor(pos[2] + point[2]), items]);
                                        blockEvent = true;
                                        break;
                                    case 0x58:
                                        tk.display.content[2] = `100.00% ${drawProgress(60, 1.0)}`;
                                        socket.tellraw("[§gImport§f] §a" + lang("game", "import", "complete"));
                                        reader.close();
                                        fs.unlinkSync(tempPath);
                                        gameTaskSys.removeTask(tk);
                                        return;
                                    case 0x5a:
                                        var len = reader.read(1).readUInt8();
                                        break;
                                    default:
                                        logger.error("Unexpected ID: " + id);
                                        return;
                                }
                            } catch (err) {
                                logger.error(err);
                                socket.tellraw("[§6Error§f] An unexpected error interrupted the import !");
                                gameTaskSys.removeTask(tk);
                                return;
                            }
                            if (reader.I < skip) {
                                skiptask.display.content[0] = skiptask.title + drawProgress(60, reader.I / skip, "b");
                                // process.nextTick(__for__);
                                if (!skiptask.alive) {
                                    gameTaskSys.removeTask(tk);
                                    return;
                                }
                                setTimeout(__for__, 0);
                                return;
                            } else if (skiptask) {
                                gameTaskSys.removeTask(skiptask);
                                skiptask = null;
                            } else if (blockEvent && args) {
                                socket.setblock(...args);
                                if (cmdv.import.follow && ++placed % config.importFollowInterval === 0) socket.exec(`tp ${pos[0] + point[0]} ${pos[1] + point[1] + cmdv.import.followHeight} ${pos[2] + point[2]}`);
                            }


                            if (!tk.pause) {
                                if (reader.I < size) {
                                    if (blockEvent) {
                                        tk.display.content[1] = `Pos: §g${Math.floor(point[0] + pos[0])} ${Math.floor(point[1] + pos[1])} ${Math.floor(point[2] + pos[2])}§f  Speed: §a${cmdv.import.speed > 1000 ? 1000 : cmdv.import.speed}§f b/s`;
                                        tk.display.content[2] = `${(reader.I / size * 100).toFixed(2)}% ${drawProgress(60, reader.I / size)}`;
                                        __for__();
                                    } else {
                                        setTimeout(() => {
                                            __for__();
                                        }, parseInt(1000 / cmdv.import.speed) || 1);
                                    }
                                } else {
                                    gameTaskSys.removeTask(tk);
                                }
                            } else {
                                tk.display.content[2] = `${(reader.I / size * 100).toFixed(2)}% ${drawProgress(60, reader.I / size, "6")}`;
                            }
                        }

                    });
                    zlibs.on("error", function (err) {
                        onerror("File parsing error, at: " + path);
                        reader.close();
                    });

                });
            } else if (suffix === ".mcfunction") {
                socket.tellraw("[§gImport§f] Type: §9MCFUNCTION§f File");
                try {
                    var reader = new createReadStream(path);
                } catch (err) {
                    onerror();
                    return;
                }
                var size = reader.size;
                skip *= size;
                var lineread = 0;
                tk.resume = __for__;
                __for__();
                function __for__() {
                    var line = "";
                    while (reader.I < size) {
                        var char = reader.read(1).toString();
                        if (char === "\n") break;
                        line += char;
                    }
                    lineread++;
                    if (reader.I < skip) {
                        skiptask.display.content[0] = skiptask.title + drawProgress(60, reader.I / skip, "b");
                        if (!skiptask.alive) {
                            reader.close();
                            gameTaskSys.removeTask(tk);
                            return;
                        }
                        setTimeout(__for__, 0);
                        return;
                    } else if (skiptask) {
                        gameTaskSys.removeTask(skiptask);
                        skiptask = null;
                    }
                    tk.display.content[1] = `Line: §g${lineread}§f  Speed: §a${cmdv.import.speed > 1000 ? 1000 : cmdv.import.speed}§f l/s`;
                    tk.display.content[2] = `${(reader.I / size * 100).toFixed(2)}% ${drawProgress(60, reader.I / size)}`;
                    var annotation = line.indexOf("#");
                    if (line !== -1) line = line.slice(0, annotation);
                    var cmdheader = line.slice(0, line.indexOf(" "));
                    if (cmdheader === "setblock") {
                        var coor = getCmdPos(line);
                        socket.setblock(typeof coor.pos[0] === "string" ? coor.pos[0] : pos[0] + coor.pos[0], typeof coor.pos[1] === "string" ? coor.pos[1] : pos[1] + coor.pos[1], typeof coor.pos[2] === "string" ? coor.pos[2] : pos[2] + coor.pos[2], coor.data);
                    } else if (cmdheader === "fill") {
                        var coor = getCmdPos(line);
                        socket.exec(`fill ${typeof coor.pos[0] === "string" ? coor.pos[0] : pos[0] + coor.pos[0]} ${typeof coor.pos[1] === "string" ? coor.pos[1] : pos[1] + coor.pos[1]} ${typeof coor.pos[2] === "string" ? coor.pos[2] : pos[2] + coor.pos[2]} ${typeof coor.pos[3] === "string" ? coor.pos[3] : pos[0] + coor.pos[3]} ${typeof coor.pos[4] === "string" ? coor.pos[4] : pos[1] + coor.pos[4]} ${typeof coor.pos[5] === "string" ? coor.pos[5] : pos[2] + coor.pos[5]} ${coor.data}`);
                    } else if (line) {
                        socket.exec(line);
                    }
                    if (!tk.pause) {
                        if (reader.I < size) {
                            setTimeout(() => {
                                __for__();
                            }, parseInt(1000 / cmdv.import.speed) || 1);
                        } else {
                            reader.close();
                            gameTaskSys.removeTask(tk);
                            socket.tellraw("[§gImport§f] §a" + lang("game", "import", "complete"));
                        }
                    } else {
                        tk.display.content[2] = `${(reader.I / size * 100).toFixed(2)}% ${drawProgress(60, reader.I / size, "6")}`;
                    }
                }
            } else if (suffix === ".sd") {
                socket.tellraw("[§gImport§f] Type: §9SD§f File");
                var reader = fs.createReadStream(path);
                reader.on("error", onerror);
                var zlibs = zlib.createGunzip();
                var writerTemp = fs.createWriteStream(tempPath);
                writerTemp.on("error", parseError);
                reader.pipe(zlibs).pipe(writerTemp);
                zlibs.on("end", next);
                zlibs.on("error", function () {
                    next(path);
                });
                function next(oldVersion) {
                    writerTemp.close();
                    reader.close();
                    reader = new createReadStream(oldVersion || tempPath);
                    var size = reader.size;
                    skip *= size;
                    var placed = 0;
                    tk.resume = __for__;
                    __for__();
                    function __for__() {
                        var str = "";
                        while (reader.I < size) {
                            var char = reader.read(1).toString();
                            if (char === "/") break;
                            str += char;
                        }
                        if (str.length > 40) {
                            socket.tellraw("[§cError§f] Bad File");
                            reader.I = size;
                            reader.close();
                            gameTaskSys.removeTask(tk);
                            return;
                        }
                        if (reader.I < skip) {
                            skiptask.display.content[0] = skiptask.title + drawProgress(60, reader.I / skip, "b");
                            if (!skiptask.alive) {
                                reader.close();
                                gameTaskSys.removeTask(tk);
                                return;
                            }
                            setTimeout(__for__, 0);
                            return;
                        } else if (skiptask) {
                            gameTaskSys.removeTask(skiptask);
                            skiptask = null;
                        }

                        var spl = str.split(" ");
                        if (spl) {
                            var x = Math.floor(pos[0] + parseInt(spl[0])),
                                y = Math.floor(pos[1] + parseInt(spl[1])),
                                z = Math.floor(pos[2] + parseInt(spl[2]));
                            socket.setblock(x, y, z, spl[3], spl[4]);
                            if (cmdv.import.follow && ++placed % config.importFollowInterval === 0) socket.exec(`tp ${pos[0] + x} ${pos[1] + y + cmdv.import.followHeight} ${pos[2] + z}`);
                            tk.display.content[1] = `Pos: §g${x}, ${y}, ${z} §f  Speed: §a${cmdv.import.speed > 1000 ? 1000 : cmdv.import.speed}§f b/s`;
                            tk.display.content[2] = `${(reader.I / size * 100).toFixed(2)}% ${drawProgress(60, reader.I / size)}`;
                        }
                        if (!tk.pause) {
                            if (reader.I < size) {
                                setTimeout(() => {
                                    __for__();
                                }, parseInt(1000 / cmdv.import.speed) || 1);
                            } else {
                                reader.close();
                                gameTaskSys.removeTask(tk);
                                socket.tellraw("[§gImport§f] §a" + lang("game", "import", "complete"));
                            }
                        } else {
                            tk.display.content[2] = `${(reader.I / size * 100).toFixed(2)}% ${drawProgress(60, reader.I / size, "6")}`;
                        }
                    }
                }
            } else if (suffix === ".schematic") {
                var chunk = 1024 * 64;
                var temp2 = uuidv4();
                var temp2Path = "./data/temp/" + temp2;
                var tempData = uuidv4();
                var tempDataPath = "./data/temp/" + tempData;
                var tempBlocks = uuidv4();
                var tempBlocksPath = "./data/temp/" + tempBlocks;
                socket.tellraw("[§gImport§f] Type: §9SCHEMATIC§f File");
                try {
                    var reader = new createReadStream(path);
                } catch (err) {
                    onerror();
                    return;
                }
                var header = reader.read(12);
                var standard = Buffer.from([0x0a, 0x00, 0x09, 0x53, 0x63, 0x68, 0x65, 0x6d, 0x61, 0x74, 0x69, 0x63]);
                reader.close();
                if (header?.equals(standard)) {
                    startParsing(path, true);
                } else {
                    reader = fs.createReadStream(path);
                    var writerT2 = fs.createWriteStream(temp2Path);
                    writerT2.on("error", parseError);
                    var ungzip = zlib.createGunzip();
                    ungzip.on("error", function (err) {
                        //Error: unexpected end of file
                        // at Zlib.zlibOnError [as onerror] (node:zlib:189:17) {
                        //     errno: -5,
                        //     code: 'Z_BUF_ERROR'
                        //   }
                        onerror();
                        reader.close();
                        writerT2.close();
                    });
                    ungzip.on("end", function () {
                        writerT2.close();
                        reader.close();
                        startParsing(temp2Path);
                    });
                    reader.pipe(ungzip).pipe(writerT2);
                }
                function startParsing(processedPath, keep) {
                    var reader = new createReadStream(processedPath);
                    var size = reader.size;
                    var dataWriter = new createWriteStream(tempDataPath);
                    var blocksWriter = new createWriteStream(tempBlocksPath);
                    var parseStrArray = function (type) {
                        switch (type) {
                            case 0x00:
                                logger.warn("Unexpected key ID !");
                                break;
                            case 0x01: return reader.read(1)[0];
                            case 0x02: return reader.read(2).readInt16BE();
                            case 0x03: return reader.read(4).readInt32BE();
                            case 0x04: return reader.read(8).readBigInt64BE();
                            case 0x05: return reader.read(4).readFloatBE();
                            case 0x06: return reader.read(8).readDoubleBE();
                            case 0x07: return {
                                dataType: "byte list",
                                data: reader.read(reader.read(4).readInt32BE())
                            };
                            case 0x08: return reader.read(reader.read(2).readInt16BE()).toString();
                            case 0x09:
                                var _arr = [];
                                var type = reader.read(1)[0];
                                var times_ = reader.read(4).readInt32BE();
                                for (var i = 0; i < times_; i++) _arr.push(parseStrArray(type));
                                return _arr;
                            case 0x0a: return bufToObj(1);
                            case 0x0b: return {
                                dataType: "int list",
                                data: reader.read(reader.read(4).readInt32BE() * 4)
                            };
                            case 0x0c: return {
                                dataType: "long list",
                                data: reader.read(reader.read(4).readInt32BE() * 8)
                            };
                        }
                    }
                    var bufToObj = function (times) {
                        var external = {};
                        var path = [];
                        while (reader.I < size) {
                            if (typeof times === "number") times--;
                            if (times === -1) return external;
                            let id = reader.read(1)[0];
                            if (id === 0) {
                                path.pop();
                                continue;
                            }
                            var key = reader.read(reader.read(2).readInt16BE()).toString();
                            // console.log(id, key);
                            switch (id) {
                                case 0x01:
                                    setValueByPath(external, path.concat(key), reader.read(1)[0]);
                                    break;
                                case 0x02:
                                    setValueByPath(external, path.concat(key), reader.read(2).readInt16BE());
                                    break;
                                case 0x03:
                                    setValueByPath(external, path.concat(key), reader.read(4).readInt32BE());
                                    break;
                                case 0x04:
                                    setValueByPath(external, path.concat(key), reader.read(8).readBigInt64BE());
                                    break;
                                case 0x05:
                                    setValueByPath(external, path.concat(key), reader.read(4).readFloatBE());
                                    break;
                                case 0x06:
                                    setValueByPath(external, path.concat(key), reader.read(8).readDoubleBE());
                                    break;
                                case 0x07:
                                    var len = reader.read(4).readInt32BE();
                                    setValueByPath(external, path.concat(key), null);
                                    switch (key) {
                                        case "Data":
                                            // console.log("DATA", tempDataPath, len);
                                            for (var i = 0; i < len; i += chunk) {
                                                if (i + chunk > len) dataWriter.write(reader.read(len - i));
                                                else dataWriter.write(reader.read(chunk));
                                            }
                                            break;
                                        case "Biomes":
                                            // console.log("BIOMES", tempDataPath, len);
                                            for (var i = 0; i < len; i += chunk) {
                                                if (i + chunk > len) reader.read(len - i);
                                                else reader.read(chunk);
                                            }
                                            break;
                                        case "Blocks":
                                            // console.log("BLOCKS", tempBlocksPath, len);
                                            for (var i = 0; i < len; i += chunk) {
                                                if (i + chunk > len) blocksWriter.write(reader.read(len - i));
                                                else blocksWriter.write(reader.read(chunk));
                                            }
                                            break;
                                        default:
                                            setValueByPath(external, path.concat(key), {
                                                dataType: "byte list",
                                                data: reader.read(len)
                                            });
                                            break;
                                    }

                                    break;
                                case 0x08:
                                    setValueByPath(external, path.concat(key), reader.read(reader.read(2).readInt16BE()).toString());
                                    break;
                                case 0x09:
                                    var arr = [];
                                    var type = reader.read(1)[0];
                                    var times_ = reader.read(4).readInt32BE();
                                    path.push(key);
                                    setValueByPath(external, path, arr);
                                    for (var i = 0; i < times_; i++) {
                                        var res = parseStrArray(type);
                                        arr.push(res);
                                    }
                                    path.pop();
                                    break;
                                case 0x0a:
                                    path.push(key);
                                    setValueByPath(external, path, {});
                                    break;
                                case 0x0b:
                                    setValueByPath(external, path.concat(key), {
                                        dataType: "int list",
                                        data: reader.read(reader.read(4).readInt32BE() * 4)
                                    });
                                    break;
                                case 0x0c:
                                    setValueByPath(external, path.concat(key), {
                                        dataType: "long list",
                                        data: reader.read(reader.read(4).readInt32BE() * 8)
                                    });
                                    break;
                            }
                            // console.log(external, path);
                        }
                        return external;
                    }
                    var sche = bufToObj();
                    reader.close();
                    dataWriter.close();
                    blocksWriter.close();
                    try {
                        if (!keep) fs.unlinkSync(processedPath);
                    } catch (err) { }
                    var dataStream = new createReadStream(tempDataPath);
                    var blockStream = new createReadStream(tempBlocksPath);
                    var height = sche.Schematic.Height;
                    var length = sche.Schematic.Length;
                    var width = sche.Schematic.Width;
                    var size = height * length * width;
                    skip *= size;
                    var placed = 0;
                    var point = [0, 0, 0];
                    tk.onclose = function () {
                        try {
                            blockStream.close();
                            dataStream.close();
                            fs.unlinkSync(tempDataPath);
                            fs.unlinkSync(tempBlocksPath);
                        } catch (err) { }
                    }
                    tk.resume = __for__;
                    function nextPoint(f, fo) {
                        if (++point[0] >= width) {
                            point[0] = 0;
                            if (fo && follow) socket.exec(`tp ${pos[0] + point[0]} ${pos[1] + point[1] + cmdv.import.followHeight} ${pos[2] + point[2]}`);
                            if (++point[2] >= length) {
                                point[2] = 0;
                                if (fo && follow) socket.exec(`tp ${pos[0] + point[0]} ${pos[1] + point[1] + cmdv.import.followHeight} ${pos[2] + point[2]}`);
                                if (++point[1] >= height) {
                                    f?.();
                                    return true;
                                }
                            }
                        }
                    }
                    __for__();
                    function __for__() {
                        var blockid = blockStream.read(1)[0];
                        var data = dataStream.read(1)[0];
                        var block = id2nameJE(blockid);
                        if (blockStream.I < skip) {
                            skiptask.display.content[0] = skiptask.title + drawProgress(60, blockStream.I / skip, "b");
                            if (!skiptask.alive) {
                                blockStream.close();
                                gameTaskSys.removeTask(tk);
                                return;
                            }
                            nextPoint();
                            setTimeout(__for__, 0);
                            return;
                        } else if (skiptask) {
                            gameTaskSys.removeTask(skiptask);
                            skiptask = null;
                        }


                        if (blockid === 0 && dataStream.I < size) {
                            nextPoint();
                            process.nextTick(__for__);
                            return;
                        }
                        socket.setblock(pos[0] + point[0], pos[1] + point[1], pos[2] + point[2], block, data);
                        if (cmdv.import.follow && ++placed % config.importFollowInterval === 0) socket.exec(`tp ${pos[0] + point[0]} ${pos[1] + point[1] + cmdv.import.followHeight} ${pos[2] + point[2]}`);
                        //Air Task BlockError
                        if (nextPoint(() => {
                            tk.display.content[2] = `100.00% ${drawProgress(60, 1.0)}`;
                            gameTaskSys.removeTask(tk);
                            socket.tellraw("[§bSuccess§f] " + lang("game", "import", "complete"));
                            return;
                        }, true)) return;
                        if (!tk.pause) {
                            tk.display.content[1] = `Pos: §g${Math.floor(point[0] + pos[0])} ${Math.floor(point[1] + pos[1])} ${Math.floor(point[2] + pos[2])}§f  Speed§f: §a${cmdv.import.speed > 1000 ? 1000 : cmdv.import.speed}§f b/s`;
                            tk.display.content[2] = `${(blockStream.I / size * 100).toFixed(3)}% ${drawProgress(60, blockStream.I / size)}`;
                            setTimeout(__for__, parseInt(1000 / cmdv.import.speed) || 1);
                        } else {
                            tk.display.content[2] = `${(blockStream.I / size * 100).toFixed(3)}% ${drawProgress(60, blockStream.I / size, "6")}`;
                        }
                    }

                }
            } else {
                gameTaskSys.removeTask(tk);
                socket.tellraw("[§6Warn§f] " + lang("game", "import", "unsupport") + ": §e" + suffix);
                return;
            }

            break;
        case "version":
            socket.tellraw("§3§l§oRimspace by EltanceX (annularwind@outlook.com)");
            socket.tellraw("§3§l§oThis server is running Rimspace *OpenSource 2023.8* Version " + version);
            break;
        case "ol":
            if (isPluginEmit) parsed.opt.h = true;
            if (parsed.opt.h || parsed.opt["-help"] || parsed.body[0] === "help") {
                socket.tellraw("§a" + lang("game", "ol", "help", "title"));
                socket.tellraw("§blist§f                 §7" + lang("game", "ol", "help", "list"));
                socket.tellraw("§blist <Type> <Page>§f   §7" + lang("game", "ol", "help", "listx"));
                socket.tellraw("§bsignin§f               §7" + lang("game", "ol", "help", "signin"));
                socket.tellraw("§bbuy <Type> <Name>§f    §7" + lang("game", "ol", "help", "buy"));
                socket.tellraw("§binfo§f                 §7" + lang("game", "ol", "help", "info"));
                socket.tellraw("§bupload <FileName> <NameToUpload> <UploadType> <Description>");
                socket.tellraw("    §7" + lang("game", "ol", "help", "upload"));
                socket.tellraw("§bdownload <Type> <Name>  §7" + lang("game", "ol", "help", "download"));
                socket.tellraw("§bdelete <Type> <Name> §7" + lang("game", "ol", "help", "delete"));
                socket.tellraw("    §7" + lang("game", "ol", "help", "delete tip"));
                socket.tellraw("§bprice <Type> <Name> <Price>§7 " + lang("game", "ol", "help", "price"));
                socket.tellraw("§d--| " + lang("game", "ol", "help", "option") + " |--");
                socket.tellraw("§e  -p=PATH --path §7" + lang("game", "ol", "help", "-p"));
                socket.tellraw("§7§oe.g. ol list 官方 0");
                socket.tellraw("§7§oe.g. ol buy 官方 music.mid");
                socket.tellraw("§7§oe.g. ol upload myMidi.mid name.mid 官方 'This is a midi file'");
                return;
            }
            switch (parsed.body[0]) {
                case "list":
                    getTypes(function (arr) {
                        if (arr instanceof Error) {
                            socket.tellraw("[§cError§f] " + lang("game", "ol", "server error"));
                            socket.tellraw("§6" + String(arr));
                            logger.error(arr);
                        } else {
                            var type = parsed.body[1];
                            var page = parseInt(parsed.body[2]) || 0;
                            if (type) {
                                if (arr.indexOf(type) !== -1) {
                                    var newreq = false;
                                    if (ftcache[type] && ftcache[type].arr && Date.now() - ftcache[type].date < ftcache[type].wait) {
                                        cb(ftcache[type].arr);
                                    } else {
                                        newreq = true;
                                        getFileListByType(type, cb);
                                    }
                                    function cb(arr) {

                                        if (arr instanceof Error) {
                                            logger.error(arr);
                                            socket.tellraw("[§cError§f] " + lang("game", "ol", "server error"));
                                            socket.tellraw("§6" + String(arr));
                                        } else {
                                            // name:des:author:date:size:price:download:
                                            if (arr.length === 0) {
                                                socket.tellraw("[§lOnline§r§f] " + lang("game", "ol", "no file"));
                                            } else {
                                                if (newreq) {
                                                    arr = quickSort(arr, ['download']);
                                                    var wait = 1000 * 10;
                                                    if (arr.length > 100) {
                                                        wait = 1000 * 60
                                                    } else if (arr.length > 50) {
                                                        wait = 1000 * 40;
                                                    } else if (arr.length > 20) {
                                                        wait = 1000 * 30
                                                    }
                                                    ftcache[type] = {
                                                        date: Date.now(),
                                                        arr: arr,
                                                        wait: wait
                                                    }
                                                }
                                                var max = (page + 1) * 6 > arr.length ? arr.length : (page + 1) * 6;
                                                socket.exec(`say §f[§lOnline§r§f] §l§e Page ${page} / ${Math.floor(arr.length / 6)}    §r§7ol list [Type] [Page]`);
                                                for (var i = page * 6; i < max; i++) {
                                                    var size = [arr[i].size / 1024, "KB"];
                                                    if (size[0] / 1024 > 1) {
                                                        size[0] /= 1024;
                                                        size[1] = "MB";
                                                    } else if (size[0] / 1024 / 1024 > 1) {
                                                        size[0] /= 1024 * 1024;
                                                        size[1] = "GB";
                                                    }

                                                    socket.exec(`say §f[§lOnline§r§f] <${i}> ${arr[i].name} §7${arr[i].des}§f (§g${new Date(arr[i].date).toLocaleString()}§f) by §b${arr[i].author}§f`);
                                                    socket.exec(`say §f[§lOnline§r§f]    §6${size[0].toFixed(2)}${size[1]}  §e${arr[i].price}§g○  §f§a${arr[i].download}↓`);
                                                }
                                            }
                                        }
                                    }
                                } else {
                                    socket.tellraw("[§cError§f] " + lang("game", "ol", "type error"));
                                }
                            } else {
                                socket.tellraw(lang("game", "ol", "list"));
                                for (var i = 0; i < arr.length; i++) {
                                    socket.tellraw(`Type.${i}  ${arr[i]}`);
                                }
                            }
                        }
                    });
                    break;
                case "buy":
                    var type = parsed.body[1];
                    var name = parsed.body[2];
                    if (!(type && name)) {
                        socket.tellraw("[§cError§f] " + lang("game", "ol", "parameter error"));
                        return;
                    }
                    getTypes(function (arr) {
                        if (arr instanceof Error) {
                            socket.tellraw("[§cError§f] " + lang("game", "ol", "server error"));
                            socket.tellraw("§6" + String(arr));
                            logger.error(arr);
                        } else {
                            if (arr.indexOf(type) !== -1) {
                                unlock(type, name, function (cost) {
                                    if (cost instanceof Error) {
                                        socket.tellraw("§6" + String(cost));
                                    } else {
                                        socket.tellraw("[§lOnline§r§f] " + lang("game", "ol", "buy") + " §e" + cost + "§f○");
                                    }
                                });
                            } else {
                                socket.tellraw("[§cError§f] " + lang("game", "ol", "type error"));
                            }
                        }
                    });
                    break;
                case "info":
                    getUserInfo(function (json) {
                        if (json instanceof Error) {
                            socket.tellraw("§6" + String(json));
                        } else {
                            socket.tellraw(`§a---- User Info ----`);
                            socket.tellraw(`Name: §b${json.name}`);
                            socket.tellraw(`UUID: ${json.uuid}`);
                            socket.tellraw(`Ver2: ${json.version}`);
                            socket.tellraw(`Silver Coins: §e${json.silver_coin}`);
                            socket.tellraw(`Last login: ${new Date(json.lastLogin).toLocaleString()}`);
                            socket.tellraw(`Register time: ${new Date(json.regTime).toLocaleString()}`);
                            socket.tellraw(`Due date: ${new Date(json.lastLogin + json.effective).toLocaleString()}`);
                        }
                    });
                    break;
                case "upload":
                    var path = parsed.opt.p || parsed.opt["-path"] || "./public/";
                    if (path[path.length - 1] !== "/" && path[path.length - 1] !== "\\") path += "/";
                    var file = parsed.body[1];
                    var filepath = path + file;
                    if (!file) {
                        socket.tellraw("[§6Error§f] " + lang("game", "ol", "name error"));
                        return;
                    }
                    var nameToUpload = parsed.body[2];
                    if (!nameToUpload) {
                        socket.tellraw("[§6Error§f] " + lang("game", "ol", "uname error"));
                        return;
                    }
                    if (nameToUpload.length > 30) {
                        socket.tellraw("[§6Error§f] " + lang("game", "ol", "name length error"));
                        return;
                    }
                    var type = parsed.body[3];
                    if (!type) {
                        socket.tellraw("[§6Error§f] " + lang("game", "ol", "type error"));
                        return;
                    }
                    var description = parsed.body[4] || "";
                    if (description.length > 50) {
                        socket.tellraw("[§6Error§f] " + lang("game", "ol", "des length error"));
                        return;
                    }
                    var extended = file.slice(file.lastIndexOf("."));
                    var extended2 = nameToUpload.slice(nameToUpload.lastIndexOf("."));
                    if (extended2 != extended) nameToUpload += extended;
                    if (extended === ".mid") {
                        try {
                            getMidi(filepath);
                        } catch (err) {
                            socket.tellraw("[§6Error§f] " + lang("game", "ol", "file corruption"));
                            return;
                        }
                    } else if (extended === ".rmst") {
                        try {
                            var buf = Buffer.from(fs.readFileSync(filepath));
                            var headerId = buf.read(1)[0];
                            if (headerId === 0x01) {
                                var header = buf.read((buf.read(2)).readUInt16BE()).toString();
                                if (header === "RMST1") {
                                    //Pass
                                } else {
                                    throw new Error("[§6Warn§f] " + lang("game", "ol", "format error"));
                                }
                            } else {
                                throw new Error("[§6Warn§f] " + lang("game", "ol", "format error"));
                            }
                        } catch (err) {
                            socket.tellraw("[§6Error§f] " + lang("game", "ol", "file corruption"));
                            return;
                        }
                    } else {
                        socket.tellraw("[§6Error§f] " + lang("game", "ol", "unsupported format"));
                        return;
                    }
                    getTypes(function (arr) {
                        if (arr instanceof Error) {
                            socket.tellraw("[§cError§f] " + lang("game", "ol", "server error"));
                            socket.tellraw("§6" + String(arr));
                            logger.error(arr);
                        } else {
                            if (arr.indexOf(type) !== -1) {
                                socket.tellraw("[§lOnline§r§f] §a" + lang("game", "ol", "upload", "start"));
                                upload(filepath, nameToUpload, type, description, function (err, scoin, price) {
                                    if (err instanceof Error) {
                                        socket.tellraw("§6" + String(err));
                                        logger.error(err);
                                    } else if (err === true) {
                                        socket.tellraw("[§lOnline§r§f] §a" + lang("game", "ol", "upload", "success"));
                                        socket.tellraw("[§lOnline§r§f] " + lang("game", "ol", "upload", "reward") + ": §g" + scoin);
                                        socket.tellraw("[§lOnline§r§f] " + lang("game", "ol", "upload", "price") + ": §e" + price);
                                        socket.tellraw("[§lOnline§r§f] " + lang("game", "ol", "upload", "tip"));
                                    } else {
                                        socket.tellraw("[§cError§f] " + lang("game", "ol", "server error"));
                                        logger.error(new Error("Invalid Return"));
                                    }
                                });
                            } else {
                                socket.tellraw("[§cError§f] " + lang("game", "ol", "type error"));
                            }
                        }
                    });
                    break;
                case "download":
                    // download(type, file, save, cb)
                    var type = parsed.body[1];
                    var name = parsed.body[2];
                    // var save = parsed.body[3];
                    var path = parsed.opt.p || parsed.opt["-path"] || "./public/";
                    if (path[path.length - 1] !== "/" && path[path.length - 1] !== "\\") path += "/";
                    // var filepath = path + save;
                    var isFileExist = true;
                    try {
                        fs.statSync(path + name);
                    } catch (err) {
                        isFileExist = false;
                    }
                    if (isFileExist) {
                        socket.tellraw("[§cError§f] " + lang("game", "ol", "file exists"));
                        return;
                    }
                    if (!(type && name/* && save*/)) {
                        socket.tellraw("[§cError§f] " + lang("game", "ol", "parameter error"));
                        return;
                    }
                    getTypes(function (arr) {
                        if (arr instanceof Error) {
                            socket.tellraw("[§cError§f] " + lang("game", "ol", "server error"));
                            socket.tellraw("§6" + String(arr));
                            logger.error(arr);
                        } else {
                            if (arr.indexOf(type) !== -1) {
                                socket.tellraw(lang("game", "ol", "download", "start"));
                                download(type, name, path + name, function (stat) {
                                    if (stat instanceof Error) {
                                        socket.tellraw("§6" + String(stat));
                                        logger.error(stat);
                                    } else if (stat === true) {
                                        socket.tellraw("[§lOnline§r§f] §a" + lang("game", "ol", "download", "success"));
                                        socket.tellraw("[§lOnline§r§f] " + lang("game", "ol", "download", "save") + ": §e" + path + name);
                                    } else {
                                        socket.tellraw("[§cError§f] " + lang("game", "ol", "server error"));
                                        logger.error(new Error("Invalid Return"));
                                    }
                                });
                            } else {
                                socket.tellraw("[§cError§f] " + lang("game", "ol", "type error"));
                            }
                        }
                    });
                    break;
                case "delete":
                    // deleteFile(type,name)
                    var type = parsed.body[1];
                    var name = parsed.body[2];
                    if (!(type && name)) {
                        socket.tellraw("[§cError§f] " + lang("game", "ol", "parameter error"));
                        return;
                    }
                    getTypes(function (arr) {
                        if (arr instanceof Error) {
                            socket.tellraw("[§cError§f] " + lang("game", "ol", "server error"));
                            socket.tellraw("§6" + String(arr));
                            logger.error(arr);
                        } else {
                            if (arr.indexOf(type) !== -1) {
                                deleteFile(type, name, function (deduction) {
                                    if (deduction instanceof Error) {
                                        socket.tellraw("§6" + String(deduction));
                                    } else {
                                        socket.tellraw("[§lOnline§r§f] " + lang("game", "ol", "delete") + " §c" + deduction);
                                    }
                                });
                            } else {
                                socket.tellraw("[§cError§f] " + lang("game", "ol", "type error"));
                            }
                        }
                    });
                    break;
                case "price":
                    var type = parsed.body[1];
                    var name = parsed.body[2];
                    var price = parseFloat(parsed.body[3]);
                    if (!(type && name && !isNaN(price))) {
                        socket.tellraw("[§cError§f] " + lang("game", "ol", "parameter error"));
                        return;
                    }
                    if (price < 0 || price > 10000) {
                        socket.tellraw("[§cError§f] " + lang("game", "ol", "price", "range error"));
                        return;
                    }
                    getTypes(function (arr) {
                        if (arr instanceof Error) {
                            socket.tellraw("[§cError§f] " + lang("game", "ol", "server error"));
                            socket.tellraw("§6" + String(arr));
                            logger.error(arr);
                        } else {
                            if (arr.indexOf(type) !== -1) {
                                modifyPrice(type, name, price, function (cost) {
                                    if (cost instanceof Error) {
                                        socket.tellraw("§6" + String(cost));
                                    } else {
                                        socket.tellraw("[§lOnline§r§f] " + lang("game", "ol", "price", "success"));
                                    }
                                });
                            } else {
                                socket.tellraw("[§cError§f] " + lang("game", "ol", "type error"));
                            }
                        }
                    });
                    break;
                case "signin":
                    signin(function (coin, exp) {
                        if (coin instanceof Error) {
                            socket.tellraw("§6" + String(coin));
                        } else {
                            socket.tellraw(`${lang("game", "ol", "signin")} §g+${coin}§f, Exp §b+${exp}`);
                        }
                    });
                    break;
                default:
                    socket.tellraw("§6" + lang("game", "ol", "invalid option"));
                    break;
            }

            break;
        case "pixel":
            if (parsed.body[0] === "help" || parsed.opt.h || parsed.opt["-help"]) {
                socket.tellraw("§a" + lang("game", "pixel", "help", "title"));
                socket.tellraw("pixel [Png/Gif File]         " + lang("game", "pixel", "help", "pixel"));
                socket.tellraw("pixel path <File ID>         " + lang("game", "pixel", "help", "path"));
                socket.tellraw("pixel speed [Speed]          " + lang("game", "pixel", "help", "speed"));
                socket.tellraw("§d--| " + lang("game", "pixel", "help", "option") + " |--");
                socket.tellraw("  §e-p=PATH      --path        §7" + lang("game", "pixel", "help", "-p"));
                socket.tellraw("  §e-o=x/y/z     --orientation §7" + lang("game", "pixel", "help", "-o"));
                socket.tellraw("  §e-i=INDEX     --index       §7" + lang("game", "pixel", "help", "-i"));
                socket.tellraw("  §e-m=Mode      --mode        §7" + lang("game", "pixel", "help", "-m"));
                socket.tellraw("§7" + lang("game", "pixel", "help", "support"));
                socket.tellraw("  §e-g           --gauss       §7" + lang("game", "pixel", "help", "-g"));
                socket.tellraw("  §e-r=Radius    --radius      §7" + lang("game", "pixel", "help", "-r"));
                socket.tellraw("  §e-s=Sigma     --sigma       §7" + lang("game", "pixel", "help", "-s"));
                socket.tellraw("  §e-f[=Height]  --follow      §7" + lang("game", "pixel", "help", "-f"));
                socket.tellraw("  §e-c=ChunkSize --chunksize   §7" + lang("game", "pixel", "help", "-c"));
                socket.tellraw("§7e.g. pixel myimg.png");
                socket.tellraw("§7e.g. pixel path 0");
                socket.tellraw("§7e.g. pixel myimg.png -m=gauss -r=5 -s=1");
                socket.tellraw("§7e.g. pixel myimg.png -m=pale -f=50 -c=32");
                socket.tellraw("§7e.g. pixel myimg.png -p=./public/ -c=16 -m=hell");
                socket.tellraw(lang("game", "pixel", "help", "tip"));
                return;
            } else if (parsed.body[0] === "mhelp") {
                socket.tellraw("§a§l---- §f" + lang("game", "pixel", "mhelp", "title") + "§a ----");
                socket.tellraw(lang("game", "pixel", "mhelp", "support"));
                socket.tellraw("§gnormal: §b" + lang("game", "pixel", "mhelp", "normal"));
                socket.tellraw("§gcontrast: §b" + lang("game", "pixel", "mhelp", "contrast"));
                socket.tellraw("§gpale: §b" + lang("game", "pixel", "mhelp", "pale"));
                socket.tellraw("§gpuprityc: §b" + lang("game", "pixel", "mhelp", "puprityc"));
                socket.tellraw("§gdisorder: §b" + lang("game", "pixel", "mhelp", "disorder"));
                socket.tellraw("§ghell: §b" + lang("game", "pixel", "mhelp", "hell"));
                socket.tellraw("§f§l---- " + lang("game", "pixel", "mhelp", "gauss") + " ----");
                socket.tellraw("§g-g: " + lang("game", "pixel", "mhelp", "-g"));
                socket.tellraw("§a-- " + lang("game", "pixel", "mhelp", "tip") + " --");
                return;
            } else if (parsed.body[0] === "speed") {
                var speed = parseInt(parsed.body[1]);
                if (!speed) {
                    socket.tellraw("[§6Error§f] " + lang("game", "pixel", "speed", "number error"));
                } else if (speed < 0 || speed > 1000) {
                    socket.tellraw("[§6Error§f] " + lang("game", "pixel", "speed", "range error"));
                } else {
                    cmdv.pixel.speed = speed;
                    socket.tellraw("[§aPixel§f] " + lang("game", "pixel", "speed", "success") + ": §b" + speed);
                }
                return;
            } else if (parsed.body[0] === undefined) {
                socket.tellraw("[§6Error§f] " + lang("game", "pixel", "error", "parameter"));
                return;
            }
            if (parsed.body[0] === "path") {
                var pobj = cmdv.path;
                if (!pobj.dir || !pobj.files) {
                    socket.tellraw(`[§6Error§f] ${lang("game", "path", "error", "init")}`);
                    return;
                }
                var pathid = parseInt(parsed.body[1]);
                if (isNaN(pathid)) {
                    socket.tellraw(`[§6Error§f] Path ID '${parsed.body[1] || ""}' ${lang("game", "path", "error", "id")}`);
                    return;
                }
                socket.tellraw(`[§dPath§f] ${lang("game", "path", "loading")}: ${pathid}`);
                var pathdir = cmdv.path.dir;
                var pathfile = cmdv.path.files[pathid];
                if (!pathdir || !pathfile) {
                    socket.tellraw("[§6Error§f] " + lang("game", "path", "error", "file"));
                    return;
                }
                socket.tellraw(`[§dPath§f] directory: §b${pathdir}§f, file: §b${pathfile}`);
                parsed.opt.p = pathdir;
                parsed.body[0] = pathfile;
            }
            //Task Speed Help
            var filepath = getFilePath(parsed);
            var file = filepath[0];
            var path = filepath[1];
            var RGB;
            filepath = path + file;
            var pos = cmdv.pos.position[parsed.opt.i || parsed.opt['-index'] || 0];
            var follow = parsed.opt.f || parsed.opt['-follow'] || false;
            var tpHeight = parseInt(follow) || 50;
            var chunksize = parseInt(parsed.opt.c) || parseInt(parsed.opt['-chunksize']) || 32;
            var isGauss = parsed.opt.g || parsed.opt['-gauss'] || false;
            var facing = parsed.opt.o || parsed.opt['-orientation'] || "y";
            if (facing !== "x" && facing !== "y" && facing !== "z") {
                socket.tellraw("[§6Error§f] " + lang("game", "pixel", "facing error"));
                return;
            }
            socket.tellraw("[§aPixel§f] Orientation: §6" + facing);
            switch (facing) {
                case "x":
                    RGB = RGB_X;
                    break;
                case "y":
                    RGB = RGB_Y;
                    break;
                case "z":
                    RGB = RGB_Z;
                    break;
            }
            if (follow !== false) {
                socket.tellraw("[§aPixel§f] " + lang("game", "pixel", "follow"));
                socket.tellraw("[§aPixel§f] " + lang("game", "pixel", "follow height") + ": " + tpHeight);
            }
            socket.tellraw("[§aPixel§f] Speed: §e" + cmdv.pixel.speed + "§f block/s");
            if (!pos) {
                socket.tellraw("[§6Error§f] " + lang("game", "pixel", "pos error"));
                return;
            }
            var suffix = getSuffix(file);
            if (suffix !== ".png" && suffix !== ".gif") {
                socket.tellraw("[§6Error§f] " + lang("game", "pixel", "format error"));
                return;
            }
            var mode = parsed.opt.m || parsed.opt['-mode'] || "normal";
            if (mode !== "normal" && mode !== "contrast" && mode !== "puprityc" && mode !== "hell" && mode !== "disorder" && mode !== "pale") {
                socket.tellraw("[§6Error§f] " + lang("game", "pixel", "mode error"));
                return;
            }
            socket.tellraw("[§aPixel§f] Mode: §6" + mode);
            if (isGauss) {
                var radius = parseInt(parsed.opt.r) || parseInt(parsed.opt['-radius']) || 3;
                var sigma = parseInt(parsed.opt.s) || parseInt(parsed.opt['-sigma']) || 1;
                socket.tellraw("[§aPixel§f] " + lang("game", "pixel", "radius") + ": §b" + radius);
                socket.tellraw("[§aPixel§f] " + lang("game", "pixel", "sigma") + ": §7" + sigma);
            }
            getPixels(filepath, function (err, pixels) {
                if (err) {
                    socket.tellraw("[§6Error§f] " + lang("game", "pixel", "bad path"));
                    return;
                } else {
                    socket.tellraw("[§aPixel§f] " + lang("game", "pixel", "start"));
                    if (pixels.shape.length === 4) {
                        pixels.data = pixels.data.slice(0, pixels.data.length / pixels.shape[0]);
                        pixels.shape.shift();
                    }

                    var data = pixels.data;
                    if (isGauss) {
                        data = gaussBlur({ data, width: pixels.shape[0], height: pixels.shape[1], radius, sigma }).data;
                    }
                    var width = pixels.shape[0];
                    var height = pixels.shape[1];
                    var i = 0;
                    var pos_relative = [0, 0];
                    var chunk = [0, 0];
                    var cwidth = width / chunksize > 1 ? chunksize : width;
                    var cheight = height / chunksize > 1 ? chunksize : height;
                    var tk = new task(socket, "§aPixel§f - " + file);
                    tk.circleInterval[0] = 5;
                    tk.resume = __for__;
                    tk.display.content[1] = drawProgress(60, 0);
                    if (facing === "x") socket.exec(`fill ${pos.x + pos_relative[0]} ${pos.y - pos_relative[1]} ${pos.z} ${pos.x + pos_relative[0] + cwidth - 1} ${pos.y - (pos_relative[1] + cheight - 1)} ${pos.z} dirt 0`);
                    else if (facing === "z") socket.exec(`fill ${pos.x} ${pos.y - pos_relative[1]} ${pos.z + pos_relative[0]} ${pos.x} ${pos.y - (pos_relative[1] + cheight - 1)} ${pos.z + pos_relative[0] + cwidth - 1} dirt 0`);
                    __for__();
                    function __for__() {
                        tk.display.content[1] = `Pos: §3${parseInt(pos.x + pos_relative[0] + chunk[0])} ${parseInt(pos.y)} ${parseInt(pos.z + pos_relative[1] + chunk[1])}§f, Speed: §b${cmdv.pixel.speed} b/s`;
                        tk.display.content[2] = drawProgress(60, i / data.byteLength);

                        var curr = ((pos_relative[1] + chunk[1]) * (width + 1) + pos_relative[0] + chunk[0] - pos_relative[1] - chunk[1]) * 4;
                        var current_rgb = [data[curr], data[curr + 1], data[curr + 2], data[curr + 3]];//R, G, B, A
                        switch (mode) {
                            case "contrast":
                                current_rgb[0] = 256 - current_rgb[0];
                                current_rgb[1] = 256 - current_rgb[1];
                                current_rgb[2] = 256 - current_rgb[2];
                                break;
                            case "pale":
                                var avg = (current_rgb[0] + current_rgb[1] + current_rgb[2]) / 3;
                                current_rgb[0] = current_rgb[1] = current_rgb[2] = avg;
                                break;
                        }
                        i += 4;
                        var end = [];
                        for (var l = 0; l < RGB.length; l++) {
                            var arr = RGB[l][2];
                            var variance = (current_rgb[0] - arr[0]) ** 2 + (current_rgb[1] - arr[1]) ** 2 + (current_rgb[2] - arr[2]) ** 2;
                            end.push({
                                variance,
                                block: RGB[l][0],
                                data: RGB[l][1]
                            });
                        }
                        end = quickSortBR(end, ['variance']);
                        switch (mode) {
                            case "purityc":
                                var elem = end[end.length - 1];
                                break;
                            case "disorder":
                                var elem = end[parseInt(end.length * .5)];
                                break;
                            case "hell":
                                var elem = end[parseInt(end.length * .9)];
                                break;
                            default:
                                var elem = end[0];
                                break;
                        }
                        switch (facing) {
                            case "y":
                                socket.setblock(pos.x + pos_relative[0] + chunk[0], pos.y, pos.z + pos_relative[1] + chunk[1], elem.block, elem.data);
                                break;
                            case "x":
                                socket.setblock(pos.x + pos_relative[0] + chunk[0], pos.y - (pos_relative[1] + chunk[1]), pos.z, elem.block, elem.data);
                                break;
                            case "z":
                                socket.setblock(pos.x, pos.y - pos_relative[1] - chunk[1], pos.z + pos_relative[0] + chunk[0], elem.block, elem.data);
                                break;
                        }
                        var wait;
                        if (++chunk[0] >= cwidth) {
                            chunk[0] = 0;
                            if (++chunk[1] >= cheight) {
                                if ((pos_relative[0] += cwidth) >= width) {
                                    pos_relative[1] += cheight;
                                    pos_relative[0] = 0;
                                    wait = 1500;
                                }
                                chunk = [0, 0];
                                cwidth = pos_relative[0] + chunksize > width ? width - pos_relative[0] : chunksize;
                                cheight = pos_relative[1] + chunksize > height ? height - pos_relative[1] : chunksize;
                                if (facing === "x") socket.exec(`fill ${pos.x + pos_relative[0]} ${pos.y - pos_relative[1]} ${pos.z} ${pos.x + pos_relative[0] + cwidth - 1} ${pos.y - (pos_relative[1] + cheight - 1)} ${pos.z} dirt 0`);
                                else if (facing === "z") socket.exec(`fill ${pos.x} ${pos.y - pos_relative[1]} ${pos.z + pos_relative[0]} ${pos.x} ${pos.y - (pos_relative[1] + cheight - 1)} ${pos.z + pos_relative[0] + cwidth - 1} dirt 0`);
                                if (follow) {
                                    switch (facing) {
                                        case "y":
                                            socket.exec(`tp ${pos.x + pos_relative[0] + chunk[0]} ${pos.y + tpHeight} ${pos.z + pos_relative[1] + chunk[1]}`);
                                            break;
                                        case "x":
                                            socket.exec(`tp ${pos.x + pos_relative[0] + chunk[0]} ${pos.y - (pos_relative[1] + chunk[1])} ${pos.z + tpHeight}`);
                                            break;
                                        case "z":
                                            socket.exec(`tp ${pos.x + tpHeight} ${pos.y - pos_relative[1] - chunk[1]} ${pos.z + pos_relative[0] + chunk[0]}`);
                                            break;
                                    }
                                }
                            }
                        }
                        if (i < data.byteLength) {
                            if (!tk.pause) {
                                setTimeout(() => {
                                    __for__();
                                }, wait || (1000 / cmdv.pixel.speed));
                            } else {
                                tk.display.content[2] = drawProgress(60, i / data.byteLength, "6");
                            }
                        } else {
                            gameTaskSys.removeTask(tk);
                            socket.tellraw("[§aPixel§f] " + lang("game", "pixel", "complete"));
                        }

                    }
                }
                // console.log(pixels);
                // console.log("got pixels", pixels.shape.slice());
            });
            break;
        case "help":
            socket.tellraw("§a---- §e" + lang("game", "help", "title") + "§a ----");
            socket.tellraw("---- Functional Commands ----");
            socket.tellraw("task      §g" + lang("game", "help", "task"));
            socket.tellraw("exec      §7" + lang("game", "help", "exec"));
            socket.tellraw("mid       §7" + lang("game", "help", "mid"));
            socket.tellraw("pos       §a" + lang("game", "help", "pos"));
            socket.tellraw("import    §7" + lang("game", "help", "import"));
            socket.tellraw("import    §7§o" + lang("game", "help", "importTip"));
            socket.tellraw("export    §7" + lang("game", "help", "export"));
            socket.tellraw("export    §7§o" + lang("game", "help", "exportTip"));
            socket.tellraw("pixel     §7" + lang("game", "help", "pixel"));
            socket.tellraw("lineto    §7" + lang("game", "help", "lineto"));
            socket.tellraw("replay    §7" + lang("game", "help", "replay"));
            socket.tellraw("circle    §7" + lang("game", "help", "circle"));
            socket.tellraw("ellipse   §7" + lang("game", "help", "ellipse"));
            socket.tellraw("track     §7" + lang("game", "help", "track"));
            socket.tellraw("subtitle  §7" + lang("game", "help", "subtitle"));
            socket.tellraw("ping      §7" + lang("game", "help", "ping"));
            socket.tellraw("---- Auxiliary Commands ----");
            socket.tellraw("path      §7" + lang("game", "help", "path"));
            socket.tellraw("repair    §3" + lang("game", "help", "repair"));
            socket.tellraw("time      §7" + lang("game", "help", "time"));
            socket.tellraw("ol        §b" + lang("game", "help", "ol"));
            socket.tellraw("version   §7" + lang("game", "help", "version"));
            socket.tellraw("worldchat §7" + lang("game", "help", "worldchat"));
            socket.tellraw("close     §7" + lang("game", "help", "close"));
            socket.tellraw("---- Advanced Commands ----");
            socket.tellraw("agent       §7" + lang("game", "help", "agent"));
            socket.tellraw("closechat   §7" + lang("game", "help", "closechat"));
            socket.tellraw("querytarget §7" + lang("game", "help", "querytarget"));
            socket.tellraw("listd       §7" + lang("game", "help", "listd"));
            socket.tellraw("---- Tips ----");
            socket.tellraw(lang("game", "help", "tip"));
            socket.tellraw("§7e.g. task --help");
            //...
            break;
        case "worldchat":
            socket.tellraw("§a" + lang("game", "worldchat", "help", "title"));
            socket.tellraw("! [Message]    " + lang("game", "worldchat", "help", "send"));
            socket.tellraw("\uff01 [Message]    " + lang("game", "worldchat", "help", "send2"));
            break;
        case "repair":
            if (parsed.body[0] === "help" || parsed.opt.h || parsed.opt["-help"]) {
                socket.tellraw("§a" + lang("game", "repair", "help", "title"));
                socket.tellraw("repair help             §7" + lang("game", "repair", "help", "help"));
                socket.tellraw("repair                  §7" + lang("game", "repair", "help", "repair"));
                socket.tellraw("repair [Start] [End]    §7" + lang("game", "repair", "help", "repairx"));
                socket.tellraw("repair state            §7" + lang("game", "repair", "help", "state"));
                // socket.tellraw("repair speed [Speed]    §7View command status");
                socket.tellraw("repair rm [Start] [End] §7" + lang("game", "repair", "help", "rm"));
                socket.tellraw("§d--| " + lang("game", "repair", "help", "option") + " |--");
                socket.tellraw("  §e-h --help   §f" + lang("game", "repair", "help", "-h"));
                socket.tellraw("§7e.g. repair");
                socket.tellraw("§7e.g. repair state");
                socket.tellraw("§7e.g. repair rm 0 100");
                socket.tellraw("§7e.g. repair 0 1000");
                socket.tellraw("§7§o" + lang("game", "repair", "help", "tip"));
                return;
            } else if (parsed.body[0] === "state") {
                socket.tellraw(`[§7Repair§f] There are §6${socket.repair.length} §f/ §a${config.repairStorageLength} §flog records`);
            } else if (parsed.body[0] === "rm") {
                var start = parseInt(parsed.body[1]);
                var end = parseInt(parsed.body[2]);
                if (isNaN(start)) start = 0;
                if (isNaN(end)) end = socket.repair.length;
                if (end > socket.repair.length) end = socket.repair.length;
                socket.tellraw(`[§7Repair§f] ${lang("game", "repair", "del")}: §3${start} - ${end}`);
                socket.repair.splice(start, end);
                socket.tellraw(`[§7Repair§f] Removed §e${end - start}§f log records`);
                socket.tellraw(`[§7Repair§f] There are §6${socket.repair.length} §f/ §a${config.repairStorageLength} §flog records`);
            }
            //  else if (parsed.body[0] === "speed") {
            //     var speed = parseInt(parsed.body[1]);
            //     if (!speed) {
            //         socket.tellraw("[§7Retry§f] Speed now: " + cmdv.repair.speed + " block/s");
            //         socket.tellraw("[§6Error§f] Invalid number");
            //     } else if (speed < 0 || speed > 1000) {
            //         socket.tellraw("[§6Error§f] The speed range must be within 0 to 1000");
            //     } else {
            //         cmdv.repair.speed = speed;
            //         socket.tellraw("[§7Repair§f] The repair speed is set to: §b" + speed);
            //     }
            // }
            else {
                var start = parseInt(parsed.body[0]);
                var end = parseInt(parsed.body[1]);
                if (isNaN(start)) start = 0;
                if (isNaN(end)) end = socket.repair.length;
                if (end > socket.repair.length) end = socket.repair.length;
                socket.tellraw(`[§7Repair§f] ${lang("game", "repair", "range")}: §d${start} - ${end}`);
                var len = end - start;
                var failed = 0;
                var tk = new task(socket, "§7Repair§f");
                tk.circleInterval[0] = 5;
                tk.display.content[1] = "Pos: x, y, z  0 / 1000";
                tk.display.content[2] = "0% " + drawProgress(60, 0);
                // tk.onclose = function () {
                //     socket.tellraw("[§7Repair§f] The task has been terminated.");
                // }
                __for__(start);
                function __for__(i, retry) {
                    // console.log("i", i);
                    if (tk.pause) {
                        tk.resume = __for__.bind(this, i, retry);
                        tk.display.content[2] = `§e${(i / len * 100).toFixed(1)}§f% ${drawProgress(60, i / len, "6")}`;
                        return;
                    }
                    if (i >= len) {
                        socket.tellraw(`[§7Repair§f] §a${lang("game", "repair", "complete")}`);
                        socket.tellraw(`[§7Repair§f] ${lang("game", "repair", "total")}: §b${len}§f ${lang("game", "repair", "failed")}: §6${failed}`);
                        gameTaskSys.removeTask(tk);
                        return;
                    }
                    var data = socket.repair[start];
                    if (!data) {
                        socket.tellraw("[§6Error§f] " + lang("game", "repair", "error", "data"));
                        gameTaskSys.removeTask(tk);
                        return;
                    }
                    tk.display.content[1] = `Pos: §3${data[1]}, ${data[2]}, ${data[3]}  §2${i} §f/ §a${len}`;
                    tk.display.content[2] = `§e${(i / len * 100).toFixed(1)}§f% ${drawProgress(60, i / len)}`;
                    // console.log(socket.repair[i]);
                    socket.exec(`setblock ${data[1]} ${data[2]} ${data[3]} ${data[4]} ${data[5]}`, function (json) {
                        if (json) {
                            // console.log(json.body.statusCode, json.body.statusMessage);
                            if (json.body.statusCode < 0) {
                                if (json.body.statusMessage?.indexOf("世界外") !== -1 || json.body.statusMessage.indexOf("outside") !== -1) {
                                    socket.exec(`tp ${data[1]} ${data[2]} ${data[3]}`);
                                    if ((retry ?? 0) < 3) setTimeout(() => {
                                        __for__(i, (retry ?? -1) + 1);
                                    }, config.repairRetryInterval);
                                    else {
                                        // setTimeout(() => {
                                        ++start;
                                        failed++;
                                        socket.tellraw(`[§7Repair§f] §e${data[1]}, ${data[2]}, ${data[3]}§6 Repair Failed !`);
                                        __for__(++i);
                                        // }, 1000 / cmdv.repair.speed);
                                    }
                                } else if (json.body.statusMessage?.indexOf("无法放置") !== -1 || json.body.statusMessage.indexOf("placed" !== -1)) {
                                    socket.repair.splice(start, 1);
                                    // setTimeout(() => {
                                    __for__(++i);
                                    // }, 1000 / cmdv.repair.speed);
                                } else {
                                    socket.tellraw("[§7Repair§f] Repair Timeout!");
                                }
                            } else {
                                // setTimeout(() => {
                                socket.repair.splice(start, 1);
                                __for__(++i);
                                // console.log(1000/cmdv.repair.speed);
                                // }, 1000 / cmdv.repair.speed);
                            }
                        } else {
                            socket.tellraw(`[§6Error§f] Receive timeout!`);
                        }
                    });
                }
            }
            break;
        case "track":
            if (parsed.body[0] === "help" || parsed.opt.h || parsed.opt["-help"]) {
                socket.tellraw("§a" + lang("game", "track", "help", "title"));
                socket.tellraw("track pos [Pos ID]         §7" + lang("game", "track", "help", "pos"));
                socket.tellraw("track selector [Selector]  §7" + lang("game", "track", "help", "selector"));
                socket.tellraw("§d--| " + lang("game", "track", "help", "option") + " |--");
                socket.tellraw("  §e-p=Particle  --particle   §7" + lang("game", "track", "help", "-p"));
                socket.tellraw("  §e-l=Length    --length     §7" + lang("game", "track", "help", "-l"));
                socket.tellraw("  §e-h           --help       §7" + lang("game", "track", "help", "-h"));
                socket.tellraw("§7e.g. track pos 0");
                socket.tellraw("§7e.g. track selector @e[type=villager]");
                return;
            } else if (parsed.body[0] === undefined) {
                socket.tellraw("[§6Error§f] " + lang("game", "track", "error", "parameter"));
                return;
            }
            var particle = parsed.opt.p || parsed.opt['-particle'] || "minecraft:basic_flame_particle";
            var length = parsed.opt.l || parsed.opt['-length'] || 5;
            var tk = new task(socket, "§cAuto Track§f");
            tk.circleInterval[0] = 4;
            length = parseInt(length) || 5;
            if (length < 1 || length > 100) {
                socket.tellraw("[§6Error§f] " + lang("game", "track", "length error"));
                return;
            }
            socket.tellraw("[§cTrack§f] " + lang("game", "track", "len") + ": §3" + length);
            switch (parsed.body[0]) {
                case "pos":
                    var index = parseInt(parsed.body[1]) || 0;
                    socket.tellraw(`[§cTrack§f] ${lang("game", "track", "selected")}: §aPos.${index}`);
                    var pos = cmdv.pos.position[index];
                    if (!pos) {
                        socket.tellraw(`[§6Error§f] Pos.${index} ${lang("game", "track", "not exist")}`);
                        return;
                    }
                    tk.resume = __for__;
                    __for__();
                    function __for__() {
                        socket.exec("querytarget @s", function (json) {
                            if (json.body.statusCode >= 0) {
                                var data = JSON.parse(json.body.details)[0];
                                data.position.y--;
                                var vector = [pos.x - data.position.x, pos.y - data.position.y, pos.z - data.position.z];
                                var len = math.vectorML(vector);
                                var unitVector = [vector[0] / len, vector[1] / len, vector[2] / len];
                                var spacing;
                                tk.display.content[1] = `Target: §e${parseInt(pos.x)}, ${parseInt(pos.y)}, ${parseInt(pos.z)}§f Distance: §a${len.toFixed(2)}§2m§f`;
                                for (var i = 0; i < length; i += .5) {
                                    var x = data.position.x + unitVector[0] * i,
                                        y = data.position.y + unitVector[1] * i,
                                        z = data.position.z + unitVector[2] * i;
                                    var _spacing = math.twoPointSpacing([x, y, z], [pos.x, pos.y, pos.z]);
                                    if (spacing && _spacing > spacing) {
                                        break;
                                    }
                                    spacing = _spacing;
                                    socket.exec(`particle ${particle} ${x} ${y} ${z}`);
                                }
                                if (tk.alive && !tk.pause) setTimeout(__for__, 200);
                            } else {
                                socket.tellraw("[§6Error§f] " + lang("game", "track", "unexpected error"));
                                gameTaskSys.removeTask(tk);
                            }
                        });
                    }
                    break;
                case "selector":
                    var selector = parsed.body[1];
                    socket.tellraw(`[§cTrack§f] ${lang("game", "track", "selector")}: §a${selector}`);
                    if (!selector) {
                        socket.tellraw(`[§6Error§f] ${lang("game", "track", "invalid selector")}`);
                        return;
                    }
                    tk.resume = __for__2;
                    __for__2();
                    function __for__2() {
                        socket.exec("querytarget @s", function (json) {
                            socket.exec("querytarget " + selector, function (json2) {
                                if (json.body.statusCode >= 0 && json2.body.statusCode >= 0) {
                                    var data = JSON.parse(json.body.details)[0];
                                    var pos = JSON.parse(json2.body.details)[0].position;
                                    data.position.y--;
                                    var vector = [pos.x - data.position.x, pos.y - data.position.y, pos.z - data.position.z];
                                    var len = math.vectorML(vector);
                                    var unitVector = [vector[0] / len, vector[1] / len, vector[2] / len];
                                    var spacing;
                                    tk.display.content[1] = `Target: §e${parseInt(pos.x)}, ${parseInt(pos.y)}, ${parseInt(pos.z)}§f Distance: §a${len.toFixed(2)}§2m§f`;
                                    for (var i = 0; i < length; i += .5) {
                                        var x = data.position.x + unitVector[0] * i,
                                            y = data.position.y + unitVector[1] * i,
                                            z = data.position.z + unitVector[2] * i;
                                        var _spacing = math.twoPointSpacing([x, y, z], [pos.x, pos.y, pos.z]);
                                        if (spacing && _spacing > spacing) {
                                            break;
                                        }
                                        spacing = _spacing;
                                        socket.exec(`particle ${particle} ${x} ${y} ${z}`);
                                    }
                                    if (tk.alive && !tk.pause) setTimeout(__for__2, 200);
                                } else {
                                    socket.tellraw("[§6Error§f] " + lang("game", "track", "unexpected error"));
                                    gameTaskSys.removeTask(tk);
                                }
                            });

                        });
                    }
                    break;
                default:
                    gameTaskSys.removeTask(tk);
                    socket.tellraw("[§6Error§f] " + lang("game", "track", "invalid parameter"));
                    break;
            }
            break;
        case "rimspace":
            commandRunner(socket, "task dazzle");
            break;
        case "path":
            if (parsed.body[0] === "help" || parsed.opt.h || parsed.opt['-help']) {
                socket.tellraw("§a" + lang("game", "path", "help", "title"));
                socket.tellraw("path [Folder Path]         §7" + lang("game", "path", "help", "path"));
                socket.tellraw("§d--| " + lang("game", "path", "help", "option") + " |--");
                socket.tellraw("  §e-h           --help       §7" + lang("game", "path", "help", "-h"));
                socket.tellraw("§7e.g. path");
                socket.tellraw("§7e.g. path C:/Users/Administrator/Desktop/");
                return;
            }
            var folderPath = parsed.body[0] || './public/';
            var check = folderPath[folderPath.length - 1];
            if (check !== "/" && check !== "\\") folderPath += "/";
            socket.tellraw(`[§dPath§f] ${lang("game", "path", "load")}: §g${folderPath}§f ...`);
            try {
                cmdv.path.dir = folderPath;
                var files = fs.readdirSync(folderPath);
                cmdv.path.files = files;
                socket.tellraw(`[§dPath§f] ${lang("game", "path", "saved")}`);
                socket.tellraw(`[§dPath§f] ---- Path Info ----`);
                socket.tellraw(`[§dPath§f] §7FileID    FileName`);
                for (var i = 0; i < files.length; i++) {
                    socket.tellraw(`[§dPath§f] <${i}>       ${files[i]}`);
                }
            } catch (err) {
                socket.tellraw("[§cError§f] " + lang("game", "path", "error", "exist"));
            }
            break;
        case "subtitle":
            if (parsed.body[0] === "help" || parsed.opt.h || parsed.opt["-help"] || parsed.body[0] === undefined) {
                socket.tellraw("§a" + lang("game", "subtitle", "help", "title"));
                socket.tellraw("subtitle <Title>                      §7" + lang("game", "subtitle", "help", "subtitle"));
                socket.tellraw("subtitle color [Color1, [Color2,...]] §7" + lang("game", "subtitle", "help", "color"));
                socket.tellraw("§d--| " + lang("game", "subtitle", "help", "option") + " |--");
                socket.tellraw("  §e-r  --reverse                     §7" + lang("game", "subtitle", "help", "-r"));
                socket.tellraw("  §e-h  --help                        §7" + lang("game", "subtitle", "help", "-h"));
                socket.tellraw("§7e.g. subtitle mytext");
                socket.tellraw("§7e.g. subtitle color A B C D E");
                return;
            }
            // if (parsed.body[0] === undefined) {
            //     socket.tellraw("[§6Error§f] " + lang("game", "subtitle", "error", "parameter"));
            //     return;
            // }
            if (parsed.body[0] === "color") {
                parsed.body.shift();
                if (parsed.body.length === 0) {
                    socket.tellraw("[§6Error§f] " + lang("game", "subtitle", "error", "color"));
                    return;
                }
                cmdv.subtitle.color = parsed.body;
                socket.tellraw("[§9Subtitle§f] " + lang("game", "subtitle", "color") + ": " + parsed.body.join(", "));
                return;
            }
            var text = new textColorScroll(parsed.body.join(" "), cmdv.subtitle.color);
            var tk = new task(socket);
            var reverse = parsed.opt.r || parsed.opt['-reverse'] || false;
            tk.display.content[0] = text.refresh(reverse);
            tk.func = function () {
                tk.display.content[0] = text.refresh(reverse);
            }
            socket.tellraw("[§9Subtitle§f] Text: " + parsed.body[0]);
            if (reverse) socket.tellraw("[§9Subtitle§f] Reverse: §eOn");
            else socket.tellraw("[§9Subtitle§f] Reverse: §eOff");
            socket.tellraw("[§9Subtitle§f] TaskID: §a" + tk.id);
            break;
        case "agent":
            if (parsed.body[0] === "help" || parsed.opt.h || parsed.opt["-help"] || parsed.body[0] === undefined) {
                socket.tellraw("§a" + lang("game", "agent", "help", "title"));
                socket.tellraw("§f>> Source of this help page: §3Minecraft WIKI§f <<");
                socket.tellraw("agent §7<command: AgentDirectionCommand> <direction: AgentDirection>§7");
                socket.tellraw("agent §7<command: AgentItemCommand> <slotNum: int>");
                socket.tellraw("agent §7<command: AgentCommand>");
                socket.tellraw("agent collect §7<item: Item>");
                socket.tellraw("agent collect all");
                socket.tellraw("agent drop §7<slotNum: int> <quantity: int> <direction: AgentDirection>");
                socket.tellraw("agent place §7<slotNum: int> <direction: AgentDirection>");
                socket.tellraw("agent setitem §7<slotNum: int> <item: Item> <count: int> <aux: int>");
                socket.tellraw("agent tp §7[destination: x y z] [y-rot: float]");
                socket.tellraw("agent tp §7<destination: x y z> facing <lookAtPosition: x y z>");
                socket.tellraw("agent transfer §7<slotNum: int> <quantity: int> <dstSlotNum: int>");
                socket.tellraw("agent turn §7<direction: AgentTurnDirection>");
                socket.tellraw("§d--| " + lang("game", "agent", "help", "option") + " |--");
                socket.tellraw("  §e-h  --help                        §7" + lang("game", "agent", "help", "-h"));
                socket.tellraw("§7e.g. agent create");
                socket.tellraw("§7e.g. agent --help");
                return;
            }
            socket.exec(parsed.original, function (json) {
                if (json && json.body) {
                    socket.exec("say §f" + json.body.statusMessage);
                }
            });
            break;
        case "closechat":
            if (parsed.body[0] === "help" || parsed.opt.h || parsed.opt["-help"]) {
                socket.tellraw("§a" + lang("game", "closechat", "help", "title"));
                socket.tellraw("closechat           §7" + lang("game", "closechat", "closechat"));
                socket.tellraw("§d--| " + lang("game", "closechat", "help", "option") + " |--");
                socket.tellraw("  §e-h  --help      §7" + lang("game", "closechat", "help", "-h"));
                socket.tellraw("§7e.g. closechat");
                return;
            }
            socket.exec("closechat", function (json) {
                if (json && json.body) {
                    socket.tellraw("[§bClosechat§f] " + json.body.statusMessage || "");
                }
            });
            break;
        case "querytarget":
            if (parsed.body[0] === "help" || parsed.opt.h || parsed.opt["-help"] || parsed.body[0] === undefined) {
                socket.tellraw("§a" + lang("game", "querytarget", "help", "title"));
                socket.tellraw("querytarget <victim: target>");
                socket.tellraw("§d--| " + lang("game", "querytarget", "help", "option") + " |--");
                socket.tellraw("  §e-h  --help                §7" + lang("game", "querytarget", "help", "-h"));
                socket.tellraw("§7e.g. querytarget @s");
                return;
            }
            socket.exec(parsed.original, function (json) {
                if (json && json.body) {
                    if (json.body.statusCode < 0) {
                        socket.exec("say §f" + json.body.statusMessage ?? "");
                    } else {
                        try {
                            socket.exec(`say §f${RSON.stringify(JSON.parse(json.body.details))}`);
                        } catch (err) { }
                    }
                }
            });
            break;
        case "listd":
            if (parsed.body[0] === "help" || parsed.opt.h || parsed.opt["-help"]) {
                socket.tellraw("§a" + lang("game", "listd", "help", "title"));
                socket.tellraw("listd [details: ListDetails]");
                socket.tellraw("§d--| " + lang("game", "querlistdytarget", "help", "option") + " |--");
                socket.tellraw("  §e-h  --help                §7" + lang("game", "listd", "help", "-h"));
                socket.tellraw("§7e.g. listd");
                return;
            }
            socket.exec(parsed.original, function (json) {
                if (json && json.body) {
                    try {
                        var result = JSON.parse(json.body.details.slice(4, json.body.details.indexOf("*###"))).result;
                        socket.tellraw("[§gListd§f] Detailed list of all players: ");
                        for (var i = 0; i < result.length; i++) {
                            socket.tellraw(`[${i}]`);
                            for (var r in result[i]) {
                                socket.tellraw(`    [${r}] §7${result[i][r] || ""}`);
                            }
                        }
                    } catch (err) {
                        logger.warn("Error when processing data !");
                    }
                }
            });
            break;
        case "close":
            if (parsed.body[0] === "help" || parsed.opt.h || parsed.opt["-help"]) {
                socket.tellraw("§a" + lang("game", "close", "help", "title"));
                socket.tellraw("close                §7" + lang("game", "close", "help", "disconnect"));
                socket.tellraw("§d--| " + lang("game", "close", "help", "option") + " |--");
                socket.tellraw("  §e-h  --help       §7" + lang("game", "close", "help", "-h"));
                socket.tellraw("  §e-f  --force      §7" + lang("game", "close", "help", "-f"));
                socket.tellraw("§7e.g. close");
                socket.tellraw("§7e.g. close -f");
                return;
            }
            var force = parsed.opt.f || parsed.opt['-f'] || false;
            socket.tellraw(lang("game", "close", "closing"));
            socket.exec("connect out");
            if (force) setTimeout(() => { socket.close() }, 500);
            break;
        case "ping":
            if (parsed.body[0] === "help" || parsed.opt.h || parsed.opt["-help"] || parsed.body[0] === undefined) {
                socket.tellraw("§a" + lang("game", "ping", "help", "title"));
                socket.tellraw("ping [addr]          §7" + lang("game", "ping", "help", "ping"));
                socket.tellraw("§d--| " + lang("game", "ping", "help", "option") + " |--");
                socket.tellraw("  §e-h  --help       §7" + lang("game", "ping", "help", "-h"));
                socket.tellraw("  §e-t               §7" + lang("game", "ping", "help", "-t"));
                socket.tellraw("§7e.g. ping bing.com");
                socket.tellraw("§7e.g. ping bing.com -t");
                return;
            }
            var addr = parsed.body[0];
            var opts = [];
            if (!addr) {
                socket.tellraw(`[§6Error§f] ${lang("game", "ping", "error", "parameter")}`);
                return;
            }
            opts.push(addr);
            if (parsed.opt.t) opts.push("-t");
            logger.debug(`ping ${opts.join(" ")}`);
            var startDate = Date.now();
            var ping = child_process.spawn("ping", opts, { cwd: "./" });
            var tk = new task(socket, `§8Ping§f`);
            tk.display.content[1] = `ping ${opts.join(" ")}`;
            tk.circleInterval[0] = 4;
            tk.func = function () {
                tk.display.content[0] = `${tk.defFirstDisplay()}  [${stat.platform}] [${((Date.now() - startDate) / 1000).toFixed(1)}s]`;
            }
            tk.pause = true;
            tk.resume = function () {
                tk.pause = true;
                socket.tellraw("[§6Error§f] Sorry, but this feature does not support pausing");
                socket.tellraw("[§6Error§f] You can use 'task break' to break this task");
            }
            tk.onclose = function () {
                if (!ping.killed) ping.kill("SIGINT");
            }
            ping.stdout.on("data", function (chunk) {
                socket.tellraw(chunk.toString().replace(/\r/g, ""));
            })
            ping.on("error", function (err) {
                logger.error(err);
                gameTaskSys.removeTask(tk);
            });
            ping.on("spawn", function () {
                socket.tellraw("[§8Ping§f] Ping Start.");
            });
            ping.on("exit", function (code, signal) {
                socket.tellraw(`[§8Ping§f] Ping Ended. (Code ${code})`);
                gameTaskSys.removeTask(tk);
            });
            break;
        case "circle":
            if (parsed.body[0] === "help" || parsed.opt.h || parsed.opt["-help"] || parsed.body[0] === undefined) {
                socket.tellraw("§a" + lang("game", "circle", "help", "title"));
                socket.tellraw("cirlce <r> [block] [data]    §7" + lang("game", "circle", "help", "circle"));
                socket.tellraw("§d--| " + lang("game", "circle", "help", "option") + " |--");
                socket.tellraw("  §e-h  --help        §7" + lang("game", "circle", "help", "-h"));
                socket.tellraw("  §e-f=x|y|z --facing §7" + lang("game", "circle", "help", "-f"));
                socket.tellraw("  §e-r=Deg --rotate   §7" + lang("game", "circle", "help", "-r"));
                socket.tellraw("  §e-p=PosID --pos    §7" + lang("game", "circle", "help", "-p"));
                socket.tellraw("§7e.g. circle 10");
                socket.tellraw("§7e.g. circle 6 iron_block 0");
                socket.tellraw("§7e.g. circle 5 -f=x -r=0");
                socket.tellraw("§7e.g. circle 10 --facing=z");
                socket.tellraw("§7e.g. circle 20 dirt 0 --facing=x --rotate=45");
                return;
            }
            parsed.header = "ellipse";
            parsed.body.splice(1, 0, parsed.body[0]);
            commandRunner(socket, parsed);
            break;
        case "ellipse":
            if (parsed.body[0] === "help" || parsed.opt.h || parsed.opt["-help"] || parsed.body[0] === undefined) {
                socket.tellraw("§a" + lang("game", "ellipse", "help", "title"));
                socket.tellraw("ellipse <a> <b> [block] [data]    §7" + lang("game", "ellipse", "help", "ellipse"));
                socket.tellraw("§d--| " + lang("game", "ellipse", "help", "option") + " |--");
                socket.tellraw("  §e-h  --help        §7" + lang("game", "ellipse", "help", "-h"));
                socket.tellraw("  §e-f=x|y|z --facing §7" + lang("game", "ellipse", "help", "-f"));
                socket.tellraw("  §e-r=Deg --rotate   §7" + lang("game", "ellipse", "help", "-r"));
                socket.tellraw("  §e-p=PosID --pos    §7" + lang("game", "ellipse", "help", "-p"));
                socket.tellraw("§7e.g. ellipse 10 10");
                socket.tellraw("§7e.g. ellipse 6 10 iron_block 0");
                socket.tellraw("§7e.g. ellipse 5 5 -f=x -r=0");
                socket.tellraw("§7e.g. ellipse 10 5 --facing=x");
                socket.tellraw("§7e.g. ellipse 20 10 dirt 0 --facing=x --rotate=45");
                return;
            }
            var a = parseFloat(parsed.body[0]);
            var b = parseFloat(parsed.body[1]);
            var block = parsed.body[2] || "stone";
            var data = parsed.body[3] || "0";
            var facing = parsed.opt.f || parsed.opt['-facing'] || "y";
            var rotate = parsed.opt.r || parsed.opt['-rotate'];
            var rotateTan;
            var pos = cmdv.pos.position[parsed.opt.p || parsed.opt['-pos'] || 0];
            if (!pos) {
                socket.tellraw("[§6Error§f] " + lang("game", "ellipse", "error", "coordinate"));
                return;
            }
            if (isNaN(a) || isNaN(b)) {
                socket.tellraw("[§6Error§f] " + lang("game", "ellipse", "error", "number"));
                return;
            }
            if (facing !== "x" && facing !== "y" && facing !== "z") {
                socket.tellraw("[§6Error§f] The §afacing§f should be x | y | z, but \"§6" + facing + "§f\" was accepted");
                return;
            }
            socket.tellraw("[§eEllipse§f] Block: " + (block === "stone" ? "§7" : "§f") + block);
            socket.tellraw("[§eEllipse§f] Data: §a" + data);
            socket.tellraw("[§eEllipse§f] Facing: §3" + facing);
            if (rotate !== undefined) {
                rotate = parseFloat(rotate);
                if (isNaN(rotate)) {
                    socket.tellraw("[§6Error§f] " + lang("game", "ellipse", "error", "rotate"));
                    return;
                }
                if (rotate < 0 || rotate > 360) {
                    socket.tellraw("[§6Error§f] " + lang("game", "ellipse", "error", "range"));
                    return;
                }
                rotateTan = Math.tan(math.toRad(rotate));
                socket.tellraw("[§eEllipse§f] Rotate: §b" + rotate + "§f°");
            }
            var perimeter = Math.ceil(math.ellipsePerimeter(a, b));
            perimeter *= 1.5;
            var i = -1;
            var tk = new task(socket, `§eEllipse§f a: §a${a}§f, b: §a${b}§f, f: §9${facing}`);
            tk.circleInterval[0] = 4;
            tk.display.content[1] = `0% ${drawProgress(60, 0)}`;
            tk.resume = __for__;
            __for__();
            function __for__() {
                if (++i > perimeter) {
                    gameTaskSys.removeTask(tk);
                    socket.tellraw("[§eEllipse§f] " + lang("game", "ellipse", "complete"));
                    return;
                }
                tk.display.content[1] = `${(i / perimeter * 100).toFixed(2)}% ${drawProgress(60, i / perimeter)}`;
                var deg = 360 * i / perimeter;
                var epos = math.ellipse(a, b, deg);
                switch (facing) {
                    case "y":
                        if (rotateTan) socket.setblock(pos.x + epos[0], pos.y + epos[0] * rotateTan, pos.z + epos[1], block, data);
                        else socket.setblock(pos.x + epos[0], pos.y, pos.z + epos[1], block, data);
                        break;
                    case "x":
                        if (rotateTan) socket.setblock(pos.x + epos[0], pos.y + epos[1], pos.z + epos[0] * rotateTan, block, data);
                        else socket.setblock(pos.x + epos[0], pos.y + epos[1], pos.z, block, data);
                        break;
                    case "z":
                        if (rotateTan) socket.setblock(pos.x + epos[0] * rotateTan, pos.y + epos[1], pos.z + epos[0], block, data);
                        else socket.setblock(pos.x, pos.y + epos[1], pos.z + epos[0], block, data);
                        break;
                }
                if (tk.pause || !tk.alive) {
                    tk.display.content[1] = `${(i / perimeter * 100).toFixed(2)}% ${drawProgress(60, i / perimeter, "6")}`;
                    return;
                }
                setTimeout(__for__, 5);
            }
            break;
        default:
            //Nothing
            break;
    }
    if (!isPluginEmit) emitPluginEvent('onPlayerMessage', [toPluginObject(socket), parsed]);
}








// ]}['"`,
wss.on("error", (error) => {
    logger.error(error);
});
wss.on("connection", function (socket, req) {
    // mcConnections.push(socket);
    //<INIT>
    socket.taskDisplay = 0;
    socket.taskAlways = null;
    socket.cmdv = {
        subtitle: {
            color: ["§c", "§6", "§e", "§a", "§3", "§b", "§5"]
        },
        path: {
            dir: null,
            files: null
        },
        task: {
            "dazzle": false
        },
        pos: {
            follow: false,
            position: []
        },
        export: {
            speed: 300
        },
        import: {
            speed: 500,
            follow: false,
            followHeight: null
        },
        km: {
            gamemode: 0
        },
        pixel: {
            speed: 200
        },
        repair: {
            speed: 200,
            time: 0
        }
    };
    socket.logo = `RSv${version}`;
    socket.repair = [];
    socket.uniqueId = undefined;
    socket.apiVersion = "1";
    socket.newExecute = false;
    socket.build = null;
    socket.evs = [];
    socket.dps = 0;
    socket.ldps = 0;
    socket.cps = 0;
    socket.lcps = [];
    socket.initTime = Date.now();
    socket.GameName = null;
    socket.ID = ++stat.connectionTimes;
    socket.latency = 0;
    socket.lastPingTick = Date.now();
    socket.UUID = uuidv4();
    socket.IP = req.socket.remoteAddress;
    socket.TYPE = "MC";
    socket.subscribed = {};
    socket.queue = {};
    socket.getStsticPath = function () {
        if (socket.uniqueId) {
            if (socket.pathExist) {
                return "./data/players/" + socket.uniqueId;
            } else {
                try {
                    fs.readdirSync("./data/players/" + socket.uniqueId);
                } catch (err) {
                    if (err) {
                        fs.mkdirSync("./data/players/" + socket.uniqueId);
                        socket.pathExist = true;
                    }
                }
                return "./data/players/" + socket.uniqueId;
            }
        } else {
            return "./data/players/tourist";
        }
    }
    /**
     * 
     * @param {*} cmd A Minecraft Command to send
     * @param {*} callback Callback(json[, obj]); json: Respose Data; this: Minecraft socket connection 
     * @param {*} obj Any object
     * @returns 
     */
    socket.exec = function (cmd, callback, obj) {
        //callback(this.queue[uuid], resjson) this:socket
        //this.queue: time, obj, func
        socket.cps++;
        if (!this.subscribed.PlayerMessage || this.readyState !== 1) {
            callback?.call(this, obj, null);
            return;
        }
        var uuid = uuidv4();
        if (callback instanceof Function) {
            this.queue[uuid] = {};
            this.queue[uuid].func = callback;
            this.queue[uuid].time = new Date().getTime();
            this.queue[uuid].obj = obj;
        }
        this.send(JSON.stringify({
            "body": {
                "origin": {
                    "type": "player"
                },
                "commandLine": cmd,
                "version": 1
            },
            "header": {
                "requestId": uuid,
                "messagePurpose": "commandRequest",
                "version": 1,
                "messageType": "commandRequest"
            }
        }));
    };
    socket.execute = function (player, cmd, pos, callback) {
        if (socket.newExecute) {
            socket.exec(`execute as ${player} at ${player}${pos ? " positioned " + pos.join(" ") : ""} run ${cmd}`, callback);
        } else {
            socket.exec(`execute ${player} ${pos ? pos.join(" ") : "~~~"} ${cmd}`, callback);
        }
    }
    socket.tellraw = function (msg, target) {
        socket.exec(`tellraw ${target || "@a"} {"rawtext":[{"text":"${msg}"}]}`);
    }
    socket.setblock = function (x, y, z, block, data, callback) {
        x = Math.floor(x);
        y = Math.floor(y);
        z = Math.floor(z);
        data ||= "";
        socket.exec(`setblock ${x} ${y} ${z} ${block} ${data}`, function (json) {
            callback?.call({}, json);
            if (!json) return;
            if (json.body.statusCode < 0 && (json.body?.statusMessage?.indexOf("世界外") !== -1 || json.body.statusMessage.indexOf("outside") !== -1)) {
                if (socket.repair.length < config.repairStorageLength) {
                    socket.repair.push([0, x, y, z, block, data]);
                    if (Date.now() - socket.cmdv.repair.time > 1000) {
                        socket.cmdv.repair.time = Date.now();
                        socket.tellraw(`[§7Repair§f] §6${socket.repair.length} §f/ §a${config.repairStorageLength} §7wrong command has been recorded`);
                        socket.tellraw(`[§7Repair§f] §7Execute §b'repair'§7 to try to repair all failed commands`);
                    }
                    if (socket.repair.length >= config.repairStorageLength) {
                        socket.tellraw(`[§7Repair§f] §fThe storage has §creached the upper limit.§f The repair system will §cno longer§f store for you`);
                        socket.tellraw(`[§7Repair§f] For more information about §e'repair'§f, please execute §b'repair --help'`);
                    }
                }
            }
        });
    }
    socket.subscribe = function (eventName) {
        this.subscribed[eventName] = (this.subscribed[eventName] !== undefined) ? this.subscribed[eventName] + 1 : 1;
        if (this.subscribed[eventName] === 1)
            this.send(JSON.stringify({
                "body": {
                    "eventName": eventName
                },
                "header": {
                    "requestId": "00000000-0000-0000-0000-000000000005",
                    "messagePurpose": "subscribe",
                    "version": 1,
                    "messageType": "commandRequest"
                }
            }));
    }
    socket.unsubscribe = function (eventName) {
        this.subscribed[eventName] = (this.subscribed[eventName] !== undefined) ? (this.subscribed[eventName] - 1 < 0 ? 0 : this.subscribed[eventName] - 1) : 0;
        if (this.subscribed[eventName] === 0)
            this.send(JSON.stringify({
                "body": {
                    "eventName": eventName
                },
                "header": {
                    "requestId": "00000000-0000-0000-0000-000000000005",
                    "messagePurpose": "unsubscribe",
                    "version": 1,
                    "messageType": "commandRequest"
                }
            }));
    }
    socket.subscribe("PlayerMessage");
    // socket.subscribe("BlockBroken");
    // socket.subscribe("BlockPlaced");
    // socket.subscribe("ItemUsed");
    // socket.subscribe("MobKilled");
    var initMsgev = function (data, isbin) {
        var json = JSON.parse(String(data));
        // console.log(json);
        if (json.body?.eventName === "PlayerMessage" || json.header?.eventName === "PlayerMessage") {
            socket.removeListener("message", initMsgev);
            if (json.body.properties) {
                socket.apiVersion = "2";
                socket.build = json.body.properties.Build;
                socket.on("message", onmessageOld);
            } else {
                socket.on("message", onmessage);
            }
            socket.emit("message", data, isbin);
            return;
        }
        if (json.header?.messagePurpose === "commandResponse") {
            if (this.queue[json.header.requestId]) {
                var obj = this.queue[json.header.requestId];
                delete this.queue[json.header.requestId];
                if (typeof obj.func === "function") obj.func.call(this, json, obj.obj);
            }
        }

    }
    var onmessage = function (data, isbin) {
        var json = JSON.parse(String(data));
        var evname = json.header?.eventName;
        if (evname === "PlayerMessage" && json.body.type === "chat") {
            var msg = json.body.message;
            var sender = json.body.sender;
            if (msg.indexOf("__eval__") === -1) {
                worldchat(sender, msg);
                logger.cinfo(`[ID:${socket.ID}] <${sender}> ${msg}`, "brightWhite");
            }
            try {
                commandRunner(socket, msg);
            } catch (err) {
                if (err) process.emit("uncaughtException", err);
            }
        } else if (evname) {
            for (var i = 0; i < socket.evs.length; i++) {
                if (socket.evs[i].evname === evname) {
                    // socket.evs[i].func.call(socket.evs[i], json);
                    socket.evs[i].func.call({}, json);
                }
            }
        }

        if (json.header?.messagePurpose === "commandResponse") {
            if (this.queue[json.header.requestId]) {
                var obj = this.queue[json.header.requestId];
                delete this.queue[json.header.requestId];
                delete json.header;
                if (typeof obj.func === "function") obj.func.call({}, json, obj.obj);
            }
        }

    }
    var onmessageOld = function (data, isbin) {
        var json = JSON.parse(String(data));
        var evname = json.body?.eventName;
        if (evname === "PlayerMessage" && json.body.properties.MessageType === "chat") {
            var msg = json.body.properties.Message;
            var sender = json.body.properties.Sender;
            if (msg.indexOf("__eval__") === -1) {
                worldchat(sender, msg);
                logger.cinfo(`[ID:${socket.ID}] [${socket.build}] <${sender}> ${msg}`, "brightWhite");
            }
            try {
                commandRunner(socket, msg);
            } catch (err) {
                if (err) process.emit("uncaughtException", err);
            }
        } else if (evname) {
            for (var i = 0; i < socket.evs.length; i++) {
                if (socket.evs[i].evname === evname) {
                    socket.evs[i].func.call(socket.evs[i], json);
                }
            }
        }

        if (json.header?.messagePurpose === "commandResponse") {
            if (this.queue[json.header.requestId]) {
                var obj = this.queue[json.header.requestId];
                delete this.queue[json.header.requestId];
                delete json.header;
                if (typeof obj.func === "function") obj.func.call({}, json, obj.obj);
            }
        }

    }
    socket.on("message", initMsgev);
    //</INIT>
    socket.on("pong", function (data) {
        socket.latency = new Date().getTime() - socket.lastPingTick;
    });
    if (!verified && visitor) {
        socket.tellraw(`Connecting to Rimspace using guest mode...`);
        socket.tellraw(`§7To unlock all Rimspace features, please §asign in§7 first`);
    }
    socket.tellraw(lang("game", "welcome", "0"));
    socket.tellraw(`§bRimSpace Wsserver §ev${version}`);
    socket.tellraw(`§6Welcome! Your Identity: §e${socket.ID}`);


    socket.exec("testfor @s", function (json) {
        socket.GameName = json.body.victim[0];
        logger.cinfo(`[${socket.ID}] ${socket.GameName} Connected to the server`, "brightYellow");
    });
    socket.exec("execute @s ~~~ list", function (json) {
        if (json.body.statusCode !== 0) {
            socket.newExecute = true;
        }
    });
    socket.exec("querytarget @s", function (json) {
        var data = JSON.parse(json.body.details);
        socket.UUID = data[0].uniqueId;
        socket.uniqueId = data[0].uniqueId;
        socket.VerificationPassed = true;
    });
    // if (!userJSON.eula) {
    //     var retry = 0;
    //     function showProtocol() {
    //         protocol(function (proto) {
    //             if (proto instanceof Error) {
    //                 if (retry < 10) {
    //                     retry++;
    //                     setTimeout(showProtocol, 3000);
    //                 }
    //             } else {
    //                 socket.tellraw("欢迎使用Rimspace，在使用本服务前,请您务必仔细阅读并确保已充分理解并接受本协议的全部内容");
    //                 setTimeout(() => {
    //                     socket.exec("say " + proto);
    //                     socket.tellraw("请再次确保您已认真阅读并理解本协议，您可以选择不使用本软件，但如果您使用本软件，您的使用行为将被视为对本协议全部内容的认可");
    //                 }, 2000);
    //                 userJSON.eula = true;
    //                 saveUserJSON();
    //             }
    //         });
    //     }
    //     setTimeout(showProtocol, 1000);
    // }

    if (config.safety?._ClientSimpleVerification ?? true)
        setTimeout(() => {
            if (!socket.VerificationPassed) {
                socket.close();
                logger.error("Game client verification failed");
                logger.error("Disconnecting ID:" + socket.ID + " ...");
            }
        }, 1000 * 10);

    var tk0 = new task(socket, "INIT");
    new tickTask(() => { tk0.display.content.push(lang("game", "init", "cpu")) }, 10, socket);
    new tickTask(() => { tk0.display.content.push(lang("game", "init", "mem")) }, 14, socket);
    new tickTask(() => { tk0.display.content.push(lang("game", "init", "complete")) }, 18, socket);
    new tickTask(() => { tk0.display.content.push("Welcome to RimSpace v" + version + " !") }, 22, socket);
    new tickTask(() => { gameTaskSys.removeTask(tk0) }, 82, socket);
    tk0.circleInterval[0] = 4;

    lastConnected = socket;
    emitPluginEvent("onPlayerConnection", [toPluginObject(socket)]);
    // logger.info(socket.IP + " [M]Connected.");
    logger.debug("New connection: rimspace.websocket");

});
wss.on("webConnection", function (socket, req, headerJson) {
    // webConnections.push(socket);
    class wwsFormat {
        uuid = uuidv4();
        constructor(type, value, uuid) {
            this.type = type;
            this.value = value;
            this.uuid = uuid ? uuid : this.uuid;
        }
    }
    socket.wwsFormat = wwsFormat;
    socket.sendx = function (json, callback, obj) {
        if (this.readyState !== 1) {
            callback?.call(this, null, obj);
            return;
        }
        if (callback instanceof Function) {
            this.queue[json.uuid] = {};
            this.queue[json.uuid].func = callback;
            this.queue[json.uuid].time = new Date().getTime();
            this.queue[json.uuid].obj = obj;
        }
        this.send(JSON.stringify(json));
    }
    socket.TYPE = "WEB";
    socket.queue = {};
    socket.IP = req.socket.remoteAddress;
    socket.verified = false;
    socket.on("message", function (data, isbin) {
        try {
            data = JSON.parse(data.toString());
            // console.log(data);
        } catch (err) { }
        if (data instanceof Object) {
            if (data.type === "VERIFY") {
                // console.log("Verifying");
                try {
                    // console.log(data.value);
                    if (uec.decode(data.value) === md5(config.ConsolePassword)) {
                        socket.verified = true;
                        // console.log("Verified");
                        socket.sendx(new wwsFormat("BACK", true, data.uuid));
                    }
                } catch (err) { }
            } else if (socket.verified) {
                if (data.type === "BACK") {
                    console.log("back", data);
                    try {
                        this.queue[data.uuid].func?.call(this, data, this.queue[data.uuid].obj);
                        delete this.queue[data.uuid];
                    } catch (err) { }
                } else if (data.type === "GET_LIST") {
                    var list = [];
                    for (var i = 0; i < mcConnections.length; i++) {
                        list.push([mcConnections[i].GameName, mcConnections[i].ID]);
                    }
                    socket.sendx(new wwsFormat("BACK", list, data.uuid));
                } else if (data.type === "TC") {
                    terminalCmd(data.value, true);
                } else if (data.type === "GET_POS_LIST") {
                    var soc = getSocketById(data.value);
                    if (soc)
                        socket.sendx(new wwsFormat("BACK", soc.cmdv.pos.position, data.uuid));
                    else
                        socket.sendx(new wwsFormat("BACK", [], data.uuid));
                } else if (data.type === "GET_DIR") {
                    socket.sendx(new wwsFormat("BACK", __dirname.replace(/\\/g, "/"), data.uuid));
                } else if (data.type === "READDIR") {
                    try {
                        var dir = fs.readdirSync(data.value);
                        for (var i = 0; i < dir.length; i++) {
                            var stat = fs.statSync(data.value + "/" + dir[i]);
                            dir[i] = {
                                name: dir[i],
                                isdir: stat.isDirectory(),
                                size: stat.size
                            };
                        }
                    } catch (err) {
                        socket.sendx(new wwsFormat("BACK", false, data.uuid));
                        return;
                    }
                    socket.sendx(new wwsFormat("BACK", dir, data.uuid));

                }
            }
        }

    });
    setTimeout(() => { if (!socket.verified) socket.close(); }, 10000);
    logger.info(socket.IP + " [W]Connected.");
});






function arrayToJSON(array) {
    var json = {};
    for (var i = 0; i < array.length; i++) {
        if (i % 2 === 0) json[array[i]] = array[i + 1];
    }
    return json;
}
//*UPGRADE + VERIFY
server.on('upgrade', async function upgrade(request, socket, head) {
    if (verified || visitor) {
        let args = [];
        var headerJson = arrayToJSON(request.rawHeaders);
        // console.log(headerJson);
        args[0] = headerJson;
        var ip = request.socket.remoteAddress;
        if (ip.indexOf("::1") === 0) ip = "::ffff:127.0.0.1";
        // console.log(ip);
        var passed = false;

        if (request.rawHeaders.length <= (config.safety?._lengthLimit || 10)) {
            if (ip.indexOf("::ffff:") === 0) {
                //ipv4
                // console.log("ipv4")
                var arr = ip.slice(7).split(".");
                for (var i = 0; i < config.safety.mcwsIpv4.length; i++) {
                    var allowed = config.safety.mcwsIpv4[i].split(".");
                    if ((allowed[0] === "*" || allowed[0] === arr[0])
                        && (allowed[1] === "*" || allowed[1] === arr[1])
                        && (allowed[2] === "*" || allowed[2] === arr[2])
                        && (allowed[3] === "*" || allowed[3] === arr[3])) {
                        passed = true;
                        break;
                    }
                }
            } else if (config.safety.mcwsIpv6Enable) {
                //ipv6
                passed = true;
            }
            if (passed) {
                if ((__version === 0 && mcConnections.length === 0) || (visitor && mcConnections.length === 0) || __version === 1) {
                    wss.handleUpgrade(request, socket, head, function done(ws) {
                        // console.log("done");
                        wss.emit('connection', ws, request, ...args);
                    });
                } else {
                    return;
                }
            } else {
                if (config.safety._RejectMethod === "IGNORE" || config.safety._RejectMethod === undefined) {
                    return;
                } else if (config.safety._RejectMethod === "DESTROY") {
                    request._destroy(403, (err) => { });
                }
            }
        } else if (verified) {
            if (ip.indexOf("::ffff:") === 0) {
                //ipv4
                var arr = ip.slice(7).split(".");
                for (var i = 0; i < config.safety.webIpv4.length; i++) {
                    var allowed = config.safety.webIpv4[i].split(".");
                    if ((allowed[0] === "*" || allowed[0] === arr[0])
                        && (allowed[1] === "*" || allowed[1] === arr[1])
                        && (allowed[2] === "*" || allowed[2] === arr[2])
                        && (allowed[3] === "*" || allowed[3] === arr[3])) {
                        passed = true;
                        break;
                    }
                }
            } else if (config.safety.webIpv6Enable) {
                //ipv6
                passed = true;
            }
            if (passed) {
                if (headerJson.Pragma || headerJson["Cache-Control"] || headerJson["User-Agent"]) {
                    wss.handleUpgrade(request, socket, head, function done(ws) {
                        wss.emit('webConnection', ws, request, ...args);
                    });
                }
            } else {
                if (config.safety._RejectMethod === "IGNORE") {
                    return;
                } else if (config.safety._RejectMethod === "DESTROY") {
                    request._destroy(403, (err) => { });
                }
            }
        }
    } else {
        return;
    }

    // console.log(request.httpVersionMajor)
    // console.log(request.httpVersionMinor)
    // console.log(request.upgrade)
    // console.log(request.url) //?
    // console.log(request.method) //?
    // console.log(request.sec)
    // return; //REFUSE
});





function broadcastWeb(msg) {
    for (var i = 0; i < webConnections?.length; i++) {
        if (webConnections[i].verified)
            webConnections[i].sendx(new webConnections[i].wwsFormat("LOG", msg));
    }
}
function reader(path) {
    // return webStatic[path];
    logger.debug("[Open Source - web debug]./data/__static/" + path);
    return fs.readFileSync("./data/__static/" + path);
}
app.use(express.urlencoded({ extended: false }));
app.get("*", function (req, res, next) {
    if (!verified) {
        res.end("Rimspace Websocket Server | @Shimmerisland - Copyright 2022\nEltanceX & Voyage27\nPlease go to the background to log in");
        return;
    } else {
        next();
    }
});
app.get("/", (req, res) => {
    // res.end("RimSpace Minecraft Websocket Server by EltanceX 2022 (annularwind@outlook.com).")
    res.end(reader("login.html"));
});
app.get("/logo_smaller.png", (req, res) => { res.end(reader("logo_smaller.png")) });
app.get("/input_pwd.png", (req, res) => { res.end(reader("input_pwd.png")) });
app.get("/popup.js", (req, res) => { res.end(reader("popup.js")) });
app.get("/xhr.js", (req, res) => { res.end(reader("xhr.js")) });
app.get("/console", (req, res) => { res.end(reader("console.html")) });
app.get("/clock.png", (req, res) => { res.end(reader("clock.png")) });
app.get("/login", (req, res) => {
    if (!web.lastLogin || (Date.now() - web.lastLogin > (config.safety._LoginInterval || 1000))) {
        var pwd = req.query.pwd;
        if (pwd) {
            var pwdmd5 = md5(pwd);
            // console.log(req.signedCookies, req.cookies)
            if (pwdmd5 === md5(config.ConsolePassword)) {
                res.cookie("value", pwdmd5, {
                    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
                    maxAge: 1000 * 60 * 60 * 24 * 7,
                    path: "*",
                    httpOnly: false
                });
                res.end("true");
            } else {
                res.end("1");
            }
        } else {
            res.end("0");
        }
        web.lastLogin = Date.now();
    } else {
        res.end("2");
    }
});
app.get("/favicon.ico", (req, res) => { res.end() });





verify.pass();
logger.info("User Verification was cancelled");
__version = 1;
logger.info("Rimspace version is modified to 'professional+'");




server.listen(config.port);
if (tips.length > 0) logger.cinfo(tip(), "gray");
logger.cinfo(`${lang("start", "finish")}. (${(Date.now() - startTick) / 1000}s)`, "gray");
logger.cinfo(`${lang("start", "webListen")} http://localhost:${config.port}/`, "gray");
logger.cinfo(lang("start", "ip -a"), "gray");
logger.cinfo(`${lang("start", "listen")} ${config.port}`, "brightGreen");
logger.cinfo(lang("start", "help"), "brightWhite");
logger.info(`--作者的话 2023.8--
欢迎使用Rimspace开源版本，您将享有Rimspace v0.1.0.2版本全部功能的使用权限
请注意：该版本仅供合法学习使用，切勿用于商业用途及生产环境，出现问题后果自负
本文件内所有代码均为原创(除高斯模糊)，源码使用请遵循开源协议
作者邮箱: annularwind@outlook.com
Github：https://github.com/AquaDew`);