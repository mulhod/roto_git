#!/usr/bin/python

import sys
import urllib


def main():
	# arguments will be the script and the path to the roto
	# directory
	if len(sys.argv) != 2:
		print("usage: python roto.py full/path/to/roto/" +
			"directory/ (e.g., /Users/melissalopez/Doc" +
			"uments/programming/roto/)")
		sys.exit(1)
	
	filelocation = sys.argv[1]
	
	# in case of different ways of typing it-- my script
	# needs the extra slash at the end
	if filelocation[-1] != '/':
		filelocation = filelocation + '/'

	# reads ESPN Standings page from url and saves it as a
	# file, then adds the JavaScript path to the end of it
	season_file = urllib.urlretrieve('http://games.espn.' +
		'go.com/flb/standings?leagueId=3694&seasonId=2015',
		str(filelocation + 'season.html'))
	
	read_file = open(str(filelocation + 'season.html'), 'r')
	read_html = read_file.readlines()
	read_html[-1] = "<script src='" + \
		"roto_script.js'></script>\n</html>"
	read_file.close()
	
	with open(str(filelocation + 'season.html'), 'w') as \
		write_file:
		write_file.write("".join(read_html))
	
	week_file = urllib.urlretrieve('http://games.espn.go' +
		'.com/flb/scoreboard?leagueId=3694&seasonId=2015',
		filelocation + 'week.html')
	
	read_file2 = open(str(filelocation + 'week.html'), 'r')
	read_html2 = read_file2.readlines()
	read_html2[-1] = "<script src='" + filelocation + \
		"roto_week_script.js'></script>\n</html>"
	read_file2.close()
	
	with open(str(filelocation + 'week.html'), 'w') as \
		write_file2:
		write_file2.write("".join(read_html2))


if __name__ == '__main__':
	main()