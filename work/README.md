# Work

This section contains work and developments on the data.


# Data

Sample Log Containing Key Events
```js
var log = [
    { raw: '2017.03.31 21:49:59 : You changed the connection status to Online.' },
    { raw: '2017.03.31 22:33:09 : You have joined the Idgel Dome Landmark region channel.' },
    { raw: '2017.04.03 20:15:21 : You have earned 350,476,629 Kinah.' },
    { raw: '2017.04.03 11:35:41 : You spent 218,850,000 Kinah.' },
    { raw: "2017.04.01 00:34:29 : The Ancient Manastone: Magic Suppression +30 item has been sold by the broker." },   
    { raw: "2017.03.11 01:22:52 : You sold the item." },
    { raw: '2017.02.24 14:52:22 : [charname:Kinnari;0.6275 1.0000 0.6275] Whispers: u back? o.o' },
    { raw: '2017.02.24 14:52:31 : You Whisper to [charname:Kinnari;0.6275 1.0000 0.6275]: not really' },
    { raw: '2017.04.01 01:11:16 : You have acquired [item:188052501;ver8;;;;].' },
    { raw: '2017.03.10 03:37:34 : You successfully enchanted Provenance Greatsword by +2.' },
    { raw: "2017.02.26 14:10:02 : You have failed to enchant Mystic Guardian Functionary's Divine Breastplate." },
    { raw: '2017.03.13 00:37:17 : Applied has succeeded in enchanting Provenance Greatsword to level 15.' },
    { raw: '2017.03.10 17:30:16 : You have failed to enchant Provenance Greatsword.' },
    { raw: '2017.03.10 17:30:16 : Failed to enchant Provenance Greatsword. The item was destroyed.' },
    { raw: "2017.04.03 11:35:51 : You have successfully tempered Kaisinel's Bracelet. +1 temperance level achieved." },
    { raw: "2017.04.03 11:34:55 : Tempering of Kaisinel's Bracelet has failed and the temperance level has decreased to 0." },    
    { raw: '2017.04.04 19:19:10 : Quest acquired: [Prestige/Daily] Prestigious Valor' },
    { raw: '2017.04.04 21:06:01 : Quest updated: [Urgent Order] Protect the Upper Abyss' },
    { raw: '2017.04.06 23:56:22 : Quest complete: [Alliance] Keep Up the Defense' },    
    { raw: '2017.03.08 01:34:00 : You used 57,090 Abyss Points.' },
    { raw: '2017.03.08 03:06:23 : You have gained 800 Abyss Points.' },
    { raw: '2017.03.07 23:06:04 : You have gained 150 Glory Points.' },
    { raw: '2017.03.31 22:35:36 : Critical Hit!You inflicted 1,399 damage on LeonTyrron-SL by using Ferocious Strike.' },
    { raw: '2017.03.31 22:35:06 : You inflicted 1,075 damage on LindWanijima-SL by using Wrathful Explosion.' },
    { raw: '2017.02.24 19:38:11 : You inflicted 1,143 damage on Wandering Shardjaw Kirrus.' },
    { raw: '2017.04.01 00:16:46 : Critical Hit!You inflicted 4,121 damage on Primeval Mookie by using Tumultuos Surge.' },
    { raw: '2017.03.31 23:49:23 : You inflicted 2,005 damage on Primeval Mookie by using Tumultuos Surge.' },
    { raw: '2017.03.31 23:29:13 : You inflicted 296 damage on Primeval Mookie.' },
    { raw: '2017.03.03 20:09:32 : lllmackylll has inflicted 506 damage on you by using Ferocious Strike.' },
    { raw: '2017.04.01 01:39:19 : Critical Hit! You received 362 damage from Driver-KR.' }    
];
```

Categorized Sample Log (Further Developments Needed for Damage Section)
```js
var log = [
    // User Logged On
    { raw: '2017.03.31 21:49:59 : You changed the connection status to Online.' },

    // Region Change
    { raw: '2017.03.31 22:33:09 : You have joined the Idgel Dome Landmark region channel.' },

    // Finance    
    { raw: '2017.04.03 20:15:21 : You have earned 350,476,629 Kinah.' },
    { raw: '2017.04.03 11:35:41 : You spent 218,850,000 Kinah.' },

    // Sales
    { raw: "2017.04.01 00:34:29 : The Ancient Manastone: Magic Suppression +30 item has been sold by the broker." },   
    { raw: "2017.03.11 01:22:52 : You sold the item." },

    // Whispers
    { raw: '2017.02.24 14:52:22 : [charname:Kinnari;0.6275 1.0000 0.6275] Whispers: u back? o.o' },
    { raw: '2017.02.24 14:52:31 : You Whisper to [charname:Kinnari;0.6275 1.0000 0.6275]: not really' },
    
    // Item Acquisition
    { raw: '2017.04.01 01:11:16 : You have acquired [item:188052501;ver8;;;;].' },
    
    // Enchantment
    { raw: '2017.03.10 03:37:34 : You successfully enchanted Provenance Greatsword by +2.' },
    { raw: "2017.02.26 14:10:02 : You have failed to enchant Mystic Guardian Functionary's Divine Breastplate." },
    { raw: '2017.03.13 00:37:17 : Applied has succeeded in enchanting Provenance Greatsword to level 15.' },
    { raw: '2017.03.10 17:30:16 : You have failed to enchant Provenance Greatsword.' },
    { raw: '2017.03.10 17:30:16 : Failed to enchant Provenance Greatsword. The item was destroyed.' },
    
    // Temper
    { raw: "2017.04.03 11:35:51 : You have successfully tempered Kaisinel's Bracelet. +1 temperance level achieved." },
    { raw: "2017.04.03 11:34:55 : Tempering of Kaisinel's Bracelet has failed and the temperance level has decreased to 0." },    
    
    // Quests
    { raw: '2017.04.04 19:19:10 : Quest acquired: [Prestige/Daily] Prestigious Valor' },
    { raw: '2017.04.04 21:06:01 : Quest updated: [Urgent Order] Protect the Upper Abyss' },
    { raw: '2017.04.06 23:56:22 : Quest complete: [Alliance] Keep Up the Defense' },    
    
    // Abyss Points
    { raw: '2017.03.08 01:34:00 : You used 57,090 Abyss Points.' },
    { raw: '2017.03.08 03:06:23 : You have gained 800 Abyss Points.' },
    
    // Glory Points
    { raw: '2017.03.07 23:06:04 : You have gained 150 Glory Points.' },
    
    // Damage (Outgoing) to Player Character
    { raw: '2017.03.31 22:35:36 : Critical Hit!You inflicted 1,399 damage on LeonTyrron-SL by using Ferocious Strike.' },
    { raw: '2017.03.31 22:35:06 : You inflicted 1,075 damage on LindWanijima-SL by using Wrathful Explosion.' },
    { raw: '2017.02.24 19:38:11 : You inflicted 1,143 damage on Wandering Shardjaw Kirrus.' },
    
    // Damage (Outgoing) to Non-Player Character
    { raw: '2017.04.01 00:16:46 : Critical Hit!You inflicted 4,121 damage on Primeval Mookie by using Tumultuos Surge.' },
    { raw: '2017.03.31 23:49:23 : You inflicted 2,005 damage on Primeval Mookie by using Tumultuos Surge.' },
    { raw: '2017.03.31 23:29:13 : You inflicted 296 damage on Primeval Mookie.' },
    
    // Damage (Incoming)
    { raw: '2017.03.03 20:09:32 : lllmackylll has inflicted 506 damage on you by using Ferocious Strike.' },
    { raw: '2017.04.01 01:39:19 : Critical Hit! You received 362 damage from Driver-KR.' }    
];
```

Ruleset (Further Developments Needed for Damage Section)
```js
for (var i = 0; i < log.length; i++) {
    
    // create a timestamp rule
    // use the mongodb time format. convert all timestamp strings to that format and then create a timestamp attribute
    
    // User Logged On
    log[i].user_logged_on = log[i].raw.indexOf('You changed the connection status to Online') >= 0;
    
    // Enchant Item
    if (log[i].raw.indexOf('You successfully enchanted') >= 0) {
        log[i].enchant_item = log[i].raw.split('enchanted ')[1].split(' by')[0];
        log[i].enchant_increase = log[i].raw.split('+')[1].split('.')[0];
    } else {
        log[i].enchant_item = false;
        log[i].enchant_increase = false;
    }
    
    // Enchantment Failure
    if (log[i].raw.indexOf('You have failed to enchant') >= 0) {
        log[i].enchant_item = log[i].raw.split('enchant ')[1].split('.')[0]; 
        log[i].enchant_item_increase = false;       
    } else {
        log[i].enchant_item = false;
        log[i].enchant_item_increase = false;        
    }
    
    // Tempering Success
    if ( log[i].raw.indexOf('You have successfully tempered') >= 0) {
        log[i].temper_item = log[i].raw.split('tempered ')[1].split('.')[0];
        log[i].temper_increase = log[i].raw.split('+')[1].split(' temperance')[0];
    } else {
        log[i].temper_item = false;
        log[i].temper_increase = false;
    }

    // Damage Inflicted
    if (log[i].raw.indexOf('You inflicted') >= 0 && log[i].raw.indexOf('damage on') >= 0) {
        
        log[i].damage_inflicted = Number(log[i].raw.split('inflicted ')[1].split(' damage')[0].replace(',', '').replace(',', '').replace(',', ''));
        log[i].damage_target = log[i].raw.split('on ')[1].split(' by')[0].split('.')[0];
        log[i].damage_critical = log[i].raw.indexOf('Critical Hit!') >= 0;
        
        // if skill is indicated
        if (log[i].raw.indexOf('by using') >= 0) {
            log[i].damage_skill = String(log[i].raw.split('using ')[1]).split('.')[0];
        }
        
        // check if target is monster (if target has more than 1 word in its name, its most likely a monster)
        if (log[i].damage_target.split(' ').length > 1) {
            log[i].damage_target_is_npc = true;
            log[i].damage_target_is_player = false;
        } 
        // else it's a player
        else if (log[i].damage_target.split(' ').length == 1) {
            log[i].damage_target_is_npc = false;
            log[i].damage_target_is_player = true;
        }
    }

    // =======================
    // Damage Received Section
    // =======================
    // Instance 1: "you received" * "damage from" // (source indicated) (skill not indicated) (critical indicated)
    // Instance 2: "you receive" * "damage due to" // (source not indicated) (skill indicated) (critical not indicated)
    // Instance 3: "you receive" * "damage due to the effect of" (source not indicated) (skill indicated) (critical not indicated)
    // Instance 4: "has inflicted" * "damage on you by using" (source indicated) (skill indicated) (critical indicated) 
    
    // // Damage Received (Instance 1) (target indicated) (skill not indicated) (critical indicated)
    // if (log[i].raw.indexOf('You received') >= 0 && log[i].raw.indexOf('damage from') >= 0) {
    //     log[i].damage_received = Number(log[i].raw.split('received ')[1].split(' damage')[0].replace(',', '').replace(',', '').replace(',', ''));
    //     log[i].damage_skill = false;
    //     log[i].damage_source = log[i].raw.split('from ')[1].split('.')[0];
    //     log[i].damage_critical = log[i].raw.indexOf('Critical Hit!') >= 0;
    // }
    
    // // You receive 121 damage due to Lava Singe. 
    // // Damage Received (Instance 2) (source not indicated) (skill indicated) (critical not indicated)
    // if (log[i].raw.indexOf('You receive ') >= 0 && log[i].raw.indexOf('damage due to') >= 0) {
    //     log[i].damage_received = log[i].raw.split('receive ')[1].split(' damage')[0];
    //     log[i].damage_skill = false; 
    //     log[i].damage_source = false;
    // }

    // Whisper To
    if (log[i].raw.indexOf('You Whisper to') >= 0) {
        log[i].whisper_to = log[i].raw.split('charname:')[1].split(';')[0];
    } else {
        log[i].whisper_to = false;
    }
    
    // Whisper From
    if (log[i].raw.indexOf('] Whispers:') >= 0) {
        log[i].whisper_from = log[i].raw.split('charname:')[1].split(';')[0];  
    } else {
        log[i].whisper_from = false;
    }

    // Money Earned
    if (log[i].raw.indexOf('You have earned') >= 0 && log[i].raw.indexOf('Kinah') >= 0) {
        log[i].money_earned = Number(log[i].raw.split('earned ')[1].split(' Kinah')[0].replace(',', '').replace(',', '').replace(',', '').replace(',', '').replace(',', ''));
    } else {
        log[i].money_earned = false;
    }
    
    // Money Spent
    if (log[i].raw.indexOf('You spent') >= 0 && log[i].raw.indexOf('Kinah') >= 0) {
        log[i].money_spent = Number(log[i].raw.split('spent ')[1].split(' Kinah')[0].replace(',', '').replace(',', '').replace(',', '').replace(',', '').replace(',', ''));
    } else {
        log[i].money_spent = false;
    }
  
    // Item Acquired
    if (log[i].raw.indexOf('You have acquired') >= 0) {
        log[i].item_acquired = log[i].raw.split('acquired ')[1].split('.')[0];
    } else {
        log[i].item_acquired = false;
    }
    
    // Item Sold to NPC (no item name)
    log[i].item_sold_to_npc = log[i].raw.indexOf('You sold the item') >= 0;
    
    // Item Sold on Broker    
    if (log[i].raw.indexOf('item has been sold by the broker') >= 0) {
        log[i].item_sold_on_broker = log[i].raw.split('The ')[1].split(' item')[0];   
    } else {
        log[i].item_sold_on_broker = false;
    }

    // Quest Acquired
    if (log[i].raw.indexOf('Quest acquired') >= 0) {
        log[i].quest_acquired = log[i].raw.split('acquired: ')[1];
    } else {
        log[i].quest_acquired = false;
    }
    
    // Quest Updated
    if (log[i].raw.indexOf('Quest updated') >= 0) {
        log[i].quest_updated = log[i].raw.split('updated: ')[1];
    } else {
        log[i].quest_updated = false;
    }
    
    // Quest Complete
    if (log[i].raw.indexOf('Quest complete') >= 0) {
        log[i].quest_completed = log[i].raw.split('complete: ')[1];
    }
    
    // Joined Group
    log[i].joined_group = log[i].raw.indexOf('You have joined the group') >= 0;
    
    // Region Travel
    if (log[i].raw.indexOf('You have joined the') >= 0 && log[i].raw.indexOf('region channel') >= 0) {
        log[i].region_changed_to = log[i].raw.split("You have joined the ")[1].split(' region channel')[0];
    } else {
        log[i].region_changed_to = false;  
    }

    // console.log(log[i]);
    
    // instead of logging, append all the results to an array. (create an empty array at the top)
    // then use the fs module and then write that array in to a text file.
    // 
}
```
Sample Output
```js
{ raw: '2017.03.31 21:49:59 : You changed the connection status to Online.',
  user_logged_on: true,
  enchant_item: false,
  enchant_increase: false,
  enchant_item_increase: false,
  temper_item: false,
  temper_increase: false,
  whisper_to: false,
  whisper_from: false,
  money_earned: false,
  money_spent: false,
  item_acquired: false,
  item_sold_to_npc: false,
  item_sold_on_broker: false,
  quest_acquired: false,
  quest_updated: false,
  joined_group: false,
  region_changed_to: false }
{ raw: '2017.03.31 22:33:09 : You have joined the Idgel Dome Landmark region channel.',
  user_logged_on: false,
  enchant_item: false,
  enchant_increase: false,
  enchant_item_increase: false,
  temper_item: false,
  temper_increase: false,
  whisper_to: false,
  whisper_from: false,
  money_earned: false,
  money_spent: false,
  item_acquired: false,
  item_sold_to_npc: false,
  item_sold_on_broker: false,
  quest_acquired: false,
  quest_updated: false,
  joined_group: false,
  region_changed_to: 'Idgel Dome Landmark' }
{ raw: '2017.04.03 20:15:21 : You have earned 350,476,629 Kinah.',
  user_logged_on: false,
  enchant_item: false,
  enchant_increase: false,
  enchant_item_increase: false,
  temper_item: false,
  temper_increase: false,
  whisper_to: false,
  whisper_from: false,
  money_earned: 350476629,
  money_spent: false,
  item_acquired: false,
  item_sold_to_npc: false,
  item_sold_on_broker: false,
  quest_acquired: false,
  quest_updated: false,
  joined_group: false,
  region_changed_to: false }
{ raw: '2017.04.03 11:35:41 : You spent 218,850,000 Kinah.',
  user_logged_on: false,
  enchant_item: false,
  enchant_increase: false,
  enchant_item_increase: false,
  temper_item: false,
  temper_increase: false,
  whisper_to: false,
  whisper_from: false,
  money_earned: false,
  money_spent: 218850000,
  item_acquired: false,
  item_sold_to_npc: false,
  item_sold_on_broker: false,
  quest_acquired: false,
  quest_updated: false,
  joined_group: false,
  region_changed_to: false }
{ raw: '2017.04.01 00:34:29 : The Ancient Manastone: Magic Suppression +30 item has been sold by the broker.',
  user_logged_on: false,
  enchant_item: false,
  enchant_increase: false,
  enchant_item_increase: false,
  temper_item: false,
  temper_increase: false,
  whisper_to: false,
  whisper_from: false,
  money_earned: false,
  money_spent: false,
  item_acquired: false,
  item_sold_to_npc: false,
  item_sold_on_broker: 'Ancient Manastone: Magic Suppression +30',
  quest_acquired: false,
  quest_updated: false,
  joined_group: false,
  region_changed_to: false }
{ raw: '2017.03.11 01:22:52 : You sold the item.',
  user_logged_on: false,
  enchant_item: false,
  enchant_increase: false,
  enchant_item_increase: false,
  temper_item: false,
  temper_increase: false,
  whisper_to: false,
  whisper_from: false,
  money_earned: false,
  money_spent: false,
  item_acquired: false,
  item_sold_to_npc: true,
  item_sold_on_broker: false,
  quest_acquired: false,
  quest_updated: false,
  joined_group: false,
  region_changed_to: false }
{ raw: '2017.02.24 14:52:22 : [charname:Kinnari;0.6275 1.0000 0.6275] Whispers: u back? o.o',
  user_logged_on: false,
  enchant_item: false,
  enchant_increase: false,
  enchant_item_increase: false,
  temper_item: false,
  temper_increase: false,
  whisper_to: false,
  whisper_from: 'Kinnari',
  money_earned: false,
  money_spent: false,
  item_acquired: false,
  item_sold_to_npc: false,
  item_sold_on_broker: false,
  quest_acquired: false,
  quest_updated: false,
  joined_group: false,
  region_changed_to: false }
{ raw: '2017.02.24 14:52:31 : You Whisper to [charname:Kinnari;0.6275 1.0000 0.6275]: not really',
  user_logged_on: false,
  enchant_item: false,
  enchant_increase: false,
  enchant_item_increase: false,
  temper_item: false,
  temper_increase: false,
  whisper_to: 'Kinnari',
  whisper_from: false,
  money_earned: false,
  money_spent: false,
  item_acquired: false,
  item_sold_to_npc: false,
  item_sold_on_broker: false,
  quest_acquired: false,
  quest_updated: false,
  joined_group: false,
  region_changed_to: false }
{ raw: '2017.04.01 01:11:16 : You have acquired [item:188052501;ver8;;;;].',
  user_logged_on: false,
  enchant_item: false,
  enchant_increase: false,
  enchant_item_increase: false,
  temper_item: false,
  temper_increase: false,
  whisper_to: false,
  whisper_from: false,
  money_earned: false,
  money_spent: false,
  item_acquired: '[item:188052501;ver8;;;;]',
  item_sold_to_npc: false,
  item_sold_on_broker: false,
  quest_acquired: false,
  quest_updated: false,
  joined_group: false,
  region_changed_to: false }
{ raw: '2017.03.10 03:37:34 : You successfully enchanted Provenance Greatsword by +2.',
  user_logged_on: false,
  enchant_item: false,
  enchant_increase: '2',
  enchant_item_increase: false,
  temper_item: false,
  temper_increase: false,
  whisper_to: false,
  whisper_from: false,
  money_earned: false,
  money_spent: false,
  item_acquired: false,
  item_sold_to_npc: false,
  item_sold_on_broker: false,
  quest_acquired: false,
  quest_updated: false,
  joined_group: false,
  region_changed_to: false }
{ raw: '2017.02.26 14:10:02 : You have failed to enchant Mystic Guardian Functionary\'s Divine Breastplate.',
  user_logged_on: false,
  enchant_item: 'Mystic Guardian Functionary\'s Divine Breastplate',
  enchant_increase: false,
  enchant_item_increase: false,
  temper_item: false,
  temper_increase: false,
  whisper_to: false,
  whisper_from: false,
  money_earned: false,
  money_spent: false,
  item_acquired: false,
  item_sold_to_npc: false,
  item_sold_on_broker: false,
  quest_acquired: false,
  quest_updated: false,
  joined_group: false,
  region_changed_to: false }
{ raw: '2017.03.13 00:37:17 : Applied has succeeded in enchanting Provenance Greatsword to level 15.',
  user_logged_on: false,
  enchant_item: false,
  enchant_increase: false,
  enchant_item_increase: false,
  temper_item: false,
  temper_increase: false,
  whisper_to: false,
  whisper_from: false,
  money_earned: false,
  money_spent: false,
  item_acquired: false,
  item_sold_to_npc: false,
  item_sold_on_broker: false,
  quest_acquired: false,
  quest_updated: false,
  joined_group: false,
  region_changed_to: false }
{ raw: '2017.03.10 17:30:16 : You have failed to enchant Provenance Greatsword.',
  user_logged_on: false,
  enchant_item: 'Provenance Greatsword',
  enchant_increase: false,
  enchant_item_increase: false,
  temper_item: false,
  temper_increase: false,
  whisper_to: false,
  whisper_from: false,
  money_earned: false,
  money_spent: false,
  item_acquired: false,
  item_sold_to_npc: false,
  item_sold_on_broker: false,
  quest_acquired: false,
  quest_updated: false,
  joined_group: false,
  region_changed_to: false }
{ raw: '2017.03.10 17:30:16 : Failed to enchant Provenance Greatsword. The item was destroyed.',
  user_logged_on: false,
  enchant_item: false,
  enchant_increase: false,
  enchant_item_increase: false,
  temper_item: false,
  temper_increase: false,
  whisper_to: false,
  whisper_from: false,
  money_earned: false,
  money_spent: false,
  item_acquired: false,
  item_sold_to_npc: false,
  item_sold_on_broker: false,
  quest_acquired: false,
  quest_updated: false,
  joined_group: false,
  region_changed_to: false }
{ raw: '2017.04.03 11:35:51 : You have successfully tempered Kaisinel\'s Bracelet. +1 temperance level achieved.',
  user_logged_on: false,
  enchant_item: false,
  enchant_increase: false,
  enchant_item_increase: false,
  temper_item: 'Kaisinel\'s Bracelet',
  temper_increase: '1',
  whisper_to: false,
  whisper_from: false,
  money_earned: false,
  money_spent: false,
  item_acquired: false,
  item_sold_to_npc: false,
  item_sold_on_broker: false,
  quest_acquired: false,
  quest_updated: false,
  joined_group: false,
  region_changed_to: false }
{ raw: '2017.04.03 11:34:55 : Tempering of Kaisinel\'s Bracelet has failed and the temperance level has decreased to 0.',
  user_logged_on: false,
  enchant_item: false,
  enchant_increase: false,
  enchant_item_increase: false,
  temper_item: false,
  temper_increase: false,
  whisper_to: false,
  whisper_from: false,
  money_earned: false,
  money_spent: false,
  item_acquired: false,
  item_sold_to_npc: false,
  item_sold_on_broker: false,
  quest_acquired: false,
  quest_updated: false,
  joined_group: false,
  region_changed_to: false }
{ raw: '2017.04.04 19:19:10 : Quest acquired: [Prestige/Daily] Prestigious Valor',
  user_logged_on: false,
  enchant_item: false,
  enchant_increase: false,
  enchant_item_increase: false,
  temper_item: false,
  temper_increase: false,
  whisper_to: false,
  whisper_from: false,
  money_earned: false,
  money_spent: false,
  item_acquired: false,
  item_sold_to_npc: false,
  item_sold_on_broker: false,
  quest_acquired: '[Prestige/Daily] Prestigious Valor',
  quest_updated: false,
  joined_group: false,
  region_changed_to: false }
{ raw: '2017.04.04 21:06:01 : Quest updated: [Urgent Order] Protect the Upper Abyss',
  user_logged_on: false,
  enchant_item: false,
  enchant_increase: false,
  enchant_item_increase: false,
  temper_item: false,
  temper_increase: false,
  whisper_to: false,
  whisper_from: false,
  money_earned: false,
  money_spent: false,
  item_acquired: false,
  item_sold_to_npc: false,
  item_sold_on_broker: false,
  quest_acquired: false,
  quest_updated: '[Urgent Order] Protect the Upper Abyss',
  joined_group: false,
  region_changed_to: false }
{ raw: '2017.04.06 23:56:22 : Quest complete: [Alliance] Keep Up the Defense',
  user_logged_on: false,
  enchant_item: false,
  enchant_increase: false,
  enchant_item_increase: false,
  temper_item: false,
  temper_increase: false,
  whisper_to: false,
  whisper_from: false,
  money_earned: false,
  money_spent: false,
  item_acquired: false,
  item_sold_to_npc: false,
  item_sold_on_broker: false,
  quest_acquired: false,
  quest_updated: false,
  quest_completed: '[Alliance] Keep Up the Defense',
  joined_group: false,
  region_changed_to: false }
{ raw: '2017.03.08 01:34:00 : You used 57,090 Abyss Points.',
  user_logged_on: false,
  enchant_item: false,
  enchant_increase: false,
  enchant_item_increase: false,
  temper_item: false,
  temper_increase: false,
  whisper_to: false,
  whisper_from: false,
  money_earned: false,
  money_spent: false,
  item_acquired: false,
  item_sold_to_npc: false,
  item_sold_on_broker: false,
  quest_acquired: false,
  quest_updated: false,
  joined_group: false,
  region_changed_to: false }
{ raw: '2017.03.08 03:06:23 : You have gained 800 Abyss Points.',
  user_logged_on: false,
  enchant_item: false,
  enchant_increase: false,
  enchant_item_increase: false,
  temper_item: false,
  temper_increase: false,
  whisper_to: false,
  whisper_from: false,
  money_earned: false,
  money_spent: false,
  item_acquired: false,
  item_sold_to_npc: false,
  item_sold_on_broker: false,
  quest_acquired: false,
  quest_updated: false,
  joined_group: false,
  region_changed_to: false }
{ raw: '2017.03.07 23:06:04 : You have gained 150 Glory Points.',
  user_logged_on: false,
  enchant_item: false,
  enchant_increase: false,
  enchant_item_increase: false,
  temper_item: false,
  temper_increase: false,
  whisper_to: false,
  whisper_from: false,
  money_earned: false,
  money_spent: false,
  item_acquired: false,
  item_sold_to_npc: false,
  item_sold_on_broker: false,
  quest_acquired: false,
  quest_updated: false,
  joined_group: false,
  region_changed_to: false }
{ raw: '2017.03.31 22:35:36 : Critical Hit!You inflicted 1,399 damage on LeonTyrron-SL by using Ferocious Strike.',
  user_logged_on: false,
  enchant_item: false,
  enchant_increase: false,
  enchant_item_increase: false,
  temper_item: false,
  temper_increase: false,
  damage_inflicted: 1399,
  damage_target: 'LeonTyrron-SL',
  damage_critical: true,
  damage_skill: 'Ferocious Strike',
  damage_target_is_npc: false,
  damage_target_is_player: true,
  whisper_to: false,
  whisper_from: false,
  money_earned: false,
  money_spent: false,
  item_acquired: false,
  item_sold_to_npc: false,
  item_sold_on_broker: false,
  quest_acquired: false,
  quest_updated: false,
  joined_group: false,
  region_changed_to: false }
{ raw: '2017.03.31 22:35:06 : You inflicted 1,075 damage on LindWanijima-SL by using Wrathful Explosion.',
  user_logged_on: false,
  enchant_item: false,
  enchant_increase: false,
  enchant_item_increase: false,
  temper_item: false,
  temper_increase: false,
  damage_inflicted: 1075,
  damage_target: 'LindWanijima-SL',
  damage_critical: false,
  damage_skill: 'Wrathful Explosion',
  damage_target_is_npc: false,
  damage_target_is_player: true,
  whisper_to: false,
  whisper_from: false,
  money_earned: false,
  money_spent: false,
  item_acquired: false,
  item_sold_to_npc: false,
  item_sold_on_broker: false,
  quest_acquired: false,
  quest_updated: false,
  joined_group: false,
  region_changed_to: false }
{ raw: '2017.02.24 19:38:11 : You inflicted 1,143 damage on Wandering Shardjaw Kirrus.',
  user_logged_on: false,
  enchant_item: false,
  enchant_increase: false,
  enchant_item_increase: false,
  temper_item: false,
  temper_increase: false,
  damage_inflicted: 1143,
  damage_target: 'Wandering Shardjaw Kirrus',
  damage_critical: false,
  damage_target_is_npc: true,
  damage_target_is_player: false,
  whisper_to: false,
  whisper_from: false,
  money_earned: false,
  money_spent: false,
  item_acquired: false,
  item_sold_to_npc: false,
  item_sold_on_broker: false,
  quest_acquired: false,
  quest_updated: false,
  joined_group: false,
  region_changed_to: false }
{ raw: '2017.04.01 00:16:46 : Critical Hit!You inflicted 4,121 damage on Primeval Mookie by using Tumultuos Surge.',
  user_logged_on: false,
  enchant_item: false,
  enchant_increase: false,
  enchant_item_increase: false,
  temper_item: false,
  temper_increase: false,
  damage_inflicted: 4121,
  damage_target: 'Primeval Mookie',
  damage_critical: true,
  damage_skill: 'Tumultuos Surge',
  damage_target_is_npc: true,
  damage_target_is_player: false,
  whisper_to: false,
  whisper_from: false,
  money_earned: false,
  money_spent: false,
  item_acquired: false,
  item_sold_to_npc: false,
  item_sold_on_broker: false,
  quest_acquired: false,
  quest_updated: false,
  joined_group: false,
  region_changed_to: false }
{ raw: '2017.03.31 23:49:23 : You inflicted 2,005 damage on Primeval Mookie by using Tumultuos Surge.',
  user_logged_on: false,
  enchant_item: false,
  enchant_increase: false,
  enchant_item_increase: false,
  temper_item: false,
  temper_increase: false,
  damage_inflicted: 2005,
  damage_target: 'Primeval Mookie',
  damage_critical: false,
  damage_skill: 'Tumultuos Surge',
  damage_target_is_npc: true,
  damage_target_is_player: false,
  whisper_to: false,
  whisper_from: false,
  money_earned: false,
  money_spent: false,
  item_acquired: false,
  item_sold_to_npc: false,
  item_sold_on_broker: false,
  quest_acquired: false,
  quest_updated: false,
  joined_group: false,
  region_changed_to: false }
{ raw: '2017.03.31 23:29:13 : You inflicted 296 damage on Primeval Mookie.',
  user_logged_on: false,
  enchant_item: false,
  enchant_increase: false,
  enchant_item_increase: false,
  temper_item: false,
  temper_increase: false,
  damage_inflicted: 296,
  damage_target: 'Primeval Mookie',
  damage_critical: false,
  damage_target_is_npc: true,
  damage_target_is_player: false,
  whisper_to: false,
  whisper_from: false,
  money_earned: false,
  money_spent: false,
  item_acquired: false,
  item_sold_to_npc: false,
  item_sold_on_broker: false,
  quest_acquired: false,
  quest_updated: false,
  joined_group: false,
  region_changed_to: false }
{ raw: '2017.03.03 20:09:32 : lllmackylll has inflicted 506 damage on you by using Ferocious Strike.',
  user_logged_on: false,
  enchant_item: false,
  enchant_increase: false,
  enchant_item_increase: false,
  temper_item: false,
  temper_increase: false,
  whisper_to: false,
  whisper_from: false,
  money_earned: false,
  money_spent: false,
  item_acquired: false,
  item_sold_to_npc: false,
  item_sold_on_broker: false,
  quest_acquired: false,
  quest_updated: false,
  joined_group: false,
  region_changed_to: false }
{ raw: '2017.04.01 01:39:19 : Critical Hit! You received 362 damage from Driver-KR.',
  user_logged_on: false,
  enchant_item: false,
  enchant_increase: false,
  enchant_item_increase: false,
  temper_item: false,
  temper_increase: false,
  whisper_to: false,
  whisper_from: false,
  money_earned: false,
  money_spent: false,
  item_acquired: false,
  item_sold_to_npc: false,
  item_sold_on_broker: false,
  quest_acquired: false,
  quest_updated: false,
  joined_group: false,
  region_changed_to: false }
```

## Preliminary Data Structure
```
{
	"name":"Applied",
	"class":"Templar",

	"communication": 
	{
		"outgoing": 
		{
			"charName1": ["2017.02.24 14:54:24", "2017.02.24 14:54:43"],
			"charName2": ["2017.02.24 14:54:24", "2017.02.24 14:54:43"],
			"charName3": ["2017.02.24 14:54:24", "2017.02.24 14:54:43"]
		},

		"incoming": 
		{
			"charName1": ["2017.02.24 14:54:24", "2017.02.24 14:54:43"],
			"charName4": ["2017.02.24 14:54:24", "2017.02.24 14:54:43"],
			"charName3": ["2017.02.24 14:54:24", "2017.02.24 14:54:43"]
		}
	},

	"places": 
	{
		"instances": 
		{
			"Smoldering Fire Temple": ["2017.02.24 14:54:24", "2017.02.24 14:54:43"],
			"Fissure of Oblivion": ["2017.02.24 14:54:24", "2017.02.24 14:54:43"],
			"Contaminated Underpath": ["2017.02.24 14:54:24", "2017.02.24 14:54:43"]
		},

		"cities":
		{ 
			"Iluma": ["2017.02.24 14:54:24", "2017.02.24 14:54:43"],
			"Reshanta": ["2017.02.24 14:54:24", "2017.02.24 14:54:43"],
			"Cygnea": ["2017.02.24 14:54:24", "2017.02.24 14:54:43"]				
		}
	},

	"finance": 
	{
		"spent":
		{
			{ "time": "2017.02.24 14:54:24", "amount": 10203311 },
			{ "time": "2017.02.24 14:54:25", "amount": 931941 },
			{ "time": "2017.02.24 14:54:34", "amount": 2000000 
		},

		"earned":
		[
			{ "time": "2017.02.24 14:54:24", "amount": 10203311 },
			{ "time": "2017.02.24 14:54:25", "amount": 931941 },
			{ "time": "2017.02.24 14:54:34", "amount": 2000000 }
		]
	},

	"combat": 
	{
		"outgoing":
		{
			"Entangling Chains": [2017.02.24 14:54:24", "2017.02.24 14:54:43"],
			"Aether Leash": [2017.02.24 14:54:24", "2017.02.24 14:54:43"],
			"Break Power": [2017.02.24 14:54:24", "2017.02.24 14:54:43"]			
		},
		
		"received":
		{
			"Entangling Chains": [2017.02.24 14:54:24", "2017.02.24 14:54:43"]],
			"Aether Leash": [2017.02.24 14:54:24", "2017.02.24 14:54:43"]],
			"Break Power": [2017.02.24 14:54:24", "2017.02.24 14:54:43"]]	
		}
	}
	
	"items":
	{
		"acquired":
		{
			{ "time": "2017.02.24 14:54:43", "item": "Provenance Greatsword", "quantity": 1 },
			{ "time": "2017.02.24 18:54:53", "item": "Polearm of Provenance", "quantity": 1 }
		}
	}
}
```


User Logged On
```raw
2017.02.24 14:18:55 : You changed the connection status to Online.
```

Class of the User's Avatar
```
2017.02.24 14:19:08 : You have joined the Templar Channel. 
```

Looking for Group Channel. People use this to look for groups for instances as well as advertise items to want to buy/sell.
```
2017.02.24 14:21:49 : [3.LFG] [charname:Spiritrow;1.0000 0.6941 0.6941]: WTT/S CHAIN MYSTIC+15 3 PARTS FOR CLOTH MYSTIC +15 
2017.02.24 14:21:49 : [3.LFG] [charname:Torrr;1.0000 0.6941 0.6941]: WTB[item:188057312;ver7;;;;] 8b[item:167010307;ver7;;;;]1b [item:167010304;ver7;;;;]1.5b [item:166030005;ver7;;;;]200 mil any quantity 
2017.02.24 14:21:50 : [3.LFG] [charname:Miguelgaboo;1.0000 0.6941 0.6941]: [cmd:Miguelgaboo;PPqHEYzRFjIbsU112NB39getZEoA/KBwj0bHOcA5Vyg=]DR Need DPS  
2017.02.24 14:22:06 : [3.LFG] [charname:MaliciousCrazy;1.0000 0.6941 0.6941]: WTS [item:110302058;ver7;????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????;;;]SET FULL!!! PM OFFER! 
2017.02.24 14:22:14 : [3.LFG] [charname:Suy;1.0000 0.6941 0.6941]: WTB [item:166030005;ver7;;;;] 220mil/ea 
2017.02.24 14:22:22 : [3.LFG] [charname:ReLife;1.0000 0.6941 0.6941]: [cmd:ReLife;1nshTIPdp9aY9ymyWO4qdQjdsQMPof2BkC6IG4zYhoM=]event need glad and sorc 
```

Trade Channel
```
2017.02.24 16:45:40 : [2.Trade] [charname:YinZei;1.0000 0.6941 0.6941]: WTS[item:188057312;ver7;;;;][pos:Location;0 110010000 1362.8 1509.8 0.0 0] i got 2    10b each 
```

Outgoing Trade
```
2017.03.07 18:13:56 : You sent a trade message to Manuleiva. 
```

Completed Trades
```
2017.03.13 19:07:40 : The trade is complete. 
```

Item acquisition
```
2017.03.11 05:00:02 : You have acquired [item:188100406;ver7;;;;]. 
```

User Avatar Challenged Someone in Duel
```
2017.02.26 13:09:33 : You challenged Kobayashii to a duel. 
2017.02.26 13:09:42 : Starting the duel with Kobayashii. 
2017.02.26 13:10:02 : You won the duel against Kobayashii. 
```

Duels Happening Around the User
```
2017.03.06 04:51:02 : A duel between kiiarra and Acoz has started. 
2017.03.06 04:51:42 : Acoz defeated kiiarra in a duel. 
```
Duel Example
```
2017.03.03 20:09:21 : You challenged lllmackylll to a duel. 
2017.03.03 20:09:24 : Your Stun, Knock Back, Stumble, Spin, and Aerial Thrust Resistance Values has been boosted by using Unwavering Devotion. 
2017.03.03 20:09:24 : lllmackylll is in the boost parry state as it used Wall of Steel. 
2017.03.03 20:09:24 : Your Attack has been boosted by using Divine Fury. 
2017.03.03 20:09:25 : lllmackylll is in the boost Attack state because lllmackylll used Berserking. 
2017.03.03 20:09:25 : lllmackylll is in the weaken Accuracy state because lllmackylll used Berserking. 
2017.03.03 20:09:25 : lllmackylll is in the weaken Physical Def state because lllmackylll used Berserking. 
2017.03.03 20:09:25 : Your Attack has been boosted by using Empyrean Fury. 
2017.03.03 20:09:25 : Your Magical Acc has been boosted by using Empyrean Fury. 
2017.03.03 20:09:25 : Your Magic Boost has been boosted by using Empyrean Fury. 
2017.03.03 20:09:26 : Starting the duel with lllmackylll. 
2017.03.03 20:09:26 : Your Physical Def has been weakened by using Reroute Power. 
2017.03.03 20:09:26 : You received the effect by using Reroute Power. 
2017.03.03 20:09:27 : Your Magic Resist has been boosted by using Aether Armor. 
2017.03.03 20:09:27 : lllmackylll parried the attack. 
2017.03.03 20:09:27 : Critical Hit!You inflicted 902 damage on lllmackylll by using Inquisitor's Blow. 
2017.03.03 20:09:27 : Reroute Power has been activated. 
2017.03.03 20:09:27 : lllmackylll received 173 damage due to the effect of Reroute Power. 
2017.03.03 20:09:27 : lllmackylll is in the boost Stun, Knock Back, Stumble, Spin, and Aerial Thrust Resistance Values state because lllmackylll used Unwavering Devotion. 
2017.03.03 20:09:28 : lllmackylll parried the attack. 
2017.03.03 20:09:28 : Critical Hit!You inflicted 822 damage on lllmackylll by using Aether Leash. 
2017.03.03 20:09:28 : lllmackylll parried the attack. 
2017.03.03 20:09:28 : Critical Hit!lllmackylll's movement speed decreased as you used Aether Leash. 
2017.03.03 20:09:28 : Reroute Power has been activated. 
2017.03.03 20:09:28 : lllmackylll received 179 damage due to the effect of Reroute Power. 
2017.03.03 20:09:30 : lllmackylll parried the attack. 
2017.03.03 20:09:30 : You inflicted 470 damage on lllmackylll. 
2017.03.03 20:09:30 : Reroute Power has been activated. 
2017.03.03 20:09:30 : lllmackylll received 173 damage due to the effect of Reroute Power. 
2017.03.03 20:09:31 : lllmackylll parried the attack. 
2017.03.03 20:09:31 : Critical Hit!You inflicted 1,145 damage on lllmackylll by using Sword Storm. 
2017.03.03 20:09:32 : lllmackylll has inflicted 506 damage on you by using Ferocious Strike. 
2017.03.03 20:09:32 : Reroute Power has been activated. 
2017.03.03 20:09:32 : lllmackylll received 173 damage due to the effect of Reroute Power. 
2017.03.03 20:09:32 : lllmackylll parried the attack. 
2017.03.03 20:09:32 : You inflicted 566 damage on lllmackylll by using Dazing Severe Blow. 
2017.03.03 20:09:32 : lllmackylll parried the attack. 
2017.03.03 20:09:32 : lllmackylll's attack speed has decreased because Applied used Dazing Severe Blow. 
2017.03.03 20:09:32 : lllmackylll parried the attack. 
2017.03.03 20:09:32 : Applied has weakened lllmackylll's Physical Def by using Dazing Severe Blow. 
2017.03.03 20:09:32 : Reroute Power has been activated. 
2017.03.03 20:09:32 : lllmackylll received 173 damage due to the effect of Reroute Power. 
2017.03.03 20:09:33 : lllmackylll parried the attack. 
2017.03.03 20:09:33 : You inflicted 581 damage on lllmackylll by using Divine Blow. 
2017.03.03 20:09:33 : Reroute Power has been activated. 
2017.03.03 20:09:33 : lllmackylll received 173 damage due to the effect of Reroute Power. 
2017.03.03 20:09:33 : lllmackylll is in the boost Attack state because lllmackylll used Rage. 
2017.03.03 20:09:33 : lllmackylll is in the defense shield state as it used Rage. 
2017.03.03 20:09:34 : lllmackylll parried the attack. 
2017.03.03 20:09:34 : The attack was blocked by the protective shield effect cast on lllmackylll. 
2017.03.03 20:09:34 : Critical Hit! You inflicted 235 critical damage on lllmackylll. 
2017.03.03 20:09:34 : lllmackylll parried the attack. 
2017.03.03 20:09:34 : You inflicted 74 damage on lllmackylll. 
2017.03.03 20:09:34 : lllmackylll parried the attack. 
2017.03.03 20:09:34 : You inflicted 74 damage on lllmackylll. 
2017.03.03 20:09:34 : lllmackylll parried the attack. 
2017.03.03 20:09:34 : Critical Hit!You inflicted 1,716 damage on lllmackylll by using Punishing Thrust. 
2017.03.03 20:09:34 : Reroute Power has been activated. 
2017.03.03 20:09:34 : lllmackylll received 173 damage due to the effect of Reroute Power. 
2017.03.03 20:09:34 : lllmackylll has inflicted 551 damage on you by using Counter Leech. 
2017.03.03 20:09:35 : Reroute Power has been activated. 
2017.03.03 20:09:35 : lllmackylll received 173 damage due to the effect of Reroute Power. 
2017.03.03 20:09:35 : lllmackylll parried the attack. 
2017.03.03 20:09:35 : You inflicted 750 damage on lllmackylll by using Holy Punishment. 
2017.03.03 20:09:35 : Reroute Power has been activated. 
2017.03.03 20:09:35 : lllmackylll received 173 damage due to the effect of Reroute Power. 
2017.03.03 20:09:36 : lllmackylll parried the attack. 
2017.03.03 20:09:36 : Critical Hit!You inflicted 667 damage on lllmackylll by using Punishment. 
2017.03.03 20:09:36 : lllmackylll restored 826 HP with Counter Leech. 
2017.03.03 20:09:36 : lllmackylll has inflicted 642 damage on you by using Crushing Blow. 
2017.03.03 20:09:36 : lllmackylll has knocked you down by using Crushing Blow. 
2017.03.03 20:09:36 : You have used Saam King's Herbs. 
2017.03.03 20:09:36 : You recovered 1,130 HP. 
2017.03.03 20:09:36 : Reroute Power has been activated. 
2017.03.03 20:09:36 : You can see again 
2017.03.03 20:09:36 : lllmackylll received 173 damage due to the effect of Reroute Power. 
2017.03.03 20:09:38 : You are no longer shocked. 
2017.03.03 20:09:38 : Your Stun, Knock Back, Stumble, Spin, and Aerial Thrust Resistance Values has been boosted by using Remove Shock I. 
2017.03.03 20:09:38 : lllmackylll parried the attack. 
2017.03.03 20:09:38 : You inflicted 637 damage on lllmackylll by using Ensnaring Blow. 
2017.03.03 20:09:38 : lllmackylll has inflicted 608 damage on you by using Absorbing Fury. 
2017.03.03 20:09:38 : Reroute Power has been activated. 
2017.03.03 20:09:38 : lllmackylll received 173 damage due to the effect of Reroute Power. 
2017.03.03 20:09:38 : lllmackylll restored its movement speed. 
2017.03.03 20:09:39 : You must use Chain Skills in order. 
2017.03.03 20:09:40 : lllmackylll parried the attack. 
2017.03.03 20:09:40 : Critical Hit! You inflicted 753 critical damage on lllmackylll. 
2017.03.03 20:09:40 : lllmackylll parried the attack. 
2017.03.03 20:09:40 : You inflicted 75 damage on lllmackylll. 
2017.03.03 20:09:40 : lllmackylll parried the attack. 
2017.03.03 20:09:40 : You inflicted 75 damage on lllmackylll. 
2017.03.03 20:09:40 : Critical Hit!You inflicted 1,404 damage on lllmackylll by using Ferocious Strike. 
2017.03.03 20:09:40 : lllmackylll restored 304 HP with Absorbing Fury. 
2017.03.03 20:09:40 : Reroute Power has been activated. 
2017.03.03 20:09:40 : lllmackylll received 173 damage due to the effect of Reroute Power. 
2017.03.03 20:09:40 : Reroute Power has been activated. 
2017.03.03 20:09:40 : lllmackylll received 173 damage due to the effect of Reroute Power. 
2017.03.03 20:09:41 : You inflicted 783 damage on lllmackylll. 
2017.03.03 20:09:41 : lllmackylll has inflicted 1,119 damage on you by using Sure Strike. 
2017.03.03 20:09:41 : Your Attack has been boosted by using Rage. 
2017.03.03 20:09:41 : You gave yourself a defense shield by using Rage. 
2017.03.03 20:09:41 : Paralyze has been activated. 
2017.03.03 20:09:42 : You inflicted 1,015 damage on lllmackylll by using Slash Artery. 
2017.03.03 20:09:42 : You caused lllmackylll to bleed by using Slash Artery. 
2017.03.03 20:09:43 : Critical Hit! You inflicted 1,439 critical damage on lllmackylll. 
2017.03.03 20:09:43 : You inflicted 143 damage on lllmackylll. 
2017.03.03 20:09:43 : You inflicted 143 damage on lllmackylll. 
2017.03.03 20:09:44 : You won the duel against lllmackylll. 
```

Defeated (is this for players in the opposing faction?)
```
2017.03.11 06:41:28 : You have defeated Ararmathesecond. 
```

Incoming Whisper (Character Name Masked)
```
2017.02.24 14:52:22 : [charname:_____;0.6275 1.0000 0.6275] Whispers: u back? o.o
```

Outgoing Whisper (Character Name Masked)
```
2017.02.24 14:52:31 : You Whisper to [charname:_____;0.6275 1.0000 0.6275]: not really
```

Damage done to monster from skill (critical & non-critical)
```
2017.03.14 05:09:52 : You inflicted 1,615 damage on Ancient Drakan Warrior by using Dazing Severe Blow. 
2017.03.14 05:10:04 : Critical Hit!You inflicted 2,541 damage on Ancient Drakan Warrior by using Ferocious Strike.
```

Damage done to monster from auto-attack
```
2017.03.14 05:10:04 : You inflicted 125 damage on Ancient Drakan Warrior. 
```

Damage received
```
2017.03.14 03:12:43 : You received 1,378 damage from Bakarma Legion Drakan Elite Magical Soldier. 
```

Damage received from another PC (PCs only have one word in their names, NPCs have more than one)
```
2017.03.14 21:37:15 : Critical Hit! You received 476 damage from Peacekeyper-TM. 
```


Avatar Death
```
2017.02.25 06:55:44 : You have died. 
```

Death (Others)
```
2017.02.25 07:24:38 : healereye has died.
```

Sound-Bound Items
```
2017.03.08 06:12:13 : You have successfully soul-bound Provenance Greatsword. 
```

Enchantment
```
2017.03.10 03:34:05 : You successfully enchanted Provenance Greatsword by +1. 
2017.03.10 03:34:44 : You successfully enchanted Provenance Greatsword by +2. 
2017.03.10 03:37:34 : You successfully enchanted Provenance Greatsword by +2. 
2017.03.10 03:40:17 : You successfully enchanted Provenance Greatsword by +2. 
2017.03.10 13:10:49 : You successfully enchanted Provenance Greatsword by +2. 
2017.03.10 16:42:54 : You successfully enchanted Provenance Greatsword by +2. 
2017.03.10 16:48:04 : You successfully enchanted Provenance Greatsword by +1. 
2017.03.10 17:29:00 : You successfully enchanted Provenance Greatsword by +2. 
2017.03.13 00:37:17 : You successfully enchanted Provenance Greatsword by +1. 
2017.03.13 00:37:17 : _____ has succeeded in enchanting Provenance Greatsword to level 15. 
```

Enchantment Failure
```
2017.03.10 17:30:16 : Failed to enchant Provenance Greatsword. The item was destroyed. 
```

Armsfusion
```
2017.03.13 18:56:10 : Divine Claymore of the Arena Conqueror has been combined with Provenance Greatsword. 
```

Joined Instances (Solo)
```
2017.03.14 04:46:37 : You have entered Raksang Ruins. Your allies are barred from joining you.
2017.03.04 13:32:11 : You have entered Fissure of Oblivion. Your allies are barred from joining you. 
```

Joined Instances (Group)
```
2017.02.25 17:34:24 : You have joined the Smoldering Fire Temple region channel. 
```

Cities/Towns/Areas Travelled to
```
2017.02.25 08:51:15 : You have joined the Kaisinel Academy region channel. 
2017.02.25 08:51:15 : You have joined the Kaisinel Academy trade channel. 
2017.02.25 08:51:32 : You have joined the Sanctum region channel. 
2017.02.25 08:51:32 : You have joined the Sanctum trade channel. 
2017.02.25 09:13:07 : You have joined the Kaisinel Academy region channel. 
2017.02.25 09:13:07 : You have joined the Kaisinel Academy trade channel. 
2017.02.25 09:13:39 : You have joined the Iluma region channel. 
2017.02.25 09:13:39 : You have joined the Iluma trade channel. 
2017.02.25 09:14:39 : You have joined the Reshanta region channel. 
2017.02.25 09:14:40 : You have joined the Reshanta trade channel. 
2017.02.25 09:15:25 : You have joined the Verteron region channel. 
2017.02.25 09:15:25 : You have joined the Verteron trade channel. 
2017.02.25 09:15:58 : You have joined the Reshanta region channel. 
2017.02.25 09:15:58 : You have joined the Reshanta trade channel. 
2017.02.25 09:30:53 : You have joined the Cygnea region channel. 
2017.02.25 09:30:53 : You have joined the Cygnea trade channel. 
2017.02.25 15:25:43 : You have joined the Sanctum region channel. 
2017.02.25 15:25:43 : You have joined the Sanctum trade channel. 
```

Number of times grouped with people
```
2017.02.24 22:04:06 : You have joined the group. 
2017.02.25 03:36:56 : You have joined the group. 
2017.02.25 05:34:08 : You have joined the group. 
2017.02.25 07:18:15 : You have joined the group. 
2017.02.25 16:21:00 : You have joined the group. 
2017.02.25 17:08:00 : You have joined the group. 
2017.02.25 17:09:25 : You have joined the group. 
```

Expenses
```
2017.03.14 21:42:59 : You spent 1,880,000 Kinah. 
```

Earnings
```
2017.02.24 17:39:39 : You have earned 150,660 Kinah. 
```

Purchases
```
2017.03.14 21:42:59 : You have purchased 20 [item:160001274;ver7;;;;]s. 
```