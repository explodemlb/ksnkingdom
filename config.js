//  ____  _           _    _                    _
// / ___|| | ___  ___| | _| |    ___   __ _  __| |
// \___ \| |/ _ \/ _ \ |/ / |   / _ \ / _` |/ _` |
//  ___) | |  __/  __/   <| |__| (_) | (_| | (_| |
// |____/|_|\___|\___|_|\_\_____\___/ \__,_|\__,_|
// version 2.18.0

// Loading screen language
//
// You can create or edit languages by
// editing/creating files in the languages folder
//
// Default available languages:
// "brazilian_portuguese"
// "english"
// "polish"
// "russian"
config.language = "english"

// Use an image for the logo instead of text
config.logo_use_image = true

// Image filename for the server logo
// (Place the image file in the images folder)
config.logo_image = "logo.png"

// Text to be shown on logo
config.logo_text = "Kaiser Networks KingdomRP"

// Use the server's name for the logo
config.logo_servername = false

// Center logo?
// "true" or "false"
config.logo_center = true

// Display current map and gamemode?
// "true" or "false"
config.logo_show_info = false

// Use a video for the background?
// Otherwise it will use images
// "true" or "false"
config.background_use_video = false

// Default available videos:
// "blue_rays.webm"
// "purple_blue_rays.webm"
// "green_rays.webm"
//
// You can add your own video backgrounds
// Just make sure they are using webm VP8 format
// (Place the video file in the backgrounds/videos folder)
config.background_video = "purple_blue_rays.webm"

// (Image-background only)
// Enable map-based background image?
// If enabled, the background will be an image based on the server current map
// You need to have a background image with the same name as the map
// Also, the image needs to be in .jpg format
// E.g: gm_flatgrass.jpg, gm_construct.jpg, rp_downtown_v4c_v2.jpg
// "true" or "false"
config.background_map_based = false

// (Image-background only)
// Place one or more images
// Multiple images will automatically shuffle between them
// (Place the image files in the backgrounds/images folder)
config.background_images = [
	"1.jpg",
	"2.jpg",
	"3.jpg",
	"4.jpg",
	"5.jpg",
	"6.jpg",
	"7.jpg",
	"8.jpg",
	"9.jpg",
	"10.jpg",
	"11.jpg",
	"12.jpg",
	"13.jpg",
	"14.jpg",
	"15.jpg",
]

// (Image-background only)
// Random background images order?
// "true" or "false"
config.background_images_random_order = true

// (Image-background only)
// Delay between background images changes
// in milliseconds
config.background_images_duration = 5000

// (Image-background only)
// Image background fade duration
// in milliseconds
config.background_images_fade_duration = 2000

// Enable background overlay?
// "true" or "false"
config.background_overlay = true

// Background darkening amount
// 0 for none (0%), 100 for pitch black (100%)
config.background_darkening = 30

// Play music during the loading screen?
// "true" or "false"
config.music_enable = true

// Display current music name?
// "true" or "false"
config.music_show = true

// Music playlist
// Add as many youtube ids/urls or audio files you want
// (YouTube only works on Chromium beta)
// (Use ogg files for compatibility with default Gmod)
// (Place the audio files in the music folder)
config.music_playlist = [
	{
		name: "Kingdom of Bards",
		youtube: "https://www.youtube.com/watch?v=aMqOkmDoMFQ",
	},
	{
		name: "Dragon Empress",
		youtube: "https://www.youtube.com/watch?v=6gtAZIZQCuw",
	},
	{
		name: "Northwind",
		youtube: "https://www.youtube.com/watch?v=h_3QdRkwyiQ",
	},
	{
		name: "Dance with Dragons",
		youtube: "https://www.youtube.com/watch?v=eV1xumzX8dE",
	},
	{
		name: "Spirit of the WIld",
		youtube: "https://www.youtube.com/watch?v=g-jGHbkM8e4",
	},
	{
		name: "The Wolf and the Moon",
		youtube: "https://www.youtube.com/watch?v=HEf_xrgmuRI",
	},
	{
		name: "The Wolf and the Moon",
		youtube: "https://www.youtube.com/watch?v=SHs57gSBw6s",
	},
	{
		name: "Winterwolf",
		youtube: "https://www.youtube.com/watch?v=U62YkXZNs8M",
	},
	{
		name: "Rise of a Kingdom",
		youtube: "https://www.youtube.com/watch?v=ADzazbh1WG0",
	},
	{
		name: "For the King",
		youtube: "https://www.youtube.com/watch?v=59Ri26PIOLs",
	},
	{
		name: "Wolf Blood",
		youtube: "https://www.youtube.com/watch?v=06H_6oI4EK4",
	},
	{
		name: "March of the Horde",
		youtube: "https://www.youtube.com/watch?v=fxky3Aodjqc",
	},
	{
		name: "March of the Horde",
		youtube: "https://www.youtube.com/watch?v=fxky3Aodjqc",
	},
	{
		name: "Dwarven Forge",
		youtube: "https://www.youtube.com/watch?v=qXJCdiCTlLI",
	},
]

// Random music order?
// "true" or "false"
config.music_random_order = true

// Music volume
// Choose a value between 0 (quietest) and 100 (loudest)
config.music_volume = 5

// Use Gmod volume for the music instead of manual volume
config.music_gmod_volume = true

// Enable custom messages?
// "true" or "false"
config.messages_enable = true

// Enter your custom messages below
config.messages_list = [
	"Please use Garrys Mod Beta X64 - Chromium to load in and have a better experience!",
	"Subscribe to the workshop to load in faster! https://steamcommunity.com/sharedfiles/filedetails/?id=2437917324",
	"Experience KingdomRP like never before!",
	"House Leon, House Draco, House Dague, or the Beings? Who will you join?",
	"Our temprorary site is KaiserNetworks.mistforums.com",
	"Join our Discord: https://discordapp.com/invite/WX3mJyc",
]

// Random message order?
// "true" or "false"
config.messages_random_order = false

// Delay between message changes
// in milliseconds
config.messages_delay = 10000

// Messages fade duration
// in milliseconds
config.messages_fade_duration = 1000

// Show errors inside Garry's Mod?
// Can be useful for finding errors
// "true" or "false"
config.errors_show_ingame = true
