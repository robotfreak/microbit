// When the BBC micro:bit runs.
function onStart(  ) {
	microbit.calibrateCompass();
	microbit.say("Compass");		
	
	while(true) {
		
		globals.myNumber = microbit.bearing();

    	if (( globals.myNumber >= 0 ) && ( globals.myNumber < 45 )) {
			microbit.draw(Pattern("00100.00010.11111.00010.00100"));
		}
	
		else if (( globals.myNumber >= 45 ) && ( globals.myNumber < 135 )) {
			microbit.draw(Pattern("00100.00010.11111.00010.00100"));
		}
	
		else if (( globals.myNumber >= 135 ) && ( globals.myNumber < 215 )) {
			microbit.draw(Pattern("00100.00100.10101.01110.00100"));
		}
	
		else {
			microbit.draw(Pattern("00100.01000.11111.01000.00100"));
		}
	
	}
}
