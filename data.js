// ─── WOSC SITE DATA ──────────────────────────────────────────────────────────
// Edit this file to add/update operations, events, and ticker messages.
// All pages load this file — no other edits needed.

// ─── COLONIZED SYSTEMS ───────────────────────────────────────────────────────
// Fields:
//   realName (string) — exact EDSM system name
//   nickName (string) — display name; set equal to realName if no nickname needed
const COLONIZED_SYSTEMS = [
    { realName: "Col 285 Sector CL-U b4-1", nickName: "Wasabi Orbital Home System" },
    { realName: "Col 285 Sector DL-U b4-1", nickName: "Traveler's Rest System"     },
    { realName: "Hyades Sector UJ-Z c8",    nickName: "Prospekt Mira"              },
    { realName: "Col 285 Sector AQ-U b4-1", nickName: "Col 285 Sector AQ-U b4-1"  },
];

// ─── OPERATIONS ──────────────────────────────────────────────────────────────
// HOW TO ADD AN OPERATION:
//   1. Copy one of the example entries below (or an existing op).
//   2. Paste it at the top of the OPERATIONS array (before other entries).
//   3. Fill in the fields listed below.
//   4. Set state: "ONGOING" — it will appear in the ONGOING OPS tab.
//   5. When complete, change state: "COMPLETED" — it moves to the ARCHIVED tab automatically.
//
// REQUIRED FIELDS:
//   title      (string)  — operation name
//   type       (string)  — BGS | COMBAT | LOGISTICS | SCIENCE | CRIMINAL | OTHER
//   state      (string)  — "ONGOING" | "COMPLETED"
//   importance (number)  — 1 = Critical (red badge), 2 = High (orange), 3 = Routine (cyan)
//   desc       (string)  — instructions shown on the card (HTML tags are allowed)
//
// OPTIONAL FIELDS:
//   faction    (string)  — target or allied minor faction
//   location   (string)  — target system or station
//   contact    (string)  — CMDR managing the operation
//   expires    (string)  — deadline note, e.g. "Next server tick"
//
// PROGRESS TRACKING  (add a "progress: { ... }" object to show a progress widget)
//
//   TYPE A — Progress bar from a start value to a target value
//   Use this when you want to track incremental movement (e.g. influence going from 30% to 50%).
//   Required: source, target, unit, lowerIsBetter, start
//   Manual:   also set current (update this number as progress is made)
//   EDSM:     also set system and faction (influence is fetched automatically each page load)
//
//     source        — "manual" or "edsm_faction"
//     target        — the goal value (number)
//     unit          — label appended to numbers, e.g. "%" or " Kills" (include leading space if needed)
//     lowerIsBetter — set true if pushing the value DOWN (e.g. forcing a retreat)
//     start         — the baseline value when the op started; bar fills from start → target
//     current       — (manual only) current value; update this as progress is made
//     system        — (edsm_faction only) exact EDSM system name to query
//     faction       — (edsm_faction only) exact faction name to look up in that system
//
//   TYPE B — Threshold sensor (no progress bar, just a "met / not met" readout)
//   Use this when you only care whether a target value has been reached, not how far along you are.
//   Omit "start" entirely — that is the only difference from Type A.
//
//     source, target, unit, lowerIsBetter — same as Type A
//     current / system / faction          — same source-dependent rules as Type A
const OPERATIONS = [
    // Example — remove or replace:
    // {
    //     title: "Operation Ironharvest",
    //     type: "BGS",
    //     state: "ONGOING",
    //     importance: 2,
    //     desc: "Boost WOSC influence in Wasabi Orbital System by running missions exclusively for our faction.",
    //     faction: "Wasabi Orbital Social Club",
    //     location: "Wasabi Orbital System",
    //     contact: "CMDR Wasabi",
    //     progress: { source: "edsm_faction", system: "Col 285 Sector CL-U b4-1", faction: "Wasabi Orbital Social Club", target: 50, unit: "%", lowerIsBetter: false, start: 30 },
    // },
    {
			title: "Colonization Push",
			type: "LOGISTICS",
			state: "ONGOING",
			importance: 3,
			desc: "Deliver required construction materials to various construction sites in our colonized systems.",
			location: "WOSC Colonized Systems",
			contact: "CMDR Vetaso",
			progress: { source: "manual", target: 13, unit: " Construction Sites", faction: "WOSC", current: 0, lowerIsBetter: false, start: 0 },
		},
		
		
		
		{
        title: "Exiling Kasho Purple Rats",
        type: "BGS",
        state: "COMPLETED",
        importance: 1,
        desc: "Drive the influence of the Kasho Purple Rats to 2.5% or less. Hunt them down openly or take missions from all other factions to lower their influence.",
        faction: "Kasho Purple Rats",
        location: "Col 285 Sector CL-U b4-1",
        contact: "CMDR Vetaso",
        progress: { source: "edsm_faction", system: "Col 285 Sector CL-U b4-1", faction: "Kasho Purple Rats", target: 2.5, unit: "%", lowerIsBetter: true },
    },

];

// ─── EVENTS ──────────────────────────────────────────────────────────────────
// HOW TO ADD AN EVENT:
//   1. Copy the example entry below (or an existing event).
//   2. Paste it inside the EVENTS array.
//   3. Set utcTimestamp to the event's real-world UTC start time in ISO 8601 format:
//        "YYYY-MM-DDTHH:MM:SSZ"  e.g. "2026-05-10T20:00:00Z"
//      The site automatically converts this to GST (UTC +1286 years) and the viewer's local time.
//   4. Events are sorted by date automatically — no need to order them manually.
//   5. Past events are not auto-removed; delete them from this file when they are no longer relevant.
//
// REQUIRED FIELDS:
//   title        (string) — event name
//   utcTimestamp (string) — UTC datetime: "YYYY-MM-DDTHH:MM:SSZ"
//   type         (string) — determines badge color:
//                           RED:    PVP | COMBAT | AX | THARGOID | CZ | BOUNTY
//                           GREEN:  MINING | HAULING | TRADE | RESCUE | LOGISTICS | SALVAGE
//                           PURPLE: RACING | SOCIAL | MEETUP | TRAINING | CQC
//                           ORANGE: BGS | ELECTION | WAR | EXPANSION
//                           CYAN:   EXPLORATION | EXOBIOLOGY | EXPEDITION | SCIENCE | GUARDIAN
//   desc         (string) — details and instructions (HTML tags are allowed)
//
// OPTIONAL FIELDS:
//   location     (string) — target system, station, or planetary body
//   requirements (string) — ship builds, SRVs, or gear needed
//   comms        (string) — Discord voice channel or comms frequency
//   duration     (string) — estimated length, e.g. "2 Hours"
//   contact      (string) — CMDR hosting the event
const EVENTS = [
    // Example — remove or replace:
    // {
    //     title: "Squadron Weekly Meetup",
    //     utcTimestamp: "2026-05-03T20:00:00Z",
    //     type: "MEETUP",
    //     desc: "Weekly roundup — ops debrief, upcoming objectives, open floor.",
    //     location: "Wasabi Station",
    //     comms: "Discord #voice-ops",
    //     duration: "1 Hour",
    // },
];

// ─── CUSTOM TICKER MESSAGES ───────────────────────────────────────────────────
// These appear in the scrolling intel ticker alongside the auto-generated items.
// Fields:
//   tag  (string) — short label shown in the orange box, e.g. 'ALERT' or 'INTEL'
//   text (string) — the message text
const TICKER_ITEMS = [
    // Example — remove or replace:
    // { tag: "ALERT", text: "Conflict detected in Wasabi Orbital System — report to CMDR lead for orders" },
    // { tag: "INFO",  text: "New colonization target under evaluation — stand by for briefing" },
    { tag: "COLONIZATION", text: "Carry on colonization and construction efforts in our various systems."},
    { tag: "SHIP", text: "The Lynx Highliner is now available for purchase at shipyards."}
];
