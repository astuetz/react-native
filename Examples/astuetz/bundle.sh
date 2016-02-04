
function main {
	mkdir -p './generated'
	react-native bundle --platform android --dev false --entry-file './index.android.js' --bundle-output './generated/astuetz.bundle' --assets-dest './generated/' 
	adb push ./generated /sdcard/astuetz/
}

main