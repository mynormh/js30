# Lessons

- The way this works is we assign a random time for the mole to show up and also pick a random hole for it to show up. Once we have those two values we just add a class to the hole for the mole to show up and then after the random time we remove the class and run the code again for it to select a random hole and time again only if the time is not up yet.

- Since this is a game we could log a click from the code (CHEATING!) so we prevent this by using `e.isTrusted`, which will let us know if we fake a click.
