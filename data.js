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
// Fields:
//   title      (string)  — operation name
//   type       (string)  — BGS | COMBAT | LOGISTICS | SCIENCE | CRIMINAL | OTHER
//   state      (string)  — "ONGOING" | "COMPLETED"  (COMPLETED → Archived tab)
//   importance (number)  — 1 = Critical (red badge), 2 = High (orange), 3 = Routine (cyan)
//   desc       (string)  — instructions (HTML allowed)
//   faction    (string)  — target or allied minor faction (optional)
//   location   (string)  — target system or station (optional)
//   contact    (string)  — CMDR managing the operation (optional)
//   expires    (string)  — deadline note, e.g. "Next server tick" (optional)
//
// PROGRESS TRACKING (optional object):
//   source        — "edsm_faction" for live API pull, or "manual"
//   target        — the goal value (number)
//   unit          — label shown next to numbers, e.g. "%" or " Kills"
//   lowerIsBetter — true if driving the number DOWN (e.g. forcing a retreat)
//   current       — required if source is "manual"; update this as progress is made
//   system        — required if source is "edsm_faction"; system name to query
//   faction       — required if source is "edsm_faction"; exact faction name
//   start         — optional; if provided, bar measures delta from start→target
//                   instead of 0→target (Type A bar). Omit for threshold widget (Type B).
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
// Fields:
//   title        (string) — event name
//   utcTimestamp (string) — ISO 8601 UTC datetime: "YYYY-MM-DDTHH:MM:SSZ"
//                           Displayed as GST (+1286 years) AND auto-converted to viewer's local time.
//   type         (string) — determines badge color:
//                           RED:    PVP | COMBAT | AX | THARGOID | CZ | BOUNTY
//                           GREEN:  MINING | HAULING | TRADE | RESCUE | LOGISTICS | SALVAGE
//                           PURPLE: RACING | SOCIAL | MEETUP | TRAINING | CQC
//                           ORANGE: BGS | ELECTION | WAR | EXPANSION
//                           CYAN:   EXPLORATION | EXOBIOLOGY | EXPEDITION | SCIENCE | GUARDIAN
//   desc         (string) — details and instructions (HTML allowed)
//   location     (string) — target system, station, or planetary body (optional)
//   requirements (string) — ship builds, SRVs, or gear needed (optional)
//   comms        (string) — Discord voice channel or comms frequency (optional)
//   duration     (string) — estimated length, e.g. "2 Hours" (optional)
//   contact      (string) — CMDR hosting the event (optional)
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
