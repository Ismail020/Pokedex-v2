export function getForm(pokemonName) {
    if (pokemonName.includes("-single-strike-gmax"))
        return "Single Strike Gigantamax";
    if (pokemonName.includes("-rapid-strike-gmax"))
        return "Rapid Strike Gigantamax";
    if (pokemonName.includes("-amped-gmax")) return "Amped Gigantamax";
    if (pokemonName.includes("-low-key-gmax")) return "Low Key Gigantamax";
    if (pokemonName.includes("gmax")) return "Gigantamax";
    if (pokemonName.includes("hisui")) return "Hisuian";
    if (pokemonName.includes("mega")) {
        if (pokemonName.includes("-x")) return "Mega X";
        if (pokemonName.includes("-y")) return "Mega Y";
        return "Mega";
    }
    if (pokemonName.includes("-original-cap")) return "Original Cap";
    if (pokemonName.includes("-hoenn-cap")) return "Hoenn Cap";
    if (pokemonName.includes("-sinnoh-cap")) return "Sinnoh Cap";
    if (pokemonName.includes("-unova-cap")) return "Unova Cap";
    if (pokemonName.includes("-kalos-cap")) return "Kalos Cap";
    if (pokemonName.includes("-alola-cap")) return "Alola Cap";
    if (pokemonName.includes("-partner-cap")) return "Partner Cap";
    if (pokemonName.includes("-world-cap")) return "World Cap";
    if (pokemonName.includes("alola")) {
        if (pokemonName.includes("-totem")) return "Alolan Totem";
        if (pokemonName.includes("-cap")) return "Alolan Cap";
        return "Alolan";
    }
    if (pokemonName.includes("galar")) {
        if (pokemonName.includes("-standard")) return "Galarian Standard";
        if (pokemonName.includes("-zen")) return "Galarian Zen";
        return "Galarian";
    }
    if (pokemonName.includes("totem")) {
        if (pokemonName.includes("-alola")) return "Alolan Totem";
        if (pokemonName.includes("-disguised")) return "Disguised Totem";
        if (pokemonName.includes("-busted")) return "Busted Totem";
        return "Totem";
    }
    if (pokemonName.includes("ultra")) return "Ultra";
    if (pokemonName.includes("primal")) return "Primal";
    if (pokemonName.includes("battle-bond")) return "Battle Bond";
    if (pokemonName.includes("original")) return "Original";
    if (pokemonName.includes("origin")) return "Origin";
    if (pokemonName.includes("-male")) return "Male";
    if (pokemonName.includes("-female")) return "Female";
    if (pokemonName.includes("-midday")) return "Midday";
    if (pokemonName.includes("-midnight")) return "Midnight";
    if (pokemonName.includes("-dusk")) return "Dusk";
    if (pokemonName.includes("-dawn")) return "Dawn";
    if (pokemonName.includes("-normal")) return "Normal";
    if (pokemonName.includes("-attack")) return "Attack";
    if (pokemonName.includes("-defense")) return "Defense";
    if (pokemonName.includes("-speed")) return "Speed";
    if (pokemonName.includes("-heat")) return "Heat";
    if (pokemonName.includes("-wash")) return "Wash";
    if (pokemonName.includes("-frost")) return "Frost";
    if (pokemonName.includes("-fan")) return "Fan";
    if (pokemonName.includes("-mow")) return "Mow";
    if (pokemonName.includes("-sunny")) return "Sunny";
    if (pokemonName.includes("-rainy")) return "Rainy";
    if (pokemonName.includes("-snowy")) return "Snowy";
    if (pokemonName.includes("-eternal")) return "Eternal";
    if (pokemonName.includes("-unbound")) return "Unbound";
    if (pokemonName.includes("-plant")) return "Plant";
    if (pokemonName.includes("-sandy")) return "Sandy";
    if (pokemonName.includes("-trash")) return "Trash";
    if (pokemonName.includes("-altered")) return "Altered";
    if (pokemonName.includes("-land")) return "Land";
    if (pokemonName.includes("-sky")) return "Sky";
    if (pokemonName.includes("-red-striped")) return "Red Striped";
    if (pokemonName.includes("-blue-striped")) return "Blue Striped";
    if (pokemonName.includes("-white-striped")) return "White Striped";
    if (pokemonName.includes("-standard")) return "Standard";
    if (pokemonName.includes("-zen")) return "Zen";
    if (pokemonName.includes("-incarnate")) return "Incarnate";
    if (pokemonName.includes("-therian")) return "Therian";
    if (pokemonName.includes("-ordinary")) return "Ordinary";
    if (pokemonName.includes("-resolute")) return "Resolute";
    if (pokemonName.includes("-aria")) return "Aria";
    if (pokemonName.includes("-pirouette")) return "Pirouette";
    if (pokemonName.includes("-shield")) return "Shield";
    if (pokemonName.includes("-blade")) return "Blade";
    if (pokemonName.includes("-average")) return "Average";
    if (pokemonName.includes("-small")) return "Small";
    if (pokemonName.includes("-large")) return "Large";
    if (pokemonName.includes("-super")) return "Super";
    if (pokemonName.includes("50")) {
        if (pokemonName.includes("-power-construct"))
            return "Power Construct 50";
        return "50";
    }
    if (pokemonName.includes("10")) {
        if (pokemonName.includes("-power-construct"))
            return "Power Construct 10";
        return "10";
    }
    if (pokemonName.includes("-complete")) return "Complete";
    if (pokemonName.includes("-baile")) return "Baile";
    if (pokemonName.includes("-pom-pom")) return "Pom-Pom";
    if (pokemonName.includes("-pau")) return "Pau";
    if (pokemonName.includes("-sensu")) return "Sensu";
    if (pokemonName.includes("-solo")) return "Solo";
    if (pokemonName.includes("-school")) return "School";
    if (pokemonName.includes("-red-meteor")) return "Red Meteor";
    if (pokemonName.includes("-orange-meteor")) return "Orange Meteor";
    if (pokemonName.includes("-yellow-meteor")) return "Yellow Meteor";
    if (pokemonName.includes("-green-meteor")) return "Green Meteor";
    if (pokemonName.includes("-blue-meteor")) return "Blue Meteor";
    if (pokemonName.includes("-indigo-meteor")) return "Indigo Meteor";
    if (pokemonName.includes("-violet-meteor")) return "Violet Meteor";
    if (pokemonName.includes("-green-plumage")) return "Green Plumage";
    if (pokemonName.includes("-blue-plumage")) return "Blue Plumage";
    if (pokemonName.includes("-yellow-plumage")) return "Yellow Plumage";
    if (pokemonName.includes("-white-plumage")) return "White Plumage";
    if (pokemonName.includes("-black")) return "Black";
    if (pokemonName.includes("-white")) return "White";
    if (pokemonName.includes("-red")) return "Red";
    if (pokemonName.includes("-orange")) return "Orange";
    if (pokemonName.includes("-yellow")) return "Yellow";
    if (pokemonName.includes("-green")) return "Green";
    if (pokemonName.includes("-blue")) return "Blue";
    if (pokemonName.includes("-indigo")) return "Indigo";
    if (pokemonName.includes("-violet")) return "Violet";
    if (pokemonName.includes("-disguised")) return "Disguised";
    if (pokemonName.includes("-busted")) return "Busted";
    if (pokemonName.includes("-koko")) return "Koko";
    if (pokemonName.includes("-lele")) return "Lele";
    if (pokemonName.includes("-bulu")) return "Bulu";
    if (pokemonName.includes("-fini")) return "Fini";
    if (pokemonName.includes("-ice")) return "Ice";
    if (pokemonName.includes("-dada")) return "Dada";
    if (pokemonName.includes("-shadow")) return "Shadow";
    if (pokemonName.includes("-noice")) return "No Ice";
    if (pokemonName.includes("-full-belly")) return "Full Belly";
    if (pokemonName.includes("-hangry")) return "Hangry";
    if (pokemonName.includes("-single-strike")) return "Single Strike";
    if (pokemonName.includes("-rapid-strike")) return "Rapid Strike";
    if (pokemonName.includes("-family-of-four")) return "Family of Four";
    if (pokemonName.includes("-family-of-three")) return "Family of Three";
    if (pokemonName.includes("-curly")) return "Curly";
    if (pokemonName.includes("-droopy")) return "Droopy";
    if (pokemonName.includes("-stretchy")) return "Stretchy";
    if (pokemonName.includes("-two-segment")) return "Two Segment";
    if (pokemonName.includes("-three-segment")) return "Three Segment";
    if (pokemonName.includes("-ash")) return "Ash";
    if (pokemonName.includes("-own-tempo")) return "Own Tempo";
    if (pokemonName.includes("-gulping")) return "Gulping";
    if (pokemonName.includes("-gorging")) return "Gorging";
    if (pokemonName.includes("-amped")) return "Amped";
    if (pokemonName.includes("-low-key")) return "Low Key";
    if (pokemonName.includes("-paldea-combat-breed"))
        return "Paldea Combat Breed";
    if (pokemonName.includes("-paldea-blaze-breed"))
        return "Paldea Blaze Breed";
    if (pokemonName.includes("-paldea-aqua-breed")) return "Paldea Aqua Breed";
    if (pokemonName.includes("-paldea")) return "Paldea";
    if (pokemonName.includes("-zero")) return "Zero";
    if (pokemonName.includes("-hero")) return "Hero";
    if (pokemonName.includes("-roaming")) return "Roaming";
    if (pokemonName.includes("-limited-build")) return "Limited Build";
    if (pokemonName.includes("-sprinting-build")) return "Sprinting Build";
    if (pokemonName.includes("-swimming-build")) return "Swimming Build";
    if (pokemonName.includes("-gliding-build")) return "Gliding Build";
    if (pokemonName.includes("-low-power-mode")) return "Low Power Mode";
    if (pokemonName.includes("-drive-mode")) return "Drive Mode";
    if (pokemonName.includes("-aquatic-mode")) return "Aquatic Mode";
    if (pokemonName.includes("-glide-mode")) return "Glide Mode";
    if (pokemonName.includes("-bloodmoon")) return "Bloodmoon";
    if (pokemonName.includes("-wellspring-mask")) return "Wellspring Mask";
    if (pokemonName.includes("-hearthflame-mask")) return "Hearthflame Mask";
    if (pokemonName.includes("-cornerstone-mask")) return "Cornerstone Mask";
    if (pokemonName.includes("-terastal")) return "Terastal";
    if (pokemonName.includes("-stellar")) return "Stellar";
    if (pokemonName.includes("-eternamax")) return "Eternamax";
    if (pokemonName.includes("-crowned")) return "Crowned";
    if (pokemonName.includes("-starter")) return "Starter";
    if (pokemonName.includes("-rock-star")) return "Rock Star";
    if (pokemonName.includes("-belle")) return "Belle";
    if (pokemonName.includes("-pop-star")) return "Pop Star";
    if (pokemonName.includes("-phd")) return "PhD";
    if (pokemonName.includes("-libre")) return "Libre";
    if (pokemonName.includes("-cosplay")) return "Cosplay";
    if (pokemonName.includes("-f")) return "Female";
    if (pokemonName.includes("-m")) return "Male";
    return "";
}

export function getBaseName(pokemonName) {
    const suffixes = [
        "-10-power-construct",
        "-10",
        "-50-power-construct",
        "-50",
        "-alola-cap",
        "-alola-totem",
        "-totem-alola",
        "-alola",
        "-altered",
        "-aria",
        "-ash",
        "-attack",
        "-aquatic-mode",
        "-average",
        "-baile",
        "-battle-bond",
        "-belle",
        "-blade",
        "-black",
        "-blue-meteor",
        "-blue-plumage",
        "-blue-striped",
        "-blue",
        "-bloodmoon",
        "-bulu",
        "-original-cap",
        "-original-cap",
        "-hoenn-cap",
        "-sinnoh-cap",
        "-unova-cap",
        "-kalos-cap",
        "-partner-cap",
        "-world-cap",
        "-cap",
        "-complete",
        "-cornerstone-mask",
        "-crowned",
        "-curly",
        "-dada",
        "-dawn",
        "-defense",
        "-drive-mode",
        "-droopy",
        "-dusk",
        "-eternal",
        "-eternamax",
        "-family-of-four",
        "-family-of-three",
        "-female",
        "-fini",
        "-full-belly",
        "-galar-standard",
        "-galar-zen",
        "-galar",
        "-gigantamax",
        "-glide-mode",
        "-gliding-build",
        "-green-meteor",
        "-green-plumage",
        "-green",
        "-gulping",
        "-low-key-gmax",
        "-amped-gmax",
        "-amped",
        "-rapid-strike-gmax",
        "-single-strike-gmax",
        "-gmax",
        "-gorging",
        "-hangry",
        "-hearthflame-mask",
        "-heat",
        "-hero",
        "-hisui",
        "-ice",
        "-incarnate",
        "-indigo-meteor",
        "-indigo",
        "-koko",
        "-land",
        "-large",
        "-lele",
        "-limited-build",
        "-low-key",
        "-low-power-mode",
        "-male",
        "-mega-x",
        "-mega-y",
        "-mega",
        "-midday",
        "-midnight",
        "-noice",
        "-normal",
        "-orange-meteor",
        "-orange",
        "-ordinary",
        "-original",
        "-origin",
        "-own-tempo",
        "-paldea-aqua-breed",
        "-paldea-blaze-breed",
        "-paldea-combat-breed",
        "-paldea",
        "-pau",
        "-pirouette",
        "-plant",
        "-pom-pom",
        "-power-construct",
        "-primal",
        "-rapid-strike",
        "-rainy",
        "-red-meteor",
        "-red-striped",
        "-red",
        "-resolute",
        "-roaming",
        "-sandy",
        "-sensu",
        "-school",
        "-shadow",
        "-shield",
        "-single-strike",
        "-sky",
        "-small",
        "-snowy",
        "-solo",
        "-standard",
        "-starter",
        "-stellar",
        "-stretchy",
        "-super",
        "-speed",
        "-sprinting-build",
        "-sunny",
        "-swimming-build",
        "-terastal",
        "-therian",
        "-three-segment",
        "-totem-busted",
        "-totem-disguised",
        "-trash",
        "-disguised",
        "-totem",
        "-busted-totem",
        "-busted",
        "-two-segment",
        "-ultra",
        "-unbound",
        "-violet-meteor",
        "-violet",
        "-wash",
        "-wellspring-mask",
        "-white-plumage",
        "-white-striped",
        "-white",
        "-yellow-meteor",
        "-yellow-plumage",
        "-yellow",
        "-zen",
        "-zero",
        "-rock-star",
        "-pop-star",
        "-phd",
        "-libre",
        "-cosplay",
        "-mow",
        "-m",
        "-fan",
        "-frost",
        "-f",
    ];

    let baseName = pokemonName;

    for (const suffix of suffixes) {
        if (baseName.includes(suffix)) {
            baseName = baseName.replace(suffix, "");
            break;
        }
    }

    return baseName;
}
